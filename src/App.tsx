import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Translations ---
const translations = {
  en: {
    topNav: {
      search: "Search",
      location: "Germany",
    },
    mainNav: {
      track: "Track",
      ship: "Ship",
      enterprise: "Enterprise Logistics Services",
      customerService: "Customer Service",
      portals: "Customer Portal Logins"
    },
    hero: {
      title: "Track & Trace",
      placeholder: "Enter your tracking number(s)",
      button: "Track"
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          q: "What Is a Tracking Number & Where Can I Find It?",
          a: "A tracking number or ID is a combination of numbers and possibly letters that uniquely identifies your shipment for national or international tracking. Usually, the sender or online shop can provide the tracking number or ID."
        }
      ]
    },
    status: "In transit - Expected arrival tomorrow"
  },
  de: {
    topNav: {
      search: "Suche",
      location: "Deutschland",
    },
    mainNav: {
      track: "Verfolgen",
      ship: "Senden",
      enterprise: "Logistiklösungen für Unternehmen",
      customerService: "Kundenservice",
      portals: "Kundenportal-Logins"
    },
    hero: {
      title: "Sendungsverfolgung",
      placeholder: "Sendungsnummer(n) eingeben",
      button: "Verfolgen"
    },
    faq: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          q: "Was ist eine Sendungsnummer und wo finde ich sie?",
          a: "Eine Sendungsnummer oder ID ist eine Kombination aus Zahlen und möglicherweise Buchstaben, die Ihre Sendung für die nationale oder internationale Verfolgung eindeutig identifiziert. In der Regel kann der Absender oder Online-Shop die Sendungsnummer oder ID mitteilen."
        }
      ]
    },
    status: "In Zustellung - Voraussichtliche Ankunft morgen"
  }
};

// --- Components ---

const DHLLogo = () => (
  <div className="flex items-center">
    <div className="flex flex-col justify-center mr-2">
      <div className="h-[3px] w-10 bg-[#D40511] mb-[3px]"></div>
      <div className="h-[3px] w-10 bg-[#D40511] mb-[3px]"></div>
      <div className="h-[3px] w-10 bg-[#D40511]"></div>
    </div>
    <span className="text-[#D40511] font-black italic text-4xl tracking-tighter leading-none">DHL</span>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = translations[lang];

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;
    setIsTracking(true);
    setTrackingResult(null);
    setTimeout(() => {
      setIsTracking(false);
      setTrackingResult(t.status);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      {/* Top Yellow Header */}
      <header className="bg-[#FFCC00] h-16 flex items-center px-4 md:px-12">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <DHLLogo />
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <button className="flex items-center gap-2 hover:underline">
              <Search size={18} /> {t.topNav.search}
            </button>
            <button className="flex items-center gap-2 hover:underline">
              <Globe size={18} /> {t.topNav.location}
            </button>
            <div className="flex items-center gap-4 ml-4">
              <button 
                onClick={() => setLang('en')}
                className={`font-bold ${lang === 'en' ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a]'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('de')}
                className={`font-bold ${lang === 'de' ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a]'}`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* White Navigation Bar */}
      <nav className="bg-white border-b border-stone-200 h-14 flex items-center px-4 md:px-12 sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#D40511] border-b-2 border-transparent hover:border-[#D40511] h-14 flex items-center">{t.mainNav.track}</a>
            <a href="#" className="hover:text-[#D40511] flex items-center gap-1">{t.mainNav.ship} <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#D40511] flex items-center gap-1">{t.mainNav.enterprise} <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#D40511]">{t.mainNav.customerService}</a>
          </div>
          <div className="hidden md:flex items-center text-sm font-medium">
            <a href="#" className="hover:text-[#D40511] flex items-center gap-1">{t.mainNav.portals} <ChevronDown size={14} /></a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-12 py-16">
        <h1 className="text-5xl font-black text-[#D40511] mb-12 tracking-tight">
          {t.hero.title}
        </h1>

        {/* Tracking Input Section */}
        <div className="max-w-3xl mb-24">
          <div className="flex border border-stone-300 rounded overflow-hidden focus-within:ring-1 focus-within:ring-stone-400">
            <input 
              type="text" 
              placeholder={t.hero.placeholder}
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              className="flex-1 h-14 px-4 outline-none text-lg"
            />
            <button 
              onClick={handleTrack}
              disabled={isTracking}
              className="bg-[#D40511] text-white px-10 font-bold text-lg hover:bg-[#b3040e] transition-colors disabled:opacity-70 min-w-[140px]"
            >
              {isTracking ? '...' : t.hero.button}
            </button>
          </div>
          
          <AnimatePresence>
            {trackingResult && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-6 bg-stone-50 border-l-4 border-[#D40511] rounded shadow-sm"
              >
                <p className="font-bold text-lg">{trackingResult}</p>
                <p className="text-sm text-stone-500 mt-1">ID: {trackingNumber}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl">
          <h2 className="text-3xl font-black mb-8">{t.faq.title}</h2>
          <div className="border-t border-stone-200">
            {t.faq.questions.map((item, index) => (
              <div key={index} className="border-b border-stone-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-[#D40511] transition-colors group"
                >
                  <span className="text-xl font-bold leading-tight pr-8">{item.q}</span>
                  {openFaq === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-stone-600 leading-relaxed text-lg">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-[#D40511]">Sitemap</a>
            <a href="#" className="hover:text-[#D40511]">Privacy</a>
            <a href="#" className="hover:text-[#D40511]">Terms</a>
          </div>
          <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">
            © 2026 DHL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
