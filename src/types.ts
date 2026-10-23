export type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'EGP' | 'PLN' | 'CHF';

export type LanguageCode = 'en' | 'de' | 'ru' | 'pl' | 'fr' | 'it' | 'cs' | 'ar';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  rateToUSD: number; // 1 USD = rateToUSD Currency
  label: string;
}

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export type TripCategory = 
  | 'all'
  | 'island'
  | 'sea'
  | 'adventure'
  | 'safari'
  | 'cultural'
  | 'wellness'
  | 'transfer'
  | 'services';

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  category: TripCategory;
  categoryLabel: string;
  subtitle: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  duration: string;
  groupSize: string;
  departureTime: string;
  pickupTime: string;
  pickupInfo: string;
  priceEUR: number;
  priceUSD: number;
  originalPriceEUR?: number;
  originalPriceUSD?: number;
  highlights: string[];
  description: string;
  fullDescription: string;
  itinerary: ItineraryItem[];
  included: string[];
  excluded: string[];
  whatToBring: string[];
  minAge: number;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  images: string[];
  isBestseller?: boolean;
  isVIP?: boolean;
  isEcoFriendly?: boolean;
  meetingPoint: string;
  bookingUrl?: string;
  pageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  country: string;
  countryCode: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  tourSlug: string;
  tourName: string;
  verified: boolean;
  source: 'tripadvisor' | 'google' | 'direct';
  avatar?: string;
}

export interface FAQItem {
  id: string;
  category: 'booking' | 'pickup' | 'diving' | 'safari' | 'payment' | 'general';
  categoryLabel: string;
  arabicCategoryLabel?: string;
  question: string;
  arabicQuestion?: string;
  answer: string;
  arabicAnswer?: string;
}

export interface DiveSpot {
  id: string;
  name: string;
  arabicName?: string;
  depth: string;
  current: string;
  level: string;
  marineLife: string[];
  description: string;
  location: string;
  image: string;
}

export interface WeatherData {
  airTempC: number;
  waterTempC: number;
  windSpeedKnots: number;
  waveHeightM: number;
  uvIndex: number;
  visibilityM: number;
  condition: string;
  seaState: string;
  diveSuitability: string;
}

export interface BookingState {
  tripId: string;
  tripTitle: string;
  date: string;
  adults: number;
  children: number;
  hotel: string;
  roomNumber?: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  currency: CurrencyCode;
}
