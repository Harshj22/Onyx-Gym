import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, Camera, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../../data';
import Lightbox from '../Lightbox';

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'facilities', 'workouts', 'cardio', 'boxing'];

  const filteredGallery = GALLERY_DATA.filter((img) => {
    return selectedCategory === 'All' || img.category === selectedCategory;
  });

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
  };

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* PAGE HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 border-b border-white/5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-black uppercase text-gold tracking-wider">
          <Camera size={12} /> Visual Tour
        </div>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          The Onyx Arena
        </h1>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Explore our premium barbell zones, heavy hammer stacks, custom training platforms, combat boxing rings, and Swedish dry heat sauna recovery.
        </p>
      </section>

      {/* CATEGORY SELECTOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-gold text-black shadow-lg shadow-gold/25 font-black'
                    : 'border border-white/10 bg-onyx-card text-gray-300 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-onyx-card cursor-pointer shadow-lg"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover overlay with dynamic magnifying icon */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center space-y-2 z-10">
                    <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold animate-bounce">
                      <Eye size={18} />
                    </div>
                    <p className="text-[10px] font-black uppercase text-gold tracking-wider">
                      Zoom Arena View
                    </p>
                    <h4 className="font-display text-xs font-bold text-white uppercase text-center px-4">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* PORTAL LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          imageUrl={filteredGallery[lightboxIndex].url}
          title={filteredGallery[lightboxIndex].title}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
}
