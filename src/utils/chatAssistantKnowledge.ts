import { Trip, LanguageCode, CurrencyCode } from '../types';
import { TRIPS, CURRENCIES } from '../data/trips';
import { generateWhatsAppBookingUrl, formatPrice } from './whatsapp';
import { getLocalizedTrip } from './localizedTrips';

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  matchedTrips?: Trip[];
  whatsappUrl?: string;
  whatsappButtonText?: string;
  quickReplies?: string[];
  isBookingIntent?: boolean;
}

export interface AssistantContext {
  language: LanguageCode;
  currency: CurrencyCode;
  selectedTrip?: Trip | null;
}

// Multi-lingual Welcome Greetings and Starter Prompts
export function getInitialGreeting(lang: LanguageCode): ChatMessage {
  const isAr = lang === 'ar';
  const isDe = lang === 'de';
  const isRu = lang === 'ru';

  let text = "👋 Welcome to AquaWay Tours! I'm your local Red Sea trip assistant. How can I help you today? I can recommend tours, check prices, explain hotel pickups, or help you book directly on WhatsApp.";
  let quickReplies = [
    '🏝️ Best Island Trips',
    '🐬 Swim with Dolphins',
    '🤿 First-Time Scuba Diving',
    '🏎️ Desert Quad Safari',
    '🚤 Private Speedboat Charter',
    '🚗 Free Hotel Pickup & Payments'
  ];

  if (isAr) {
    text = "👋 أهلاً بك في أكوا واي تورز! أنا مرشدك ومساعدك الشخصي لرحلات البحر الأحمر وسفاري الغردقة. كيف يمكنني مساعدتك اليوم؟ يمكنني ترشيح أفضل الجزر، شرح الأسعار، أو توصيلك بالحجز الفوري عبر الواتساب.";
    quickReplies = [
      '🏝️ أفضل رحلات الجزر (أورانج باي)',
      '🐬 السباحة مع الدلافين البرية',
      '🤿 تجربة الغوص للمبتدئين',
      '🏎️ سوبر سفاري بيتش باجي',
      '🚤 تأجير لانش سريع خاص VIP',
      '🚗 معلومات التوصيل والدفع عند الاستقبال'
    ];
  } else if (isDe) {
    text = "👋 Willkommen bei AquaWay Tours! Ich bin Ihr persönlicher Reiseberater für das Rote Meer. Wie kann ich Ihnen helfen? Ich berate Sie gerne zu Ausflügen, Preisen, Hoteltransfers oder direkter Buchung über WhatsApp.";
    quickReplies = [
      '🏝️ Beste Inselausflüge (Orange Bay)',
      '🐬 Schwimmen mit Delfinen',
      '🤿 Schnuppertauchen für Anfänger',
      '🏎️ Wüstensafari mit Quads',
      '🚤 Privates Schnellboot chartern',
      '🚗 Hotel-Abholung & Bezahlung'
    ];
  } else if (isRu) {
    text = "👋 Добро пожаловать в AquaWay Tours! Я ваш персональный онлайн-гид по экскурсиям в Хургаде. Чем я могу помочь? Могу подсказать лучшие туры, цены, условия трансфера или перенаправить на мгновенное бронирование в WhatsApp.";
    quickReplies = [
      '🏝️ Лучшие острова (Оранж Бей)',
      '🐬 Плавание с дикими дельфинами',
      '🤿 Пробный дайвинг для новичков',
      '🏎️ Квадроциклы и сафари в пустыне',
      '🚤 Аренда приватного скоростного катера',
      '🚗 Бесплатный трансфер и оплата на месте'
    ];
  } else if (lang === 'pl') {
    text = "👋 Witamy w AquaWay Tours! Jestem Twoim lokalnym asystentem wycieczek po Morzu Czerwonym. W czym mogę Ci dzisiaj pomóc? Z przyjemnością polecę rejsy, sprawdzę ceny, wyjaśnię transfery z hotelu lub pomogę zarezerwować bezpośrednio na WhatsApp.";
    quickReplies = [
      '🏝️ Wycieczki na wyspy (Orange Bay)',
      '🐬 Pływanie z delfinami',
      '🤿 Nurkowanie intro dla początkujących',
      '🏎️ Safari na quadach po pustyni',
      '🚤 Wynajem prywatnego jachtu motorowego',
      '🚗 Bezpłatny odbiór z hotelu i płatności'
    ];
  } else if (lang === 'fr') {
    text = "👋 Bienvenue chez AquaWay Tours ! Je suis votre assistant personnel pour vos excursions en Mer Rouge. Comment puis-je vous aider aujourd'hui ? Je peux vous recommander des circuits, vérifier les tarifs, expliquer les transferts d'hôtel ou vous aider à réserver directement sur WhatsApp.";
    quickReplies = [
      '🏝️ Îles paradisiaques (Orange Bay)',
      '🐬 Nager avec les dauphins',
      '🤿 Baptême de plongée sous-marine',
      '🏎️ Safari quad dans le désert',
      '🚤 Location de hors-bord privé VIP',
      '🚗 Transfert hôtel gratuit & paiement'
    ];
  } else if (lang === 'it') {
    text = "👋 Benvenuto su AquaWay Tours! Sono il tuo assistente personale per le escursioni nel Mar Rosso. Come posso aiutarti oggi? Posso consigliarti i migliori tour, controllare i prezzi, spiegare i trasferimenti dall'hotel o aiutarti a prenotare su WhatsApp.";
    quickReplies = [
      '🏝️ Tour alle isole (Orange Bay)',
      '🐬 Nuotare con i delfini selvatici',
      '🤿 Battesimo del mare / Sub principianti',
      '🏎️ Safari nel deserto in quad',
      '🚤 Noleggio motoscafo privato VIP',
      '🚗 Ritiro gratuito in hotel e pagamenti'
    ];
  } else if (lang === 'cs') {
    text = "👋 Vítejte v AquaWay Tours! Jsem váš osobní asistent pro výlety po Rudém moři. Jak vám mohu pomoci? Rád vám doporučím nejlepší zájezdy, ověřím ceny, vysvětlím transfery z hotelu nebo pomohu s rezervací přímo na WhatsApp.";
    quickReplies = [
      '🏝️ Výlety na ostrovy (Orange Bay)',
      '🐬 Plavání s divokými delfíny',
      '🤿 Zkušební ponor pro začátečníky',
      '🏎️ Safari na čtyřkolkách v poušti',
      '🚤 Pronájem soukromého motorového člunu',
      '🚗 Bezplatný odvoz z hotelu a platby'
    ];
  }

  return {
    id: 'welcome-msg',
    sender: 'assistant',
    text,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    quickReplies
  };
}

export function processUserQuery(
  userInput: string,
  context: AssistantContext
): ChatMessage {
  const query = userInput.toLowerCase().trim();
  const lang = context.language;
  const curr = CURRENCIES[context.currency] || CURRENCIES.EUR;
  const isAr = lang === 'ar';

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Helper to format trip price
  const getTripPrice = (trip: Trip) => {
    return formatPrice(trip.priceUSD, curr.code, curr.rateToUSD, curr.symbol);
  };

  // 1. Direct Booking Intent / WhatsApp Request
  const bookingKeywords = [
    'book', 'booking', 'reserve', 'reservation', 'whatsapp', 'order', 'tickets',
    'احجز', 'حجز', 'واتساب', 'اريد حجز', 'طريقة الحجز',
    'buchen', 'reservieren', 'забронировать', 'бронь', 'резерв'
  ];
  const hasBookingIntent = bookingKeywords.some(kw => query.includes(kw));

  // Find if user specifically mentioned a trip in their query
  const matchedTrip = TRIPS.find(t => {
    const slugMatch = query.includes(t.slug) || query.includes(t.id);
    const titleMatch = query.includes(t.title.toLowerCase());
    const simpleOrange = query.includes('orange') && t.id === 'orange-bay';
    const simpleDolphin = (query.includes('dolphin') || query.includes('دلفين') || query.includes('دلافين') || query.includes('delfin')) && t.id === 'dolphin-house';
    const simpleDive = (query.includes('dive') || query.includes('diving') || query.includes('scuba') || query.includes('غوص') || query.includes('tauch')) && t.id === 'padi-intro-dive';
    const simpleSpeedboat = (query.includes('speedboat') || query.includes('speed boat') || query.includes('لانش') || query.includes('يخت خاص') || query.includes('катер')) && t.id === 'vip-speedboat';
    const simpleSafari = (query.includes('safari') || query.includes('quad') || query.includes('atv') || query.includes('buggy') || query.includes('سفاري') || query.includes('بيتش باجي') || query.includes('сафари') || query.includes('квадроцикл')) && t.id === 'super-safari';
    const simpleParadise = (query.includes('paradise') || query.includes('بارادايس') || query.includes('باراديس')) && t.id === 'paradise-island';
    const simpleSubmarine = (query.includes('submarine') || query.includes('semi-submarine') || query.includes('غواصة') || query.includes('سي سكوب')) && t.id === 'semi-submarine';
    const simpleSunset = (query.includes('sunset') || query.includes('غروب') || query.includes('закат')) && t.id === 'luxury-sunset-cruise';

    return slugMatch || titleMatch || simpleOrange || simpleDolphin || simpleDive || simpleSpeedboat || simpleSafari || simpleParadise || simpleSubmarine || simpleSunset;
  });

  // If user is explicitly asking to book or asking for whatsapp
  if (hasBookingIntent) {
    const targetTrip = matchedTrip || context.selectedTrip || TRIPS[0];
    const targetTitle = getLocalizedTrip(targetTrip, lang).title;
    const priceFormatted = getTripPrice(targetTrip);

    const waUrl = generateWhatsAppBookingUrl({
      tripTitle: targetTitle,
      totalPrice: priceFormatted,
      currency: curr.symbol,
      notes: userInput ? `From Chat: "${userInput}"` : undefined,
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `✨ رائع! حجز رحلة **${targetTitle}** يتم بكل سهولة وبدون دفع مسبق بالبطاقة.\n\n💰 **السعر:** ${priceFormatted} للفرد (شاملاً التوصيل من الفندق والغداء والمعدات).\n\n📌 **مزايا الحجز معنا:**\n• الدفع نقداً أو بالفيزا عند استقبالكم في يوم الرحلة\n• إلغاء أو تعديل الموعد مجاناً حتى 24 ساعة قبل الانطلاق\n• تأكيد فوري لموعد الباص من فندقك بدقة\n\nاضغط على الزر أدناه للانتقال مباشرة إلى الواتساب وتأكيد حجزك مع فريقنا المحلي:`,
        timestamp: timeStr,
        matchedTrips: [targetTrip],
        whatsappUrl: waUrl,
        whatsappButtonText: `💬 تأكيد حجز ${targetTitle} عبر الواتساب`,
        isBookingIntent: true,
        quickReplies: ['🏝️ استفسر عن رحلات أخرى', '📍 أسئلة عن التوصيل', '❓ كيف يتم الدفع؟']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `✨ Excellent choice! Booking **${targetTitle}** is quick, safe, and requires zero upfront card charge.\n\n💰 **Current Price:** ${priceFormatted} per person (all-inclusive: hotel pickup, lunch/drinks, guides, and gear).\n\n📌 **Booking Benefits:**\n• Pay cash or card on the day of the trip\n• Free cancellation or date changes up to 24 hours before\n• Exact hotel pickup time sent to your WhatsApp the evening before\n\nClick below to open our WhatsApp and confirm your spots in seconds:`,
      timestamp: timeStr,
      matchedTrips: [targetTrip],
      whatsappUrl: waUrl,
      whatsappButtonText: `💬 Book ${targetTitle} on WhatsApp`,
      isBookingIntent: true,
      quickReplies: ['🏝️ Ask about other trips', '📍 How does pickup work?', '💳 Payment options']
    };
  }

  // 2. Specific Trip Details Query
  if (matchedTrip) {
    const locTrip = getLocalizedTrip(matchedTrip, lang);
    const priceFormatted = getTripPrice(matchedTrip);
    const waUrl = generateWhatsAppBookingUrl({
      tripTitle: locTrip.title,
      totalPrice: priceFormatted,
      currency: curr.symbol,
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🌊 **${locTrip.title}**\n\n${locTrip.description}\n\n• **السعر:** ${priceFormatted} للفرد (الأطفال 3-11 سنة بنصف السعر، والرضع مجاناً)\n• **المدة:** ${locTrip.duration}\n• **التوصيل:** مجاني من وإلى باب فندقك في الغردقة وسهل حشيش ومكادي والجونة\n• **المشمول:** ${locTrip.included.slice(0, 4).join('، ')}\n\nهل ترغب في حجز هذه الرحلة أو معرفة تفاصيل إضافية؟`,
        timestamp: timeStr,
        matchedTrips: [matchedTrip],
        whatsappUrl: waUrl,
        whatsappButtonText: `💬 احجز ${locTrip.title} على الواتساب`,
        quickReplies: [
          `احجز ${locTrip.title}`,
          'ما هي مواعيد الانطلاق؟',
          'ماذا يجب أن أحضر معي؟',
          'عرض رحلات أخرى'
        ]
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🌊 **${locTrip.title}**\n\n${locTrip.description}\n\n• **Price:** ${priceFormatted} per adult (kids 3-11 yrs 50% off, toddlers free)\n• **Duration:** ${locTrip.duration}\n• **Hotel Pickup:** Free door-to-door from your hotel in Hurghada, Sahl Hasheesh, Makadi Bay & El Gouna\n• **Included:** ${locTrip.included.slice(0, 4).join(', ')}\n\nWould you like to reserve your spots or check another tour?`,
      timestamp: timeStr,
      matchedTrips: [matchedTrip],
      whatsappUrl: waUrl,
      whatsappButtonText: `💬 Book ${locTrip.title} on WhatsApp`,
      quickReplies: [
        `Book ${locTrip.title}`,
        'What time is pickup?',
        'What should I bring?',
        'Show other top trips'
      ]
    };
  }

  // 3. Dolphins & Marine Wildlife
  if (query.includes('dolphin') || query.includes('delfin') || query.includes('دلفين') || query.includes('دلافين') || query.includes('дельфин')) {
    const dolphinTrip = TRIPS.find(t => t.id === 'dolphin-house') || TRIPS[1];
    const locTrip = getLocalizedTrip(dolphinTrip, lang);
    const priceFormatted = getTripPrice(dolphinTrip);
    const waUrl = generateWhatsAppBookingUrl({
      tripTitle: locTrip.title,
      notes: 'Inquiring about swimming with dolphins',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🐬 **السباحة مع الدلافين في بيت الدلافين (شعب العرق)** هي إحدى أشهر رحلاتنا وأكثرها طلباً!\n\nنأخذكم باليخت إلى المحمية الطبيعية للدلافين الدوارة في عرض البحر بنسبة مشاهدة تتجاوز 95% في بيئتها الطبيعية الحرة.\n\n• **السعر:** ${priceFormatted} للفرد\n• **يشمل:** وقفتين سنوركلينج بالشعاب المرجانية، غداء بوفيه ساخن ومشروبات طوال اليوم، وألعاب مائية (بنانا بوت).\n• **التوصيل:** مجاناً من فندقك صباحاً.`,
        timestamp: timeStr,
        matchedTrips: [dolphinTrip],
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 احجز رحلة الدلافين الآن',
        quickReplies: ['احجز رحلة الدلافين', 'هل تناسب الأطفال؟', 'أفضل وقت لمشاهدة الدلافين']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🐬 **Shaab El Erg Dolphin House Cruise** is our most popular marine experience!\n\nWe cruise to the protected natural dolphin sanctuary in the open Red Sea with a 95%+ success rate of encountering wild dolphin pods in their natural habitat.\n\n• **Price:** ${priceFormatted} per adult\n• **Includes:** 2 guided reef snorkeling stops, hot chef-cooked buffet lunch, all-day drinks, sanitized snorkel gear, and fun banana boat rides.\n• **Pickup:** Free right from your hotel lobby.`,
      timestamp: timeStr,
      matchedTrips: [dolphinTrip],
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Book Dolphin House Trip on WhatsApp',
      quickReplies: ['Book Dolphin House Cruise', 'Is it good for kids?', 'Show island trips']
    };
  }

  // 4. Scuba Diving / Snorkeling Questions
  if (query.includes('div') || query.includes('scuba') || query.includes('غوص') || query.includes('غطس') || query.includes('дайвинг') || query.includes('tauchen')) {
    const diveTrip = TRIPS.find(t => t.id === 'padi-intro-dive') || TRIPS[2];
    const locTrip = getLocalizedTrip(diveTrip, lang);
    const priceFormatted = getTripPrice(diveTrip);
    const waUrl = generateWhatsAppBookingUrl({
      tripTitle: locTrip.title,
      notes: 'Interested in PADI discovery scuba diving',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🤿 **رحلة الغوص الاستكشافي للمبتدئين (PADI Discovery Dive)**:\n\nلا تحتاج إلى أي خبرة سابقة أو شهادة غوص! يقوم مدرب PADI معتمد بالغوص معك بشكل فردي يداً بيد حتى عمق 7-10 أمتار لاستكشاف أروع الشعاب المرجانية والأسماك الملونة.\n\n• **السعر:** ${priceFormatted} للفرد (شامل غطستين كاملتين + معدات السكوبا + الغداء والمشروبات والتوصيل).`,
        timestamp: timeStr,
        matchedTrips: [diveTrip],
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 حجز تجربة الغوص عبر الواتساب',
        quickReplies: ['احجز رحلة الغوص', 'هل أحتاج لخبرة في السباحة؟', 'عرض رحلات الجزر']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🤿 **PADI Red Sea Discovery Dive (No Experience Needed!)**:\n\nPerfect for complete beginners. A certified PADI instructor stays with you one-on-one underwater, guiding you down to 7–10 meters to explore vibrant coral gardens and sea turtles.\n\n• **Price:** ${priceFormatted} per adult\n• **Includes:** 2 full guided open-water dives, all sanitized scuba gear & tanks, hot buffet lunch, drinks, and hotel transfer.`,
      timestamp: timeStr,
      matchedTrips: [diveTrip],
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Book Scuba Dive on WhatsApp',
      quickReplies: ['Book Discovery Scuba Dive', 'Do I need to know swimming?', 'Show all excursions']
    };
  }

  // 5. Desert Safari & Quad Biking
  if (query.includes('safari') || query.includes('quad') || query.includes('atv') || query.includes('desert') || query.includes('buggy') || query.includes('سفاري') || query.includes('صحراء') || query.includes('بيتش باجي') || query.includes('сафари')) {
    const safariTrip = TRIPS.find(t => t.id === 'super-safari') || TRIPS[4];
    const locTrip = getLocalizedTrip(safariTrip, lang);
    const priceFormatted = getTripPrice(safariTrip);
    const waUrl = generateWhatsAppBookingUrl({
      tripTitle: locTrip.title,
      notes: 'Interested in Desert Quad Safari',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🏎️ **سوبر سفاري الصحراء 5 في 1 (بيتش باجي + عشاء بدوي)**:\n\nالمغامرة الصحراوية الأكثر تكاملاً في الغردقة!\n\n• قيادة بيتش باجي 45 دقيقة وسط الوديان الجبلية\n• ركوب سبايدر كار (Spider Buggy) وركوب الجمال\n• زيارة قرية بدوية تقليدية وشرب الشاي البدوي على الحطب\n• عشاء بوفيه مشويات مفتوح مع حفلة فلكلورية وعروض شرقية ورصد النجوم\n• **السعر:** ${priceFormatted} للفرد شاملاً التوصيل من الفندق بالكامل.`,
        timestamp: timeStr,
        matchedTrips: [safariTrip],
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 حجز رحلة السفاري عبر الواتساب',
        quickReplies: ['احجز رحلة السفاري', 'مواعيد السفاري صباحاً ومساءً', 'رحلات اليخوت الخاصة']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🏎️ **Super Safari 5-in-1 Desert Quad Adventure**:\n\nThe ultimate Hurghada desert adventure packed with thrills and Bedouin hospitality:\n\n• 45 mins ATV quad biking through stunning mountain valleys\n• Spider buggy dune racing & gentle camel riding\n• Traditional Bedouin village visit with herbal tea\n• BBQ buffet dinner under starry desert skies with oriental folklore show & fire performance\n• **Price:** ${priceFormatted} per adult with free 4x4 / AC hotel transfer included.`,
      timestamp: timeStr,
      matchedTrips: [safariTrip],
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Book Desert Safari on WhatsApp',
      quickReplies: ['Book Desert Safari', 'Morning vs Sunset safari?', 'Show island tours']
    };
  }

  // 6. Island Tours (Orange Bay, Paradise, Giftun)
  if (query.includes('island') || query.includes('orange') || query.includes('paradise') || query.includes('giftun') || query.includes('جزر') || query.includes('جزيرة') || query.includes('شاطئ') || query.includes('остров')) {
    const islandTrips = TRIPS.filter(t => t.category === 'island' || t.id.includes('island') || t.id.includes('orange')).slice(0, 3);
    const orangeTrip = islandTrips[0];
    const waUrl = generateWhatsAppBookingUrl({
      tripTitle: 'Orange Bay & Island Excursions',
      notes: 'Comparing island excursions',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🏝️ **أشهر رحلات الجزر في الغردقة**:\n\n1. **جزيرة أورانج باي (المالديف المصرية)**: مياه تركوازية ضحلة، شمسيات خشبية، مراجيح مائية، ومثالية للصور والاسترخاء.\n2. **جزيرة بارادايس**: شواطئ رملية واسعة وأجواء هادئة عائلية.\n\nجميع رحلات الجزر تشمل النزول على الجزيرة لمدة ساعتين، وقفتين سنوركلينج، غداء بوفيه مفتوح، ومشروبات وألعاب مائية مع التوصيل المجاني.`,
        timestamp: timeStr,
        matchedTrips: islandTrips,
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 حجز رحلة جزر عبر الواتساب',
        quickReplies: ['احجز رحلة أورانج باي', 'احجز جزيرة باراديس', 'ما الفرق بين أورانج وباراديس؟']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🏝️ **Top Red Sea Island Escapes**:\n\n1. **Orange Bay Island (The Egyptian Maldives)**: Famous shallow turquoise waters, wooden overwater swings, and luxury sunbeds.\n2. **Paradise Island**: Wide powder-soft beaches, Caribbean vibes, and relaxed family-friendly swimming.\n\nAll island trips include 2 hours on the island, 2 guided coral reef snorkeling stops, hot chef lunch buffet, drinks, banana boat rides, and free hotel pickup!`,
      timestamp: timeStr,
      matchedTrips: islandTrips,
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Book Island Trip on WhatsApp',
      quickReplies: ['Book Orange Bay Island', 'Book Paradise Island', 'Which island is best for kids?']
    };
  }

  // 7. Family / Kids Friendly Recommendations
  if (query.includes('family') || query.includes('kid') || query.includes('children') || query.includes('عائلة') || query.includes('أطفال') || query.includes('семья') || query.includes('дети') || query.includes('kinder')) {
    const familyTrips = [
      TRIPS.find(t => t.id === 'orange-bay')!,
      TRIPS.find(t => t.id === 'dolphin-house')!,
      TRIPS.find(t => t.id === 'semi-submarine')!
    ].filter(Boolean);

    const waUrl = generateWhatsAppBookingUrl({
      notes: 'Inquiring about family-friendly excursions with children',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `👨‍👩‍👧‍👦 **أفضل الرحلات الموصى بها للعائلات والأطفال**:\n\n• **جزيرة أورانج باي**: المياه ضحلة جداً ورملية ودافئة، آمنة وممتعة للأطفال من جميع الأعمار.\n• **بيت الدلافين**: تجربة لا تُنسى لرؤية الدلافين البرية تقفز بجانب المركب.\n• **الغواصة سي سكوب**: رؤية الأسماك والشعاب المرجانية تحت الماء من خلف نوافذ زجاجية مكيفة بدون الحاجة للسباحة.\n\n👶 **خصم الأطفال:** الأطفال من 3 إلى 11 سنة بنصف السعر (خصم 50%)، والرضع أقل من 3 سنوات مجاناً بالكامل.`,
        timestamp: timeStr,
        matchedTrips: familyTrips,
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 استفسر عن باقة عائلية بالواتساب',
        quickReplies: ['احجز أورانج باي للعائلة', 'تفاصيل رحلة الغواصة', 'احجز بيت الدلافين']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `👨‍👩‍👧‍👦 **Top Family & Kids Recommendations**:\n\n• **Orange Bay Island**: Ultra-shallow, warm turquoise water with soft sand — exceptionally safe and fun for toddlers and children.\n• **Dolphin House**: Seeing playful wild dolphins leaping next to the boat is a lifelong memory for kids.\n• **Sea Scope Semi-Submarine**: Descend 3 meters underwater to view coral reefs and sea turtles from panoramic glass windows inside an air-conditioned cabin (no swimming needed).\n\n👶 **Kids Discount Policy:** Children 3–11 years are 50% off; toddlers under 3 travel 100% free.`,
      timestamp: timeStr,
      matchedTrips: familyTrips,
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Inquire for Family Trip on WhatsApp',
      quickReplies: ['Book Orange Bay for Family', 'Sea Scope Semi-Submarine details', 'Ask about hotel pickup']
    };
  }

  // 8. Hotel Pickup, Areas, Transfers
  if (query.includes('pickup') || query.includes('hotel') || query.includes('transfer') || query.includes('makadi') || query.includes('el gouna') || query.includes('sahl hasheesh') || query.includes('soma bay') || query.includes('توصيل') || query.includes('فندق') || query.includes('مكادي') || query.includes('الجونة') || query.includes('سهل حشيش')) {
    const waUrl = generateWhatsAppBookingUrl({
      notes: 'Asking about hotel pickup timings and coverage',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🚗 **معلومات التوصيل والانتقالات المجانية**:\n\nنحن نوفر خدمة التوصيل المجاني من وإلى باب فندقك في سيارات وباصات حديثة ومكيفة تشمل:\n• جميع فنادق مدينة الغردقة وممشى المارينا والكوثر (مجاناً)\n• منتجعات سهل حشيش وخليج مكادي (مجاناً)\n• فنادق الجونة وسوما باي وسفاجا (مشمولة أو برسم رمزي بسيط للمسافات البعيدة)\n\nيرسل لكم المنسق موعد الباص الدقيق بالدقيقة إلى الواتساب في الليلة السابقة للرحلة.`,
        timestamp: timeStr,
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 تأكيد التوصيل من فندقي عبر الواتساب',
        quickReplies: ['عرض جميع الرحلات', 'كيف يتم الدفع؟', 'احجز رحلة الآن']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🚗 **Door-to-Door Hotel Pickup Information**:\n\nWe provide comfortable, air-conditioned transfers directly from your hotel lobby across all Red Sea regions:\n• **Hurghada City, Marina & Promenade Hotels:** 100% Free\n• **Sahl Hasheesh Bay & Makadi Bay Resorts:** 100% Free\n• **El Gouna & Soma Bay / Safaga Hotels:** Fully covered\n\nOur coordinator messages your exact pickup time to your WhatsApp the evening before your excursion so you can have breakfast with peace of mind.`,
      timestamp: timeStr,
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Check Pickup for My Hotel on WhatsApp',
      quickReplies: ['Show all trips', 'How do payments work?', 'Book an excursion']
    };
  }

  // 9. Payment & Cancellation Policy
  if (query.includes('pay') || query.includes('cancel') || query.includes('price') || query.includes('cost') || query.includes('card') || query.includes('cash') || query.includes('دفع') || query.includes('إلغاء') || query.includes('سعر') || query.includes('فلوس') || query.includes('أسعار') || query.includes('оплата') || query.includes('цена') || query.includes('preise')) {
    const waUrl = generateWhatsAppBookingUrl({
      notes: 'Asking about payment methods and cancellation terms',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `💳 **طرق الدفع وسياسة الإلغاء المرنة**:\n\n• **بدون دفع مسبق:** لا نطلب بطاقات ائتمان مسبقة لمعظم الرحلات. يمكنك حجز موعدك الآن والدفع في يوم الرحلة.\n• **العملات المقبولة:** يورو (€)، دولار ($)، جنيه مصري (E£)، جنيه إسترليني (£)، أو بالفيزا / ماستركارد.\n• **إلغاء وتعديل مجاني:** يمكنك إلغاء الحجز أو تغيير الموعد مجاناً حتى 24 ساعة قبل الانطلاق بدون أي رسوم.`,
        timestamp: timeStr,
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 تحدث مع خدمة العملاء على الواتساب',
        quickReplies: ['عرض أسعار الرحلات', 'احجز أورانج باي', 'توصيل الفنادق']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `💳 **Payment & Zero-Risk Cancellation Policy**:\n\n• **No Upfront Charge Required:** You can reserve your seats online now with zero card charges.\n• **Pay on the Day:** Pay comfortably in Cash (EUR €, USD $, GBP £, EGP) or with Visa/Mastercard when we pick you up.\n• **Free Cancellation:** Plans change? You can cancel or reschedule for 100% free up to 24 hours prior to departure.`,
      timestamp: timeStr,
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Inquire on WhatsApp',
      quickReplies: ['Show all trip prices', 'Book Orange Bay Island', 'Check hotel pickup']
    };
  }

  // 10. Private Yacht / Speedboat / VIP Charters
  if (query.includes('private') || query.includes('yacht') || query.includes('charter') || query.includes('romantic') || query.includes('خاص') || query.includes('يخت') || query.includes('لانش') || query.includes('vip') || query.includes('яхта')) {
    const privateTrips = [
      TRIPS.find(t => t.id === 'vip-speedboat')!,
      TRIPS.find(t => t.id === 'luxury-sunset-cruise')!
    ].filter(Boolean);

    const waUrl = generateWhatsAppBookingUrl({
      notes: 'Inquiring about private yacht or VIP speedboat charter',
      language: lang
    });

    if (isAr) {
      return {
        id: Math.random().toString(),
        sender: 'assistant',
        text: `🛥️ **تأجير اليخوت واللانشات السريعة الخاصة VIP**:\n\nإذا كنت تبحث عن الخصوصية التامة لك ولعائلتك أو مناسبة رومانسية خاصة:\n• **لانش سريع خاص (Speedboat VIP)**: سرعة ومرونة لزيارة 3 جزر ومواقع دلافين وشعاب نادرة بدون أي ركاب آخرين.\n• **يخت فاخر لرحلة الغروب**: عشاء رومانسي أو عائلي خاص مع طاهٍ خاص وطاقم ضيافة متميز.\n\nتواصل معنا على الواتساب للحصول على جدول مخصص وأفضل سعر مباشر!`,
        timestamp: timeStr,
        matchedTrips: privateTrips,
        whatsappUrl: waUrl,
        whatsappButtonText: '💬 طلب عرض سعر يخت خاص على الواتساب',
        quickReplies: ['احجز لانش سريع خاص', 'تفاصيل يخت الغروب', 'عرض الرحلات اليومية']
      };
    }

    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `🛥️ **Private VIP Yacht & Speedboat Charters**:\n\nLooking for total privacy, a romantic sunset celebration, or a custom route with your family?\n• **VIP Private Speedboat**: Cruise at high speed to private sandbars, isolated reef pinnacles, and dolphin lagoons on your own flexible schedule.\n• **Luxury Sunset Yacht**: Exclusive private cruise with fresh chef-prepared dinner, panoramic sunset decks, and attentive crew.\n\nMessage our team directly on WhatsApp for custom private charter quotes and instant boat availability!`,
      timestamp: timeStr,
      matchedTrips: privateTrips,
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 Inquire for Private Charter on WhatsApp',
      quickReplies: ['Book VIP Speedboat', 'Sunset Yacht Cruise details', 'Show all excursions']
    };
  }

  // 11. General Greetings or Unmatched Query — Offer helpful overview
  const featuredTrips = TRIPS.slice(0, 3);
  const waUrl = generateWhatsAppBookingUrl({
    notes: userInput ? `General question: "${userInput}"` : undefined,
    language: lang
  });

  if (isAr) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `مرحباً بك! يسعدني جداً مساعدتك في اختيار أفضل الأنشطة والرحلات في البحر الأحمر والغردقة 🌊\n\nإليك أشهر 3 رحلات يفضلها ضيوفنا هذا الموسم:\n1. **أورانج باي (المالديف المصرية)**\n2. **السباحة مع الدلافين وشعب العرق**\n3. **سوبر سفاري الصحراء والبيتش باجي**\n\nتشمل جميع رحلاتنا التوصيل المجاني من الفندق، وأحدث معدات السلامة، وإلغاء مجاني حتى 24 ساعة.\n\nعن أي رحلة تود الاستفسار، أو هل ترغب في الحجز المباشر عبر الواتساب؟`,
      timestamp: timeStr,
      matchedTrips: featuredTrips,
      whatsappUrl: waUrl,
      whatsappButtonText: '💬 تحدث معنا مباشرة عبر الواتساب',
      quickReplies: [
        '🏝️ رحلة جزيرة أورانج باي',
        '🐬 السباحة مع الدلافين',
        '🤿 تجربة الغوص PADI',
        '🏎️ سوبر سفاري بيتش باجي',
        '🚗 التوصيل والدفع'
      ]
    };
  }

  return {
    id: Math.random().toString(),
    sender: 'assistant',
    text: `Hello! I'm here to help you discover the very best excursions in Hurghada and the Red Sea 🌊\n\nHere are our top 3 guest-favorite experiences:\n1. **Orange Bay Island** (turquoise waters & scenic swings)\n2. **Shaab El Erg Dolphin House** (swimming near wild dolphins)\n3. **Super Safari 5-in-1** (desert quads, buggies & Bedouin BBQ)\n\nAll tours include free door-to-door hotel pickup, lunch/drinks, certified guides, and free 24-hour cancellation.\n\nWhich type of trip would you like to explore, or would you like to reserve directly on WhatsApp?`,
    timestamp: timeStr,
    matchedTrips: featuredTrips,
    whatsappUrl: waUrl,
    whatsappButtonText: '💬 Chat with Us Directly on WhatsApp',
    quickReplies: [
      '🏝️ Orange Bay Island',
      '🐬 Dolphin House Cruise',
      '🤿 PADI Discovery Scuba Dive',
      '🏎️ Super Safari 5-in-1',
      '🚗 Hotel Pickup & Payments'
    ]
  };
}
