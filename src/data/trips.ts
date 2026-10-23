import { Trip } from '../types';

export const TRIPS: Trip[] = [
  {
    id: 'orange-bay',
    slug: 'orange-bay',
    title: 'Orange Bay Island Day Trip',
    category: 'island',
    categoryLabel: 'Island Excursions',
    subtitle: 'Shallow turquoise water, soft white sand, famous wooden water swings & hot buffet lunch on board',
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 142,
    duration: '8 hours',
    groupSize: 'Comfortable Yacht',
    departureTime: '08:30',
    pickupTime: '07:30 - 08:15',
    pickupInfo: 'Free door-to-door AC transfer from all Hurghada, El Gouna, Makadi Bay & Sahl Hasheesh hotels',
    priceEUR: 30,
    priceUSD: 33,
    originalPriceEUR: 45,
    originalPriceUSD: 50,
    minAge: 3,
    difficulty: 'Easy',
    isBestseller: true,
    isVIP: true,
    meetingPoint: 'Hurghada New Marina Pier',
    highlights: [
      '2 full hours to relax on the white sands and turquoise waters of Orange Bay (Giftun Island)',
      '2 guided snorkeling stops at colorful coral reefs with friendly reef fish',
      'Fresh hot buffet lunch cooked on board with grilled dishes, salads, and fresh fruit',
      'Unlimited soft drinks, mineral water, tea, and coffee all day',
      'Fun banana boat and water sofa rides included',
      'All snorkeling gear, life jackets, and island entrance tickets included'
    ],
    description: "Hurghada's favorite island day out. Relax on white sand beaches, take photos at the famous wooden water swings, and snorkel with colorful fish.",
    fullDescription: 'Often called the "Egyptian Maldives", Orange Bay on Giftun Island is famous for its shallow turquoise waters and soft white sand.\n\nAfter a pleasant boat cruise from Hurghada Marina, you will have two full hours to relax under wooden sunshades, wade in warm clear water, and take photos on the famous water swings. After the island, we take you to two colorful coral reefs for guided snorkeling, serve a fresh hot buffet lunch cooked right on board, and finish with fun banana boat rides before cruising back.',
    itinerary: [
      { time: '07:30 - 08:15', title: 'Hotel Pickup', description: 'We pick you up from your hotel lobby in a clean air-conditioned van and bring you to the marina.' },
      { time: '08:30', title: 'Sail to Orange Bay', description: 'Cruise out into the Red Sea with morning sun and sea breeze on the open deck.' },
      { time: '10:00 - 12:00', title: 'Orange Bay Island (2 Hours)', description: 'Relax on sunbeds, swim in calm shallow water, and take photos at the water swings.' },
      { time: '12:30', title: 'Fresh Buffet Lunch on the Boat', description: 'Enjoy fresh fish, grilled chicken, pasta, rice, oriental salads, and fruit.' },
      { time: '13:30', title: '1st Snorkeling Stop — Coral Reef', description: '45 minutes of guided snorkeling along colorful reef walls with our instructors.' },
      { time: '14:30', title: '2nd Snorkeling Stop & Banana Boat', description: 'Explore a second reef site, followed by fun banana boat and water sofa rides.' },
      { time: '16:00 - 16:30', title: 'Return & Hotel Drop-off', description: 'Cruise back to the marina and relax on your ride back to your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      'Snorkeling equipment & life jackets',
      'Buffet lunch & fresh fruits',
      'Soft drinks, tea & coffee',
      'Orange Bay island entrance fee (2 hours)',
      '2 guided snorkeling stops at coral reefs',
      'Banana boat and water sofa rides'
    ],
    excluded: [
      'National Park environmental fee ($5/person paid at check-in)',
      'Professional underwater photo & video package (optional)'
    ],
    whatToBring: [
      'Swimwear and beach towel from your hotel',
      'Sunglasses, sun hat & reef-safe sunscreen',
      'Underwater camera or phone waterproof pouch',
      'Passport photo copy'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'paradise-island',
    slug: 'paradise-island',
    title: 'Paradise Island Day Trip',
    category: 'island',
    categoryLabel: 'Island Excursions',
    subtitle: 'Soft white sand beaches, clear shallow water, shaded sunbeds & fresh lunch on the yacht',
    badge: 'Relaxing Island',
    rating: 4.9,
    reviewsCount: 96,
    duration: '8 hours',
    groupSize: 'Comfortable Yacht',
    departureTime: '09:00',
    pickupTime: '08:00 - 08:45',
    pickupInfo: 'Free door-to-door AC transfer from all Hurghada, El Gouna, Makadi Bay & Sahl Hasheesh hotels',
    priceEUR: 65,
    priceUSD: 70,
    originalPriceEUR: 85,
    originalPriceUSD: 92,
    minAge: 3,
    difficulty: 'Easy',
    isVIP: true,
    isBestseller: true,
    meetingPoint: 'Hurghada Grand Marina',
    highlights: [
      'Relax on comfortable shaded sunbeds on Paradise Island beach',
      'Cruise on a spacious yacht with plenty of open sun deck space',
      'Fresh open buffet lunch featuring seafood, grilled chicken, and salads',
      '2 guided snorkeling stops at healthy coral reefs with colorful marine life',
      'Unlimited soft drinks, mineral water, tea, and coffee all day',
      'All island entrance tickets and permits included'
    ],
    description: "Relax on the soft white sands of Paradise Island. Enjoy shaded beach lounges, calm shallow turquoise waters, and fresh seafood lunch on board.",
    fullDescription: 'Spend a relaxing day sailing across the turquoise Red Sea to Paradise Island on Giftun Island. Famous for its clear water and peaceful atmosphere, Paradise Island is ideal for couples and families looking to swim, sunbathe on comfortable shaded daybeds, and enjoy a fresh lunch on board.\n\nYou will also enjoy two guided snorkeling stops at colorful coral reefs, where our dive guides will help you spot reef fish and marine life.',
    itinerary: [
      { time: '08:00 - 08:45', title: 'Hotel Pickup', description: 'Pickup from your hotel lobby in a clean air-conditioned vehicle.' },
      { time: '09:00', title: 'Sail to Giftun Island', description: 'Pleasant boat cruise with sea breezes and morning tea on the sun deck.' },
      { time: '10:15 - 12:45', title: 'Paradise Island Beach Time', description: 'Relax under shaded wooden umbrellas, swim in shallow blue waters, and sunbathe.' },
      { time: '13:00', title: 'Hot Buffet Lunch on the Yacht', description: 'Enjoy fresh fish, calamari, chicken, pasta, salads, and fresh fruits.' },
      { time: '14:00 - 15:15', title: 'Guided Coral Snorkeling Stops', description: 'Two 40-minute snorkeling stops along colorful coral reef drop-offs.' },
      { time: '16:00 - 16:30', title: 'Cruise Back & Hotel Drop-off', description: 'Relax on the sail back to the marina and transfer back to your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      'Comfortable yacht cruise',
      'Full snorkeling gear',
      'Open buffet lunch with seafood options',
      'Unlimited soft drinks & water',
      'National park fees'
    ],
    excluded: [
      'Island specialty drinks',
      'Personal photo service (optional)'
    ],
    whatToBring: [
      'Towel, swimwear, sunscreen, sunglasses, passport copy'
    ],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ozaria-island',
    slug: 'ozaria-island',
    title: 'Ozaria Island Day Trip',
    category: 'island',
    categoryLabel: 'Island Excursions',
    subtitle: 'Relaxed boho beach club, shallow turquoise water, wooden daybeds & fresh lunch on board',
    badge: 'Boho Beach',
    rating: 5.0,
    reviewsCount: 48,
    duration: '8 hours',
    groupSize: 'Small Group',
    departureTime: '09:00',
    pickupTime: '08:00 - 08:45',
    pickupInfo: 'Direct door-to-door transfer in comfortable AC vehicle',
    priceEUR: 65,
    priceUSD: 70,
    originalPriceEUR: 85,
    originalPriceUSD: 92,
    minAge: 5,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'Hurghada Private Yacht Club Pier',
    highlights: [
      'Hurghada’s newest beach island with relaxed boho style and quiet beaches',
      'Comfortable daybeds, shaded loungers, and warm turquoise water',
      'Freshly cooked lunch with chilled drinks and tropical fruit',
      'Peaceful atmosphere with no loud crowds — great for couples and families',
      'Guided snorkeling stops at colorful coral reefs with our marine instructors',
      'Friendly onboard crew to look after you all day'
    ],
    description: "Hurghada's newest beach island. Relaxed boho style, shallow turquoise water, peaceful atmosphere, and delicious lunch on board.",
    fullDescription: 'Get away from the crowds and enjoy the relaxed atmosphere of Ozaria Island. Designed with natural wood, shaded cabanas, and clean sand, Ozaria is a peaceful haven in the Red Sea. Swim in shallow clear water, unwind on comfortable daybeds, and snorkel colorful reefs with our friendly guides.',
    itinerary: [
      { time: '08:15 - 08:45', title: 'Hotel Pickup', description: 'Pickup from your resort in a comfortable air-conditioned van.' },
      { time: '09:00', title: 'Boat Cruise to Ozaria', description: 'Pleasant cruise with morning coffee, tea, and sea breeze.' },
      { time: '10:00 - 13:00', title: 'Ozaria Beach Relaxation', description: 'Unwind on daybeds, swim in the calm lagoon, and enjoy relaxed music.' },
      { time: '13:00', title: 'Fresh Lunch on Board', description: 'Freshly prepared lunch with grilled dishes, pasta, salads, and drinks.' },
      { time: '14:15 - 15:30', title: 'Guided Coral Snorkeling', description: 'Snorkel at a colorful reef wall filled with tropical fish.' },
      { time: '16:00 - 16:30', title: 'Cruise Back & Hotel Drop-off', description: 'Cruise back to the marina and transfer back to your hotel.' }
    ],
    included: [
      'Hotel transfer',
      'Comfortable boat cruise',
      'Daybeds & shaded lounges',
      'Fresh lunch & drinks',
      'Guided snorkeling stops',
      'Friendly onboard crew'
    ],
    excluded: [
      'Specialty drinks',
      'Personal souvenir photo package'
    ],
    whatToBring: [
      'Swimwear, sunglasses, sunscreen, beach hat, camera'
    ],
    images: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'island-bianka',
    slug: 'island-bianka',
    title: 'Bianka Island Day Trip',
    category: 'island',
    categoryLabel: 'Island Excursions',
    subtitle: 'Quiet boho beach island with clear shallow water, wooden cabanas & fresh lunch on board',
    badge: 'Quiet Island',
    rating: 4.9,
    reviewsCount: 78,
    duration: '8 hours',
    groupSize: 'Comfortable Boat',
    departureTime: '09:30',
    pickupTime: '08:30 - 09:15',
    pickupInfo: 'Complimentary transfer from all Hurghada & resort hotels',
    priceEUR: 65,
    priceUSD: 70,
    originalPriceEUR: 85,
    originalPriceUSD: 92,
    minAge: 5,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'Hurghada Private Marina',
    highlights: [
      'Quiet island beach with comfortable cabanas and sunbeds',
      'Peaceful coastal setting with clear turquoise waters and open sea views',
      'Fresh hot buffet lunch cooked on board with salads and desserts',
      'Guided snorkeling stop at quiet, colorful coral reefs',
      'Unlimited soft drinks, mineral water, and tea all day'
    ],
    description: "A peaceful boho-style island retreat with shallow turquoise waters, comfortable daybeds, and quiet beaches away from the crowds.",
    fullDescription: 'If you are looking for a relaxed, uncrowded day on the water, Bianka Island is a great choice. Built with natural wood cabanas and soft sunbeds on soft sand, it offers a peaceful day in the Red Sea. Enjoy swimming in calm shallow waters, snorkeling colorful coral reefs with our guide, and a delicious freshly cooked lunch on the boat.',
    itinerary: [
      { time: '08:30 - 09:15', title: 'Hotel Pickup', description: 'We pick you up from your hotel lobby in a clean air-conditioned van.' },
      { time: '09:30', title: 'Sail to Bianka Island', description: 'Cruise across turquoise waters with morning tea and sea breezes on deck.' },
      { time: '10:30 - 13:00', title: 'Bianka Island Beach Time', description: 'Relax in shaded cabanas, swim in the calm sea, and enjoy the sun.' },
      { time: '13:00', title: 'Fresh Buffet Lunch on Board', description: 'Enjoy a tasty hot lunch prepared fresh by our boat chef.' },
      { time: '14:15 - 15:30', title: 'Guided Coral Snorkeling', description: 'Snorkel at beautiful coral gardens filled with colorful fish.' },
      { time: '16:30', title: 'Return & Hotel Drop-off', description: 'Sail back to the marina and transfer back to your hotel.' }
    ],
    included: [
      'Boat cruise',
      'Sunbeds & private cabanas',
      'Hot lunch buffet',
      'Soft drinks & water all day',
      'Snorkeling gear & guide',
      'Round-trip hotel transfers'
    ],
    excluded: [
      'Personal photos'
    ],
    whatToBring: [
      'Swimwear, towel, sunscreen, sunglasses, camera'
    ],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'hula-hula',
    slug: 'hula-hula',
    title: 'Hula Hula Beach at Giftun Island',
    category: 'island',
    categoryLabel: 'Island Excursions',
    subtitle: 'Fun tropical beach club on Giftun Island with thatched umbrellas, wooden daybeds & relaxing music',
    badge: 'Beach Club',
    rating: 4.8,
    reviewsCount: 64,
    duration: '8 hours',
    groupSize: 'Comfortable Yacht',
    departureTime: '08:30',
    pickupTime: '07:30 - 08:15',
    pickupInfo: 'Free hotel pickup and drop-off across Hurghada',
    priceEUR: 30,
    priceUSD: 33,
    originalPriceEUR: 45,
    originalPriceUSD: 50,
    minAge: 3,
    difficulty: 'Easy',
    meetingPoint: 'Hurghada Port Pier',
    highlights: [
      'Fun tropical beach club on Giftun Island with island vibes and relaxing music',
      'Thatched umbrellas, wooden daybeds, and shallow turquoise water',
      '2 guided snorkeling stops at colorful coral reef walls',
      'Hot buffet lunch and unlimited drinks included on the boat',
      'Fun banana boat and water sofa rides included'
    ],
    description: "Enjoy a fun day at Hula Hula Beach on Giftun Island. Relax on wooden daybeds under thatched umbrellas, swim in warm clear water, and enjoy good music.",
    fullDescription: 'Hula Hula Beach brings a lively tropical island feel to the Red Sea. Relax on wooden sunbeds under natural thatched parasols, swim in shallow blue waters, and listen to relaxing music. After the beach, we take you to two colorful coral reefs for guided snorkeling, serve a hot lunch buffet on the boat, and enjoy fun banana boat rides.',
    itinerary: [
      { time: '07:45 - 08:15', title: 'Hotel Pickup', description: 'Pickup from your hotel lobby in an air-conditioned vehicle.' },
      { time: '08:30', title: 'Cruise to Giftun Island', description: 'Sail out with sea breezes and morning views on the sun deck.' },
      { time: '10:00 - 12:30', title: 'Hula Hula Beach Time', description: 'Relax under thatched umbrellas, swim in calm water, and enjoy the beach vibes.' },
      { time: '13:00', title: 'Lunch on the Boat', description: 'Fresh hot buffet with chicken, fish, pasta, salads, and fruit.' },
      { time: '14:00 - 15:30', title: 'Snorkeling Stops & Water Rides', description: 'Guided reef snorkeling and fun banana boat rides.' },
      { time: '16:30', title: 'Return & Hotel Drop-off', description: 'Sail back to the marina and transfer back to your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      'Boat cruise',
      'Hula Hula beach entrance ticket',
      'Snorkeling gear & guided stops',
      'Lunch buffet & unlimited drinks',
      'Banana boat ride'
    ],
    excluded: [
      'National Park fee ($5/person)',
      'Optional photo shoots'
    ],
    whatToBring: [
      'Towel, swimwear, sunscreen, sunglasses'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'hula-hula-sunset',
    slug: 'hula-hula-sunset',
    title: 'Hula Hula Sunset Cruise',
    category: 'sea',
    categoryLabel: 'Sea & Marine Trips',
    subtitle: 'Romantic late afternoon cruise sailing past the islands with warm sea breezes and mountain sunset views',
    badge: 'Sunset Cruise',
    rating: 4.9,
    reviewsCount: 39,
    duration: '4 hours',
    groupSize: 'Sunset Cruiser',
    departureTime: '16:00',
    pickupTime: '15:15 - 15:45',
    pickupInfo: 'Door-to-door transfer from all Hurghada hotels',
    priceEUR: 45,
    priceUSD: 49,
    originalPriceEUR: 60,
    originalPriceUSD: 65,
    minAge: 5,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'Hurghada Marina Pier',
    highlights: [
      'Peaceful late-afternoon cruise sailing past the Giftun islands',
      'Watch the golden sunset dip behind the Red Sea desert mountains',
      'Welcome tropical mocktail and fresh finger foods served on deck',
      'Soft acoustic music creating a relaxing, romantic atmosphere',
      'Golden hour photo stops with the sunset behind you'
    ],
    description: "A romantic late-afternoon cruise along the Red Sea coast. Watch the golden sunset over the desert mountains with chilled drinks and soft music.",
    fullDescription: 'Enjoy a peaceful evening on the water as the sun sets over the Red Sea. Cruise past quiet islands with soft music playing, sip a refreshing welcome mocktail, and watch the desert mountains turn shades of orange and gold in the evening light.',
    itinerary: [
      { time: '15:15 - 15:45', title: 'Hotel Pickup', description: 'Afternoon pickup from your hotel lobby to the marina.' },
      { time: '16:00', title: 'Boarding & Welcome Drink', description: 'Step aboard and enjoy a fresh chilled mocktail on the sun deck.' },
      { time: '16:30 - 18:30', title: 'Sunset Cruise & Music', description: 'Sail past Giftun islands, listen to acoustic tunes, and take sunset photos.' },
      { time: '18:30 - 19:30', title: 'Evening Snacks & Stargazing', description: 'Fresh snacks as the first stars appear across the night sky.' },
      { time: '20:00', title: 'Return & Hotel Drop-off', description: 'Dock at the marina and transfer back to your hotel.' }
    ],
    included: [
      'Hotel transfer',
      'Sunset boat cruise',
      'Welcome mocktail & snacks',
      'Live acoustic evening music',
      'Golden hour photo stops'
    ],
    excluded: [
      'Specialty drinks',
      'Personal photo album'
    ],
    whatToBring: [
      'Camera, light jacket for the evening breeze, sunglasses'
    ],
    images: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'dolphin-house',
    slug: 'dolphin-house',
    title: 'Dolphin House Snorkeling Trip',
    category: 'sea',
    categoryLabel: 'Sea & Marine Trips',
    subtitle: 'Swim with wild dolphins at Shaab El Erg reef with friendly marine guides & hot lunch on board',
    badge: 'Popular Choice',
    rating: 4.9,
    reviewsCount: 182,
    duration: '7 hours',
    groupSize: 'Comfortable Yacht',
    departureTime: '08:00',
    pickupTime: '07:00 - 07:45',
    pickupInfo: 'Free door-to-door AC transfer from all Hurghada, El Gouna, Makadi Bay & Sahl Hasheesh hotels',
    priceEUR: 25,
    priceUSD: 28,
    originalPriceEUR: 40,
    originalPriceUSD: 44,
    minAge: 4,
    difficulty: 'Moderate',
    isEcoFriendly: true,
    isBestseller: true,
    meetingPoint: 'Hurghada North Marina',
    highlights: [
      'High chance to see and swim near wild dolphins in their natural home at Shaab El Erg',
      'Respectful wildlife viewing guided by local marine experts',
      '2 guided snorkeling stops at healthy offshore coral reef walls',
      'Hot buffet lunch on the boat with fish, chicken, pasta, salads, and fruits',
      'Fun banana boat and water sofa rides included',
      'All snorkeling gear and life jackets included for swimmers and non-swimmers'
    ],
    description: "Swim near wild dolphins in the open sea at Shaab El Erg reef, followed by two guided coral reef snorkeling stops and hot buffet lunch.",
    fullDescription: 'Shaab El Erg is a natural horseshoe-shaped reef north of Hurghada known as the "Dolphin House". Because the water here is calm and full of fish, pods of wild bottlenose and spinner dolphins love spending time in this area year-round.\n\nWe practice responsible wildlife watching so the dolphins are never chased or stressed. When dolphins are swimming nearby, you can jump in with our guides to watch them swim and play in the clear blue water. You will also enjoy two snorkeling stops at colorful coral reefs, a fresh lunch buffet, and fun banana boat rides.',
    itinerary: [
      { time: '07:15 - 08:00', title: 'Hotel Pickup', description: 'Morning pickup from your hotel to the boat, with tea and a quick briefing on the day.' },
      { time: '08:30', title: 'Cruise North to Dolphin House', description: 'Enjoy a pleasant 1-hour cruise across the Red Sea looking for sea life.' },
      { time: '09:45 - 11:30', title: 'Dolphin Watching & Snorkeling', description: 'Arrive at the reef area and swim near curious wild dolphins with our guides.' },
      { time: '12:15', title: 'Hot Buffet Lunch on the Boat', description: 'Freshly cooked lunch with fish, chicken, rice, pasta, salads, and fruit.' },
      { time: '13:30', title: '2nd Snorkeling Stop — El Fanadir Reef', description: 'Explore a beautiful coral garden full of colorful reef fish and rays.' },
      { time: '14:45', title: '3rd Snorkeling Stop & Banana Boat', description: 'Final reef swim followed by fun water banana boat rides.' },
      { time: '15:30 - 16:00', title: 'Return & Hotel Drop-off', description: 'Relaxing cruise back to the marina and transfer back to your hotel.' }
    ],
    included: [
      'Hotel transfer',
      'Boat cruise to El Fanadir & Shaab El Erg',
      'Snorkeling near wild dolphins',
      'Snorkeling equipment & guide',
      'Lunch & drinks',
      'Banana boat / water sofa ride'
    ],
    excluded: [
      'Marine conservation fee ($5/person)',
      'Professional underwater photography (optional)'
    ],
    whatToBring: [
      'Towel, swimwear, reef-safe sunscreen, waterproof phone case, passport copy'
    ],
    images: [
      'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'diving',
    slug: 'diving',
    title: 'Red Sea Discovery Scuba Dive',
    category: 'sea',
    categoryLabel: 'Sea & Marine Trips',
    subtitle: 'Introductory 1-on-1 guided scuba diving for beginners or certified divers in warm clear waters',
    badge: 'PADI Certified',
    rating: 5.0,
    reviewsCount: 115,
    duration: '7 hours',
    groupSize: '1-on-1 Instructor for Beginners',
    departureTime: '08:00',
    pickupTime: '07:00 - 07:45',
    pickupInfo: 'Complimentary private transfer from all Hurghada hotels',
    priceEUR: 35,
    priceUSD: 38,
    originalPriceEUR: 50,
    originalPriceUSD: 55,
    minAge: 10,
    difficulty: 'Moderate',
    isVIP: true,
    isBestseller: true,
    meetingPoint: 'AquaWay Dive Center Marina',
    highlights: [
      '2 guided boat dives at two colorful coral reefs (depth 6m - 10m)',
      '1-on-1 dedicated instructor holding your hand the entire time — no swimming skills required',
      'All top-quality scuba gear (regulator, BCD vest, wetsuit, mask, tank) included',
      'Clear, friendly safety briefing in your language before you get in the water',
      'Delicious hot buffet lunch, snacks, and unlimited drinks on board'
    ],
    description: "Try scuba diving in the warm, clear Red Sea. Complete beginners get a private 1-on-1 instructor holding your hand every step of the way.",
    fullDescription: 'The Red Sea is one of the best places in the world to try scuba diving, with warm water and over 30 meters of clear visibility. Our Intro Scuba Dive is designed specifically for beginners who have never dived before and might even be nervous about swimming.\n\nOn the way to our first dive reef, your certified instructor explains how everything works in simple steps. Once in the water, your instructor holds your hand, manages all the equipment for you, and keeps you totally safe so you can just breathe, relax, and enjoy watching Nemo clownfish, stingrays, and sea turtles up close.',
    itinerary: [
      { time: '07:30 - 08:15', title: 'Hotel Pickup & Gear Sizing', description: 'Transfer to the boat and get fitted with your wetsuit, mask, and fins.' },
      { time: '08:30', title: 'Cruise Out & Easy Briefing', description: 'Cruise toward Abu Ramada Reef with a friendly step-by-step dive lesson in your language.' },
      { time: '10:00 - 11:30', title: 'Dive 1 — Shallow Reef Garden', description: 'First 20-30 minute dive up to 6 meters with your personal instructor holding your hand.' },
      { time: '12:00', title: 'Fresh Buffet Lunch on Deck', description: 'Hot lunch with fresh salads, grilled chicken, pasta, and fruits.' },
      { time: '13:30 - 15:00', title: 'Dive 2 — Coral Wall', description: 'Second guided dive at a new reef spot down to 8-10 meters.' },
      { time: '15:30 - 16:00', title: 'Relax & Return Transfer', description: 'Cruise back to harbor and relax on your transfer back to your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      '2 guided boat dives (introductory or certified)',
      'Full PADI-standard scuba equipment',
      '1-on-1 certified divemaster instruction',
      'Buffet lunch & drinks on boat'
    ],
    excluded: [
      'National Park conservation fee ($5/diver)',
      'Underwater HD photo and video package (optional)'
    ],
    whatToBring: [
      'Swimwear, towel, sunscreen, sunglasses, passport copy'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'nefertari',
    slug: 'nefertari',
    title: 'Nefertari Pharaoh Submarine',
    category: 'sea',
    categoryLabel: 'Sea & Marine Trips',
    subtitle: 'Pharaoh-styled semi-submarine with 4-meter underwater glass windows to see corals and fish without getting wet',
    badge: 'Underwater Views',
    rating: 4.8,
    reviewsCount: 86,
    duration: '4 hours',
    groupSize: 'Air-Conditioned Pharaoh Salon',
    departureTime: '09:30',
    pickupTime: '08:30 - 09:15',
    pickupInfo: 'Hotel pickup in comfortable AC vehicle across Hurghada',
    priceEUR: 95,
    priceUSD: 103,
    originalPriceEUR: 120,
    originalPriceUSD: 130,
    minAge: 1,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'Hurghada Port',
    highlights: [
      'Sit 4 meters underwater in an air-conditioned salon with large glass viewing windows',
      'Pharaoh-themed boat interior designed with golden Egyptian art',
      'See bright coral reefs, sea turtles, and colorful tropical fish without getting wet',
      'Clear, friendly coral explanations from our marine guide',
      'Optional guided snorkeling stop with all masks and vests provided',
      'Fresh lunch served in the salon'
    ],
    description: "See the Red Sea’s coral reefs and fish 4 meters beneath the surface through large glass windows in air-conditioned comfort, without getting wet.",
    fullDescription: 'Step aboard the Nefertari semi-submarine, decorated in golden pharaonic style. Relax in cool air conditioning behind large underwater windows as colorful fish, sea turtles, and coral gardens swim right past you. Great for families with young children, non-swimmers, or anyone who wants an effortless underwater view followed by a tasty lunch.',
    itinerary: [
      { time: '08:30 - 09:15', title: 'Hotel Pickup', description: 'Comfortable air-conditioned ride from your hotel to the harbor.' },
      { time: '09:30', title: 'Welcome & Surface Sail', description: 'Board the Nefertari and cruise gently out to the coral reef area.' },
      { time: '10:15 - 11:30', title: 'Underwater Viewing Session', description: 'Head down into the air-conditioned viewing cabin to watch fish and coral up close.' },
      { time: '11:45 - 12:30', title: 'Snorkeling Stop & Sun Deck', description: 'Jump in for an optional snorkel swim or relax on the sun deck.' },
      { time: '12:45', title: 'Lunch & Hotel Drop-off', description: 'Enjoy lunch on board before returning to the harbor and your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      'Air-conditioned underwater observation deck',
      'Pharaoh-themed boat lounge',
      'Friendly guide commentary',
      'Optional snorkeling stop with equipment',
      'Fresh lunch'
    ],
    excluded: [
      'Personal photo souvenir'
    ],
    whatToBring: [
      'Camera or smartphone, sunglasses, casual clothes'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'parasailing',
    slug: 'parasailing',
    title: 'Parasailing Adventure',
    category: 'adventure',
    categoryLabel: 'Adventure & Sports',
    subtitle: 'Soar high above the Red Sea for great 360-degree views of Hurghada, reefs, and mountains',
    badge: 'Fly Over Sea',
    rating: 4.9,
    reviewsCount: 110,
    duration: '1 hour',
    groupSize: 'Single or Tandem Flights',
    departureTime: 'Flexible',
    pickupTime: 'Hourly Schedule',
    pickupInfo: 'Free hotel pickup and return in Hurghada',
    priceEUR: 20,
    priceUSD: 22,
    originalPriceEUR: 30,
    originalPriceUSD: 33,
    minAge: 6,
    difficulty: 'Easy',
    meetingPoint: 'AquaWay Watersports Station Marina',
    highlights: [
      '10-15 minutes soaring high in the air above the turquoise Red Sea',
      'Panoramic 360-degree views of Hurghada, Giftun islands, and the desert mountains',
      'Smooth, gentle takeoff and landing directly from the back of the boat',
      'Fly solo or fly together side-by-side with a friend or partner',
      'Certified boat captain and top-quality safety gear provided'
    ],
    description: "Soar high above the turquoise Red Sea for panoramic views of Hurghada's coastline, islands, and desert mountains. Gentle takeoff and landing from the boat.",
    fullDescription: 'Enjoy the thrilling feeling of floating peacefully in the sky over Hurghada. Attached safely to a custom parachute, you take off gently right from the back of our specialized speed boat. Take in wonderful aerial views of clear reefs and coastal mountains before landing softly on the boat deck.',
    itinerary: [
      { time: 'Step 1', title: 'Hotel Pickup', description: 'Transfer from your resort to the watersports marina.' },
      { time: 'Step 2', title: 'Safety Briefing & Harness', description: 'Our certified captain explains everything and fits your life jacket and harness.' },
      { time: 'Step 3', title: 'Parasailing Flight', description: 'Smoothly lift off into the sky for 10-15 minutes of open-air flight.' },
      { time: 'Step 4', title: 'Smooth Landing & Return', description: 'Land gently on the boat deck and transfer back to your hotel.' }
    ],
    included: [
      'Speedboat transfer',
      'Safety briefing & harness',
      '10-15 min flight over the sea',
      'Single or tandem options',
      'Life jackets & safety boat'
    ],
    excluded: [
      'GoPro video recording (optional)'
    ],
    whatToBring: [
      'Swimwear or light beach clothes, sunglasses'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'super-safari',
    slug: 'super-safari',
    title: 'Super Safari 5-in-1 Desert Day',
    category: 'safari',
    categoryLabel: 'Desert Safari',
    subtitle: 'Quad biking, spider buggies, 4x4 Jeep ride, Bedouin village, camel ride, BBQ & live oriental show',
    badge: 'Top Safari',
    rating: 4.9,
    reviewsCount: 165,
    duration: '7 hours',
    groupSize: 'Small Guided Squads',
    departureTime: '12:30',
    pickupTime: '11:45 - 12:30',
    pickupInfo: 'Free 4x4 or AC mini-bus pickup from all Hurghada hotels',
    priceEUR: 35,
    priceUSD: 38,
    originalPriceEUR: 50,
    originalPriceUSD: 55,
    minAge: 6,
    difficulty: 'Moderate',
    isBestseller: true,
    meetingPoint: 'AquaWay Desert Safari Basecamp',
    highlights: [
      '45 minutes riding your own ATV quad bike across open desert sand dunes',
      '20 minutes racing in a fun desert spider buggy',
      'Exciting 4x4 Land Cruiser Jeep ride through desert valleys',
      'Visit a traditional Bedouin village with herbal tea and fresh hot bread',
      'Short camel ride across the golden sands at sunset',
      'Delicious open-air BBQ dinner with oriental show (belly dance, Tanoura, and fire show)',
      'Look at planets and stars through a computerized astronomy telescope'
    ],
    description: "Our #1 desert adventure. Drive quad bikes and buggies, ride a 4x4 Jeep into the mountains, visit a Bedouin village, ride a camel, and enjoy BBQ with a live show.",
    fullDescription: 'Experience the real Egyptian desert in one action-packed afternoon and evening. After pickup from your hotel, arrive at our safari station, put on your desert scarf and goggles, and ride an automatic ATV quad bike across the sand dunes.\n\nNext, race in a spider buggy, then jump into a heavy-duty 4x4 Jeep for an exciting ride deep into the mountains to meet a local Bedouin family. Sip authentic herbal tea, taste flatbread baked over open coals, ride a gentle camel, and finish the night with a tasty BBQ dinner and a live oriental folklore show under the stars.',
    itinerary: [
      { time: '12:30 - 13:15', title: 'Hotel Pickup & Safari Station', description: 'Transfer to the desert basecamp, get your scarf tied, and test your quad bike.' },
      { time: '13:30 - 14:15', title: 'Quad Biking in the Desert (45 min)', description: 'Ride across open sand plains and dunes behind our guide.' },
      { time: '14:30 - 15:00', title: 'Spider Buggy Drive (20 min)', description: 'Fun driving in a fast buggy on our desert track.' },
      { time: '15:15 - 17:00', title: '4x4 Jeep to Bedouin Village', description: 'Exciting Jeep ride to a Bedouin village with fresh tea and bread making.' },
      { time: '17:15', title: 'Sunset Camel Ride', description: 'Gentle camel ride across the dunes as the sun sets.' },
      { time: '18:00 - 19:15', title: 'BBQ Dinner & Live Show', description: 'Fresh grilled kofta, chicken, and salads followed by Tanoura spinning, belly dance, and fire show.' },
      { time: '19:30', title: 'Hotel Drop-off', description: 'Transfer comfortably back to your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off in 4x4 Land Cruiser',
      'ATV Quad Biking (approx. 45 min)',
      'Spider buggy ride (approx. 20 min)',
      'Bedouin village tour & herbal tea',
      'Camel ride',
      'Open buffet BBQ dinner',
      'Oriental show (Tanoura, belly dance, fire show)',
      'Stargazing through telescope'
    ],
    excluded: [
      'Desert scarf (Shemagh) and safety goggles ($3-5 at base or bring own)',
      'Souvenir photos and video'
    ],
    whatToBring: [
      'Comfortable clothes (long trousers recommended)',
      'Closed-toe shoes or sneakers',
      'Sunglasses and sunscreen',
      'Scarf/shemagh for dust protection',
      'Light jacket in winter months'
    ],
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'mini-safari',
    slug: 'mini-safari',
    title: 'Mini Desert Quad Safari',
    category: 'safari',
    categoryLabel: 'Desert Safari',
    subtitle: 'Fun 3-hour ATV quad biking trip across open sand dunes with Bedouin tea & camel ride',
    badge: 'Quick & Fun',
    rating: 4.8,
    reviewsCount: 92,
    duration: '3 hours',
    groupSize: 'Guided Quad Convoy',
    departureTime: '08:30 / 14:00',
    pickupTime: '45 mins prior to departure',
    pickupInfo: 'Free hotel pickup and return in Hurghada',
    priceEUR: 25,
    priceUSD: 28,
    originalPriceEUR: 35,
    originalPriceUSD: 38,
    minAge: 14,
    difficulty: 'Moderate',
    meetingPoint: 'AquaWay Safari Station',
    highlights: [
      '2 full hours riding automatic ATV quad bikes across open desert sands',
      'Fun trails through desert valleys and mountain foothills',
      'Stop at a welcoming Bedouin tent for fresh herbal tea and rest',
      'Short camel ride across golden sands included',
      'Choice of morning (08:30) or afternoon (14:00) start times'
    ],
    description: "A fun 3-hour quad biking trip across the desert dunes. Perfect if you want quick excitement without taking up your whole day.",
    fullDescription: 'Want a quick, exciting quad biking adventure without spending the entire day? Our 3-hour Mini Safari gets right to the fun. Ride an automatic ATV quad bike across open sands and scenic valleys, take a break at a traditional Bedouin tent for tea, and try a short camel ride before heading back.',
    itinerary: [
      { time: 'Step 1', title: 'Hotel Pickup & Safari Station', description: 'Transfer to the quad station, put on your helmet, and do a quick test drive.' },
      { time: 'Step 2', title: 'Desert Quad Biking Ride', description: 'Ride across open sand valleys behind our lead guide.' },
      { time: 'Step 3', title: 'Bedouin Tea & Camel Stop', description: 'Enjoy fresh mint tea in a Bedouin tent and a short camel ride.' },
      { time: 'Step 4', title: 'Ride Back & Hotel Drop-off', description: 'Ride your quad back to the station and relax on your transfer back to your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      'Automatic ATV quad bike',
      'Helmet & friendly safety lesson',
      'Bedouin tent tea stop',
      'Short camel ride'
    ],
    excluded: [
      'Desert scarf and goggles ($3 at base or bring your own)',
      'Souvenir photos'
    ],
    whatToBring: [
      'Closed shoes or sneakers, sunglasses, scarf'
    ],
    images: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'safari-stars',
    slug: 'safari-stars',
    title: 'Desert Safari & Stargazing by Night',
    category: 'safari',
    categoryLabel: 'Desert Safari',
    subtitle: 'Evening in the desert with 4x4 Jeep, mountain sunset, candlelit Bedouin dinner & telescope stargazing',
    badge: 'Stargazing',
    rating: 5.0,
    reviewsCount: 74,
    duration: '5 hours',
    groupSize: 'Small Group',
    departureTime: '16:00',
    pickupTime: '15:00 - 15:45',
    pickupInfo: 'Hotel pickup in 4x4 Jeep or AC vehicle',
    priceEUR: 45,
    priceUSD: 49,
    originalPriceEUR: 65,
    originalPriceUSD: 70,
    minAge: 4,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'AquaWay Astronomy Basecamp',
    highlights: [
      'Look at Saturn’s rings, Moon craters, and distant stars through large computerized telescopes',
      'Friendly talk by our local astronomer under clear, dark desert skies',
      '4x4 Jeep ride into quiet mountain valleys to watch the sunset',
      'Delicious candlelit Bedouin dinner with grilled meats, fresh salads, and hot bread',
      'Traditional Bedouin music and storytelling around the campfire'
    ],
    description: "A magical evening in the desert. Ride a 4x4 Jeep to watch the sunset, enjoy a candlelit BBQ dinner, and look at the stars and planets through high-powered telescopes.",
    fullDescription: 'Away from the city lights, the desert sky is filled with thousands of bright stars. Travel by 4x4 Jeep deep into the mountains to watch the sunset. Enjoy a relaxing candlelit dinner with fresh grilled food and local music, then look through our computerized telescopes as our astronomer shows you planets, moons, and constellations up close.',
    itinerary: [
      { time: '15:15 - 15:45', title: 'Hotel Pickup', description: 'Drive out into the desert mountains in a comfortable 4x4 Jeep.' },
      { time: '16:15 - 17:30', title: 'Sunset Mountain Viewpoint', description: 'Stop on a high mountain ridge to watch the sunset over the desert.' },
      { time: '17:45', title: 'Arrive at Bedouin Camp', description: 'Sit on comfortable floor cushions with fresh mint and herbal tea.' },
      { time: '18:15', title: 'Candlelit BBQ Dinner', description: 'Enjoy fresh grilled chicken, kofta, oriental salads, and hot coal-baked bread.' },
      { time: '19:15 - 20:30', title: 'Telescope Stargazing', description: 'Look at Saturn, Moon craters, and constellations through our telescopes with our guide.' },
      { time: '21:00', title: 'Return & Hotel Drop-off', description: 'Relax on the drive back to your hotel.' }
    ],
    included: [
      '4x4 Jeep transport into the desert',
      'Sunset mountain stop',
      'Fresh Bedouin BBQ dinner & bread making',
      'Friendly astronomer guide',
      'Computerized telescope stargazing (Saturn, Moon craters, stars)'
    ],
    excluded: [
      'Personal souvenir photo'
    ],
    whatToBring: [
      'Warm sweater or light jacket for the evening breeze, camera, comfortable shoes'
    ],
    images: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'pyramids',
    slug: 'pyramids',
    title: 'Day Trip to the Pyramids & Cairo',
    category: 'cultural',
    categoryLabel: 'Cultural & Historical',
    subtitle: 'Great Pyramids of Giza, Great Sphinx, Valley Temple, Egyptian Museum & Nile-view lunch',
    badge: 'Ancient Egypt',
    rating: 4.9,
    reviewsCount: 130,
    duration: '18 hours',
    groupSize: 'Comfortable AC Coach',
    departureTime: '02:00',
    pickupTime: '01:30 - 02:00',
    pickupInfo: 'Door-to-door hotel pickup in air-conditioned comfortable coach with professional driver',
    priceEUR: 55,
    priceUSD: 60,
    originalPriceEUR: 80,
    originalPriceUSD: 88,
    minAge: 4,
    difficulty: 'Moderate',
    isBestseller: true,
    meetingPoint: 'Hotel Lobby (Direct Pickup)',
    highlights: [
      'Stand right in front of the Great Pyramid of Giza — the only surviving Ancient Wonder of the World',
      'See the famous Great Sphinx of Giza and the Valley Temple up close',
      'Guided tour of the world-famous Egyptian Museum in Cairo with your guide',
      'Panoramic desert viewpoint to take photos of all 3 pyramids together',
      'Friendly licensed Egyptologist guide who speaks your language',
      'Open buffet lunch at a lovely restaurant on the River Nile'
    ],
    description: "Day trip to Cairo from Hurghada to see the Great Pyramids of Giza, the Sphinx, and the ancient treasures in the Egyptian Museum.",
    fullDescription: 'No holiday in Egypt is complete without seeing the Pyramids of Giza with your own eyes. We pick you up early from your hotel in a comfortable air-conditioned bus.\n\nIn Cairo, you will meet your friendly licensed Egyptologist guide who will walk you around the Giza Plateau, share the fascinating history of Khufu, Khafre, and Menkaure, and take you to the Great Sphinx. After a relaxing lunch at a restaurant on the Nile, you will visit the Egyptian Museum to see gold treasures, statues, and ancient pharaonic artifacts before heading back to Hurghada.',
    itinerary: [
      { time: '02:00', title: 'Hotel Pickup & Scenic Drive', description: 'Comfortable night drive along the coastal highway to Cairo with a rest & breakfast stop.' },
      { time: '08:30', title: 'Giza Pyramids Plateau', description: 'Walk around the pyramids of Khufu, Khafre, and Menkaure with panoramic photo stops.' },
      { time: '11:00', title: 'The Great Sphinx & Valley Temple', description: 'See the famous limestone Sphinx up close and explore the ancient temple.' },
      { time: '12:30', title: 'Lunch by the River Nile', description: 'Fresh open-buffet lunch at a quality restaurant overlooking the Nile.' },
      { time: '14:00', title: 'Egyptian Museum Tour', description: 'Guided walk through the world-famous collection of pharaonic treasures and statues.' },
      { time: '16:30', title: 'Papyrus & Perfume Art', description: 'See how ancient Egyptians made papyrus paper and natural flower perfumes.' },
      { time: '17:30 - 22:30', title: 'Return Drive to Hurghada', description: 'Comfortable bus ride back with drop-off right at your hotel lobby.' }
    ],
    included: [
      'Air-conditioned comfortable coach transfer',
      'Professional licensed Egyptologist guide',
      'Entry tickets to Giza Plateau (Khufu, Khafre, Menkaure)',
      'Great Sphinx & Valley Temple visit',
      'Egyptian Museum in Tahrir (or NMEC)',
      'Buffet lunch at restaurant on the Nile'
    ],
    excluded: [
      'Entry inside the Great Pyramid chamber (optional ticket at gate)',
      'Drinks at lunch restaurant'
    ],
    whatToBring: [
      'Original Passport (mandatory)',
      'Hotel breakfast box (order from reception the evening prior)',
      'Comfortable walking shoes, hat, sunglasses, cash for souvenirs'
    ],
    images: [
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'luxor',
    slug: 'luxor',
    title: 'Day Trip to Luxor & Valley of the Kings',
    category: 'cultural',
    categoryLabel: 'Cultural & Historical',
    subtitle: 'Karnak Temple, Valley of the Kings, Hatshepsut Temple, Colossi of Memnon & Nile crossing',
    badge: 'Ancient Egypt',
    rating: 4.9,
    reviewsCount: 125,
    duration: '16 hours',
    groupSize: 'Air-Conditioned Coach',
    departureTime: '05:00',
    pickupTime: '04:15 - 05:00',
    pickupInfo: 'Direct hotel pickup in clean AC vehicle',
    priceEUR: 70,
    priceUSD: 76,
    originalPriceEUR: 95,
    originalPriceUSD: 104,
    minAge: 4,
    difficulty: 'Moderate',
    isVIP: true,
    meetingPoint: 'Hotel Lobby (Direct Pickup)',
    highlights: [
      'Visit the Valley of the Kings with tickets to 3 royal pharaoh tombs included',
      'Walk among the giant columns of Karnak Temple — the largest temple complex in Egypt',
      'See the cliffside Temple of Queen Hatshepsut at Deir el-Bahari',
      'Cross the River Nile on a traditional boat',
      'Stop for photos at the giant 18-meter Colossi of Memnon statues',
      'Friendly licensed Egyptologist guide and delicious lunch included'
    ],
    description: "Full-day trip from Hurghada to Luxor. Explore Karnak Temple, cross the River Nile by boat, and visit ancient royal tombs in the Valley of the Kings.",
    fullDescription: 'Luxor is home to some of the most impressive ancient monuments in the world. Traveling through the mountains from Hurghada, you will explore the towering column halls of Karnak Temple, take a boat across the River Nile, admire the cliffside temple of Queen Hatshepsut, and step inside real pharaoh tombs in the Valley of the Kings with your certified guide.',
    itinerary: [
      { time: '04:30 - 05:00', title: 'Hotel Pickup & Mountain Drive', description: 'Scenic drive across the Red Sea mountains to Luxor with a breakfast stop.' },
      { time: '09:00', title: 'Karnak Temple Complex', description: 'Guided walk through the Avenue of Sphinxes and the massive column hall.' },
      { time: '11:30', title: 'Boat Crossing on the Nile', description: 'Cross the River Nile by boat with cool breezes and river views.' },
      { time: '12:15', title: 'Lunch by the River Nile', description: 'Fresh hot buffet lunch at a restaurant on the Nile.' },
      { time: '13:30', title: 'Valley of the Kings (3 Tombs)', description: 'Enter 3 royal pharaoh tombs with colorful 3,300-year-old wall paintings.' },
      { time: '15:15', title: 'Temple of Queen Hatshepsut', description: 'Explore the famous cliffside temple of Egypt’s great female ruler.' },
      { time: '16:15', title: 'Colossi of Memnon Statues', description: 'Photo stop at the massive 18-meter stone statues of Amenhotep III.' },
      { time: '17:00 - 21:00', title: 'Return Drive to Hurghada', description: 'Relax in air-conditioned comfort as we bring you back to your hotel.' }
    ],
    included: [
      'Air-conditioned coach transfer',
      'Certified Egyptologist guide',
      'Karnak Temple complex entry',
      'Valley of the Kings (3 royal tombs included)',
      'Temple of Queen Hatshepsut at Deir el-Bahari',
      'Colossi of Memnon',
      'Felucca boat crossing on the River Nile',
      'Buffet lunch'
    ],
    excluded: [
      'Entry ticket to Tutankhamun tomb (optional ticket at gate)',
      'Beverages during lunch'
    ],
    whatToBring: [
      'Original Passport (mandatory)',
      'Hotel breakfast box (order the evening before)',
      'Comfortable walking shoes, hat, sunscreen, cash for drinks/tips'
    ],
    images: [
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'city-tour',
    slug: 'city-tour',
    title: 'Hurghada City Highlights & Culture Tour',
    category: 'cultural',
    categoryLabel: 'Cultural & Historical',
    subtitle: 'El Mina Grand Mosque, Coptic Church, Old Fish Market, Marina promenade & spice bazaar',
    badge: 'City Tour',
    rating: 4.8,
    reviewsCount: 68,
    duration: '5 hours',
    groupSize: 'Small Group in Private Van',
    departureTime: '14:00',
    pickupTime: '13:15 - 13:45',
    pickupInfo: 'Hotel pickup in private air-conditioned van',
    priceEUR: 30,
    priceUSD: 33,
    originalPriceEUR: 40,
    originalPriceUSD: 44,
    minAge: 1,
    difficulty: 'Easy',
    meetingPoint: 'Hotel Lobby Pickup',
    highlights: [
      'Guided visit inside the beautiful El Mina Grand Mosque by the harbor',
      'Visit the historic St. Shenouda Coptic Orthodox Cathedral in old town',
      'See the authentic Old Port and bustling local fish market',
      'Stroll along the luxury yachts at Hurghada New Marina',
      'Free time to explore local Egyptian spice, tea, and natural perfume shops'
    ],
    description: "Get to know the real Hurghada. Visit the famous grand mosque, the historic church, the lively fish harbor, and walk along the modern marina.",
    fullDescription: 'Discover the real character of Hurghada beyond the resort walls. We will guide you through old town El Dahar, visit the impressive white marble El Mina Grand Mosque, walk through the historic Coptic cathedral, and watch local fishermen at the harbor before enjoying a pleasant stroll along the modern Hurghada Marina.',
    itinerary: [
      { time: '13:30 - 14:00', title: 'Hotel Pickup', description: 'Pick up from your hotel in a clean air-conditioned van.' },
      { time: '14:30', title: 'El Mina Grand Mosque', description: 'Walk inside the stunning white marble mosque by the water with our guide.' },
      { time: '15:30', title: 'Old Fish Market & Fishing Port', description: 'See traditional wooden fishing boats and the fresh catch of the day.' },
      { time: '16:15', title: 'St. Shenouda Coptic Cathedral', description: 'Admire the colorful stained glass and quiet courtyards of the historic church.' },
      { time: '17:15', title: 'Hurghada Marina & Spice Bazaar', description: 'Walk along the waterfront marina and browse natural spices, teas, and oils.' },
      { time: '18:30', title: 'Return & Hotel Drop-off', description: 'Drive back and drop off directly at your hotel.' }
    ],
    included: [
      'Hotel pickup & drop-off in private van',
      'Friendly local guide',
      'El Mina Grand Mosque visit',
      'St. Shenouda Coptic Cathedral visit',
      'Traditional Fish Market & Old Port',
      'Hurghada Marina walk',
      'Free time at local spice & tea shops'
    ],
    excluded: [
      'Personal shopping purchases'
    ],
    whatToBring: [
      'Modest clothing for mosque/church visits, camera, pocket cash for souvenirs'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'camel-riding',
    slug: 'camel-riding',
    title: 'Desert Camel Ride at Sunset',
    category: 'safari',
    categoryLabel: 'Desert Safari',
    subtitle: 'Gentle camel ride across golden desert sand dunes during sunset with Bedouin tea',
    badge: 'Desert Tradition',
    rating: 4.7,
    reviewsCount: 54,
    duration: '1 hour',
    groupSize: 'Small Camel Group',
    departureTime: 'Flexible / Sunset',
    pickupTime: '45 mins prior to departure',
    pickupInfo: 'Free hotel pickup and return in Hurghada',
    priceEUR: 15,
    priceUSD: 17,
    originalPriceEUR: 25,
    originalPriceUSD: 28,
    minAge: 4,
    difficulty: 'Easy',
    meetingPoint: 'AquaWay Bedouin Desert Camp',
    highlights: [
      '1-hour gentle camel ride across the golden sand dunes of the desert',
      'Friendly Bedouin camel handler guiding your ride every step of the way',
      'Rest stop in a Bedouin tent with fresh herbal tea',
      'Sunset photo stops on top of the dunes',
      'Great for kids, beginners, and families'
    ],
    description: "Enjoy a peaceful 1-hour camel ride across golden desert sand dunes at sunset, guided by friendly local Bedouins.",
    fullDescription: 'Experience the desert the traditional way on the back of a calm, friendly camel. Guided by local Bedouin handlers, you will sway gently across soft sand dunes as the sun sets over the mountains. Enjoy hot herbal tea in a Bedouin tent and take great holiday photos.',
    itinerary: [
      { time: 'Step 1', title: 'Hotel Pickup', description: 'Short ride from your hotel to the desert camel camp.' },
      { time: 'Step 2', title: 'Mount Camel & Ride', description: 'Get comfortably onto your camel and enjoy a 1-hour scenic trek across the dunes.' },
      { time: 'Step 3', title: 'Bedouin Tea & Sunset Photos', description: 'Enjoy fresh tea in a Bedouin tent and take sunset photos.' },
      { time: 'Step 4', title: 'Return to Hotel', description: 'Transfer back to your hotel lobby.' }
    ],
    included: [
      'Hotel pickup & drop-off',
      '1-hour guided camel ride',
      'Bedouin guide & handler',
      'Fresh mint tea in Bedouin tent',
      'Sunset photo stop'
    ],
    excluded: [
      'Souvenir photos'
    ],
    whatToBring: [
      'Comfortable trousers, sunglasses, camera, closed shoes'
    ],
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'horse-riding',
    slug: 'horse-riding',
    title: 'Beach & Desert Horseback Riding',
    category: 'adventure',
    categoryLabel: 'Adventure & Sports',
    subtitle: 'Ride gentle Arabian horses along the beach and across golden desert sands',
    badge: 'Arabian Horses',
    rating: 4.9,
    reviewsCount: 88,
    duration: '2 hours',
    groupSize: 'Small Guided Group',
    departureTime: 'Flexible / Sunrise / Sunset',
    pickupTime: '45 mins prior to ride',
    pickupInfo: 'Direct hotel pickup and return in AC vehicle',
    priceEUR: 15,
    priceUSD: 17,
    originalPriceEUR: 25,
    originalPriceUSD: 28,
    minAge: 6,
    difficulty: 'Moderate',
    meetingPoint: 'AquaWay Equestrian Stables',
    highlights: [
      'Ride well-trained Arabian horses suited to your experience level',
      'Scenic trail through open desert sands and along the Red Sea beach',
      'Option to ride horses into the shallow turquoise sea water',
      'Friendly riding instructor with you throughout the ride',
      'Sunrise and sunset times available for the best light'
    ],
    description: "Ride beautiful Arabian horses along the beach and through desert sands. Friendly horses matched to your experience level, from beginners to experienced riders.",
    fullDescription: 'Riding a horse on the shores of the Red Sea is a truly special memory. Whether you have never ridden before or ride regularly, our friendly instructors match you with the right horse. Ride across open desert sands and along the beach, with the option to take the horses into the shallow water.',
    itinerary: [
      { time: 'Step 1', title: 'Hotel Pickup & Stables Welcome', description: 'Transfer to the stables, helmet fitting, and matching you with your horse.' },
      { time: 'Step 2', title: 'Desert Trail Ride', description: 'Ride across open desert dunes with mountain views.' },
      { time: 'Step 3', title: 'Beach & Sea Ride', description: 'Ride along the shoreline with the option to take horses into shallow water.' },
      { time: 'Step 4', title: 'Return & Hotel Drop-off', description: 'Transfer back to your hotel.' }
    ],
    included: [
      'Hotel transfer',
      'Arabian horse matched to your skill',
      'Riding helmet & safety guidance',
      'Guided ride on beach & desert paths',
      'Option to ride in shallow water'
    ],
    excluded: [
      'Personal photo shoots'
    ],
    whatToBring: [
      'Long trousers, closed shoes or sneakers, sunglasses'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'spa',
    slug: 'spa',
    title: 'Turkish Hammam & Relaxing Spa',
    category: 'wellness',
    categoryLabel: 'Wellness & Spa',
    subtitle: 'Turkish Hammam, steam room, gentle body scrub, olive oil foam bath & full-body massage',
    badge: 'Spa & Massage',
    rating: 4.8,
    reviewsCount: 72,
    duration: '3 hours',
    groupSize: 'Private & Group Options',
    departureTime: 'Flexible',
    pickupTime: 'Hourly Schedule',
    pickupInfo: 'Free transfer from all Hurghada hotels',
    priceEUR: 30,
    priceUSD: 33,
    originalPriceEUR: 45,
    originalPriceUSD: 50,
    minAge: 12,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'AquaWay Spa Resort Hurghada',
    highlights: [
      'Authentic Turkish Hammam on warm heated marble stones',
      'Gentle exfoliating body scrub to clean and soften your skin',
      'Soothing olive oil foam bath and full-body foam wash',
      '45-minute relaxing full-body massage with natural scented oils',
      'Sauna, eucalyptus steam room, Jacuzzi, and hot herbal tea'
    ],
    description: "Treat yourself to a relaxing Turkish Hammam, gentle body scrub, olive oil foam bath, and a full-body oil massage to recharge during your holiday.",
    fullDescription: 'The perfect way to relax after days of swimming and desert adventures. Warm up on heated marble in our traditional Turkish Hammam, enjoy a gentle body scrub and olive oil foam wash, and let all your stress melt away with a 45-minute full-body massage using natural essential oils.',
    itinerary: [
      { time: 'Step 1', title: 'Hotel Pickup & Spa Welcome', description: 'Transfer to the spa, get your robe, and sip herbal tea.' },
      { time: 'Step 2', title: 'Sauna & Eucalyptus Steam', description: 'Warm up and relax in the sauna and fragrant steam rooms.' },
      { time: 'Step 3', title: 'Turkish Hammam & Scrub', description: 'Heated marble stone treatment with body scrub and soft olive oil foam.' },
      { time: 'Step 4', title: 'Full-Body Massage & Jacuzzi', description: '45-minute relaxing oil massage followed by Jacuzzi and tea lounge.' },
      { time: 'Step 5', title: 'Return Transfer', description: 'Relaxing ride back to your hotel.' }
    ],
    included: [
      'Hotel transfer',
      'Sauna & steam room',
      'Turkish body scrub',
      'Olive oil foam wash',
      '45-minute relaxing body massage',
      'Jacuzzi & herbal tea'
    ],
    excluded: [
      'Specialty facial treatments or hair care'
    ],
    whatToBring: [
      'Swimwear (towels, robes, and slippers provided at the spa)'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'speed-boat',
    slug: 'speed-boat',
    title: 'Private Speedboat Rental with Captain',
    category: 'sea',
    categoryLabel: 'Sea & Marine Trips',
    subtitle: 'Your own private speedboat with captain — choose where you want to go, swim with dolphins & visit quiet islands',
    badge: 'Private Boat',
    rating: 5.0,
    reviewsCount: 95,
    duration: '4 hours',
    groupSize: '100% Private (up to 8 people)',
    departureTime: 'Custom schedule',
    pickupTime: 'Transfer at Your Preferred Time',
    pickupInfo: 'Private door-to-door transfer at your chosen time',
    priceEUR: 150,
    priceUSD: 162,
    originalPriceEUR: 200,
    originalPriceUSD: 216,
    minAge: 1,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'Hurghada Marina Yacht Pier',
    highlights: [
      '100% private twin-engine speedboat exclusively for you, your family, or friends',
      'You pick the route: Visit Orange Bay, Paradise Island, look for wild dolphins, or relax on empty sandbanks',
      'Snorkel quiet, beautiful reefs away from the big tourist boats',
      'Fresh fruit platter, cold drinks, Bluetooth music, and quality snorkeling gear included',
      'Friendly private captain dedicated entirely to your group'
    ],
    description: "Rent your own private speedboat for your family or friends. Cruise to untouched reefs, look for dolphins, and visit quiet sandbars with your own private captain.",
    fullDescription: 'Skip the big tour crowds and explore the Red Sea at your own pace. Our private speedboat comes with comfortable sunbeds, Bluetooth sound system, shade canopy, freshwater shower, and a friendly captain. Choose where you want to go — stop at Orange Bay, search for wild dolphins, or anchor at quiet coral reefs with crystal clear water.',
    itinerary: [
      { time: '09:00 (Your Choice)', title: 'Private Hotel Pickup', description: 'Private transfer from your resort directly to the boat pier.' },
      { time: '09:30', title: 'Sail Out with Your Music', description: 'Connect your phone to Bluetooth and cruise across the blue waters.' },
      { time: '10:00 - 11:30', title: 'Sandbanks & Dolphin Spotting', description: 'Explore shallow crystal sandbanks and look for wild dolphins.' },
      { time: '11:45 - 13:00', title: 'Quiet Coral Snorkeling', description: 'Anchor at quiet reef spots with clear 30-meter visibility.' },
      { time: '13:00', title: 'Fresh Fruit & Drinks', description: 'Enjoy cold watermelon, mango, fresh fruit, and soft drinks on board.' },
      { time: '13:30', title: 'Return & Hotel Drop-off', description: 'Cruise back to the marina and transfer back to your hotel.' }
    ],
    included: [
      'Private speedboat & friendly captain',
      'Custom itinerary (Orange Bay, Paradise, dolphins, reefs)',
      'Snorkeling gear for all guests',
      'Chilled drinks & fresh seasonal fruit',
      'Fuel & marina fees included',
      'Round-trip private hotel transfers'
    ],
    excluded: [
      'Island entrance fee (Orange Bay / Paradise if requested, $15/person)'
    ],
    whatToBring: [
      'Swimwear, sunscreen, sunglasses, phone for music, towel'
    ],
    images: [
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'airport-shuttle',
    slug: 'airport-shuttle',
    title: 'Private Hurghada Airport Transfer',
    category: 'transfer',
    categoryLabel: 'Airport & Transfers',
    subtitle: 'Stress-free 24/7 private transfer between Hurghada Airport (HRG) and all Red Sea hotels',
    badge: 'Airport Transfer',
    rating: 4.9,
    reviewsCount: 210,
    duration: '1 hour',
    groupSize: 'Private Car or Minivan',
    departureTime: '24/7 Flight Sync',
    pickupTime: 'Matched with Your Flight',
    pickupInfo: 'Driver meets you at the terminal exit with your name on a sign',
    priceEUR: 10,
    priceUSD: 11,
    originalPriceEUR: 18,
    originalPriceUSD: 20,
    minAge: 0,
    difficulty: 'Easy',
    isVIP: true,
    meetingPoint: 'Hurghada International Airport (HRG) Arrival Hall',
    highlights: [
      'We track your flight in real time — if your flight is early or delayed, your driver will be waiting',
      'Friendly driver meets you inside the terminal with a sign showing your name',
      'Help with your luggage from the terminal straight into your air-conditioned car',
      'Direct rides to all hotels in Hurghada, El Gouna, Makadi Bay, Sahl Hasheesh, and Soma Bay',
      'Fixed honest price with no hidden parking or toll fees'
    ],
    description: "Easy, private door-to-door transfers between Hurghada Airport and all hotels. We track your flight and meet you with your name on a sign.",
    fullDescription: 'Start or end your holiday in Hurghada with zero stress. We monitor your flight live so our driver is always waiting for you at the airport arrivals hall with your name on a welcome sign. Relax in a clean, air-conditioned vehicle as we take you directly to your hotel lobby.',
    itinerary: [
      { time: 'Step 1', title: 'Live Flight Tracking', description: 'We check your flight arrival time and adjust automatically for any delays.' },
      { time: 'Step 2', title: 'Terminal Meet & Greet', description: 'Your driver greets you at the arrival exit with your name on a sign.' },
      { time: 'Step 3', title: 'Luggage Help', description: 'We help carry your suitcases into the air-conditioned car or van.' },
      { time: 'Step 4', title: 'Direct Hotel Delivery', description: 'Smooth, comfortable ride straight to your hotel reception.' }
    ],
    included: [
      'Live flight tracking with delay adjustments',
      'Meet & Greet at the airport with your name on a sign',
      'Luggage help',
      'Private air-conditioned car or van',
      'Fixed price with no extra parking or toll charges'
    ],
    excluded: [
      'Driver tips (optional)'
    ],
    whatToBring: [
      'Your flight number and hotel name'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'medical-care',
    slug: 'medical-care',
    title: 'Hurghada Medical Help & Doctor Visits',
    category: 'services',
    categoryLabel: 'Guest Services & Care',
    subtitle: '24/7 doctor hotel visits, clinic transfers & medical support for tourists in Hurghada',
    badge: '24/7 Doctor',
    rating: 5.0,
    reviewsCount: 40,
    duration: '1 hour',
    groupSize: 'Private On-Demand Care',
    departureTime: '24/7 On-demand',
    pickupTime: 'Immediate Response',
    pickupInfo: 'Doctor hotel room visit or direct emergency clinic transfer',
    priceEUR: 0,
    priceUSD: 0,
    originalPriceEUR: 0,
    originalPriceUSD: 0,
    minAge: 0,
    difficulty: 'Easy',
    meetingPoint: 'Your Hotel Room or Partner Clinic',
    highlights: [
      '24/7 medical hotline in English, German, Russian, and Arabic',
      'Qualified doctor sent directly to your hotel room when needed',
      'Help with paperwork for your European or international travel insurance',
      'Prescription medicines delivered right to your hotel reception',
      'Advice for scuba diving ear checks and general health questions'
    ],
    description: "24/7 medical support and doctor visits for tourists in Hurghada. Fast help in your hotel room and full assistance with travel insurance claims.",
    fullDescription: 'If you feel unwell or need medical help during your holiday, we are here for you 24/7. Working with certified international tourist clinics and licensed doctors in Hurghada, we arrange hotel room doctor visits, pharmacy medicine delivery, and help you with all travel insurance paperwork.',
    itinerary: [
      { time: 'Step 1', title: 'Call or WhatsApp Us', description: 'Message our 24/7 team on WhatsApp or give us a quick call.' },
      { time: 'Step 2', title: 'Doctor Visit or Clinic', description: 'A licensed doctor comes to your hotel room or we arrange a clinic ride.' },
      { time: 'Step 3', title: 'Checkup & Treatment', description: 'Friendly checkup, needed medicine, and official insurance receipts.' },
      { time: 'Step 4', title: 'Follow-up Support', description: 'We stay in touch to make sure you are feeling better.' }
    ],
    included: [
      '24/7 English & German speaking medical phone support',
      'Hotel doctor visit coordination',
      'Pharmacy medicine delivery to your hotel',
      'Insurance claim paperwork assistance'
    ],
    excluded: [
      'Hospital fees or medicines not covered by your travel insurance'
    ],
    whatToBring: [
      'Travel insurance policy number and passport'
    ],
    images: [
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', slug: 'all', name: 'All Excursions', count: 22, icon: 'Compass' },
  { id: 'island', slug: 'island', name: 'Island Excursions', count: 5, icon: 'Palmtree' },
  { id: 'sea', slug: 'sea', name: 'Sea & Marine', count: 5, icon: 'Anchor' },
  { id: 'adventure', slug: 'adventure', name: 'Adventure & Sports', count: 2, icon: 'Flame' },
  { id: 'safari', slug: 'safari', name: 'Desert Safari', count: 4, icon: 'Sun' },
  { id: 'cultural', slug: 'cultural', name: 'Cultural & Historical', count: 3, icon: 'Landmark' },
  { id: 'wellness', slug: 'wellness', name: 'Wellness & Spa', count: 1, icon: 'Sparkles' },
  { id: 'transfer', slug: 'transfer', name: 'Airport & Transfers', count: 1, icon: 'Car' },
  { id: 'services', slug: 'services', name: 'Guest Services', count: 1, icon: 'HeartPulse' },
];

export const CURRENCIES = {
  EUR: { code: 'EUR', symbol: '€', rateToEUR: 1.0, rateToUSD: 1.08, label: 'Euro (EUR €)' },
  USD: { code: 'USD', symbol: '$', rateToEUR: 1.08, rateToUSD: 1.0, label: 'US Dollar (USD $)' },
  GBP: { code: 'GBP', symbol: '£', rateToEUR: 0.86, rateToUSD: 0.79, label: 'British Pound (GBP £)' },
  EGP: { code: 'EGP', symbol: 'E£', rateToEUR: 53.0, rateToUSD: 48.5, label: 'Egyptian Pound (EGP)' },
  PLN: { code: 'PLN', symbol: 'zł', rateToEUR: 4.30, rateToUSD: 3.95, label: 'Polish Złoty (PLN zł)' },
  CHF: { code: 'CHF', symbol: 'CHF', rateToEUR: 0.96, rateToUSD: 0.88, label: 'Swiss Franc (CHF)' }
};

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇪🇬', dir: 'rtl' },
];
