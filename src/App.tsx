import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  ChevronDown, 
  Ship, 
  FileText, 
  Headset, 
  Clock, 
  MapPin, 
  Bell,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Translations ---
const translations = {
  fr: {
    nav: {
      home: "Maison",
      services: "Services",
      tracking: "Suivi",
      solutions: "Solutions",
      support: "Soutien",
      about: "À propos",
      quote: "Demander un devis"
    },
    hero: {
      title: "à travers le monde",
      subtitle: "Des solutions logistiques rapides, fiables et sécurisées pour les entreprises et les particuliers du monde entier. Suivez votre envoi en temps réel et bénéficiez d'une livraison sans encombre.",
      placeholder: "Saisissez votre numéro de suivi",
      button: "Piste"
    },
    cards: [
      {
        icon: Ship,
        title: "Expédiez maintenant",
        desc: "Envoyez des colis dans le monde entier grâce à notre service d'expédition express.",
        color: "bg-red-50",
        iconColor: "text-red-500"
      },
      {
        icon: FileText,
        title: "Obtenir les tarifs",
        desc: "Comparez instantanément les tarifs d'expédition et les délais de livraison.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      {
        icon: Headset,
        title: "Obtenez de l'aide",
        desc: "Assistance clientèle 24h/24 et 7j/7 pour tous vos besoins d'expédition.",
        color: "bg-emerald-50",
        iconColor: "text-emerald-500"
      }
    ],
    trackingSection: {
      title: "Suivre votre envoi",
      subtitle: "Suivez votre colis en temps réel grâce au suivi en temps réel. Saisissez votre numéro de suivi ci-dessous pour consulter son statut et sa localisation.",
      placeholder: "Saisissez le numéro de suivi (ex. : TRK123456789)",
      button: "Pack de suivi"
    },
    features: [
      {
        icon: Clock,
        title: "Mises à jour en temps réel",
        desc: "Recevez des notifications instantanées sur le statut et la localisation de votre colis.",
        color: "bg-red-50",
        iconColor: "text-red-500"
      },
      {
        icon: MapPin,
        title: "Emplacement précis",
        desc: "Suivez la localisation exacte de votre envoi tout au long de son parcours.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      {
        icon: Bell,
        title: "Alertes de livraison",
        desc: "Recevez des alertes par SMS et par e-mail lorsque votre colis est livré.",
        color: "bg-emerald-50",
        iconColor: "text-emerald-500"
      }
    ]
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      tracking: "Tracking",
      solutions: "Solutions",
      support: "Support",
      about: "About",
      quote: "Get a Quote"
    },
    hero: {
      title: "across the world",
      subtitle: "Fast, reliable and secure logistics solutions for businesses and individuals worldwide. Track your shipment in real time and enjoy a smooth delivery.",
      placeholder: "Enter your tracking number",
      button: "Track"
    },
    cards: [
      {
        icon: Ship,
        title: "Ship Now",
        desc: "Send packages worldwide with our express shipping service.",
        color: "bg-red-50",
        iconColor: "text-red-500"
      },
      {
        icon: FileText,
        title: "Get Rates",
        desc: "Instantly compare shipping rates and delivery times.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      {
        icon: Headset,
        title: "Get Help",
        desc: "24/7 customer support for all your shipping needs.",
        color: "bg-emerald-50",
        iconColor: "text-emerald-500"
      }
    ],
    trackingSection: {
      title: "Track Your Shipment",
      subtitle: "Track your package in real time with real-time tracking. Enter your tracking number below to check its status and location.",
      placeholder: "Enter tracking number (e.g., TRK123456789)",
      button: "Track Package"
    },
    features: [
      {
        icon: Clock,
        title: "Real-time Updates",
        desc: "Receive instant notifications on the status and location of your package.",
        color: "bg-red-50",
        iconColor: "text-red-500"
      },
      {
        icon: MapPin,
        title: "Precise Location",
        desc: "Track the exact location of your shipment throughout its journey.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      {
        icon: Bell,
        title: "Delivery Alerts",
        desc: "Receive SMS and email alerts when your package is delivered.",
        color: "bg-emerald-50",
        iconColor: "text-emerald-500"
      }
    ]
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Services",
      tracking: "Sendungsverfolgung",
      solutions: "Lösungen",
      support: "Support",
      about: "Über uns",
      quote: "Angebot anfordern"
    },
    hero: {
      title: "auf der ganzen Welt",
      subtitle: "Schnelle, zuverlässige und sichere Logistiklösungen für Unternehmen und Privatpersonen weltweit. Verfolgen Sie Ihre Sendung in Echtzeit und genießen Sie eine reibungslose Lieferung.",
      placeholder: "Sendungsnummer eingeben",
      button: "Verfolgen"
    },
    cards: [
      {
        icon: Ship,
        title: "Jetzt versenden",
        desc: "Versenden Sie Pakete weltweit mit unserem Express-Versandservice.",
        color: "bg-red-50",
        iconColor: "text-red-500"
      },
      {
        icon: FileText,
        title: "Tarife abrufen",
        desc: "Vergleichen Sie sofort Versandtarife und Lieferzeiten.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      {
        icon: Headset,
        title: "Hilfe erhalten",
        desc: "Kundensupport rund um die Uhr für alle Ihre Versandanforderungen.",
        color: "bg-emerald-50",
        iconColor: "text-emerald-500"
      }
    ],
    trackingSection: {
      title: "Sendung verfolgen",
      subtitle: "Verfolgen Sie Ihr Paket in Echtzeit mit Echtzeit-Tracking. Geben Sie unten Ihre Sendungsnummer ein, um Status und Standort zu prüfen.",
      placeholder: "Sendungsnummer eingeben (z. B. TRK123456789)",
      button: "Paket verfolgen"
    },
    features: [
      {
        icon: Clock,
        title: "Echtzeit-Updates",
        desc: "Erhalten Sie sofortige Benachrichtigungen über Status und Standort Ihres Pakets.",
        color: "bg-red-50",
        iconColor: "text-red-500"
      },
      {
        icon: MapPin,
        title: "Präziser Standort",
        desc: "Verfolgen Sie den genauen Standort Ihrer Sendung während der gesamten Reise.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      {
        icon: Bell,
        title: "Zustellbenachrichtigungen",
        desc: "Erhalten Sie SMS- und E-Mail-Benachrichtigungen, wenn Ihr Paket zugestellt wird.",
        color: "bg-emerald-50",
        iconColor: "text-emerald-500"
      }
    ]
  }
};

// --- Components ---

const DHLLogo = ({ className = "h-8" }: { className?: string }) => (
  <div className={`flex items-center bg-[#FFCC00] px-3 py-2 ${className}`}>
    <div className="flex flex-col justify-center mr-2">
      <div className="h-[3px] w-8 bg-[#D40511] mb-[3px]"></div>
      <div className="h-[3px] w-8 bg-[#D40511] mb-[3px]"></div>
      <div className="h-[3px] w-8 bg-[#D40511]"></div>
    </div>
    <span className="text-[#D40511] font-black italic text-3xl tracking-tighter leading-none">DHL</span>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'fr' | 'en' | 'de'>('fr');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const t = translations[lang];

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;
    
    setIsTracking(true);
    setTrackingResult(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
      setTrackingResult(lang === 'fr' ? "En transit - Arrivée prévue demain" : lang === 'en' ? "In transit - Expected arrival tomorrow" : "In Zustellung - Voraussichtliche Ankunft morgen");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      {/* Header */}
      <header className="bg-[#FFCC00] h-20 flex items-center px-4 md:px-12 relative z-50">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <DHLLogo />
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors">{t.nav.home}</a>
              <a href="#" className="text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors">{t.nav.services}</a>
              <a href="#" className="text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors">{t.nav.tracking}</a>
              <a href="#" className="text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors">{t.nav.solutions}</a>
              <a href="#" className="text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors">{t.nav.support}</a>
              <a href="#" className="text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors">{t.nav.about}</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-sm font-bold text-stone-800 hover:text-[#D40511] transition-colors px-3 py-2 rounded-lg"
              >
                <Globe size={18} />
                <span className="uppercase">{lang}</span>
                <ChevronDown size={14} />
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg overflow-hidden border border-stone-100 min-w-[120px]">
                  {(['fr', 'en', 'de'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors ${lang === l ? 'text-[#D40511] bg-stone-50' : 'text-stone-700'}`}
                    >
                      {l === 'fr' ? 'Français' : l === 'en' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="hidden md:block bg-[#D40511] text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg">
              {t.nav.quote}
            </button>
            <button 
              className="lg:hidden p-2 text-stone-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/dhl-warehouse/1920/1080" 
          alt="DHL Warehouse" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl w-full px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Tracking Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto"
          >
            <input 
              type="text" 
              placeholder={t.hero.placeholder}
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 h-14 px-6 bg-transparent border-none focus:ring-0 outline-none text-lg text-stone-800"
            />
            <button 
              onClick={handleTrack}
              disabled={isTracking}
              className="h-14 px-12 bg-[#D40511] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 transition-colors shadow-lg disabled:opacity-70"
            >
              {isTracking ? '...' : t.hero.button}
            </button>
          </motion.div>
          {trackingResult && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-xl text-white font-bold inline-block"
            >
              {trackingResult}
            </motion.div>
          )}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all"
            >
              <div className={`w-20 h-20 rounded-2xl ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <card.icon size={40} className={card.iconColor} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">{card.title}</h3>
              <p className="text-stone-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Tracking Section (from 2nd image) */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 tracking-tight">
            {t.trackingSection.title}
          </h2>
          <p className="text-lg text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.trackingSection.subtitle}
          </p>

          <div className="bg-white p-6 rounded-3xl shadow-xl border border-stone-100 flex flex-col md:flex-row gap-4 mb-20">
            <input 
              type="text" 
              placeholder={t.trackingSection.placeholder}
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 h-16 px-6 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#FFCC00] outline-none text-lg"
            />
            <button 
              onClick={handleTrack}
              disabled={isTracking}
              className="h-16 px-12 bg-[#D40511] text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-red-700 transition-colors shadow-lg disabled:opacity-70"
            >
              {isTracking ? '...' : t.trackingSection.button}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon size={32} className={feature.iconColor} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">{feature.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified for design match) */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <DHLLogo className="h-10" />
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-stone-400">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">
            © 2026 DHL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
