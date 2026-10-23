import { Trip } from '../types';

export const ITALIAN_CATEGORIES: Record<string, string> = {
  all: 'Tutte le Escursioni',
  island: 'Isole & Spiagge',
  sea: 'Crociere & Immersioni',
  adventure: 'Avventura & Sport',
  safari: 'Safari nel Deserto',
  cultural: 'Storia & Cultura',
  wellness: 'Benessere & Spa',
  transfer: 'Transfer Aeroporto',
  services: 'Assistenza & Servizi',
};

export const ITALIAN_TRIPS: Partial<Record<string, Partial<Trip>>> = {
  'orange-bay': {
    title: 'Escursione Isola Orange Bay Premium',
    categoryLabel: 'Isole & Spiagge',
    subtitle: 'Laguna turchese trasparente, sabbia bianca vellutata, altalene in acqua e pranzo a buffet',
    badge: 'Bestseller',
    description: 'L’escursione su isola più amata di Hurghada. Relax sulla spiaggia di sabbia bianca, foto sulle altalene marine e 2 soste snorkeling.',
    fullDescription: 'Definita le "Maldive d’Egitto", Orange Bay sull’isola Giftun stupisce per le sue acque basse e turchesi e la sabbia candida.\n\nDopo una piacevole crociera in yacht dalla Marina di Hurghada, avrai 2 ore piene per rilassarti sotto gli ombrelloni in legno. Il tour include 2 soste di snorkeling guidato sulle barriere coralline, un gustoso pranzo a buffet preparato a bordo e giri su banana boat.',
    meetingPoint: 'Nuova Marina di Hurghada',
    pickupInfo: 'Transfer gratuito a/r in minibus climatizzato da tutti gli hotel di Hurghada, El Gouna, Makadi e Sahl Hasheesh.',
    highlights: [
      '2 ore complete sulla splendida spiaggia di Orange Bay (Isola Giftun)',
      '2 soste di snorkeling guidato tra spettacolari barriere coralline',
      'Pranzo a buffet caldo a bordo con pesce, pollo grigliato, pasta e frutta',
      'Bevande analcoliche, tè, caffè e acqua illimitati per tutta la giornata',
      'Giri su banana boat e divano gonfiabile inclusi',
      'Attrezzatura snorkeling completa e biglietti d’ingresso all’isola inclusi'
    ],
    included: [
      'Transfer da/per il tuo hotel',
      'Attrezzatura snorkeling e giubbotti salvagente',
      'Pranzo a buffet e frutta fresca',
      'Bevande calde e fredde illimitate',
      'Ingresso all’isola Orange Bay (2 ore)',
      '2 soste bagno e snorkeling',
      'Giro sul banana boat'
    ],
    excluded: [
      'Tassa parco marino nazionale ($5 a persona al check-in)',
      'Servizio foto e video subacqueo (opzionale)'
    ],
    whatToBring: [
      'Costume da bagno e telo mare dell’hotel',
      'Occhiali da sole, cappellino e crema solare eco-friendly',
      'Fotocamera subacquea o custodia impermeabile',
      'Copia del documento d’identità'
    ]
  },
  'paradise-island': {
    title: 'Crociera VIP Paradise Island',
    categoryLabel: 'Isole & Spiagge',
    subtitle: 'Sabbia bianca, mare caraibico, lettini ombreggiati VIP e buffet di pesce fresco',
    badge: 'Isola VIP',
    description: 'Paradise Island è l’oasi tropicale dell’isola Giftun con lettini VIP, acque cristalline e pranzo gourmet.',
    highlights: [
      'Area lettini VIP riservata sulla spiaggia di Paradise Island',
      'Yacht a due ponti con prendisole e salone climatizzato',
      'Pranzo a buffet con piatti di mare e carne alla griglia',
      '2 soste snorkeling su barriere incontaminate'
    ]
  },
  'ozaria-island': {
    title: 'Isola Ozaria Luxury (Stile Boho)',
    categoryLabel: 'Isole & Spiagge',
    subtitle: 'Design boho chic esclusivo, laguna calma, lettini lounge e cucina gourmet',
    badge: 'Boho Luxury',
    description: 'La novità più esclusiva di Hurghada in stile bohémien raffinato, con cabanas private e atmosfera rilassante.',
    highlights: [
      'Il nuovissimo beach club boho sull’isola',
      'Lettini confortevoli e cabanas ombreggiate',
      'Pranzo gourmet e mocktail di frutta fresca',
      'Snorkeling con guide esperte'
    ]
  },
  'island-bianka': {
    title: 'Isola Bianka Esperienza Esclusiva',
    categoryLabel: 'Isole & Spiagge',
    subtitle: 'Oasi boho intima con acque trasparenti e panorami romantici',
    badge: 'Esclusivo',
    description: 'Isola riservata ideale per coppie e per chi desidera silenzio, eleganza e relax.',
    highlights: [
      'Atmosfera tranquilla con cabanas private',
      'Vista panoramica sul Mar Rosso'
    ]
  },
  'eden-island': {
    title: 'Crociera Reale Eden Island',
    categoryLabel: 'Isole & Spiagge',
    subtitle: 'Sabbia soffice e bianca, mare calmo, lettini e pace assoluta',
    badge: 'Relax Reale',
    description: 'Natura intatta, sabbia fine e splendido snorkeling a pochi passi dalla riva.',
    highlights: [
      'Spiaggia tranquilla senza musica ad alto volume',
      'Barriera corallina vicinissima alla riva'
    ]
  },
  'mahmya-island': {
    title: 'Mahmya Spiaggia & Eco-Isola',
    categoryLabel: 'Isole & Spiagge',
    subtitle: 'Riserva naturale protetta, ristorante italiano d’eccellenza e barriere spettacolari',
    badge: 'Eco Paradiso',
    description: 'Il top dell’eco-lusso sull’isola Giftun con cucina di livello e fondali marini protetti.',
    highlights: [
      'Spiaggia incontaminata con sabbia corallina finissima',
      'Ristorante con servizio al tavolo e buffet raffinato',
      'Snorkeling di altissimo livello nel parco marino'
    ]
  },
  'dolphin-house': {
    title: 'Crociera Snorkeling Dolphin House',
    categoryLabel: 'Crociere & Immersioni',
    subtitle: 'Nuota vicino ai delfini liberi nel loro habitat naturale e 2 barriere coralline',
    badge: 'Popolarissimo',
    description: 'Naviga verso la famosa barriera di El Samaka per ammirare i branchi di delfini selvatici.',
    highlights: [
      'Avvistamento e nuoto vicino ai delfini in mare aperto',
      '2 soste snorkeling su magnifiche barriere coralline',
      'Pranzo a buffet e bevande incluse a bordo'
    ]
  },
  'intro-scuba-dive': {
    title: 'Battesimo del Mare (PADI Discovery Scuba)',
    categoryLabel: 'Crociere & Immersioni',
    subtitle: 'Per principianti e non-nuotatori: istruttore personale 1-a-1 sott’acqua',
    badge: 'Per Principianti',
    description: 'Nessuna esperienza richiesta! Immersione sicura fino a 7–10 metri accompagnato passo a passo.',
    highlights: [
      '2 immersioni da 20 minuti con il tuo istruttore dedicato',
      'Briefing di sicurezza chiaro e dettagliato',
      'Attrezzatura subacquea moderna inclusa',
      'Pranzo a buffet e snorkeling a bordo'
    ]
  },
  'padi-open-water': {
    title: 'Corso Subacqueo PADI Open Water Diver (3 Giorni)',
    categoryLabel: 'Crociere & Immersioni',
    subtitle: 'Brevetto internazionale fino a 18m: teoria, lezioni in acqua e 4 immersioni da yacht',
    badge: 'Certificazione',
    description: 'Diventa un subacqueo certificato a vita con istruttori PADI esperti a Hurghada.',
    highlights: [
      'Brevetto PADI ufficiale riconosciuto a livello globale',
      'Teoria, addestramento pratico e 4 immersioni in mare',
      'Piccoli gruppi per il massimo apprendimento e sicurezza'
    ]
  },
  'sea-scope-semi-submarine': {
    title: 'Semi-Sottomarino Esploratore di Coralli',
    categoryLabel: 'Crociere & Immersioni',
    subtitle: 'Cabina sottomarina climatizzata con vetrate a 3m di profondità – ideale per famiglie',
    badge: 'Per Famiglie',
    description: 'Ammira i coralli e i pesci tropicali senza bagnarti attraverso enormi finestre panoramiche.',
    highlights: [
      'Grandi finestre panoramiche a 3 metri sotto il livello del mare',
      'Ambiente climatizzato con comode poltrone',
      'Sosta bagno e snorkeling per chi desidera nuotare'
    ]
  },
  'parasailing-adventure': {
    title: 'Parasailing (Volo col Paracadute da Barca)',
    categoryLabel: 'Avventura & Sport',
    subtitle: 'Vola a 50 metri sul Mar Rosso con vista mozzafiato su tutta la costa di Hurghada',
    badge: 'Adrenalina',
    description: 'Prova l’emozione del volo sopra il mare con decollo e atterraggio morbidi dalla barca.',
    highlights: [
      'Spettacolare panorama sul mare e sul deserto',
      'Volo singolo o in tandem per coppie',
      'Massimi standard di sicurezza con attrezzature certificate'
    ]
  },
  'super-safari-desert': {
    title: 'Super Safari 5-in-1 nel Deserto',
    categoryLabel: 'Safari nel Deserto',
    subtitle: 'Quad, spider buggy, jeep 4x4 nel villaggio beduino, cammellata, barbecue e spettacolo',
    badge: 'Bestseller Safari',
    description: 'La vera avventura nel deserto: 45 min di quad, buggy, jeep 4x4, dromedari, tramonto e cena barbecue con spettacolo.',
    highlights: [
      '45 minuti alla guida del quad tra le dune',
      'Giro in spider buggy ed escursione veloce in jeep 4x4',
      'Visita al villaggio beduino con tè alle erbe',
      'Passeggiata a dorso di cammello al tramonto',
      'Cena a buffet con danza del ventre, Tanoura e spettacolo del fuoco'
    ]
  },
  'mega-quad-safari': {
    title: 'Mega Safari in Quad al Tramonto',
    categoryLabel: 'Safari nel Deserto',
    subtitle: '3 ore di guida pura in quad tra canyon e dune nell’ora d’oro',
    badge: 'Passione Quad',
    description: 'Percorso lungo ed emozionante per gli amanti della guida con sosta panoramica al tramonto.',
    highlights: [
      '3 ore di guida del quad su sentieri sterrati',
      'Sosta panoramica in cima alla collina al tramonto',
      'Tè beduino tradizionale sotto la tenda'
    ]
  },
  'stargazing-safari': {
    title: 'Safari Astronomico & Osservazione Stelle con Telescopi',
    categoryLabel: 'Safari nel Deserto',
    subtitle: 'Telescopi professionali, spiegazione dell’astronomo e cena a lume di candela nel deserto',
    badge: 'Romantico',
    description: 'Guarda gli anelli di Saturno e i crateri lunari lontano dall’inquinamento luminoso della città.',
    highlights: [
      'Osservazione dei pianeti con potenti telescopi digitali',
      'Guida alle costellazioni con un astronomo',
      'Cena intima a lume di candela nel campo beduino'
    ]
  },
  'luxor-day-trip': {
    title: 'Escursione a Luxor e Valle dei Re',
    categoryLabel: 'Storia & Cultura',
    subtitle: 'Tempio di Karnak, Hatshepsut, Colossi di Memnone, barca sul Nilo ed egittologo ufficiale',
    badge: 'Patrimonio UNESCO',
    description: 'Viaggio nell’antica Tebe: visita le tombe dei faraoni nella Valle dei Re e l’imponente Karnak.',
    highlights: [
      'Ingresso alle tombe della Valle dei Re e al tempio di Hatshepsut',
      'Visita guidata alla sala ipostila di Karnak',
      'Attraversamento del Nilo in barca e pranzo al ristorante incluso',
      'Viaggio comodo in pullman GT climatizzato'
    ]
  },
  'cairo-pyramids-tour': {
    title: 'Il Cairo e Piramidi di Giza (1 Giorno)',
    categoryLabel: 'Storia & Cultura',
    subtitle: 'Grande Piramide di Cheope, Sfinge, Museo Egizio con i tesori d’oro e bazar Khan el-Khalili',
    badge: 'Meraviglia del Mondo',
    description: 'Ammira l’unica meraviglia del mondo antico ancora intatta e il tesoro d’oro di Tutankhamon.',
    highlights: [
      'Visita alle Piramidi di Giza e alla Grande Sfinge',
      'Tour guidato dei capolavori del Museo Egizio',
      'Pranzo al ristorante con vista Nilo compreso',
      'Guida egittologa ufficiale durante tutto il tour'
    ]
  },
  'hurghada-city-tour': {
    title: 'Tour Panoramico della Città di Hurghada',
    categoryLabel: 'Storia & Cultura',
    subtitle: 'Moschea El Mina, Marina turistica, mercato del pesce, chiesa copta e souk delle spezie',
    badge: 'Tour Cittadino',
    description: 'Scopri i due volti di Hurghada: dal quartiere storico di Dahar alla moderna marina dei maxi yacht.',
    highlights: [
      'Visita alla maestosa moschea El Mina e alla cattedrale copta',
      'Passeggiata sulla marina e nel bazar delle spezie orientali'
    ]
  },
  'turkish-bath-hamam': {
    title: 'Bagno Turco Hamam, Sauna e Massaggio',
    categoryLabel: 'Benessere & Spa',
    subtitle: 'Sauna, bagno di vapore, scrub con guanto Kessa, schiuma e 45 min di massaggio con oli',
    badge: 'Relax Spa',
    description: 'Il modo migliore per rigenerarsi e preparare la pelle a un’abbronzatura dorata e duratura.',
    highlights: [
      'Hammam tradizionale su marmo caldo e bagno di vapore',
      'Scrub purificante per il corpo e massaggio con soffice schiuma',
      '45 minuti di massaggio rilassante con oli essenziali',
      'Transfer a/r dal tuo hotel compreso'
    ]
  },
  'private-speedboat': {
    title: 'Noleggio Speedboat Privato VIP con Capitano',
    categoryLabel: 'Crociere & Immersioni',
    subtitle: 'Tour 100% privato per la tua famiglia: Orange Bay, delfini e banchi di sabbia deserti',
    badge: '100% Privato',
    description: 'Motoscafo veloce con capitano privato esclusivo. Decidi tu le soste e i tempi di permanenza.',
    highlights: [
      'Motoscafo bimotore esclusivo per il vostro gruppo',
      'Itinerario personalizzato: delfini, banchi di sabbia, Orange Bay',
      'Piatto di frutta fresca, bevande, musica Bluetooth e maschere'
    ]
  },
  'airport-shuttle': {
    title: 'Transfer Privato Aeroporto di Hurghada',
    categoryLabel: 'Transfer Aeroporto',
    subtitle: 'Transfer diretto e puntuale 24/7 tra l’aeroporto di Hurghada (HRG) e tutti gli hotel',
    badge: 'Servizio 24/7',
    description: 'Accoglienza con cartello personalizzato all’uscita del terminal. Auto pulite, comode e senza attese.',
    highlights: [
      'Monitoraggio volo in tempo reale – l’autista aspetta in caso di ritardo',
      'Accoglienza al terminal con cartello con il vostro nome',
      'Aiuto coi bagagli e trasporto diretto fino alla reception dell’hotel',
      'Prezzo fisso garantito senza sorprese'
    ]
  },
  'medical-care': {
    title: 'Assistenza Medica & Visita Medico in Hotel 24/7',
    categoryLabel: 'Assistenza & Servizi',
    subtitle: 'Visita del medico in camera d’albergo e assistenza con pratiche assicurative di viaggio',
    badge: 'Urgenze 24/7',
    description: 'Supporto medico 24 ore su 24 per turisti a Hurghada in caso di colpi di calore, otiti o necessità sanitarie.',
    highlights: [
      'Linea telefonica medica disponibile 24/7',
      'Visita di un medico qualificato direttamente nella stanza d’albergo',
      'Rilascio certificati per il rimborso dall’assicurazione viaggio'
    ]
  }
};
