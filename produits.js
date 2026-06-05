const PROPERTIES = [
  // ==================== VENTE (20 propriétés) ====================
  {
    id: 1,
    title: "Villa Moderne avec Piscine",
    type: "villa",
    transaction: "vente",
    price: 25000000,
    priceLabel: "25 000 000 DA",
    city: "Baraki",
    wilaya: "Alger",
    surface: 320,
    rooms: 6,
    bathrooms: 3,
    floor: 0,
    description: "Magnifique villa moderne avec grande piscine, jardin paysager et vue panoramique. Finitions haut de gamme, domotique intégrée.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    featured: true,
    new: true
  },
  {
    id: 2,
    title: "Duplex Luxe Vue Mer",
    type: "duplex",
    transaction: "vente",
    price: 18500000,
    priceLabel: "18 500 000 DA",
    city: "Eulma",
    wilaya: "Annaba",
    surface: 210,
    rooms: 5,
    bathrooms: 2,
    floor: 7,
    description: "Duplex d'exception avec vue imprenable sur la mer, terrasse panoramique, standing exceptionnel et finitions luxueuses.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&fit=crop",
    featured: true,
    new: false
  },
  {
    id: 3,
    title: "Maison Traditionnelle Rénovée",
    type: "maison",
    transaction: "vente",
    price: 9800000,
    priceLabel: "9 800 000 DA",
    city: "Azeffoun",
    wilaya: "Tizi-Ouzou",
    surface: 180,
    rooms: 5,
    bathrooms: 2,
    floor: 0,
    description: "Maison traditionnelle entièrement rénovée avec jardin. Mélange parfait du charme ancien et du confort moderne.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 4,
    title: "Terrain Constructible 800m²",
    type: "terrain",
    transaction: "vente",
    price: 12000000,
    priceLabel: "12 000 000 DA",
    city: "Boufarik",
    wilaya: "Blida",
    surface: 800,
    rooms: 0,
    bathrooms: 0,
    floor: 0,
    description: "Grand terrain plat avec tous les raccordements (eau, électricité, assainissement). Zone résidentielle calme, COS favorable.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&fit=crop",
    featured: false,
    new: false
  },
  {
    id: 5,
    title: "Appartement F4 Résidence Fermée",
    type: "appartement",
    transaction: "vente",
    price: 8200000,
    priceLabel: "8 200 000 DA",
    city: "Draria",
    wilaya: "Alger",
    surface: 130,
    rooms: 4,
    bathrooms: 2,
    floor: 5,
    description: "Appartement dans résidence sécurisée avec piscine, salle de sport, gardien permanent et parking souterrain.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&fit=crop",
    featured: true,
    new: false
  },
  {
    id: 6,
    title: "Penthouse avec Terrasse Panoramique",
    type: "appartement",
    transaction: "vente",
    price: 32000000,
    priceLabel: "32 000 000 DA",
    city: "Chéraga",
    wilaya: "Alger",
    surface: 280,
    rooms: 6,
    bathrooms: 3,
    floor: 12,
    description: "Penthouse d'exception au sommet d'une tour de standing. Vue 360° sur Alger, finitions ultra-luxe, jacuzzi privé.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    featured: true,
    new: true
  },
  {
    id: 7,
    title: "Ferme Agricole avec Verger",
    type: "terrain",
    transaction: "vente",
    price: 15000000,
    priceLabel: "15 000 000 DA",
    city: "Berrouaghia",
    wilaya: "Médéa",
    surface: 5000,
    rooms: 4,
    bathrooms: 2,
    floor: 0,
    description: "Grande ferme avec verger de 2 hectares, maison d'habitation, puits artésien, hangar agricole et chambre froide.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=80&fit=crop",
    featured: false,
    new: false
  },
  {
    id: 8,
    title: "Villa avec Jardin Arboré",
    type: "villa",
    transaction: "vente",
    price: 21000000,
    priceLabel: "21 000 000 DA",
    city: "Al Affroun",
    wilaya: "Blida",
    surface: 400,
    rooms: 7,
    bathrooms: 4,
    floor: 0,
    description: "Superbe villa familiale entourée d'un jardin de 1000 m², 3 salons, cuisine équipée, double garage et bungalow invités.",
    image: "id8.jpg",
    featured: true,
    new: true
  },
  {
    id: 9,
    title: "Appartement Neuf F3 Alger Ouest",
    type: "appartement",
    transaction: "vente",
    price: 7500000,
    priceLabel: "7 500 000 DA",
    city: "Dely Ibrahim",
    wilaya: "Alger",
    surface: 100,
    rooms: 3,
    bathrooms: 2,
    floor: 3,
    description: "Appartement neuf livré clé en main, cuisine équipée, revêtements de qualité, résidence avec gardien et interphone.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    featured: false,
    new: true
  },
  {
    id: 10,
    title: "Duplex F5 Résidence Prestige",
    type: "duplex",
    transaction: "vente",
    price: 14500000,
    priceLabel: "14 500 000 DA",
    city: "Arzew",
    wilaya: "Oran",
    surface: 195,
    rooms: 5,
    bathrooms: 3,
    floor: 4,
    description: "Duplex spacieux dans résidence de prestige, double séjour, grande terrasse privée, deux places de parking incluses.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 11,
    title: "Maison de Maître Centre Historique",
    type: "maison",
    transaction: "vente",
    price: 17000000,
    priceLabel: "17 000 000 DA",
    city: "Zighoud Youcef",
    wilaya: "Constantine",
    surface: 260,
    rooms: 6,
    bathrooms: 3,
    floor: 0,
    description: "Belle demeure de maître au cœur du centre historique de Constantine. Patios intérieurs, boiseries d'époque, potentiel exceptionnel.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 12,
    title: "Villa Balnéaire Sidi Fredj",
    type: "villa",
    transaction: "vente",
    price: 35000000,
    priceLabel: "35 000 000 DA",
    city: "Sidi Fredj",
    wilaya: "Alger",
    surface: 500,
    rooms: 8,
    bathrooms: 5,
    floor: 0,
    description: "Villa balnéaire d'exception à Sidi Fredj, accès direct à la plage, piscine à débordement, 8 chambres avec dressing.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    featured: true,
    new: true
  },
  {
    id: 13,
    title: "Local Commercial à Vendre",
    type: "local",
    transaction: "vente",
    price: 9000000,
    priceLabel: "9 000 000 DA",
    city: "Sétif",
    wilaya: "Sétif",
    surface: 180,
    rooms: 0,
    bathrooms: 1,
    floor: 0,
    description: "Local commercial de plain-pied, grande vitrine sur artère principale, livré brut pour aménagement selon activité.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 14,
    title: "Appartement F5 Vue Montagne",
    type: "appartement",
    transaction: "vente",
    price: 11000000,
    priceLabel: "11 000 000 DA",
    city: "Yakouren",
    wilaya: "Tizi-Ouzou",
    surface: 160,
    rooms: 5,
    bathrooms: 2,
    floor: 6,
    description: "Grand appartement avec magnifique vue sur le massif du Djurdjura, balcon filant, parking et cave inclus.",
    image: "id14.jpg",
    featured: false,
    new: false
  },
  {
    id: 15,
    title: "Bureau à Vendre Tour Premium",
    type: "bureau",
    transaction: "vente",
    price: 13500000,
    priceLabel: "13 500 000 DA",
    city: "Bouzareah",
    wilaya: "Alger",
    surface: 220,
    rooms: 6,
    bathrooms: 2,
    floor: 9,
    description: "Plateau de bureaux dans tour premium du quartier d'affaires, vue imprenable, climatisation centralisée, ascenseurs rapides.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    featured: true,
    new: false
  },
  {
    id: 16,
    title: "Maison F4 Quartier Résidentiel",
    type: "maison",
    transaction: "vente",
    price: 8800000,
    priceLabel: "8 800 000 DA",
    city: "Berraha",
    wilaya: "Annaba",
    surface: 150,
    rooms: 4,
    bathrooms: 2,
    floor: 0,
    description: "Belle maison individuelle dans quartier résidentiel calme, jardin aménagé, garage, proximité écoles et commerces.",
    image: "id.16.jpg",
    featured: false,
    new: true
  },
  {
    id: 17,
    title: "Terrain Industriel Viabilisé",
    type: "terrain",
    transaction: "vente",
    price: 22000000,
    priceLabel: "22 000 000 DA",
    city: "Aïn El Turk",
    wilaya: "Oran",
    surface: 3000,
    rooms: 0,
    bathrooms: 0,
    floor: 0,
    description: "Terrain industriel entièrement viabilisé en zone d'activité, raccordements triphasés, accès poids lourds, clôturé.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 18,
    title: "Studio Investissement Locatif",
    type: "studio",
    transaction: "vente",
    price: 3200000,
    priceLabel: "3 200 000 DA",
    city: "Sétif",
    wilaya: "Sétif",
    surface: 38,
    rooms: 1,
    bathrooms: 1,
    floor: 2,
    description: "Studio idéal pour investissement locatif, très bien situé proche université, rentabilité assurée, charges faibles.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 19,
    title: "Villa Contemporaine Piscine Chauffée",
    type: "villa",
    transaction: "vente",
    price: 29000000,
    priceLabel: "29 000 000 DA",
    city: "Dar El Beïda",
    wilaya: "Alger",
    surface: 380,
    rooms: 7,
    bathrooms: 4,
    floor: 0,
    description: "Villa contemporaine avec piscine chauffée, salle de cinéma home, cave à vin, système domotique KNX complet.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    featured: true,
    new: true
  },
  {
    id: 20,
    title: "Appartement F3 Coopérative Neuve",
    type: "appartement",
    transaction: "vente",
    price: 6400000,
    priceLabel: "6 400 000 DA",
    city: "Ouled Yaich",
    wilaya: "Blida",
    surface: 95,
    rooms: 3,
    bathrooms: 1,
    floor: 1,
    description: "Appartement neuf issu d'une coopérative sérieuse, belles finitions, loggia, parking, livraison immédiate.",
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=600&q=80",
    featured: false,
    new: true
  },

  // ==================== LOCATION (20 propriétés) ====================
  {
    id: 21,
    title: "Appartement F3 Centre-Ville Oran",
    type: "appartement",
    transaction: "location",
    price: 55000,
    priceLabel: "55 000 DA/mois",
    city: "Oran",
    wilaya: "Oran",
    surface: 95,
    rooms: 3,
    bathrooms: 1,
    floor: 4,
    description: "Bel appartement rénové au cœur d'Oran. Proche de toutes commodités, parking sous-sol inclus.",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80",
    featured: true,
    new: false
  },
  {
    id: 22,
    title: "Bureau Commercial Moderne Constantine",
    type: "bureau",
    transaction: "location",
    price: 80000,
    priceLabel: "80 000 DA/mois",
    city: "Massinissa",
    wilaya: "Constantine",
    surface: 150,
    rooms: 5,
    bathrooms: 2,
    floor: 2,
    description: "Espace de bureaux moderne dans une tour premium, accès haut débit, sécurité 24h/24, salle de réunion partagée.",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&q=80",
    featured: false,
    new: true
  },
  {
    id: 23,
    title: "Studio Meublé Étudiant Sétif",
    type: "studio",
    transaction: "location",
    price: 22000,
    priceLabel: "22 000 DA/mois",
    city: "Sétif",
    wilaya: "Sétif",
    surface: 35,
    rooms: 1,
    bathrooms: 1,
    floor: 3,
    description: "Studio entièrement meublé, idéal pour étudiants. Proche université, internet fibre optique inclus, eau chaude solaire.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    featured: false,
    new: true
  },
  {
    id: 24,
    title: "Local Commercial Rue Principale Oran",
    type: "local",
    transaction: "location",
    price: 120000,
    priceLabel: "120 000 DA/mois",
    city: "Es Senia",
    wilaya: "Oran",
    surface: 200,
    rooms: 0,
    bathrooms: 1,
    floor: 0,
    description: "Local commercial idéalement situé en plein centre commercial, grande vitrine, fort trafic piéton quotidien.",
    image: "id24.jpg",
    featured: false,
    new: true
  },
  {
    id: 25,
    title: "Appartement F2 Vue Montagne Kabylie",
    type: "appartement",
    transaction: "location",
    price: 38000,
    priceLabel: "38 000 DA/mois",
    city: "Tigzirt",
    wilaya: "Tizi-Ouzou",
    surface: 72,
    rooms: 2,
    bathrooms: 1,
    floor: 3,
    description: "Charmant appartement avec vue sur les montagnes de la Kabylie, lumineux, bien entretenu, calme absolu.",
    image: "id25.jpg",
    featured: false,
    new: false
  },
  {
    id: 26,
    title: "Villa Meublée Saison Estivale",
    type: "villa",
    transaction: "location",
    price: 180000,
    priceLabel: "180 000 DA/mois",
    city: "Hussein Dey",
    wilaya: "Alger",
    surface: 300,
    rooms: 6,
    bathrooms: 3,
    floor: 0,
    description: "Magnifique villa meublée haut de gamme disponible en location saisonnière, piscine, barbecue, vue mer spectaculaire.",
    image: "id26.jpg",
    featured: true,
    new: true
  },
  {
    id: 27,
    title: "Appartement F4 Alger Centre",
    type: "appartement",
    transaction: "location",
    price: 75000,
    priceLabel: "75 000 DA/mois",
    city: "Alger Centre",
    wilaya: "Alger",
    surface: 120,
    rooms: 4,
    bathrooms: 2,
    floor: 6,
    description: "Grand appartement lumineux au cœur d'Alger, entièrement rénové, équipé, ascenseur, deux balcons avec vue dégagée.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
    featured: true,
    new: false
  },
  {
    id: 28,
    title: "Duplex Meublé Résidence Sécurisée",
    type: "duplex",
    transaction: "location",
    price: 95000,
    priceLabel: "95 000 DA/mois",
    city: "Rouïba",
    wilaya: "Alger",
    surface: 160,
    rooms: 4,
    bathrooms: 2,
    floor: 5,
    description: "Duplex meublé avec goût dans résidence sécurisée, piscine, salle de sport, gardien 24h/24, parking privé.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",
    featured: false,
    new: true
  },
  {
    id: 29,
    title: "Maison de Campagne Médéa",
    type: "maison",
    transaction: "location",
    price: 45000,
    priceLabel: "45 000 DA/mois",
    city: "Ksar El Boukhari",
    wilaya: "Médéa",
    surface: 200,
    rooms: 5,
    bathrooms: 2,
    floor: 0,
    description: "Grande maison de campagne avec terrain arboré, idéale pour famille, air pur, calme, animaux acceptés.",
    image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 30,
    title: "Studio Haut de Gamme Meublé Alger",
    type: "studio",
    transaction: "location",
    price: 35000,
    priceLabel: "35 000 DA/mois",
    city: "Hydra",
    wilaya: "Alger",
    surface: 45,
    rooms: 1,
    bathrooms: 1,
    floor: 8,
    description: "Studio haut de gamme entièrement meublé, vue panoramique, internet fibre inclus, sécurité résidence, idéal cadre.",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 31,
    title: "Bureau Open Space Oran",
    type: "bureau",
    transaction: "location",
    price: 60000,
    priceLabel: "60 000 DA/mois",
    city: "Oued Tlelat",
    wilaya: "Oran",
    surface: 120,
    rooms: 3,
    bathrooms: 1,
    floor: 1,
    description: "Espace open space modulable, idéal start-up et PME, climatisé, internet très haut débit, parking visiteurs.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    featured: false,
    new: true
  },
  {
    id: 32,
    title: "Appartement F3 Annaba Bord de Mer",
    type: "appartement",
    transaction: "location",
    price: 65000,
    priceLabel: "65 000 DA/mois",
    city: "El Boun",
    wilaya: "Annaba",
    surface: 90,
    rooms: 3,
    bathrooms: 1,
    floor: 5,
    description: "Appartement face à la mer à Annaba, balcon avec vue directe sur la Méditerranée, meublé et climatisé.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    featured: true,
    new: false
  },
  {
    id: 33,
    title: "Local Artisanal Zone d'Activité Blida",
    type: "local",
    transaction: "location",
    price: 50000,
    priceLabel: "50 000 DA/mois",
    city: "Bougara",
    wilaya: "Blida",
    surface: 250,
    rooms: 3,
    bathrooms: 1,
    floor: 1,
    description: "Local artisanal en zone d'activité, grande hauteur sous plafond, porte sectionnelle, triphasé, bureau intégré.",
    image: "id33.jpg",
    featured: false,
    new: false
  },
  {
    id: 34,
    title: "Appartement F2 Neuf Sétif",
    type: "appartement",
    transaction: "location",
    price: 30000,
    priceLabel: "30 000 DA/mois",
    city: "Sétif",
    wilaya: "Sétif",
    surface: 68,
    rooms: 2,
    bathrooms: 1,
    floor: 2,
    description: "Appartement neuf jamais habité, cuisine équipée, revêtements modernes, résidence calme avec interphone.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    featured: false,
    new: true
  },
  {
    id: 35,
    title: "Villa avec Piscine Location Estivale",
    type: "villa",
    transaction: "location",
    price: 250000,
    priceLabel: "250 000 DA/mois",
    city: "Annaba",
    wilaya: "Annaba",
    surface: 350,
    rooms: 7,
    bathrooms: 4,
    floor: 0,
    description: "Villa de prestige à louer pour la saison estivale, piscine privée, court de tennis, chef cuisinier disponible.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    featured: true,
    new: true
  },
  {
    id: 36,
    title: "Appartement F5 Familial Constantine",
    type: "appartement",
    transaction: "location",
    price: 70000,
    priceLabel: "70 000 DA/mois",
    city: "Ali Mendjel",
    wilaya: "Constantine",
    surface: 145,
    rooms: 5,
    bathrooms: 2,
    floor: 3,
    description: "Grand appartement familial entièrement rénové, proche de toutes les commodités, école, marché et transport.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 37,
    title: "Studio Meublé Tizi-Ouzou Université",
    type: "studio",
    transaction: "location",
    price: 20000,
    priceLabel: "20 000 DA/mois",
    city: "Tizi-Ouzou",
    wilaya: "Tizi-Ouzou",
    surface: 32,
    rooms: 1,
    bathrooms: 1,
    floor: 1,
    description: "Studio meublé à deux pas du campus universitaire, wi-fi inclus, chauffe-eau solaire, immeuble sécurisé.",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 38,
    title: "Maison F6 avec Patio Traditionnel",
    type: "maison",
    transaction: "location",
    price: 90000,
    priceLabel: "90 000 DA/mois",
    city: "Hamma Bouziane",
    wilaya: "Constantine",
    surface: 230,
    rooms: 6,
    bathrooms: 3,
    floor: 0,
    description: "Belle demeure traditionnelle avec patio central et fontaine, idéale pour grande famille ou usage diplomatique.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    featured: false,
    new: false
  },
  {
    id: 39,
    title: "Bureau Direction Vue Panoramique Alger",
    type: "bureau",
    transaction: "location",
    price: 110000,
    priceLabel: "110 000 DA/mois",
    city: "Ouled Fayet",
    wilaya: "Alger",
    surface: 180,
    rooms: 6,
    bathrooms: 2,
    floor: 14,
    description: "Plateau de direction au 14ème étage, vue panoramique sur la baie d'Alger, salles de réunion, secrétariat partagé.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    featured: true,
    new: true
  },
  {
    id: 40,
    title: "Appartement F3 Meublé Luxe Alger",
    type: "appartement",
    transaction: "location",
    price: 100000,
    priceLabel: "100 000 DA/mois",
    city: "Dely Ibrahim",
    wilaya: "Alger",
    surface: 110,
    rooms: 3,
    bathrooms: 2,
    floor: 9,
    description: "Appartement meublé haut de gamme, décoration soignée, électroménager premium, Netflix inclus, gardé 24h/24.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    featured: true,
    new: false
  }
];
function createPropertyCard(prop) {
  const badgeClass = prop.transaction === 'vente' ? 'vente' : (prop.new ? 'neuf' : 'location');
  const badgeText = prop.transaction === 'vente' ? 'À Vendre' : 'À Louer';
  const roomsText = prop.rooms > 0 ? `<span class="feat">🛏️ ${prop.rooms} pièces</span>` : '';
  const bathText = prop.bathrooms > 0 ? `<span class="feat">🚿 ${prop.bathrooms} sdb</span>` : '';

  return `
    <div class="property-card fade-in" data-id="${prop.id}"
         data-type="${prop.type}"
         data-transaction="${prop.transaction}"
         data-wilaya="${prop.wilaya}"
         data-price="${prop.price}">
      <div class="card-img">
        <img src="${prop.image}" alt="${prop.title}" loading="lazy">
        <span class="card-badge ${badgeClass}">${badgeText}${prop.new ? ' · Nouveau' : ''}</span>
        <button class="card-fav" onclick="toggleFav(${prop.id}, this)" title="Ajouter aux favoris">
          ${isFav(prop.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-price">${prop.priceLabel}</div>
        <div class="card-title">${prop.title}</div>
        <div class="card-location">📍 ${prop.city}, ${prop.wilaya}</div>
        <div class="card-features">
          <span class="feat">📐 ${prop.surface} m²</span>
          ${roomsText}
          ${bathText}
        </div>
        <div style="margin-top:16px; display:flex; gap:10px;">
          <a href="commande.html?id=${prop.id}" class="btn-primary" style="flex:1; justify-content:center; font-size:0.85rem; padding:10px 16px; border-radius:8px; text-align:center;">
           Réserver
          </a>
          <button onclick="showDetail(${prop.id})" style="padding:10px 16px; border:2px solid rgba(201,168,76,0.5); border-radius:8px; background:transparent; color:#c9a84c; cursor:pointer; font-size:0.85rem; transition:all 0.3s;" onmouseover="this.style.borderColor='#c9a84c';this.style.background='rgba(201,168,76,0.1)'" onmouseout="this.style.borderColor='rgba(201,168,76,0.5)';this.style.background='transparent'">
  Détails
</button>
        </div>
      </div>
    </div>
  `;
}
function getFavs() {
  try { return JSON.parse(localStorage.getItem('immo_favs') || '[]'); } catch { return []; }
}
function isFav(id) { return getFavs().includes(id); }
function toggleFav(id, btn) {
  const favs = getFavs();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    btn.textContent = '❤️';
    showToast('Ajouté aux favoris ❤️', 'success');
  } else {
    favs.splice(idx, 1);
    btn.textContent = '🤍';
    showToast('Retiré des favoris', 'error');
  }
  localStorage.setItem('immo_favs', JSON.stringify(favs));
  const favCount = document.getElementById('fav-count');
  if (favCount) favCount.textContent = getFavs().length;
  updateFavCount(); //
}
function showDetail(id) {
  const prop = PROPERTIES.find(p => p.id === Number(id));
  if (!prop) return;

  document.getElementById('prop-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'prop-modal';

  Object.assign(modal.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.88)',
    zIndex: '2147483647',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    isolation: 'isolate',
  });

  modal.innerHTML = `
    <div style="
      background:#111111;
      border:1px solid rgba(201,168,76,0.45);
      border-radius:20px;
      width:100%;
      max-width:520px;
      max-height:90vh;
      overflow-y:auto;
      box-shadow:0 0 50px rgba(201,168,76,0.3);
      position:relative;
      flex-shrink:0;
    ">
      <div style="position:relative;height:180px;overflow:hidden;border-radius:20px 20px 0 0;">
        <img src="${prop.image}" alt="${prop.title}"
          style="width:100%;height:100%;object-fit:cover;display:block;">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.95) 100%);"></div>
        <button id="modal-close-btn" style="
          position:absolute;top:12px;right:12px;
          background:rgba(0,0,0,0.5);
          border:1px solid rgba(201,168,76,0.4);
          color:#fff;width:32px;height:32px;
          border-radius:50%;cursor:pointer;
          font-size:0.9rem;line-height:1;
        ">✕</button>
        <span style="
          position:absolute;bottom:12px;left:16px;
          background:${prop.transaction === 'vente' ? '#22c55e' : '#c9a84c'};
          color:#fff;padding:3px 12px;border-radius:50px;
          font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;
        ">${prop.transaction === 'vente' ? 'À Vendre' : 'À Louer'}${prop.new ? ' · Nouveau' : ''}</span>
      </div>

      <div style="padding:20px 24px 24px;">
        <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;color:#fff;margin:0 0 4px;line-height:1.3;">${prop.title}</h2>
        <p style="color:#94A3B8;margin:0 0 14px;font-size:0.84rem;">📍 ${prop.city}, ${prop.wilaya}</p>

        <p style="font-size:1.4rem;font-weight:700;color:#c9a84c;font-family:'Playfair Display',serif;margin:0 0 14px;text-shadow:0 0 12px rgba(201,168,76,0.5);">
          ${prop.priceLabel}
        </p>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;">
          <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);padding:10px;border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:#c9a84c;font-size:1rem;">${prop.surface} m²</div>
            <div style="font-size:0.72rem;color:#94A3B8;margin-top:2px;">Surface</div>
          </div>
          ${prop.rooms > 0 ? `
          <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);padding:10px;border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:#c9a84c;font-size:1rem;">${prop.rooms}</div>
            <div style="font-size:0.72rem;color:#94A3B8;margin-top:2px;">Pièces</div>
          </div>` : ''}
          ${prop.bathrooms > 0 ? `
          <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.3);padding:10px;border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:#c9a84c;font-size:1rem;">${prop.bathrooms}</div>
            <div style="font-size:0.72rem;color:#94A3B8;margin-top:2px;">Salles de bain</div>
          </div>` : ''}
        </div>

        <p style="color:#CBD5E1;line-height:1.65;margin:0 0 20px;font-size:0.88rem;border-left:3px solid #c9a84c;padding-left:12px;">
          ${prop.description}
        </p>

        <a href="commande.html?id=${prop.id}"
          style="display:flex;align-items:center;justify-content:center;gap:8px;
                 width:100%;padding:13px;box-sizing:border-box;
                 background:linear-gradient(135deg,#c9a84c,#a8872e);
                 color:#fff;border-radius:12px;text-decoration:none;
                 font-weight:600;font-size:0.92rem;
                 box-shadow:0 0 20px rgba(201,168,76,0.4);">
          📅 Réserver une visite
        </a>
      </div>
    </div>
  `;

  document.documentElement.appendChild(modal);
  document.body.style.overflow = 'hidden';

  const close = () => {
    modal.remove();
    document.body.style.overflow = '';
  };

  document.getElementById('modal-close-btn').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });
}
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `${type === 'success' ? '✅' : '❌'} ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}

function renderProducts(list) {
  const grid = document.getElementById('properties-grid');
  const count = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    if (count) count.innerHTML = '<span>0</span> propriété trouvée';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  if (count) count.innerHTML = `<span>${list.length}</span> propriété${list.length > 1 ? 's' : ''} trouvée${list.length > 1 ? 's' : ''}`;
  grid.innerHTML = list.map(createPropertyCard).join('');
}
function applyFilters() {
  const type = document.getElementById('filter-type')?.value ?? 'tous';
  const trans = document.getElementById('filter-transaction')?.value ?? 'tous';
  const wilaya = document.getElementById('filter-wilaya')?.value ?? 'tous';
  const maxPrice = parseInt(document.getElementById('filter-price')?.value) ?? Infinity;
  const sortBy = document.getElementById('sort-select')?.value ?? 'default';
  const noResults = document.getElementById('no-results');
  if (maxPrice < 20000) {
    if (noResults) {
      noResults.style.display = 'block';
      noResults.innerHTML = `
        <div style="font-size:3rem; margin-bottom:16px;">💸</div>
        <h3>Prix trop bas</h3>
        <p>Aucune propriété disponible en dessous de <strong style="color:var(--primary)">20 000 DA</strong></p>
        <button onclick="resetFilters()" class="btn-primary" style="margin-top:20px; display:inline-flex;">
          Réinitialiser les filtres
        </button>
      `;
    }
    document.getElementById('properties-grid').innerHTML = '';
    return;
  }
  let filtered = PROPERTIES.filter(p => {
    if (type !== 'tous' && p.type !== type) return false;
    if (trans !== 'tous' && p.transaction !== trans) return false;
    if (wilaya !== 'tous' && p.wilaya !== wilaya) return false;
    if (p.price > maxPrice) return false;
    return true;
  });
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'surface') filtered.sort((a, b) => b.surface - a.surface);
  if (sortBy === 'new') filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));

  renderProducts(filtered);

}

function resetFilters() {
  ['filter-type', 'filter-transaction', 'filter-wilaya', 'sort-select'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = el.id === 'sort-select' ? 'default' : 'tous';
  });
  const priceEl = document.getElementById('filter-price');
  if (priceEl) { priceEl.value = priceEl.max; updatePriceDisplay(); }
  applyFilters();
}

function updatePriceDisplay() {
  const val = document.getElementById('filter-price')?.value;
  const display = document.getElementById('price-display');
  if (display && val) {
    display.textContent = parseInt(val).toLocaleString('fr-DZ') + ' DA';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const favCount = document.getElementById('fav-count');
    if (favCount) {
      favCount.textContent = getFavs().length;
    }
    updateFavCount(); //
  });
  const params = new URLSearchParams(window.location.search);
  const trans = params.get('trans');
  if (trans) {
    const el = document.getElementById('filter-transaction');
    if (el) el.value = trans;
  }
  updatePriceDisplay();

  const priceEl = document.getElementById('filter-price');
  if (priceEl) priceEl.addEventListener('input', updatePriceDisplay);

  applyFilters();
});
function updateFavCount() {
  const count = getFavs().length;
  const badge = document.getElementById('fav-count');
  if (badge) badge.textContent = count;
}
