import React, { useState } from 'react';
import { 
  Sun, 
  Waves, 
  Wind, 
  Eye, 
  Compass, 
  Sparkles, 
  Thermometer,
  Anchor
} from 'lucide-react';
import { motion } from 'motion/react';
import { CURRENT_WEATHER_DATA, LOCALIZED_DIVE_SPOTS } from '../data/destinations';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';
import { ProgressiveImage } from './ProgressiveImage';

interface WeatherSeaStationProps {
  currentLanguage: LanguageCode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const weatherBarContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.05
    }
  }
};

const weatherBarHeaderVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const metricGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
};

const metricItemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const WeatherSeaStation: React.FC<WeatherSeaStationProps> = ({ currentLanguage }) => {
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const spots = LOCALIZED_DIVE_SPOTS[currentLanguage] || LOCALIZED_DIVE_SPOTS.en;
  const [selectedSpotId, setSelectedSpotId] = useState(spots[0].id);
  const selectedSpot = spots.find(sp => sp.id === selectedSpotId) || spots[0];

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;
  const weather = CURRENT_WEATHER_DATA[currentLanguage] || CURRENT_WEATHER_DATA.en;

  const toFahrenheit = (c: number) => Math.round((c * 9/5) + 32);

  const displayAirTemp = tempUnit === 'C' ? `${weather.airTempC}°C` : `${toFahrenheit(weather.airTempC)}°F`;
  const displayWaterTemp = tempUnit === 'C' ? `${weather.waterTempC}°C` : `${toFahrenheit(weather.waterTempC)}°F`;

  return (
    <section id="weather-sea" className="py-20 px-4 sm:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -40px 0px" }}
        variants={sectionVariants}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{s.weatherBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {s.weatherTitleMain} <span className="gold-text-gradient italic">{s.weatherTitleHighlight}</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {s.weatherSubtitle}
          </p>
        </div>

        {/* Live Marine Weather Bar - Simplified, Smaller & Fade-in/Fade-out Animated */}
        <motion.div 
          variants={weatherBarContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="bg-[#111111]/90 backdrop-blur-sm border border-[#262626] rounded-xl p-3 sm:p-4 shadow-xl max-w-4xl mx-auto mb-8"
        >
          {/* Top Bar with Unit Switch */}
          <motion.div 
            variants={weatherBarHeaderVariants}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#202020]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                {s.weatherLiveDataBadge}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-neutral-400 font-medium">
                {s.weatherTempUnit}
              </span>
              <div className="bg-[#1a1a1a] p-0.5 rounded border border-[#333333] flex items-center gap-0.5">
                <button
                  onClick={() => setTempUnit('C')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                    tempUnit === 'C' ? 'bg-[#D4AF37] text-black' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  °C
                </button>
                <button
                  onClick={() => setTempUnit('F')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                    tempUnit === 'F' ? 'bg-[#D4AF37] text-black' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  °F
                </button>
              </div>
            </div>
          </motion.div>

          {/* 6 Metric Cards Grid with Sequential Staggered Entrance */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2.5"
            variants={metricGridVariants}
          >
            {/* Air Temp */}
            <motion.div variants={metricItemVariants} className="bg-[#151515] hover:bg-[#181818] transition-colors border border-[#222222] rounded-lg p-2 text-center">
              <Sun className="w-3.5 h-3.5 text-[#FFD700] mx-auto mb-1" />
              <span className="text-[9px] text-neutral-400 block mb-0.5">{t.airTemp}</span>
              <span className="font-serif text-sm sm:text-base font-bold text-white">
                {displayAirTemp}
              </span>
            </motion.div>

            {/* Water Temp */}
            <motion.div variants={metricItemVariants} className="bg-[#151515] hover:bg-[#181818] transition-colors border border-[#222222] rounded-lg p-2 text-center">
              <Thermometer className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
              <span className="text-[9px] text-neutral-400 block mb-0.5">{t.waterTemp}</span>
              <span className="font-serif text-sm sm:text-base font-bold text-white">
                {displayWaterTemp}
              </span>
            </motion.div>

            {/* Wind Speed */}
            <motion.div variants={metricItemVariants} className="bg-[#151515] hover:bg-[#181818] transition-colors border border-[#222222] rounded-lg p-2 text-center">
              <Wind className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
              <span className="text-[9px] text-neutral-400 block mb-0.5">{t.windSpeed}</span>
              <span className="font-serif text-sm sm:text-base font-bold text-white">
                {weather.windSpeedKnots} <span className="text-[9px] font-sans font-normal text-neutral-400">kts</span>
              </span>
            </motion.div>

            {/* Wave Swell */}
            <motion.div variants={metricItemVariants} className="bg-[#151515] hover:bg-[#181818] transition-colors border border-[#222222] rounded-lg p-2 text-center">
              <Waves className="w-3.5 h-3.5 text-teal-400 mx-auto mb-1" />
              <span className="text-[9px] text-neutral-400 block mb-0.5">{t.waveHeight}</span>
              <span className="font-serif text-sm sm:text-base font-bold text-white">
                {weather.waveHeightM} <span className="text-[9px] font-sans font-normal text-neutral-400">m</span>
              </span>
            </motion.div>

            {/* Visibility */}
            <motion.div variants={metricItemVariants} className="bg-[#151515] hover:bg-[#181818] transition-colors border border-[#222222] rounded-lg p-2 text-center">
              <Eye className="w-3.5 h-3.5 text-indigo-400 mx-auto mb-1" />
              <span className="text-[9px] text-neutral-400 block mb-0.5">{t.visibility}</span>
              <span className="font-serif text-sm sm:text-base font-bold text-white">
                30+ <span className="text-[9px] font-sans font-normal text-neutral-400">m</span>
              </span>
            </motion.div>

            {/* Dive Suitability */}
            <motion.div variants={metricItemVariants} className="bg-[#18150d] hover:bg-[#1c180f] transition-colors border border-[#D4AF37]/35 rounded-lg p-2 text-center">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-1" />
              <span className="text-[9px] text-neutral-300 block mb-0.5">{t.diveConditions}</span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#D4AF37]">
                {weather.diveSuitability}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive Dive Reefs & Marine Spots Showcase */}
        <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6 sm:p-8 shadow-xl text-left rtl:text-right">
          <div className="mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              {s.weatherReefsHeading}
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm">
              {s.weatherReefsSubheading}
            </p>
          </div>

          {/* Reef Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {spots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedSpotId(spot.id)}
                className={`p-3 rounded-xl text-left rtl:text-right border transition-all cursor-pointer ${
                  selectedSpot.id === spot.id
                    ? 'bg-[#1c180e] border-[#D4AF37] shadow-lg'
                    : 'bg-[#161616] border-[#262626] hover:border-[#444444]'
                }`}
              >
                <div className="text-xs font-bold text-white">{currentLanguage === 'ar' && spot.arabicName ? spot.arabicName : spot.name}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{spot.location}</div>
              </button>
            ))}
          </div>

          {/* Active Reef Spotlight Detail */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#161616] border border-[#262626] rounded-xl p-5 sm:p-6">
            <div className="md:col-span-5 h-56 sm:h-64 rounded-lg overflow-hidden relative">
              <ProgressiveImage
                src={selectedSpot.image}
                alt={selectedSpot.name}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-10 bg-black/80 px-2.5 py-1 rounded text-xs font-bold text-[#D4AF37]">
                {selectedSpot.level} {s.weatherLevel}
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between text-left rtl:text-right">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-xl font-bold text-white">
                    {currentLanguage === 'ar' && selectedSpot.arabicName ? selectedSpot.arabicName : selectedSpot.name}
                  </h4>
                  {selectedSpot.arabicName && currentLanguage !== 'ar' && (
                    <span className="text-xs font-arabic text-[#D4AF37]">
                      {selectedSpot.arabicName}
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {selectedSpot.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="bg-[#1c1c1c] p-2.5 rounded border border-[#2a2a2a]">
                    <span className="text-[10px] text-neutral-400 block uppercase font-bold">
                      {s.weatherDepthRange}
                    </span>
                    <span className="font-semibold text-white">{selectedSpot.depth}</span>
                  </div>
                  <div className="bg-[#1c1c1c] p-2.5 rounded border border-[#2a2a2a]">
                    <span className="text-[10px] text-neutral-400 block uppercase font-bold">
                      {s.weatherCurrentSpeed}
                    </span>
                    <span className="font-semibold text-white">{selectedSpot.current}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-neutral-400 block uppercase font-bold mb-2">
                    {s.weatherResidentMarine}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSpot.marineLife.map((creature, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#202020] border border-[#333333] text-neutral-200 text-xs flex items-center gap-1"
                      >
                        <Anchor className="w-3 h-3 text-[#D4AF37]" />
                        <span>{creature}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
