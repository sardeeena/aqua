import { Trip } from '../types';

export const FRENCH_CATEGORIES: Record<string, string> = {
  all: 'Toutes les Excursions',
  island: 'Îles & Plages',
  sea: 'Croisières & Plongée',
  adventure: 'Aventure & Sensations',
  safari: 'Safari Désert',
  cultural: 'Histoire & Culture',
  wellness: 'Bien-être & Spa',
  transfer: 'Transferts Aéroport',
  services: 'Conciergerie & Santé',
};

export const FRENCH_TRIPS: Partial<Record<string, Partial<Trip>>> = {
  'orange-bay': {
    title: 'Excursion Île Orange Bay Premium',
    categoryLabel: 'Îles & Plages',
    subtitle: 'Lagon turquoise limpide, plages de sable blanc, balançoires aquatiques et buffet déjeuner chef',
    badge: 'Best-seller',
    description: 'L’escapade insulaire préférée à Hurghada. Détendez-vous sur les sables blancs d’Orange Bay et plongez sur 2 récifs coralliens.',
    fullDescription: 'Souvent surnommée les « Maldives égyptiennes », Orange Bay sur l’île de Giftun séduit par ses eaux turquoise peu profondes et son sable fin.\n\nAprès une croisière relaxante depuis la Marina d’Hurghada, profitez de 2 heures complètes sur l’île sous des parasols en bois. La journée comprend également 2 arrêts de snorkeling guidé sur de magnifiques récifs, un délicieux buffet préparé à bord et des tours de bouée tractée/banane.',
    meetingPoint: 'Nouveau Port de Marina Hurghada',
    pickupInfo: 'Prise en charge aller-retour gratuite en véhicule climatisé depuis tous les hôtels d’Hurghada, El Gouna, Makadi et Sahl Hasheesh.',
    highlights: [
      '2 heures complètes sur la plage paradisiaque d’Orange Bay (Île Giftun)',
      '2 arrêts de snorkeling guidés sur des récifs coralliens multicolores',
      'Buffet chaud fait maison à bord : poisson frais, poulet grillé, salades et fruits',
      'Boissons non alcoolisées, thé, café et eau minérale à volonté toute la journée',
      'Tours de bouée banane et canapé aquatique inclus',
      'Matériel de snorkeling complet et billets d’accès à l’île inclus'
    ],
    included: [
      'Transferts aller-retour depuis votre hôtel',
      'Équipement complet de snorkeling et gilets de sauvetage',
      'Déjeuner buffet et fruits frais à bord',
      'Boissons chaudes et fraîches à volonté',
      'Entrée sur l’île d’Orange Bay (2 heures)',
      '2 arrêts de baignade et snorkeling',
      'Tours de banane gonflable'
    ],
    excluded: [
      'Taxe environnementale du parc national (5 $ / personne à régler sur place)',
      'Pack photos et vidéos sous-marines (optionnel)'
    ],
    whatToBring: [
      'Maillot de bain et serviette de plage de votre hôtel',
      'Lunettes de soleil, chapeau et crème solaire respectueuse des coraux',
      'Appareil étanche ou pochette étanche pour téléphone',
      'Copie de passeport'
    ]
  },
  'paradise-island': {
    title: 'Croisière VIP Paradise Island',
    categoryLabel: 'Îles & Plages',
    subtitle: 'Sable blanc, mer turquoise, transats ombragés VIP et buffet de fruits de mer',
    badge: 'Île VIP',
    description: 'Paradise Island offre un cadre tropical paisible avec transats VIP, eau cristalline et déjeuner aux saveurs de la mer.',
    highlights: [
      'Espace transats VIP réservé sur la plage de Paradise Island',
      'Yacht spacieux avec solarium et salon climatisé',
      'Buffet de fruits de mer et grillades à bord',
      '2 arrêts snorkeling sur des récifs préservés'
    ]
  },
  'ozaria-island': {
    title: 'Île Ozaria Luxury (Style Boho)',
    categoryLabel: 'Îles & Plages',
    subtitle: 'Design bohème chic, lagon turquoise, lits de plage et cuisine gastronomique',
    badge: 'Boho Luxe',
    description: 'La nouvelle île exclusive d’Hurghada au style bohème raffiné, avec cabanas et ambiance lounge intimiste.',
    highlights: [
      'Le tout nouveau club de plage bohème chic sur l’île',
      'Grands lits de plage et cabanas ombragées',
      'Déjeuner gastronomique et mocktails de fruits frais',
      'Snorkeling guidé par des instructeurs professionnels'
    ]
  },
  'island-bianka': {
    title: 'Île Bianka Échappée Exclusive',
    categoryLabel: 'Îles & Plages',
    subtitle: 'Oasis bohème intimiste avec eaux cristallines et vues panoramiques romantiques',
    badge: 'Exclusif',
    description: 'Une île intime conçue pour les couples et les amateurs de calme et de beaux paysages marins.',
    highlights: [
      'Ambiance de plage isolée avec cabanes privées',
      'Vue panoramique sur la mer Rouge'
    ]
  },
  'eden-island': {
    title: 'Croisière Royale Eden Island',
    categoryLabel: 'Îles & Plages',
    subtitle: 'Sable blanc immaculé, eaux calmes, transats et sérénité absolue',
    badge: 'Détente Royale',
    description: 'Une nature préservée, du sable doux et un snorkeling fantastique directement depuis le rivage.',
    highlights: [
      'Plage calme sans musique forte ni foule',
      'Récif corallien vivant à quelques mètres de la plage'
    ]
  },
  'mahmya-island': {
    title: 'Mahmya Plage & Éco-Île',
    categoryLabel: 'Îles & Plages',
    subtitle: 'Réserve naturelle protégée, restaurant italien de prestige et récifs spectaculaires',
    badge: 'Éco-Paradis',
    description: 'La référence éco-luxe sur l’île de Giftun avec restauration haut de gamme et faune sous-marine d’exception.',
    highlights: [
      'Plage protégée au sable fin d’une grande pureté',
      'Cuisine gastronomique servie en restaurant sur l’île',
      'Snorkeling de classe mondiale dans la réserve marine'
    ]
  },
  'dolphin-house': {
    title: 'Croisière Snorkeling Dolphin House',
    categoryLabel: 'Croisières & Plongée',
    subtitle: 'Nagez avec des dauphins sauvages en liberté et explorez 2 récifs coralliens',
    badge: 'Incontournable',
    description: 'Naviguez vers le célèbre récif d’El Samaka pour observer des groupes de dauphins sauvages dans leur milieu naturel.',
    highlights: [
      'Observation et nage auprès de dauphins sauvages',
      '2 arrêts de snorkeling sur des récifs féeriques',
      'Déjeuner buffet chaud et rafraîchissements à bord'
    ]
  },
  'intro-scuba-dive': {
    title: 'Baptême de Plongée Sous-Marine (PADI Discovery)',
    categoryLabel: 'Croisières & Plongée',
    subtitle: 'Idéal pour débutants et non-nageurs : moniteur personnel 1-sur-1 sous l’eau',
    badge: 'Pour Débutants',
    description: 'Aucune expérience requise ! Plongez en toute sécurité jusqu’à 7-10 m de profondeur avec votre instructeur dédié.',
    highlights: [
      '2 plongées guidées de 20 min avec votre moniteur privé',
      'Briefing de sécurité complet en français ou anglais',
      'Matériel de plongée moderne et révisé inclus',
      'Déjeuner buffet et snorkeling inclus à bord'
    ]
  },
  'padi-open-water': {
    title: 'Formation PADI Open Water Diver (3 Jours)',
    categoryLabel: 'Croisières & Plongée',
    subtitle: 'Brevet international de plongée : théorie, entraînement en fosse et 4 plongées en mer',
    badge: 'Certification',
    description: 'Devenez plongeur certifié à vie jusqu’à 18 mètres avec des instructeurs PADI expérimentés.',
    highlights: [
      'Certification PADI officielle valable dans le monde entier',
      'Théorie, exercices pratiques et 4 plongées en mer',
      'Petits groupes d’apprentissage pour un encadrement sur mesure'
    ]
  },
  'sea-scope-semi-submarine': {
    title: 'Semi-Sous-Marin Explorateur de Corail',
    categoryLabel: 'Croisières & Plongée',
    subtitle: 'Cabine sous-marine climatisée avec baies vitrées à 3m sous l’eau – parfait pour les enfants',
    badge: 'En Famille',
    description: 'Admirez les merveilles sous-marines et les poissons tropicaux sans vous mouiller à travers de grandes fenêtres panoramiques.',
    highlights: [
      'Grandes fenêtres panoramiques sous-marines à 3 mètres de profondeur',
      'Espace climatisé avec sièges confortables',
      'Arrêt baignade et snorkeling pour ceux qui souhaitent nager'
    ]
  },
  'parasailing-adventure': {
    title: 'Parachute Ascensionnel (Parasailing)',
    categoryLabel: 'Aventure & Sensations',
    subtitle: 'Envolez-vous à 50 mètres au-dessus de la mer Rouge avec vue panoramique sur Hurghada',
    badge: 'Sensations',
    description: 'Découvrez la sensation magique de voler au-dessus de la mer avec un décollage et atterrissage tout en douceur depuis le bateau.',
    highlights: [
      'Vue aérienne imprenable sur la mer, les îles et le désert',
      'Vols solo ou en duo (tandem)',
      'Équipement certifié répondant aux normes de sécurité les plus strictes'
    ]
  },
  'super-safari-desert': {
    title: 'Super Safari 5-en-1 dans le Désert',
    categoryLabel: 'Safari Désert',
    subtitle: 'Quad, buggy, 4x4 vers le village bédouin, balade à dos de dromadaire, barbecue & spectacle',
    badge: 'Best-seller Safari',
    description: 'L’aventure complète dans le désert : 45 min de quad, spider-buggy, 4x4 dans les dunes, dromadaires, coucher de soleil et grand spectacle oriental.',
    highlights: [
      '45 minutes de conduite de quad dans les dunes',
      'Parcours en spider-buggy et traversée du désert en 4x4',
      'Immersion dans un village bédouin avec thé traditionnel',
      'Balade à dos de dromadaire au coucher du soleil',
      'Dîner buffet oriental avec spectacle de danse du ventre, Tanoura et cracheurs de feu'
    ]
  },
  'mega-quad-safari': {
    title: 'Méga Safari Quad au Coucher du Soleil',
    categoryLabel: 'Safari Désert',
    subtitle: '3 heures de pure conduite en quad à travers canyons et dunes à l’heure dorée',
    badge: 'Passion Quad',
    description: 'Un itinéraire prolongé pour les amateurs de pilotage avec arrêt au sommet d’une montagne pour admirer le crépuscule.',
    highlights: [
      '3 heures de pilotage de quad sur des pistes variées',
      'Arrêt panoramique au sommet au coucher du soleil',
      'Thé bédouin traditionnel sous la tente'
    ]
  },
  'stargazing-safari': {
    title: 'Safari Astronomie & Nuit Étoilée au Télescope',
    categoryLabel: 'Safari Désert',
    subtitle: 'Télescopes de pointe, conférence d’astronome et dîner aux chandelles dans le désert',
    badge: 'Romantique',
    description: 'Observez les anneaux de Saturne et les cratères lunaires au cœur du désert sans aucune pollution lumineuse.',
    highlights: [
      'Observation céleste avec de puissants télescopes électroniques',
      'Explications passionnantes sur les constellations par un astronome',
      'Dîner intime aux chandelles sous le ciel étoilé'
    ]
  },
  'luxor-day-trip': {
    title: 'Excursion à Louxor et la Vallée des Rois',
    categoryLabel: 'Histoire & Culture',
    subtitle: 'Temple de Karnak, Temple d’Hatchepsout, Colosses de Memnon, traversée du Nil & égyptologue',
    badge: 'Patrimoine Mondial',
    description: 'Plongez dans l’ancienne Thèbes. Visitez les tombeaux royaux de la Vallée des Rois et l’immense temple de Karnak.',
    highlights: [
      'Entrée aux tombeaux de la Vallée des Rois et au temple d’Hatchepsout',
      'Visite guidée de l’impressionnante salle hypostyle de Karnak',
      'Traversée du Nil en felouque et déjeuner au restaurant inclus',
      'Trajet confortable en autocar climatisé avec guide francophone'
    ]
  },
  'cairo-pyramids-tour': {
    title: 'Le Caire et les Pyramides de Gizeh (1 Jour)',
    categoryLabel: 'Histoire & Culture',
    subtitle: 'Pyramide de Khéops, Sphinx, Musée Égyptien des Antiquités et souk Khan el-Khalili',
    badge: 'Merveille du Monde',
    description: 'Contemplez la dernière merveille du monde antique, le Sphinx légendaire et les trésors en or de Toutânkhamon.',
    highlights: [
      'Visite des célèbres pyramides de Gizeh et du grand Sphinx',
      'Visite guidée des chefs-d’œuvre du Musée Égyptien',
      'Déjeuner au bord du Nil inclus',
      'Guide égyptologue francophone certifié'
    ]
  },
  'hurghada-city-tour': {
    title: 'Visite de la Ville d’Hurghada & Lieux Phares',
    categoryLabel: 'Histoire & Culture',
    subtitle: 'Mosquée El Mina, Marina, marché aux poissons, église copte et souk des épices',
    badge: 'Tour de Ville',
    description: 'Découvrez l’âme d’Hurghada : du quartier traditionnel d’El Dahar à la marina moderne bordée de yachts.',
    highlights: [
      'Visite de la majestueuse mosquée El Mina et de l’église copte',
      'Balade sur le port de plaisance et dans les ruelles du souk'
    ]
  },
  'turkish-bath-hamam': {
    title: 'Bain Turc Hamam, Sauna & Massage',
    categoryLabel: 'Bien-être & Spa',
    subtitle: 'Sauna, hammam vapeur, gommage au gant Kessa, mousse et 45 min de massage aux huiles',
    badge: 'Détente Spa',
    description: 'Le soin idéal pour préparer votre peau au soleil et dénouer toutes vos tensions de voyage.',
    highlights: [
      'Hammam traditionnel sur marbre chauffé et bain de vapeur',
      'Gommage corporel purifiant et enveloppement de mousse',
      '45 minutes de massage relaxant complet aux huiles orientales',
      'Prise en charge aller-retour à votre hôtel'
    ]
  },
  'private-speedboat': {
    title: 'Location de Speedboat Privé VIP avec Capitaine',
    categoryLabel: 'Croisières & Plongée',
    subtitle: 'Sortie 100% privée sur mesure : Orange Bay, recherche de dauphins et bancs de sable déserts',
    badge: '100% Privé',
    description: 'Privatisez un bateau rapide avec son capitaine pour votre famille ou vos amis. Choisissez vos escales en toute liberté.',
    highlights: [
      'Bateau rapide bi-moteur exclusif pour votre groupe',
      'Itinéraire personnalisable : dauphins, bancs de sable, Orange Bay',
      'Plateau de fruits frais, rafraîchissements, musique Bluetooth et masques'
    ]
  },
  'airport-shuttle': {
    title: 'Transfert Privé Aéroport d’Hurghada',
    categoryLabel: 'Transferts Aéroport',
    subtitle: 'Transfert direct 24/7 entre l’aéroport d’Hurghada (HRG) et tous les hôtels de la côte',
    badge: 'Service 24/7',
    description: 'Accueil personnalisé avec panneau nominatif dans le hall des arrivées. Véhicules confortables et climatisés.',
    highlights: [
      'Suivi de votre vol en temps réel – votre chauffeur vous attend même en cas de retard',
      'Accueil dans le terminal avec pancarte à votre nom',
      'Aide aux bagages et transfert direct jusqu’à la réception de votre hôtel',
      'Tarif fixe garanti sans aucun supplément'
    ]
  },
  'medical-care': {
    title: 'Assistance Médicale & Médecin à l’Hôtel 24/7',
    categoryLabel: 'Conciergerie & Santé',
    subtitle: 'Visite d’un médecin agréé dans votre chambre d’hôtel et gestion des dossiers d’assurance',
    badge: 'Urgence 24/7',
    description: 'Assistance médicale touristique 24h/24 en cas de coup de chaud, otite ou besoin de soins d’urgence.',
    highlights: [
      'Ligne téléphonique d’assistance médicale 24/7',
      'Intervention rapide d’un médecin directement dans votre chambre',
      'Rapports médicaux conformes pour vos assurances de voyage'
    ]
  }
};
