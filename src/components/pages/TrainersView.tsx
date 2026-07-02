import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Award, Sparkles, BookOpen, Clock } from 'lucide-react';
import { TRAINERS_DATA } from '../../data';
import { Trainer } from '../../types';

interface TrainerCardProps {
  trainer: Trainer;
  key?: string;
}

function TrainerCard({ trainer }: TrainerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[480px] w-full [perspective:1000px] group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative h-full w-full [transform-style:preserve-3d] rounded-2xl border border-white/5 shadow-2xl bg-onyx-card"
      >
        {/* FRONT SIDE (Image & Basic Info) */}
        <div className="absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden] overflow-hidden flex flex-col justify-end">
          <img
            src={trainer.image}
            alt={trainer.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Custom overlays for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-95" />

          {/* Basic overlay info */}
          <div className="p-6 relative z-10 space-y-2 text-left">
            <span className="inline-block rounded-md bg-gold px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-black">
              {trainer.role}
            </span>
            <h3 className="font-display text-xl font-black uppercase text-white tracking-wide">
              {trainer.name}
            </h3>
            <p className="text-xs text-gold font-semibold tracking-wide">
              {trainer.specialty}
            </p>
            <p className="text-[10px] text-gray-400 flex items-center gap-1 pt-1.5 border-t border-white/10">
              <Clock size={12} className="text-gold" /> {trainer.experience} Years Experience • <span className="text-white hover:underline">Tap to view credentials</span>
            </p>
          </div>
        </div>

        {/* BACK SIDE (Certifications, Bio, Socials) */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-onyx border border-gold/20 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between text-left overflow-y-auto">
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-gold">
                Credentials & Bio
              </span>
              <h3 className="font-display text-lg font-black uppercase text-white tracking-tight mt-1">
                {trainer.name}
              </h3>
            </div>

            {/* Certifications badges */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-1">
                <Award size={12} className="text-gold" /> Certifications:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {trainer.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-white/5 border border-white/10 px-2 py-1 text-[9px] font-bold text-gray-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-1">
                <BookOpen size={12} className="text-gold" /> Biography:
              </p>
              <p className="text-xs text-gray-300 leading-relaxed italic">
                "{trainer.bio}"
              </p>
            </div>
          </div>

          {/* Socials & Action */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {trainer.socials.instagram && (
                <a
                  href={trainer.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-gray-400 hover:text-gold hover:border-gold transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Instagram size={14} />
                </a>
              )}
              {trainer.socials.twitter && (
                <a
                  href={trainer.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-gray-400 hover:text-gold hover:border-gold transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Twitter size={14} />
                </a>
              )}
              {trainer.socials.facebook && (
                <a
                  href={trainer.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-onyx-card text-gray-400 hover:text-gold hover:border-gold transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Facebook size={14} />
                </a>
              )}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded border border-gold/15">
              Tap to Flip Back
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TrainersView() {
  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* PAGE HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 border-b border-white/5">
        <p className="text-xs font-black uppercase tracking-widest text-gold">
          Certified Specialists
        </p>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Meet the Onyx Force
        </h1>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Hover on desktop or tap on mobile to flip the cards and view certifications, full bio logs, and fitness specialties.
        </p>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {TRAINERS_DATA.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>

      {/* EDUCATION ACCREDITATION */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-2xl border border-white/5 bg-onyx-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 border border-gold/30 text-gold">
            <Sparkles size={32} />
          </div>
          <div className="space-y-2 text-left">
            <h4 className="font-display text-base font-black uppercase text-white tracking-wide">
              The Onyx Accreditation Standard
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every trainer at Onyx Fitness must hold a valid, globally recognized certification from accredited bodies like NASM, NSCA, ACE, or possess academic degrees in physical therapy or sports physiology. We conduct internal physical mechanics testing weekly to guarantee our coaching remains second-to-none.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
