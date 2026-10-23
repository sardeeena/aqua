import { Trip } from '../types';

export const GERMAN_CATEGORIES: Record<string, string> = {
  all: 'Alle Ausflüge',
  island: 'Inselausflüge',
  sea: 'Meer & Bootstouren',
  adventure: 'Abenteuer & Sport',
  safari: 'Wüstensafari',
  cultural: 'Kultur & Geschichte',
  wellness: 'Wellness & Spa',
  transfer: 'Flughafentransfer',
  services: 'Gästeservice',
};

export const GERMAN_TRIPS: Partial<Record<string, Partial<Trip>>> = {
  'orange-bay': {
    title: 'Orange Bay Premium Inselausflug',
    categoryLabel: 'Inselausflüge',
    subtitle: 'Kristallklare türkisfarbene Lagune, flache weiße Sandstrände, Holzschaukeln & Chef-Mittagsbuffet',
    badge: 'Bestseller',
    description: 'Hurghadas beliebtester Inselausflug. Entspannen Sie an weißen Sandstränden, machen Sie Fotos auf den Holzschaukeln und schnorcheln Sie an bunten Korallenriffen.',
    fullDescription: 'Oft als die „ägyptischen Malediven“ bezeichnet, ist die Orange Bay auf der Insel Giftun berühmt für ihr seichtes, türkisfarbenes Wasser und den feinen weißen Sand.\n\nNach einer malerischen Bootsfahrt ab der Hurghada Marina haben Sie volle zwei Stunden Zeit, um unter Sonnenschirmen zu entspannen, im warmen Wasser zu baden und unvergessliche Fotos auf den berühmten Wasserschaukeln zu machen. Anschließend bringen wir Sie zu zwei atemberaubenden Korallenriffen zum geführten Schnorcheln, servieren ein frisch zubereitetes Mittagsbuffet an Bord und runden den Tag mit Bananenboot-Fahrten ab.',
    meetingPoint: 'Hurghada New Marina Pier',
    pickupInfo: 'Kostenloser Hoteltransfer in klimatisierten Fahrzeugen ab allen Hotels in Hurghada, El Gouna, Makadi Bay und Sahl Hasheesh.',
    highlights: [
      '2 volle Stunden Entspannung am weißen Sandstrand der Orange Bay (Giftun Insel)',
      '2 geführte Schnorchelstopps an artenreichen Korallenriffen mit bunten Fischen',
      'Frisches warmes Mittagsbuffet an Bord mit gegrilltem Hähnchen, Fisch, Salaten & Obst',
      'Unbegrenzt alkoholfreie Getränke, Mineralwasser, Tee und Kaffee den ganzen Tag',
      'Inklusive Bananaboot- und Wassersofa-Fahrten',
      'Komplette Schnorchelausrüstung, Schwimmwesten und Inseleintritt inklusive'
    ],
    included: [
      'Hin- und Rücktransfer ab/bis Hotel',
      'Komplette Schnorchelausrüstung & Schwimmwesten',
      'Warmes Mittagsbuffet & frisches Obst',
      'Alkoholfreie Getränke, Kaffee & Tee unbegrenzt',
      'Orange Bay Inseleintritt (2 Stunden)',
      '2 geführte Schnorchelgänge an Korallenriffen',
      'Bananenboot & Wassersofa'
    ],
    excluded: [
      'Nationalpark-Umweltgebühr (5 $ / Person beim Check-in)',
      'Professionelles Foto- & Videopaket (optional)'
    ],
    whatToBring: [
      'Badekleidung und Strandtuch aus dem Hotel',
      'Sonnenbrille, Sonnenhut & riffschonende Sonnencreme',
      'Unterwasserkamera oder wasserdichte Handyhülle',
      'Kopie des Reisepasses'
    ]
  },
  'paradise-island': {
    title: 'Paradise Island VIP Kreuzfahrt',
    categoryLabel: 'Inselausflüge',
    subtitle: 'Weißer Sandstrand, türkisfarbenes Meer, schattige VIP-Lounges und Meeresfrüchte-Buffet',
    badge: 'VIP Insel',
    description: 'Paradise Island ist das tropische Paradies von Giftun mit ruhigen Stränden, VIP-Sitzbereichen und erstklassigem Meeresfrüchte-Buffet.',
    fullDescription: 'Segeln Sie an Bord unserer eleganten Yacht nach Paradise Island. Genießen Sie die entspannte Atmosphäre, schattige Strandliegen und kristallklares Wasser. Inklusive 2 Schnorchelgängen an unberührten Riffen und frischem Mittagessen.',
    meetingPoint: 'Große Marina Hurghada',
    pickupInfo: 'Kostenloser VIP-Transfer ab allen Hotels',
    highlights: [
      'Reservierte VIP-Sitzplätze am feinen Sandstrand von Paradise Island',
      'Geräumige Yacht mit Sonnendeck und klimatisiertem Salon',
      'Reichhaltiges Mittagsbuffet mit Meeresfrüchten und Grillgerichten',
      '2 Schnorchelstopps an unberührten Korallengärten',
      'Erfrischende Getränke und Früchte während der gesamten Fahrt'
    ],
    included: [
      'Hoteltransfer in modernen Fahrzeugen',
      'Luxus-Bootsfahrt & Schnorchelausrüstung',
      'Inselaufenthalt mit Liegen',
      'Mittagsbuffet mit Meeresfrüchten',
      'Getränke & Nationalparkgebühren'
    ]
  },
  'ozaria-island': {
    title: 'Ozaria Luxury Island (Boho-Stil)',
    categoryLabel: 'Inselausflüge',
    subtitle: 'Exklusives Boho-Design, türkisfarbene Lagune, gemütliche Strandbetten & Gourmet-Mittagessen',
    badge: 'Boho Luxus',
    description: 'Hurghadas neueste exklusive Insel im edlen Bohemian-Stil mit ruhiger Lagune, Luxus-Tagesbetten und Gourmet-Küche.',
    fullDescription: 'Entfliehen Sie dem Trubel und erleben Sie entspannten Boho-Luxus auf Ozaria Island. Perfekt für Paare und Familien, die Ruhe, Privatsphäre und stilvolles Ambiente schätzen.',
    highlights: [
      'Exklusiver neuer Boho-Strandclub auf der Insel',
      'Bequeme Strandbetten und schattige Cabanas',
      'Gourmet-Mittagessen vom Küchenchef & frische Mocktails',
      'Geführte Schnorchelgänge mit PADI-Instruktoren',
      'Ruhige, entspannte Atmosphäre in kleiner Gruppe'
    ]
  },
  'island-bianka': {
    title: 'Island Bianka Exklusiv-Ausflug',
    categoryLabel: 'Inselausflüge',
    subtitle: 'Boho-Chic Oase mit kristallklarem Wasser und romantischem Panoramablick',
    badge: 'Exklusiv',
    description: 'Island Bianka bietet eine Oase der Ruhe abseits der Massen mit stilvollen Holzhütten und erstklassigem Service.',
    highlights: [
      'Abgeschiedene Strandatmosphäre mit privaten Cabanas',
      'Panoramablick auf das offene Rote Meer',
      'Feine Sandstrände und seichte Schwimmzonen'
    ]
  },
  'eden-island': {
    title: 'Eden Island Royal Kreuzfahrt',
    categoryLabel: 'Inselausflüge',
    subtitle: 'Unberührter weißer Sand, ruhige Gewässer, Strandliegen und entspannte Atmosphäre',
    badge: 'Premium Ruhe',
    description: 'Eden Island bietet unberührte Natur, kristallklares Wasser und viel Freiraum für Erholungssuchende.',
    highlights: [
      'Ruhiger Strand ohne laute Musik und Menschenmassen',
      'Exzellente Schnorchelmöglichkeiten direkt vor dem Ufer',
      'Frisches Mittagsbuffet an Bord'
    ]
  },
  'mahmya-island': {
    title: 'Mahmya Beach & Eco-Island',
    categoryLabel: 'Inselausflüge',
    subtitle: 'Geschütztes Öko-Inselparadies, erstklassiges italienisches Restaurant & intakte Riffe',
    badge: 'Öko-Paradies',
    description: 'Mahmya ist das exklusive Naturschutz-Strandresort auf Giftun mit Gourmet-Gastronomie und spektakulärer Unterwasserwelt.',
    highlights: [
      'Geschützter Naturstrand mit feinstem Korallensand',
      'A-la-carte und Buffet-Catering auf Restaurant-Niveau',
      'Atemberaubendes Schnorcheln im Naturschutzgebiet'
    ]
  },
  'dolphin-house': {
    title: 'Dolphin House Schnorchel-Kreuzfahrt',
    categoryLabel: 'Meer & Bootstouren',
    subtitle: 'Beobachten Sie freilebende Delfine in ihrem natürlichen Lebensraum mit 2 Schnorchelstopps',
    badge: 'Sehr Beliebt',
    description: 'Fahren Sie zum berühmten El Samaka Riff, um wilde Delfinschulen beim Schwimmen und Springen im offenen Meer zu beobachten.',
    fullDescription: 'Erleben Sie die Faszination wilder Delfine im Roten Meer. Wir steuern das bekannte Dolphin House Riff an, wo Delfinfamilien regelmäßig spielen und jagen. Genießen Sie 2 geführte Schnorchelgänge und ein leckeres Mittagsbuffet an Bord.',
    highlights: [
      'Beobachtung wilder Delfine im natürlichen Lebensraum',
      '2 geführte Schnorchelgänge an spektakulären Riffwänden',
      'Frisch zubereitetes Mittagsbuffet & Getränke inklusive',
      'Erfahrene Guides mit Fokus auf respektvollen Tierschutz'
    ]
  },
  'intro-scuba-dive': {
    title: 'PADI Schnuppertauchen (Discovery Scuba)',
    categoryLabel: 'Meer & Bootstouren',
    subtitle: 'Perfekt für Anfänger & Nichtschwimmer mit persönlicher 1-zu-1 Instruktor-Betreuung unter Wasser',
    badge: 'Für Anfänger',
    description: 'Keine Vorkenntnisse nötig! Tauchen Sie sicher bis 7–10 Meter Tiefe an der Seite eines lizenzierten PADI-Tauchlehrers.',
    highlights: [
      '2 geführte Tauchgänge (je 20–25 Min.) mit persönlichem Tauchlehrer',
      'Ausführliche Sicherheitseinweisung in deutscher Sprache',
      'Komplette moderne Leihausrüstung inklusive',
      'Leckeres Mittagsbuffet und Schnorchelmöglichkeit an Bord'
    ]
  },
  'padi-open-water': {
    title: 'PADI Open Water Diver Tauchkurs (3 Tage)',
    categoryLabel: 'Meer & Bootstouren',
    subtitle: 'Weltweit anerkannter Tauchschein mit Theorie, Pooltraining und 4 Freiwassertauchgängen',
    badge: 'Zertifizierung',
    description: 'Werden Sie zertifizierter Taucher! Der weltweite Standard-Tauchschein mit erfahrenen PADI-Instruktoren in Hurghada.',
    highlights: [
      'International lebenslang gültiges PADI Brevet (bis 18 m)',
      'Theorie, Flachwasserübungen und 4 Boots-Tauchgänge im Meer',
      'Kleine Ausbildungsgruppen für maximale Sicherheit und Lernerfolg'
    ]
  },
  'sea-scope-semi-submarine': {
    title: 'Semi-U-Boot Korallenerkundung',
    categoryLabel: 'Meer & Bootstouren',
    subtitle: 'Klimatisierte Unterwasser-Aussichtskabine mit Panoramafenstern – ideal für Familien & Kinder',
    badge: 'Familienhit',
    description: 'Erleben Sie die bunte Korallenwelt und exotische Fische 3 Meter unter der Meeresoberfläche, ganz ohne nass zu werden.',
    highlights: [
      'Große Panorama-Unterwasserfenster in 3 m Tiefe',
      'Klimatisierter Beobachtungsraum mit Einzelsitzen',
      'Schnorchelstopp auf dem Oberdeck für alle, die schwimmen möchten'
    ]
  },
  'parasailing-adventure': {
    title: 'Parasailing & Wassersport-Kombi',
    categoryLabel: 'Abenteuer & Sport',
    subtitle: 'Schweben Sie 50 Meter über dem Roten Meer mit spektakulärem Blick auf Hurghadas Küste',
    badge: 'Adrenalin',
    description: 'Genießen Sie das unbeschreibliche Gefühl des Schwebens am Fallschirm hinter dem Speedboot mit Panoramablick auf die Wüste und das Meer.',
    highlights: [
      'Spektakulärer Flug über das azurblaue Rote Meer',
      'Einzel- oder Tandemflug für Paare und Freunde',
      'Höchste Sicherheitsstandards mit geprüftem Equipment'
    ]
  },
  'super-safari-desert': {
    title: 'Super Safari 5-in-1 Wüstentour',
    categoryLabel: 'Wüstensafari',
    subtitle: 'Quad Biking, Buggy, Jeepsafari ins Beduinendorf, Kamelreiten & orientalisches Barbecue',
    badge: 'Bestseller Safari',
    description: 'Das ultimative Wüstenabenteuer in Hurghada: 45 Min. Quad fahren, Spider-Buggy, Jeepfahrt ins Beduinendorf, Kamelritt, Sonnenuntergang und Grillabend mit Show.',
    highlights: [
      '45 Minuten Quad-Biking durch die Dünenlandschaft',
      'Fahrt mit dem Spider-Buggy und 4x4 Jeep-Expedition',
      'Besuch eines echten Beduinendorfes mit Kräutertee & Kamelreiten',
      'Großes Grill-Abendbuffet mit orientalischer Tanourashow & Feuershow'
    ]
  },
  'mega-quad-safari': {
    title: 'Mega Sonnenuntergangs-Quad-Safari',
    categoryLabel: 'Wüstensafari',
    subtitle: '3 Stunden reine Quad-Action durch Canyons und Wüstendünen zur goldenen Stunde',
    badge: 'Quad Spezial',
    description: 'Für alle echten Quad-Fans: Lange abwechslungsreiche Fahrt durch die Wüste mit Fotostopp bei spektakulärem Sonnenuntergang.',
    highlights: [
      '3 Stunden Quad-Fahrspaß auf anspruchsvollen Wüstenpisten',
      'Stopp auf einer Bergspitze mit Panoramablick zum Sonnenuntergang',
      'Traditioneller Beduinentee in der Wüstenhütte'
    ]
  },
  'stargazing-safari': {
    title: 'Sternenbeobachtung & Teleskop-Safari',
    categoryLabel: 'Wüstensafari',
    subtitle: 'Professionelle Teleskope, Astronomie-Vortrag, Beduinen-Dinner unter dem klaren Nachthimmel',
    badge: 'Romantisch',
    description: 'Erleben Sie den atemberaubenden Sternenhimmel der ägyptischen Wüste abseits jeder Lichtverschmutzung mit digitalen Teleskopen und Sternbilderkunde.',
    highlights: [
      'Beobachtung von Mondkratern, Saturnringen und Galaxien durch Großteleskope',
      'Führung durch einen erfahrenen Astronomen',
      'Romantisches Kerzenlicht-Dinner in den Wüstenbergen'
    ]
  },
  'luxor-day-trip': {
    title: 'Luxor & Tal der Könige Tagestour',
    categoryLabel: 'Kultur & Geschichte',
    subtitle: 'Karnak-Tempel, Hatschepsut, Kolosse von Memnon, Nilfahrt & deutschsprachiger Ägyptologe',
    badge: 'Kulturerbe',
    description: 'Reisen Sie in die antike Hauptstadt Theben. Entdecken Sie die weltberühmten Pharaonengräber im Tal der Könige und den majestätischen Karnak-Tempel.',
    highlights: [
      'Eintritt zu den Gräbern im Tal der Könige und zum Hatschepsut-Tempel',
      'Führung durch die gigantische Säulenhalle des Karnak-Tempels',
      'Malerische Nil-Überfahrt im Motorboot und Mittagessen im Restaurant',
      'Komfortable Anreise im klimatisierten VIP-Reisebus mit Guide'
    ]
  },
  'cairo-pyramids-tour': {
    title: 'Kairo & Pyramiden von Gizeh Tagesausflug',
    categoryLabel: 'Kultur & Geschichte',
    subtitle: 'Die Große Cheops-Pyramide, Sphinx, Ägyptisches Nationalmuseum & Basar Khan el-Khalili',
    badge: 'Weltwunder',
    description: 'Besuchen Sie das letzte verbliebene Weltwunder der Antike in Gizeh und die unschätzbaren Schätze von Tutanchamun im Ägyptischen Museum in Kairo.',
    highlights: [
      'Besichtigung der Pyramiden von Gizeh und der Großen Sphinx',
      'Geführter Rundgang durch das Ägyptische Museum mit Schätzen der Pharaonen',
      'Mittagessen mit Nilblick in Kairo inklusive',
      'Lizenzierter deutschsprachiger Ägyptologe während der gesamten Tour'
    ]
  },
  'hurghada-city-tour': {
    title: 'Hurghada Stadtrundfahrt & Highlights',
    categoryLabel: 'Kultur & Geschichte',
    subtitle: 'Große El-Mina-Moschee, Marina, Fischmarkt, koptische Kirche & traditioneller Gewürzbasar',
    badge: 'Stadtführung',
    description: 'Lernen Sie das authentische Leben in Hurghada kennen: Von der Altstadt Dahar über die prächtige Moschee bis zur modernen Marina.',
    highlights: [
      'Besuch der imposanten El-Mina-Moschee und der koptischen Kirche',
      'Spaziergang über den bunten Fischmarkt und traditionellen Gewürzbasar',
      'Panoramablick auf den Hafen von Hurghada'
    ]
  },
  'turkish-bath-hamam': {
    title: 'Türkisches Bad, Hamam & Ganzkörpermassage',
    categoryLabel: 'Wellness & Spa',
    subtitle: 'Sauna, Dampfbad, Peeling mit Kese-Handschuh, Schaummassage & 45 Min. Aromaöl-Massage',
    badge: 'Wellness',
    description: 'Die ultimative Entspannung für Ihren Urlaub. Bereiten Sie Ihre Haut mit Peeling und Schaumbad auf eine langanhaltende Bräune vor.',
    highlights: [
      'Traditionelles Hamam mit warmem Marmorstein und Dampfbad',
      'Körperpeeling zur Hautreinigung und Schaummassage',
      '45 Minuten entspannende Ganzkörpermassage mit ägyptischen Aromaölen',
      'Kostenloser Abholservice von Ihrem Hotel'
    ]
  },
  'private-speedboat': {
    title: 'VIP Privates Speedboot Charter',
    categoryLabel: 'Meer & Bootstouren',
    subtitle: '100% private Fahrt mit eigenem Kapitän, Wunschroute (Orange Bay, Delfine, einsame Riffe)',
    badge: '100% Privat',
    description: 'Mieten Sie Ihr eigenes Speedboot für Familie oder Freunde. Entdecken Sie unberührte Riffe und Sandbänke ganz ohne fremde Touristen.',
    highlights: [
      'Modernes Doppelmotor-Speedboot exklusiv für Ihre Gruppe',
      'Individuelle Route: Delphinsuche, Orange Bay oder einsame Sandbänke',
      'Frischer Obstteller, gekühlte Getränke, Bluetooth-Musik & Schnorchelausrüstung'
    ]
  },
  'airport-shuttle': {
    title: 'Privater Hurghada Flughafentransfer',
    categoryLabel: 'Flughafentransfer',
    subtitle: 'Zuverlässiger 24/7 Direkttransfer zwischen Flughafen Hurghada (HRG) und allen Hotels',
    badge: '24/7 Service',
    description: 'Starten Sie Ihren Urlaub stressfrei: Wir empfangen Sie mit Namensschild in der Ankunftshalle und bringen Sie direkt zu Ihrem Hotel.',
    highlights: [
      'Live-Flugüberwachung – Fahrer wartet auch bei Verspätungen ohne Aufpreis',
      'Persönlicher Empfang am Terminalausgang mit Namensschild',
      'Gepäckhilfe und klimatisierte Privatfahrzeuge',
      'Fester Festpreis ohne versteckte Gebühren'
    ]
  },
  'medical-care': {
    title: 'Ärztliche Versorgung & Hotel-Notfalldienst',
    categoryLabel: 'Gästeservice',
    subtitle: '24/7 Hotel-Arztbesuche, Kliniküberweisungen und Unterstützung bei Reiseversicherungen',
    badge: '24/7 Notdienst',
    description: 'Rund um die Uhr medizinische Unterstützung für Touristen in Hurghada. Schnelle Hilfe im Hotelzimmer und Abwicklung mit Ihrer Reisekrankenversicherung.',
    highlights: [
      'Deutsch- und englischsprachige 24/7 Hotline',
      'Qualifizierter Arztbesuch direkt in Ihrem Hotelzimmer',
      'Hilfe bei Unterlagen für Auslandskrankenversicherungen'
    ]
  }
};
