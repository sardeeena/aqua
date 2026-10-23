# 🌊 AquaWay Tours — Luxury Red Sea Excursions & VIP Private Charters

**AquaWay Tours** is a web application and digital concierge for luxury marine excursions, private yacht charters, island getaways, and scuba diving expeditions in **Hurghada, Egypt (Red Sea)**.

---

## 📌 Table of Contents
1. [Overview (What is AquaWay Tours?)](#-overview-what-is-aquaway-tours)
2. [Purpose & Vision (Why was it built?)](#-purpose--vision-why-was-it-built)
3. [Key Features & Capabilities](#-key-features--capabilities)
4. [Supported Excursions & Fleet](#-supported-excursions--fleet)
5. [Locations & Operational Scope (Where & When?)](#-locations--operational-scope-where--when)
6. [Architecture & Technical Stack (How does it work?)](#-architecture--technical-stack-how-does-it-work)
7. [Internationalization (i18n) & Currency Engine](#-internationalization-i18n--currency-engine)
8. [Telegram Bot Integration (Notifications)](#-telegram-bot-integration-notifications)
9. [SEO & Search Engine Optimization](#-seo--search-engine-optimization)
10. [API Endpoints Reference](#-api-endpoints-reference)
11. [Project Directory Structure](#-project-directory-structure)
12. [Environment Variables & Configuration](#-environment-variables--configuration)
13. [Installation & Development Guide](#-installation--development-guide)
14. [Production Build & Deployment](#-production-build--deployment)

---

## 📖 Overview (What is AquaWay Tours?)

AquaWay Tours connects international travelers with Red Sea marine adventures. It is designed to offer a personalized VIP booking experience with:
- **Instant WhatsApp Reservations** with pre-filled trip parameters.
- **Live Multilingual Concierge Chatbot** capable of answering excursion questions, recommending trips, and assisting with hotel transfers.
- **Interactive Marine Weather & Red Sea Dive Explorer** featuring live sea temperatures, wind speeds, wave conditions, and 3D depth profiles of top dive sites.
- **Custom VIP Private Trip Builder** allowing guests to tailor yachts, catering (seafood buffet, BBQ, vegan), and celebration setups (anniversaries, birthdays, honeymoons).
- **Automated Telegram Lead Dispatch** delivering website inquiries directly to operations managers in real-time.

---

## 🎯 Purpose & Vision (Why was it built?)

Traditional excursion booking in resort towns often relies on paper flyers, street booths, or static contact forms with delayed responses. **AquaWay Tours** solves this by:
1. **Eliminating Language Barriers**: 100% localized in 8 major tourist languages with automatic browser language detection.
2. **Transparent Multi-Currency Pricing**: Real-time conversion across EUR, USD, GBP, PLN, CZK, EGP, and RUB.
3. **Instant VIP Concierge**: Direct WhatsApp booking links and intelligent chatbot guidance without waiting for email replies.
4. **Reliable Operational Dispatch**: Real-time Telegram bot push notifications for instant customer follow-ups by the marina team.

---

## ✨ Key Features & Capabilities

- **🌐 8-Language Full Localization**: English, German (Deutsch), Russian (Русский), Polish (Polski), French (Français), Italian (Italiano), Czech (Čeština), and Arabic (العربية) with native RTL support.
- **💱 Dynamic 7-Currency Switcher**: Real-time pricing in EUR (€), USD ($), GBP (£), PLN (zł), CZK (Kč), EGP (E£), and RUB (₽).
- **🤖 Live AI Concierge Assistant**: Interactive chat widget providing trip recommendations, pricing, FAQs, and WhatsApp handoff in all 8 languages.
- **🛥 Custom Private Charter Planner**: Interactive modal to configure private yacht itineraries, group size, catering, and VIP celebration packages.
- **🌊 Marine Weather & Sea Condition Widget**: Live Red Sea water temperature, wind speeds (knots), wave heights (m), and visibility metrics.
- **🤿 Red Sea Dive Site Explorer**: Detailed marine profiles for Abu Ramada, Shaab El Erg (Dolphin Reef), Giftun Drift, and Careless Reef with depth ratings and wildlife sightings.
- **📩 Real-time Telegram Notifications**: Email contact form and custom planner submissions dispatched straight to Telegram.
- **📱 Fully Responsive Design**: Mobile-first luxury UI styled in deep obsidian and brushed gold (`#D4AF37`) with high-contrast legibility.

---

## 🐬 Supported Excursions & Fleet

| Excursion Experience | Highlights & Inclusions | Target Audience |
| :--- | :--- | :--- |
| **VIP Private Yacht Charter** | Private captain, chef, customized stops, open buffet seafood, snorkeling gear | Couples, Families, VIP Groups |
| **Dolphin House Snorkeling** | Natural dolphin habitat (Shaab El Erg), 2 snorkel stops, buffet lunch, banana boat | Wildlife lovers, Families |
| **Orange Bay Island VIP** | Maldives of Egypt, crystal clear shallow waters, 2hr island stay, lunch & drinks | Relaxation, Photographers |
| **Paradise Island Getaway** | Sandy beaches, sun loungers, live folklore show, open buffet lunch | Beach lovers, Leisure |
| **Scuba Diving (Intro & Pro)** | 2 guided dives, certified PADI instructors, full dive gear, underwater photos | Beginners & Certified Divers |
| **Semi-Submarine Reef Tour** | 3-meter underwater observation deck, air-conditioned cabin, coral reef views | Non-swimmers, Children, Seniors |
| **Sunset Dinner Cruise** | Romantic twilight sailing, gourmet dinner, stargazing on the Red Sea | Honeymooners, Couples |
| **Speedboat Safari Adventure** | High-speed island hopping, secluded lagoons, private snorkeling spots | Thrill seekers, Small groups |

---

## 📍 Locations & Operational Scope (Where & When?)

### **Where We Operate**
- **Base of Operations**: Hurghada New Marina, Red Sea Governorate, Egypt.
- **Hotel Transfer Coverage**:
  - Hurghada Central Hotels (Complimentary round-trip transfer included)
  - El Gouna
  - Sahl Hasheesh
  - Makadi Bay
  - Soma Bay & Safaga

### **When We Operate**
- **Operating Hours**: Daily from `07:00 AM – 11:00 PM` (Cairo Local Time / UTC+2).
- **Standard Departure Slots**:
  - 🌅 **Morning Charters**: 08:30 AM – 04:00 PM
  - ☀️ **Afternoon Half-Day**: 01:00 PM – 05:00 PM
  - 🌇 **Sunset Cruises**: 04:30 PM – 07:30 PM

---

## 🛠 Architecture & Technical Stack (How does it work?)

### **Frontend**
- **Framework**: React 18+ (Functional Components with TypeScript)
- **Bundler / Dev Server**: Vite with Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Motion (`motion/react`)
- **State Management**: React Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`)
- **Typography**: Playfair Display (Headings) + Plus Jakarta Sans (Body & UI)

### **Backend**
- **Server**: Express.js (`server.ts`) running on port `3000` (host `0.0.0.0`)
- **Dev Runner**: `tsx` for direct TypeScript server execution
- **Production Bundler**: `esbuild` compiling `server.ts` into a self-contained `dist/server.cjs`
- **Middleware**: Vite development middleware integration in dev mode, static SPA serving in production mode.

---

## 🌍 Internationalization (i18n) & Currency Engine

### **Language Support**
| Code | Language | Native Name | Text Direction | Auto-Detection |
| :---: | :--- | :--- | :---: | :---: |
| `en` | English | English | LTR | Default fallback |
| `de` | German | Deutsch | LTR | `de`, `de-AT`, `de-CH` |
| `ru` | Russian | Русский | LTR | `ru`, `ru-RU`, `ru-BY`, `ru-KZ` |
| `pl` | Polish | Polski | LTR | `pl`, `pl-PL` |
| `fr` | French | Français | LTR | `fr`, `fr-FR`, `fr-BE`, `fr-CH` |
| `it` | Italian | Italiano | LTR | `it`, `it-IT`, `it-CH` |
| `cs` | Czech | Čeština | LTR | `cs`, `cs-CZ` |
| `ar` | Arabic | العربية | **RTL** | `ar`, `ar-EG`, `ar-SA`, `ar-AE`, etc. |

### **Currency Engine**
The platform automatically pairs appropriate currencies based on detected regional preferences or user selection:
- **EUR (€)**: Default European standard
- **USD ($)**: US Dollar
- **GBP (£)**: British Pound
- **PLN (zł)**: Polish Złoty
- **CZK (Kč)**: Czech Koruna
- **EGP (E£)**: Egyptian Pound
- **RUB (₽)**: Russian Ruble

---

## 🤖 Telegram Bot Integration (Notifications)

When a customer submits an inquiry through the Contact Form or the Custom Trip Planner Modal, the Express backend sends a message directly to your company Telegram group or bot via the official Telegram Bot API:

```
📩 NEW WEBSITE INQUIRY — AQUAWAY TOURS
━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: Sarah Jenkins
📧 Email: sarah@example.com
📞 Phone / WhatsApp: +44 7700 900077
🌐 Preferred Language: EN
📍 Source: Website Email Contact Form
🕒 Time (Hurghada): Wednesday, 19 August 2026, 17:30:00
━━━━━━━━━━━━━━━━━━━━━━━━
💬 Client Message:
"We are staying at Steigenberger ALDAU Beach Hotel from Oct 10 to 17. Looking to book a private yacht for 6 people and a dolphin trip."
━━━━━━━━━━━━━━━━━━━━━━━━
⚡️ Action: Reply directly via Email (sarah@example.com) or WhatsApp (+44 7700 900077)
```

---

## 🔍 SEO & Search Engine Optimization

The application is structured for high search visibility and crawler indexing:
- **Semantic HTML5**: Native structural tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- **OpenGraph & Twitter Cards**: High-resolution preview image cards, titles, and localized meta descriptions in `index.html`.
- **Pre-rendered Schema.org JSON-LD**:
  - `WebSite` & `Organization`
  - `LocalBusiness` / `TouristAttraction` (Marina address, coordinates `27.2289, 33.8428`, contact points)
  - `FAQPage` (Pre-rendered Rich Snippets for Google search questions)
  - `BreadcrumbList` (Structured navigation hierarchy)
- **Robots Directives (`public/robots.txt`)**: Allows search engines and AI web crawlers (Googlebot, Bingbot, Yandex, DuckDuckBot, Applebot, ChatGPT-User, PerplexityBot) with clean sitemap linking.
- **Dynamic `<title>` & `<meta>` Handling**: Updates page title based on selected language and active excursion details.

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description | Request Body / Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Healthcheck endpoint with server timestamp and Telegram status | None |
| `GET` | `/api/telegram-status` | Returns whether Telegram credentials are active in the environment | None |
| `POST` | `/api/contact` | Handles email contact form submissions and triggers Telegram alert | `{ name, email, phone, message, language, source }` |
| `POST` | `/api/booking-inquiry` | Handles custom private trip submissions and triggers Telegram alert | `{ name, email, phone, tripType, date, hotel, guests, catering, celebration, notes, language, currency }` |

---

## 📂 Project Directory Structure

```
├── .env.example                     # Environment variables schema & documentation
├── .gitignore                       # Git ignore rules
├── index.html                       # HTML entry point with Schema.org & SEO meta tags
├── metadata.json                    # Application metadata and capabilities
├── package.json                     # NPM dependencies, scripts, and build tasks
├── public/
│   ├── favicon.svg                  # Brand favicon
│   └── robots.txt                   # Crawler directives for search engine indexing
├── server.ts                        # Full-stack Express server & Telegram API dispatch
├── tsconfig.json                    # TypeScript compiler configuration
├── vite.config.ts                   # Vite configuration with Tailwind CSS plugin
└── src/
    ├── main.tsx                     # React client entry point
    ├── App.tsx                      # Main application orchestrator & layout
    ├── index.css                    # Tailwind CSS imports & theme styles
    ├── types.ts                     # TypeScript definitions, interfaces, and enums
    ├── components/
    │   ├── Navbar.tsx               # Top navigation with currency/language dropdowns
    │   ├── Hero.tsx                 # Hero section with quick search & CTA buttons
    │   ├── TripCard.tsx             # Excursion card with badge, rating & price
    │   ├── TripDetailsModal.tsx     # Comprehensive excursion details & booking modal
    │   ├── CustomTripPlannerModal.tsx # Custom private charter builder modal
    │   ├── WeatherWidget.tsx        # Live Red Sea marine conditions widget
    │   ├── DiveSpotExplorer.tsx     # 3D dive site & coral reef profile viewer
    │   ├── ChatAssistant.tsx        # AI Concierge Chatbot widget
    │   ├── ReviewsSection.tsx       # Verified guest reviews & traveler feedback
    │   ├── ContactSection.tsx       # Direct contact details & Telegram email form
    │   └── Footer.tsx               # Footer with links, licenses & emergency contact
    ├── data/
    │   ├── trips.ts                 # Excursion catalog, itineraries & pricing
    │   ├── translations.ts          # Core UI translations (EN, DE, RU, AR)
    │   ├── extendedTranslations.ts  # Extended translations (PL, FR, IT, CS)
    │   └── diveSpots.ts             # Red Sea dive spots and marine data
    └── utils/
        ├── currency.ts              # Currency conversion rates and formatting
        ├── whatsapp.ts              # WhatsApp URL generator with pre-filled text
        └── chatAssistantKnowledge.ts # Concierge chatbot FAQ database & multi-lingual replies
```

---

## 🔐 Environment Variables & Configuration

Copy `.env.example` to `.env` or configure secrets in the environment settings:

```bash
# Telegram Bot API Token from @BotFather on Telegram
TELEGRAM_BOT_TOKEN="123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"

# Telegram Chat ID or Group ID to receive booking alerts
TELEGRAM_CHAT_ID="123456789"

# Gemini API Key (optional for future AI integrations)
GEMINI_API_KEY=""

# Public Application URL
APP_URL="https://ais-dev-yyyazeybkhpwkkjbpmkdye-7463171477.europe-west2.run.app"
```

---

## 💻 Installation & Development Guide

### **1. Install Dependencies**
```bash
npm install
```

### **2. Start the Development Server**
```bash
npm run dev
```
The application and backend API will start simultaneously on `http://localhost:3000`.

### **3. Run Code Quality Checks**
```bash
npm run lint
```

---

## 🚀 Production Build & Deployment

To compile both the frontend assets and the backend Express bundle:

```bash
npm run build
```

This runs:
1. `vite build` (compiles React client to `/dist`)
2. `esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs` (bundles backend server)

### **Start the Production Server**
```bash
npm start
```
Runs `node dist/server.cjs` listening on port `3000`.

---

## 📞 Business & Concierge Contact

- **Company Name**: AquaWay Tours Hurghada
- **Address**: Marina Boulevard, Hurghada New Marina, Red Sea Governorate, Egypt
- **Phone / WhatsApp**: `+20 100 123 4567`
- **Email**: `reservations@aquawaytours.com`
- **Hours**: Daily 07:00 AM – 11:00 PM (Cairo Time)
