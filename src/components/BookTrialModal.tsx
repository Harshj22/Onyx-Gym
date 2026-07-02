import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Check, ShieldAlert, Award, Star } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface BookTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
}

export default function BookTrialModal({ isOpen, onClose, selectedPlanName }: BookTrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedPlanName || 'pt',
    timeSlot: 'Morning (7:00 AM - 11:00 AM)',
    date: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setError('Please fill in all required fields (Name, Email, Phone, Date).');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Simulate real database persistence using localStorage
    setTimeout(() => {
      const bookedTrials = JSON.parse(localStorage.getItem('onyx_booked_trials') || '[]');
      const newTrial = {
        ...formData,
        id: 'TRIAL_' + Date.now(),
        bookedAt: new Date().toISOString()
      };
      bookedTrials.push(newTrial);
      localStorage.setItem('onyx_booked_trials', JSON.stringify(bookedTrials));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'pt',
      timeSlot: 'Morning (7:00 AM - 11:00 AM)',
      date: '',
      motivation: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold/20 bg-onyx-card p-6 shadow-2xl md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold tracking-wider uppercase mb-2"
                  >
                    <Award size={14} /> 1-Day Premium Pass
                  </motion.div>
                  <h3 className="font-display text-2xl font-black tracking-tight text-white uppercase md:text-3xl">
                    Claim Your <span className="text-gold">Free Trial</span>
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    No credit card. No commitment. Just forge your strength.
                  </p>
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-950/50 border border-red-500/30 p-3 text-sm text-red-200">
                    <ShieldAlert size={16} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@gmail.com"
                        className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Select Focus Program
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-sm text-white transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.id} className="bg-onyx-card text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-sm text-white transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'Morning (7:00 AM - 11:00 AM)',
                        'Afternoon (11:00 AM - 4:00 PM)',
                        'Evening (4:00 PM - 10:00 PM)'
                      ].map((slot) => {
                        const isSelected = formData.timeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeSlot: slot })}
                            className={`rounded-lg border py-2 px-1 text-center text-xs font-medium transition-all duration-200 ${
                              isSelected
                                ? 'border-gold bg-gold/10 text-gold'
                                : 'border-white/10 bg-black text-gray-400 hover:border-white/20'
                            }`}
                          >
                            {slot.split(' ')[0]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Your Training Goal / Motivation (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      placeholder="e.g. Build core strength, fat loss, recover from shoulder injury..."
                      className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-trial-btn"
                    className="relative w-full overflow-hidden rounded-lg bg-gold py-3 text-center text-sm font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-gold-hover hover:shadow-[0_0_15px_rgba(245,197,24,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Forging Pass...
                      </span>
                    ) : (
                      'Forging My Free Pass'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-6"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 border border-gold/30 text-gold animate-bounce">
                  <Check size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black uppercase text-white tracking-tight">
                    Strength Forged!
                  </h3>
                  <p className="text-sm text-gray-300 px-2">
                    Congratulations, <span className="text-gold font-bold">{formData.name}</span>! Your 1-Day VIP Pass is successfully locked in for <span className="text-white font-semibold">{formData.date}</span>.
                  </p>
                </div>

                <div className="rounded-xl bg-black border border-white/5 p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Selected Program:</span>
                    <span className="text-white font-bold">{SERVICES_DATA.find(s => s.id === formData.service)?.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Scheduled Time:</span>
                    <span className="text-gold font-semibold">{formData.timeSlot.split(' ')[0]} Slot</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Onyx Location:</span>
                    <span className="text-white">Main Strength Arena (Metro Hub)</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  We have dispatched confirmation details to <span className="text-gray-300">{formData.email}</span>. Please show this receipt at the front desk.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="rounded-lg border border-gold/30 bg-transparent px-6 py-2 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold hover:text-black transition-all"
                  >
                    Done & Return
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
