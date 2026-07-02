import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Lightbox({ isOpen, imageUrl, title, onClose, onNext, onPrev }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black cursor-zoom-out"
          />

          {/* Lightbox Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-h-full max-w-5xl z-10 overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:text-gold hover:bg-black/80 transition-all z-20"
              title="Close"
            >
              <X size={22} />
            </button>

            {/* Title display */}
            <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-sm">
              <p className="font-display text-xs font-black uppercase text-gold tracking-widest flex items-center gap-1">
                <ZoomIn size={12} /> Onyx Arena Gallery
              </p>
              <h4 className="font-display text-base font-bold text-white mt-1 uppercase">
                {title}
              </h4>
            </div>

            {/* Next / Prev Controls */}
            {onPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-4 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:text-gold hover:bg-black/80 transition-all z-20"
                title="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {onNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:text-gold hover:bg-black/80 transition-all z-20"
                title="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* High res Image */}
            <img
              src={imageUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl border border-white/5"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
