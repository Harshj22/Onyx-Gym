import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';

// Core layout elements
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookTrialModal from './components/BookTrialModal';

// Pages components
import HomeView from './components/pages/HomeView';
import AboutView from './components/pages/AboutView';
import ServicesView from './components/pages/ServicesView';
import PricingView from './components/pages/PricingView';
import TrainersView from './components/pages/TrainersView';
import ScheduleView from './components/pages/ScheduleView';
import GalleryView from './components/pages/GalleryView';
import TestimonialsView from './components/pages/TestimonialsView';
import ContactView from './components/pages/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isBookTrialOpen, setIsBookTrialOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [showStickyTrialBtn, setShowStickyTrialBtn] = useState<boolean>(false);

  // Handle service selection from dropdown inside header
  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  // Monitor scroll for sticky "Book Free Trial" floating button opposite WhatsApp
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyTrialBtn(true);
      } else {
        setShowStickyTrialBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map out page views dynamically
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            onBookTrialOpen={() => setIsBookTrialOpen(true)}
            onServiceSelect={handleServiceSelect}
          />
        );
      case 'about':
        return <AboutView />;
      case 'services':
        return (
          <ServicesView
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            onBookTrialOpen={(progName) => {
              setIsBookTrialOpen(true);
            }}
          />
        );
      case 'pricing':
        return (
          <PricingView
            onBookTrialOpen={(planName) => {
              setIsBookTrialOpen(true);
            }}
          />
        );
      case 'trainers':
        return <TrainersView />;
      case 'schedule':
        return <ScheduleView />;
      case 'gallery':
        return <GalleryView />;
      case 'testimonials':
        return <TestimonialsView />;
      case 'contact':
        return (
          <ContactView
            onBookTrialOpen={() => setIsBookTrialOpen(true)}
          />
        );
      default:
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            onBookTrialOpen={() => setIsBookTrialOpen(true)}
            onServiceSelect={handleServiceSelect}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-onyx text-white relative font-sans selection:bg-gold selection:text-black">
      {/* Sticky header navbar navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBookTrialOpen={() => setIsBookTrialOpen(true)}
        onServiceSelect={handleServiceSelect}
      />

      {/* Main Interactive Container with Smooth Page Transitions */}
      <main className="min-h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic persistent floating elements */}
      <WhatsAppButton />

      {/* Sticky "Book Free Trial" action button drawing attention with bounce */}
      <AnimatePresence>
        {showStickyTrialBtn && (
          <motion.button
            initial={{ scale: 0, x: -100 }}
            animate={{ scale: 1, x: 0 }}
            exit={{ scale: 0, x: -100 }}
            onClick={() => setIsBookTrialOpen(true)}
            id="sticky-trial-floating-btn"
            className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 rounded-full bg-gold hover:bg-gold-hover text-black font-black text-xs uppercase tracking-wider px-5 py-3.5 shadow-lg shadow-gold/25 transition-all hover:shadow-gold/40 animate-pulse-slow"
          >
            <Calendar size={14} className="animate-bounce" />
            <span>Book Free Trial</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer layout */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Modal overlays */}
      <BookTrialModal
        isOpen={isBookTrialOpen}
        onClose={() => setIsBookTrialOpen(false)}
      />
    </div>
  );
}
