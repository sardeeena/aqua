import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  MessageCircle, 
  Check, 
  Send 
} from 'lucide-react';
import { LanguageCode } from '../types';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { CUSTOM_PLANNER_TRANSLATIONS } from '../data/extendedTranslations';
import { formatInternationalPhone } from '../utils/phoneFormatter';

interface CustomTripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage?: LanguageCode;
}

export const CustomTripPlannerModal: React.FC<CustomTripPlannerModalProps> = ({
  isOpen,
  onClose,
  currentLanguage = 'en' as LanguageCode
}) => {
  if (!isOpen) return null;

  const activeLang: LanguageCode = currentLanguage;
  const t = CUSTOM_PLANNER_TRANSLATIONS[activeLang] || CUSTOM_PLANNER_TRANSLATIONS.en;

  const [tripType, setTripType] = useState('private-yacht');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('family');
  const [hotel, setHotel] = useState('');
  const [celebration, setCelebration] = useState('');
  const [catering, setCatering] = useState<string[]>(['seafood']);
  const [notes, setNotes] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleCatering = (item: string) => {
    if (catering.includes(item)) {
      setCatering(catering.filter(c => c !== item));
    } else {
      setCatering([...catering, item]);
    }
  };

  const tripTypesList = [
    { id: 'private-yacht', label: t.types.privateYacht },
    { id: 'private-speedboat', label: t.types.privateSpeedboat },
    { id: 'private-safari', label: t.types.privateSafari },
    { id: 'island-sunset', label: t.types.islandSunset },
    { id: 'cairo-luxor-flight', label: t.types.cairoLuxor },
    { id: 'dive-expedition', label: t.types.diveExpedition }
  ];

  const cateringList = [
    { id: 'seafood', label: t.cateringOptions.seafood },
    { id: 'drinks', label: t.cateringOptions.drinksFruit },
    { id: 'bbq', label: t.cateringOptions.bbq },
    { id: 'vegan', label: t.cateringOptions.vegan }
  ];

  const selectedTripTypeLabel = tripTypesList.find(item => item.id === tripType)?.label || tripType;
  const selectedCateringLabels = catering
    .map(id => cateringList.find(c => c.id === id)?.label || id)
    .join(', ');

  const whatsappUrl = generateWhatsAppBookingUrl({
    tripTitle: `Private VIP Trip (${selectedTripTypeLabel})`,
    date: date || 'Flexible dates',
    hotel: hotel || 'Hurghada Hotel',
    name: name,
    notes: `${celebration ? `Occasion: ${celebration} | ` : ''}Catering: ${selectedCateringLabels} | ${notes}`,
    language: activeLang
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      await fetch('/api/booking-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          tripType: selectedTripTypeLabel,
          date: date || 'Flexible dates',
          hotel: hotel || 'Hurghada Hotel',
          guests,
          catering: selectedCateringLabels ? [selectedCateringLabels] : [],
          celebration,
          notes,
          language: activeLang,
        }),
      });
    } catch (err) {
      console.warn('Error sending custom planner request to server:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#2e2e2e] rounded-2xl p-6 sm:p-8 shadow-2xl my-auto text-left rtl:text-right">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-neutral-400 hover:text-white p-1.5 rounded-full bg-[#1c1c1c] border border-white/10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{t.badge}</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          {t.title}
        </h3>
        <p className="text-xs text-neutral-400 mb-6">
          {t.subtitle}
        </p>

        {submitted ? (
          <div className="bg-[#122416] border border-emerald-500/40 rounded-xl p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-white">
              {t.successTitle}
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {t.successDesc} {phone && <>({phone})</>}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>{t.successWhatsAppBtn}</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left rtl:text-right">
            {/* Charter Experience Type */}
            <div>
              <label className="text-neutral-300 font-semibold block mb-1.5">
                {t.tripTypeLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {tripTypesList.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setTripType(item.id)}
                    className={`p-2.5 rounded-lg border text-left rtl:text-right text-xs transition-all cursor-pointer ${
                      tripType === item.id
                        ? 'bg-[#1e190e] border-[#D4AF37] text-white font-bold'
                        : 'bg-[#181818] border-[#2a2a2a] text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-neutral-400 font-semibold block mb-1">
                  {t.dateLabel}
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-neutral-400 font-semibold block mb-1">
                  {t.guestsLabel}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="couples">{t.guestOptions.couples}</option>
                  <option value="family">{t.guestOptions.family}</option>
                  <option value="group">{t.guestOptions.group}</option>
                  <option value="largeEvent">{t.guestOptions.largeEvent}</option>
                </select>
              </div>
            </div>

            {/* Occasion / Celebration */}
            <div>
              <label className="text-neutral-400 font-semibold block mb-1">
                {t.occasionLabel}
              </label>
              <input
                type="text"
                placeholder={t.occasionPlaceholder}
                value={celebration}
                onChange={(e) => setCelebration(e.target.value)}
                className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Premium Catering Preferences */}
            <div>
              <label className="text-neutral-400 font-semibold block mb-1.5">
                {t.cateringLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cateringList.map((cat) => (
                  <label
                    key={cat.id}
                    onClick={() => toggleCatering(cat.id)}
                    className={`p-2 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                      catering.includes(cat.id)
                        ? 'bg-[#1a170e] border-[#D4AF37] text-white'
                        : 'bg-[#181818] border-[#282828] text-neutral-400'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                      catering.includes(cat.id) ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-neutral-500'
                    }`}>
                      {catering.includes(cat.id) && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-neutral-400 font-semibold block mb-1">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-neutral-400 font-semibold block mb-1">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  placeholder="e.g. +20 100 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(formatInternationalPhone(e.target.value))}
                  className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                <span>{t.whatsappBtn}</span>
              </a>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#D4AF37] hover:bg-[#FFD700] text-black font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
                <span>{t.submitBtn}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
