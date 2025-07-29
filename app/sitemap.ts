import { MetadataRoute } from 'next';
import { perfumes, fragranceCategories, designerBrands, nicheBrands } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain

  // Static pages
  const staticRoutes = [
    '',
    '/brands',
    '/fragrances',
    '/contact',
    '/faq',
    '/shipping-returns',
    '/auth/login',
    '/auth/signup',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic brand pages
  const brandRoutes = [...designerBrands, ...nicheBrands].map((brand) => ({
    url: `${baseUrl}/brands/${brand.toLowerCase().replace(/ /g, '-')}`,
    lastModified: new Date(),
  }));

  // Dynamic category pages
  const categoryRoutes = fragranceCategories.map((category) => ({
    url: `${baseUrl}/fragrances/${category.toLowerCase()}`,
    lastModified: new Date(),
  }));
  
  // Dynamic perfume pages
  const perfumeRoutes = perfumes.map((perfume) => ({
    url: `${baseUrl}/perfumes/${perfume.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...brandRoutes, ...categoryRoutes, ...perfumeRoutes];
}
