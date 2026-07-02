import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, Check, Award, Flame } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data';
import { Testimonial } from '../../types';

export default function TestimonialsView() {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Member',
    rating: 5,
    quote: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load custom reviews from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('onyx_custom_reviews');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setReviews([...TESTIMONIALS_DATA, ...parsed]);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const customReviews = JSON.parse(localStorage.getItem('onyx_custom_reviews') || '[]');
      const createdReview: Testimonial = {
        id: 'REV_CUSTOM_' + Date.now(),
        name: newReview.name,
        role: `${newReview.role} (Verified)`,
        rating: newReview.rating,
        quote: newReview.quote,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150' // elegant default profile
      };

      const updatedCustom = [...customReviews, createdReview];
      localStorage.setItem('onyx_custom_reviews', JSON.stringify(updatedCustom));
      setReviews([...TESTIMONIALS_DATA, ...updatedCustom]);

      setIsSubmitting(false);
      setIsSuccess(true);
      setNewReview({ name: '', role: 'Member', rating: 5, quote: '' });

      setTimeout(() => {
        setIsSuccess(false);
        setIsFormOpen(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* PAGE HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 border-b border-white/5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-black uppercase text-gold tracking-wider">
          <Flame size={12} /> Community Feedback
        </div>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Client Transformations
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Read raw stories of hard work, progressive overload, physical longevity, and athletic mastery directly from our active membership.
        </p>

        {/* Write a testimonial CTA button */}
        <div className="pt-2">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="rounded-lg border border-gold/40 bg-gold/5 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-1.5 mx-auto hover:shadow-[0_0_15px_rgba(245,197,24,0.3)]"
          >
            <MessageSquarePlus size={14} />
            {isFormOpen ? 'Cancel Submission' : 'Write a Review'}
          </button>
        </div>
      </section>

      {/* DYNAMIC REVIEW FORM POP DOWN */}
      <AnimatePresence>
        {isFormOpen && (
          <section className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 mt-6">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-2xl border border-gold/20 bg-onyx-card p-6 shadow-xl space-y-4 overflow-hidden"
            >
              <h3 className="font-display text-xs font-black uppercase tracking-widest text-gold text-center border-b border-white/5 pb-2">
                Submit Your Onyx Review
              </h3>

              {isSuccess ? (
                <div className="py-6 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 border border-gold/30 text-gold animate-bounce">
                    <Check size={24} />
                  </div>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">Testimonial Published!</h4>
                  <p className="text-[11px] text-gray-400">Thank you for contributing to the Onyx legacy.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="e.g. Aditi Patel"
                        className="w-full rounded-lg border border-white/10 bg-black px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Your Role / Duration
                      </label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="e.g. Member since 2023"
                        className="w-full rounded-lg border border-white/10 bg-black px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-gold transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Star Rating (1-5)
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            size={20}
                            fill={star <= newReview.rating ? '#F5C518' : 'none'}
                            className={star <= newReview.rating ? 'text-gold' : 'text-gray-600'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Your Transformation Quote / Review *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newReview.quote}
                      onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                      placeholder="Share your experience at Onyx: the gear, sauna facilities, coaching quality, or your physical improvements..."
                      className="w-full rounded-lg border border-white/10 bg-black px-3.5 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-gold transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-gold py-2.5 text-center text-xs font-black uppercase tracking-widest text-black hover:bg-gold-hover transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Publishing...' : 'Publish Testimonial'}
                  </button>
                </form>
              )}
            </motion.div>
          </section>
        )}
      </AnimatePresence>

      {/* GRID OF REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -6, borderColor: 'rgba(245,197,24,0.2)' }}
              className="rounded-2xl border border-white/5 bg-onyx-card p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < rev.rating ? '#F5C518' : 'none'}
                      className={i < rev.rating ? 'text-gold' : 'text-gray-600'}
                    />
                  ))}
                </div>

                <blockquote className="text-xs text-gray-300 leading-relaxed font-light italic">
                  "{rev.quote}"
                </blockquote>
              </div>

              {/* Profile info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <img
                  src={rev.image}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full border border-gold/20 object-cover shrink-0"
                />
                <div>
                  <h4 className="font-display text-xs font-bold uppercase text-white tracking-wider">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACCREDITATION LOGO BANNER */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-2xl border border-white/5 bg-onyx-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold">
            <Award size={26} />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display text-sm font-black uppercase text-white tracking-wide">
              Verified Transforming Community
            </h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Our review records are logged transparently directly from our digital client interface. We never buy, mock, or fake active member outputs. Hard work is earned.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
