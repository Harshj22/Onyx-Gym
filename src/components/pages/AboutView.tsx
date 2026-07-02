import { motion } from 'motion/react';
import { Award, Compass, Heart, Users, Target, CheckCircle2 } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      icon: <Compass className="h-6 w-6 text-gold" />,
      title: 'Evidence-Based Mechanics',
      desc: 'We discard generic routines. Every exercise choice, lifting template, and rehabilitation flow is designed according to sports science.'
    },
    {
      icon: <Heart className="h-6 w-6 text-gold" />,
      title: 'Athletic Peak Recovery',
      desc: 'Muscle damage requires professional repair. We integrate premium saunas, sports therapy, and targeted nutrition directly into the membership.'
    },
    {
      icon: <Users className="h-6 w-6 text-gold" />,
      title: 'Elite Community Synergy',
      desc: 'Onyx is a place of mutual encouragement. No egos allowed—just lifters, athletes, and beginners lifting each other up daily.'
    },
    {
      icon: <Target className="h-6 w-6 text-gold" />,
      title: 'Unyielding Goals Accountability',
      desc: 'We are completely outcome-driven. We provide real metrics, periodic InBody reports, and lifestyle coaching to make sure you succeed.'
    }
  ];

  const highlights = [
    'Eleiko Olympic Weightlifting bars & calibrated competition plate sets',
    '8 heavy-duty power cages & premium lifting platforms with acoustic padding',
    'Dumbbells ranging from 1kg to 80kg in pristine polyurethane',
    'Custom CrossFit zone with continuous artificial sled lanes & gymnastic rings',
    'Traditional dry timber Swedish sauna facilities for recovery',
    'Freshly loaded protein shake, supplement, and cold press juice bar',
    'State-of-the-art cardiovascular deck featuring simulated mountain terrains',
    'Air-purified, temperature-controlled environment optimized for heavy exertion'
  ];

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* PAGE HERO */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200"
            alt="Gym facilities"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-widest text-gold"
          >
            Our Origin & Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl"
          >
            The Onyx Legacy
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-12 bg-gold mx-auto"
          />
        </div>
      </section>

      {/* STORY & MISSION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold">
              Est. 2021 | Mumbai, India
            </h2>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Fusing Sports Science with Premium Intensity
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Onyx Fitness was founded in 2021 by a team of sports biomechanical scientists, physical therapists, and powerlifters who grew weary of crowded, uninspiring commercial gyms. We set out to create a sanctuary where training intensity meets aesthetic luxury.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              What began as a small boutique strength garage has grown into India's premier athletic development hub. At Onyx, we believe that strength is the master quality. Physical capability enhances mental clarity, emotional toughness, and overall biological longevity.
            </p>

            <div className="rounded-xl border border-gold/15 bg-gold/5 p-5">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                <Award size={16} /> Our Core Mission
              </p>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed italic">
                "To provide everyday individuals with access to elite sports coaching, medical-grade athletic recovery, and a motivating, high-energy environment that forces true physical transformation."
              </p>
            </div>
          </motion.div>

          {/* Image Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Gym compound lifting"
                referrerPolicy="no-referrer"
                className="rounded-lg object-cover w-full aspect-[3/4] border border-white/5"
              />
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400"
                alt="Gym weight stack"
                referrerPolicy="no-referrer"
                className="rounded-lg object-cover w-full aspect-square border border-white/5"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400"
                alt="Trainer coaching"
                referrerPolicy="no-referrer"
                className="rounded-lg object-cover w-full aspect-square border border-white/5"
              />
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Sauna treatment"
                referrerPolicy="no-referrer"
                className="rounded-lg object-cover w-full aspect-[3/4] border border-white/5"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY & VALUES */}
      <section className="bg-onyx-card border-y border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold mb-2">
              Our Compass
            </h2>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Values We Forge By
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 p-5 rounded-xl border border-white/5 bg-onyx"
              >
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold">
                  {val.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display text-sm font-bold uppercase text-white tracking-wide">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY HIGHLIGHTS LIST */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold">
              Arena Specifications
            </h2>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Equipped to Elite Standards
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We did not compromise on engineering. Every piece of equipment has been selected to ensure optimal anatomical tension curves, structural durability, and user safety.
            </p>
          </div>

          {/* Grid check-list */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((high, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-2.5 p-4 rounded-xl border border-white/5 bg-onyx-card"
              >
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300 leading-relaxed">{high}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
