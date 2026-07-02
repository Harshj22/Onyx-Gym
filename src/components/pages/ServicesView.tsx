import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  User, Users, Dumbbell, Heart, Activity, Compass, TrendingDown, Zap, Apple,
  Shield, RotateCcw, Bike, Sparkles, Smile, Tv, Award, Coffee, Briefcase, Search, ArrowRight, ShieldCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../../data';

interface ServicesViewProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  onBookTrialOpen: (programName?: string) => void;
}

// Explicit mapping to prevent dynamic bundler lookup failures
const iconMap: Record<string, React.ComponentType<any>> = {
  User,
  Users,
  Dumbbell,
  Heart,
  Activity,
  Compass,
  TrendingDown,
  Zap,
  Apple,
  Shield,
  RotateCcw,
  Bike,
  Sparkles,
  Smile,
  Tv,
  Award,
  Coffee,
  Briefcase
};

export default function ServicesView({ selectedServiceId, setSelectedServiceId, onBookTrialOpen }: ServicesViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (selectedServiceId && cardRefs.current[selectedServiceId]) {
      setTimeout(() => {
        cardRefs.current[selectedServiceId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 300);
    }
  }, [selectedServiceId]);

  // Filter 19 services
  const filteredServices = SERVICES_DATA.filter((service) => {
    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      (service.fullDetails && service.fullDetails.toLowerCase().includes(query))
    );
  });

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* PAGE HERO */}
      <section className="relative py-12 overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
            alt="Services background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-gold">
            19 Premium Programs
          </p>
          <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
            Onyx Services & Programs
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            From heavy-load compound lifting to holistic athletic recovery, find your customized kinetic focus path.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedServiceId(null); // clear highlight if they search
                }}
                placeholder="Search programs (e.g. CrossFit, Sauna, Zumba...)"
                className="w-full rounded-lg border border-white/10 bg-onyx-card px-10 py-3 text-xs text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              />
            </div>
            {searchQuery && (
              <div className="text-[10px] text-gray-500 mt-2 text-left px-1">
                Showing {filteredServices.length} of 19 premium services
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Dumbbell;
            const isHighlighted = selectedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[service.id] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -5, borderColor: isHighlighted ? '#F5C518' : 'rgba(245,197,24,0.3)' }}
                className={`rounded-xl border bg-onyx-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'border-gold shadow-[0_0_20px_rgba(245,197,24,0.2)] ring-2 ring-gold/40'
                    : 'border-white/5'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/10">
                      <IconComponent size={22} className="animate-pulse-slow" />
                    </div>
                    {isHighlighted && (
                      <span className="rounded-full bg-gold px-2.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-black">
                        Dropdown Choice
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-base font-black uppercase text-white tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {service.fullDetails && (
                    <div className="rounded-lg bg-black/40 border border-white/5 p-3.5 text-[11px] text-gray-400 leading-relaxed">
                      <p className="font-semibold text-gray-300 mb-1 flex items-center gap-1">
                        <ShieldCheck size={12} className="text-gold" /> Pro Spec
                      </p>
                      {service.fullDetails}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => onBookTrialOpen(service.title)}
                    className="w-full rounded-lg bg-onyx border border-white/10 hover:border-gold py-2 text-center text-xs font-bold uppercase tracking-wider text-white hover:text-gold transition-all flex items-center justify-center gap-1.5"
                  >
                    Book Trial Program <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 space-y-4 max-w-sm mx-auto">
            <p className="text-sm text-gray-500">No programs match your search term.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-gold uppercase tracking-wider border border-gold/20 bg-gold/5 px-4 py-2 rounded-lg hover:bg-gold hover:text-black transition-all"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
