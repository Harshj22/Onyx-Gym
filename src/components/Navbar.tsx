import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Dumbbell, Award, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onBookTrialOpen: () => void;
  onServiceSelect?: (serviceId: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage, onBookTrialOpen, onServiceSelect }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'pricing', label: 'Pricing' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'schedule', label: 'Class Schedule' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDropdownItemClick = (serviceId: string) => {
    setCurrentPage('services');
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  // Filter 5 key services for dropdown
  const featuredDropdownServices = SERVICES_DATA.slice(0, 5);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 border-b border-white/5 shadow-lg backdrop-blur-md py-3'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 text-left focus:outline-none"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-black shadow-lg shadow-gold/20"
              >
                <Dumbbell size={22} strokeWidth={2.5} />
              </motion.div>
              <div>
                <span className="font-display text-lg font-black tracking-widest text-white uppercase block leading-none">
                  ONYX
                </span>
                <span className="font-display text-[9px] font-bold tracking-widest text-gold uppercase block mt-0.5 leading-none">
                  FITNESS
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.id}
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleLinkClick(link.id)}
                        className={`group flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 outline-none ${
                          isActive ? 'text-gold' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isServicesDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 mt-0 w-64 rounded-xl border border-white/10 bg-onyx shadow-2xl p-2"
                          >
                            <div className="text-[10px] font-black uppercase tracking-wider text-gray-500 px-3 py-1.5 border-b border-white/5 mb-1 flex items-center gap-1">
                              <Award size={10} className="text-gold" /> Core Programs
                            </div>
                            {featuredDropdownServices.map((srv) => (
                              <button
                                key={srv.id}
                                onClick={() => handleDropdownItemClick(srv.id)}
                                className="w-full text-left rounded-lg px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all flex justify-between items-center"
                              >
                                {srv.title}
                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-gold transition-opacity" />
                              </button>
                            ))}
                            <div className="border-t border-white/5 mt-1 pt-1">
                              <button
                                onClick={() => handleLinkClick('services')}
                                className="w-full text-center text-[10px] font-bold uppercase tracking-wider text-gold hover:text-white py-1.5 hover:bg-gold/5 rounded-lg transition-all"
                              >
                                View All 19 Services
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="relative px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                  >
                    <span className={isActive ? 'text-gold' : 'text-gray-300 hover:text-white'}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-4">
              <button
                onClick={onBookTrialOpen}
                id="navbar-trial-btn"
                className="relative overflow-hidden rounded-lg bg-gold hover:bg-gold-hover text-black px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,197,24,0.3)] animate-pulse-slow"
              >
                Book Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="xl:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-white hover:text-gold transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide-in from right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black backdrop-blur-sm"
            />

            {/* Content panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-onyx border-l border-white/5 p-6 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-black shadow-lg shadow-gold/20">
                    <Dumbbell size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-display text-sm font-black tracking-widest text-white uppercase">
                    ONYX FITNESS
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-gold"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation links inside drawer */}
              <nav className="flex-1 py-6 space-y-2 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;

                  if (link.hasDropdown) {
                    return (
                      <div key={link.id} className="space-y-1">
                        <button
                          onClick={() => handleLinkClick(link.id)}
                          className={`w-full text-left rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wider flex justify-between items-center ${
                            isActive ? 'bg-gold/10 text-gold' : 'text-gray-300 hover:bg-white/5'
                          }`}
                        >
                          {link.label}
                        </button>
                        <div className="pl-4 border-l border-white/5 space-y-1 mt-1">
                          {featuredDropdownServices.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleDropdownItemClick(srv.id)}
                              className="w-full text-left rounded-lg px-4 py-1.5 text-xs text-gray-400 hover:text-white"
                            >
                              {srv.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left rounded-lg px-4 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors block ${
                        isActive ? 'bg-gold/10 text-gold border-l-2 border-gold' : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>

              {/* Drawer Footer / CTA */}
              <div className="border-t border-white/5 pt-5 space-y-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookTrialOpen();
                  }}
                  className="w-full rounded-lg bg-gold hover:bg-gold-hover text-black py-3 text-center text-xs font-black uppercase tracking-wider transition-all"
                >
                  Book 1-Day Free Trial
                </button>
                <div className="text-center text-[10px] text-gray-500 font-medium">
                  Forge Your Strength. Built for Longevity.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
