import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS_LOCALIZED } from '../data/faq';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FAQSectionProps {
  currentLanguage: LanguageCode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const FAQ_CATEGORY_LABELS: Record<string, Record<LanguageCode, string>> = {
  all: {
    en: 'All Questions',
    de: 'Alle Fragen',
    ru: 'Все вопросы',
    pl: 'Wszystkie pytania',
    fr: 'Toutes les questions',
    it: 'Tutte le domande',
    cs: 'Všechny dotazy',
    ar: 'جميع الأسئلة'
  },
  pickup: {
    en: 'Hotel Pickups',
    de: 'Hoteltransfer',
    ru: 'Трансфер',
    pl: 'Odbiór z hotelu',
    fr: 'Transferts hôtel',
    it: 'Transfer hotel',
    cs: 'Hotelový transfer',
    ar: 'التوصيل والانتقالات'
  },
  booking: {
    en: 'Payment & Cancellation',
    de: 'Zahlung & Storno',
    ru: 'Оплата и отмена',
    pl: 'Płatność i rezygnacja',
    fr: 'Paiement & Annulation',
    it: 'Pagamento & Cancellazione',
    cs: 'Platba a zrušení',
    ar: 'الحجز والدفع'
  },
  diving: {
    en: 'Scuba & Snorkeling',
    de: 'Tauchen & Schnorcheln',
    ru: 'Дайвинг и снорклинг',
    pl: 'Nurkowanie',
    fr: 'Plongée & Snorkeling',
    it: 'Immersioni & Snorkeling',
    cs: 'Potápění a šnorchlování',
    ar: 'الغوص والسنوركلينج'
  },
  safari: {
    en: 'Desert Safari',
    de: 'Wüstensafari',
    ru: 'Сафари в пустыне',
    pl: 'Safari pustynne',
    fr: 'Safari désert',
    it: 'Safari nel deserto',
    cs: 'Pouštní safari',
    ar: 'سفاري الصحراء'
  }
};

const FAQ_BADGE_LABELS: Record<LanguageCode, string> = {
  en: 'Helpful Answers',
  de: 'Hilfreiche Antworten',
  ru: 'Полезные ответы',
  pl: 'Wszystko co musisz wiedzieć',
  fr: 'Réponses utiles',
  it: 'Risposte utili',
  cs: 'Užitečné odpovědi',
  ar: 'إجابات واضحة ومعلومات هامة'
};

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLanguage }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS_LOCALIZED[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(i => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQ_ITEMS_LOCALIZED.filter(
    f => activeCategory === 'all' || f.category === activeCategory
  );

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{FAQ_BADGE_LABELS[currentLanguage] || FAQ_BADGE_LABELS.en}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.faqTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {['all', 'pickup', 'booking', 'diving', 'safari'].map((catId) => {
            const labelMap = FAQ_CATEGORY_LABELS[catId];
            const label = labelMap ? (labelMap[currentLanguage] || labelMap.en) : catId;

            return (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === catId
                    ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                    : 'bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <motion.div 
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const questionText = faq.questions[currentLanguage] || faq.questions.en;
            const answerText = faq.answers[currentLanguage] || faq.answers.en;

            return (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="bg-[#121212] border border-[#242424] rounded-xl overflow-hidden transition-all hover:border-[#333]"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left rtl:text-right p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#181818] transition-colors cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-white">
                    {questionText}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#1c1c1c] text-left rtl:text-right">
                        {answerText}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
