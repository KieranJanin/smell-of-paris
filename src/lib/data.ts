
export interface Perfume {
  id: number;
  name: string;
  brand: string;
  collection: string;
  price: string;
  imageUrl: string;
  description: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: 'N°5',
    brand: 'Chanel',
    collection: 'Les Classiques',
    price: '$146.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'A timeless, legendary fragrance. A floral bouquet that is both abstract and mysterious.',
    notes: {
      top: ['Aldehydes', 'Ylang-Ylang', 'Neroli', 'Bergamot'],
      middle: ['Iris', 'Jasmine', 'Rose', 'Lily-of-the-Valley'],
      base: ['Sandalwood', 'Vetiver', 'Amber', 'Musk'],
    },
  },
  {
    id: 2,
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    collection: 'Les Masculins',
    price: '$115.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'An aromatic-woody fragrance with a captivating trail. A tribute to masculine freedom.',
    notes: {
      top: ['Grapefruit', 'Lemon', 'Mint', 'Pink Pepper'],
      middle: ['Ginger', 'Nutmeg', 'Jasmine'],
      base: ['Incense', 'Vetiver', 'Cedar', 'Sandalwood'],
    },
  },
  {
    id: 3,
    name: "J'adore",
    brand: 'Dior',
    collection: 'Les Féminins',
    price: '$135.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'A grand floral fragrance for women with a generous and well-balanced bouquet.',
    notes: {
      top: ['Ylang-Ylang', 'Turkish Rose'],
      middle: ['Jasmine Sambac', 'Tuberose'],
      base: ['Fruity Notes', 'Musk'],
    },
  },
  {
    id: 4,
    name: 'Sauvage',
    brand: 'Dior',
    collection: 'Les Masculins',
    price: '$104.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'A radical, fresh composition, dictated by a name that has the ring of a manifesto.',
    notes: {
      top: ['Calabrian Bergamot', 'Pepper'],
      middle: ['Sichuan Pepper', 'Lavender', 'Pink Pepper', 'Vetiver'],
      base: ['Ambroxan', 'Cedar', 'Labdanum'],
    },
  },
  {
    id: 5,
    name: 'Black Opium',
    brand: 'Yves Saint Laurent',
    collection: 'Opium',
    price: '$129.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'A glam rock fragrance full of mystery and energy, for an addictive and vibrant femininity.',
    notes: {
      top: ['Pink Pepper', 'Orange Blossom', 'Pear'],
      middle: ['Coffee', 'Jasmine', 'Bitter Almond', 'Licorice'],
      base: ['Vanilla', 'Patchouli', 'Cedar', 'Cashmere Wood'],
    },
  },
  {
    id: 6,
    name: 'Libre',
    brand: 'Yves Saint Laurent',
    collection: 'Libre',
    price: '$140.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'A bold and floral feminine fragrance. For a woman who lives by her own rules.',
    notes: {
      top: ['Lavender', 'Mandarin Orange', 'Black Currant', 'Petitgrain'],
      middle: ['Lavender', 'Orange Blossom', 'Jasmine'],
      base: ['Madagascar Vanilla', 'Musk', 'Cedar', 'Ambergris'],
    },
  },
  {
    id: 7,
    name: 'Acqua di Giò',
    brand: 'Giorgio Armani',
    collection: 'Acqua di Giò',
    price: '$98.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description:
      'The scent of freedom, full of wind and water. A perfect harmony of sweet and salty notes.',
    notes: {
      top: ['Lime', 'Lemon', 'Bergamot', 'Jasmine', 'Orange'],
      middle: ['Sea Notes', 'Jasmine', 'Calone', 'Peach'],
      base: ['White Musk', 'Cedar', 'Oakmoss', 'Patchouli'],
    },
  },
  {
    id: 8,
    name: 'Terre d\'Hermès',
    brand: 'Hermès',
    collection: 'Les Classiques',
    price: '$132.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A fragrance that connects man to his origins, to the sources of his creative power.',
    notes: {
      top: ['Orange', 'Grapefruit'],
      middle: ['Pepper', 'Pelargonium'],
      base: ['Patchouli', 'Cedar', 'Vetiver', 'Benzoin'],
    },
  },
  {
    id: 9,
    name: 'Twilly d\'Hermès',
    brand: 'Hermès',
    collection: 'Les Classiques',
    price: '$134.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'The scent of the Hermès girls, a daring fragrance woven with striking ginger and sensual tuberose.',
    notes: {
      top: ['Ginger', 'Bergamot', 'Bitter Orange'],
      middle: ['Tuberose', 'Jasmine', 'Orange Blossom'],
      base: ['Sandalwood', 'Vanilla'],
    },
  },
  {
    id: 10,
    name: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    collection: 'Modern Masterpieces',
    price: '$325.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'An eau de parfum born from the encounter between Maison Francis Kurkdjian and Baccarat, as a celebration of the 250th anniversary of the iconic crystal house.',
    notes: {
      top: ['Jasmine', 'Saffron'],
      middle: ['Amberwood', 'Ambergris'],
      base: ['Fir Resin', 'Cedar'],
    },
  },
  {
    id: 11,
    name: 'Gentle Fluidity Gold',
    brand: 'Maison Francis Kurkdjian',
    collection: 'The Wardrobe',
    price: '$225.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'Two eaux de parfum, two distinct olfactory silhouettes, using the same ingredients to express their full potential.',
    notes: {
      top: ['Juniper Berries', 'Nutmeg'],
      middle: ['Coriander Seed'],
      base: ['Musks', 'Ambery Woods', 'Vanilla'],
    },
  },
  {
    id: 12,
    name: 'Remarkable People',
    brand: 'Etat Libre d\'Orange',
    collection: 'The Orange Extraordinaire',
    price: '$159.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A fragrance for the exceptional, the unconventional. A celebration of those who break the mold.',
    notes: {
      top: ['Grapefruit', 'Champagne', 'Cardamom'],
      middle: ['Curry', 'Jasmine', 'Black Pepper'],
      base: ['Labdanum', 'Sandalwood', 'Lorenox'],
    },
  },
  {
    id: 13,
    name: 'I Am Trash - Les Fleurs du Déchet',
    brand: 'Etat Libre d\'Orange',
    collection: 'The Orange Extraordinaire',
    price: '$159.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'The most wanted fragrance from the end of the world. A perfume created from the unwanted, the discarded, the trash.',
    notes: {
      top: ['Apple Essence Upcycling', 'Bitter Orange', 'Green Tangerine'],
      middle: ['Rose Absolute', 'Iso E Super', 'Gariguette Strawberry'],
      base: ['Cedarwood Atlas', 'Sandalwood', 'Akigalawood'],
    },
  },
];
