export interface CountryDialCode {
  country: string;
  code: string;
  dialCode: string;
  flag: string;
  format: string;
}

export const POPULAR_DIAL_CODES: CountryDialCode[] = [
  { country: 'Egypt', code: 'EG', dialCode: '+20', flag: '🇪🇬', format: '+20 XXX XXX XXXX' },
  { country: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪', format: '+49 XXX XXXXXXX' },
  { country: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧', format: '+44 XXXX XXXXXX' },
  { country: 'Poland', code: 'PL', dialCode: '+48', flag: '🇵🇱', format: '+48 XXX XXX XXX' },
  { country: 'Czech Republic', code: 'CZ', dialCode: '+420', flag: '🇨🇿', format: '+420 XXX XXX XXX' },
  { country: 'Russia', code: 'RU', dialCode: '+7', flag: '🇷🇺', format: '+7 (XXX) XXX-XX-XX' },
  { country: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷', format: '+33 X XX XX XX XX' },
  { country: 'Italy', code: 'IT', dialCode: '+39', flag: '🇮🇹', format: '+39 XXX XXX XXXX' },
  { country: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸', format: '+1 (XXX) XXX-XXXX' },
  { country: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦', format: '+966 XX XXX XXXX' },
  { country: 'UAE', code: 'AE', dialCode: '+971', flag: '🇦🇪', format: '+971 XX XXX XXXX' },
  { country: 'Switzerland', code: 'CH', dialCode: '+41', flag: '🇨🇭', format: '+41 XX XXX XX XX' },
  { country: 'Austria', code: 'AT', dialCode: '+43', flag: '🇦🇹', format: '+43 XXX XXXXXXX' },
  { country: 'Netherlands', code: 'NL', dialCode: '+31', flag: '🇳🇱', format: '+31 X XXXXXXXX' },
  { country: 'Belgium', code: 'BE', dialCode: '+32', flag: '🇧🇪', format: '+32 XXX XX XX XX' },
  { country: 'Sweden', code: 'SE', dialCode: '+46', flag: '🇸🇪', format: '+46 XX XXX XX XX' },
];

/**
 * Clean and format raw phone input into an international E.164-compatible readable string
 */
export function formatInternationalPhone(rawInput: string): string {
  if (!rawInput) return '';

  // Preserve leading '+' if user typed it or if it starts with digits
  const hasPlus = rawInput.trim().startsWith('+');
  
  // Extract all digits
  const digits = rawInput.replace(/\D/g, '');
  if (!digits) return hasPlus ? '+' : '';

  // If starts with 00, treat as +
  let cleanDigits = digits;
  if (cleanDigits.startsWith('00')) {
    cleanDigits = cleanDigits.slice(2);
  }

  // 1. Egypt (+20)
  if (cleanDigits.startsWith('20')) {
    const rest = cleanDigits.slice(2);
    if (rest.length === 0) return '+20';
    if (rest.length <= 3) return `+20 ${rest}`;
    if (rest.length <= 6) return `+20 ${rest.slice(0, 3)} ${rest.slice(3)}`;
    return `+20 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6, 10)}`;
  }

  // 2. USA / Canada (+1)
  if (cleanDigits.startsWith('1') && cleanDigits.length <= 11) {
    const rest = cleanDigits.slice(1);
    if (rest.length === 0) return '+1';
    if (rest.length <= 3) return `+1 (${rest}`;
    if (rest.length <= 6) return `+1 (${rest.slice(0, 3)}) ${rest.slice(3)}`;
    return `+1 (${rest.slice(0, 3)}) ${rest.slice(3, 6)}-${rest.slice(6, 10)}`;
  }

  // 3. Russia / Kazakhstan (+7)
  if (cleanDigits.startsWith('7')) {
    const rest = cleanDigits.slice(1);
    if (rest.length === 0) return '+7';
    if (rest.length <= 3) return `+7 (${rest}`;
    if (rest.length <= 6) return `+7 (${rest.slice(0, 3)}) ${rest.slice(3)}`;
    if (rest.length <= 8) return `+7 (${rest.slice(0, 3)}) ${rest.slice(3, 6)}-${rest.slice(6)}`;
    return `+7 (${rest.slice(0, 3)}) ${rest.slice(3, 6)}-${rest.slice(6, 8)}-${rest.slice(8, 10)}`;
  }

  // 4. Germany (+49)
  if (cleanDigits.startsWith('49')) {
    const rest = cleanDigits.slice(2);
    if (rest.length === 0) return '+49';
    if (rest.length <= 3) return `+49 ${rest}`;
    if (rest.length <= 7) return `+49 ${rest.slice(0, 3)} ${rest.slice(3)}`;
    return `+49 ${rest.slice(0, 3)} ${rest.slice(3, 7)} ${rest.slice(7, 11)}`;
  }

  // 5. UK (+44)
  if (cleanDigits.startsWith('44')) {
    const rest = cleanDigits.slice(2);
    if (rest.length === 0) return '+44';
    if (rest.length <= 4) return `+44 ${rest}`;
    return `+44 ${rest.slice(0, 4)} ${rest.slice(4, 10)}`;
  }

  // 6. Poland (+48)
  if (cleanDigits.startsWith('48')) {
    const rest = cleanDigits.slice(2);
    if (rest.length === 0) return '+48';
    if (rest.length <= 3) return `+48 ${rest}`;
    if (rest.length <= 6) return `+48 ${rest.slice(0, 3)} ${rest.slice(3)}`;
    return `+48 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6, 9)}`;
  }

  // 7. Czech Republic (+420)
  if (cleanDigits.startsWith('420')) {
    const rest = cleanDigits.slice(3);
    if (rest.length === 0) return '+420';
    if (rest.length <= 3) return `+420 ${rest}`;
    if (rest.length <= 6) return `+420 ${rest.slice(0, 3)} ${rest.slice(3)}`;
    return `+420 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6, 9)}`;
  }

  // 8. France (+33)
  if (cleanDigits.startsWith('33')) {
    const rest = cleanDigits.slice(2);
    if (rest.length === 0) return '+33';
    if (rest.length <= 1) return `+33 ${rest}`;
    if (rest.length <= 3) return `+33 ${rest.slice(0, 1)} ${rest.slice(1)}`;
    if (rest.length <= 5) return `+33 ${rest.slice(0, 1)} ${rest.slice(1, 3)} ${rest.slice(3)}`;
    if (rest.length <= 7) return `+33 ${rest.slice(0, 1)} ${rest.slice(1, 3)} ${rest.slice(3, 5)} ${rest.slice(5)}`;
    return `+33 ${rest.slice(0, 1)} ${rest.slice(1, 3)} ${rest.slice(3, 5)} ${rest.slice(5, 7)} ${rest.slice(7, 9)}`;
  }

  // 9. Italy (+39)
  if (cleanDigits.startsWith('39')) {
    const rest = cleanDigits.slice(2);
    if (rest.length === 0) return '+39';
    if (rest.length <= 3) return `+39 ${rest}`;
    if (rest.length <= 6) return `+39 ${rest.slice(0, 3)} ${rest.slice(3)}`;
    return `+39 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6, 10)}`;
  }

  // 10. Saudi (+966) / UAE (+971)
  if (cleanDigits.startsWith('966') || cleanDigits.startsWith('971')) {
    const prefix = cleanDigits.slice(0, 3);
    const rest = cleanDigits.slice(3);
    if (rest.length === 0) return `+${prefix}`;
    if (rest.length <= 2) return `+${prefix} ${rest}`;
    if (rest.length <= 5) return `+${prefix} ${rest.slice(0, 2)} ${rest.slice(2)}`;
    return `+${prefix} ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5, 9)}`;
  }

  // Generic fallback: format as +XX XXX XXX XXXX
  const prefixLength = cleanDigits.length > 10 ? (cleanDigits.length > 12 ? 3 : 2) : 2;
  const cc = cleanDigits.slice(0, prefixLength);
  const rem = cleanDigits.slice(prefixLength);

  if (!rem) return `+${cc}`;
  if (rem.length <= 3) return `+${cc} ${rem}`;
  if (rem.length <= 6) return `+${cc} ${rem.slice(0, 3)} ${rem.slice(3)}`;
  if (rem.length <= 10) return `+${cc} ${rem.slice(0, 3)} ${rem.slice(3, 6)} ${rem.slice(6)}`;
  return `+${cc} ${rem.slice(0, 3)} ${rem.slice(3, 6)} ${rem.slice(6, 10)} ${rem.slice(10, 14)}`;
}

/**
 * Check if the phone number has a reasonable international length (7 to 15 digits)
 */
export function isValidInternationalPhone(phone: string): boolean {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}
