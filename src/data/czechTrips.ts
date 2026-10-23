import { Trip } from '../types';

export const CZECH_CATEGORIES: Record<string, string> = {
  all: 'Všechny Výlety',
  island: 'Ostrovní Výlety',
  sea: 'Plavby a Potápění',
  adventure: 'Sport a Adrenalin',
  safari: 'Pouštní Safari',
  cultural: 'Historie a Kultura',
  wellness: 'Wellness a Spa',
  transfer: 'Letištní Transfer',
  services: 'Služby a Péče',
};

export const CZECH_TRIPS: Partial<Record<string, Partial<Trip>>> = {
  'orange-bay': {
    title: 'Prémiový Výlet na Ostrov Orange Bay',
    categoryLabel: 'Ostrovní Výlety',
    subtitle: 'Průzračná tyrkysová laguna, bílý písek, ikonické dřevěné houpačky ve vodě a obědový bufet',
    badge: 'Bestseller',
    description: 'Nejoblíbenější lodní výlet v Hurghadě. Relax na bílých písečných plážích ostrova Orange Bay, focení na vodních houpačkách a 2 zastávky na šnorchlování.',
    fullDescription: 'Často nazývaný „Egyptské Maledivy“, ostrov Orange Bay na ostrově Giftun láká na mělkou tyrkysovou vodu a jemný bílý písek.\n\nPo plavbě luxusní jachtou z maríny v Hurghadě budete mít 2 celé hodiny na odpočinek pod dřevěnými slunečníky. V ceně jsou také 2 zastávky na šnorchlování s instruktorem u korálových útesů, čerstvý oběd formou bufetu přímo na lodi a jízda na nafukovacím banánu.',
    meetingPoint: 'Nový přístav Marina Hurghada',
    pickupInfo: 'Bezplatný transfer klimatizovaným minibusem ze všech hotelů v Hurghadě, El Gouně, Makadi a Sahl Hasheesh.',
    highlights: [
      '2 plné hodiny odpočinku na písečné pláži Orange Bay (ostrov Giftun)',
      '2 zastávky na šnorchlování u pestrobarevných korálových útesů s rybami',
      'Teplý obědový bufet na lodi: ryby, grilované kuře, těstoviny, saláty a ovoce',
      'Neomezené nealkoholické nápoje, minerální voda, káva a čaj po celý den',
      'Jízda na vodním banánu a nafukovací pohovce v ceně',
      'Kompletní šnorchlovací výbava, záchranné vesty a vstupné na ostrov v ceně'
    ],
    included: [
      'Vyzvednutí a návrat do hotelu',
      'Šnorchlovací výbava a záchranné vesty',
      'Oběd formou bufetu a čerstvé ovoce',
      'Nealkoholické nápoje a teplé nápoje neomezeně',
      'Vstupné na ostrov Orange Bay (2 hodiny)',
      '2 zastávky na plavání a šnorchlování',
      'Jízda na nafukovacím banánu'
    ],
    excluded: [
      'Poplatek za národní park (5 USD / osoba při registraci)',
      'Podvodní foto a video balíček od fotografa (volitelně)'
    ],
    whatToBring: [
      'Plavky a plážový ručník z hotelu',
      'Sluneční brýle, pokrývku hlavy a opalovací krém šetrný ke korálům',
      'Vodotěsný obal na telefon nebo podvodní fotoaparát',
      'Kopii pasu'
    ]
  },
  'paradise-island': {
    title: 'Paradise Island VIP Plavba',
    categoryLabel: 'Ostrovní Výlety',
    subtitle: 'Bílý písek, tyrkysové moře, stíněná VIP lehátka a bufet s mořskými plody',
    badge: 'VIP Ostrov',
    description: 'Paradise Island je tropický ráj na ostrově Giftun s pohodlnými lehátky, čistou vodou a skvělým obědem.',
    highlights: [
      'Vyhrazená VIP zóna s lehátky na pláži Paradise Island',
      'Luxusní jachta se sluneční palubou a salonkem',
      'Obědový bufet s rybami a grilovanými pokrmy',
      '2 zastávky na šnorchlování u nedotčených útesů'
    ]
  },
  'ozaria-island': {
    title: 'Ostrov Ozaria Luxury (Boho Styl)',
    categoryLabel: 'Ostrovní Výlety',
    subtitle: 'Exkluzivní boho design, klidná tyrkysová laguna, plážová lůžka a gurmánský oběd',
    badge: 'Boho Luxus',
    description: 'Nejnovější luxusní ostrov v Hurghadě v bohémském stylu s privátními kabánami a uvolněnou atmosférou.',
    highlights: [
      'Nejnovější stylový boho plážový klub na ostrově',
      'Pohodlná plážová lůžka a stíněné altány',
      'Gurmánský oběd a čerstvé ovocné mocktaily',
      'Šnorchlování s certifikovanými instruktory'
    ]
  },
  'island-bianka': {
    title: 'Ostrov Bianka Exkluzivní Zážitky',
    categoryLabel: 'Ostrovní Výlety',
    subtitle: 'Klidná boho oáza s průzračnou vodou a romantickými panoramatickými výhledy',
    badge: 'Exkluzivní',
    description: 'Klidný ostrov navržený pro páry a ty, kteří hledají ticho, relax a nádherné fotky.',
    highlights: [
      'Poklidná atmosféra se soukromými kabánami',
      'Panoramatický výhled na Rudé moře'
    ]
  },
  'eden-island': {
    title: 'Eden Island Královská Plavba',
    categoryLabel: 'Ostrovní Výlety',
    subtitle: 'Čistý bílý písek, klidné moře, lehátka a dokonalý relax',
    badge: 'Královský Klid',
    description: 'Nedotčená příroda, měkký písek a skvělé šnorchlování hned u břehu.',
    highlights: [
      'Klidná pláž bez hlasité hudby a davů',
      'Živý korálový útes přímo u pláže'
    ]
  },
  'mahmya-island': {
    title: 'Mahmya Pláž a Eko-Ostrov',
    categoryLabel: 'Ostrovní Výlety',
    subtitle: 'Chráněná přírodní rezervace, špičková italská restaurace a kouzelné útesy',
    badge: 'Eko Ráj',
    description: 'Exkluzivní eko-rezort na ostrově Giftun s prvotřídní gastronomií a nádherným podmořským světem.',
    highlights: [
      'Chráněná pláž s nejjemnějším pískem',
      'Restaurace s obsluhou a delikátním menu',
      'Šnorchlování světové úrovně v mořském parku'
    ]
  },
  'dolphin-house': {
    title: 'Dolphin House Plavba se Šnorchlováním',
    categoryLabel: 'Plavby a Potápění',
    subtitle: 'Plavání s divokými delfíny v jejich přirozeném prostředí a 2 korálové útesy',
    badge: 'Velmi Oblíbené',
    description: 'Plavba k vyhlášenému útesu El Samaka za hejny divoce žijících delfínů.',
    highlights: [
      'Pozorování a plavání v blízkosti divokých delfínů',
      '2 zastávky na šnorchlování u pestrých útesů',
      'Teplý oběd a nápoje na palubě'
    ]
  },
  'intro-scuba-dive': {
    title: 'Zkušební Ponor s Přístrojem (PADI Discovery)',
    categoryLabel: 'Plavby a Potápění',
    subtitle: 'Pro začátečníky a neplavce: osobní instruktor 1-na-1 pod vodou',
    badge: 'Pro Začátečníky',
    description: 'Žádné předchozí zkušenosti nejsou potřeba! Bezpečný ponor do hloubky 7–10 metrů pod dohledem instruktora.',
    highlights: [
      '2 ponory po 20 minutách s vlastním instruktorem',
      'Podrobná bezpečnostní instruktáž v češtině/angličtině',
      'Kompletní moderní výstroj v ceně',
      'Obědový bufet a šnorchlování na lodi'
    ]
  },
  'padi-open-water': {
    title: 'Potápěčský Kurz PADI Open Water Diver (3 Dny)',
    categoryLabel: 'Plavby a Potápění',
    subtitle: 'Mezinárodní potápěčská licence do 18m: teorie, nácvik a 4 ponory v moři',
    badge: 'Certifikace',
    description: 'Staňte se certifikovaným potápěčem s celoživotní mezinárodní licencí PADI.',
    highlights: [
      'Oficiální mezinárodní licence PADI platná po celém světě',
      'Teorie, nácvik v mělké vodě a 4 ponory z lodi',
      'Malé výcvikové skupinky pro maximální bezpečnost'
    ]
  },
  'sea-scope-semi-submarine': {
    title: 'Semi-Submarine Prosklená Podmořská Loď',
    categoryLabel: 'Plavby a Potápění',
    subtitle: 'Klimatizovaná podvodní paluba s velkými okny ve 3m hloubce – ideální pro děti',
    badge: 'Pro Rodiny',
    description: 'Sledujte korálový svět a pestré rybičky suchou nohou přes obří panoramatická okna.',
    highlights: [
      'Velká panoramatická okna 3 metry pod hladinou',
      'Klimatizovaný prostor s pohodlnými sedadly',
      'Zastávka na plavání a šnorchlování pro zájemce'
    ]
  },
  'parasailing-adventure': {
    title: 'Parasailing (Let Padákem za Člunem)',
    categoryLabel: 'Sport a Adrenalin',
    subtitle: 'Vznášejte se 50 metrů nad Rudým mořem s úchvatným výhledem na celé pobřeží',
    badge: 'Adrenalin',
    description: 'Zažijte pocit svobody při letu na padáku s jemným vzletem a přistáním přímo na lodi.',
    highlights: [
      'Úchvatný panoramatický výhled na moře a poušť',
      'Možnost letu v tandemu pro dvojice',
      'Nejvyšší bezpečnostní standardy'
    ]
  },
  'super-safari-desert': {
    title: 'Super Safari 5-v-1 do Pouště',
    categoryLabel: 'Pouštní Safari',
    subtitle: 'Čtyřkolky, buggy, džípy do beduínské vesnice, velbloudi, grilování a večerní show',
    badge: 'Bestseller Safari',
    description: 'Největší pouštní dobrodružství: 45 min na čtyřkolce, spider buggy, jízda džípy 4x4, velbloudi, západ slunce a večeře s programem.',
    highlights: [
      '45 minut řízení čtyřkolky po dunách',
      'Jízda v buginách a rychlá terénní jízda v džípech 4x4',
      'Návštěva beduínské vesnice s bylinkovým čajem',
      'Projížďka na velbloudech při západu slunce',
      'Večeře formou bufetu, břišní tance, Tanoura a ohňová show'
    ]
  },
  'mega-quad-safari': {
    title: 'Mega Safari na Čtyřkolkách při Západu Slunce',
    categoryLabel: 'Pouštní Safari',
    subtitle: '3 hodiny čisté jízdy na čtyřkolkách kaňony a dunami v kouzelném světle',
    badge: 'Pro Fanoušky Čtyřkolek',
    description: 'Dlouhá a vzrušující trasa s vyhlídkovou zastávkou na vrcholu hory při západu slunce.',
    highlights: [
      '3 hodiny jízdy na čtyřkolkách po různorodém terénu',
      'Vyhlídka na západ slunce z vrcholu hory',
      'Tradiční beduínský čaj v oáze'
    ]
  },
  'stargazing-safari': {
    title: 'Safari Pozorování Hvězd s Profesionálními Teleskopy',
    categoryLabel: 'Pouštní Safari',
    subtitle: 'Výkonné teleskopy, výklad astronoma a romantická večeře při svíčkách v poušti',
    badge: 'Romantika',
    description: 'Podívejte se na prstence Saturnu a krátery Měsíce uprostřed pouště bez světelného smogu.',
    highlights: [
      'Pozorování planet a souhvězdí digitálními teleskopy',
      'Zajímavý astronomický výklad',
      'Romantická večeře při svíčkách v beduínském stanu'
    ]
  },
  'luxor-day-trip': {
    title: 'Výlet do Luxoru a Údolí Králů',
    categoryLabel: 'Historie a Kultura',
    subtitle: 'Karnak, chrám Hatšepsut, Memnonovy kolosy, plavba po Nilu a česky/anglicky hovořící egyptolog',
    badge: 'Památka UNESCO',
    description: 'Cesta do starověkých Théb: navštivte hrobky faraonů v Údolí králů a velkolepý Karnak.',
    highlights: [
      'Vstupné do hrobek v Údolí králů a do chrámu královny Hatšepsut',
      'Prohlídka monumentálního chrámu v Karnaku',
      'Plavba lodí po Nilu a oběd v restauraci v ceně',
      'Pohodlný klimatizovaný turistický autobus'
    ]
  },
  'cairo-pyramids-tour': {
    title: 'Káhira a Pyramidy v Gíze (1 Den)',
    categoryLabel: 'Historie a Kultura',
    subtitle: 'Velká Cheopsova pyramida, Sfinga, Egyptské muzeum s poklady a bazar Khan el-Khalili',
    badge: 'Div Světa',
    description: 'Spatřete jediný dochovaný div starověkého světa — Pyramidy v Gíze a zlatý poklad Tutanchamona.',
    highlights: [
      'Prohlídka pyramid v Gíze a Velké sfingy',
      'Návštěva Egyptského národního muzea',
      'Oběd v restauraci s výhledem na Nil v ceně',
      'Licencovaný egyptolog po celou dobu výletu'
    ]
  },
  'hurghada-city-tour': {
    title: 'Okružní Jízda Hurghadou a Památky',
    categoryLabel: 'Historie a Kultura',
    subtitle: 'Mešita El Mina, Marina, rybí trh, koptský kostel a orientální bazar koření',
    badge: 'Prohlídka Města',
    description: 'Poznejte pravou atmosféru Hurghady: od historické čtvrti Dahar po moderní přístav jachet.',
    highlights: [
      'Návštěva mešity El Mina a koptského chrámu',
      'Procházka po maríně a bazaru s kořením a parfémy'
    ]
  },
  'turkish-bath-hamam': {
    title: 'Turecké Lázně Hamam, Sauna a Masáž',
    categoryLabel: 'Wellness a Spa',
    subtitle: 'Sauna, parní lázeň, peeling rukavicí Kessa, pěnová masáž a 45 min masáže oleji',
    badge: 'Spa Relax',
    description: 'Dokonalé uvolnění celého těla a příprava pokožky na krásné a dlouhotrvající opálení.',
    highlights: [
      'Tradiční hamam na teplém mramoru a parní lázeň',
      'Čisticí tělový peeling a pěnová lázeň',
      '45 minut relaxační masáže s aromatickými oleji',
      'Bezplatný odvoz z hotelu a zpět'
    ]
  },
  'private-speedboat': {
    title: 'Pronájem Soukromého Člunu VIP s Kapitánem',
    categoryLabel: 'Plavby a Potápění',
    subtitle: '100% soukromá plavba pro vaši rodinu: Orange Bay, hledání delfínů a opuštěné písčiny',
    badge: '100% Soukromé',
    description: 'Rychlý motorový člun s vlastním kapitánem. Zastavíte se tam, kde budete chtít.',
    highlights: [
      'Dvoumotorový člun exkluzivně pro vaši skupinu',
      'Trasa podle přání: delfíni, písčiny, Orange Bay',
      'Mísa čerstvého ovoce, chlazené nápoje, Bluetooth hudba a masky'
    ]
  },
  'airport-shuttle': {
    title: 'Soukromý Letištní Transfer Hurghada',
    categoryLabel: 'Letištní Transfer',
    subtitle: 'Spolehlivý transfer 24/7 mezi letištěm v Hurghadě (HRG) a všemi hotely',
    badge: 'Služba 24/7',
    description: 'Přivítání s cedulkou s vaším jménem v příletové hale. Čistá klimatizovaná auta bez čekání.',
    highlights: [
      'Sledování letu v reálném čase – řidič počká i při zpoždění',
      'Osobní uvítání u východu z terminálu s vaším jménem',
      'Pomoc se zavazadly a odvoz přímo k recepci hotelu',
      'Garantovaná pevná cena bez skrytých poplatků'
    ]
  },
  'medical-care': {
    title: 'Lékařská Péče a Návštěva Lékaře na Pokoji',
    categoryLabel: 'Služby a Péče',
    subtitle: '24/7 příjezd licencovaného lékaře na hotelový pokoj a pomoc s cestovním pojištěním',
    badge: 'Pohotovost 24/7',
    description: 'Nonstop zdravotní podpora pro turisty v Hurghadě při úpalu, zánětu ucha či jiných potížích.',
    highlights: [
      'Telefonní linka lékařské pomoci 24/7',
      'Návštěva kvalifikovaného lékaře přímo na vašem pokoji',
      'Lékařská zpráva a doklady pro proplacení pojišťovnou'
    ]
  }
};
