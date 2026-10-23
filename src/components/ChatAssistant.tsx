import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  RotateCcw, 
  Compass, 
  Star, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Bot
} from 'lucide-react';
import { Trip, LanguageCode, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/trips';
import { formatPrice, generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { getLocalizedTrip } from '../utils/localizedTrips';
import { 
  ChatMessage, 
  getInitialGreeting, 
  processUserQuery 
} from '../utils/chatAssistantKnowledge';
import { ProgressiveImage } from './ProgressiveImage';

interface ChatAssistantProps {
  currentLanguage: LanguageCode;
  currentCurrency: CurrencyCode;
  onSelectTrip: (trip: Trip) => void;
  selectedTrip?: Trip | null;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  currentLanguage,
  currentCurrency,
  onSelectTrip,
  selectedTrip
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showInitialPill, setShowInitialPill] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isAr = currentLanguage === 'ar';
  const currencyObj = CURRENCIES[currentCurrency] || CURRENCIES.EUR;

  // Initialize initial welcome message
  useEffect(() => {
    const greeting = getInitialGreeting(currentLanguage);
    setMessages([greeting]);
  }, [currentLanguage]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowInitialPill(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural conversational typing delay (400ms - 700ms)
    setTimeout(() => {
      const response = processUserQuery(text, {
        language: currentLanguage,
        currency: currentCurrency,
        selectedTrip
      });
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 550);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    const greeting = getInitialGreeting(currentLanguage);
    setMessages([greeting]);
  };

  // Helper to format inline markdown text (bolding & linebreaks)
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Parse bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={`${line.trim().startsWith('•') || line.trim().startsWith('1.') || line.trim().startsWith('2.') || line.trim().startsWith('3.') ? 'my-0.5 pl-1' : 'my-1'}`}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-semibold text-white">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Chat Assistant Trigger Button & Invite Pill */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative group p-3.5 rounded-full shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition-all duration-300 flex items-center justify-center cursor-pointer border ${
            isOpen 
              ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37] rotate-90 scale-95' 
              : 'bg-gradient-to-r from-[#D4AF37] to-[#e6c665] border-[#FFD700] text-black hover:scale-110 active:scale-95'
          }`}
          aria-label="Open AquaWay Trip Assistant"
          id="floating-assistant-btn"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-6 h-6" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">
                    1
                  </span>
                </span>
              )}
            </>
          )}
        </button>

        {/* Invite Pill Banner (Visible until first opened or dismissed) */}
        {!isOpen && showInitialPill && (
          <div className="hidden sm:flex items-center gap-2 bg-[#121212]/95 border border-[#D4AF37]/50 px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md animate-fade-in text-xs text-neutral-200">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>
              {isAr ? 'مستشارك السياحي لرحلات الغردقة جاهز لمساعدتك!' : 'Need trip advice or pricing? Ask me!'}
            </span>
            <button 
              onClick={() => setShowInitialPill(false)}
              className="text-neutral-400 hover:text-white ml-1 text-xs"
              aria-label="Dismiss banner"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Main Chat Assistant Window Drawer */}
      {isOpen && (
        <div 
          className="fixed bottom-20 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] max-h-[600px] h-[82vh] sm:h-[580px] bg-[#0e0e0e] border border-[#2c2c2c] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 text-left rtl:text-right"
          id="chat-assistant-panel"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#222222] p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#1c180e] to-[#2a2210] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37]">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#141414]" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{isAr ? 'المساعد الذكي لأكوا واي' : 'AquaWay Tour Assistant'}</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                    Live
                  </span>
                </h3>
                <span className="text-[11px] text-neutral-400 block">
                  {isAr ? 'معرفة شاملة بجميع الرحلات والأسعار' : 'Instant answers & WhatsApp booking'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#202020] transition-colors"
                title={isAr ? 'إعادة بدء المحادثة' : 'Reset Conversation'}
                aria-label="Reset chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#202020] transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Log Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs text-neutral-300">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 shadow-md leading-relaxed ${
                      isAssistant
                        ? 'bg-[#181818] border border-[#282828] text-neutral-200 rounded-tl-sm'
                        : 'bg-[#D4AF37] text-black font-medium rounded-tr-sm'
                    }`}
                  >
                    {isAssistant ? (
                      <div className="text-[12px]">
                        {renderFormattedText(msg.text)}
                      </div>
                    ) : (
                      <p className="text-[12px] whitespace-pre-wrap">{msg.text}</p>
                    )}

                    {/* Matched Excursions Mini Cards */}
                    {isAssistant && msg.matchedTrips && msg.matchedTrips.length > 0 && (
                      <div className="mt-3 space-y-2 pt-2 border-t border-[#2a2a2a]">
                        {msg.matchedTrips.map((t) => {
                          const localized = getLocalizedTrip(t, currentLanguage);
                          const priceStr = formatPrice(t.priceUSD, currencyObj.code, currencyObj.rateToUSD, currencyObj.symbol);
                          const tripWaUrl = generateWhatsAppBookingUrl({
                            tripTitle: localized.title,
                            totalPrice: priceStr,
                            currency: currencyObj.symbol,
                            language: currentLanguage
                          });

                          return (
                            <div 
                              key={t.id}
                              className="bg-[#111111] border border-[#2e2e2e] rounded-xl overflow-hidden p-2.5 flex items-center gap-3 hover:border-[#D4AF37]/50 transition-colors"
                            >
                              <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-[#222222]">
                                <ProgressiveImage
                                  src={t.images[0]}
                                  alt={localized.title}
                                  containerClassName="w-full h-full"
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <h4 className="font-semibold text-white text-[11px] truncate">
                                    {localized.title}
                                  </h4>
                                  <span className="font-serif font-bold text-[#D4AF37] text-xs shrink-0">
                                    {priceStr}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-neutral-400 mt-0.5">
                                  <span className="flex items-center gap-0.5">
                                    <Clock className="w-2.5 h-2.5 text-[#D4AF37]" />
                                    {localized.duration}
                                  </span>
                                  <span>•</span>
                                  <span className="flex items-center gap-0.5 text-amber-300">
                                    <Star className="w-2.5 h-2.5 fill-amber-300" />
                                    {t.rating}
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5 mt-2">
                                  <button
                                    onClick={() => {
                                      onSelectTrip(t);
                                      setIsOpen(false);
                                    }}
                                    className="px-2 py-1 rounded bg-[#222222] hover:bg-[#2c2c2c] text-neutral-200 text-[10px] font-medium transition-colors cursor-pointer"
                                  >
                                    {isAr ? 'عرض التفاصيل' : 'View Details'}
                                  </button>
                                  <a
                                    href={tripWaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 py-1 rounded bg-[#25D366] hover:bg-[#20bd5a] text-black text-[10px] font-bold flex items-center gap-1 transition-colors"
                                  >
                                    <MessageCircle className="w-3 h-3 fill-black text-transparent" />
                                    <span>{isAr ? 'حجز واتساب' : 'Book'}</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Direct Main WhatsApp CTA Button in Message */}
                    {isAssistant && msg.whatsappUrl && (
                      <div className="mt-3 pt-2">
                        <a
                          href={msg.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 fill-black text-transparent shrink-0" />
                          <span>{msg.whatsappButtonText || (isAr ? 'تأكيد الحجز عبر الواتساب' : 'Book on WhatsApp')}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <span className="text-[9px] text-neutral-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Interactive Quick Reply Suggestion Chips */}
                  {isAssistant && msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.quickReplies.map((qr, qrIdx) => (
                        <button
                          key={qrIdx}
                          onClick={() => handleSendMessage(qr)}
                          className="px-2.5 py-1 rounded-full bg-[#161616] hover:bg-[#222222] border border-[#2a2a2a] hover:border-[#D4AF37]/50 text-[10px] text-neutral-300 hover:text-white transition-all cursor-pointer"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#181818] border border-[#282828] text-neutral-400 p-3 rounded-2xl rounded-tl-sm w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input Form */}
          <div className="p-3 bg-[#141414] border-t border-[#222222] shrink-0">
            <div className="flex items-center gap-2 bg-[#1b1b1b] border border-[#303030] rounded-xl px-3 py-1.5 focus-within:border-[#D4AF37] transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isAr ? 'اسأل عن أي رحلة، الأسعار، أو التوصيل...' : 'Ask about tours, prices, or pickups...'}
                className="flex-1 bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none py-1"
                id="chat-assistant-input"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  inputValue.trim()
                    ? 'bg-[#D4AF37] text-black hover:bg-[#FFD700]'
                    : 'text-neutral-600 cursor-not-allowed'
                }`}
                aria-label="Send message"
                id="chat-assistant-send-btn"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct WhatsApp Quick Switcher Link */}
            <div className="flex items-center justify-between text-[10px] text-neutral-500 px-1 pt-2">
              <span>{isAr ? 'متاح 24/7 بدون اتصال خارجي' : 'Internal Tour Assistant • 24/7'}</span>
              <a
                href={generateWhatsAppBookingUrl({ notes: 'Switched from live assistant chat' })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
              >
                <MessageCircle className="w-3 h-3 fill-emerald-400 text-transparent" />
                <span>{isAr ? 'واتساب مباشر' : 'Direct WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
