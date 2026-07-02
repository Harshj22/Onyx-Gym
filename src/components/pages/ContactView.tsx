import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Check, Sparkles, Award, MessageCircle } from 'lucide-react';

interface ContactViewProps {
  onBookTrialOpen: () => void;
}

export default function ContactView({ onBookTrialOpen }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Membership Query',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Save contact submission to localStorage
      const submissions = JSON.parse(localStorage.getItem('onyx_contact_submissions') || '[]');
      submissions.push({ ...formData, id: 'MSG_' + Date.now(), submittedAt: new Date().toISOString() });
      localStorage.setItem('onyx_contact_submissions', JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Membership Query', message: '' });
    }, 1200);
  };

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* HERO TITLE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 border-b border-white/5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-black uppercase text-gold tracking-wider">
          <Award size={12} /> Live Support
        </div>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Reach our customer success desk, request custom corporate programs, or speak directly to our sports physical therapy directors.
        </p>
      </section>

      {/* TWO COLUMN CONTENT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Column 1: Contact Details & Trial Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-xs font-black uppercase tracking-widest text-gold">
                HQ Location
              </h2>
              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                The Onyx Main Arena
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                Located in the thriving heart of Bandra West, our facilities occupy 15,000 square feet of customized concrete and steel. Drop in for a premium tour.
              </p>
            </div>

            {/* List detail logs */}
            <div className="space-y-4 text-xs">
              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-onyx-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-white tracking-wide">Main Arena Address</h4>
                  <p className="text-gray-400 mt-1">Onyx Building, Plot 45, Off Link Road, Bandra West, Mumbai, MH - 400050</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-onyx-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-white tracking-wide">Customer Desk Numbers</h4>
                  <p className="text-gray-400 mt-1">+91 98765 43210 (Sales & Bookings)</p>
                  <p className="text-gray-400 mt-0.5">+91 22 2640 4321 (Front Desk Support)</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-onyx-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-white tracking-wide">Electronic Inboxes</h4>
                  <p className="text-gray-400 mt-1">join@onyxfitness.in (New Memberships)</p>
                  <p className="text-gray-400 mt-0.5">corporate@onyxfitness.in (Corporate Packages)</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-onyx-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-white tracking-wide">Working Operating Hours</h4>
                  <p className="text-gray-400 mt-1">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                  <p className="text-gray-400 mt-0.5">Personal Training Slots: 6:00 AM - 10:00 PM (by booking)</p>
                </div>
              </div>
            </div>

            {/* 🔥 "Claim Your Free 1-Day Trial" animated CTA button */}
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent p-6 text-left space-y-4">
              <div className="space-y-1">
                <span className="font-display text-[10px] font-black uppercase text-gold tracking-widest flex items-center gap-1">
                  <Sparkles size={12} className="animate-spin-slow" /> VIP Pass Offer
                </span>
                <h4 className="font-display text-lg font-black uppercase text-white tracking-tight">
                  Get 1-Day All-Access Pass
                </h4>
                <p className="text-xs text-gray-400">
                  Try the weights, compound lifting racks, and traditional dry sauna free of charge. No contracts.
                </p>
              </div>
              <button
                onClick={onBookTrialOpen}
                className="rounded-lg bg-gold hover:bg-gold-hover text-black font-black text-xs uppercase tracking-wider px-5 py-3 transition-all hover:shadow-[0_0_15px_rgba(245,197,24,0.4)] animate-bounce"
              >
                Claim Your Free 1-Day Trial
              </button>
            </div>
          </motion.div>

          {/* Column 2: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/5 bg-onyx-card p-6 md:p-8 shadow-2xl relative"
          >
            <h3 className="font-display text-base font-black uppercase text-white tracking-tight mb-6">
              Send an Instant Message
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 border border-gold/30 text-gold">
                    <Check size={28} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-black uppercase text-white tracking-tight">
                      Message Dispatched!
                    </h4>
                    <p className="text-xs text-gray-400 px-6 mt-1.5 leading-relaxed">
                      Thank you for contacting Onyx Fitness. Our guest relations managers will reach out to you at your verified email/phone number within 2 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-lg border border-gold/30 bg-transparent px-5 py-2 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold hover:text-black transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@gmail.com"
                        className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 99999 88888"
                        className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Subject Matter
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-xs text-white transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    >
                      <option className="bg-onyx-card" value="Membership Query">New Membership Plans</option>
                      <option className="bg-onyx-card" value="Personal Training Inquiry">Personal Coaching Packages</option>
                      <option className="bg-onyx-card" value="Corporate Corporate Program">Corporate Wellness Deals</option>
                      <option className="bg-onyx-card" value="Physical Therapy Booking">Physiotherapy & Rehab booking</option>
                      <option className="bg-onyx-card" value="Feedback Support">General Feedback & Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Your Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message details here... (e.g. I have a lower back injury, can I train safely?)"
                      className="w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-all focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-gold py-3 text-center text-xs font-black uppercase tracking-wider text-black hover:bg-gold-hover transition-colors flex items-center justify-center gap-1.5 font-sans"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <>
                        <Send size={14} /> Send Inquiry Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* DETAILED INTERACTIVE MAP EMBED */}
      <section className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-display text-xs font-black uppercase tracking-widest text-gold">
              Navigation Coordinates
            </h3>
            <h4 className="font-display text-2xl font-black uppercase text-white tracking-tight">
              Interactive Arena Map Location
            </h4>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 h-96 w-full shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2185521992923!2d72.8256333!3d19.0541249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93813fdc7eb%3A0x6b63ca6f63be3d48!2sLink%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Onyx Fitness Bandra Mumbai Large"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
