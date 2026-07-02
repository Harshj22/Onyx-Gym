import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube, Check, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Simulate save to local storage
      const subscribers = JSON.parse(localStorage.getItem('onyx_subscribers') || '[]');
      subscribers.push({ email, subscribedAt: new Date().toISOString() });
      localStorage.setItem('onyx_subscribers', JSON.stringify(subscribers));

      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1000);
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing Plans', id: 'pricing' },
    { label: 'Elite Trainers', id: 'trainers' },
    { label: 'Class Schedule', id: 'schedule' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  const handleLinkClick = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/5 pt-16 pb-8 text-gray-400 overflow-hidden">
      {/* Design accents */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-black shadow-lg shadow-gold/20">
                <Dumbbell size={18} strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display text-base font-black tracking-widest text-white uppercase block leading-none">
                  ONYX
                </span>
                <span className="font-display text-[8px] font-bold tracking-widest text-gold uppercase block mt-0.5 leading-none">
                  FITNESS
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Onyx Fitness is a premium strength, conditioning, and recovery arena. We are committed to fostering elite-level movement mechanics, dynamic metabolic outputs, and athletic longevity.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-white hover:text-gold hover:border-gold transition-all"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-white hover:text-gold hover:border-gold transition-all"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-white hover:text-gold hover:border-gold transition-all"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-white hover:text-gold hover:border-gold transition-all"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-white mb-5 border-l-2 border-gold pl-2">
              Explore Arena
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-gold transition-colors flex items-center gap-1 group text-left"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-white mb-1 border-l-2 border-gold pl-2">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex gap-2.5">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Onyx Building, Plot 45, Off Link Road, Bandra West, Mumbai, MH - 400050</span>
              </div>
              <div className="flex gap-2.5">
                <Phone size={14} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p>+91 98765 43210</p>
                  <p>+91 22 2640 4321</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Mail size={14} className="text-gold shrink-0 mt-0.5" />
                <span>join@onyxfitness.in</span>
              </div>
              <div className="flex gap-2.5 pt-1 border-t border-white/5">
                <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Opening Hours:</p>
                  <p>Mon - Sun: 7:00 AM - 10:00 PM</p>
                  <p className="text-[10px] text-gray-500">Including National Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-white mb-1 border-l-2 border-gold pl-2">
              Forge Newsletter
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Get raw strength tips, nutrition blueprints, class schedule updates, and exclusive discount codes directly to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-lg border border-white/10 bg-onyx-card px-3.5 py-2.5 pr-10 text-xs text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-gold hover:bg-gold-hover text-black transition-colors flex items-center justify-center disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                      ) : (
                        <Send size={12} />
                      )}
                    </button>
                  </div>
                  <p className="text-[9px] text-gray-600">
                    We respect privacy. Unsubscribe anytime in 1-click.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg bg-gold/10 border border-gold/20 p-3.5 text-center flex flex-col items-center gap-1.5"
                >
                  <Check size={20} className="text-gold" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Locked & Loaded!</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Welcome to the Onyx Inner Circle.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden border border-white/5 h-48 w-full bg-onyx-card relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2185521992923!2d72.8256333!3d19.0541249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93813fdc7eb%3A0x6b63ca6f63be3d48!2sLink%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Onyx Fitness Bandra Mumbai"
          />
        </div>

        {/* Legal Row */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-600 font-medium">
          <p>© {new Date().getFullYear()} Onyx Fitness Pvt. Ltd. All Rights Reserved. Designed for athletic peak performance.</p>
          <div className="flex gap-4">
            <button className="hover:text-gold transition-colors">Privacy Policy</button>
            <button className="hover:text-gold transition-colors">Terms of Service</button>
            <button className="hover:text-gold transition-colors">Safety Guidelines</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
