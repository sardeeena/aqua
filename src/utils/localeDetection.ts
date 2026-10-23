import { LanguageCode, CurrencyCode } from '../types';

const STORAGE_KEY_LANG = 'aquaway_user_language';
const STORAGE_KEY_CURR = 'aquaway_user_currency';

const SUPPORTED_LANGUAGES: LanguageCode[] = ['en', 'de', 'ru', 'pl', 'fr', 'it', 'cs', 'ar'];
const SUPPORTED_CURRENCIES: CurrencyCode[] = ['EUR', 'USD', 'GBP', 'EGP', 'PLN', 'CHF'];

/**
 * Detect the optimal LanguageCode from the browser settings and stored preference.
 */
export function detectUserLanguage(): LanguageCode {
  // 1. Check if user already manually selected a language in a previous session
  try {
    const saved = localStorage.getItem(STORAGE_KEY_LANG) as LanguageCode | null;
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // localStorage might be unavailable or restricted in sandboxed environments
  }

  // 2. Inspect browser languages array (e.g. navigator.languages or navigator.language)
  if (typeof navigator !== 'undefined') {
    const browserLangs = navigator.languages || [navigator.language || ''];
    
    for (const rawLang of browserLangs) {
      if (!rawLang) continue;
      const lower = rawLang.toLowerCase();
      const code = lower.split('-')[0];

      if (code === 'de') return 'de';
      if (code === 'ru' || code === 'uk' || code === 'be' || code === 'kk') return 'ru';
      if (code === 'pl') return 'pl';
      if (code === 'fr') return 'fr';
      if (code === 'it') return 'it';
      if (code === 'cs' || code === 'sk') return 'cs';
      if (code === 'ar') return 'ar';
      if (code === 'en') return 'en';
    }
  }

  // Default fallback for international Red Sea travelers
  return 'en';
}

/**
 * Detect the optimal CurrencyCode based on user's timezone, browser locale, and detected language.
 */
export function detectUserCurrency(detectedLang?: LanguageCode): CurrencyCode {
  // 1. Check if user already manually selected a currency in a previous session
  try {
    const saved = localStorage.getItem(STORAGE_KEY_CURR) as CurrencyCode | null;
    if (saved && SUPPORTED_CURRENCIES.includes(saved)) {
      return saved;
    }
  } catch {
    // localStorage might be unavailable or restricted in sandboxed environments
  }

  // 2. Check Timezone & Regional Locale
  try {
    const tz = (typeof Intl !== 'undefined' && Intl.DateTimeFormat) 
      ? Intl.DateTimeFormat().resolvedOptions().timeZone || '' 
      : '';
    const browserLang = (typeof navigator !== 'undefined' ? navigator.language || '' : '').toLowerCase();

    // Egypt / Arabic locale
    if (tz === 'Africa/Cairo' || browserLang.includes('eg') || detectedLang === 'ar') {
      return 'EGP';
    }

    // Poland
    if (tz === 'Europe/Warsaw' || browserLang.includes('pl') || detectedLang === 'pl') {
      return 'PLN';
    }

    // United Kingdom
    if (tz === 'Europe/London' || browserLang === 'en-gb') {
      return 'GBP';
    }

    // Switzerland
    if (tz === 'Europe/Zurich' || browserLang.includes('ch')) {
      return 'CHF';
    }

    // United States / Canada / Americas
    if (
      tz.startsWith('America/') || 
      browserLang === 'en-us' || 
      browserLang === 'en-ca'
    ) {
      return 'USD';
    }

    // Germany, Austria, Italy, France, Czech Republic, Eurozone
    if (
      tz.startsWith('Europe/') ||
      detectedLang === 'de' ||
      detectedLang === 'fr' ||
      detectedLang === 'it' ||
      detectedLang === 'cs'
    ) {
      return 'EUR';
    }
  } catch {
    // Fallback on error
  }

  return 'EUR';
}

/**
 * Save user language choice to localStorage
 */
export function persistUserLanguage(lang: LanguageCode): void {
  try {
    localStorage.setItem(STORAGE_KEY_LANG, lang);
  } catch {
    // ignore
  }
}

/**
 * Save user currency choice to localStorage
 */
export function persistUserCurrency(curr: CurrencyCode): void {
  try {
    localStorage.setItem(STORAGE_KEY_CURR, curr);
  } catch {
    // ignore
  }
}
