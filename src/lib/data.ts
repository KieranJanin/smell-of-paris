export interface Perfume {
  id: number;
  name: string;
  brand: string;
  collection: string;
  price: string;
  imageUrl: string;
  description: string;
  category: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Spicy' | 'Fruity' | 'Aromatic' | 'Chypre' | 'Citrus';
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  officialUrl?: string;
  fragranticaUrl?: string;
}

export const fragranceCategories = [
  'Floral',
  'Woody',
  'Oriental',
  'Fresh',
  'Spicy',
  'Fruity',
];

export const designerBrands = ['Chanel', 'Dior', 'Hermès'];
export const nicheBrands = [
  'Creed',
  'Maison Francis Kurkdjian',
  "Etat Libre d'Orange",
];

import { perfumes } from './perfumes';

export { perfumes };