import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, User, Search, Filter, BellRing } from 'lucide-react';
import { CLASS_SCHEDULE_DATA } from '../../data';

export default function ScheduleView() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Get current day of the week dynamically
  const getCurrentDayName = () => {
    const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
    const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1; // convert to Mon=0, Sun=6
    return daysOfWeek[mappedIndex] || 'Monday';
  };

  const todayDayName = getCurrentDayName();
  const [selectedDay, setSelectedDay] = useState<string>(todayDayName);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [reminders, setReminders] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Strength', 'HIIT', 'Yoga', 'CrossFit', 'Combat', 'Cardio', 'Group'];

  // Filter schedule items based on selected day & category
  const filteredSchedule = CLASS_SCHEDULE_DATA.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  const toggleReminder = (id: string) => {
    setReminders((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      // Save to localStorage
      localStorage.setItem('onyx_class_reminders', JSON.stringify(updated));
      return updated;
    });
  };

  // Load reminders from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('onyx_class_reminders');
    if (stored) {
      try {
        setReminders(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <div className="bg-onyx text-white min-h-screen pt-24 pb-16">
      {/* PAGE HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4 border-b border-white/5">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-black uppercase text-gold tracking-wider">
          <Calendar size={12} /> Live Weekly Timetable
        </div>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Class Schedule
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Today is <span className="text-gold font-bold">{todayDayName}</span>. Filter our weekly training slots, set training reminders, and synchronize your lifting calendar.
        </p>
      </section>

      {/* FILTER BUTTONS & DAY TABS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Day Selector Tabs (Monday to Sunday) */}
        <div className="flex flex-wrap gap-2 justify-center border-b border-white/5 pb-6">
          {daysOfWeek.map((day) => {
            const isToday = day === todayDayName;
            const isSelected = day === selectedDay;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`relative px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-gold text-black shadow-lg shadow-gold/25 font-black'
                    : 'border border-white/10 bg-onyx-card text-gray-300 hover:border-white/20'
                }`}
              >
                <span>{day}</span>
                {isToday && (
                  <span className={`absolute -top-1.5 -right-1 flex h-3.5 w-7 items-center justify-center rounded-full text-[7px] font-black tracking-tighter uppercase ${
                    isSelected ? 'bg-black text-gold' : 'bg-gold text-black animate-pulse'
                  }`}>
                    TODAY
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-gold/15 border border-gold text-gold'
                    : 'border border-white/5 bg-onyx-card text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* SCHEDULE TABLE / CARDS GRID */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredSchedule.map((item, idx) => {
              const isReminderSet = !!reminders[item.id];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className={`relative rounded-xl border p-5 md:p-6 bg-onyx-card transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    selectedDay === todayDayName
                      ? 'border-gold/30 shadow-[0_0_15px_rgba(245,197,24,0.05)]'
                      : 'border-white/5'
                  }`}
                >
                  {/* Left Column (Time & Category Badge) */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-onyx border border-white/5 text-gold">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-black text-white tracking-wide uppercase">
                        {item.className}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <User size={12} className="text-gold" /> {item.trainer}
                        </span>
                        <span>•</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/5 px-2 py-0.5 rounded border border-gold/10">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Time block & reminder switch) */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
                    <div className="text-left sm:text-right">
                      <p className="text-xs font-bold text-gray-300 tracking-wider">
                        {item.time}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">
                        Main Strength Arena
                      </p>
                    </div>

                    <button
                      onClick={() => toggleReminder(item.id)}
                      className={`rounded-lg border px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        isReminderSet
                          ? 'border-gold bg-gold text-black'
                          : 'border-white/10 bg-transparent text-gray-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <BellRing size={14} />
                      <span>{isReminderSet ? 'Set!' : 'Alert'}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredSchedule.length === 0 && (
            <div className="text-center py-16 rounded-xl border border-dashed border-white/10 bg-onyx-card/50 space-y-3">
              <p className="text-sm text-gray-500 font-medium">No classes scheduled under this filter category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-xs font-bold text-gold uppercase tracking-wider border border-gold/20 bg-gold/5 px-4 py-2 rounded-lg hover:bg-gold hover:text-black transition-all"
              >
                Show All Categories
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
