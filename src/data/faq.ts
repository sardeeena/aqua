import { LanguageCode } from '../types';

export interface LocalizedFAQItem {
  id: string;
  category: string;
  categoryLabels: Record<LanguageCode, string>;
  questions: Record<LanguageCode, string>;
  answers: Record<LanguageCode, string>;
}

export const FAQ_ITEMS_LOCALIZED: LocalizedFAQItem[] = [
  {
    id: 'faq-1',
    category: 'pickup',
    categoryLabels: {
      en: 'Hotel Transfers & Pickups',
      de: 'Hoteltransfer & Abholung',
      ru: 'Трансфер из Отеля',
      pl: 'Transfer z Hotelu',
      fr: 'Transfert Hôtel & Prise en Charge',
      it: 'Transfer & Prelievo in Hotel',
      cs: 'Hotelový Transfer a Vyzvednutí',
      ar: 'التوصيل والانتقالات الفندقية'
    },
    questions: {
      en: 'Where and when will you pick me up from my hotel?',
      de: 'Wo und wann werde ich von meinem Hotel abgeholt?',
      ru: 'Где и во сколько меня заберут из отеля?',
      pl: 'Gdzie i o której godzinie zostanie zorganizowany odbiór z hotelu?',
      fr: 'Où et à quelle heure venez-vous me chercher à l’hôtel ?',
      it: 'Dove e a che ora avviene il prelievo in hotel?',
      cs: 'Kde a v kolik hodin mě vyzvednete z hotelu?',
      ar: 'أين ومتى سيتم نقلي من الفندق؟'
    },
    answers: {
      en: 'We pick you up right from your hotel reception or main front gate in a clean, air-conditioned vehicle. Once your booking is confirmed, our operations team will message you on WhatsApp the day before your trip with your exact pickup time (usually between 7:30 AM and 8:15 AM for morning boat trips) and driver details.',
      de: 'Wir holen Sie direkt an der Hotelrezeption oder am Haupttor in einem sauberen, klimatisierten Fahrzeug ab. Am Tag vor dem Ausflug erhalten Sie per WhatsApp die genaue Abholzeit (meist zwischen 07:30 und 08:15 Uhr) sowie die Kontaktdaten des Fahrers.',
      ru: 'Мы забираем вас прямо от ресепшена или главных ворот вашего отеля на комфортабельном кондиционированном микроавтобусе. Накануне поездки наш диспетчер пришлет вам в WhatsApp точное время трансфера (обычно с 07:30 до 08:15 утра) и номер машины.',
      pl: 'Odbieramy Państwa bezpośrednio z recepcji lub bramy głównej hotelu klimatyzowanym busem. Dzień przed wycieczką nasz koordynator wyśle na WhatsApp dokładną godzinę zbiórki (zwykle między 07:30 a 08:15 rano) oraz dane kierowcy.',
      fr: 'Nous venons vous chercher directement à la réception ou au portail principal de votre hôtel en véhicule climatisé. La veille de votre excursion, notre équipe vous envoie sur WhatsApp l’heure exacte de prise en charge (généralement entre 07h30 et 08h15) et les coordonnées du chauffeur.',
      it: 'Vi preleviamo direttamente alla reception o al cancello principale del vostro hotel con un mezzo moderno e climatizzato. Il giorno prima del tour vi invieremo su WhatsApp l’orario preciso (di solito tra le 07:30 e le 08:15) e i dettagli dell’autista.',
      cs: 'Vyzvedneme vás přímo u recepce nebo hlavní brány vašeho hotelu čistým klimatizovaným vozem. Den před výletem vám pošleme na WhatsApp přesný čas vyzvednutí (obvykle mezi 07:30 a 08:15) a údaje o řidiči.',
      ar: 'نوفر خدمة توصيل مجانية مكيفة ومريحة مباشرة من أمام لوبي أو بوابة فندقك في الغردقة. بمجرد تأكيد حجزك، يرسل لك مسؤول الحركة الموعد الدقيق للتوصيل (عادة بين 07:30 و 08:15 صباحاً للرحلات البحرية) ورقم السيارة واسم السائق عبر الواتساب قبل الرحلة بيوم.'
    }
  },
  {
    id: 'faq-2',
    category: 'booking',
    categoryLabels: {
      en: 'Booking & Cancellation',
      de: 'Buchung & Stornierung',
      ru: 'Бронирование и Отмена',
      pl: 'Rezerwacja i Płatność',
      fr: 'Réservation & Annulation',
      it: 'Prenotazione & Cancellazione',
      cs: 'Rezervace a Zrušení',
      ar: 'الحجز وسياسة الإلغاء'
    },
    questions: {
      en: 'How do I pay, and what is your cancellation policy?',
      de: 'Wie bezahle ich und wie lauten die Stornierungsbedingungen?',
      ru: 'Как оплатить экскурсию и какие условия отмены?',
      pl: 'Jak wygląda płatność i jakie są warunki bezpłatnej rezygnacji?',
      fr: 'Comment s’effectue le paiement et quelles sont les conditions d’annulation ?',
      it: 'Come si effettua il pagamento e quali sono le condizioni di cancellazione?',
      cs: 'Jak probíhá platba a jaké jsou podmínky bezplatného zrušení?',
      ar: 'كيف يتم الدفع وما هي سياسة الإلغاء؟'
    },
    answers: {
      en: 'You can easily book online or via WhatsApp with no deposit needed for most tours. You simply pay on the day of the trip in cash (EUR, USD, GBP, or EGP) or by card. If your plans change, you can cancel or change your date for free up to 24 hours before your trip.',
      de: 'Sie können ganz einfach online oder per WhatsApp buchen – für fast alle Touren ist keine Vorauszahlung erforderlich. Sie bezahlen bequem am Tag des Ausflugs in bar (EUR, USD, GBP oder EGP) oder per Karte. Sie können bis 24 Stunden vor Beginn kostenlos stornieren oder umbuchen.',
      ru: 'Вы можете забронировать тур онлайн или через WhatsApp без предоплаты для большинства экскурсий. Оплата производится в день поездки наличными (EUR, USD, GBP или EGP) или картой. Бесплатная отмена или перенос даты возможны за 24 часа до выезда.',
      pl: 'Rezerwacji można dokonać online lub przez WhatsApp bez konieczności wpłaty zaliczki dla większości wycieczek. Płatność odbywa się w dniu wycieczki gotówką (EUR, USD, GBP lub EGP) lub kartą. Bezpłatna rezygnacja lub zmiana terminu do 24 godzin przed wyjazdem.',
      fr: 'Vous pouvez réserver facilement en ligne ou via WhatsApp sans aucun acompte pour la majorité des excursions. Vous réglez sur place le jour même en espèces (EUR, USD, GBP ou EGP) ou par carte. Annulation et modification gratuites jusqu’à 24h avant le départ.',
      it: 'È possibile prenotare comodamente online o su WhatsApp senza anticipo per la maggior parte dei tour. Il pagamento si effettua il giorno dell’escursione in contanti (EUR, USD, GBP o EGP) o con carta. Cancellazione o cambio data gratuiti fino a 24 ore prima.',
      cs: 'Rezervaci můžete provést online nebo přes WhatsApp bez nutnosti zálohy pro většinu výletů. Platba probíhá v den výletu v hotovosti (EUR, USD, GBP nebo EGP) či kartou. Bezplatné zrušení nebo změna termínu až 24 hodin předem.',
      ar: 'يمكنك الحجز بسهولة عبر الموقع أو مباشرة عبر الواتساب بدون أي دفع مسبق لمعظم الرحلات. يتم الدفع نقداً (بالجنيه المصري، اليورو، الدولار، أو الإسترليني) أو بالبطاقة البنكية يوم الرحلة. يمكنك إلغاء أو تعديل موعد الرحلة مجاناً تماماً حتى 24 ساعة قبل الانطلاق.'
    }
  },
  {
    id: 'faq-3',
    category: 'diving',
    categoryLabels: {
      en: 'Scuba Diving & Snorkeling',
      de: 'Tauchen & Schnorcheln',
      ru: 'Дайвинг и Снорклинг',
      pl: 'Nurkowanie i Snurkowanie',
      fr: 'Plongée & Snorkeling',
      it: 'Immersioni & Snorkeling',
      cs: 'Potápění a Šnorchlování',
      ar: 'الغوص والسنوركلينج'
    },
    questions: {
      en: 'I have never dived or cannot swim well. Can I still join?',
      de: 'Ich habe noch nie getaucht und kann nicht gut schwimmen. Kann ich trotzdem teilnehmen?',
      ru: 'Я никогда не нырял с аквалангом и плохо плаваю. Могу ли я участвовать?',
      pl: 'Nigdy nie nurkowałem z butlą i słabo pływam. Czy mogę wziąć udział?',
      fr: 'Je n’ai jamais plongé et je ne sais pas bien nager. Puis-je quand même participer ?',
      it: 'Non ho mai fatto immersioni e non nuoto bene. Posso partecipare lo stesso?',
      cs: 'Nikdy jsem se nepotápěl a neumím dobře plavat. Mohu se přesto zúčastnit?',
      ar: 'لم أمارس الغوص من قبل ولا أجيد السباحة جيداً، هل يمكنني المشاركة؟'
    },
    answers: {
      en: 'Yes, definitely! Our beginner scuba diving trip (Discovery Dive) is made specifically for first-timers and non-swimmers. A friendly, certified PADI dive instructor will be with you 1-on-1 underwater, holding your hand and taking care of all the gear so you can just relax and enjoy the fish. We also have life jackets on board for everyone who wants to snorkel.',
      de: 'Ja, absolut! Unser Schnuppertauchen (Discovery Dive) ist speziell für Anfänger und Nichtschwimmer konzipiert. Ein lizenzierter PADI-Tauchlehrer begleitet Sie 1-zu-1 unter Wasser, hält Ihre Hand und kümmert sich um die gesamte Ausrüstung. Schwimmwesten sind für alle Schnorchler an Bord vorhanden.',
      ru: 'Да, конечно! Пробное погружение Discovery Dive создано специально для новичков и тех, кто не умеет плавать. Лицензированный инструктор PADI погружается с вами индивидуально (1 на 1), держит за руку и контролирует все приборы. На яхте также есть спасательные жилеты для комфортного снорклинга.',
      pl: 'Tak, jak najbardziej! Intro nurkowe (Discovery Dive) jest stworzone z myślą o osobach początkujących i niepływających. Certyfikowany instruktor PADI schodzi pod wodę indywidualnie 1-na-1, trzyma za rękę i dba o cały sprzęt. Na pokładzie dostępne są również kamizelki asekuracyjne.',
      fr: 'Oui, absolument ! Le baptême de plongée (Discovery Dive) est conçu spécialement pour les débutants et les non-nageurs. Un moniteur PADI certifié est à vos côtés en tête-à-tête (1-sur-1), vous tient la main et gère tout l’équipement. Des gilets de sauvetage sont fournis pour le snorkeling.',
      it: 'Sì, assolutamente! Il battesimo del mare (Discovery Dive) è studiato per principianti e per chi non sa nuotare bene. Un istruttore PADI certificato sarà con voi in rapporto 1-a-1 sott’acqua, tenendovi per mano e gestendo l’attrezzatura. A bordo sono disponibili giubbotti salvagente per tutti.',
      cs: 'Ano, určitě! Zkušební ponor (Discovery Dive) je určený speciálně pro začátečníky i neplavce. Certifikovaný instruktor PADI s vámi jde pod vodu individuálně 1-na-1, drží vás za ruku a řídí veškerou výstroj. Na lodi jsou k dispozici záchranné vesty pro všechny.',
      ar: 'بالتأكيد وبكل سهولة! رحلة تجربة الغوص Discovery Dive مخصصة للمبتدئين ومن لا يجيدون السباحة. يكون معك مدرب غوص معتمد خاص 1 إلى 1 يمسك بيدك ويدير كل معدات التنفس والطفو لضمان أقصى درجات الأمان والراحة. كما نوفر سترات نجاة طافية لجميع السنوركلرز.'
    }
  },
  {
    id: 'faq-4',
    category: 'diving',
    categoryLabels: {
      en: 'Snorkeling Gear & Sizing',
      de: 'Schnorchelausrüstung & Größen',
      ru: 'Снаряжение для Снорклинга',
      pl: 'Sprzęt do Snurkowania',
      fr: 'Matériel de Snorkeling & Tailles',
      it: 'Attrezzatura Snorkeling',
      cs: 'Šnorchlovací Výstroj a Velikosti',
      ar: 'معدات ومقاسات السنوركلينج'
    },
    questions: {
      en: 'Is snorkeling equipment included, and do you have children sizes?',
      de: 'Ist die Schnorchelausrüstung inklusive und gibt es Kindergrößen?',
      ru: 'Входит ли снаряжение для снорклинга и есть ли детские размеры?',
      pl: 'Czy sprzęt do snurkowania jest w cenie i czy macie rozmiary dziecięce?',
      fr: 'Le matériel de snorkeling est-il inclus et avez-vous des tailles enfants ?',
      it: 'L’attrezzatura da snorkeling è inclusa e avete taglie per bambini?',
      cs: 'Je šnorchlovací výstroj v ceně a máte i dětské velikosti?',
      ar: 'هل معدات السنوركلينج مشمولة وهل توجد مقاسات للأطفال؟'
    },
    answers: {
      en: 'Yes! Clean snorkeling masks, snorkels, fins, and life jackets are included on every boat trip for free. We carry sizes for everyone — from young kids (age 3+) to adult XXL. All gear is thoroughly washed and sanitized after every single trip.',
      de: 'Ja! Hochwertige Schnorchelmasken, Schnorchel, Flossen und Schwimmwesten sind auf jeder Bootstour kostenlos enthalten. Wir haben Größen für alle Altersgruppen – von Kleinkindern (ab 3 Jahren) bis zu Erwachsenen in XXL. Die gesamte Ausrüstung wird nach jeder Fahrt gereinigt und desinfiziert.',
      ru: 'Да! Маски, дыхательные трубки, регулируемые ласты и спасательные жилеты бесплатно предоставляются на каждой морской прогулке. В наличии размеры для всех: от малышей (от 3 лет) до взрослых XXL. Все снаряжение тщательно дезинфицируется после каждой поездки.',
      pl: 'Tak! Maski do snurkowania, rurki, płetwy oraz kamizelki asekuracyjne są wliczone w cenę każdego rejsu. Posiadamy rozmiary dla każdego – od dzieci (od 3 roku życia) po dorosłych XXL. Cały sprzęt jest dezynfekowany po każdym rejsie.',
      fr: 'Oui ! Masques, tubas, palmes réglables et gilets de sauvetage sont inclus gratuitement sur chaque bateau. Nous disposons de toutes les tailles, des jeunes enfants (dès 3 ans) aux adultes XXL. Tout le matériel est nettoyé et désinfecté après chaque sortie.',
      it: 'Sì! Maschere da snorkeling, boccagli, pinne e giubbotti di salvataggio sono inclusi gratuitamente su ogni barca. Abbiamo misure per tutti, dai bambini piccoli (dai 3 anni in su) agli adulti XXL. Tutto l’equipaggiamento viene sanificato regolarmente.',
      cs: 'Ano! Kvalitní masky na šnorchlování, šnorchly, ploutve a záchranné vesty jsou zdarma součástí každého lodního výletu. Máme velikosti pro všechny – od malých dětí (od 3 let) až po dospělé XXL. Veškerá výbava je po každé plavbě dezinfikována.',
      ar: 'نعم، جميع معدات السنوركلينج عالية الجودة (نظارات الغوص، أنابيب التنفس، الزعانف بمقاسات قابلة للتعديل، وسترات النجاة) متوفرة ومشمولة على متن اليخت مجاناً بجميع المقاسات من سن 3 سنوات وحتى المقاسات الكبيرة للكبار، مع تعقيمها بالكامل بعد كل رحلة.'
    }
  },
  {
    id: 'faq-5',
    category: 'safari',
    categoryLabels: {
      en: 'Desert Safari',
      de: 'Wüstensafari',
      ru: 'Сафари в Пустыне',
      pl: 'Safari Pustynne',
      fr: 'Safari Désert',
      it: 'Safari nel Deserto',
      cs: 'Pouštní Safari',
      ar: 'سفاري وبيتش باجي الصحراء'
    },
    questions: {
      en: 'What should I wear for the Quad Bike Desert Safari?',
      de: 'Was sollte ich für die Quad-Wüstensafari anziehen?',
      ru: 'Что надеть на сафари на квадроциклах в пустыне?',
      pl: 'W co się ubrać na safari quadami po pustyni?',
      fr: 'Que dois-je porter pour le Safari en Quad dans le désert ?',
      it: 'Cosa indossare per il safari in quad nel deserto?',
      cs: 'Co si vzít na sebe na pouštní safari na čtyřkolkách?',
      ar: 'ماذا يجب أن أرتدي في رحلة سفاري البيتش باجي الصحراوية؟'
    },
    answers: {
      en: 'Wear comfortable long trousers or jeans, closed shoes or sneakers, sunglasses, and sunscreen. You can bring your own desert headscarf (shemagh) and dust goggles or buy them at our desert station for around $3 to $5.',
      de: 'Tragen Sie bequeme lange Hosen oder Jeans, geschlossene Schuhe oder Sneaker, eine Sonnenbrille und Sonnencreme. Ein Beduinen-Kopftuch (Arafat-Tuch) und eine Staubschutzbrille können Sie mitbringen oder an unserer Wüstenstation für ca. 3–5 $ erwerben.',
      ru: 'Рекомендуем надеть удобные длинные брюки или джинсы, закрытую обувь (кроссовки), солнцезащитные очки и крем от загара. Арафатку (шемаг) и пылезащитные очки можно взять с собой или недорого приобрести на станции сафари за 3–5$.',
      pl: 'Zalecamy wygodne długie spodnie lub dżinsy, zakryte buty (adidasy/trampki), okulary przeciwsłoneczne i krem z filtrem. Chustę beduińską (arafatkę) oraz gogle ochronne można zabrać ze sobą lub kupić w bazie za około 3–5 USD.',
      fr: 'Portez un pantalon long confortable ou un jean, des chaussures fermées (baskets), des lunettes de soleil et de la crème solaire. Vous pouvez apporter votre propre chèche bédouin et lunettes anti-poussière ou les acheter à la base pour 3 à 5 $.',
      it: 'Consigliamo pantaloni lunghi comodi o jeans, scarpe chiuse (scarpe da ginnastica), occhiali da sole e crema solare. La tipica kefiah beduina e gli occhiali antipolvere si possono portare da casa o acquistare alla stazione nel deserto per circa 3–5$.',
      cs: 'Doporučujeme pohodlné dlouhé kalhoty nebo džíny, pevnou uzavřenou obuv (tenisky), sluneční brýle a opalovací krém. Beduínský šátek (arafatku) a ochranné brýle proti prachu si můžete přinést nebo zakoupit na základně za cca 3–5 USD.',
      ar: 'ننصح بشدة بارتداء بنطال مريح، حذاء رياضي مغلق (كوتشي)، نظارة شمسية وكريم واقي من الشمس. يمكنك إحضار الشال البدوي الخاص بك أو شراؤه من المحطة الرئيسية بأسعار رمزية.'
    }
  },
  {
    id: 'faq-6',
    category: 'general',
    categoryLabels: {
      en: 'Food & Dietary Requirements',
      de: 'Verpflegung & Ernährung',
      ru: 'Питание на Борту',
      pl: 'Posiłki i Dieta',
      fr: 'Repas & Régimes Alimentaires',
      it: 'Cibo & Opzioni Dietetiche',
      cs: 'Stravování a Diety',
      ar: 'وجبات الطعام والخيارات الغذائية'
    },
    questions: {
      en: 'What is included in the onboard buffet lunch? Are vegetarian options available?',
      de: 'Was ist im Mittagsbuffet an Bord enthalten? Gibt es vegetarische Optionen?',
      ru: 'Что входит в обед на яхте? Есть ли вегетарианские блюда?',
      pl: 'Co zawiera obiad w formie bufetu na statku? Czy są dania wegetariańskie?',
      fr: 'Que comprend le buffet déjeuner à bord ? Y a-t-il des options végétariennes ?',
      it: 'Cosa comprende il pranzo a buffet a bordo? Ci sono opzioni vegetariane?',
      cs: 'Co obsahuje obědový bufet na lodi? Jsou k dispozici vegetariánská jídla?',
      ar: 'ماذا يشمل بوفيه الغداء على اليخت؟ وهل تتوفر وجبات نباتية؟'
    },
    answers: {
      en: 'All our day boat trips include a fresh hot lunch cooked right on board by our chef. You will enjoy grilled fish or chicken, rice, pasta, fresh Egyptian salads, tahini sauce, warm bread, and fresh fruit. We always have great vegetarian and vegan choices available.',
      de: 'Alle unsere Tagestouren beinhalten ein frisch vom Bordkoch zubereitetes warmes Mittagessen mit gegrilltem Fisch oder Hähnchen, Reis, Pasta, orientalischen Salaten, Tahina, Fladenbrot und frischem Obst. Vegetarische und vegane Optionen sind immer reichlich vorhanden.',
      ru: 'Все наши морские прогулки включают свежий горячий обед, приготовленный корабельным коком: рыба или курица-гриль, рис, паста, свежие салаты, соус тахини, лепешки и фрукты. Всегда в наличии вкусные вегетарианские блюда.',
      pl: 'Wszystkie rejsy całodniowe zawierają świeży, ciepły obiad przygotowywany na statku przez kucharza: ryba lub grillowany kurczak, ryż, makaron, świeże sałatki, sos tahini, chleb i owoce. Zawsze dostępne są opcje wegetariańskie.',
      fr: 'Toutes nos sorties en mer incluent un déjeuner chaud préparé à bord par le chef : poisson ou poulet grillé, riz, pâtes, salades orientales, sauce tahina, pain chaud et fruits frais. Des options végétariennes et véganes sont toujours prévues.',
      it: 'Tutti i nostri tour giornalieri in barca includono un pranzo caldo preparato dallo chef di bordo: pesce o pollo alla griglia, riso, pasta, insalate fresche, tahina, pane caldo e frutta. Sono sempre disponibili ottime opzioni vegetariane e vegane.',
      cs: 'Všechny celodenní lodní výlety zahrnují teplý oběd připravený kuchařem přímo na lodi: grilovaná ryba nebo kuře, rýže, těstoviny, čerstvé orientální saláty, sezamová pasta tahini, chléb a ovoce. Vždy jsou k dispozici vegetariánské volby.',
      ar: 'تشمل جميع رحلاتنا البحرية اليومية بوفيه غداء مفتوح طازج يتم طهيه على متن اليخت بواسطة شيف خاص. يشمل سمك مشوي، دجاج، أرز، مكرونة، سلطات شرقية طازجة، طحينة، خبز ساخن وفواكه طازجة، مع توفر خيارات نباتية تناسب الجميع.'
    }
  },
  {
    id: 'faq-7',
    category: 'booking',
    categoryLabels: {
      en: 'National Park Marine Fees',
      de: 'Nationalpark-Gebühren',
      ru: 'Экологический Сбор Заповедника',
      pl: 'Opłaty Parku Narodowego',
      fr: 'Taxes du Parc National Marin',
      it: 'Tassa Parco Marino Nazionale',
      cs: 'Poplatky za Národní Park',
      ar: 'رسوم المحميات الطبيعية الرسمية'
    },
    questions: {
      en: 'What is the Red Sea National Park Environmental Fee?',
      de: 'Was ist die Umweltgebühr für den Nationalpark Rotes Meer?',
      ru: 'Что такое экологический сбор заповедника Красного моря?',
      pl: 'Czym jest opłata środowiskowa za park narodowy Morza Czerwonego?',
      fr: 'Qu’est-ce que la taxe environnementale du Parc National de la Mer Rouge ?',
      it: 'Cos’è la tassa ambientale del Parco Nazionale del Mar Rosso?',
      cs: 'Co je poplatek za ochranu mořského národního parku Rudého moře?',
      ar: 'ما هي رسوم المحميات الطبيعية في البحر الأحمر؟'
    },
    answers: {
      en: 'The Egyptian Ministry of Environment charges a $5 per person government fee for boats entering protected marine areas like Giftun Island (Orange Bay & Paradise Island) and dolphin reefs. This small fee goes directly toward protecting the coral reefs and marine life.',
      de: 'Das ägyptische Umweltministerium erhebt eine staatliche Gebühr von 5 $ pro Person für Boote, die in geschützte Meeresgebiete wie die Insel Giftun (Orange Bay & Paradise) einfahren. Dieser Beitrag dient direkt dem Schutz der Korallenriffe und der Meeresfauna.',
      ru: 'Министерство окружающей среды Египта взимает официальный сбор в размере 5$ с человека за вход в морские заповедники (остров Большой Гифтун, Оранж Бей, Парадайз, рифы с дельфинами). Эти средства идут на сохранение уникальной экосистемы Красного моря.',
      pl: 'Egipskie Ministerstwo Środowiska pobiera urzędową opłatę w wysokości 5 USD od osoby za wstęp na obszary chronione, takie jak wyspa Giftun (Orange Bay i Paradise) oraz rafy z delfinami. Opłata ta wspiera ochronę raf koralowych.',
      fr: 'Le ministère égyptien de l’Environnement prélève une taxe officielle de 5 $ par personne pour les bateaux entrant dans les zones marines protégées comme l’île de Giftun (Orange Bay & Paradise) et les récifs à dauphins. Cette taxe contribue à préserver la biodiversité.',
      it: 'Il Ministero dell’Ambiente egiziano applica una tassa governativa di 5 $ a persona per l’ingresso nelle aree marine protette come l’isola Giftun (Orange Bay e Paradise) e le barriere con delfini. La quota sostiene la tutela dei coralli.',
      cs: 'Egyptské ministerstvo životního prostředí vybírá poplatek 5 USD na osobu za vstup lodí do chráněných mořských parků jako ostrov Giftun (Orange Bay a Paradise) a delfíní útesy. Tento příspěvek slouží přímo k ochraně korálových útesů.',
      ar: 'تفرض وزارة البيئة المصرية رسماً حكومياً بيئياً رمزياً قدره 5 دولارات للفرد لدخول المحميات البحرية الطبيعية مثل جزر الجفتون (أورانج باي وباراديس) وشعب العرق، وتذهب هذه الرسوم بالكامل لحماية الشعاب المرجانية والبيئة البحرية.'
    }
  }
];

export const FAQ_ITEMS = FAQ_ITEMS_LOCALIZED.map(item => ({
  id: item.id,
  category: item.category,
  categoryLabel: item.categoryLabels.en,
  arabicCategoryLabel: item.categoryLabels.ar,
  question: item.questions.en,
  arabicQuestion: item.questions.ar,
  answer: item.answers.en,
  arabicAnswer: item.answers.ar,
}));
