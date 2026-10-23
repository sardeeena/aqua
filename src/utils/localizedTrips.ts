import { Trip, LanguageCode } from '../types';
import { ARABIC_TRIPS, ARABIC_CATEGORIES } from '../data/arabicTrips';
import { GERMAN_TRIPS, GERMAN_CATEGORIES } from '../data/germanTrips';
import { RUSSIAN_TRIPS, RUSSIAN_CATEGORIES } from '../data/russianTrips';
import { POLISH_TRIPS, POLISH_CATEGORIES } from '../data/polishTrips';
import { FRENCH_TRIPS, FRENCH_CATEGORIES } from '../data/frenchTrips';
import { ITALIAN_TRIPS, ITALIAN_CATEGORIES } from '../data/italianTrips';
import { CZECH_TRIPS, CZECH_CATEGORIES } from '../data/czechTrips';

const LOCALE_TRIP_MAPS: Record<LanguageCode, Partial<Record<string, Partial<Trip>>>> = {
  ar: ARABIC_TRIPS,
  de: GERMAN_TRIPS,
  ru: RUSSIAN_TRIPS,
  pl: POLISH_TRIPS,
  fr: FRENCH_TRIPS,
  it: ITALIAN_TRIPS,
  cs: CZECH_TRIPS,
  en: {}
};

const LOCALE_CATEGORY_MAPS: Record<LanguageCode, Record<string, string>> = {
  ar: ARABIC_CATEGORIES,
  de: GERMAN_CATEGORIES,
  ru: RUSSIAN_CATEGORIES,
  pl: POLISH_CATEGORIES,
  fr: FRENCH_CATEGORIES,
  it: ITALIAN_CATEGORIES,
  cs: CZECH_CATEGORIES,
  en: {}
};

export function getLocalizedTrip(trip: Trip, language: LanguageCode): Trip {
  if (language === 'en') {
    return trip;
  }

  const localeMap = LOCALE_TRIP_MAPS[language];
  if (!localeMap) {
    return trip;
  }

  const localized = localeMap[trip.id] || localeMap[trip.slug];
  if (!localized) {
    return trip;
  }

  return {
    ...trip,
    title: localized.title || trip.title,
    subtitle: localized.subtitle || trip.subtitle,
    categoryLabel: localized.categoryLabel || trip.categoryLabel,
    badge: localized.badge || trip.badge,
    duration: localized.duration || trip.duration,
    groupSize: localized.groupSize || trip.groupSize,
    departureTime: localized.departureTime || trip.departureTime,
    pickupTime: localized.pickupTime || trip.pickupTime,
    pickupInfo: localized.pickupInfo || trip.pickupInfo,
    meetingPoint: localized.meetingPoint || trip.meetingPoint,
    highlights: localized.highlights || trip.highlights,
    description: localized.description || trip.description,
    fullDescription: localized.fullDescription || trip.fullDescription,
    itinerary: localized.itinerary || trip.itinerary,
    included: localized.included || trip.included,
    excluded: localized.excluded || trip.excluded,
    whatToBring: localized.whatToBring || trip.whatToBring,
  };
}

export function getLocalizedCategoryName(categorySlug: string, defaultName: string, language: LanguageCode): string {
  if (language === 'en') {
    return defaultName;
  }

  const catMap = LOCALE_CATEGORY_MAPS[language];
  if (catMap && catMap[categorySlug]) {
    return catMap[categorySlug];
  }

  return defaultName;
}
