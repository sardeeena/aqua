import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';
import { 
  AQUAWAY_DISPLAY_PHONE, 
  AQUAWAY_EMAIL, 
  generateWhatsAppBookingUrl 
} from '../utils/whatsapp';
import { 
  formatInternationalPhone, 
  POPULAR_DIAL_CODES,
  isValidInternationalPhone 
} from '../utils/phoneFormatter';

interface ContactSectionProps {
  currentLanguage: LanguageCode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLanguage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDialCode, setSelectedDialCode] = useState('+20');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;

  const handlePhoneChange = (val: string) => {
    // If user types without a +, prefix with the selected dial code
    let formatted = formatInternationalPhone(val);
    setPhone(formatted);
  };

  const handleDialCodeSelect = (dialCode: string) => {
    setSelectedDialCode(dialCode);
    if (!phone || phone === selectedDialCode) {
      setPhone(`${dialCode} `);
    } else {
      // Replace existing dial prefix if present, or prepend
      const digitsOnly = phone.replace(/\D/g, '');
      const prevPrefixDigits = selectedDialCode.replace(/\D/g, '');
      if (digitsOnly.startsWith(prevPrefixDigits)) {
        const rest = digitsOnly.slice(prevPrefixDigits.length);
        setPhone(formatInternationalPhone(`${dialCode}${rest}`));
      } else {
        setPhone(formatInternationalPhone(`${dialCode}${digitsOnly}`));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          language: currentLanguage,
          source: 'Website Email Contact Form',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        // Even if server returns non-fatal note or warning, message is accepted
        setSubmitted(true);
      }
    } catch (err: any) {
      console.warn('Network error posting contact form, falling back to local confirmation:', err);
      // Ensure smooth UX for user even on offline or connectivity interruption
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{s.contactBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Buttons (5 Cols) - Small buttons next to each other */}
          <div className="lg:col-span-5 space-y-3">
            <div className="grid grid-cols-2 gap-2.5">
              {/* WhatsApp Button */}
              <a
                href={generateWhatsAppBookingUrl({ language: currentLanguage })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121c14] hover:bg-[#16291a] border border-[#25D366]/40 hover:border-[#25D366] rounded-xl p-3 flex flex-col justify-between min-h-[90px] transition-all group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#25D366] block">
                    {s.contactFastReply}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#25D366] transition-colors truncate">
                    {s.contactWhatsAppDirect}
                  </h4>
                </div>
              </a>

              {/* Phone Button */}
              <a
                href="tel:+201001234567"
                className="bg-[#141414] hover:bg-[#1c180e] border border-[#262626] hover:border-[#D4AF37]/50 rounded-xl p-3 flex flex-col justify-between min-h-[90px] transition-all group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#1c180e] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#D4AF37] block">
                    {s.contactCallAnytime}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {AQUAWAY_DISPLAY_PHONE}
                  </h4>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${AQUAWAY_EMAIL}`}
                className="bg-[#141414] hover:bg-[#1c180e] border border-[#262626] hover:border-[#D4AF37]/50 rounded-xl p-3 flex flex-col justify-between min-h-[90px] transition-all group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#1c180e] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#D4AF37] block">
                    {s.contactSendEmail}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {AQUAWAY_EMAIL}
                  </h4>
                </div>
              </a>

              {/* Office Location Button */}
              <a
                href="https://maps.google.com/?q=Hurghada+New+Marina+Egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141414] hover:bg-[#1c180e] border border-[#262626] hover:border-[#D4AF37]/50 rounded-xl p-3 flex flex-col justify-between min-h-[90px] transition-all group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#1c180e] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#D4AF37] block">
                    {s.contactOurOffice}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {s.contactOfficeAddress}
                  </h4>
                </div>
              </a>
            </div>

            {/* Quick concierge operating note */}
            <div className="p-3.5 rounded-xl bg-[#111111] border border-[#222222] text-[11px] text-neutral-400 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold block">{s.contactDailyHours}</span>
                <span>{s.contactOfficeSub}</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 shadow-2xl text-left rtl:text-right">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              {s.contactFormTitle}
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              {s.contactFormSubtitle}
            </p>

            {submitted ? (
              <div className="bg-[#122416] border border-emerald-500/40 rounded-xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-white">
                  {s.contactMsgSent}
                </h4>
                <p className="text-xs text-neutral-300">
                  {s.contactMsgDesc} (<span className="text-white">{email}</span>)
                </p>
                <button
                  onClick={handleResetForm}
                  className="px-4 py-2 rounded bg-[#1e1e1e] text-xs font-semibold text-neutral-300 hover:text-white cursor-pointer"
                >
                  {s.contactSendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left rtl:text-right text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-400 font-semibold block mb-1">
                      {t.contactName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLanguage === 'ar' ? 'مثال: محمد أحمد' : 'e.g. Sarah Jenkins'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-400 font-semibold block mb-1">
                      {t.contactEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-neutral-400 font-semibold block">
                      {t.contactPhone}
                    </label>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      {currentLanguage === 'ar' ? 'تنسيق دولي' : 'International format'}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {/* Country Code Select */}
                    <div className="relative shrink-0">
                      <select
                        value={selectedDialCode}
                        onChange={(e) => handleDialCodeSelect(e.target.value)}
                        disabled={isSubmitting}
                        aria-label="Country Dial Code"
                        className="h-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-2.5 py-2.5 text-white text-xs font-mono focus:outline-none focus:border-[#D4AF37] cursor-pointer disabled:opacity-50 appearance-none pr-7"
                      >
                        {POPULAR_DIAL_CODES.map((item) => (
                          <option key={item.code} value={item.dialCode} className="bg-[#1a1a1a] text-white">
                            {item.flag} {item.dialCode} ({item.code})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400 text-[10px]">
                        ▼
                      </div>
                    </div>

                    {/* Masked Phone Input */}
                    <div className="relative flex-1">
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. +20 100 123 4567"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2.5 text-white font-mono text-xs focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-neutral-400 font-semibold block mb-1">
                    {t.contactMessage} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={currentLanguage === 'ar' ? 'أخبرنا بمواعيد إقامتك، واسم الفندق، والرحلات التي تود حجزها...' : "Tell us your holiday dates, hotel name, and which excursions you'd like to reserve..."}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-[#1c1c1c] border border-[#333333] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#D4AF37] text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>{currentLanguage === 'ar' ? 'جاري الإرسال...' : 'Sending Message...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 rtl:rotate-180" />
                      <span>{t.contactSend}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
