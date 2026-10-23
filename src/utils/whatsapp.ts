import { Trip, CurrencyCode, LanguageCode } from '../types';
import { CURRENCIES } from '../data/trips';
import { getLocalizedTrip } from './localizedTrips';

export const AQUAWAY_WHATSAPP_NUMBER = '201040296016'; // Official AquaWay WhatsApp
export const AQUAWAY_DISPLAY_PHONE = '+20 104 029 6016';
export const AQUAWAY_EMAIL = 'info@aquaway.tours';
export const AQUAWAY_WEBSITE = 'https://www.aquaway.tours';
export const AQUAWAY_LEGAL_NAME = 'Aquaway Tours for Marine & Desert Tourism LLC';
export const AQUAWAY_ADDRESS = 'Hurghada Marina, Red Sea Governorate, Egypt';
export const AQUAWAY_HOURS = '08:00 - 22:00 EET Daily';

export interface WhatsAppBookingParams {
  tripTitle?: string;
  date?: string;
  adults?: number;
  children?: number;
  hotel?: string;
  room?: string;
  name?: string;
  currency?: string;
  totalPrice?: number | string;
  notes?: string;
  language?: LanguageCode;
}

/**
 * Simple, natural, human text message builder for WhatsApp
 * Designed to be friendly, informal, and super easy for non-native English speakers.
 */
export function generateWhatsAppBookingUrl(params: WhatsAppBookingParams): string {
  const lang = params.language || 'en';

  // If this is a general inquiry with no trip specified
  if (!params.tripTitle && !params.date && !params.hotel && !params.name && !params.notes) {
    const generalGreetings: Record<LanguageCode, string> = {
      en: 'Hi AquaWay! 👋 I am in Hurghada and want to ask about your trips. Can you help me? Thanks!',
      de: 'Hallo AquaWay! 👋 Ich bin in Hurghada und interessiere mich für eure Ausflüge. Könnt ihr mir helfen? Danke!',
      ru: 'Привет, AquaWay! 👋 Я сейчас в Хургаде и хочу узнать про ваши экскурсии. Подскажите, пожалуйста? Спасибо!',
      pl: 'Cześć AquaWay! 👋 Jestem w Hurghadzie i chcę zapytać o Wasze wycieczki. Pomożecie? Dzięki!',
      fr: 'Bonjour AquaWay ! 👋 Je suis à Hurghada et je voudrais des infos sur vos excursions. Pouvez-vous m\'aider ? Merci !',
      it: 'Ciao AquaWay! 👋 Sono a Hurghada e vorrei informazioni sui vostri tour. Potete aiutarmi? Grazie!',
      cs: 'Ahoj AquaWay! 👋 Jsem v Hurghadě a chci se zeptat na vaše výlety. Poradíte mi? Díky!',
      ar: 'أهلاً أكوا واي! 👋 أنا في الغردقة وحابب استفسر عن رحلاتكم وأسعاركم. ممكن تساعدوني؟ شكراً!'
    };
    const msg = generalGreetings[lang] || generalGreetings.en;
    return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  // Friendly conversational headers per language
  const headers: Record<LanguageCode, string> = {
    en: 'Hi AquaWay! 👋 I want to book a trip:',
    de: 'Hallo AquaWay! 👋 Ich möchte gerne einen Ausflug buchen:',
    ru: 'Привет, AquaWay! 👋 Хочу забронировать экскурсию:',
    pl: 'Cześć AquaWay! 👋 Chcę zarezerwować wycieczkę:',
    fr: 'Bonjour AquaWay ! 👋 Je voudrais réserver une excursion :',
    it: 'Ciao AquaWay! 👋 Vorrei prenotare un tour:',
    cs: 'Ahoj AquaWay! 👋 Rád bych si objednal výlet:',
    ar: 'أهلاً أكوا واي! 👋 حابب أحجز رحلة معاكم:'
  };

  const labels: Record<LanguageCode, {
    trip: string;
    date: string;
    people: string;
    adults: string;
    kids: string;
    hotel: string;
    room: string;
    name: string;
    total: string;
    notes: string;
    closing: string;
  }> = {
    en: {
      trip: 'Trip',
      date: 'Date',
      people: 'Guests',
      adults: 'Adults',
      kids: 'Kids',
      hotel: 'Hotel',
      room: 'Room',
      name: 'Name',
      total: 'Total',
      notes: 'Note',
      closing: 'Is this available? Thanks!'
    },
    de: {
      trip: 'Ausflug',
      date: 'Datum',
      people: 'Personen',
      adults: 'Erw.',
      kids: 'Kinder',
      hotel: 'Hotel',
      room: 'Zimmer',
      name: 'Name',
      total: 'Preis',
      notes: 'Notiz',
      closing: 'Habt ihr noch Plätze frei? Danke!'
    },
    ru: {
      trip: 'Экскурсия',
      date: 'Дата',
      people: 'Гости',
      adults: 'Взр.',
      kids: 'Дети',
      hotel: 'Отель',
      room: 'Номер',
      name: 'Имя',
      total: 'Цена',
      notes: 'Пожелания',
      closing: 'Есть свободные места? Спасибо!'
    },
    pl: {
      trip: 'Wycieczka',
      date: 'Data',
      people: 'Osoby',
      adults: 'Dorosłych',
      kids: 'Dzieci',
      hotel: 'Hotel',
      room: 'Pokój',
      name: 'Imię',
      total: 'Cena',
      notes: 'Uwagi',
      closing: 'Czy są wolne miejsca? Dzięki!'
    },
    fr: {
      trip: 'Sortie',
      date: 'Date',
      people: 'Participants',
      adults: 'Adultes',
      kids: 'Enfants',
      hotel: 'Hôtel',
      room: 'Chambre',
      name: 'Nom',
      total: 'Prix',
      notes: 'Remarque',
      closing: 'Est-ce disponible ? Merci !'
    },
    it: {
      trip: 'Tour',
      date: 'Data',
      people: 'Persone',
      adults: 'Adulti',
      kids: 'Bambini',
      hotel: 'Hotel',
      room: 'Camera',
      name: 'Nome',
      total: 'Prezzo',
      notes: 'Note',
      closing: 'C\'è posto disponibile? Grazie!'
    },
    cs: {
      trip: 'Výlet',
      date: 'Datum',
      people: 'Osoby',
      adults: 'Dospělí',
      kids: 'Děti',
      hotel: 'Hotel',
      room: 'Pokoj',
      name: 'Jméno',
      total: 'Cena',
      notes: 'Poznámka',
      closing: 'Máte volná místa? Díky!'
    },
    ar: {
      trip: 'الرحلة',
      date: 'الموعد',
      people: 'العدد',
      adults: 'بالغين',
      kids: 'أطفال',
      hotel: 'الفندق',
      room: 'الغرفة',
      name: 'الاسم',
      total: 'السعر',
      notes: 'ملاحظات',
      closing: 'هل الموعد متاح؟ شكراً جزيلاً!'
    }
  };

  const l = labels[lang] || labels.en;
  let message = `${headers[lang] || headers.en}\n\n`;

  if (params.tripTitle) {
    message += `• ${l.trip}: *${params.tripTitle}*\n`;
  }
  if (params.date) {
    message += `• ${l.date}: ${params.date}\n`;
  }

  if (params.adults !== undefined) {
    let guestsStr = `${params.adults} ${l.adults}`;
    if (params.children && params.children > 0) {
      guestsStr += `, ${params.children} ${l.kids}`;
    }
    message += `• ${l.people}: ${guestsStr}\n`;
  }

  if (params.hotel) {
    const roomStr = params.room ? ` (${l.room} ${params.room})` : '';
    message += `• ${l.hotel}: ${params.hotel}${roomStr}\n`;
  }

  if (params.name) {
    message += `• ${l.name}: ${params.name}\n`;
  }

  if (params.totalPrice) {
    if (params.currency && !String(params.totalPrice).includes(params.currency)) {
      message += `• ${l.total}: ${params.currency} ${params.totalPrice}\n`;
    } else {
      message += `• ${l.total}: ${params.totalPrice}\n`;
    }
  }

  if (params.notes) {
    message += `• ${l.notes}: ${params.notes}\n`;
  }

  message += `\n${l.closing}`;

  return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(priceBase: number, currencyCode: string, rate: number, symbol: string): string {
  if (priceBase === 0) {
    return currencyCode === 'EGP' ? 'خدمة مجانية' : 'Complimentary';
  }
  const converted = Math.round(priceBase * rate);
  if (currencyCode === 'EGP') {
    return `${converted.toLocaleString()} E£`;
  }
  if (currencyCode === 'PLN') {
    return `${converted} zł`;
  }
  if (currencyCode === 'CHF') {
    return `${converted} CHF`;
  }
  return `${symbol}${converted}`;
}

/**
 * Shared utility function for Floating WhatsApp button
 * Generates natural, short, friendly messages matching the user's current section and language
 */
export function generateFloatingConciergeWhatsAppUrl(params: {
  selectedTrip?: Trip | null;
  tripInView?: Trip | null;
  sectionContext?: string;
  currencyCode?: CurrencyCode;
  language?: LanguageCode;
  guestName?: string;
  notes?: string;
}): string {
  const { 
    selectedTrip, 
    tripInView, 
    sectionContext, 
    currencyCode = 'EUR', 
    language = 'en', 
    guestName, 
    notes 
  } = params;

  const targetTrip = selectedTrip || tripInView;

  if (targetTrip) {
    const locTrip = getLocalizedTrip(targetTrip, language);
    const curr = CURRENCIES[currencyCode] || CURRENCIES.EUR;
    const formattedPrice = formatPrice(targetTrip.priceUSD, curr.code, curr.rateToUSD, curr.symbol);

    // If modal is open or user clicked a specific trip card, make a short, friendly inquiry text
    const tripInquiries: Record<LanguageCode, string> = {
      en: `Hi AquaWay! 👋 I want to book ${locTrip.title} (${formattedPrice}/person). Do you have spots available? Thanks!`,
      de: `Hallo AquaWay! 👋 Ich interessiere mich für den Ausflug ${locTrip.title} (${formattedPrice}/Person). Habt ihr diese Woche noch Plätze frei? Danke!`,
      ru: `Привет, AquaWay! 👋 Меня интересует экскурсия «${locTrip.title}» (${formattedPrice}/чел). Есть ли свободные места на этой неделе? Спасибо!`,
      pl: `Cześć AquaWay! 👋 Interesuje mnie wycieczka ${locTrip.title} (${formattedPrice}/osoba). Czy macie wolne miejsca w tym tygodniu? Dzięki!`,
      fr: `Bonjour AquaWay ! 👋 Je suis intéressé(e) par la sortie ${locTrip.title} (${formattedPrice}/pers). Avez-vous de la place cette semaine ? Merci !`,
      it: `Ciao AquaWay! 👋 Mi interessa il tour ${locTrip.title} (${formattedPrice}/persona). C'è posto questa settimana? Grazie!`,
      cs: `Ahoj AquaWay! 👋 Mám zájem o výlet ${locTrip.title} (${formattedPrice}/osoba). Máte tento týden volná místa? Díky!`,
      ar: `أهلاً أكوا واي! 👋 مهتم برحلة ${locTrip.title} (${formattedPrice}/للفرد). هل في أماكن متاحة هذا الأسبوع؟ شكراً!`
    };

    if (!notes && !guestName) {
      const msg = tripInquiries[language] || tripInquiries.en;
      return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }

    return generateWhatsAppBookingUrl({
      tripTitle: locTrip.title,
      currency: curr.symbol,
      totalPrice: formattedPrice,
      name: guestName,
      notes: notes,
      language: language
    });
  }

  // Section-based friendly messages
  if (sectionContext) {
    if (sectionContext === 'weather-sea') {
      const weatherMsgs: Record<LanguageCode, string> = {
        en: `Hi AquaWay! 👋 How is the sea and weather today in Hurghada? Are boats going out today? Thanks!`,
        de: `Hallo AquaWay! 👋 Wie ist das Meer und der Wind heute in Hurghada? Fahren die Boote ganz normal?`,
        ru: `Привет, AquaWay! 👋 Какая сегодня погода и море в Хургаде? Лодки выходят в море?`,
        pl: `Cześć AquaWay! 👋 Jak dziś morze i wiatr w Hurghadzie? Rejsy odbywają się normalnie?`,
        fr: `Bonjour AquaWay ! 👋 Comment sont la mer et le vent aujourd'hui à Hurghada ? Les sorties en bateau se passent bien ?`,
        it: `Ciao AquaWay! 👋 Com'è il mare oggi a Hurghada? Le barche escono regolarmente?`,
        cs: `Ahoj AquaWay! 👋 Jaké je dnes v Hurghadě moře a vítr? Jezdí lodě bez problémů?`,
        ar: `أهلاً أكوا واي! 👋 كيف حالة البحر والرياح اليوم في الغردقة؟ هل الرحلات البحرية ماشية تمام؟`
      };
      const msg = weatherMsgs[language] || weatherMsgs.en;
      return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }

    if (sectionContext === 'red-sea-guide') {
      const pickupMsgs: Record<LanguageCode, string> = {
        en: `Hi AquaWay! 👋 Do you have free hotel pickup from my hotel in Hurghada? Thanks!`,
        de: `Hallo AquaWay! 👋 Gibt es eine kostenlose Abholung von meinem Hotel in Hurghada?`,
        ru: `Привет, AquaWay! 👋 Есть ли бесплатный трансфер из моего отеля в Хургаде?`,
        pl: `Cześć AquaWay! 👋 Czy macie darmowy odbiór z mojego hotelu w Hurghadzie?`,
        fr: `Bonjour AquaWay ! 👋 Proposez-vous la prise en charge gratuite depuis mon hôtel à Hurghada ?`,
        it: `Ciao AquaWay! 👋 Fate il pick-up gratuito dal mio hotel a Hurghada?`,
        cs: `Ahoj AquaWay! 👋 Máte odvoz zdarma přímo z mého hotelu v Hurghadě?`,
        ar: `أهلاً أكوا واي! 👋 هل التوصيل المجاني متوفر من فندقي في الغردقة؟`
      };
      const msg = pickupMsgs[language] || pickupMsgs.en;
      return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }

    if (sectionContext === 'faq' || sectionContext === 'about') {
      const faqMsgs: Record<LanguageCode, string> = {
        en: `Hi AquaWay! 👋 I have a question about booking and payment. Can you help me? Thanks!`,
        de: `Hallo AquaWay! 👋 Ich habe eine kurze Frage zur Buchung und Bezahlung am Ausflugstag.`,
        ru: `Привет, AquaWay! 👋 У меня короткий вопрос про бронирование и оплату в день экскурсии.`,
        pl: `Cześć AquaWay! 👋 Mam szybkie pytanie o rezerwację i płatność w dniu wycieczki.`,
        fr: `Bonjour AquaWay ! 👋 J'ai une petite question sur la réservation et le paiement le jour de la sortie.`,
        it: `Ciao AquaWay! 👋 Ho una domanda veloce sulla prenotazione e il pagamento il giorno del tour.`,
        cs: `Ahoj AquaWay! 👋 Mám rychlý dotaz ohledně rezervace a platby v den výletu.`,
        ar: `أهلاً أكوا واي! 👋 عندي استفسار سريع بخصوص الحجز والدفع يوم الرحلة.`
      };
      const msg = faqMsgs[language] || faqMsgs.en;
      return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }

    if (sectionContext === 'reviews' || sectionContext === 'gallery') {
      const reviewMsgs: Record<LanguageCode, string> = {
        en: `Hi AquaWay! 👋 Which trip do you recommend most in Hurghada? Thanks!`,
        de: `Hallo AquaWay! 👋 Ich habe eure Fotos und Bewertungen gesehen. Welchen Ausflug empfehlt ihr uns?`,
        ru: `Привет, AquaWay! 👋 Посмотрел ваши фото и отзывы. Какой тур вы нам посоветуете?`,
        pl: `Cześć AquaWay! 👋 Widziałem Wasze zdjęcia i opinie. Jaką wycieczkę nam polecacie?`,
        fr: `Bonjour AquaWay ! 👋 J'ai vu vos photos et avis. Quelle excursion nous conseillez-vous ?`,
        it: `Ciao AquaWay! 👋 Ho visto le vostre foto e recensioni. Quale tour ci consigliate?`,
        cs: `Ahoj AquaWay! 👋 Viděl jsem vaše fotky a recenze. Jaký výlet byste nám doporučili?`,
        ar: `أهلاً أكوا واي! 👋 شفت صور وتقييمات رحلاتكم. تنصحونا بأي رحلة أفضل لينا؟`
      };
      const msg = reviewMsgs[language] || reviewMsgs.en;
      return `https://wa.me/${AQUAWAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }
  }

  return generateWhatsAppBookingUrl({
    name: guestName,
    notes: notes,
    language: language
  });
}

export const generateFloatingWhatsAppUrl = generateFloatingConciergeWhatsAppUrl;

