import { DiveSpot, WeatherData, LanguageCode } from '../types';

export const CURRENT_WEATHER_DATA: Record<LanguageCode, WeatherData> = {
  en: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Sunny & Clear Skies',
    seaState: 'Calm',
    diveSuitability: 'Excellent'
  },
  de: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Sonnig & Klarer Himmel',
    seaState: 'Ruhig',
    diveSuitability: 'Ausgezeichnet'
  },
  ru: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Солнечно и ясно',
    seaState: 'Штиль',
    diveSuitability: 'Отлично'
  },
  pl: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Słonecznie i bezchmurnie',
    seaState: 'Spokojne',
    diveSuitability: 'Doskonałe'
  },
  fr: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Ensoleillé & Ciel dégagé',
    seaState: 'Calme',
    diveSuitability: 'Excellent'
  },
  it: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Soleggiato & Cielo limpido',
    seaState: 'Calmo',
    diveSuitability: 'Eccellente'
  },
  cs: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'Slunečno a jasno',
    seaState: 'Klidné',
    diveSuitability: 'Vynikající'
  },
  ar: {
    airTempC: 32,
    waterTempC: 28,
    windSpeedKnots: 9,
    waveHeightM: 0.4,
    uvIndex: 8,
    visibilityM: 30,
    condition: 'مشمس وسماء صافية',
    seaState: 'هادئ ومستقر',
    diveSuitability: 'ممتازة جداً'
  }
};

export const CURRENT_WEATHER = CURRENT_WEATHER_DATA.en;

export interface LocalizedDiveSpot {
  id: string;
  name: string;
  arabicName: string;
  depth: string;
  current: string;
  level: string;
  marineLife: string[];
  description: string;
  location: string;
  image: string;
}

export const LOCALIZED_DIVE_SPOTS: Record<LanguageCode, LocalizedDiveSpot[]> = {
  en: [
    {
      id: 'shaab-el-erg',
      name: 'Shaab El Erg (Dolphin House)',
      arabicName: 'شعب العرق',
      depth: '12m - 18m',
      current: 'Gentle',
      level: 'Beginner',
      marineLife: ['Bottlenose Dolphins', 'Spinner Dolphins', 'Manta Rays', 'Parrotfish', 'Moray Eels'],
      description: 'A world-famous horseshoe reef north of Hurghada famous for resident pods of playful wild dolphins and shallow vibrant coral gardens.',
      location: 'North Hurghada Straits',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Careless Reef',
      arabicName: 'كارلس ريف',
      depth: '16m - 40m',
      current: 'Moderate',
      level: 'Intermediate',
      marineLife: ['Giant Morays', 'Whitetip Reef Sharks', 'Barracudas', 'Giant Trevally', 'Gorgonian Fans'],
      description: 'Two massive coral pinnacles rising from a 40m plateau, populated by friendly giant moray eels and pelagic fish schools.',
      location: 'Offshore Hurghada',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Abu Ramada (The Aquarium)',
      arabicName: 'أبو رمادة',
      depth: '10m - 25m',
      current: 'Gentle',
      level: 'Beginner',
      marineLife: ['Clownfish', 'Emperor Angelfish', 'Blue-spotted Rays', 'Bannerfish', 'Table Corals'],
      description: 'Nicknamed "The Aquarium" for its sensational marine life density, table corals, and calm crystal clear waters.',
      location: 'South Hurghada Channel',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Giftun Island Marine Reserve',
      arabicName: 'جزيرة الجفتون',
      depth: '5m - 20m',
      current: 'Gentle',
      level: 'Beginner',
      marineLife: ['Green Sea Turtles', 'Hawksbill Turtles', 'Lionfish', 'Unicornfish', 'Hard Coral Fields'],
      description: 'Protected national park island surrounded by shallow turquoise lagoons, white sandbanks, and thriving coral reefs.',
      location: 'Giftun National Park',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  de: [
    {
      id: 'shaab-el-erg',
      name: 'Shaab El Erg (Dolphin House)',
      arabicName: 'شعب العرق',
      depth: '12m - 18m',
      current: 'Sanft',
      level: 'Anfänger',
      marineLife: ['Große Tümmler', 'Spinnerdelfine', 'Mantarochen', 'Papageienfische', 'Muränen'],
      description: 'Ein weltberühmtes Hufeisenriff nördlich von Hurghada, bekannt für dort heimische wilde Delfinschulen und bunte Flachwasserkorallengärten.',
      location: 'Nördliche Hurghada-Straße',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Careless Reef',
      arabicName: 'كارلس ريف',
      depth: '16m - 40m',
      current: 'Moderat',
      level: 'Fortgeschritten',
      marineLife: ['Riesenmuränen', 'Weißspitzen-Riffhaie', 'Barrakudas', 'Makrelen', 'Gorgonienfächer'],
      description: 'Zwei markante Korallentürme, die aus einem 40m tiefen Plateau aufragen – Heimat imposanter Riesenmuränen und Fischschwärme.',
      location: 'Offshore Hurghada',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Abu Ramada (Das Aquarium)',
      arabicName: 'أبو رمادة',
      depth: '10m - 25m',
      current: 'Sanft',
      level: 'Anfänger',
      marineLife: ['Clownfische', 'Kaiserfische', 'Blaupunktrochen', 'Wimpelfische', 'Tischkorallen'],
      description: 'Wegen seiner außergewöhnlichen Fischvielfalt und dem kristallklaren Wasser auch als "Das Aquarium" bekannt.',
      location: 'Südlicher Hurghada-Kanal',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Giftun Island Meeresschutzgebiet',
      arabicName: 'جزيرة الجفتون',
      depth: '5m - 20m',
      current: 'Sanft',
      level: 'Anfänger',
      marineLife: ['Grüne Meeresschildkröten', 'Echte Karettschildkröten', 'Rotfeuerfische', 'Nasendoktorfische', 'Steinkorallen'],
      description: 'Geschützte Nationalpark-Insel mit seichten türkisfarbenen Lagunen, weißem Sandstrand und intakten Korallenriffen.',
      location: 'Giftun Nationalpark',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  ru: [
    {
      id: 'shaab-el-erg',
      name: 'Шааб Эль Эрг (Дом Дельфинов)',
      arabicName: 'شعب العرق',
      depth: '12м - 18м',
      current: 'Слабое',
      level: 'Новичок',
      marineLife: ['Афалины', 'Длиннорылые дельфины', 'Манты', 'Рыбы-попугаи', 'Мурены'],
      description: 'Знаменитый подковообразный риф к северу от Хургады, где живут стаи диких дружелюбных дельфинов среди ярких коралловых садов.',
      location: 'Северный пролив Хургады',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Карлес Риф',
      arabicName: 'كارلس ريف',
      depth: '16м - 40м',
      current: 'Умеренное',
      level: 'Средний',
      marineLife: ['Гигантские мурены', 'Рифовые акулы', 'Барракуды', 'Каранксы', 'Морские веера'],
      description: 'Две величественные коралловые башни, поднимающиеся с 40-метрового плато, населенные крупными муренами и стаями пелагических рыб.',
      location: 'Открытое море Хургады',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Абу Рамада (Аквариум)',
      arabicName: 'أبو رمادة',
      depth: '10м - 25м',
      current: 'Слабое',
      level: 'Новичок',
      marineLife: ['Рыбы-клоуны', 'Рыбы-ангелы', 'Синепятнистые скаты', 'Вымпельные рыбы', 'Столовые кораллы'],
      description: 'Получил прозвище «Аквариум» за невероятную плотность разноцветных рыб, плоские столовые кораллы и кристальную прозрачность воды.',
      location: 'Южный канал Хургады',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Заповедник острова Гифтун',
      arabicName: 'جزيرة الجفتون',
      depth: '5м - 20м',
      current: 'Слабое',
      level: 'Новичок',
      marineLife: ['Зеленые черепахи', 'Черепахи бисса', 'Крылатки', 'Рыбы-носороги', 'Твердые кораллы'],
      description: 'Охраняемый национальный парк в окружении бирюзовых мелководных лагун, белоснежного песка и богатых коралловых рифов.',
      location: 'Национальный парк Гифтун',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  pl: [
    {
      id: 'shaab-el-erg',
      name: 'Shaab El Erg (Dom Delfinów)',
      arabicName: 'شعب العرق',
      depth: '12m - 18m',
      current: 'Łagodne',
      level: 'Początkujący',
      marineLife: ['Delfiny butlonose', 'Delfiny długoszczękie', 'Mantowate', 'Papugoryby', 'Mureny'],
      description: 'Słynna na całym świecie rafa na północ od Hurghady, gdzie w naturalnym środowisku żyją dzikie stada delfinów pośród koralowych ogrodów.',
      location: 'Cieśnina Północnej Hurghady',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Careless Reef',
      arabicName: 'كارلس ريف',
      depth: '16m - 40m',
      current: 'Umiarkowane',
      level: 'Średniozaawansowany',
      marineLife: ['Mureny olbrzymie', 'Żarłacze rafowe', 'Barakudy', 'Karangowate', 'Gorgonie'],
      description: 'Dwa potężne filary koralowe wyrastające z 40-metrowego plateau, zamieszkiwane przez mureny olbrzymie i ławice ryb.',
      location: 'Otwarte morze Hurghady',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Abu Ramada (Akwarium)',
      arabicName: 'أبو رمادة',
      depth: '10m - 25m',
      current: 'Łagodne',
      level: 'Początkujący',
      marineLife: ['Błazenki (Nemo)', 'Ustniczkowate', 'Ogończe niebieskoplame', 'Proporczykowate', 'Korale stołowe'],
      description: 'Nazywane „Akwarium” ze względu na niezwykłe bogactwo ryb, wspaniałe korale i krystalicznie przejrzystą wodę.',
      location: 'Kanał Południowej Hurghady',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Rezerwat Morski Wyspy Giftun',
      arabicName: 'جزيرة الجفتون',
      depth: '5m - 20m',
      current: 'Łagodne',
      level: 'Początkujący',
      marineLife: ['Żółwie zielone', 'Żółwie szylkretowe', 'Skrzydlice', 'Jednorożkowate', 'Pola korali twardych'],
      description: 'Chroniony park narodowy z płytkimi turkusowymi lagunami, białymi piaszczystymi plażami i tętniącymi życiem rafami.',
      location: 'Park Narodowy Giftun',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  fr: [
    {
      id: 'shaab-el-erg',
      name: 'Shaab El Erg (Maison des Dauphins)',
      arabicName: 'شعب العرق',
      depth: '12m - 18m',
      current: 'Calme',
      level: 'Débutant',
      marineLife: ['Grands dauphins', 'Dauphins à long bec', 'Raies mantas', 'Poissons-perroquets', 'Murènes'],
      description: 'Un récif légendaire en fer à cheval au nord d’Hurghada, réputé pour ses dauphins sauvages et ses magnifiques jardins de coraux.',
      location: 'Détroit Nord d’Hurghada',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Careless Reef',
      arabicName: 'كارلس ريف',
      depth: '16m - 40m',
      current: 'Modéré',
      level: 'Intermédiaire',
      marineLife: ['Murènes géantes', 'Requins à pointes blanches', 'Barracudas', 'Carangues', 'Gorgones'],
      description: 'Deux majestueux pitons coralliens émergeant d’un plateau de 40 m, fréquentés par de grandes murènes et des bancs de poissons pélagiques.',
      location: 'Au large d’Hurghada',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Abu Ramada (L’Aquarium)',
      arabicName: 'أبو رمادة',
      depth: '10m - 25m',
      current: 'Calme',
      level: 'Débutant',
      marineLife: ['Poissons-clowns', 'Poissons-anges empereurs', 'Raies à points bleus', 'Poissons-cochers', 'Coraux tabulaires'],
      description: 'Surnommé « L’Aquarium » pour sa concentration exceptionnelle en poissons tropicaux et ses eaux calmes et transparentes.',
      location: 'Chenal Sud d’Hurghada',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Réserve Marine de l’Île Giftun',
      arabicName: 'جزيرة الجفتون',
      depth: '5m - 20m',
      current: 'Calme',
      level: 'Débutant',
      marineLife: ['Tortues vertes', 'Tortues imbriquées', 'Rascasses volantes', 'Poissons-licornes', 'Champs de coraux durs'],
      description: 'Parc national insulaire protégé, bordé de lagons turquoise translucides, de bancs de sable blanc et de récifs préservés.',
      location: 'Parc National de Giftun',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  it: [
    {
      id: 'shaab-el-erg',
      name: 'Shaab El Erg (Casa dei Delfini)',
      arabicName: 'شعب العرق',
      depth: '12m - 18m',
      current: 'Leggera',
      level: 'Principiante',
      marineLife: ['Tursiopi', 'Delfini stenella', 'Mante', 'Pesci pappagallo', 'Murene'],
      description: 'Famosa barriera a ferro di cavallo a nord di Hurghada, celebre per i banchi stanziali di delfini selvatici e giardini corallini poco profondi.',
      location: 'Stretto Nord di Hurghada',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Careless Reef',
      arabicName: 'كارلس ريف',
      depth: '16m - 40m',
      current: 'Moderata',
      level: 'Intermedio',
      marineLife: ['Murene giganti', 'Squali pinna bianca', 'Barracuda', 'Carangidi', 'Gorgonie'],
      description: 'Due spettacolari pinnacoli di corallo che salgono da un pianoro a 40m, popolati da grandi murene e pesci pelagici.',
      location: 'Al largo di Hurghada',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Abu Ramada (L’Acquario)',
      arabicName: 'أبو رمادة',
      depth: '10m - 25m',
      current: 'Leggera',
      level: 'Principiante',
      marineLife: ['Pesci pagliaccio', 'Pesci angelo imperatore', 'Trigoni a macchie blu', 'Pesci farfalla', 'Coralli a tavola'],
      description: 'Soprannominato «L’Acquario» per la straordinaria varietà di vita marina, coralli a tavola e acque cristalline.',
      location: 'Canale Sud di Hurghada',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Riserva Marina dell’Isola Giftun',
      arabicName: 'جزيرة الجفتون',
      depth: '5m - 20m',
      current: 'Leggera',
      level: 'Principiante',
      marineLife: ['Tartarughe verdi', 'Tartarughe embricate', 'Pesci leone', 'Pesci unicorno', 'Campi di corallo duro'],
      description: 'Parco nazionale protetto circondato da lagune turchesi poco profonde, lingue di sabbia bianca e barriere coralline vive.',
      location: 'Parco Nazionale di Giftun',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  cs: [
    {
      id: 'shaab-el-erg',
      name: 'Shaab El Erg (Delfíní dům)',
      arabicName: 'شعب العرق',
      depth: '12m - 18m',
      current: 'Mírný',
      level: 'Začátečník',
      marineLife: ['Delfíni skákaví', 'Delfíni dlouhorypí', 'Manty', 'Papouščí ryby', 'Murény'],
      description: 'Světoznámý podkovovitý útes severně od Hurghady, proslulý divokými hejny delfínů a mělkými pestrými korálovými zahradami.',
      location: 'Severní průliv Hurghada',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'Careless Reef',
      arabicName: 'كارلس ريف',
      depth: '16m - 40m',
      current: 'Střední',
      level: 'Pokročilý',
      marineLife: ['Obří murény', 'Útesoví žraloci', 'Barakudy', 'Kranasové', 'Gorgonie'],
      description: 'Dva mohutné korálové sloupy vystupující ze 40m plošiny, obývané velkými murénami a hejny pelagických ryb.',
      location: 'Otevřené moře Hurghada',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'Abu Ramada (Akvárium)',
      arabicName: 'أبو رمادة',
      depth: '10m - 25m',
      current: 'Mírný',
      level: 'Začátečník',
      marineLife: ['Klauni (Nemo)', 'Císařské ryby', 'Modroskvrnité trnuchy', 'Klipky', 'Stolové korály'],
      description: 'Přezdívaný „Akvárium“ pro svou mimořádnou hustotu ryb, stolové korály a klidnou křišťálově čistou vodu.',
      location: 'Jižní kanál Hurghada',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'Mořská rezervace ostrova Giftun',
      arabicName: 'جزيرة الجفتون',
      depth: '5m - 20m',
      current: 'Mírný',
      level: 'Začátečník',
      marineLife: ['Karety obrovské', 'Karety pravé', 'Perutýni', 'Bodoci', 'Pole tvrdých korálů'],
      description: 'Chráněný národní park obklopený mělkými tyrkysovými lagunami, bílými písečnými plážemi a korálovými útesy.',
      location: 'Národní park Giftun',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  ar: [
    {
      id: 'shaab-el-erg',
      name: 'شعب العرق (بيت الدلافين)',
      arabicName: 'شعب العرق',
      depth: '12م - 18م',
      current: 'هادئ وخفيف',
      level: 'مبتدئ',
      marineLife: ['الدلافين الدوارة', 'الدلافين قارورية الأنف', 'أسماك الراي (المانتا)', 'أسماك الببغاء', 'الموراي'],
      description: 'شعاب مرجانية طبيعية هلالية الشكل شمال الغردقة، موطن لمجموعات دلافين برية تعيش بحرية وحدائق مرجانية خلابة.',
      location: 'مضيق شمال الغردقة',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'careless-reef',
      name: 'كارلس ريف',
      arabicName: 'كارلس ريف',
      depth: '16م - 40م',
      current: 'متوسط',
      level: 'متوسط',
      marineLife: ['أسماك الموراي العملاقة', 'قروش الشعاب بيضاء الطرف', 'الباراكودا', 'أسماك التريفالي', 'المراوح المرجانية'],
      description: 'برجان مرجانيان ضخمان ينبثقان من هضبة على عمق 40 متراً، وتزخر بأسراب الأسماك الكبيرة والموراي العملاقة.',
      location: 'عرض بحر الغردقة',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abu-ramada',
      name: 'أبو رمادة (الأكواريوم الطبيعي)',
      arabicName: 'أبو رمادة',
      depth: '10م - 25م',
      current: 'هادئ وخفيف',
      level: 'مبتدئ',
      marineLife: ['سمكة المهرج (نيمو)', 'سمكة الملاك الإمبراطورية', 'راي النقاط الزرقاء', 'الفراشة المخططة', 'المرجان المنضدي'],
      description: 'تُلقب بـ «الأكواريوم» لكثافة وتنوع الكائنات البحرية والأسماك الملونة والمياه الصافية الشفافة.',
      location: 'قناة جنوب الغردقة',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'giftun-island',
      name: 'محمية جزيرة جفتون البحرية',
      arabicName: 'جزيرة الجفتون',
      depth: '5م - 20م',
      current: 'هادئ وخفيف',
      level: 'مبتدئ',
      marineLife: ['السلاحف البحرية الخضراء', 'سلاحف صقرية المنقار', 'سمكة الأسد', 'سمكة وحيد القرن', 'حقول الشعاب الصلبة'],
      description: 'محمية وطنية طبيعية تضم بحيرات ضحلة فيروزية وشواطئ رملية بيضاء نقية وشعاباً مرجانية غنية بالحياة.',
      location: 'محمية الجفتون الوطنية',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export const DIVE_SPOTS: DiveSpot[] = LOCALIZED_DIVE_SPOTS.en;

export interface PickupZoneInfo {
  name: string;
  surcharge: string;
  time: string;
}

export const LOCALIZED_PICKUP_ZONES: Record<LanguageCode, PickupZoneInfo[]> = {
  en: [
    { name: 'Hurghada Central & Marina', surcharge: 'Free Included', time: '07:45 - 08:15 AM' },
    { name: 'Al Mamsha & El Kawther', surcharge: 'Free Included', time: '07:30 - 08:00 AM' },
    { name: 'Sahl Hasheesh', surcharge: 'Free Included', time: '07:15 - 07:45 AM' },
    { name: 'Makadi Bay', surcharge: 'Free Included', time: '07:00 - 07:30 AM' },
    { name: 'El Gouna', surcharge: '$10 / per person', time: '07:15 - 07:45 AM' },
    { name: 'Soma Bay & Safaga', surcharge: '$15 / per person', time: '06:45 - 07:15 AM' }
  ],
  de: [
    { name: 'Hurghada Zentrum & Marina', surcharge: 'Kostenlos inklusive', time: '07:45 - 08:15 Uhr' },
    { name: 'Al Mamsha & El Kawther', surcharge: 'Kostenlos inklusive', time: '07:30 - 08:00 Uhr' },
    { name: 'Sahl Hasheesh', surcharge: 'Kostenlos inklusive', time: '07:15 - 07:45 Uhr' },
    { name: 'Makadi Bay', surcharge: 'Kostenlos inklusive', time: '07:00 - 07:30 Uhr' },
    { name: 'El Gouna', surcharge: '10 $ / pro Person', time: '07:15 - 07:45 Uhr' },
    { name: 'Soma Bay & Safaga', surcharge: '15 $ / pro Person', time: '06:45 - 07:15 Uhr' }
  ],
  ru: [
    { name: 'Центр Хургады и Марина', surcharge: 'Бесплатно включено', time: '07:45 - 08:15' },
    { name: 'Эль Мамша и Эль Каусер', surcharge: 'Бесплатно включено', time: '07:30 - 08:00' },
    { name: 'Сахл Хашиш', surcharge: 'Бесплатно включено', time: '07:15 - 07:45' },
    { name: 'Макади Бэй', surcharge: 'Бесплатно включено', time: '07:00 - 07:30' },
    { name: 'Эль Гуна', surcharge: '10 $ / за человека', time: '07:15 - 07:45' },
    { name: 'Сома Бэй и Сафага', surcharge: '15 $ / за человека', time: '06:45 - 07:15' }
  ],
  pl: [
    { name: 'Centrum Hurghady i Marina', surcharge: 'Darmowy odbiór', time: '07:45 - 08:15' },
    { name: 'Al Mamsha i El Kawther', surcharge: 'Darmowy odbiór', time: '07:30 - 08:00' },
    { name: 'Sahl Hasheesh', surcharge: 'Darmowy odbiór', time: '07:15 - 07:45' },
    { name: 'Makadi Bay', surcharge: 'Darmowy odbiór', time: '07:00 - 07:30' },
    { name: 'El Gouna', surcharge: '10 $ / osoba', time: '07:15 - 07:45' },
    { name: 'Soma Bay i Safaga', surcharge: '15 $ / osoba', time: '06:45 - 07:15' }
  ],
  fr: [
    { name: 'Hurghada Centre & Marina', surcharge: 'Gratuit inclus', time: '07:45 - 08:15' },
    { name: 'Al Mamsha & El Kawther', surcharge: 'Gratuit inclus', time: '07:30 - 08:00' },
    { name: 'Sahl Hasheesh', surcharge: 'Gratuit inclus', time: '07:15 - 07:45' },
    { name: 'Makadi Bay', surcharge: 'Gratuit inclus', time: '07:00 - 07:30' },
    { name: 'El Gouna', surcharge: '10 $ / par personne', time: '07:15 - 07:45' },
    { name: 'Soma Bay & Safaga', surcharge: '15 $ / par personne', time: '06:45 - 07:15' }
  ],
  it: [
    { name: 'Hurghada Centro & Marina', surcharge: 'Gratuito incluso', time: '07:45 - 08:15' },
    { name: 'Al Mamsha & El Kawther', surcharge: 'Gratuito incluso', time: '07:30 - 08:00' },
    { name: 'Sahl Hasheesh', surcharge: 'Gratuito incluso', time: '07:15 - 07:45' },
    { name: 'Makadi Bay', surcharge: 'Gratuito incluso', time: '07:00 - 07:30' },
    { name: 'El Gouna', surcharge: '10 $ / a persona', time: '07:15 - 07:45' },
    { name: 'Soma Bay & Safaga', surcharge: '15 $ / a persona', time: '06:45 - 07:15' }
  ],
  cs: [
    { name: 'Centrum Hurghady & Marina', surcharge: 'Zdarma v ceně', time: '07:45 - 08:15' },
    { name: 'Al Mamsha & El Kawther', surcharge: 'Zdarma v ceně', time: '07:30 - 08:00' },
    { name: 'Sahl Hasheesh', surcharge: 'Zdarma v ceně', time: '07:15 - 07:45' },
    { name: 'Makadi Bay', surcharge: 'Zdarma v ceně', time: '07:00 - 07:30' },
    { name: 'El Gouna', surcharge: '10 $ / za osobu', time: '07:15 - 07:45' },
    { name: 'Soma Bay & Safaga', surcharge: '15 $ / za osobu', time: '06:45 - 07:15' }
  ],
  ar: [
    { name: 'وسط الغردقة والمارينا', surcharge: 'توصيل مجاني شامل', time: '07:45 - 08:15 صباحاً' },
    { name: 'الممشى السياحي والكوثر', surcharge: 'توصيل مجاني شامل', time: '07:30 - 08:00 صباحاً' },
    { name: 'سهل حشيش', surcharge: 'توصيل مجاني شامل', time: '07:15 - 07:45 صباحاً' },
    { name: 'خليج مكادي', surcharge: 'توصيل مجاني شامل', time: '07:00 - 07:30 صباحاً' },
    { name: 'الجونة', surcharge: '10 $ / للفرد', time: '07:15 - 07:45 صباحاً' },
    { name: 'سوما باي وسفاجا', surcharge: '15 $ / للفرد', time: '06:45 - 07:15 صباحاً' }
  ]
};

export const PICKUP_ZONES = LOCALIZED_PICKUP_ZONES.en;
