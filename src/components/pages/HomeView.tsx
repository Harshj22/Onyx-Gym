import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Dumbbell, Shield, Sparkles, Clock, Target, Calendar } from 'lucide-react';
import { SERVICES_DATA, PRICING_PLANS, TRAINERS_DATA, TESTIMONIALS_DATA } from '../../data';
import StatsSection from '../StatsSection';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  onBookTrialOpen: () => void;
  onServiceSelect?: (serviceId: string) => void;
}

export default function HomeView({ setCurrentPage, onBookTrialOpen, onServiceSelect }: HomeViewProps) {
  // Carousel State
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Auto-slide testimonials carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage('services');
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  // Why choose us items
  const highlights = [
    {
      icon: <Dumbbell className="h-6 w-6 text-gold" />,
      title: 'Certified Elite Trainers',
      desc: 'Expert NSCA & CrossFit certified coaches who track your specific biomechanics for optimal power outputs.'
    },
    {
      icon: <Shield className="h-6 w-6 text-gold" />,
      title: 'State-of-the-Art Gear',
      desc: 'Top-tier Eleiko platforms, custom Rogue bumper plates, Hammer Strength weight stacks, and premium saunas.'
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: 'Flexible Hours',
      desc: 'Open 365 days a year from 7:00 AM to 10:00 PM to support high-intensity schedules and demanding routines.'
    },
    {
      icon: <Target className="h-6 w-6 text-gold" />,
      title: 'Personalized Programs',
      desc: 'Data-driven hypertrophy, aerobic conditioning, injury recovery, and macronutrient blueprints built for your goals.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white pt-20">
        {/* Parallax / Video-like high-contrast background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
            alt="Onyx Gym Hero Background"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center opacity-40 filter brightness-50 contrast-125"
          />
          {/* Custom overlays for deep dark transitions */}
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx/90 via-onyx/30 to-transparent" />
        </div>

        {/* Animated Accent Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5C518_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-left w-full">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold"
            >
              <Sparkles size={14} className="animate-spin-slow text-gold" /> Level Up Your Kinetic Peak
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl leading-none"
            >
              Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">Strength</span>
              <br />
              Rule the Arena
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-gray-300 sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Step into Mumbai's premium, high-energy fitness sanctuary. Equipped with Olympic platforms, expert coaches, and medical-grade physiotherapists. Start training for raw power and dynamic endurance.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => handleServiceClick('pt')}
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-gold hover:bg-gold-hover text-black px-7 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,197,24,0.4)]"
              >
                Join Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookTrialOpen}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/40 px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Claim 1-Day Free Trial
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-50">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-5 w-3 rounded-full border border-white flex justify-center p-0.5"
          >
            <span className="h-1.5 w-1 rounded-full bg-gold block" />
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="bg-onyx py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold mb-3">
              Elite Sanctuary
            </h2>
            <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Why Choose <span className="text-gold">Onyx Fitness</span>?
            </h3>
            <p className="text-sm text-gray-500 mt-3">
              We focus on premium mechanical science, clean recovery environments, and motivating group dynamics to keep your performance trending upward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, borderColor: 'rgba(245, 197, 24, 0.4)' }}
                className="rounded-xl border border-white/5 bg-onyx-card p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION BAR */}
      <StatsSection />

      {/* 4. SERVICES PREVIEW */}
      <section className="bg-onyx-card py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold mb-3">
                Core Disciplines
              </h2>
              <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Elevate Your Training Range
              </h3>
              <p className="text-sm text-gray-400 mt-3">
                Explore an extensive, premium range of structured programs designed to target hypertrophy, conditioning, recovery, and boxing.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gold hover:text-white transition-colors group shrink-0"
            >
              Explore All 19 Programs <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5, borderColor: 'rgba(245,197,24,0.3)' }}
                className="group rounded-xl border border-white/5 bg-onyx p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                    <Dumbbell size={18} />
                  </div>
                  <h4 className="font-display text-base font-bold uppercase text-white tracking-wide">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="text-[11px] font-bold uppercase tracking-wider text-gold hover:text-white transition-colors"
                  >
                    View Program Details
                  </button>
                  <ArrowRight size={12} className="text-gray-600 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING PLANS PREVIEW */}
      <section className="bg-onyx py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold mb-3">
              Clear Passports
            </h2>
            <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Flexible Memberships
            </h3>
            <p className="text-sm text-gray-500 mt-3">
              Pricing structured specifically for dedicated lifters, athletes, and daily grinders. Claim your trial pass today.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {PRICING_PLANS.slice(1, 4).map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, shadow: '0 20px 25px -5px rgba(0,0,0,0.4)' }}
                className={`relative rounded-2xl border bg-onyx-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-gold shadow-[0_0_20px_rgba(245,197,24,0.1)]'
                    : 'border-white/5'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[9px] font-black uppercase tracking-widest text-black animate-pulse-slow">
                    Best Value Option
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-gray-400">
                      {plan.name}
                    </h4>
                    <div className="mt-4 flex items-baseline">
                      <span className="font-display text-4xl font-black tracking-tight text-white">
                        ₹{plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="ml-1 text-xs text-gray-400">
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs text-gray-300 border-t border-white/5 pt-6">
                    {plan.features.slice(0, 5).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      setCurrentPage('pricing');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full rounded-lg py-2.5 text-center text-xs font-black uppercase tracking-wider transition-all ${
                      plan.isPopular
                        ? 'bg-gold hover:bg-gold-hover text-black shadow-lg shadow-gold/10'
                        : 'border border-white/20 bg-transparent text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    Configure Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRAINERS PREVIEW */}
      <section className="bg-onyx-card py-20 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold mb-3">
                Masters of Biomechanics
              </h2>
              <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Onyx Coaching Force
              </h3>
              <p className="text-sm text-gray-400 mt-3">
                Meet our certified personal trainers, CrossFit coaches, and clinical sports therapists. Meet the team devoted to your form.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('trainers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gold hover:text-white transition-colors group shrink-0"
            >
              Meet Elite Instructors <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {TRAINERS_DATA.slice(0, 3).map((trainer, idx) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-onyx text-white transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent opacity-80" />
                </div>

                <div className="p-5 relative z-10 -mt-16 bg-gradient-to-t from-onyx via-onyx to-onyx/90 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gold">
                    {trainer.role}
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide mt-1">
                    {trainer.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {trainer.bio}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                    <span>{trainer.experience} Years Experience</span>
                    <span className="text-white font-bold group-hover:text-gold transition-colors">View Credentials</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="bg-onyx py-20 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold mb-3">
              Grinders Success
            </h2>
            <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Reviews from the Floor
            </h3>
          </div>

          {/* Carousel Layout */}
          <div className="relative border border-white/5 bg-onyx-card rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReviewIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-center"
                >
                  <div className="flex justify-center gap-1">
                    {[...Array(TESTIMONIALS_DATA[activeReviewIdx].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F5C518" className="text-gold" />
                    ))}
                  </div>

                  <blockquote className="font-sans text-sm md:text-base text-gray-200 leading-relaxed font-normal italic max-w-3xl mx-auto">
                    "{TESTIMONIALS_DATA[activeReviewIdx].quote}"
                  </blockquote>

                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src={TESTIMONIALS_DATA[activeReviewIdx].image}
                      alt={TESTIMONIALS_DATA[activeReviewIdx].name}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-full border border-gold/30 object-cover"
                    />
                    <div>
                      <h4 className="font-display text-xs font-bold uppercase text-white tracking-wider">
                        {TESTIMONIALS_DATA[activeReviewIdx].name}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        {TESTIMONIALS_DATA[activeReviewIdx].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={handlePrevReview}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-gold hover:bg-white/5 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextReview}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-gold hover:bg-white/5 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="relative overflow-hidden bg-black py-20 border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
            alt="Dynamic Gym weights"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-20 filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Start Your Transformation Today
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Your body is a direct reflection of your choices. Step into the Onyx arena, train with precision, recover in luxury, and claim your lifetime longevity.
              </p>
            </div>
            <div className="shrink-0 space-y-3 w-full sm:w-auto">
              <button
                onClick={onBookTrialOpen}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gold hover:bg-gold-hover text-black px-8 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,197,24,0.4)]"
              >
                Book My Free Pass Now <ArrowRight size={14} />
              </button>
              <p className="text-center text-[10px] text-gray-500 font-medium">
                No contracts required. Just enter with focus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
