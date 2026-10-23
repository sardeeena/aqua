import React from 'react';
import { Navigation, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { LanguageCode } from '../types';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';

interface RedSeaMapSectionProps {
  currentLanguage: LanguageCode;
}

interface MapHighlight {
  name: string;
  type: string;
  desc: string;
}

const MAP_HIGHLIGHTS_DATA: Record<LanguageCode, MapHighlight[]> = {
  en: [
    {
      name: 'Hurghada New Marina',
      type: 'Boat Departure Pier',
      desc: 'Where you board our comfortable private boats and yachts'
    },
    {
      name: 'Giftun Island (Orange Bay)',
      type: 'Island & Lagoon',
      desc: 'Crystal clear turquoise water and shallow white sand beach'
    },
    {
      name: 'Shaab El Erg (Dolphin House)',
      type: 'Dolphin Reef',
      desc: 'Beautiful natural reef where wild dolphin pods swim freely'
    },
    {
      name: 'Eastern Sahara Desert Camp',
      type: 'Desert Camp',
      desc: 'Golden dunes, friendly Bedouin camp, and stargazing telescopes'
    }
  ],
  de: [
    {
      name: 'New Marina Hurghada',
      type: 'Bootsablegeplatz',
      desc: 'Hier gehen Sie an Bord unserer komfortablen Yachten und Ausflugsboote'
    },
    {
      name: 'Giftun Insel (Orange Bay)',
      type: 'Insel & Lagune',
      desc: 'Kristallklares türkises Wasser und feiner weißer Sandstrand'
    },
    {
      name: 'Shaab El Erg (Delfinhaus)',
      type: 'Delfin-Riff',
      desc: 'Wunderschönes Riff, in dem wilde Delfinschulen frei schwimmen'
    },
    {
      name: 'Wüstencamp Ostsahara',
      type: 'Beduinencamp',
      desc: 'Goldene Dünen, gastfreundliches Beduinendorf und Sternenbeobachtung'
    }
  ],
  ru: [
    {
      name: 'Новая Марина Хургады',
      type: 'Причал отправления',
      desc: 'Место посадки на наши комфортабельные яхты и скоростные катера'
    },
    {
      name: 'Остров Гифтун (Оранж Бэй)',
      type: 'Остров и лагуна',
      desc: 'Кристально бирюзовая вода и мелководный белоснежный пляж'
    },
    {
      name: 'Шааб Эль Эрг (Дом Дельфинов)',
      type: 'Риф дельфинов',
      desc: 'Живописный природный риф, где свободно обитают стаи дельфинов'
    },
    {
      name: 'Лагерь в Аравийской пустыне',
      type: 'Сафари-база',
      desc: 'Золотые песчаные дюны, деревня бедуинов и наблюдение за звездами'
    }
  ],
  pl: [
    {
      name: 'Nowa Marina w Hurghadzie',
      type: 'Molo wypłynięć',
      desc: 'Miejsce wejścia na pokład naszych komfortowych jachtów i łodzi'
    },
    {
      name: 'Wyspa Giftun (Orange Bay)',
      type: 'Wyspa i laguna',
      desc: 'Krystalicznie turkusowa woda i płytka plaża z białym piaskiem'
    },
    {
      name: 'Shaab El Erg (Dom Delfinów)',
      type: 'Rafa delfinów',
      desc: 'Wspaniała rafa koralowa, gdzie w naturze pływają dzikie delfiny'
    },
    {
      name: 'Obóz na Pustyni Wschodniej',
      type: 'Baza safari',
      desc: 'Złociste wydmy, tradycyjna wioska beduińska i teleskopy astronomiczne'
    }
  ],
  fr: [
    {
      name: 'New Marina d’Hurghada',
      type: 'Ponton d’embarquement',
      desc: 'Lieu d’embarquement sur nos bateaux et yachts tout confort'
    },
    {
      name: 'Île Giftun (Orange Bay)',
      type: 'Île & Lagon',
      desc: 'Eaux turquoise cristallines et plage de sable blanc peu profonde'
    },
    {
      name: 'Shaab El Erg (Maison des Dauphins)',
      type: 'Récif des dauphins',
      desc: 'Magnifique récif naturel abritant des groupes de dauphins sauvages'
    },
    {
      name: 'Camp du Désert Oriental',
      type: 'Base Safari',
      desc: 'Dunes dorées, village bédouin chaleureux et télescopes astronomiques'
    }
  ],
  it: [
    {
      name: 'New Marina di Hurghada',
      type: 'Molo di partenza',
      desc: 'Punto di imbarco per le nostre comode imbarcazioni e yacht'
    },
    {
      name: 'Isola Giftun (Orange Bay)',
      type: 'Isola & Laguna',
      desc: 'Acqua turchese cristallina e spiaggia di sabbia bianca'
    },
    {
      name: 'Shaab El Erg (Casa dei Delfini)',
      type: 'Barriera dei delfini',
      desc: 'Splendida barriera naturale dove nuotano banchi di delfini liberi'
    },
    {
      name: 'Accampamento nel Deserto Orientale',
      type: 'Campo Safari',
      desc: 'Dune dorate, accogliente villaggio beduino e osservazione delle stelle'
    }
  ],
  cs: [
    {
      name: 'New Marina Hurghada',
      type: 'Přístaviště odjezdů',
      desc: 'Zde nastupujete na naše pohodlné lodě a soukromé jachty'
    },
    {
      name: 'Ostrov Giftun (Orange Bay)',
      type: 'Ostrov a laguna',
      desc: 'Průzračně tyrkysová voda a mělká pláž s bílým pískem'
    },
    {
      name: 'Shaab El Erg (Delfíní dům)',
      type: 'Delfíní útes',
      desc: 'Nádherný přírodní útes, kde volně plavou divoká hejna delfínů'
    },
    {
      name: 'Kemp ve Východní poušti',
      type: 'Pouštní základna',
      desc: 'Zlatavé písečné duny, beduínská vesnice a astronomické dalekohledy'
    }
  ],
  ar: [
    {
      name: 'مارينا الغردقة الجديدة',
      type: 'مركز الانطلاق',
      desc: 'رصيف صعود اليخوت الخاصة وصالة كبار الزوار VIP لأكوا واي'
    },
    {
      name: 'جزيرة جفتون (أورانج باي)',
      type: 'محمية وطنية',
      desc: 'بحيرة مرجانية فيروزية وشواطئ رملية بيضاء محمية'
    },
    {
      name: 'شعب العرق (بيت الدلافين)',
      type: 'محمية بحرية',
      desc: 'شعاب مرجانية تضم مجموعات دلافين برية في بيئتها الطبيعية'
    },
    {
      name: 'مخيم الصحراء الشرقية',
      type: 'قاعدة السفاري',
      desc: 'كثبان رملية عالية، قرية بدوية، ومرصد تلسكوبات فلكية'
    }
  ]
};

export const RedSeaMapSection: React.FC<RedSeaMapSectionProps> = ({ currentLanguage }) => {
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;
  const mapHighlights = MAP_HIGHLIGHTS_DATA[currentLanguage] || MAP_HIGHLIGHTS_DATA.en;

  return (
    <section id="red-sea-guide" className="py-20 px-4 sm:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>{s.mapBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {s.mapTitleMain} <span className="gold-text-gradient italic">{s.mapTitleHighlight}</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {s.mapSubtitle}
          </p>
        </div>

        {/* Interactive Map Diagram - Centered & Animated */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#111111]/90 backdrop-blur-sm border border-[#262626] rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden text-left rtl:text-right"
        >
          <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#222222]">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {s.mapLocationsTitle}
              </h3>
              <span className="text-xs text-neutral-400">
                {s.mapEgyptText}
              </span>
            </div>
            <span className="px-3 py-1 rounded bg-[#1a170e] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
              {s.mapDailyBadge}
            </span>
          </div>

          {/* Visual stylised Red Sea Map Matrix */}
          <div className="relative bg-[#0d0d0d] border border-[#222222] rounded-xl p-4 sm:p-5 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {mapHighlights.map((item, idx) => (
                <div key={idx} className="bg-[#141414] border border-[#262626] rounded-xl p-3.5 sm:p-4 hover:border-[#D4AF37]/50 transition-colors text-left rtl:text-right">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <span className="text-xs font-bold text-white">{item.name}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] block mb-1">{item.type}</span>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#1f1f1f] text-xs text-neutral-400 flex items-center justify-between flex-wrap gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{s.mapPierCheck}</span>
              </span>
              <span className="text-neutral-500 font-mono text-[11px]">27.2579° N, 33.8116° E</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
