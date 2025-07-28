variable "gcp_project_id" {
  description = "The GCP project ID"
  type        = string
  default     = "smell-of-paris"
}

variable "gcp_region" {
  description = "Primary Google Cloud region for regional resources"
  type        = string
  default     = "europe-west1"
}

variable "gcp_multi_regions" {
  description = "List of Google Cloud regions for multi-region resources"
  type        = list(string)
  default     = ["nam-eur-asia1"]
}
