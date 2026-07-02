import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Award, Shield, Calendar } from 'lucide-react';

interface StatCounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function StatCounter({ end, suffix, duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={countRef} className="font-display text-4xl font-black tracking-tight text-gold md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      id: 'stat1',
      icon: <Users className="h-6 w-6 text-gold" />,
      title: 'Active Members',
      end: 500,
      suffix: '+',
      description: 'Forging their dreams daily'
    },
    {
      id: 'stat2',
      icon: <Award className="h-6 w-6 text-gold" />,
      title: 'Elite Coaches',
      end: 12,
      suffix: '+',
      description: 'Certified masters of strength'
    },
    {
      id: 'stat3',
      icon: <Shield className="h-6 w-6 text-gold" />,
      title: 'Years Legacy',
      end: 5,
      suffix: '+',
      description: 'Fostering athletic longevity'
    },
    {
      id: 'stat4',
      icon: <Calendar className="h-6 w-6 text-gold" />,
      title: 'Weekly Classes',
      end: 25,
      suffix: '+',
      description: 'From heavy lifting to HIIT'
    }
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black py-12">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-onyx-card border border-white/10 shadow-lg">
                {stat.icon}
              </div>
              <div className="pt-2">
                <StatCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {stat.title}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
