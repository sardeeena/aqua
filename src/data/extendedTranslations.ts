import { LanguageCode } from '../types';

export interface CustomPlannerI18n {
  badge: string;
  title: string;
  subtitle: string;
  tripTypeLabel: string;
  types: {
    privateYacht: string;
    privateSpeedboat: string;
    privateSafari: string;
    islandSunset: string;
    cairoLuxor: string;
    diveExpedition: string;
  };
  dateLabel: string;
  guestsLabel: string;
  guestOptions: {
    couples: string;
    family: string;
    group: string;
    largeEvent: string;
  };
  occasionLabel: string;
  occasionPlaceholder: string;
  cateringLabel: string;
  cateringOptions: {
    seafood: string;
    drinksFruit: string;
    bbq: string;
    vegan: string;
  };
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  submitBtn: string;
  whatsappBtn: string;
  successTitle: string;
  successDesc: string;
  successWhatsAppBtn: string;
}

export const CUSTOM_PLANNER_TRANSLATIONS: Record<LanguageCode, CustomPlannerI18n> = {
  en: {
    badge: 'Custom Private Trips',
    title: 'Plan Your Own Private Trip',
    subtitle: 'Perfect for families, couples, special birthdays, and private group charters.',
    tripTypeLabel: 'What kind of trip would you like?',
    types: {
      privateYacht: 'Private Yacht Charter',
      privateSpeedboat: 'Private Speedboat',
      privateSafari: 'Private Desert Safari',
      islandSunset: 'Sunset Island Dinner',
      cairoLuxor: 'Private Cairo / Luxor',
      diveExpedition: 'Private Diving Guide'
    },
    dateLabel: 'Preferred Date *',
    guestsLabel: 'Number of Guests',
    guestOptions: {
      couples: '2 Guests (Couples VIP)',
      family: '4-6 Guests (Family Charter)',
      group: '7-12 Guests (Private Yacht)',
      largeEvent: '15+ Large Group Event'
    },
    occasionLabel: 'Special Occasion (Optional)',
    occasionPlaceholder: 'e.g. Birthday, Wedding proposal, Anniversary, Family holiday',
    cateringLabel: 'Food & Drink Choices',
    cateringOptions: {
      seafood: 'Fresh Seafood & Grilled Fish',
      drinksFruit: 'Chilled Drinks & Fresh Fruit',
      bbq: 'Bedouin Sunset Barbecue',
      vegan: 'Vegetarian / Vegan Menu'
    },
    nameLabel: 'Your Name *',
    namePlaceholder: 'e.g. David Miller',
    phoneLabel: 'WhatsApp Number *',
    phonePlaceholder: 'e.g. +44 7123 456789',
    submitBtn: 'Send Request',
    whatsappBtn: 'Send via WhatsApp',
    successTitle: 'Trip Request Received!',
    successDesc: 'Our team is putting together the best boat options for you. We will message you on WhatsApp right away with photos and exact prices.',
    successWhatsAppBtn: 'Chat with Us on WhatsApp'
  },
  de: {
    badge: 'Individuelle Private Touren',
    title: 'Planen Sie Ihre private Tour',
    subtitle: 'Perfekt für Familien, Paare, Geburtstage und private Gruppencharter.',
    tripTypeLabel: 'Welche Art von Ausflug wünschen Sie?',
    types: {
      privateYacht: 'Private Yacht mieten',
      privateSpeedboat: 'Privates Schnellboot',
      privateSafari: 'Private Wüstensafari',
      islandSunset: 'Insel-Dinner zum Sonnenuntergang',
      cairoLuxor: 'Privat Kairo / Luxor',
      diveExpedition: 'Privater Tauchguide'
    },
    dateLabel: 'Wunschdatum *',
    guestsLabel: 'Anzahl der Gäste',
    guestOptions: {
      couples: '2 Gäste (Paare VIP)',
      family: '4-6 Gäste (Familien-Charter)',
      group: '7-12 Gäste (Private Yacht)',
      largeEvent: '15+ Große Gruppe / Event'
    },
    occasionLabel: 'Besonderer Anlass (Optional)',
    occasionPlaceholder: 'z.B. Geburtstag, Heiratsantrag, Jubiläum, Urlaub',
    cateringLabel: 'Verpflegung & Getränke',
    cateringOptions: {
      seafood: 'Frische Meeresfrüchte & Grillfisch',
      drinksFruit: 'Gekühlte Getränke & frisches Obst',
      bbq: 'Beduinen-Grillabend bei Sonnenuntergang',
      vegan: 'Vegetarisches / Veganes Menü'
    },
    nameLabel: 'Ihr Name *',
    namePlaceholder: 'z.B. Markus Weber',
    phoneLabel: 'WhatsApp-Nummer *',
    phonePlaceholder: 'z.B. +49 170 1234567',
    submitBtn: 'Anfrage senden',
    whatsappBtn: 'Über WhatsApp anfragen',
    successTitle: 'Anfrage erfolgreich erhalten!',
    successDesc: 'Unser Team stellt die besten Optionen für Sie zusammen. Wir melden uns umgehend auf WhatsApp mit Fotos und verbindlichen Preisen.',
    successWhatsAppBtn: 'Direkt per WhatsApp chatten'
  },
  ru: {
    badge: 'Индивидуальные VIP Туры',
    title: 'Спланируйте свою приватную поездку',
    subtitle: 'Идеально для семей, пар, дней рождения и закрытых мероприятий на яхте.',
    tripTypeLabel: 'Какой тип экскурсии вас интересует?',
    types: {
      privateYacht: 'Аренда приватной яхты',
      privateSpeedboat: 'Скоростной катер',
      privateSafari: 'Индивидуальное сафари',
      islandSunset: 'Ужин на острове на закате',
      cairoLuxor: 'Индивидуальный Каир / Луксор',
      diveExpedition: 'Персональный гид по дайвингу'
    },
    dateLabel: 'Желаемая дата *',
    guestsLabel: 'Количество гостей',
    guestOptions: {
      couples: '2 гостя (Для пар VIP)',
      family: '4-6 гостей (Для всей семьи)',
      group: '7-12 гостей (Приватная яхта)',
      largeEvent: '15+ Большая группа / Событие'
    },
    occasionLabel: 'Особый повод (по желанию)',
    occasionPlaceholder: 'например: День рождения, предложение, годовщина, отдых',
    cateringLabel: 'Питание и напитки',
    cateringOptions: {
      seafood: 'Свежие морепродукты и рыба на гриле',
      drinksFruit: 'Охлажденные напитки и свежие фрукты',
      bbq: 'Бедуинское барбекю на закате',
      vegan: 'Вегетарианское / постное меню'
    },
    nameLabel: 'Ваше имя *',
    namePlaceholder: 'например: Алексей Смирнов',
    phoneLabel: 'Номер WhatsApp *',
    phonePlaceholder: 'например: +7 999 123-45-67',
    submitBtn: 'Отправить заявку',
    whatsappBtn: 'Отправить через WhatsApp',
    successTitle: 'Заявка успешно получена!',
    successDesc: 'Наша команда уже подбирает лучшие варианты катеров. Мы свяжемся с вами в WhatsApp с фото и точными ценами.',
    successWhatsAppBtn: 'Написать нам в WhatsApp'
  },
  pl: {
    badge: 'Indywidualne Wycieczki VIP',
    title: 'Zaplanuj własną prywatną wycieczkę',
    subtitle: 'Idealne dla rodzin, par, na urodziny i prywatne rejsy jachtem.',
    tripTypeLabel: 'Jaki rodzaj wycieczki wybierasz?',
    types: {
      privateYacht: 'Czarter prywatnego jachtu',
      privateSpeedboat: 'Prywatna motorówka',
      privateSafari: 'Prywatne safari na pustyni',
      islandSunset: 'Kolacja na wyspie o zachodzie słońca',
      cairoLuxor: 'Prywatny Kair / Luksor',
      diveExpedition: 'Prywatny przewodnik nurkowy'
    },
    dateLabel: 'Preferowana data *',
    guestsLabel: 'Liczba gości',
    guestOptions: {
      couples: '2 osoby (Dla par VIP)',
      family: '4-6 osób (Czarter rodzinny)',
      group: '7-12 osób (Prywatny jacht)',
      largeEvent: '15+ Duża grupa / Impreza'
    },
    occasionLabel: 'Okazja specjalna (opcjonalnie)',
    occasionPlaceholder: 'np. Urodziny, Zaręczyny, Rocznica, Wakacje',
    cateringLabel: 'Wybór jedzenia i napojów',
    cateringOptions: {
      seafood: 'Świeże owoce morza i ryba z grilla',
      drinksFruit: 'Schłodzone napoje i świeże owoce',
      bbq: 'Beduinski grill o zachodzie słońca',
      vegan: 'Menu wegetariańskie / wegańskie'
    },
    nameLabel: 'Twoje imię i nazwisko *',
    namePlaceholder: 'np. Piotr Kowalski',
    phoneLabel: 'Numer WhatsApp *',
    phonePlaceholder: 'np. +48 601 234 567',
    submitBtn: 'Wyślij zapytanie',
    whatsappBtn: 'Wyślij przez WhatsApp',
    successTitle: 'Zapytanie zostało wysłane!',
    successDesc: 'Nasz zespół dobiera najlepsze opcje łodzi. Skontaktujemy się na WhatsApp ze zdjęciami i dokładnymi cenami.',
    successWhatsAppBtn: 'Porozmawiaj na WhatsApp'
  },
  fr: {
    badge: 'Excursions Privées Sur Mesure',
    title: 'Créez votre excursion privée',
    subtitle: 'Parfait pour les familles, les couples, les anniversaires et les charters privés.',
    tripTypeLabel: 'Quel type de sortie souhaitez-vous ?',
    types: {
      privateYacht: 'Location de Yacht Privé',
      privateSpeedboat: 'Speedboat Privé',
      privateSafari: 'Safari Désert Privé',
      islandSunset: 'Dîner Coucher de Soleil sur l’île',
      cairoLuxor: 'Le Caire / Louxor Privé',
      diveExpedition: 'Guide de Plongée Privé'
    },
    dateLabel: 'Date souhaitée *',
    guestsLabel: 'Nombre de personnes',
    guestOptions: {
      couples: '2 Personnes (Couples VIP)',
      family: '4-6 Personnes (Famille)',
      group: '7-12 Personnes (Yacht Privé)',
      largeEvent: '15+ Grand Groupe / Événement'
    },
    occasionLabel: 'Occasion Spéciale (Facultatif)',
    occasionPlaceholder: 'ex: Anniversaire, Demande en mariage, Vacances',
    cateringLabel: 'Restauration & Boissons',
    cateringOptions: {
      seafood: 'Fruits de mer frais & Poisson grillé',
      drinksFruit: 'Boissons fraîches & Fruits de saison',
      bbq: 'Barbecue Bédouin au coucher du soleil',
      vegan: 'Menu Végétarien / Végétalien'
    },
    nameLabel: 'Votre Nom *',
    namePlaceholder: 'ex: Jean Dupont',
    phoneLabel: 'Numéro WhatsApp *',
    phonePlaceholder: 'ex: +33 6 12 34 56 78',
    submitBtn: 'Envoyer la demande',
    whatsappBtn: 'Envoyer via WhatsApp',
    successTitle: 'Demande bien reçue !',
    successDesc: 'Notre équipe prépare les meilleures options de bateaux. Nous vous contacterons sur WhatsApp avec photos et tarifs détaillés.',
    successWhatsAppBtn: 'Discuter sur WhatsApp'
  },
  it: {
    badge: 'Tour Privati Personalizzati',
    title: 'Pianifica la tua escursione privata',
    subtitle: 'Ideale per famiglie, coppie, compleanni e noleggi privati in yacht.',
    tripTypeLabel: 'Che tipo di escursione desideri?',
    types: {
      privateYacht: 'Noleggio Yacht Privato',
      privateSpeedboat: 'Motoscafo Privato',
      privateSafari: 'Safari nel Deserto Privato',
      islandSunset: 'Cena al Tramonto sull’Isola',
      cairoLuxor: 'Cairo / Luxor Privato',
      diveExpedition: 'Guida Subacquea Privata'
    },
    dateLabel: 'Data preferita *',
    guestsLabel: 'Numero di ospiti',
    guestOptions: {
      couples: '2 Ospiti (Coppie VIP)',
      family: '4-6 Ospiti (Famiglia)',
      group: '7-12 Ospiti (Yacht Privato)',
      largeEvent: '15+ Grande Gruppo / Evento'
    },
    occasionLabel: 'Occasione Speciale (Opzionale)',
    occasionPlaceholder: 'es. Compleanno, Proposta di matrimonio, Vacanza',
    cateringLabel: 'Scelta Ristorazione & Bevande',
    cateringOptions: {
      seafood: 'Frutti di mare freschi e pesce alla griglia',
      drinksFruit: 'Bevande fresche e frutta di stagione',
      bbq: 'Barbecue beduino al tramonto',
      vegan: 'Menu Vegetariano / Vegano'
    },
    nameLabel: 'Il tuo Nome *',
    namePlaceholder: 'es. Marco Rossi',
    phoneLabel: 'Numero WhatsApp *',
    phonePlaceholder: 'es. +39 340 1234567',
    submitBtn: 'Invia Richiesta',
    whatsappBtn: 'Invia tramite WhatsApp',
    successTitle: 'Richiesta Ricevuta!',
    successDesc: 'Il nostro team sta preparando le migliori opzioni per te. Ti risponderemo subito su WhatsApp con foto e prezzi precisi.',
    successWhatsAppBtn: 'Contattaci su WhatsApp'
  },
  cs: {
    badge: 'Soukromé Výlety na Míru',
    title: 'Naplánujte si svůj soukromý výlet',
    subtitle: 'Perfektní pro rodiny, páry, narozeniny a soukromé pronájmy jachet.',
    tripTypeLabel: 'Jaký typ výletu si přejete?',
    types: {
      privateYacht: 'Pronájem soukromé jachty',
      privateSpeedboat: 'Soukromý motorový člun',
      privateSafari: 'Soukromé pouštní safari',
      islandSunset: 'Večeře na ostrově při západu slunce',
      cairoLuxor: 'Soukromá Káhira / Luxor',
      diveExpedition: 'Soukromý instruktor potápění'
    },
    dateLabel: 'Preferované datum *',
    guestsLabel: 'Počet hostů',
    guestOptions: {
      couples: '2 hosté (Pro páry VIP)',
      family: '4-6 hostů (Rodinný člun)',
      group: '7-12 hostů (Soukromá jachta)',
      largeEvent: '15+ Velká skupina / Akce'
    },
    occasionLabel: 'Speciální příležitost (Volitelné)',
    occasionPlaceholder: 'např. Narozeniny, Zasnoubení, Výročí, Dovolená',
    cateringLabel: 'Občerstvení a nápoje',
    cateringOptions: {
      seafood: 'Čerstvé mořské plody a grilovaná ryba',
      drinksFruit: 'Chlazené nápoje a čerstvé ovoce',
      bbq: 'Beduínské grilování při západu slunce',
      vegan: 'Vegetariánské / veganské menu'
    },
    nameLabel: 'Vaše jméno *',
    namePlaceholder: 'např. Jan Novák',
    phoneLabel: 'Telefonní číslo (WhatsApp) *',
    phonePlaceholder: 'např. +420 777 123 456',
    submitBtn: 'Odeslat poptávku',
    whatsappBtn: 'Odeslat přes WhatsApp',
    successTitle: 'Poptávka byla úspěšně odeslána!',
    successDesc: 'Náš tým pro vás připravuje nejlepší možnosti lodí. Brzy se vám ozveme na WhatsApp s fotografiemi a přesnými cenami.',
    successWhatsAppBtn: 'Napsat na WhatsApp'
  },
  ar: {
    badge: 'رحلات خاصة وتأجير يخوت VIP',
    title: 'صمم رحلتك البحرية الخاصة',
    subtitle: 'مثالية للعائلات، الأزواج، المناسبات الخاصة، وأعياد الميلاد على متن يخوت فاخرة.',
    tripTypeLabel: 'ما هو نوع الرحلة التي تفضلها؟',
    types: {
      privateYacht: 'تأجير يخت بحري خاص',
      privateSpeedboat: 'لانش سريع خاص (سبيد بوت)',
      privateSafari: 'سفاري صحراوي خاص VIP',
      islandSunset: 'عشاء جزيرة وقت الغروب',
      cairoLuxor: 'رحلة خاصة إلى القاهرة / الأقصر',
      diveExpedition: 'مرشد غوص خاص معتمد'
    },
    dateLabel: 'التاريخ المفضل *',
    guestsLabel: 'عدد الضيوف والأفراد',
    guestOptions: {
      couples: 'شخصان (كابلز / عرسان VIP)',
      family: '4-6 أفراد (رحلة عائلية)',
      group: '7-12 فرد (مجموعة على يخت خاص)',
      largeEvent: '15+ فرد (مجموعات كبيرة وفعاليات)'
    },
    occasionLabel: 'المناسبة الخاصة (اختياري)',
    occasionPlaceholder: 'مثال: عيد ميلاد، ذكرى زواج، رحلة عائلية خاصة',
    cateringLabel: 'خيارات الوجبات والمشروبات',
    cateringOptions: {
      seafood: 'مأكولات بحرية طازجة وسمك مشوي',
      drinksFruit: 'مشروبات مثلجة وفواكه طازجة',
      bbq: 'مشويات بدوية على الفحم وقت الغروب',
      vegan: 'وجبات نباتية صحية ومميزة'
    },
    nameLabel: 'الاسم الكريم *',
    namePlaceholder: 'مثال: أحمد عبد الله',
    phoneLabel: 'رقم الواتساب للتواصل *',
    phonePlaceholder: 'مثال: +20 100 1234567',
    submitBtn: 'إرسال طلب الرحلة',
    whatsappBtn: 'إرسال عبر الواتساب مباشرة',
    successTitle: 'تم استلام طلب رحلتك بنجاح!',
    successDesc: 'يقوم فريق العمليات بتجهيز أفضل خيارات اليخوت المتاحة. سنتواصل معك فوراً عبر الواتساب مع صور المراكب والأسعار الدقيقة.',
    successWhatsAppBtn: 'تواصل معنا عبر الواتساب'
  }
};

export interface LegalI18n {
  closeBtn: string;
  terms: {
    title: string;
    intro: string;
    sec1Title: string;
    sec1Text: string;
    sec2Title: string;
    sec2Text: string;
    sec3Title: string;
    sec3Text: string;
  };
  privacy: {
    title: string;
    intro: string;
    sec1Title: string;
    sec1Text: string;
    sec2Text: string;
  };
  refund: {
    title: string;
    guarantee: string;
    sec1Title: string;
    sec1Text: string;
    sec2Title: string;
    sec2Text: string;
  };
}

export const LEGAL_TRANSLATIONS: Record<LanguageCode, LegalI18n> = {
  en: {
    closeBtn: 'Close Window',
    terms: {
      title: 'Terms of Service & Booking Conditions',
      intro: 'Welcome to AquaWay Tours Red Sea. By booking an excursion or using aquaway.tours / aquaway.io, you agree to the following terms:',
      sec1Title: '1. Booking & Reservation Confirmation',
      sec1Text: 'Reservations are submitted online or directly via WhatsApp. For standard day excursions, no advance credit card deposit is charged. Full confirmation with pickup windows is delivered via WhatsApp or email prior to departure.',
      sec2Title: '2. Hotel Pickup & Transfers',
      sec2Text: 'Guests must be present at the hotel lobby or main gate at the designated pickup time. Drivers are instructed to wait a maximum of 10 minutes past the scheduled window to avoid delaying boat departure times.',
      sec3Title: '3. Maritime Safety & Weather Conditions',
      sec3Text: 'The safety of our passengers is paramount. In rare instances where the Egyptian Coast Guard restricts harbor departure due to high gale winds or adverse sea states, excursions will be rescheduled to the next available date or fully refunded without penalty.'
    },
    privacy: {
      title: 'Privacy & Data Protection Policy',
      intro: 'AquaWay Tours respects your personal privacy. We only collect details essential for coordinating your excursion (such as name, WhatsApp phone number, and hotel location for transfer logistics).',
      sec1Title: 'Data Usage & Security',
      sec1Text: 'We do not sell, rent, or share personal data with external third parties. Transfer details are shared solely with our licensed dispatchers and boat captains.',
      sec2Text: 'You may request deletion of your contact records at any time by contacting booking@aquaway.tours.'
    },
    refund: {
      title: 'Free 24-Hour Cancellation & Refund Policy',
      guarantee: '100% Risk-Free Guarantee: Cancel or modify any standard excursion up to 24 hours prior to departure with zero fee.',
      sec1Title: 'Illness & Medical Reasons',
      sec1Text: 'If a traveler falls ill on the morning of an excursion, notify us immediately via WhatsApp before the transfer vehicle arrives, and we will happily reschedule you to a later date during your stay.',
      sec2Title: 'Weather-Related Cancellations',
      sec2Text: 'If maritime authorities cancel trips due to severe weather, 100% of any prepaid amounts are refunded immediately in cash or credited back to your original payment method.'
    }
  },
  de: {
    closeBtn: 'Fenster schließen',
    terms: {
      title: 'Allgemeine Geschäftsbedingungen & Buchungsrichtlinien',
      intro: 'Willkommen bei AquaWay Tours Rotes Meer. Mit der Buchung eines Ausflugs stimmen Sie den folgenden Bedingungen zu:',
      sec1Title: '1. Buchung & Reservierungsbestätigung',
      sec1Text: 'Buchungen erfolgen online oder direkt per WhatsApp. Für Standard-Tagesausflüge ist keine Vorauszahlung per Kreditkarte erforderlich. Die Bestätigung mit genauen Abholzeiten erhalten Sie vorab per WhatsApp.',
      sec2Title: '2. Hotel-Transfer & Abholung',
      sec2Text: 'Bitte seien Sie zur vereinbarten Zeit in der Hotellobby. Fahrer warten maximal 10 Minuten, um die pünktliche Abfahrt der Boote zu gewährleisten.',
      sec3Title: '3. Sicherheit & Wetterbedingungen',
      sec3Text: 'Die Sicherheit unserer Gäste hat oberste Priorität. Bei seltenen behördlichen Ausfahrverboten wegen Starkwinds wird die Tour kostenfrei verschoben oder zu 100% erstattet.'
    },
    privacy: {
      title: 'Datenschutzerklärung & Privatsphäre',
      intro: 'AquaWay Tours respektiert Ihre Privatsphäre. Wir erfassen nur Daten, die für die Organisation Ihres Ausflugs notwendig sind (Name, WhatsApp-Nummer, Hotel).',
      sec1Title: 'Datensicherheit',
      sec1Text: 'Wir verkaufen oder teilen keine personenbezogenen Daten mit Dritten. Daten werden ausschließlich für den Transfer und die Gästeliste genutzt.',
      sec2Text: 'Sie können die Löschung Ihrer Daten jederzeit per E-Mail an booking@aquaway.tours anfordern.'
    },
    refund: {
      title: 'Kostenlose Stornierung bis 24h vor Abfahrt',
      guarantee: '100% risikofreie Buchung: Kostenlose Stornierung oder Umbuchung bis 24 Stunden vor Beginn der Tour.',
      sec1Title: 'Krankheit & Medizinische Gründe',
      sec1Text: 'Sollten Sie am Morgen der Tour erkranken, informieren Sie uns bitte rechtzeitig per WhatsApp vor Ankunft des Transfers, damit wir Ihren Ausflug kostenfrei auf einen anderen Tag verschieben können.',
      sec2Title: 'Wetterbedingte Absagen',
      sec2Text: 'Wird eine Fahrt wetterbedingt von der Küstenwache abgesagt, erhalten Sie 100% des Betrags unverzüglich erstattet.'
    }
  },
  ru: {
    closeBtn: 'Закрыть окно',
    terms: {
      title: 'Условия бронирования и обслуживания',
      intro: 'Добро пожаловать в AquaWay Tours. Бронируя экскурсию, вы соглашаетесь со следующими условиями:',
      sec1Title: '1. Бронирование и подтверждение',
      sec1Text: 'Бронирование оформляется на сайте или напрямую через WhatsApp. Предоплата картой для стандартных однодневных поездок не требуется. Точное время трансфера высылается в WhatsApp накануне.',
      sec2Title: '2. Трансфер из отеля',
      sec2Text: 'Гости должны ожидать на ресепшн отеля в назначенное время. Время ожидания водителя составляет до 10 минут, чтобы не задерживать выход яхты.',
      sec3Title: '3. Морская безопасность и погода',
      sec3Text: 'Безопасность гостей превыше всего. В случае запрета на выход в море от береговой охраны из-за шторма, экскурсия переносится на другой удобный день или возвращается 100% оплаты.'
    },
    privacy: {
      title: 'Политика конфиденциальности',
      intro: 'AquaWay Tours бережно относится к вашим данным. Мы запрашиваем только необходимую информацию для трансфера и связи (имя, номер WhatsApp, отель).',
      sec1Title: 'Защита данных',
      sec1Text: 'Мы не передаем ваши данные третьим лицам. Информация доступна исключительно диспетчерам и капитану судна.',
      sec2Text: 'Вы можете запросить удаление ваших данных в любое время по адресу booking@aquaway.tours.'
    },
    refund: {
      title: 'Бесплатная отмена за 24 часа',
      guarantee: '100% гарантия без риска: бесплатная отмена или перенос любой стандартной экскурсии за 24 часа до начала.',
      sec1Title: 'Болезнь и непредвиденные обстоятельства',
      sec1Text: 'Если вы заболели утром перед поездкой, напишите нам в WhatsApp до приезда трансфера, и мы с радостью перенесем экскурсию на другой день вашего отдыха.',
      sec2Title: 'Отмена по погодным условиям',
      sec2Text: 'Если поездка отменена морской службой из-за погодных условий, 100% средств возвращаются моментально наличными или на карту.'
    }
  },
  pl: {
    closeBtn: 'Zamknij okno',
    terms: {
      title: 'Regulamin rezerwacji i świadczenia usług',
      intro: 'Witamy w AquaWay Tours Red Sea. Rezerwując wycieczkę, akceptujesz poniższe warunki:',
      sec1Title: '1. Rezerwacja i potwierdzenie',
      sec1Text: 'Rezerwacji można dokonać online lub przez WhatsApp. Nie wymagamy przedpłat kartą dla standardowych wycieczek jednodniowych. Potwierdzenie godziny odbioru otrzymasz dzień wcześniej.',
      sec2Title: '2. Odbiór z hotelu',
      sec2Text: 'Prosimy o punktualność w recepcji hotelu. Kierowca czeka do 10 minut, aby nie opóźniać wypłynięcia statku.',
      sec3Title: '3. Bezpieczeństwo i warunki pogodowe',
      sec3Text: 'Bezpieczeństwo jest priorytetem. W przypadku zakazu wypłynięcia z powodu sztormu wycieczka jest przekładana lub zwracamy 100% wpłaty.'
    },
    privacy: {
      title: 'Polityka prywatności i ochrona danych',
      intro: 'Szanujemy Twoją prywatność. Zbieramy tylko dane niezbędne do organizacji wycieczki (imię, numer WhatsApp, nazwa hotelu).',
      sec1Title: 'Bezpieczeństwo danych',
      sec1Text: 'Nie sprzedajemy ani nie udostępniamy danych podmiotom trzecim. Dane służą wyłącznie do organizacji transportu i listy pasażerów.',
      sec2Text: 'Możesz zażądać usunięcia swoich danych pisząc na booking@aquaway.tours.'
    },
    refund: {
      title: 'Darmowe anulowanie do 24h przed wycieczką',
      guarantee: '100% Gwarancji: Bezpłatna anulacja lub zmiana terminu do 24 godzin przed wypłynięciem.',
      sec1Title: 'Choroba i nagłe wypadki',
      sec1Text: 'W przypadku złego samopoczucia rano przed wycieczką, napisz do nas na WhatsApp przed przyjazdem busa, a bez opłat przeniesiemy rejs na inny dzień.',
      sec2Title: 'Odwołanie z powodu pogody',
      sec2Text: 'W razie odwołania rejsu przez straż przybrzeżną zwracamy 100% wpłaconych środków natychmiast.'
    }
  },
  fr: {
    closeBtn: 'Fermer la fenêtre',
    terms: {
      title: 'Conditions Générales & Réservations',
      intro: 'Bienvenue chez AquaWay Tours Mer Rouge. En réservant une excursion, vous acceptez les conditions suivantes :',
      sec1Title: '1. Réservation & Confirmation',
      sec1Text: 'Les réservations s’effectuent en ligne ou sur WhatsApp. Aucun acompte par carte n’est requis pour les excursions à la journée. L’horaire exact de prise en charge est confirmé la veille.',
      sec2Title: '2. Prise en charge à l’hôtel',
      sec2Text: 'Veuillez être présent dans le hall de votre hôtel à l’heure convenue. Le chauffeur attend au maximum 10 minutes pour garantir le départ ponctuel du bateau.',
      sec3Title: '3. Sécurité maritime & Météo',
      sec3Text: 'La sécurité est notre priorité absolue. En cas d’interdiction de sortie en mer par les garde-côtes, la sortie est reportée sans frais ou remboursée à 100%.'
    },
    privacy: {
      title: 'Politique de Confidentialité',
      intro: 'AquaWay Tours respecte votre vie privée. Nous collectons uniquement les informations indispensables à l’organisation de votre sortie (nom, WhatsApp, hôtel).',
      sec1Title: 'Protection des données',
      sec1Text: 'Vos informations ne sont jamais cédées à des tiers et sont uniquement utilisées pour le transport et la logistique du bateau.',
      sec2Text: 'Vous pouvez demander la suppression de vos données à booking@aquaway.tours.'
    },
    refund: {
      title: 'Annulation Gratuite jusqu’à 24h',
      guarantee: 'Garantie 100% sans risque : Annulez ou modifiez sans frais jusqu’à 24 heures avant le départ.',
      sec1Title: 'Maladie ou imprévu médical',
      sec1Text: 'Si vous tombez malade le matin de l’excursion, prévenez-nous sur WhatsApp avant l’arrivée du van et nous reporterons votre sortie avec plaisir.',
      sec2Title: 'Annulation météo',
      sec2Text: 'Si les autorités maritimes annulent les départs pour cause de mauvais temps, 100% des montants sont immédiatement remboursés.'
    }
  },
  it: {
    closeBtn: 'Chiudi finestra',
    terms: {
      title: 'Termini di Servizio e Condizioni di Prenotazione',
      intro: 'Benvenuti su AquaWay Tours Mar Rosso. Prenotando un’escursione, accetti i seguenti termini:',
      sec1Title: '1. Prenotazione e Conferma',
      sec1Text: 'Le prenotazioni si effettuano online o su WhatsApp. Nessun anticipo con carta richiesto per le normali escursioni giornaliere. L’orario di ritiro viene inviato il giorno prima.',
      sec2Title: '2. Trasferimento dall’Hotel',
      sec2Text: 'Si prega di farsi trovare nella hall dell’hotel all’orario indicato. L’autista attende massimo 10 minuti per non ritardare la partenza della barca.',
      sec3Title: '3. Sicurezza Marittima e Meteo',
      sec3Text: 'La sicurezza è fondamentale. In caso di divieto di navigazione per forte vento emesso dalla Guardia Costiera, l’escursione viene riprogrammata o rimborsata al 100%.'
    },
    privacy: {
      title: 'Informativa sulla Privacy',
      intro: 'Rispettiamo la tua privacy. Raccogliamo solo i dettagli necessari per organizzare la tua escursione (nome, WhatsApp, hotel).',
      sec1Title: 'Sicurezza dei Dati',
      sec1Text: 'Non vendiamo né condividiamo dati personali con terzi. I dettagli servono esclusivamente per il transfer e la lista passeggeri.',
      sec2Text: 'Puoi richiedere la cancellazione dei tuoi dati scrivendo a booking@aquaway.tours.'
    },
    refund: {
      title: 'Cancellazione Gratuita fino a 24 ore prima',
      guarantee: '100% Senza Rischi: Cancella o modifica qualsiasi escursione standard fino a 24 ore prima della partenza senza penali.',
      sec1Title: 'Motivi di Salute',
      sec1Text: 'Se non ti senti bene la mattina dell’escursione, avvisaci subito su WhatsApp prima dell’arrivo del transfer e sposteremo la data senza problemi.',
      sec2Title: 'Cancellazioni per Maltempo',
      sec2Text: 'Se l’uscita viene annullata dalle autorità marittime per maltempo, riceverai il rimborso del 100% immediatamente.'
    }
  },
  cs: {
    closeBtn: 'Zavřít okno',
    terms: {
      title: 'Obchodní podmínky a pravidla rezervace',
      intro: 'Vítejte v AquaWay Tours Rudé moře. Rezervací výletu souhlasíte s následujícími podmínkami:',
      sec1Title: '1. Rezervace a potvrzení',
      sec1Text: 'Rezervace probíhají online nebo přímo přes WhatsApp. U jednodenních výletů nepožadujeme platbu předem kartou. Přesný čas vyzvednutí obdržíte den předem.',
      sec2Title: '2. Vyzvednutí z hotelu',
      sec2Text: 'Buďte prosím včas na recepci hotelu. Řidič čeká maximálně 10 minut, aby nedošlo ke zpoždění odjezdu lodi.',
      sec3Title: '3. Bezpečnost a počasí na moři',
      sec3Text: 'Bezpečnost hostů je na prvním místě. Pokud pobřežní stráž zakáže vyplutí kvůli silnému větru, výlet přesuneme na jiný termín nebo vrátíme 100 % peněz.'
    },
    privacy: {
      title: 'Zásady ochrany osobních údajů',
      intro: 'Chráníme vaše soukromí. Shromažďujeme pouze údaje nezbytné pro koordinaci výletu (jméno, WhatsApp číslo, hotel).',
      sec1Title: 'Zabezpečení údajů',
      sec1Text: 'Vaše údaje nikdy neprodáváme ani nesdílíme se třetími stranami. Slouží výhradně pro zajištění transferu a posádku lodi.',
      sec2Text: 'O vymazání údajů můžete kdykoliv požádat na booking@aquaway.tours.'
    },
    refund: {
      title: 'Bezplatné zrušení do 24 hodin předem',
      guarantee: '100% bez rizika: Bezplatné zrušení nebo změna termínu výletu až 24 hodin před odjezdem.',
      sec1Title: 'Zdravotní důvody a nemoc',
      sec1Text: 'Pokud se ráno před výletem necítíte dobře, informujte nás na WhatsApp před příjezdem vozu a rádi vám termín bezplatně přesuneme.',
      sec2Title: 'Zrušení kvůli počasí',
      sec2Text: 'Pokud je výlet zrušen z důvodu nepříznivého počasí, 100 % částky vám bude okamžitě vráceno.'
    }
  },
  ar: {
    closeBtn: 'إغلاق النافذة',
    terms: {
      title: 'شروط الخدمة وسياسة الحجز',
      intro: 'أهلاً بك في أكوا واي تورز البحر الأحمر. بحجزك لأي رحلة سياحية، فإنك توافق على الشروط والأحكام التالية:',
      sec1Title: '1. تأكيد الحجز ومواعيد الانطلاق',
      sec1Text: 'يتم الحجز عبر الموقع أو الواتساب مباشرة. لا يشترط دفع عربون مسبق بالبطاقة للرحلات اليومية العادية. يتم إرسال تأكيد الميعاد وموعد تحرك السيارة عبر الواتساب قبل الرحلة.',
      sec2Title: '2. الانتقالات والاستقبال من الفندق',
      sec2Text: 'يُرجى التواجد في بهو الفندق أو البوابة الرئيسية في الموعد المحدد. ينتظر السائق بحد أقصى 10 دقائق لتفادي تأخير موعد إبحار المراكب.',
      sec3Title: '3. السلامة البحرية والأحوال الجوية',
      sec3Text: 'سلامتكم هي أولويتنا القصوى. في الحالات النادرة التي تقرر فيها هيئة السلامة البحرية وحرس الحدود منع الإبحار لارتفاع الأمواج، يتم تأجيل الرحلة لليوم التالي أو استرداد كامل المبلغ دون أي خصم.'
    },
    privacy: {
      title: 'سياسة الخصوصية وحماية البيانات',
      intro: 'تحترم أكوا واي خصوصيتك التامة. نجمع فقط البيانات الضرورية لتنسيق رحلتك (مثل الاسم، رقم الواتساب، واسم الفندق لترتيب السيارة).',
      sec1Title: 'استخدام وتأمين البيانات',
      sec1Text: 'نحن لا نبيع أو نشارك بياناتك مع أي جهات إعلانية أو طرف ثالث. البيانات تُعطى فقط لمنسق التحركات وقبطان المركب.',
      sec2Text: 'يمكنك طلب مسح بيانات الاتصال الخاصة بك في أي وقت عبر التواصل على booking@aquaway.tours.'
    },
    refund: {
      title: 'سياسة الإلغاء المجاني واسترداد المبالغ',
      guarantee: 'ضمان 100% بدون أي مخاطر: إلغاء أو تعديل موعد أي رحلة عادية مجاناً حتى 24 ساعة قبل الانطلاق.',
      sec1Title: 'الأعذار الصحية والطارئة',
      sec1Text: 'في حال شعور أحد أفراد الأسرة بالتعب صباح يوم الرحلة، يرجى إبلاغنا فوراً عبر الواتساب قبل وصول سيارة الاستقبال وسنقوم بتأجيل الرحلة ليوم آخر خلال إقامتكم بكل سرور.',
      sec2Title: 'الإلغاء بسبب الطقس',
      sec2Text: 'إذا تم إلغاء الرحلة من قِبل السلطات البحرية لسوء الأحوال الجوية، يتم استرداد 100% من أي مبالغ مدفوعة فوراً نقداً أو بنفس وسيلة الدفع.'
    }
  }
};

export interface SectionUiI18n {
  reviewsBadge: string;
  reviewsBasedOn: string;
  reviewsTripadvisor: string;
  reviewsGoogle: string;
  reviewsAllFilter: string;
  reviewsVerified: string;
  reviewsSwipeHint: string;
  galleryBadge: string;
  galleryTitleMain: string;
  galleryTitleHighlight: string;
  gallerySubtitle: string;
  galleryFilterAll: string;
  galleryFilterIslands: string;
  galleryFilterMarine: string;
  galleryFilterDiving: string;
  galleryFilterSafari: string;
  galleryFilterYachts: string;
  gallerySwipeHint: string;
  weatherBadge: string;
  weatherTitleMain: string;
  weatherTitleHighlight: string;
  weatherSubtitle: string;
  weatherLiveDataBadge: string;
  weatherTempUnit: string;
  weatherReefsHeading: string;
  weatherReefsSubheading: string;
  weatherLevel: string;
  weatherDepthRange: string;
  weatherCurrentSpeed: string;
  weatherResidentMarine: string;
  mapBadge: string;
  mapTitleMain: string;
  mapTitleHighlight: string;
  mapSubtitle: string;
  mapLocationsTitle: string;
  mapEgyptText: string;
  mapDailyBadge: string;
  mapPierCheck: string;
  mapCalculatorTitle: string;
  mapCalculatorSubtitle: string;
  mapSelectZone: string;
  mapTypicalPickup: string;
  mapDriveTime: string;
  mapFreeTransfersIncluded: string;
  whyDifferenceBadge: string;
  whyTitleMain: string;
  whyTitleHighlight: string;
  whySubtitle: string;
  whyGuarantee: string;
  whyTagSmallGroups: string;
  whyTagCertifiedGuides: string;
  whyTagFreeTransfers: string;
  whyTagZeroRisk: string;
  whyTagFastReplies: string;
  whyTagBestValue: string;
  whySupportTitle: string;
  whySupportDesc: string;
  whyPricesTitle: string;
  whyPricesDesc: string;
  aboutBadge: string;
  aboutLicenseBadge: string;
  aboutRegistered: string;
  aboutYears: string;
  aboutExcellence: string;
  aboutStory2: string;
  aboutEcoTitle: string;
  aboutEcoDesc: string;
  aboutSafetyTitle: string;
  aboutSafetyDesc: string;
  contactBadge: string;
  contactFastReply: string;
  contactWhatsAppDirect: string;
  contactCallAnytime: string;
  contactDailyHours: string;
  contactSendEmail: string;
  contactEmailSub: string;
  contactOurOffice: string;
  contactOfficeAddress: string;
  contactOfficeSub: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  contactMsgSent: string;
  contactMsgDesc: string;
  contactSendAnother: string;
  footerTagline: string;
  footerWhatsAppBtn: string;
  footerAboutTitle: string;
  footerAboutDesc: string;
  footerLicenseText: string;
  footerTopTrips: string;
  footerPickupAreas: string;
  footerContactUs: string;
  footerAddress: string;
  footerCashPayment: string;
  footerRefundPolicy: string;
  footerAllRights: string;
  offlineBannerTitle: string;
  offlineBannerDesc: string;
  offlineSavedLocally: string;
}

export const SECTION_TRANSLATIONS: Record<LanguageCode, SectionUiI18n> = {
  en: {
    reviewsBadge: 'What Our Guests Say',
    reviewsBasedOn: 'Based on over 1,500 real reviews from guests who traveled with us',
    reviewsTripadvisor: 'TripAdvisor Certificate of Excellence',
    reviewsGoogle: 'Google 4.9★ Rated',
    reviewsAllFilter: 'All Reviews',
    reviewsVerified: 'Verified Guest',
    reviewsSwipeHint: 'Swipe left/right or use arrows to read more',
    galleryBadge: 'Guest Photos & Memories',
    galleryTitleMain: 'Moments from the',
    galleryTitleHighlight: 'Red Sea & Desert',
    gallerySubtitle: 'Real photos taken by our guests enjoying turquoise island waters, swimming with wild dolphins, and exploring the desert.',
    galleryFilterAll: 'All Photos',
    galleryFilterIslands: 'Orange Bay & Islands',
    galleryFilterMarine: 'Marine & Dolphins',
    galleryFilterDiving: 'Scuba Diving',
    galleryFilterSafari: 'Desert Safaris',
    galleryFilterYachts: 'Private Yachts',
    gallerySwipeHint: 'Swipe left/right or use arrow buttons',
    weatherBadge: 'Live Red Sea Weather',
    weatherTitleMain: 'Today’s Sea Conditions &',
    weatherTitleHighlight: 'Top Reefs',
    weatherSubtitle: 'Live weather and water conditions in Hurghada: see today’s water temperature, calm waves, and crystal-clear underwater visibility.',
    weatherLiveDataBadge: 'Live Hurghada Coast & Island Weather',
    weatherTempUnit: 'Temperature Unit:',
    weatherReefsHeading: 'Featured Red Sea Coral Reefs & Marine Sanctuaries',
    weatherReefsSubheading: 'Click any reef site below to explore depths, currents, and resident marine life visited on AquaWay excursions.',
    weatherLevel: 'Level',
    weatherDepthRange: 'Depth Range',
    weatherCurrentSpeed: 'Current Speed',
    weatherResidentMarine: 'Resident Marine Life:',
    mapBadge: 'Hurghada & Red Sea Map',
    mapTitleMain: 'Where We Go &',
    mapTitleHighlight: 'Free Hotel Pickup Zones',
    mapSubtitle: 'We provide free, clean air-conditioned transfers picking you up directly from any hotel across Hurghada and the Red Sea coast.',
    mapLocationsTitle: 'Hurghada Trip & Departure Locations',
    mapEgyptText: 'Red Sea, Egypt',
    mapDailyBadge: 'Trips Every Day',
    mapPierCheck: 'All boats depart from safe, licensed private piers',
    mapCalculatorTitle: 'Check Pickup Time for Your Hotel',
    mapCalculatorSubtitle: 'Choose your hotel area below to see your typical morning pickup time.',
    mapSelectZone: 'Select Your Hotel Resort Area:',
    mapTypicalPickup: 'Morning Pickup Time:',
    mapDriveTime: 'Transfer Ride to Marina:',
    mapFreeTransfersIncluded: 'Free Return Transfer Included',
    whyDifferenceBadge: 'The AquaWay Difference',
    whyTitleMain: 'Why Travelers Love',
    whyTitleHighlight: 'Booking with AquaWay',
    whySubtitle: 'No packed boats, no rushed stops. We keep our groups small so you have plenty of room to stretch out, enjoy the sea, and make the most of your holiday.',
    whyGuarantee: 'AquaWay Verified Guarantee',
    whyTagSmallGroups: 'Small Groups',
    whyTagCertifiedGuides: 'Certified Guides',
    whyTagFreeTransfers: 'Free Hotel Transfers',
    whyTagZeroRisk: 'Zero Risk Booking',
    whyTagFastReplies: 'Fast Replies',
    whyTagBestValue: 'Best Local Value',
    whySupportTitle: 'Quick WhatsApp Support',
    whySupportDesc: 'Fast, friendly answers in English, German, Russian, Polish, French, Italian, Czech, and Arabic whenever you message us.',
    whyPricesTitle: 'Direct Local Prices',
    whyPricesDesc: 'Book directly with us — no pushy hotel reps, no middlemen fees, and no surprise extra charges.',
    aboutBadge: 'About AquaWay Red Sea',
    aboutLicenseBadge: 'Official Operator License #4928',
    aboutRegistered: 'Registered with the Egyptian Ministry of Tourism & Antiquities (CDWS Certified)',
    aboutYears: '10+ Years',
    aboutExcellence: 'Red Sea Excellence',
    aboutStory2: 'Based right here at Hurghada New Marina, we run our own boats, speedboats, and desert safari teams. When you book directly with us, you skip hotel commissions, get honest prices, and enjoy genuine local Egyptian hospitality from start to finish.',
    aboutEcoTitle: 'Protecting Our Coral Reefs',
    aboutEcoDesc: 'We follow HEPCA marine guidelines to protect our reefs, avoid single-use plastics on our boats, and anchor safely.',
    aboutSafetyTitle: 'Safety First & Certified Guides',
    aboutSafetyDesc: 'Fully insured trips, daily safety checks on all boats and gear, and certified friendly divemasters.',
    contactBadge: "We're Here to Help",
    contactFastReply: 'Fastest Reply on WhatsApp',
    contactWhatsAppDirect: 'Chat with Us on WhatsApp',
    contactCallAnytime: 'Call Us Anytime',
    contactDailyHours: 'Daily from 6:00 AM to 11:00 PM',
    contactSendEmail: 'Send Us an Email',
    contactEmailSub: 'For custom trip quotes and group bookings',
    contactOurOffice: 'Our Hurghada Office',
    contactOfficeAddress: 'Hurghada New Marina Boulevard',
    contactOfficeSub: 'Pier 4, Red Sea, Egypt',
    contactFormTitle: 'Send Us a Message',
    contactFormSubtitle: 'Feel free to ask any question or tell us what you have in mind for your holiday.',
    contactMsgSent: 'Message Sent!',
    contactMsgDesc: 'Thank you! We received your message and our team will get back to you within an hour.',
    contactSendAnother: 'Send another message',
    footerTagline: 'Hurghada Boat Trips, Diving & Desert Safaris',
    footerWhatsAppBtn: 'Chat on WhatsApp',
    footerAboutTitle: 'AquaWay Red Sea',
    footerAboutDesc: 'Family-friendly boat trips, private yachts, certified scuba diving, and desert adventures in Hurghada. Officially licensed by the Ministry of Tourism.',
    footerLicenseText: 'Official CDWS Operator License #4928',
    footerTopTrips: 'Top Trips',
    footerPickupAreas: 'Free Hotel Pickup Areas',
    footerContactUs: 'Contact Us',
    footerAddress: 'Hurghada Marina, Red Sea, Egypt',
    footerCashPayment: 'Cash (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Cancellation & Refund Policy',
    footerAllRights: 'All rights reserved.',
    offlineBannerTitle: 'Offline Mode (PWA Cached):',
    offlineBannerDesc: 'All excursion guides, prices, and itineraries are cached and viewable offline.',
    offlineSavedLocally: 'Saved Locally'
  },
  de: {
    reviewsBadge: 'Erfahrungen unserer Gäste',
    reviewsBasedOn: 'Basierend auf über 1.500 echten Bewertungen von Reisenden',
    reviewsTripadvisor: 'TripAdvisor Zertifikat für Exzellenz',
    reviewsGoogle: 'Google 4.9★ Bewertung',
    reviewsAllFilter: 'Alle Bewertungen',
    reviewsVerified: 'Verifizierter Gast',
    reviewsSwipeHint: 'Wischen oder Pfeile nutzen zum Durchblättern',
    galleryBadge: 'Fotos & Erinnerungen',
    galleryTitleMain: 'Eindrücke vom',
    galleryTitleHighlight: 'Roten Meer & Wüste',
    gallerySubtitle: 'Echte Schnappschüsse unserer Gäste: Türkises Wasser, Schnorcheln mit wilden Delfinen und Wüstenabenteuer.',
    galleryFilterAll: 'Alle Fotos',
    galleryFilterIslands: 'Orange Bay & Inseln',
    galleryFilterMarine: 'Meereswelt & Delfine',
    galleryFilterDiving: 'Tauchen & Schnorcheln',
    galleryFilterSafari: 'Wüstensafari',
    galleryFilterYachts: 'Private Yachten',
    gallerySwipeHint: 'Wischen oder Pfeile verwenden',
    weatherBadge: 'Live-Wetter & Meer',
    weatherTitleMain: 'Heutige Seebedingungen &',
    weatherTitleHighlight: 'Riffe',
    weatherSubtitle: 'Live-Wassertemperaturen, Wellengang und Sichtweiten für Ihren Ausflug in Hurghada.',
    weatherLiveDataBadge: 'Live-Wetter Küste Hurghada & Inseln',
    weatherTempUnit: 'Temperatureinheit:',
    weatherReefsHeading: 'Bekannte Korallenriffe & Meeresschutzgebiete',
    weatherReefsSubheading: 'Klicken Sie auf ein Riff, um Tiefen, Strömungen und Meeresbewohner zu sehen.',
    weatherLevel: 'Niveau',
    weatherDepthRange: 'Tiefenbereich',
    weatherCurrentSpeed: 'Strömung',
    weatherResidentMarine: 'Meereslebewesen:',
    mapBadge: 'Karte Hurghada & Rotes Meer',
    mapTitleMain: 'Ausflugsziele &',
    mapTitleHighlight: 'Kostenlose Hotelabholung',
    mapSubtitle: 'Kostenlose Transfers im sauberen, klimatisierten Kleinbus direkt von Ihrem Hotel in Hurghada.',
    mapLocationsTitle: 'Startpunkte & Ausflugsziele',
    mapEgyptText: 'Rotes Meer, Ägypten',
    mapDailyBadge: 'Tägliche Ausflüge',
    mapPierCheck: 'Alle Boote starten an sicheren, lizenzierten Marinas',
    mapCalculatorTitle: 'Abholzeiten für Ihr Hotel',
    mapCalculatorSubtitle: 'Wählen Sie Ihre Hotelregion für die typische Abholzeit am Morgen.',
    mapSelectZone: 'Hotelregion wählen:',
    mapTypicalPickup: 'Morgendliche Abholzeit:',
    mapDriveTime: 'Fahrtzeit zur Marina:',
    mapFreeTransfersIncluded: 'Kostenloser Rücktransfer inklusive',
    whyDifferenceBadge: 'Der AquaWay Unterschied',
    whyTitleMain: 'Warum Reisende',
    whyTitleHighlight: 'AquaWay wählen',
    whySubtitle: 'Keine überfüllten Boote, kein Stress. Kleine Gruppen für maximalen Komfort und unvergessliche Erlebnisse.',
    whyGuarantee: 'AquaWay Geprüfte Qualitätsgarantie',
    whyTagSmallGroups: 'Kleine Gruppen',
    whyTagCertifiedGuides: 'Zertifizierte Guides',
    whyTagFreeTransfers: 'Kostenloser Transfer',
    whyTagZeroRisk: 'Ohne Risiko buchen',
    whyTagFastReplies: 'Schnelle Antwort',
    whyTagBestValue: 'Bester Vor-Ort-Preis',
    whySupportTitle: 'Schneller WhatsApp-Support',
    whySupportDesc: 'Schnelle, freundliche Antworten auf Deutsch, Englisch, Russisch, Polnisch, Französisch, Italienisch, Tschechisch und Arabisch.',
    whyPricesTitle: 'Direkte Betreiberpreise',
    whyPricesDesc: 'Buchen Sie direkt beim Veranstalter – keine teuren Hotel-Agenturen oder versteckten Kosten.',
    aboutBadge: 'Über AquaWay Rotes Meer',
    aboutLicenseBadge: 'Offizielle Betreiberlizenz #4928',
    aboutRegistered: 'Registriert beim ägyptischen Tourismusministerium (CDWS zertifiziert)',
    aboutYears: '10+ Jahre',
    aboutExcellence: 'Erfahrung am Roten Meer',
    aboutStory2: 'Direkt in der New Marina Hurghada ansässig, betreiben wir eigene Yachten, Speedboote und Quads. Sie sparen Agenturgebühren und genießen echte Gastfreundschaft.',
    aboutEcoTitle: 'Schutz unserer Korallenriffe',
    aboutEcoDesc: 'Wir halten uns an HEPCA-Richtlinien, verzichten auf Einwegplastik und ankern umweltschonend.',
    aboutSafetyTitle: 'Sicherheit & zertifizierte Guides',
    aboutSafetyDesc: 'Vollversicherte Touren, tägliche Sicherheitsprüfungen und erfahrene Tauchlehrer.',
    contactBadge: 'Wir sind für Sie da',
    contactFastReply: 'Schnellste Antwort über WhatsApp',
    contactWhatsAppDirect: 'Mit uns auf WhatsApp chatten',
    contactCallAnytime: 'Jederzeit anrufen',
    contactDailyHours: 'Täglich von 6:00 bis 23:00 Uhr',
    contactSendEmail: 'E-Mail senden',
    contactEmailSub: 'Für private Gruppen und exklusive Yacht-Charter',
    contactOurOffice: 'Unser Büro in Hurghada',
    contactOfficeAddress: 'New Marina Boulevard, Hurghada',
    contactOfficeSub: 'Steg 4, Rotes Meer, Ägypten',
    contactFormTitle: 'Schreiben Sie uns eine Nachricht',
    contactFormSubtitle: 'Fragen Sie uns gerne alles rund um Ihren Urlaub in Hurghada.',
    contactMsgSent: 'Nachricht erfolgreich gesendet!',
    contactMsgDesc: 'Vielen Dank! Unser Team meldet sich innerhalb einer Stunde bei Ihnen.',
    contactSendAnother: 'Weitere Nachricht senden',
    footerTagline: 'Bootsausflüge, Tauchen & Wüstensafaris in Hurghada',
    footerWhatsAppBtn: 'Auf WhatsApp schreiben',
    footerAboutTitle: 'AquaWay Rotes Meer',
    footerAboutDesc: 'Familienfreundliche Bootstouren, Privatyachten, PADI-Tauchen und Wüstenabenteuer. Offiziell lizenziert.',
    footerLicenseText: 'Offizielle CDWS Lizenz #4928',
    footerTopTrips: 'Beliebte Ausflüge',
    footerPickupAreas: 'Kostenlose Hotelabholung',
    footerContactUs: 'Kontakt & Buchung',
    footerAddress: 'New Marina, Hurghada, Ägypten',
    footerCashPayment: 'Barzahlung (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Stornierungs- & Erstattungsrichtlinien',
    footerAllRights: 'Alle Rechte vorbehalten.',
    offlineBannerTitle: 'Offline-Modus (PWA gespeichert):',
    offlineBannerDesc: 'Alle Ausflüge, Preise und Zeitpläne sind offline verfügbar.',
    offlineSavedLocally: 'Lokal gespeichert'
  },
  ru: {
    reviewsBadge: 'Отзывы наших гостей',
    reviewsBasedOn: 'Более 1500 реальных отзывов от путешественников со всего мира',
    reviewsTripadvisor: 'Сертификат качества TripAdvisor',
    reviewsGoogle: 'Рейтинг 4.9★ в Google',
    reviewsAllFilter: 'Все отзывы',
    reviewsVerified: 'Проверенный гость',
    reviewsSwipeHint: 'Листайте влево/вправо для чтения отзывов',
    galleryBadge: 'Фотографии и моменты',
    galleryTitleMain: 'Впечатления от',
    galleryTitleHighlight: 'Красного моря и пустыни',
    gallerySubtitle: 'Живые фотографии наших гостей: лазурные острова, плавание с дельфинами и сафари.',
    galleryFilterAll: 'Все фото',
    galleryFilterIslands: 'Оранж Бэй и острова',
    galleryFilterMarine: 'Морская жизнь и дельфины',
    galleryFilterDiving: 'Дайвинг и снорклинг',
    galleryFilterSafari: 'Сафари в пустыне',
    galleryFilterYachts: 'Приватные яхты',
    gallerySwipeHint: 'Свайпайте влево/вправо или нажимайте стрелки',
    weatherBadge: 'Погода на море онлайн',
    weatherTitleMain: 'Условия на море сегодня и',
    weatherTitleHighlight: 'Рифы',
    weatherSubtitle: 'Температура воды, высота волн и видимость для снорклинга и дайвинга сегодня.',
    weatherLiveDataBadge: 'Прямые данные: побережье Хургады и острова',
    weatherTempUnit: 'Единица температуры:',
    weatherReefsHeading: 'Популярные коралловые рифы и заповедники',
    weatherReefsSubheading: 'Нажмите на любой риф, чтобы узнать глубину, течения и обитателей.',
    weatherLevel: 'Уровень',
    weatherDepthRange: 'Диапазон глубин',
    weatherCurrentSpeed: 'Течение',
    weatherResidentMarine: 'Морские обитатели:',
    mapBadge: 'Карта Хургады и Красного моря',
    mapTitleMain: 'Маршруты и зоны',
    mapTitleHighlight: 'Бесплатного трансфера',
    mapSubtitle: 'Бесплатный трансфер на комфортных микроавтобусах с кондиционером из любого отеля.',
    mapLocationsTitle: 'Места отправления и локации',
    mapEgyptText: 'Красное море, Египет',
    mapDailyBadge: 'Ежедневные туры',
    mapPierCheck: 'Все суда отправляются с официальных охраняемых пирсов',
    mapCalculatorTitle: 'Узнайте время трансфера из вашего отеля',
    mapCalculatorSubtitle: 'Выберите район отеля, чтобы увидеть утреннее время подачи машины.',
    mapSelectZone: 'Выберите район вашего отеля:',
    mapTypicalPickup: 'Утренний сбор:',
    mapDriveTime: 'Время в пути до марины:',
    mapFreeTransfersIncluded: 'Бесплатный обратный трансфер включен',
    whyDifferenceBadge: 'Преимущества AquaWay',
    whyTitleMain: 'Почему выбирают',
    whyTitleHighlight: 'AquaWay Tours',
    whySubtitle: 'Без переполненных яхт и спешки. Мы набираем небольшие группы для вашего максимального комфорта.',
    whyGuarantee: 'Гарантия качества AquaWay',
    whyTagSmallGroups: 'Небольшие группы',
    whyTagCertifiedGuides: 'Сертифицированные гиды',
    whyTagFreeTransfers: 'Бесплатный трансфер',
    whyTagZeroRisk: 'Без риска и предоплат',
    whyTagFastReplies: 'Быстрый ответ',
    whyTagBestValue: 'Честная цена',
    whySupportTitle: 'Поддержка в WhatsApp 24/7',
    whySupportDesc: 'Быстрые ответы на русском, английском, немецком, польском, французском, итальянском, чешском и арабском.',
    whyPricesTitle: 'Прямые цены организатора',
    whyPricesDesc: 'Бронируйте напрямую без переплат отельным гидам и посредникам.',
    aboutBadge: 'Об AquaWay Хургада',
    aboutLicenseBadge: 'Официальная лицензия оператора #4928',
    aboutRegistered: 'Лицензировано Министерством туризма Египта (CDWS)',
    aboutYears: '10+ лет',
    aboutExcellence: 'Опыта на Красном море',
    aboutStory2: 'Мы базируемся в Новой Марине Хургады, управляем собственными яхтами, скоростными катерами и сафари-базой. Прямой контакт гарантирует лучшие цены и отличный сервис.',
    aboutEcoTitle: 'Защита коралловых рифов',
    aboutEcoDesc: 'Соблюдаем правила ассоциации HEPCA, отказываемся от пластика и бережно бросаем якоря.',
    aboutSafetyTitle: 'Безопасность и квалификация',
    aboutSafetyDesc: 'Полная страховка гостей, ежедневная проверка оборудования и инструкторы PADI.',
    contactBadge: 'Мы всегда на связи',
    contactFastReply: 'Быстрый ответ в WhatsApp',
    contactWhatsAppDirect: 'Написать нам в WhatsApp',
    contactCallAnytime: 'Позвонить нам',
    contactDailyHours: 'Ежедневно с 6:00 до 23:00',
    contactSendEmail: 'Написать на E-mail',
    contactEmailSub: 'Для запроса индивидуальных туров и яхт',
    contactOurOffice: 'Наш офис в Хургаде',
    contactOfficeAddress: 'Набережная Нью Марина, Хургада',
    contactOfficeSub: 'Пирс 4, Красное море, Египет',
    contactFormTitle: 'Отправить нам сообщение',
    contactFormSubtitle: 'Задайте любой вопрос или расскажите о пожеланиях к отдыху.',
    contactMsgSent: 'Сообщение отправлено!',
    contactMsgDesc: 'Спасибо! Мы свяжемся с вами в течение одного часа.',
    contactSendAnother: 'Отправить еще сообщение',
    footerTagline: 'Морские прогулки, дайвинг и сафари в Хургаде',
    footerWhatsAppBtn: 'Написать в WhatsApp',
    footerAboutTitle: 'AquaWay Красное море',
    footerAboutDesc: 'Морские экскурсии, аренда яхт, дайвинг и квадроциклы в Хургаде. Официальная лицензия.',
    footerLicenseText: 'Официальная лицензия CDWS #4928',
    footerTopTrips: 'Популярные экскурсии',
    footerPickupAreas: 'Зоны бесплатного трансфера',
    footerContactUs: 'Контакты и бронирование',
    footerAddress: 'Нью Марина, Хургада, Египет',
    footerCashPayment: 'Оплата наличными (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Правила отмены и возврата',
    footerAllRights: 'Все права защищены.',
    offlineBannerTitle: 'Офлайн режим (PWA сохранено):',
    offlineBannerDesc: 'Все программы, цены и расписания сохранены и доступны офлайн.',
    offlineSavedLocally: 'Сохранено локально'
  },
  pl: {
    reviewsBadge: 'Opinie naszych gości',
    reviewsBasedOn: 'Ponad 1500 prawdziwych recenzji zadowolonych podróżników',
    reviewsTripadvisor: 'Certyfikat Jakości TripAdvisor',
    reviewsGoogle: 'Ocena 4.9★ w Google',
    reviewsAllFilter: 'Wszystkie opinie',
    reviewsVerified: 'Zweryfikowany gość',
    reviewsSwipeHint: 'Przesuń w lewo/prawo lub użyj strzałek',
    galleryBadge: 'Zdjęcia i wspomnienia',
    galleryTitleMain: 'Chwile z',
    galleryTitleHighlight: 'Morza Czerwonego i Pustyni',
    gallerySubtitle: 'Autentyczne zdjęcia naszych gości: lazurowe wody Orange Bay, pływanie z delfinami i safari.',
    galleryFilterAll: 'Wszystkie zdjęcia',
    galleryFilterIslands: 'Orange Bay i wyspy',
    galleryFilterMarine: 'Świat podwodny i delfiny',
    galleryFilterDiving: 'Nurkowanie i snorkeling',
    galleryFilterSafari: 'Safari na pustyni',
    galleryFilterYachts: 'Prywatne jachty',
    gallerySwipeHint: 'Przesuń palcem lub użyj przycisków',
    weatherBadge: 'Pogoda morska na żywo',
    weatherTitleMain: 'Warunki morskie dzisiaj i',
    weatherTitleHighlight: 'Rafy koralowe',
    weatherSubtitle: 'Aktualna temperatura wody, stan morza i widoczność pod wodą w Hurghadzie.',
    weatherLiveDataBadge: 'Pogoda na żywo: wybrzeże i wyspy',
    weatherTempUnit: 'Jednostka temperatury:',
    weatherReefsHeading: 'Słynne rafy koralowe i rezerwaty morskie',
    weatherReefsSubheading: 'Kliknij na rafę, aby sprawdzić głębokość, prądy i życie podwodne.',
    weatherLevel: 'Poziom',
    weatherDepthRange: 'Głębokość',
    weatherCurrentSpeed: 'Prąd morski',
    weatherResidentMarine: 'Życie morskie:',
    mapBadge: 'Mapa Hurghady i Morza Czerwonego',
    mapTitleMain: 'Trasy i strefy',
    mapTitleHighlight: 'Darmowego odbioru z hoteli',
    mapSubtitle: 'Bezpłatny transfer klimatyzowanym busem bezpośrednio z recepcji Twojego hotelu.',
    mapLocationsTitle: 'Miejsca zbiórek i wypłynięć',
    mapEgyptText: 'Morze Czerwone, Egipt',
    mapDailyBadge: 'Wycieczki codziennie',
    mapPierCheck: 'Wszystkie statki wypływają z bezpiecznych, licencjonowanych marin',
    mapCalculatorTitle: 'Sprawdź godzinę odbioru z Twojego hotelu',
    mapCalculatorSubtitle: 'Wybierz rejon hotelu, aby sprawdzić planowany czas porannego transferu.',
    mapSelectZone: 'Wybierz rejon hotelu:',
    mapTypicalPickup: 'Poranny odbiór:',
    mapDriveTime: 'Czas dojazdu do mariny:',
    mapFreeTransfersIncluded: 'Darmowy transport powrotny w cenie',
    whyDifferenceBadge: 'Dlaczego AquaWay',
    whyTitleMain: 'Dlaczego turyści wybierają',
    whyTitleHighlight: 'Rezerwację w AquaWay',
    whySubtitle: 'Brak przepełnionych łodzi i pośpiechu. Małe grupy gwarantują komfort i udane wakacje.',
    whyGuarantee: 'Gwarancja Jakości AquaWay',
    whyTagSmallGroups: 'Małe grupy',
    whyTagCertifiedGuides: 'Certyfikowani przewodnicy',
    whyTagFreeTransfers: 'Darmowy transfer',
    whyTagZeroRisk: 'Rezerwacja bez ryzyka',
    whyTagFastReplies: 'Szybka odpowiedź',
    whyTagBestValue: 'Najlepsza cena lokalna',
    whySupportTitle: 'Wsparcie na WhatsApp 24/7',
    whySupportDesc: 'Szybkie odpowiedzi w języku polskim, angielskim, niemieckim, rosyjskim, francuskim, włoskim, czeskim i arabskim.',
    whyPricesTitle: 'Bezpośrednie ceny organizatora',
    whyPricesDesc: 'Rezerwujesz bezpośrednio u armatora – bez prowizji rezydentów i pośredników.',
    aboutBadge: 'O AquaWay Hurghada',
    aboutLicenseBadge: 'Oficjalna licencja organizatora #4928',
    aboutRegistered: 'Zarejestrowany w Egipskim Ministerstwie Turystyki (Certyfikat CDWS)',
    aboutYears: '10+ Lat',
    aboutExcellence: 'Doświadczenia na Morzu Czerwonym',
    aboutStory2: 'Z bazą w Nowej Marinie w Hurghadzie prowadzimy własne jachty, motorówki i bazę safari. Prawdziwa egipska gościnność i uczciwe ceny.',
    aboutEcoTitle: 'Ochrona raf koralowych',
    aboutEcoDesc: 'Przestrzegamy zasad HEPCA, unikamy plastiku i dbamy o bezpieczeństwo raf.',
    aboutSafetyTitle: 'Bezpieczeństwo i certyfikaty',
    aboutSafetyDesc: 'Pełne ubezpieczenie morskie, codzienna kontrola sprzętu i instruktorzy PADI.',
    contactBadge: 'Jesteśmy do Twojej dyspozycji',
    contactFastReply: 'Najszybszy kontakt na WhatsApp',
    contactWhatsAppDirect: 'Napisz na WhatsApp',
    contactCallAnytime: 'Zadzwoń do nas',
    contactDailyHours: 'Codziennie od 6:00 do 23:00',
    contactSendEmail: 'Napisz e-mail',
    contactEmailSub: 'Dla wycieczek prywatnych i grup',
    contactOurOffice: 'Nasze biuro w Hurghadzie',
    contactOfficeAddress: 'New Marina Boulevard, Hurghada',
    contactOfficeSub: 'Molo 4, Morze Czerwone, Egipt',
    contactFormTitle: 'Wyślij wiadomość',
    contactFormSubtitle: 'Chętnie odpowiemy na każde pytanie dotyczące wycieczek.',
    contactMsgSent: 'Wiadomość wysłana!',
    contactMsgDesc: 'Dziękujemy! Nasz zespół odpowie w ciągu godziny.',
    contactSendAnother: 'Wyślij kolejną wiadomość',
    footerTagline: 'Rejsy statkiem, nurkowanie i safari w Hurghadzie',
    footerWhatsAppBtn: 'Napisz na WhatsApp',
    footerAboutTitle: 'AquaWay Morze Czerwone',
    footerAboutDesc: 'Wycieczki dla rodzin, prywatne jachty, nurkowanie i safari na pustyni. Oficjalna licencja.',
    footerLicenseText: 'Oficjalna licencja CDWS #4928',
    footerTopTrips: 'Polecane wycieczki',
    footerPickupAreas: 'Darmowy odbiór z hoteli',
    footerContactUs: 'Kontakt i rezerwacja',
    footerAddress: 'Nowa Marina, Hurghada, Egipt',
    footerCashPayment: 'Płatność gotówką (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Zasady anulacji i zwrotów',
    footerAllRights: 'Wszelkie prawa zastrzeżone.',
    offlineBannerTitle: 'Tryb offline (PWA zapisane):',
    offlineBannerDesc: 'Wszystkie wycieczki i rozkłady są zapisane i dostępne bez internetu.',
    offlineSavedLocally: 'Zapisano lokalnie'
  },
  fr: {
    reviewsBadge: 'Avis de nos voyageurs',
    reviewsBasedOn: 'Plus de 1 500 avis vérifiés de voyageurs du monde entier',
    reviewsTripadvisor: 'Certificat d’Excellence TripAdvisor',
    reviewsGoogle: 'Noté 4.9★ sur Google',
    reviewsAllFilter: 'Tous les avis',
    reviewsVerified: 'Voyageur vérifié',
    reviewsSwipeHint: 'Glissez à gauche/droite pour lire la suite',
    galleryBadge: 'Photos et souvenirs',
    galleryTitleMain: 'Moments en',
    galleryTitleHighlight: 'Mer Rouge & Désert',
    gallerySubtitle: 'Photos authentiques de nos clients : eaux turquoise d’Orange Bay, dauphins en liberté et safari.',
    galleryFilterAll: 'Toutes les photos',
    galleryFilterIslands: 'Orange Bay & Îles',
    galleryFilterMarine: 'Faune marine & Dauphins',
    galleryFilterDiving: 'Plongée & Snorkeling',
    galleryFilterSafari: 'Safari Désert',
    galleryFilterYachts: 'Yachts Privés',
    gallerySwipeHint: 'Glissez ou utilisez les flèches',
    weatherBadge: 'Météo marine en direct',
    weatherTitleMain: 'Conditions en mer aujourd’hui &',
    weatherTitleHighlight: 'Récifs',
    weatherSubtitle: 'Température de l’eau, état de la mer et visibilité sous-marine en direct à Hurghada.',
    weatherLiveDataBadge: 'Données en direct : Côte & Îles d’Hurghada',
    weatherTempUnit: 'Unité de température :',
    weatherReefsHeading: 'Récifs de corail et réserves marines',
    weatherReefsSubheading: 'Cliquez sur un récif pour découvrir profondeurs, courants et espèces marines.',
    weatherLevel: 'Niveau',
    weatherDepthRange: 'Profondeur',
    weatherCurrentSpeed: 'Courant',
    weatherResidentMarine: 'Faune marine :',
    mapBadge: 'Carte d’Hurghada & Mer Rouge',
    mapTitleMain: 'Itinéraires et zones de',
    mapTitleHighlight: 'Prise en charge gratuite',
    mapSubtitle: 'Transferts gratuits et climatisés directement depuis la réception de votre hôtel.',
    mapLocationsTitle: 'Lieux de départ et sites',
    mapEgyptText: 'Mer Rouge, Égypte',
    mapDailyBadge: 'Départs quotidiens',
    mapPierCheck: 'Tous nos bateaux partent de marinas privées et sécurisées',
    mapCalculatorTitle: 'Vérifiez l’heure de passage à votre hôtel',
    mapCalculatorSubtitle: 'Sélectionnez votre zone pour connaître l’horaire estimé le matin.',
    mapSelectZone: 'Choisissez votre zone hôtelière :',
    mapTypicalPickup: 'Heure de ramassage :',
    mapDriveTime: 'Trajet jusqu’à la marina :',
    mapFreeTransfersIncluded: 'Transfert retour gratuit inclus',
    whyDifferenceBadge: 'La différence AquaWay',
    whyTitleMain: 'Pourquoi choisir',
    whyTitleHighlight: 'AquaWay Tours',
    whySubtitle: 'Pas de bateaux surchargés ni de visites au pas de course. Petits groupes pour un confort absolu.',
    whyGuarantee: 'Garantie de Qualité AquaWay',
    whyTagSmallGroups: 'Petits groupes',
    whyTagCertifiedGuides: 'Guides certifiés',
    whyTagFreeTransfers: 'Transfert gratuit',
    whyTagZeroRisk: 'Réservation sans risque',
    whyTagFastReplies: 'Réponse rapide',
    whyTagBestValue: 'Meilleur tarif direct',
    whySupportTitle: 'Assistance WhatsApp 24/7',
    whySupportDesc: 'Réponses rapides en français, anglais, allemand, russe, polonais, italien, tchèque et arabe.',
    whyPricesTitle: 'Tarifs directs sans intermédiaire',
    whyPricesDesc: 'Réservez en direct sans commissions d’agences d’hôtels ni frais cachés.',
    aboutBadge: 'À propos d’AquaWay',
    aboutLicenseBadge: 'Licence officielle d’opérateur #4928',
    aboutRegistered: 'Agréé par le Ministère Égyptien du Tourisme (Certifié CDWS)',
    aboutYears: '10+ Années',
    aboutExcellence: 'D’expertise en Mer Rouge',
    aboutStory2: 'Basés à la New Marina d’Hurghada, nous gérons notre propre flotte de bateaux, speedboats et quads. Hospitalité égyptienne authentique et prix justes.',
    aboutEcoTitle: 'Protection des récifs coralliens',
    aboutEcoDesc: 'Respect des directives HEPCA, zéro plastique à usage unique et ancrage sécurisé.',
    aboutSafetyTitle: 'Sécurité et encadrement',
    aboutSafetyDesc: 'Assurance complète, contrôle quotidien du matériel et instructeurs PADI.',
    contactBadge: 'À votre écoute',
    contactFastReply: 'Réponse immédiate sur WhatsApp',
    contactWhatsAppDirect: 'Discuter sur WhatsApp',
    contactCallAnytime: 'Nous appeler',
    contactDailyHours: 'Tous les jours de 6h00 à 23h00',
    contactSendEmail: 'Envoyer un e-mail',
    contactEmailSub: 'Pour les sorties privées et groupes',
    contactOurOffice: 'Notre bureau à Hurghada',
    contactOfficeAddress: 'Boulevard de la New Marina, Hurghada',
    contactOfficeSub: 'Ponton 4, Mer Rouge, Égypte',
    contactFormTitle: 'Envoyez-nous un message',
    contactFormSubtitle: 'Posez-nous vos questions pour préparer vos sorties en toute tranquillité.',
    contactMsgSent: 'Message envoyé !',
    contactMsgDesc: 'Merci ! Notre équipe vous répondra dans l’heure.',
    contactSendAnother: 'Envoyer un autre message',
    footerTagline: 'Excursions en mer, plongée et safaris à Hurghada',
    footerWhatsAppBtn: 'Écrire sur WhatsApp',
    footerAboutTitle: 'AquaWay Mer Rouge',
    footerAboutDesc: 'Sorties en mer en famille, yachts privés, plongée PADI et aventures dans le désert.',
    footerLicenseText: 'Licence officielle CDWS #4928',
    footerTopTrips: 'Excursions populaires',
    footerPickupAreas: 'Prise en charge gratuite',
    footerContactUs: 'Contact & Réservations',
    footerAddress: 'New Marina, Hurghada, Égypte',
    footerCashPayment: 'Paiement en espèces (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Politique d’annulation et remboursement',
    footerAllRights: 'Tous droits réservés.',
    offlineBannerTitle: 'Mode hors-ligne (PWA sauvegardée) :',
    offlineBannerDesc: 'Toutes les excursions et tarifs sont consultables hors connexion.',
    offlineSavedLocally: 'Enregistré localement'
  },
  it: {
    reviewsBadge: 'Recensioni dei nostri ospiti',
    reviewsBasedOn: 'Oltre 1.500 recensioni verificate da viaggiatori di tutto il mondo',
    reviewsTripadvisor: 'Certificato di Eccellenza TripAdvisor',
    reviewsGoogle: 'Valutazione 4.9★ su Google',
    reviewsAllFilter: 'Tutte le recensioni',
    reviewsVerified: 'Ospite verificato',
    reviewsSwipeHint: 'Scorri a sinistra/destra per leggere altro',
    galleryBadge: 'Foto e ricordi',
    galleryTitleMain: 'Momenti dal',
    galleryTitleHighlight: 'Mar Rosso & Deserto',
    gallerySubtitle: 'Foto autentiche dei nostri ospiti: acque turchesi di Orange Bay, delfini in libertà e safari.',
    galleryFilterAll: 'Tutte le foto',
    galleryFilterIslands: 'Orange Bay & Isole',
    galleryFilterMarine: 'Vita marina & Delfini',
    galleryFilterDiving: 'Immersioni & Snorkeling',
    galleryFilterSafari: 'Safari nel Deserto',
    galleryFilterYachts: 'Yacht Privati',
    gallerySwipeHint: 'Scorri o usa i pulsanti freccia',
    weatherBadge: 'Meteo marino in diretta',
    weatherTitleMain: 'Condizioni del mare oggi &',
    weatherTitleHighlight: 'Barriere coralline',
    weatherSubtitle: 'Temperatura dell’acqua in tempo reale, moto ondoso e visibilità a Hurghada.',
    weatherLiveDataBadge: 'Dati in diretta: Costa & Isole di Hurghada',
    weatherTempUnit: 'Unità di misura:',
    weatherReefsHeading: 'Barriere coralline e riserve marine',
    weatherReefsSubheading: 'Clicca su una barriera per scoprire profondità, correnti e vita marina.',
    weatherLevel: 'Livello',
    weatherDepthRange: 'Profondità',
    weatherCurrentSpeed: 'Corrente',
    weatherResidentMarine: 'Vita marina:',
    mapBadge: 'Mappa di Hurghada & Mar Rosso',
    mapTitleMain: 'Destinazioni e zone di',
    mapTitleHighlight: 'Ritiro gratuito in hotel',
    mapSubtitle: 'Transfer gratuiti e climatizzati direttamente dalla reception del tuo resort.',
    mapLocationsTitle: 'Punti di partenza ed escursioni',
    mapEgyptText: 'Mar Rosso, Egitto',
    mapDailyBadge: 'Partenze giornaliere',
    mapPierCheck: 'Tutte le imbarcazioni partono da pontili privati e autorizzati',
    mapCalculatorTitle: 'Verifica l’orario di ritiro dal tuo hotel',
    mapCalculatorSubtitle: 'Seleziona la tua zona per vedere l’orario indicativo al mattino.',
    mapSelectZone: 'Scegli la zona del tuo hotel:',
    mapTypicalPickup: 'Orario di ritiro mattutino:',
    mapDriveTime: 'Tempo di percorrenza per la marina:',
    mapFreeTransfersIncluded: 'Transfer di ritorno gratuito incluso',
    whyDifferenceBadge: 'La differenza AquaWay',
    whyTitleMain: 'Perché i viaggiatori scelgono',
    whyTitleHighlight: 'AquaWay Tours',
    whySubtitle: 'Niente barche affollate né ritmi frenetici. Piccoli gruppi per il massimo relax.',
    whyGuarantee: 'Garanzia di Qualità AquaWay',
    whyTagSmallGroups: 'Piccoli gruppi',
    whyTagCertifiedGuides: 'Guide certificate',
    whyTagFreeTransfers: 'Transfer gratuito',
    whyTagZeroRisk: 'Nessun rischio',
    whyTagFastReplies: 'Risposta rapida',
    whyTagBestValue: 'Miglior prezzo diretto',
    whySupportTitle: 'Assistenza WhatsApp 24/7',
    whySupportDesc: 'Risposte veloci e gentili in italiano, inglese, tedesco, russo, polacco, francese, ceco e arabo.',
    whyPricesTitle: 'Prezzi diretti dell’operatore',
    whyPricesDesc: 'Prenota direttamente senza intermediari né costi aggiuntivi.',
    aboutBadge: 'Chi siamo: AquaWay',
    aboutLicenseBadge: 'Licenza ufficiale operatore #4928',
    aboutRegistered: 'Registrato presso il Ministero del Turismo Egiziano (Certificato CDWS)',
    aboutYears: '10+ Anni',
    aboutExcellence: 'Di esperienza nel Mar Rosso',
    aboutStory2: 'Con sede nella New Marina di Hurghada, gestiamo la nostra flotta di yacht, motoscafi e quad. Vera ospitalità egiziana a prezzi chiari.',
    aboutEcoTitle: 'Tutela delle barriere coralline',
    aboutEcoDesc: 'Seguiamo le linee guida HEPCA, diciamo no alla plastica monouso e ancoriamo in sicurezza.',
    aboutSafetyTitle: 'Sicurezza e certificazioni',
    aboutSafetyDesc: 'Assicurazione completa, controlli giornalieri dell’attrezzatura e istruttori PADI.',
    contactBadge: 'Siamo qui per te',
    contactFastReply: 'Risposta immediata su WhatsApp',
    contactWhatsAppDirect: 'Contattaci su WhatsApp',
    contactCallAnytime: 'Chiamaci',
    contactDailyHours: 'Tutti i giorni dalle 6:00 alle 23:00',
    contactSendEmail: 'Invia un’e-mail',
    contactEmailSub: 'Per tour privati e preventivi di gruppo',
    contactOurOffice: 'Il nostro ufficio a Hurghada',
    contactOfficeAddress: 'New Marina Boulevard, Hurghada',
    contactOfficeSub: 'Molo 4, Mar Rosso, Egitto',
    contactFormTitle: 'Inviaci un messaggio',
    contactFormSubtitle: 'Scrivici per qualsiasi domanda sul tuo soggiorno a Hurghada.',
    contactMsgSent: 'Messaggio inviato!',
    contactMsgDesc: 'Grazie! Il nostro team ti risponderà entro un’ora.',
    contactSendAnother: 'Invia un altro messaggio',
    footerTagline: 'Gite in barca, immersioni e safari a Hurghada',
    footerWhatsAppBtn: 'Scrivici su WhatsApp',
    footerAboutTitle: 'AquaWay Mar Rosso',
    footerAboutDesc: 'Escursioni per famiglie, yacht privati, immersioni PADI e avventure nel deserto.',
    footerLicenseText: 'Licenza ufficiale CDWS #4928',
    footerTopTrips: 'Escursioni più richieste',
    footerPickupAreas: 'Ritiro gratuito in hotel',
    footerContactUs: 'Contatti & Prenotazioni',
    footerAddress: 'New Marina, Hurghada, Egitto',
    footerCashPayment: 'Pagamento in contanti (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Politica di cancellazione e rimborso',
    footerAllRights: 'Tutti i diritti riservati.',
    offlineBannerTitle: 'Modalità offline (PWA salvata):',
    offlineBannerDesc: 'Tutte le escursioni e i prezzi sono consultabili offline.',
    offlineSavedLocally: 'Salvato localmente'
  },
  cs: {
    reviewsBadge: 'Hodnocení našich hostů',
    reviewsBasedOn: 'Více než 1 500 ověřených recenzí od cestovatelů z celého světa',
    reviewsTripadvisor: 'Certifikát výjimečnosti TripAdvisor',
    reviewsGoogle: 'Hodnocení 4.9★ na Google',
    reviewsAllFilter: 'Všechny recenze',
    reviewsVerified: 'Ověřený host',
    reviewsSwipeHint: 'Posunutím do stran zobrazíte další recenze',
    galleryBadge: 'Fotografie a vzpomínky',
    galleryTitleMain: 'Zážitky z',
    galleryTitleHighlight: 'Rudého moře & Pouště',
    gallerySubtitle: 'Skutečné fotografie našich hostů: tyrkysové vody Orange Bay, plavání s delfíny a pouštní safari.',
    galleryFilterAll: 'Všechny fotky',
    galleryFilterIslands: 'Orange Bay a ostrovy',
    galleryFilterMarine: 'Mořský svět a delfíni',
    galleryFilterDiving: 'Potápění a šnorchlování',
    galleryFilterSafari: 'Pouštní safari',
    galleryFilterYachts: 'Soukromé jachty',
    gallerySwipeHint: 'Přejeďte prstem nebo použijte šipky',
    weatherBadge: 'Živé počasí a stav moře',
    weatherTitleMain: 'Dnešní podmínky na moři &',
    weatherTitleHighlight: 'Útesy',
    weatherSubtitle: 'Aktuální teplota vody, vlny a podvodní viditelnost v Hurghadě.',
    weatherLiveDataBadge: 'Živá data: pobřeží Hurghady a ostrovy',
    weatherTempUnit: 'Jednotka teploty:',
    weatherReefsHeading: 'Slavné korálové útesy a mořské rezervace',
    weatherReefsSubheading: 'Klikněte na útes a zjistěte hloubku, proudy a mořský život.',
    weatherLevel: 'Úroveň',
    weatherDepthRange: 'Rozsah hloubky',
    weatherCurrentSpeed: 'Mořský proud',
    weatherResidentMarine: 'Mořský život:',
    mapBadge: 'Mapa Hurghady a Rudého moře',
    mapTitleMain: 'Kam jezdíme &',
    mapTitleHighlight: 'Zóny bezplatného vyzvednutí',
    mapSubtitle: 'Zdarma čistý a klimatizovaný transfer přímo z recepce vašeho hotelu.',
    mapLocationsTitle: 'Místa odjezdů a výletů',
    mapEgyptText: 'Rudé moře, Egypt',
    mapDailyBadge: 'Výlety každý den',
    mapPierCheck: 'Všechny lodě vyplouvají z bezpečných soukromých přístavů',
    mapCalculatorTitle: 'Zkontrolujte čas vyzvednutí u vašeho hotelu',
    mapCalculatorSubtitle: 'Zvolte oblast vašeho hotelu a zjistěte přibližný čas ranního odjezdu.',
    mapSelectZone: 'Vyberte oblast hotelu:',
    mapTypicalPickup: 'Ranní vyzvednutí:',
    mapDriveTime: 'Doba jízdy do přístavu:',
    mapFreeTransfersIncluded: 'Zpáteční transfer v ceně zdarma',
    whyDifferenceBadge: 'Rozdíl s AquaWay',
    whyTitleMain: 'Proč si cestovatelé vybírají',
    whyTitleHighlight: 'AquaWay Tours',
    whySubtitle: 'Žádné přeplněné lodě ani spěch. Malé skupiny pro vaše dokonalé pohodlí.',
    whyGuarantee: 'Ověřená záruka kvality AquaWay',
    whyTagSmallGroups: 'Malé skupiny',
    whyTagCertifiedGuides: 'Certifikovaní průvodci',
    whyTagFreeTransfers: 'Transfer zdarma',
    whyTagZeroRisk: 'Rezervace bez rizika',
    whyTagFastReplies: 'Rychlá odpověď',
    whyTagBestValue: 'Nejlepší místní cena',
    whySupportTitle: 'Podpora na WhatsApp 24/7',
    whySupportDesc: 'Rychlé a vstřícné odpovědi v češtině, angličtině, němčině, ruštině, polštině, francouzštině, italštině i arabštině.',
    whyPricesTitle: 'Přímé ceny od provozovatele',
    whyPricesDesc: 'Rezervujte přímo u nás bez hotelových provizí a skrytých poplatků.',
    aboutBadge: 'O AquaWay Rudé moře',
    aboutLicenseBadge: 'Oficiální licence operátora #4928',
    aboutRegistered: 'Registrováno u Egyptského ministerstva cestovního ruchu (Certifikace CDWS)',
    aboutYears: '10+ Let',
    aboutExcellence: 'Zkušeností v Rudém moři',
    aboutStory2: 'Se sídlem v New Marina Hurghada provozujeme vlastní jachty, motorové čluny a čtyřkolky. Zažijte pravou egyptskou pohostinnost za férové ceny.',
    aboutEcoTitle: 'Ochrana korálových útesů',
    aboutEcoDesc: 'Dodržujeme pravidla asociace HEPCA, nepoužíváme jednorázové plasty a kotvíme šetrně.',
    aboutSafetyTitle: 'Bezpečnost na prvním místě',
    aboutSafetyDesc: 'Kompletní pojištění, každodenní kontrola vybavení a zkušení instruktoři PADI.',
    contactBadge: 'Jsme tu pro vás',
    contactFastReply: 'Nejrychlejší odpověď na WhatsApp',
    contactWhatsAppDirect: 'Napište nám na WhatsApp',
    contactCallAnytime: 'Zavolejte nám',
    contactDailyHours: 'Denně od 6:00 do 23:00',
    contactSendEmail: 'Napsat e-mail',
    contactEmailSub: 'Pro individuální výlety a skupiny',
    contactOurOffice: 'Naše kancelář v Hurghadě',
    contactOfficeAddress: 'New Marina Boulevard, Hurghada',
    contactOfficeSub: 'Molo 4, Rudé moře, Egypt',
    contactFormTitle: 'Pošlete nám zprávu',
    contactFormSubtitle: 'Rádi vám zodpovíme veškeré dotazy k vaší dovolené.',
    contactMsgSent: 'Zpráva odeslána!',
    contactMsgDesc: 'Děkujeme! Náš tým se vám ozve do jedné hodiny.',
    contactSendAnother: 'Odeslat další zprávu',
    footerTagline: 'Lodní výlety, potápění a safari v Hurghadě',
    footerWhatsAppBtn: 'Napsat na WhatsApp',
    footerAboutTitle: 'AquaWay Rudé moře',
    footerAboutDesc: 'Rodinné výlety, soukromé jachty, potápění PADI a pouštní safari v Hurghadě. Oficiální licence.',
    footerLicenseText: 'Oficiální licence CDWS #4928',
    footerTopTrips: 'Nejoblíbenější výlety',
    footerPickupAreas: 'Zóny bezplatného vyzvednutí',
    footerContactUs: 'Kontakt a rezervace',
    footerAddress: 'New Marina, Hurghada, Egypt',
    footerCashPayment: 'Platba v hotovosti (EUR/USD/GBP/EGP)',
    footerRefundPolicy: 'Storno podmínky a vrácení peněz',
    footerAllRights: 'Všechna práva vyhrazena.',
    offlineBannerTitle: 'Offline režim (PWA uloženo):',
    offlineBannerDesc: 'Všechny výlety a itineráře jsou dostupné i bez připojení k internetu.',
    offlineSavedLocally: 'Uloženo lokálně'
  },
  ar: {
    reviewsBadge: 'تجارب حقيقية من ضيوفنا',
    reviewsBasedOn: 'استناداً إلى أكثر من 1,500 تقييم حقيقي للمسافرين عبر المنصات',
    reviewsTripadvisor: 'شهادة التميز تريب أدفايزر',
    reviewsGoogle: 'تقييم 4.9★ على جوجل',
    reviewsAllFilter: 'جميع التقييمات',
    reviewsVerified: 'ضيف موثق',
    reviewsSwipeHint: 'اسحب يميناً/يساراً لقراءة المزيد من التقييمات',
    galleryBadge: 'صور وذكريات الضيوف',
    galleryTitleMain: 'لحظات ساحرة من',
    galleryTitleHighlight: 'البحر الأحمر والصحراء',
    gallerySubtitle: 'صور حقيقية التقطها ضيوفنا أثناء الاستمتاع بمياه جزر أورانج باي، والسباحة مع الدلافين، وسفاري الصحراء.',
    galleryFilterAll: 'جميع الصور',
    galleryFilterIslands: 'أورانج باي والجزر',
    galleryFilterMarine: 'الحياة البحرية والدلافين',
    galleryFilterDiving: 'الغوص والسنوركلينج',
    galleryFilterSafari: 'سفاري الصحراء',
    galleryFilterYachts: 'اليخوت الخاصة',
    gallerySwipeHint: 'اسحب يميناً/يساراً للتنقل بين الصور',
    weatherBadge: 'محطة رصد البحر الأحمر الحية',
    weatherTitleMain: 'حالة البحر اليوم &',
    weatherTitleHighlight: 'مرصد الشعاب المرجانية',
    weatherSubtitle: 'قياسات فورية مباشرة من محطات الرصد البحرية بالغردقة: درجات حرارة المياه، والأمواج، ومستوى الرؤية.',
    weatherLiveDataBadge: 'بيانات البث الحي: مارينا الغردقة ومضيق جزيرة جفتون',
    weatherTempUnit: 'وحدة القياس:',
    weatherReefsHeading: 'أبرز الشعاب المرجانية والمحميات البحرية في البحر الأحمر',
    weatherReefsSubheading: 'اضغط على أي موقع شعاب أدناه للاطلاع على الأعماق والتيارات والحياة البحرية المستوطنة التي نزورها في رحلاتنا.',
    weatherLevel: 'المستوى',
    weatherDepthRange: 'مدى العمق',
    weatherCurrentSpeed: 'شدة التيار',
    weatherResidentMarine: 'الكائنات البحرية المستوطنة:',
    mapBadge: 'الدليل الجغرافي للبحر الأحمر',
    mapTitleMain: 'تغطية الوجهات &',
    mapTitleHighlight: 'مناطق الانتقالات من الفنادق',
    mapSubtitle: 'توفر أكوا واي سيارات حديثة ومكيفة تغطي كافة الفنادق والمنتجعات على طول ساحل البحر الأحمر البالغ 60 كم.',
    mapLocationsTitle: 'مناطق الرحلات بساحل الغردقة',
    mapEgyptText: 'محافظة البحر الأحمر، جمهورية مصر العربية',
    mapDailyBadge: 'رحلات يومية',
    mapPierCheck: 'جميع المراكب تنطلق من مراسي خاصة ومرخصة',
    mapCalculatorTitle: 'احسب موعد تحرك السيارة من فندقك',
    mapCalculatorSubtitle: 'اختر منطقة فندقك لمعرفة الموعد الدقيق لوصول سيارة التوصيل صباحاً.',
    mapSelectZone: 'اختر منطقة فندقك في الغردقة:',
    mapTypicalPickup: 'موعد وصول السيارة التقريبي:',
    mapDriveTime: 'مدة الطريق إلى مارينا اليخوت:',
    mapFreeTransfersIncluded: 'شامل التوصيل والعودة مجاناً',
    whyDifferenceBadge: 'معايير الجودة في أكوا واي',
    whyTitleMain: 'لماذا يختار المسافرون المميزون',
    whyTitleHighlight: 'رحلات أكوا واي البحرية؟',
    whySubtitle: 'نحن نرفض المراكب التجارية المكتظة. صُممت كل رحلة مع أكوا واي لتمنحك الراحة الفاخرة، وأعلى معايير السلامة، وكرم الضيافة المصرية الأصيلة.',
    whyGuarantee: 'ضمان جودة أكوا واي المعتمد',
    whyTagSmallGroups: 'سعة محدودة وراحة قصوى',
    whyTagCertifiedGuides: 'معتمد من PADI',
    whyTagFreeTransfers: 'تغطية لكافة الفنادق',
    whyTagZeroRisk: 'حجز بدون مخاطر',
    whyTagFastReplies: 'مساعدة فورية',
    whyTagBestValue: 'أفضل قيمة مضمونة',
    whySupportTitle: 'خدمة عملاء متعددة اللغات 24/7',
    whySupportDesc: 'إجابات فورية بالعربية والإنجليزية والألمانية والروسية والفرنسية والبولندية والإيطالية والتشيكية عبر الواتساب والهاتف.',
    whyPricesTitle: 'أسعار المنظم المباشرة',
    whyPricesDesc: 'بدون عمولات وسطاء الفنادق وسماسرة الشواطئ. تحجز مباشرة مع أصحاب المراكب بأفضل سعر.',
    aboutBadge: 'عن أكوا واي البحر الأحمر',
    aboutLicenseBadge: 'ترخيص رسمي رقم #4928',
    aboutRegistered: 'مرخص رسمياً من وزارة السياحة والآثار وغرفة الغوص المصرية (CDWS)',
    aboutYears: '+10 سنوات',
    aboutExcellence: 'تميز وخبرة في البحر الأحمر',
    aboutStory2: 'انطلاقاً مباشرة من مارينا الغردقة الجديدة، تمتلك أكوا واي وتدير أسطولاً مخصصاً من اليخوت الفاخرة، واللانشات السريعة، وفرق الدعم الصحراوي. من خلال حجزك المباشر مع المنظم وبدون وسطاء الفنادق، نضمن لك شفافية الأسعار، والعناية الشخصية، وكرم الضيافة المصري الأصيل.',
    aboutEcoTitle: 'حماية البيئة والشعاب المرجانية',
    aboutEcoDesc: 'التزام تام بإرشادات جمعية هيبكا (HEPCA) لحماية الحياة البحرية. منع البلاستيك أحادي الاستخدام واعتماد مراسي آمنة للشعاب.',
    aboutSafetyTitle: 'معتمد من PADI و CDWS',
    aboutSafetyDesc: 'تأمين بحري شامل على الركاب، وفحص يومي صارم للمراكب والمعدات، ومدربو غوص معتمدون دولياً.',
    contactBadge: 'فريق خدمة العملاء 24/7',
    contactFastReply: 'أسرع طريقة للتواصل (رد فوري)',
    contactWhatsAppDirect: 'تحدث معنا عبر الواتساب',
    contactCallAnytime: 'الاتصال الهاتفي المباشر',
    contactDailyHours: 'يومياً من 6:00 صباحاً حتى 11:00 مساءً',
    contactSendEmail: 'البريد الإلكتروني',
    contactEmailSub: 'لطلب عروض الرحلات الخاصة والمجموعات',
    contactOurOffice: 'مقرنا في الغردقة',
    contactOfficeAddress: 'ممشى مارينا الغردقة الجديدة',
    contactOfficeSub: 'رصيف 4، محافظة البحر الأحمر، مصر',
    contactFormTitle: 'أرسل استفسارك أو طلبك',
    contactFormSubtitle: 'نجيب فوراً على كافة الاستفسارات، والحجوزات العائلية، والرحلات الخاصة.',
    contactMsgSent: 'تم إرسال رسالتك بنجاح!',
    contactMsgDesc: 'شكراً لك! سيقوم منسق الحجوزات بالرد عليك خلال ساعة واحدة.',
    contactSendAnother: 'إرسال رسالة أخرى',
    footerTagline: 'رحلات بحرية، غوص، وسفاري صحراوي في الغردقة',
    footerWhatsAppBtn: 'تواصل معنا عبر الواتساب',
    footerAboutTitle: 'أكوا واي البحر الأحمر',
    footerAboutDesc: 'منظم رحلات يخوت خاصة، ومركز غوص معتمد من PADI، وخبراء سفاري الصحراء في مارينا الغردقة الجديدة. مرخص رسمياً من غرفة سياحة الغوص (CDWS).',
    footerLicenseText: 'ترخيص CDWS رقم #4928',
    footerTopTrips: 'أشهر الرحلات',
    footerPickupAreas: 'مناطق التوصيل من الفنادق',
    footerContactUs: 'خدمة العملاء والحجوزات',
    footerAddress: 'مارينا الغردقة، البحر الأحمر، مصر',
    footerCashPayment: 'نقداً (يورو/دولار/جنيه/إسترليني)',
    footerRefundPolicy: 'سياسة الإلغاء والاسترداد',
    footerAllRights: 'جميع الحقوق محفوظة.',
    offlineBannerTitle: 'وضع عدم الاتصال (PWA):',
    offlineBannerDesc: 'يمكنك تصفح تفاصيل الرحلات والأسعار المحفوظة بدون إنترنت.',
    offlineSavedLocally: 'البيانات مخزنة محلياً'
  }
};
