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

export const perfumes: Perfume[] = [
  // Chanel
  {
    id: 1,
    name: 'N°5',
    brand: 'Chanel',
    collection: 'Iconic Lines',
    price: '$146.00',
    imageUrl: '/images/perfumes/Chanel_parfum_n°5.png',
    description: 'A timeless, legendary fragrance. A floral bouquet that is both abstract and mysterious.',
    category: 'Floral',
    notes: { top: ['Aldehydes', 'Ylang-Ylang'], middle: ['Iris', 'Jasmine'], base: ['Sandalwood', 'Vetiver'] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/125530/n5-eau-de-parfum-spray/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Chanel-No-5-Eau-de-Parfum-10.html"
  },
  {
    id: 2,
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    collection: 'Iconic Lines',
    price: '$115.00',
    imageUrl: '/images/perfumes/Chanel_parfum_Bleu.png',
    description: 'An aromatic-woody fragrance with a captivating trail. A tribute to masculine freedom.',
    category: 'Woody',
    notes: { top: ['Grapefruit', 'Lemon'], middle: ['Ginger', 'Nutmeg'], base: ['Incense', 'Cedar'] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/107360/bleu-de-chanel-eau-de-toilette-spray/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Bleu-de-Chanel-9099.html"
  },
  {
    id: 101,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$146.00",
    imageUrl: "/images/perfumes/Chanel_parfum_Coco Mademoiselle.png",
    description: "A sparkling, bold floral-woody fragrance that recalls a daring young Coco Chanel.",
    category: "Oriental",
    notes: { top: ["Orange", "Bergamot"], middle: ["Rose", "Jasmine"], base: ["Patchouli", "Vetiver"] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/116520/coco-mademoiselle-eau-de-parfum-spray/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Coco-Mademoiselle-611.html"
  },
  {
    id: 102,
    name: "Chance Eau Tendre",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$125.00",
    imageUrl: "/images/perfumes/Chanel_parfum_Eau Tendre.png",
    description: "A delicate and unexpectedly fruity-floral fragrance for women.",
    category: "Fruity",
    notes: { top: ["Quince", "Grapefruit"], middle: ["Hyacinth", "Jasmine"], base: ["Musk", "Iris"] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/126260/chance-eau-tendre-eau-de-parfum-spray/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Chance-Eau-Tendre-8 Chance-Eau-Tendre-Eau-de-Parfum-53415.html"
  },
  {
    id: 103,
    name: "Gabrielle Chanel",
    brand: "Chanel",
    collection: "Iconic Lines",
    price: "$165.00",
    imageUrl: "/images/perfumes/Chanel_parfum_Gabrielle.png",
    description: "A solar flower based on a bouquet of 4 white flowers.",
    category: "Floral",
    notes: { top: ["Grapefruit", "Mandarin Orange"], middle: ["Orange Blossom", "Jasmine"], base: ["Sandalwood", "Musk"] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/120525/gabrielle-chanel-essence-eau-de-parfum-spray/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Gabrielle-43718.html"
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
    notes: { top: ["Orange", "Sea Notes"], middle: ["Pepper", "Neroli"], base: ["Tonka Bean", "Vetiver"] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/123380/allure-homme-sport-eau-de-toilette-spray/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Allure-Homme-Sport-612.html"
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
    notes: { top: ["Citrus", "Bitter Orange"], middle: ["Rose", "Jasmine", "Patchouli"], base: ["Benzoin", "Olibanum", "Woody Notes"] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/1221 Coromandel-les-exclusifs-de-chanel-eau-de-parfum/p/122160/les-exclusifs-de-chanel-coromandel-eau-de-parfum/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Coromandel-Eau-de-Parfum-38981.html"
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
    notes: { top: ["Spices", "Pink Pepper"], middle: ["Vetiver", "Violet"], base: ["Sandalwood", "Tobacco"] },
    officialUrl: "https://www.chanel.com/us/fragrance/les-exclusifs-de-chanel/c/7x1x1x32/sycomore/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Sycomore-Eau-de-Parfum-38980.html"
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
    notes: { top: ["Orange Peel", "Basil"], middle: ["Rose", "Jasmine"], base: ["Patchouli", "Woody Notes"] },
    officialUrl: "https://www.chanel.com/us/fragrance/p/1 eaux-de-chanel-paris-deauville-eau-de-toilette-spray/p/102420/les-eaux-de-chanel-paris-deauville-eau-de-toilette/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Chanel/Paris-Deauville-50125.html"
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
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0996001-jadore-eau-de-parfum",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/J-adore-218.html"
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
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0585220-sauvage-eau-de-toilette",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Sauvage-31861.html"
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
    notes: { top: ["Iris", "Peony", "Lily-of-the-Valley"], middle: ["Apricot", "Rose", "Peach"], base: ["Vanilla", "Musk", "Sandalwood"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0996017-miss-dior-eau-de-parfum",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Miss-Dior-Eau-de-Parfum-2021--68498.html"
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
    notes: { top: ["Lavender", "Bergamot"], middle: ["Iris", "Cacao"], base: ["Vetiver", "Leather"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0996057-dior-homme-eau-de-toilette",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Dior-Homme-2020--59317.html"
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
    notes: { top: ["Apricot", "Plum", "Coconut"], middle: ["Tuberose", "Jasmine", "Rose"], base: ["Sandalwood", "Vanilla", "Almond"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0027201-hypnotic-poison-eau-de-toilette",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Hypnotic-Poison-219.html"
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
    notes: { top: ["Nutmeg Flower", "Lavender"], middle: ["Honeysuckle", "Sandalwood"], base: ["Leather", "Tonka Bean"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0066201-fahrenheit-eau-de-toilette",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Fahrenheit-62 Fahrenheit-228.html"
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
    notes: { top: ["Bergamot", "Grapefruit"], middle: ["Turkish Rose", "Pink Pepper"], base: ["Amber", "Cistus"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0822410-ambre-nuit-fragrance",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Ambre-Nuit-6704.html"
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
    notes: { top: ["Bergamot"], middle: ["Rose", "Jasmine"], base: ["Patchouli", "Oakmoss"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0822210-gris-dior-fragrance",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Gris-Dior-511 Gris-Montaigne-18330.html"
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
    notes: { top: ["Labdanum"], middle: ["Rose", "Patchouli", "Saffron"], base: ["Oud", "Sandalwood", "Cedar"] },
    officialUrl: "https://www.dior.com/en_us/products/beauty-Y0822610-oud-ispahan-fragrance",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Dior/Oud-Ispahan-15828.html"
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
    officialUrl: "https://www.hermes.com/us/en/product/terre-d-hermes-eau-de-toilette-V35623/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Hermes/Terre-d-Hermes-17.html"
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
    officialUrl: "https://www.hermes.com/us/en/product/twilly-d-hermes-eau-de-parfum-V55019/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Hermes/Twilly-d-Hermes-45921.html"
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
    notes: { top: ["Orange", "Elemi resin"], middle: ["Amber", "Pepper"], base: ["Fir", "Oakmoss", "Cedar"] },
    officialUrl: "https://www.hermes.com/us/en/product/eau-des-merveilles-eau-de-toilette-V34169/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Hermes/Eau-des-Merveilles-16.html"
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
    notes: { top: ["Green Mango", "Grapefruit"], middle: ["Lotus", "Calamus"], base: ["Sycamore", "Incense"] },
    officialUrl: "https://www.hermes.com/us/en/product/un-jardin-sur-le-nil-eau-de-toilette-V34179/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Hermes/Un-Jardin-Sur-Le-Nil-18.html"
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
    notes: { top: ["Cardamom", "Lemon"], middle: ["Tea", "Rose"], base: ["Musk", "Woody Notes"] },
    officialUrl: "https://www.hermes.com/us/en/product/voyage-d-hermes-eau-de-toilette-V65111/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Hermes/Voyage-d-Hermes-82 Voyage-d-Hermes-8215.html"
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
    notes: { top: ["Cinnamon", "Rum"], middle: ["Honey", "Caramel"], base: ["Tonka Bean", "Vanilla", "Tobacco"] },
    officialUrl: "https://www.hermes.com/us/en/product/hermessence-ambre-narguile-eau-de-toilette-V38347/",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Hermes/Hermessence-Ambre-Narguile-19.html"
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
    officialUrl: "https://www.franciskurkdjian.com/us/p/baccarat-rouge-540-eau-de-parfum-RA20010.html",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Baccarat-Rouge-540-33519.html"
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
    officialUrl: "https://www.franciskurkdjian.com/us/p/gentle-fluidity-gold-edition-eau-de-parfum-RA20110.html",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Gentle-Fluidity-Gold-53242.html"
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
    notes: { top: ["Violet"], middle: ["Laotian Oud", "Bulgarian Rose"], base: ["Vanilla", "Amber"] },
    officialUrl: "https://www.franciskurkdjian.com/us/p/oud-satin-mood-eau-de-parfum-RA20030.html",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Oud-Satin-Mood-31011.html"
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
    notes: { top: ["Lemon", "Bergamot"], middle: ["White Flowers", "Orange"], base: ["Musk", "Woody Notes"] },
    officialUrl: "https://www.franciskurkdjian.com/us/p/aqua-universalis-eau-de-toilette-RA10010.html",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Aqua-Universalis-6220.html"
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
    notes: { top: ["Labdanum", "Cistus"], middle: ["Benzoin"], base: ["Amber", "Vanilla", "Tonka Bean"] },
    officialUrl: "https://www.franciskurkdjian.com/us/p/grand-soir-eau-de-parfum-RA20070.html",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Grand-Soir-40620.html"
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
    notes: { top: ["Calabrian Bergamot", "California Orange"], middle: ["Bulgarian Rose", "Violet", "Magnolia"], base: ["Cedar", "Musk"] },
    officialUrl: "https://www.franciskurkdjian.com/us/p/a-la-rose-eau-de-parfum-RA14010.html",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/A-La-Rose-25630.html"
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
    officialUrl: "https://creedboutique.com/products/aventus",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Creed/Aventus-9828.html"
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
    notes: { top: ["Lemon", "Verbena"], middle: ["Iris", "Violet Leaf"], base: ["Ambergris", "Sandalwood"] },
    officialUrl: "https://creedboutique.com/products/green-irish-tweed",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Creed/Green-Irish-Tweed-40.html"
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
    notes: { top: ["Bergamot", "Mandarin Orange"], middle: ["Green Tea", "Black Currant"], base: ["Musk", "Sandalwood"] },
    officialUrl: "https://creedboutique.com/products/silver-mountain-water",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Creed/Silver-Mountain-Water-453.html"
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
    officialUrl: "https://us.etatlibredorange.com/collections/shop-all/products/remarkable-people",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Etat-Libre-d-Orange/Remarkable-People-32243.html"
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
    officialUrl: "https://us.etatlibredorange.com/collections/shop-all/products/i-am-trash",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Etat-Libre-d-Orange/I-Am-Trash-Les-Fleurs-du-Dechet-51229.html"
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
    notes: { top: ["Black Pepper", "Elemi"], middle: ["Cedarwood", "Vetiver"], base: ["Opoponax", "Myrrh"] },
    officialUrl: "https://us.etatlibredorange.com/collections/shop-all/products/fat-electrician",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Etat-Libre-d-Orange/Fat-Electrician-62 Fat-Electrician-6284.html"
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
    notes: { top: ["Mint", "Grapefruit", "Anise"], middle: ["Rose", "Green Notes"], base: ["White Musk"] },
    officialUrl: "https://us.etatlibredorange.com/collections/shop-all/products/you-or-someone-like-you",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Etat-Libre-d-Orange/You-Or-Someone-Like-You-44026.html"
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
    notes: { top: ["Galbanum", "Turmeric"], middle: ["Jasmine", "Apricot"], base: ["Tobacco", "Musk", "Cedar"] },
    officialUrl: "https://us.etatlibredorange.com/collections/shop-all/products/jasmin-et-cigarette",
    fragranticaUrl: "https://www.fragrantica.com/perfume/Etat-Libre-d-Orange/Jasmin-et-Cigarette-13 Jasmin-et-Cigarette-1393.html"
  }
];
