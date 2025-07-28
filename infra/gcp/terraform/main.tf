# main.tf
#
# Terraform configuration for core Google Cloud Platform resources
# to support a highly fluid website developed with Firebase Studio.
# This setup provisions databases, caching, messaging, and security components
# that Cloud Functions for Firebase will interact with.
#
# Author: Gemini
# Date: 2025-07-24

# --- Provider Configuration ---
# Specifies the Google Cloud provider and the project to deploy resources into.
provider "google" {
  project = var.gcp_project_id
  region  = var.gcp_region # Default region for regional resources
}

# --- Enable Required Google Cloud APIs ---
# Ensure all necessary APIs are enabled for the services used.
resource "google_project_service" "enabled_apis" {
  for_each = toset([
    "compute.googleapis.com",              # For VPC, network peering (Memorystore)
    "spanner.googleapis.com",             # For Cloud Spanner
    "firestore.googleapis.com",           # For Firestore (already enabled by Firebase, but good to ensure)
    "redis.googleapis.com",               # For Memorystore (Redis)
    "pubsub.googleapis.com",              # For Cloud Pub/Sub
    "cloudbuild.googleapis.com",          # For Cloud Build (if used for CI/CD)
    "artifactregistry.googleapis.com",    # For Artifact Registry (if used for Cloud Functions container images)
    "logging.googleapis.com",             # For Cloud Logging
    "monitoring.googleapis.com",          # For Cloud Monitoring
    "cloudtrace.googleapis.com",          # For Cloud Trace
    "compute.googleapis.com",             # For Cloud Armor
    "secretmanager.googleapis.com",       # For Secret Manager
    "servicenetworking.googleapis.com",   # For Private Service Access (Memorystore)
  ])
  service            = each.key
  disable_on_destroy = false # Set to true if you want to disable APIs on `terraform destroy`
}

# --- Networking for Private Service Access (e.g., Memorystore) ---
# Create a custom VPC network.
resource "google_compute_network" "vpc_network" {
  name                    = "firebase-fluid-website-vpc"
  auto_create_subnetworks = false
  routing_mode            = "GLOBAL"
  depends_on = [
    google_project_service.enabled_apis["compute.googleapis.com"]
  ]
}

# Create a subnet within the VPC.
resource "google_compute_subnetwork" "default_subnet" {
  name          = "firebase-fluid-website-subnet-${var.gcp_region}"
  ip_cidr_range = "10.0.0.0/20"
  region        = var.gcp_region
  network       = google_compute_network.vpc_network.id
  depends_on = [
    google_compute_network.vpc_network
  ]
}

# Reserve an IP range for Private Service Access (for Memorystore and potentially other managed services)
resource "google_compute_global_address" "private_ip_alloc" {
  name          = "firebase-fluid-website-private-ip-alloc"
  purpose       = "VPC_PEERING"
  address_type  = "INTERNAL"
  prefix_length = 20 # Adjust prefix length based on your needs (e.g., /16 for more IPs)
  network       = google_compute_network.vpc_network.id
  depends_on = [
    google_compute_network.vpc_network
  ]
}

# Create a private connection to Google's service network
resource "google_service_networking_connection" "private_vpc_connection" {
  network                 = google_compute_network.vpc_network.id
  service                 = "servicenetworking.googleapis.com"
  reserved_peering_ranges = [google_compute_global_address.private_ip_alloc.name]
  depends_on = [
    google_project_service.enabled_apis["servicenetworking.googleapis.com"],
    google_compute_global_address.private_ip_alloc
  ]
}

# --- Service Accounts and IAM for Cloud Functions ---
# Cloud Functions for Firebase run under a default service account (or one you specify).
# We'll grant this default account permissions to access the GCP resources.
# The default service account for Cloud Functions is PROJECT_ID@appspot.gserviceaccount.com
# For more granular control, you could create a dedicated service account and assign it to your functions.

data "google_project" "project" {
  project_id = var.gcp_project_id
  depends_on = [
    google_project_service.enabled_apis
  ]
}

resource "google_project_iam_member" "cloud_functions_sa_permissions" {
  for_each = toset([
    "roles/spanner.databaseUser",         # For Cloud Spanner access
    "roles/datastore.user",               # For Firestore access (if not using Firebase Admin SDK with default permissions)
    "roles/redis.client",                 # For Memorystore (Redis) access
    "roles/pubsub.editor",                # For publishing/subscribing to Pub/Sub
    "roles/secretmanager.secretAccessor", # For accessing secrets
    "roles/logging.logWriter",            # For writing logs
    "roles/monitoring.metricWriter",      # For writing metrics
    "roles/cloudtrace.agent",             # For sending traces
  ])
  project = var.gcp_project_id
  role    = each.key
  member  = "serviceAccount:${data.google_project.project.number}@cloudbuild.gserviceaccount.com" # Default Cloud Build SA for functions deployment
  # Note: The default Cloud Functions runtime service account is PROJECT_ID@appspot.gserviceaccount.com.
  # If you explicitly set a custom SA for your functions, use that email here.
  # For simplicity, we're using the Cloud Build SA, which is often used during Firebase Functions deployment.
}

# --- Databases ---

# Cloud Spanner Instance (Globally Distributed Relational Database)
resource "google_spanner_instance" "main_spanner_instance" {
  name         = "firebase-fluid-spanner"
  config       = var.gcp_multi_regions[0] # e.g., "nam-eur-asia1"
  display_name = "Firebase Fluid Website Spanner Instance"
  node_count   = 1 # Start with 1 node, scale as needed
  depends_on = [
    google_project_service.enabled_apis["spanner.googleapis.com"]
  ]
}

# Cloud Spanner Database
resource "google_spanner_database" "main_spanner_db" {
  instance = google_spanner_instance.main_spanner_instance.name
  name     = "website-db"
  ddl      = [
    "CREATE TABLE Users (UserId STRING(36) NOT NULL, Email STRING(255), CreatedAt TIMESTAMP) PRIMARY KEY (UserId)",
    "CREATE TABLE Products (ProductId STRING(36) NOT NULL, Name STRING(255), Price NUMERIC, Description STRING(MAX)) PRIMARY KEY (ProductId)",
    # Add more DDL statements as needed for your application schema
  ]
  depends_on = [
    google_spanner_instance.main_spanner_instance
  ]
}

# Firestore (Native Mode) - Enabled at the project level by Firebase.
# No direct Terraform resource for "creating" Firestore, just ensuring the API is enabled.
# Data models and collections are defined within your application code or via client libraries.

# Memorystore for Redis (In-memory Caching)
resource "google_redis_instance" "redis_cache" {
  name           = "firebase-fluid-redis"
  tier           = "BASIC" # Or "STANDARD_HA" for high availability
  memory_size_gb = 1 # Adjust size based on caching needs
  region         = var.gcp_region
  connect_mode   = "DIRECT_PEERING" # Connects via the VPC peering
  auth_enabled   = true # Enable authentication for security

  # Ensure the Memorystore instance is created in the VPC and connected via private service access
  authorized_network = google_compute_network.vpc_network.id
  reserved_ip_range  = google_compute_global_address.private_ip_alloc.name

  depends_on = [
    google_project_service.enabled_apis["redis.googleapis.com"],
    google_service_networking_connection.private_vpc_connection, # Ensure peering is established
  ]
}

# --- Messaging (Cloud Pub/Sub) ---

# Pub/Sub Topic for events (e.g., new order, user registration)
resource "google_pubsub_topic" "main_events_topic" {
  name = "main-website-events"
  depends_on = [
    google_project_service.enabled_apis["pubsub.googleapis.com"]
  ]
}

# Pub/Sub Subscription for a service to consume messages from the topic
resource "google_pubsub_subscription" "order_processing_sub" {
  name  = "order-processing-subscription"
  topic = google_pubsub_topic.main_events_topic.name
  ack_deadline_seconds = 10 # Time for subscriber to acknowledge message
  message_retention_duration = "604800s" # 7 days
  depends_on = [
    google_pubsub_topic.main_events_topic
  ]
}

# --- Security ---

# Cloud Armor Policy (Basic WAF and DDoS protection)
# This policy can be attached to Cloud Functions if they are exposed via HTTP(S) Load Balancer
# or directly via HTTPS endpoints, though Firebase Hosting handles much of this.
# For simplicity, we'll create the policy; attaching it might require manual steps
# or more advanced Terraform if not directly integrated with a load balancer.
resource "google_compute_security_policy" "cloud_armor_policy" {
  name        = "firebase-fluid-website-armor-policy"
  description = "Cloud Armor policy for Firebase-backed website"

  rule {
    action   = "allow"
    priority = "1000"
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["0.0.0.0/0"] # Allow all traffic by default
      }
    }
    description = "Allow all incoming traffic"
  }

  # Example: Block specific IP address (replace with actual malicious IPs if needed)
  /*
  rule {
    action   = "deny(403)"
    priority = "10"
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["192.0.2.0/24"] # Example IP range to block
      }
    }
    description = "Block known malicious IP range"
  }
  */
  depends_on = [
    google_project_service.enabled_apis["compute.googleapis.com"]
  ]
}

# Secret Manager (for storing sensitive data like API keys, database credentials)
resource "google_secret_manager_secret" "db_password" {
  secret_id = "db-password"
  replication {
    auto {} # Automatically replicates the secret
  }
  depends_on = [
    google_project_service.enabled_apis["secretmanager.googleapis.com"]
  ]
}

# Add a secret version (e.g., initial password)
resource "google_secret_manager_secret_version" "db_password_version" {
  secret = google_secret_manager_secret.db_password.id
  secret_data = "super-secret-db-password-change-me" # !!! REPLACE WITH A REAL, SECURE PASSWORD !!!
  depends_on = [
    google_secret_manager_secret.db_password
  ]
}

# --- Outputs ---
# Output important information after deployment.
output "spanner_instance_name" {
  description = "Name of the Cloud Spanner instance"
  value       = google_spanner_instance.main_spanner_instance.name
}

output "redis_instance_host" {
  description = "Host of the Memorystore Redis instance"
  value       = google_redis_instance.redis_cache.host
}

output "main_pubsub_topic_name" {
  description = "Name of the main Pub/Sub topic"
  value       = google_pubsub_topic.main_events_topic.name
}

output "db_password_secret_id" {
  description = "ID of the Secret Manager secret for database password"
  value       = google_secret_manager_secret.db_password.secret_id
}

output "cloud_functions_default_service_account_email" {
  description = "The email of the default service account used by Cloud Functions"
  value       = "serviceAccount:${data.google_project.project.number}@appspot.gserviceaccount.com"
}

output "cloud_armor_policy_name" {
  description = "Name of the Cloud Armor security policy"
  value       = google_compute_security_policy.cloud_armor_policy.name
}
