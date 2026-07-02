import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Flame, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../../data';

interface PricingViewProps {
  onBookTrialOpen: (planName?: string) => void;
}

export default function PricingView({ onBookTrialOpen }: PricingViewProps) {
  // Calculator state
  const [tier, setTier] = useState<'standard' | 'student' | 'corporate'>('standard');
  const [selectedPlanId, setSelectedPlanId] = useState('12m');

  const discountFactors = {
    standard: 1,
    student: 0.85, // 15% discount
    corporate: 0.80 // 20% discount
  };

  const getDiscountName = () => {
    if (tier === 'student') return 'Student Peak Discount (15% OFF)';
    if (tier === 'corporate') return 'Corporate Wellness Bundle (20% OFF)';
    return 'Standard Premium Rates';
  };

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* 🎉 BANNER ABOVE PRICING */}
      <section className="bg-gradient-to-r from-gold/20 via-black to-gold/20 border-y border-gold/30 py-3.5 text-center px-4 relative">
        <div className="absolute inset-0 bg-gold/5 animate-pulse-slow" />
        <div className="relative z-10 mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="font-display text-xs font-black uppercase text-gold tracking-widest flex items-center gap-1">
            <Flame size={14} className="animate-bounce" /> 🎉 1-Day Free Trial Available
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="text-xs text-gray-300">
            No Commitment Required. Come test out the power racks and sauna today!
          </span>
          <button
            onClick={() => onBookTrialOpen('Free Trial')}
            className="rounded-full bg-gold hover:bg-gold-hover text-black font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 transition-all shadow-md shadow-gold/10"
          >
            Claim Free Pass
          </button>
        </div>
      </section>

      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center space-y-4">
        <p className="text-xs font-black uppercase tracking-widest text-gold">
          Onyx Passports
        </p>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Membership Tariffs
        </h1>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          All packages include full access to the strength zone, locker rooms, high-performance cardio, and certified trainers.
        </p>
      </section>

      {/* INTERACTIVE PRICE TARIFF CALCULATOR */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-2xl border border-white/5 bg-onyx-card p-6 shadow-xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gold/5 blur-xl" />

          <h3 className="font-display text-sm font-black uppercase text-white tracking-wider mb-4 text-center">
            🧮 Custom Discount Simulator
          </h3>
          <p className="text-xs text-gray-400 text-center mb-6">
            Are you currently enrolled in college or exploring corporate team options? Select your tier to calculate final rates:
          </p>

          <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
            {(['standard', 'student', 'corporate'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`rounded-lg border py-2.5 px-1.5 text-center text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  tier === t
                    ? 'border-gold bg-gold/10 text-gold shadow-lg shadow-gold/5'
                    : 'border-white/10 bg-black text-gray-400 hover:border-white/20'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6 border-t border-white/5 pt-4 text-center">
            <span className="text-[10px] uppercase tracking-wider text-gold font-bold bg-gold/5 border border-gold/15 px-3 py-1 rounded-full inline-block">
              {getDiscountName()}
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const isBestValue = plan.isPopular; // 1 Year is marked as Best Value
            const calculatedPrice = Math.floor(plan.price * discountFactors[tier]);
            const savings = plan.price - calculatedPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl border bg-onyx-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  isBestValue
                    ? 'border-gold shadow-[0_0_20px_rgba(245,197,24,0.15)] ring-1 ring-gold/40'
                    : 'border-white/5'
                }`}
              >
                {isBestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[9px] font-black uppercase tracking-widest text-black animate-pulse-slow">
                    🔥 BEST VALUE
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xs font-black uppercase tracking-widest text-gray-400">
                      {plan.name}
                    </h3>
                    
                    <div className="mt-4 flex flex-col">
                      <div className="flex items-baseline">
                        <span className="font-display text-4xl font-black tracking-tight text-white">
                          ₹{calculatedPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="ml-1 text-xs text-gray-400">
                          / {plan.period}
                        </span>
                      </div>
                      
                      {savings > 0 && (
                        <span className="text-[10px] text-green-400 font-bold mt-1.5 flex items-center gap-1">
                          <Check size={10} /> Saved ₹{savings.toLocaleString('en-IN')} with discount
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3.5 text-xs text-gray-300 border-t border-white/5 pt-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check size={14} className="text-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onBookTrialOpen(plan.name)}
                    className={`w-full rounded-lg py-3 text-center text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                      isBestValue
                        ? 'bg-gold hover:bg-gold-hover text-black shadow-lg shadow-gold/25'
                        : 'border border-white/20 bg-transparent text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    Choose {plan.name.split(' ')[0]} Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HELPFUL COMPARISON TABLE */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-2xl border border-white/5 bg-onyx-card p-6 md:p-8">
          <h3 className="font-display text-lg font-black uppercase text-white tracking-tight text-center mb-6">
            Compare Privileges
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Privilege</th>
                  <th className="py-3 px-4">1 Month</th>
                  <th className="py-3 px-4">3 Months</th>
                  <th className="py-3 px-4">6 Months</th>
                  <th className="py-3 px-4 text-gold">1 Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300 font-medium">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Full Strength Floor Access</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4 text-gold">✔</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">InBody Reports</td>
                  <td className="py-3.5 px-4 text-gray-600">-</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4 text-gold">✔</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Sauna & Steam Therapy</td>
                  <td className="py-3.5 px-4 text-gray-600">-</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4 text-gold">✔</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Group Fitness Access</td>
                  <td className="py-3.5 px-4 text-gray-600">Guest Pass</td>
                  <td className="py-3.5 px-4 text-gray-600">Guest Pass</td>
                  <td className="py-3.5 px-4">✔</td>
                  <td className="py-3.5 px-4 text-gold">✔</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Personal Training Sessions</td>
                  <td className="py-3.5 px-4 text-gray-600">-</td>
                  <td className="py-3.5 px-4 text-gray-400">1 Session</td>
                  <td className="py-3.5 px-4 text-gray-400">3 Sessions</td>
                  <td className="py-3.5 px-4 text-gold font-bold">12 Sessions</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Private Locker Reservation</td>
                  <td className="py-3.5 px-4 text-gray-600">-</td>
                  <td className="py-3.5 px-4 text-gray-600">-</td>
                  <td className="py-3.5 px-4 text-gray-600">-</td>
                  <td className="py-3.5 px-4 text-gold font-bold">Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
