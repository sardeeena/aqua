import { Trip } from '../types';

export const POLISH_CATEGORIES: Record<string, string> = {
  all: 'Wszystkie Wycieczki',
  island: 'Wyspy i Plaże',
  sea: 'Rejsy i Nurkowanie',
  adventure: 'Sport i Emocje',
  safari: 'Safari Pustynne',
  cultural: 'Kultura i Historia',
  wellness: 'SPA i Relaks',
  transfer: 'Transfer z Lotniska',
  services: 'Opieka i Usługi',
};

export const POLISH_TRIPS: Partial<Record<string, Partial<Trip>>> = {
  'orange-bay': {
    title: 'Orange Bay Premium Wyprawa na Wyspę',
    categoryLabel: 'Wyspy i Plaże',
    subtitle: 'Turkusowa płytka laguna, biały aksamitny piasek, słynne huśtawki w wodzie i obiad w formie bufetu',
    badge: 'Bestseller',
    description: 'Najpopularniejsza wycieczka morska w Hurghadzie. Relaks na piaszczystej plaży Orange Bay, zdjęcia na huśtawkach w morzu i 2 postoje na snurkowanie.',
    fullDescription: 'Nazywana „Egipskimi Malediwami”, wyspa Orange Bay (Giftun) zachwyca płytką, krystalicznie czystą wodą i śnieżnobiałym piaskiem.\n\nPo rejsie luksusowym jachtem z Mariny Hurghada spędzisz 2 pełne godziny na wyspie pod drewnianymi parasolami. W programie są również 2 postoje na snurkowanie z przewodnikiem przy najpiękniejszych rafach koralowych, pyszny obiad z owocami morza i grillem na statku oraz przejażdżka na dmuchanym bananie.',
    meetingPoint: 'Nowa Marina w Hurghadzie',
    pickupInfo: 'Darmowy odbiór klimatyzowanym busem z każdego hotelu w Hurghadzie, El Gounie, Makadi i Sahl Hasheesh.',
    highlights: [
      '2 pełne godziny relaksu na bajecznej plaży Orange Bay (Wyspa Giftun)',
      '2 postoje na snurkowanie przy dziewiczych rafach koralowych',
      'Ciepły obiad w formie bufetu na statku: ryby, kurczak, makarony, sałatki i świeże owoce',
      'Nielimitowane napoje bezalkoholowe, woda mineralna, kawa i herbata',
      'Zabawa na dmuchanym bananie i kanapie wodnej w cenie',
      'Kompletny sprzęt do snurkowania i bilety wstępu na wyspę wliczone w cenę'
    ],
    included: [
      'Transfer w obie strony z hotelu',
      'Sprzęt do snurkowania (maska, rurka, płetwy, kamizelka)',
      'Obiad na statku i owoce',
      'Ciepłe i zimne napoje bez limitu',
      'Wstęp na wyspę Orange Bay (2 godziny)',
      '2 postoje na pływanie i snurkowanie',
      'Banan wodny'
    ],
    excluded: [
      'Opłata za park narodowy (5 USD / osoba płatne przy zbiórce)',
      'Zdjęcia i film podwodny od fotografa (opcjonalnie)'
    ],
    whatToBring: [
      'Strój kąpielowy i ręcznik plażowy z hotelu',
      'Okulary przeciwsłoneczne, nakrycie głowy i krem z filtrem',
      'Wodoodporne etui na telefon lub aparat',
      'Kserokopia paszportu'
    ]
  },
  'paradise-island': {
    title: 'Paradise Island Rejs VIP',
    categoryLabel: 'Wyspy i Plaże',
    subtitle: 'Biały piasek, turkusowe morze, zacienione leżaki VIP i obiad z owocami morza',
    badge: 'Wyspa VIP',
    description: 'Paradise Island to tropikalny raj na wyspie Giftun ze spokojną plażą, strefą leżaków i pysznym lunchem.',
    highlights: [
      'Wydzielona strefa leżaków VIP na plaży Paradise',
      'Luksusowy jacht z przestronnym pokładem słonecznym',
      'Obiad z owocami morza i grillem na pokładzie',
      '2 postoje na snurkowanie przy kolorowych rafach'
    ]
  },
  'ozaria-island': {
    title: 'Ozaria Luxury Island (Styl Boho)',
    categoryLabel: 'Wyspy i Plaże',
    subtitle: 'Elegancki design boho, spokojna laguna, komfortowe łoża plażowe i obiad gourmet',
    badge: 'Boho Luksus',
    description: 'Najnowsza, ekskluzywna wyspa w Hurghadzie w klimacie boho z prywatnymi kabinami plażowymi.',
    highlights: [
      'Nowoczesny beach club na wyspie w stylu boho',
      'Wygodne łoża plażowe i baldachimy',
      'Wyśmienity obiad autorski i świeże mocktaile',
      'Snurkowanie z polskojęzycznym instruktorem'
    ]
  },
  'island-bianka': {
    title: 'Island Bianka Ekskluzywna Plaża',
    categoryLabel: 'Wyspy i Plaże',
    subtitle: 'Kameralna oaza boho z krystaliczną wodą i romantycznymi widokami',
    badge: 'Ekskluzywne',
    description: 'Prywatna wyspa dla osób szukających ciszy, relaksu i pięknych kadrów.',
    highlights: [
      'Prywatna plaża z drewnianymi altanami',
      'Panoramiczny widok na Morze Czerwone'
    ]
  },
  'eden-island': {
    title: 'Eden Island Rejs Królewski',
    categoryLabel: 'Wyspy i Plaże',
    subtitle: 'Czysty biały piasek, krystaliczna woda, leżaki i błogi spokój',
    badge: 'Królewski Relaks',
    description: 'Nienaruszona przyroda, miękki piasek i znakomite warunki do snurkowania tuż przy brzegu.',
    highlights: [
      'Cicha plaża z dala od głośnej muzyki',
      'Piękna rafa koralowa tuż przy brzegu wyspy'
    ]
  },
  'mahmya-island': {
    title: 'Mahmya Plaża i Eko-Wyspa',
    categoryLabel: 'Wyspy i Plaże',
    subtitle: 'Chroniony rezerwat przyrody, włoska restauracja i bajeczne rafy',
    badge: 'Eko Raj',
    description: 'Ekskluzywny kurort na wyspie Giftun z najwyższym standardem gastronomii i zachwycającą rafą.',
    highlights: [
      'Plaża rezerwatu przyrody o najwyższym standardzie',
      'Restauracja z daniami kuchni śródziemnomorskiej',
      'Niezrównane snurkowanie w chronionym parku morskim'
    ]
  },
  'dolphin-house': {
    title: 'Dolphin House Rejs ze Snurkowaniem',
    categoryLabel: 'Rejsy i Nurkowanie',
    subtitle: 'Spotkanie z dzikimi delfinami w ich naturalnym środowisku i 2 postoje na rafach',
    badge: 'Mega Popularne',
    description: 'Rejs w rejon słynnej rafy El Samaka, gdzie stada dzikich delfinów pływają na wolności.',
    highlights: [
      'Pływanie i obserwacja dzikich delfinów na wolności',
      '2 postoje na snurkowanie przy spektakularnych rafach',
      'Świeży obiad i napoje na jachcie'
    ]
  },
  'intro-scuba-dive': {
    title: 'Pierwsze Nurkowanie z Butlą (PADI Discovery)',
    categoryLabel: 'Rejsy i Nurkowanie',
    subtitle: 'Dla początkujących i osób nieumiejących pływać: indywidualny instruktor 1-na-1 pod wodą',
    badge: 'Dla Początkujących',
    description: 'Bez doświadczenia! Bezpieczne nurkowanie do głębokości 7–10 metrów pod opieką instruktora PADI.',
    highlights: [
      '2 zejścia pod wodę po 20 minut z własnym instruktorem',
      'Dokładne szkolenie w języku polskim lub angielskim',
      'Kompletny, nowoczesny sprzęt nurkowy w cenie',
      'Pyszny obiad i snurkowanie między nurkowaniami'
    ]
  },
  'padi-open-water': {
    title: 'Kurs Nurkowania PADI Open Water Diver (3 Dni)',
    categoryLabel: 'Rejsy i Nurkowanie',
    subtitle: 'Międzynarodowy certyfikat nurkowy do 18m: teoria, zajęcia basenowe i 4 nurkowania w morzu',
    badge: 'Certyfikacja',
    description: 'Zdobądź dożywotni certyfikat PADI uprawniający do nurkowania na całym świecie.',
    highlights: [
      'Oficjalny międzynarodowy certyfikat PADI',
      'Teoria, ćwiczenia i 4 nurkowania z pokładu jachtu',
      'Doświadczeni instruktorzy i pełne bezpieczeństwo'
    ]
  },
  'sea-scope-semi-submarine': {
    title: 'Łódź Podwodna Semi-Submarine (Batyskaf)',
    categoryLabel: 'Rejsy i Nurkowanie',
    subtitle: 'Klimatyzowany podwodny pokład z wielkimi oknami na 3 metrach głębokości – super dla dzieci',
    badge: 'Dla Rodzin',
    description: 'Podziwiaj bajeczny świat raf i ryb bez wchodzenia do wody przez wielkie panoramiczne szyby.',
    highlights: [
      'Wielkie okna podwodne na głębokości 3 metrów',
      'Klimatyzowany salon z wygodnymi fotelami',
      'Postój na pływanie i snurkowanie w drodze powrotnej'
    ]
  },
  'parasailing-adventure': {
    title: 'Parasailing (Lot Spadochronem za Motorówką)',
    categoryLabel: 'Sport i Emocje',
    subtitle: 'Lot na wysokości 50 metrów nad Morzem Czerwonym z widokiem na całe wybrzeże Hurghady',
    badge: 'Adrenalina',
    description: 'Niezapomniane wrażenia i miękki start bezpośrednio z platformy motorówki. Loty solo lub w tandemie.',
    highlights: [
      'Widok z lotu ptaka na Morze Czerwone i pustynię',
      'Możliwość lotu we dwoje (tandem)',
      'Najwyższe atesty bezpieczeństwa'
    ]
  },
  'super-safari-desert': {
    title: 'Super Safari 5-w-1 na Pustyni',
    categoryLabel: 'Safari Pustynne',
    subtitle: 'Kłady (quady), buggy, jeepy do wioski Beduinów, wielbłądy, kolacja z grillem i show',
    badge: 'Hit Safari',
    description: 'Największa przygoda na pustyni: 45 min jazdy quadem, buggy, wyprawa jeepami 4x4 do Beduinów, wielbłądy i show z kolacją.',
    highlights: [
      '45 minut samodzielnej jazdy quadem po wydmach',
      'Przejażdżka buggy i rajd jeepami 4x4',
      'Wizyta w wiosce Beduinów z herbatą ziołową',
      'Przejażdżka na wielbłądach o zachodzie słońca',
      'Kolacja grillowa, taniec brzucha, tanoura i pokaz ognia'
    ]
  },
  'mega-quad-safari': {
    title: 'Mega Safari Quadami o Zachodzie Słońca',
    categoryLabel: 'Safari Pustynne',
    subtitle: '3 godziny czystej jazdy na quadach przez kaniony i wydmy w złotej godzinie',
    badge: 'Fani Quadów',
    description: 'Długa, ekscytująca trasa z postojem na szczycie góry na najpiękniejsze zdjęcia zachodu słońca.',
    highlights: [
      '3 godziny jazdy quadem po urozmaiconym terenie',
      'Postój widokowy na szczycie góry o zachodzie słońca',
      'Beduńska herbata w namiocie'
    ]
  },
  'stargazing-safari': {
    title: 'Safari Obserwacji Gwiazd z Teleskopami',
    categoryLabel: 'Safari Pustynne',
    subtitle: 'Profesjonalne teleskopy, prelekcja astronoma i romantyczna kolacja pod gwiazdami',
    badge: 'Romantyczne',
    description: 'Zobacz pierścienie Saturna i kratery Księżyca w sercu pustyni z dala od świateł miasta.',
    highlights: [
      'Obserwacje przez cyfrowe teleskopy o dużym powiększeniu',
      'Prelekcja o gwiazdozbiorach i kosmosie',
      'Kolacja przy świecach w beduińskim obozie'
    ]
  },
  'luxor-day-trip': {
    title: 'Wycieczka do Luksoru i Doliny Królów',
    categoryLabel: 'Kultura i Historia',
    subtitle: 'Karnak, Świątynia Hatszepsut, Kolosy Memnona, rejs po Nilu i polskojęzyczny egiptolog',
    badge: 'Dziedzictwo UNESCO',
    description: 'Podróż do starożytnej stolicy faraonów Teb. Zobacz słynne grobowce w Dolinie Królów i aleję sfinksów.',
    highlights: [
      'Wstęp do grobowców w Dolinie Królów i Świątyni Hatszepsut',
      'Zwiedzanie monumentalnego kompleksu w Karnaku',
      'Rejs łodzią po Nilu i obiad w restauracji',
      'Klimatyzowany autokar turystyczny i licencjonowany przewodnik'
    ]
  },
  'cairo-pyramids-tour': {
    title: 'Kair i Piramidy w Gizie (1 Dzień)',
    categoryLabel: 'Kultura i Historia',
    subtitle: 'Wielka Piramida Cheopsa, Sfinks, Muzeum Egipskie ze skarbami i bazar Chan al-Chalili',
    badge: 'Cud Świata',
    description: 'Zobacz jedyny ocalały cud starożytnego świata — Piramidy w Gizie oraz złoty skarb Tutanchamona.',
    highlights: [
      'Piramidy w Gizie i Wielki Sfinks',
      'Muzeum Egipskie w Kairze',
      'Obiad w restauracji z widokiem na Nil w cenie',
      'Licencjonowany przewodnik egiptolog'
    ]
  },
  'hurghada-city-tour': {
    title: 'Wycieczka Objazdowa po Hurghadzie',
    categoryLabel: 'Kultura i Historia',
    subtitle: 'Meczet El Mina, Nowa Marina, targ rybny, kościół koptyjski i bazar przypraw',
    badge: 'Zwiedzanie Miasta',
    description: 'Odkryj prawdziwe oblicze Hurghady: od tradycyjnej dzielnicy Dahar po nowoczesną marinę jachtową.',
    highlights: [
      'Główny Meczet El Mina i kościół koptyjski',
      'Spacer po marinie i targu z przyprawami i olejkami'
    ]
  },
  'turkish-bath-hamam': {
    title: 'Łaźnia Turecka Hamam, Sauna i Masaż',
    categoryLabel: 'SPA i Relaks',
    subtitle: 'Sauna, łaźnia parowa, peeling rękawicą Kessa, piana i 45 minut masażu olejkami',
    badge: 'Relaks SPA',
    description: 'Głęboki relaks dla ciała. Oczyszczenie skóry przygotowujące do pięknej, trwałej opalenizny.',
    highlights: [
      'Tradycyjny hamam na ciepłym marmurze i łaźnia parowa',
      'Peeling całego ciała i masaż pianą',
      '45 minut masażu relaksacyjnego olejkami aromatycznymi',
      'Darmowy transfer z hotelu i powrót'
    ]
  },
  'private-speedboat': {
    title: 'Prywatna Motorówka VIP ze Sternikiem',
    categoryLabel: 'Rejsy i Nurkowanie',
    subtitle: 'Rejs 100% na wyłączność dla Twojej rodziny: Orange Bay, delfiny i dzikie rafy',
    badge: '100% Prywatnie',
    description: 'Wynajmij szybką motorówkę ze sternikiem. Ty decydujesz o trasie i czasie postoju.',
    highlights: [
      'Nowoczesna dwusilnikowa motorówka tylko dla Waszej grupy',
      'Trasa dopasowana do życzeń: delfiny, łachy piasku, Orange Bay',
      'Patera świeżych owoców, napoje, muzyka Bluetooth i maski do snurkowania'
    ]
  },
  'airport-shuttle': {
    title: 'Prywatny Transfer z Lotniska w Hurghadzie',
    categoryLabel: 'Transfer z Lotniska',
    subtitle: 'Komfortowy transfer 24/7 z lotniska w Hurghadzie (HRG) do każdego hotelu',
    badge: 'Serwis 24/7',
    description: 'Powitanie z tabliczką z nazwiskiem w hali przylotów. Nowoczesne auta bez czekania i dopłat.',
    highlights: [
      'Śledzenie lotu na żywo – kierowca czeka w razie opóźnienia',
      'Osobiste powitanie z imienną tabliczką na terminalu',
      'Pomoc z walizkami i bezpośredni dojazd do recepcji hotelu',
      'Gwarantowana stała cena bez ukrytych opłat'
    ]
  },
  'medical-care': {
    title: 'Pomoc Medyczna i Wizyta Lekarza w Hotelu',
    categoryLabel: 'Opieka i Usługi',
    subtitle: 'Całodobowy lekarz z dojazdem do pokoju hotelowego i pomoc z ubezpieczeniem turystycznym',
    badge: 'Pomoc 24/7',
    description: 'Całodobowe wsparcie medyczne dla turystów w Hurghadzie i pomoc z dokumentami do ubezpieczenia.',
    highlights: [
      'Infolinia medyczna 24/7',
      'Wizyta lekarza bezpośrednio w pokoju hotelowym',
      'Wsparcie w formalnościach do polskiego ubezpieczenia'
    ]
  }
};
