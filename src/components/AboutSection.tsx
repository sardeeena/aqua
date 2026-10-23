import React from 'react';
import { ShieldCheck, Compass, Heart } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';
import { ProgressiveImage } from './ProgressiveImage';

interface AboutSectionProps {
  currentLanguage: LanguageCode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;

  return (
    <section id="about" className="py-20 px-4 sm:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Story Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#282828] shadow-2xl">
              <ProgressiveImage
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                alt="AquaWay Red Sea Founder & Vessel"
                containerClassName="w-full h-80 sm:h-96"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="inline-block px-3 py-1 rounded bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider mb-2">
                  {s.aboutLicenseBadge}
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  AquaWay Tours Hurghada
                </h3>
                <p className="text-xs text-neutral-300">
                  {s.aboutRegistered}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
              <Compass className="w-3.5 h-3.5" />
              <span>{s.aboutBadge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.aboutTitle}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              <p>
                {t.aboutStory}
              </p>
              <p>
                {s.aboutStory2}
              </p>
            </div>

            {/* Environmental & Safety Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#141414] border border-[#242424] p-4 rounded-xl text-left rtl:text-right">
                <Heart className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="font-serif text-sm font-bold text-white mb-1">
                  {s.aboutEcoTitle}
                </h4>
                <p className="text-xs text-neutral-400">
                  {s.aboutEcoDesc}
                </p>
              </div>

              <div className="bg-[#141414] border border-[#242424] p-4 rounded-xl text-left rtl:text-right">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="font-serif text-sm font-bold text-white mb-1">
                  {s.aboutSafetyTitle}
                </h4>
                <p className="text-xs text-neutral-400">
                  {s.aboutSafetyDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
