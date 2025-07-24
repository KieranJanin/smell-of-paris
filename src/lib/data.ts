
export interface Perfume {
  id: number;
  name: string;
  brand: string;
  collection: string;
  price: string;
  imageUrl: string;
  description: string;
  category: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Spicy' | 'Fruity';
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
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

export const perfumes: Perfume[] = [
  // Chanel
  {
    id: 1,
    name: 'N°5',
    brand: 'Chanel',
    collection: 'Iconic Lines',
    price: '$146.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A timeless, legendary fragrance. A floral bouquet that is both abstract and mysterious.',
    category: 'Floral',
    notes: { top: ['Aldehydes', 'Ylang-Ylang'], middle: ['Iris', 'Jasmine'], base: ['Sandalwood', 'Vetiver'] },
  },
  {
    id: 2,
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    collection: 'Iconic Lines',
    price: '$115.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'An aromatic-woody fragrance with a captivating trail. A tribute to masculine freedom.',
    category: 'Woody',
    notes: { top: ['Grapefruit', 'Lemon'], middle: ['Ginger', 'Nutmeg'], base: ['Incense', 'Cedar'] },
  },
  {
    id: 101,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$146.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A sparkling, bold floral-woody fragrance that recalls a daring young Coco Chanel.",
    category: "Oriental",
    notes: { top: ["Orange", "Bergamot"], middle: ["Rose", "Jasmine"], base: ["Patchouli", "Vetiver"] }
  },
  {
    id: 102,
    name: "Chance Eau Tendre",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$125.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A delicate and unexpectedly fruity-floral fragrance for women.",
    category: "Fruity",
    notes: { top: ["Quince", "Grapefruit"], middle: ["Hyacinth", "Jasmine"], base: ["Musk", "Iris"] }
  },
  {
    id: 103,
    name: "Gabrielle Chanel",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$165.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A solar flower based on a bouquet of 4 white flowers.",
    category: "Floral",
    notes: { top: ["Grapefruit", "Mandarin Orange"], middle: ["Orange Blossom", "Jasmine"], base: ["Sandalwood", "Musk"] }
  },
  {
    id: 104,
    name: "Allure Homme Sport",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$110.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A casual, brisk fragrance spiked with notes of citrus and cedar.",
    category: "Fresh",
    notes: { top: ["Orange", "Sea Notes"], middle: ["Pepper", "Neroli"], base: ["Tonka Bean", "Vetiver"] }
  },
  {
    id: 105,
    name: "Coromandel",
    brand: "Chanel",
    collection: "Les Exclusifs de Chanel",
    price: "$350.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "An intense ambery fragrance with notes of patchouli, frankincense and benzoin.",
    category: "Oriental",
    notes: { top: ["Citrus", "Bitter Orange"], middle: ["Rose", "Jasmine", "Patchouli"], base: ["Benzoin", "Olibanum", "Woody Notes"] }
  },
  {
    id: 106,
    name: "Sycomore",
    brand: "Chanel",
    collection: "Les Exclusifs de Chanel",
    price: "$350.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A noble, powerful and smoky vetiver-centered fragrance.",
    category: "Woody",
    notes: { top: ["Spices", "Pink Pepper"], middle: ["Vetiver", "Violet"], base: ["Sandalwood", "Tobacco"] }
  },
  {
    id: 107,
    name: "Paris-Deauville",
    brand: "Chanel",
    collection: "Les Eaux de Chanel",
    price: "$140.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "Aromatic, spicy and woody, a scent of the open air.",
    category: "Fresh",
    notes: { top: ["Orange Peel", "Basil"], middle: ["Rose", "Jasmine"], base: ["Patchouli", "Woody Notes"] }
  },

  // Dior
  {
    id: 3,
    name: "J'adore",
    brand: 'Dior',
    collection: 'Iconic Lines',
    price: '$135.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A grand floral fragrance for women with a generous and well-balanced bouquet.',
    category: 'Floral',
    notes: { top: ['Ylang-Ylang', 'Turkish Rose'], middle: ['Jasmine Sambac', 'Tuberose'], base: ['Fruity Notes', 'Musk'] },
  },
  {
    id: 4,
    name: 'Sauvage',
    brand: 'Dior',
    collection: 'Iconic Lines',
    price: '$104.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A radical, fresh composition, dictated by a name that has the ring of a manifesto.',
    category: 'Fresh',
    notes: { top: ['Calabrian Bergamot', 'Pepper'], middle: ['Sichuan Pepper', 'Lavender'], base: ['Ambroxan', 'Cedar'] },
  },
  {
    id: 201,
    name: "Miss Dior",
    brand: "Dior",
    collection: "Iconic Lines",
    price: "$130.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A floral declaration of love, a sensual and elegant scent.",
    category: "Floral",
    notes: { top: ["Iris", "Peony", "Lily-of-the-Valley"], middle: ["Apricot", "Rose", "Peach"], base: ["Vanilla", "Musk", "Sandalwood"] }
  },
  {
    id: 202,
    name: "Dior Homme",
    brand: "Dior",
    collection: "Iconic Lines",
    price: "$105.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A woody floral fragrance, the olfactory signature of the Dior man.",
    category: "Woody",
    notes: { top: ["Lavender", "Bergamot"], middle: ["Iris", "Cacao"], base: ["Vetiver", "Leather"] }
  },
  {
    id: 203,
    name: "Hypnotic Poison",
    brand: "Dior",
    collection: "Iconic Lines",
    price: "$118.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A magnetic and sensual fragrance, an oriental vanilla.",
    category: "Oriental",
    notes: { top: ["Apricot", "Plum", "Coconut"], middle: ["Tuberose", "Jasmine", "Rose"], base: ["Sandalwood", "Vanilla", "Almond"] }
  },
  {
    id: 204,
    name: "Fahrenheit",
    brand: "Dior",
    collection: "Iconic Lines",
    price: "$98.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A signature fragrance, both warm and cool, with a leather and violet accord.",
    category: "Spicy",
    notes: { top: ["Nutmeg Flower", "Lavender"], middle: ["Honeysuckle", "Sandalwood"], base: ["Leather", "Tonka Bean"] }
  },
  {
    id: 205,
    name: "Ambre Nuit",
    brand: "Dior",
    collection: "La Collection Privée",
    price: "$260.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "An ambery and floral fragrance that is both sensual and mysterious.",
    category: "Oriental",
    notes: { top: ["Bergamot", "Grapefruit"], middle: ["Turkish Rose", "Pink Pepper"], base: ["Amber", "Cistus"] }
  },
  {
    id: 206,
    name: "Gris Dior",
    brand: "Dior",
    collection: "La Collection Privée",
    price: "$260.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A chypre fragrance that is a subtle blend of woody and floral notes.",
    category: "Woody",
    notes: { top: ["Bergamot"], middle: ["Rose", "Jasmine"], base: ["Patchouli", "Oakmoss"] }
  },
  {
    id: 207,
    name: "Oud Ispahan",
    brand: "Dior",
    collection: "La Collection Privée",
    price: "$300.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A captivating oriental fragrance that evokes a journey into the heart of the Orient.",
    category: "Oriental",
    notes: { top: ["Labdanum"], middle: ["Rose", "Patchouli", "Saffron"], base: ["Oud", "Sandalwood", "Cedar"] }
  },
  
  // Hermès
  {
    id: 8,
    name: "Terre d'Hermès",
    brand: 'Hermès',
    collection: 'Signature Lines',
    price: '$132.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A fragrance that connects man to his origins, to the sources of his creative power.',
    category: 'Woody',
    notes: { top: ['Orange', 'Grapefruit'], middle: ['Pepper', 'Pelargonium'], base: ['Patchouli', 'Cedar'] },
  },
  {
    id: 9,
    name: "Twilly d'Hermès",
    brand: 'Hermès',
    collection: 'Signature Lines',
    price: '$134.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'The scent of the Hermès girls, a daring fragrance woven with striking ginger and sensual tuberose.',
    category: 'Spicy',
    notes: { top: ['Ginger', 'Bergamot'], middle: ['Tuberose', 'Jasmine'], base: ['Sandalwood', 'Vanilla'] },
  },
  {
    id: 301,
    name: "Eau des Merveilles",
    brand: "Hermès",
    collection: "Signature Lines",
    price: "$145.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A surprising and magical woody-amber fragrance for women.",
    category: "Woody",
    notes: { top: ["Orange", "Elemi resin"], middle: ["Amber", "Pepper"], base: ["Fir", "Oakmoss", "Cedar"] }
  },
  {
    id: 302,
    name: "Un Jardin sur le Nil",
    brand: "Hermès",
    collection: "Les Parfums-Jardins",
    price: "$112.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A green and woody scent, a stroll in the island-gardens of the Nile at Aswan.",
    category: "Fresh",
    notes: { top: ["Green Mango", "Grapefruit"], middle: ["Lotus", "Calamus"], base: ["Sycamore", "Incense"] }
  },
  {
    id: 303,
    name: "Voyage d'Hermès",
    brand: "Hermès",
    collection: "Les Colognes Hermès",
    price: "$153.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A lively and reassuring fragrance, new and familiar, a woody fresh, ambery scent.",
    category: "Woody",
    notes: { top: ["Cardamom", "Lemon"], middle: ["Tea", "Rose"], base: ["Musk", "Woody Notes"] }
  },
  {
    id: 304,
    name: "Ambre Narguilé",
    brand: "Hermès",
    collection: "Hermessence Collection",
    price: "$280.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A warm and sensual fragrance, an ode to amber, honey, and oriental tobacco.",
    category: "Oriental",
    notes: { top: ["Cinnamon", "Rum"], middle: ["Honey", "Caramel"], base: ["Tonka Bean", "Vanilla", "Tobacco"] }
  },

  // Maison Francis Kurkdjian
  {
    id: 10,
    name: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    collection: 'Modern Masterpieces',
    price: '$325.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'An eau de parfum born from the encounter between Maison Francis Kurkdjian and Baccarat.',
    category: 'Oriental',
    notes: { top: ['Jasmine', 'Saffron'], middle: ['Amberwood', 'Ambergris'], base: ['Fir Resin', 'Cedar'] },
  },
  {
    id: 11,
    name: 'Gentle Fluidity Gold',
    brand: 'Maison Francis Kurkdjian',
    collection: 'Gentle Fluidity',
    price: '$225.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'Two eaux de parfum, two distinct olfactory silhouettes, using the same ingredients.',
    category: 'Oriental',
    notes: { top: ['Juniper Berries', 'Nutmeg'], middle: ['Coriander Seed'], base: ['Musks', 'Ambery Woods', 'Vanilla'] },
  },
  {
    id: 401,
    name: "Oud Satin Mood",
    brand: "Maison Francis Kurkdjian",
    collection: "Oud Mood Collection",
    price: "$300.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A rich and elegant fragrance that weaves together oud from Laos, rose absolute from Turkey, and vanilla.",
    category: "Oriental",
    notes: { top: ["Violet"], middle: ["Laotian Oud", "Bulgarian Rose"], base: ["Vanilla", "Amber"] }
  },
  {
    id: 402,
    name: "Aqua Universalis",
    brand: "Maison Francis Kurkdjian",
    collection: "Aqua",
    price: "$205.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A fresh and luminous eau de toilette, a scent for everything and everyone.",
    category: "Fresh",
    notes: { top: ["Lemon", "Bergamot"], middle: ["White Flowers", "Orange"], base: ["Musk", "Woody Notes"] }
  },
  {
    id: 403,
    name: "Grand Soir",
    brand: "Maison Francis Kurkdjian",
    collection: "Modern Masterpieces",
    price: "$240.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A warm, ambery fragrance that evokes the magic of a Parisian evening.",
    category: "Oriental",
    notes: { top: ["Labdanum", "Cistus"], middle: ["Benzoin"], base: ["Amber", "Vanilla", "Tonka Bean"] }
  },
  {
    id: 404,
    name: "À La Rose",
    brand: "Maison Francis Kurkdjian",
    collection: "Modern Masterpieces",
    price: "$275.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A tribute to femininity, a declaration of love for all women captured in a fragrance.",
    category: "Floral",
    notes: { top: ["Calabrian Bergamot", "California Orange"], middle: ["Bulgarian Rose", "Violet", "Magnolia"], base: ["Cedar", "Musk"] }
  },
  
  // Creed
  {
    id: 7,
    name: 'Aventus',
    brand: 'Creed',
    collection: 'Royal Exclusives',
    price: '$495.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A sophisticated blend for individuals who savor a life well-lived.',
    category: 'Fruity',
    notes: { top: ['Pineapple', 'Bergamot'], middle: ['Birch', 'Patchouli'], base: ['Musk', 'Oakmoss'] },
  },
  {
    id: 501,
    name: "Green Irish Tweed",
    brand: "Creed",
    collection: "Royal Exclusives",
    price: "$470.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A classic, as the name suggests, evoking the lush greenery of the Emerald Isle.",
    category: "Fresh",
    notes: { top: ["Lemon", "Verbena"], middle: ["Iris", "Violet Leaf"], base: ["Ambergris", "Sandalwood"] }
  },
  {
    id: 502,
    name: "Silver Mountain Water",
    brand: "Creed",
    collection: "Royal Exclusives",
    price: "$470.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A fresh and contemporary scent, inspired by the crispness of mountain air and the purity of cascading streams.",
    category: "Fresh",
    notes: { top: ["Bergamot", "Mandarin Orange"], middle: ["Green Tea", "Black Currant"], base: ["Musk", "Sandalwood"] }
  },

  // Etat Libre d'Orange
  {
    id: 12,
    name: 'Remarkable People',
    brand: "Etat Libre d'Orange",
    collection: 'The Orange Extraordinaire',
    price: '$159.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'A fragrance for the exceptional, the unconventional. A celebration of those who break the mold.',
    category: 'Spicy',
    notes: { top: ['Grapefruit', 'Champagne'], middle: ['Cardamom', 'Jasmine'], base: ['Sandalwood', 'Labdanum'] },
  },
  {
    id: 13,
    name: 'I Am Trash - Les Fleurs du Déchet',
    brand: "Etat Libre d'Orange",
    collection: 'The Orange Extraordinaire',
    price: '$159.00',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'The most wanted fragrance from the end of the world. A perfume created from the unwanted, the discarded, the trash.',
    category: 'Fruity',
    notes: { top: ['Apple Essence', 'Bitter Orange'], middle: ['Rose Absolute', 'Strawberry'], base: ['Cedarwood', 'Sandalwood'] },
  },
  {
    id: 601,
    name: "Fat Electrician",
    brand: "Etat Libre d'Orange",
    collection: "The Orange Extraordinaire",
    price: "$159.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A beautiful and unexpected vetiver fragrance with notes of chestnut cream and olive leaves.",
    category: "Woody",
    notes: { top: ["Black Pepper", "Elemi"], middle: ["Cedarwood", "Vetiver"], base: ["Opoponax", "Myrrh"] }
  },
  {
    id: 602,
    name: "You Or Someone Like You",
    brand: "Etat Libre d'Orange",
    collection: "The Orange Extraordinaire",
    price: "$159.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A fresh, green, and inviting fragrance inspired by the city of Los Angeles.",
    category: "Fresh",
    notes: { top: ["Mint", "Grapefruit", "Anise"], middle: ["Rose", "Green Notes"], base: ["White Musk"] }
  },
  {
    id: 603,
    name: "Jasmin et Cigarette",
    brand: "Etat Libre d'Orange",
    collection: "The Orange Extraordinaire",
    price: "$159.00",
    imageUrl: "https://placehold.co/600x600.png",
    description: "A sensual and addictive fragrance that combines the femininity of jasmine with the smoky aroma of a cigarette.",
    category: "Floral",
    notes: { top: ["Galbanum", "Turmeric"], middle: ["Jasmine", "Apricot"], base: ["Tobacco", "Musk", "Cedar"] }
  }
];
