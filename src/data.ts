import { Trainer, Service, PricingPlan, ClassScheduleItem, Testimonial, GalleryItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'pt',
    title: 'Personal Training',
    description: 'One-on-one expert guidance customized specifically to your physiological profile and body composition targets.',
    iconName: 'User',
    fullDetails: 'Work directly with certified trainers who map out every rep, track metrics, adjust mechanics, and hold you accountable.'
  },
  {
    id: 'group',
    title: 'Group Fitness Classes',
    description: 'Dynamic team energy incorporating heart-pumping Zumba, fast-paced HIIT, and intense rhythmic Aerobics.',
    iconName: 'Users',
    fullDetails: 'Get swept up in collective motivation. Led by energetic instructors who push your limits in an electric social environment.'
  },
  {
    id: 'strength',
    title: 'Strength & Conditioning',
    description: 'Focus on progressive overload, barbell compound moves, and fundamental functional mechanics to build raw power.',
    iconName: 'Dumbbell',
    fullDetails: 'Unleash athletic capability by utilizing state-of-the-art power racks, custom bumper plates, and strategic periodization logs.'
  },
  {
    id: 'cardio',
    title: 'Cardio Training',
    description: 'Elevate aerobic thresholds with top-tier treadmills, stair climbers, rowing units, and simulated incline terrains.',
    iconName: 'Heart',
    fullDetails: 'Boost oxygenation profiles and burn calories using high-performance cardiovascular machines featuring integrated tracking screens.'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'High-intensity, constantly varied functional movements executed at high intensity inside our custom-built box.',
    iconName: 'Activity',
    fullDetails: 'Push boundaries with Olympic lifting, gymnastics, and kettlebells in competitive yet welcoming community-led workouts.'
  },
  {
    id: 'yoga',
    title: 'Yoga & Flexibility',
    description: 'Cultivate balance, lengthen muscle fibers, and restore physical core strength via focused Vinyasa and Yin flows.',
    iconName: 'Compass',
    fullDetails: 'Calm the nervous system, stretch tight fascia, and master breathing protocols to perfectly complement heavy lifting.'
  },
  {
    id: 'weightloss',
    title: 'Weight Loss Programs',
    description: 'A scientifically structured fat mobilization system pairing high-energy metabolic training with sustainable calorie control.',
    iconName: 'TrendingDown',
    fullDetails: 'Target fat mass while preserving lean muscle using combined bioimpedance scales, dietary targets, and calorie-dense workouts.'
  },
  {
    id: 'muscle',
    title: 'Muscle Building Programs',
    description: 'Hypertrophy-focused training templates optimized for scientific volume, tension, and optimal metabolic recovery window.',
    iconName: 'Zap',
    fullDetails: 'Sculpt muscle symmetry using proven split schedules, custom isolated machines, and strategic rest-pause sets.'
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Diet Consultation',
    description: 'Detailed macronutrient and micronutrient blueprints curated to fuel training demands and body transformation cycles.',
    iconName: 'Apple',
    fullDetails: 'Includes periodic assessments, metabolic rate calculations, habit trackers, and personalized shopping guides.'
  },
  {
    id: 'boxing',
    title: 'Boxing / MMA Training',
    description: 'Develop explosive speed, tactical footwork, core rotation power, and defensive precision in our professional combat ring.',
    iconName: 'Shield',
    fullDetails: 'Intense heavy bag drills, pad work, and self-defense skills that build incredible conditioning and mental focus.'
  },
  {
    id: 'functional',
    title: 'Functional Training',
    description: 'Multi-planar movements using sandbags, suspension rings, and medicine balls to optimize daily kinetic execution.',
    iconName: 'RotateCcw',
    fullDetails: 'Enhance stabilizer muscle activation, rotational strength, and injury resilience by training movements, not just muscles.'
  },
  {
    id: 'spinning',
    title: 'Spinning / Cycling Classes',
    description: 'High-octane cycling sessions set to high-energy visual tempos and immersive surround acoustics.',
    iconName: 'Bike',
    fullDetails: 'Climb hills, execute intervals, and test your cardiovascular stamina inside our soundproof premium spinning theatre.'
  },
  {
    id: 'physio',
    title: 'Physiotherapy & Recovery',
    description: 'Professional sports therapy, targeted trigger point release, and joint mobilization routines to target persistent wear.',
    iconName: 'Activity',
    fullDetails: 'Accelerate systemic recovery, address muscular imbalances, and return to full-load lifting under expert clinical guidance.'
  },
  {
    id: 'kids',
    title: 'Kids & Teen Fitness',
    description: 'Enthusiastic and highly engaging fundamental coordination, agility, and bodyweight mechanics for younger groups.',
    iconName: 'Sparkles',
    fullDetails: 'Build a healthy, lifetime relationship with physical activity through gamified skill courses and non-intimidating basics.'
  },
  {
    id: 'senior',
    title: 'Senior Citizen Fitness',
    description: 'Paced, low-impact strength training designed to sustain bone density, balance, and independence.',
    iconName: 'Smile',
    fullDetails: 'Maintain joint mobility and muscular strength with safe, certified protocols custom-tailored for senior vitality.'
  },
  {
    id: 'virtual',
    title: 'Online / Virtual Training',
    description: 'Immersive remote coaching with structured video workouts and interactive live tracking apps.',
    iconName: 'Tv',
    fullDetails: 'Access premium workout plans, record metric logs, and video-call your trainer from anywhere in the world.'
  },
  {
    id: 'locker',
    title: 'Premium Locker & Sauna',
    description: 'Luxury showers, digital safety lockboxes, fresh towel services, and dry heat saunas for post-workout therapy.',
    iconName: 'Award',
    fullDetails: 'Unwind and accelerate lactic acid removal inside our premium timber-lined dry heat sauna facilities.'
  },
  {
    id: 'bar',
    title: 'Supplement & Nutrition Bar',
    description: 'Fresh cold-pressed juices, amino infusions, premium whey isolates, and healthy energy-dense macros.',
    iconName: 'Coffee',
    fullDetails: 'Fuel your workout or kickstart post-exercise tissue repair immediately with customized shaker cups and supplements.'
  },
  {
    id: 'corporate',
    title: 'Corporate Fitness Packages',
    description: 'Tailored workplace wellness memberships, group seminars, and custom team building fitness challenges.',
    iconName: 'Briefcase',
    fullDetails: 'Enhance employee cognitive focus, reduce sick leaves, and build healthy organizational cultures.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1m',
    name: '1 Month Membership',
    price: 3000,
    period: 'Month',
    features: [
      'Unlimited Access to Strength Floor',
      'Free Fitness Assessment Log',
      'Standard Locker & Shower Access',
      '2 Group Fitness Guest Passes',
      'Cardio Deck & Functional Zone'
    ]
  },
  {
    id: '3m',
    name: '3 Month Membership',
    price: 5000,
    period: '3 Months',
    features: [
      'Everything in 1-Month Plan',
      '1 Complimentary Personal Trainer Session',
      'Access to Sauna & Steam Recovery Rooms',
      '10% Discount at Supplement Bar',
      'In-Body Composition Reports'
    ]
  },
  {
    id: '6m',
    name: '6 Month Membership',
    price: 9000,
    period: '6 Months',
    features: [
      'Everything in 3-Month Plan',
      '3 Complimentary Personal Trainer Sessions',
      'Unlimited Group Fitness Classes',
      'Customized Diet & Nutrition Blueprint',
      'Exclusive Onyx Fitness Welcome Kit'
    ]
  },
  {
    id: '12m',
    name: '1 Year Membership',
    price: 12000,
    period: 'Year',
    isPopular: true,
    features: [
      'Everything in 6-Month Plan',
      '12 Personal Trainer Sessions (1/Month)',
      'Unlimited Combat & CrossFit Zone Access',
      'Full Locker Reservation Privilege',
      '25% Discount at Supplement Bar',
      'Priority Booking for Guest Seminars'
    ]
  }
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 't1',
    name: 'Vikram "The Iron" Rathore',
    role: 'Head of Strength & CrossFit',
    specialty: 'Powerlifting, CrossFit Coach, Olympic Weightlifting',
    certifications: ['NSCA-CSCS', 'CrossFit Level 3 Trainer', 'IKFF Kettlebell Master'],
    experience: 12,
    bio: 'Former national level powerlifter dedicated to helping everyday athletes shatter plateaus and master precision lifting kinetics.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600&h=750',
    socials: {
      instagram: 'https://instagram.com/vikram_onyx',
      twitter: 'https://twitter.com/vikram_onyx',
      facebook: 'https://facebook.com/vikram.onyx'
    }
  },
  {
    id: 't2',
    name: 'Sarah "Agility" D\'Souza',
    role: 'Lead Functional & HIIT Coach',
    specialty: 'Metabolic Conditioning, Athletic Movement, Kickboxing',
    certifications: ['NASM-PES', 'ACE Group Fitness Specialist', 'TRX Suspension Master'],
    experience: 8,
    bio: 'Passionate advocate of high-intensity functional flows. Sarah constructs intense fat-incinerating metabolic programs that make clients feel like elite athletes.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600&h=750',
    socials: {
      instagram: 'https://instagram.com/sarah_fit',
      facebook: 'https://facebook.com/sarah.fit'
    }
  },
  {
    id: 't3',
    name: 'Rohan "Physio" Sharma',
    role: 'Sports Physiotherapist & Rehab Specialist',
    specialty: 'Injury Recovery, Mobility Flow, Post-Surgical Fitness',
    certifications: ['BPT (Bachelor of Physio)', 'CSCS', 'FMS Level 2 Certified'],
    experience: 9,
    bio: 'Bridging the vital gap between clinical rehabilitation and progressive weightlifting. Rohan ensures you gain pain-free longevity.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=750',
    socials: {
      instagram: 'https://instagram.com/rohan_physio',
      twitter: 'https://twitter.com/rohan_physio'
    }
  },
  {
    id: 't4',
    name: 'Ananya "Zen" Sen',
    role: 'Mind-Body Specialist & Yoga Acharya',
    specialty: 'Ashtanga Vinyasa, Breathwork, Nutrition & Dietetics',
    certifications: ['RYT-500 Certified Yoga Teacher', 'M.Sc. Clinical Nutrition'],
    experience: 7,
    bio: 'Fusing the ancient disciplines of mindfulness and holistic yogic breathing with evidence-based macro nutrition strategies for high-performance lifestyles.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600&h=750',
    socials: {
      instagram: 'https://instagram.com/ananya_zen',
      twitter: 'https://twitter.com/ananya_zen'
    }
  }
];

export const CLASS_SCHEDULE_DATA: ClassScheduleItem[] = [
  // Monday
  { id: 'sch1', className: 'HIIT Conditioning', trainer: 'Sarah D\'Souza', time: '07:00 AM - 08:00 AM', day: 'Monday', category: 'HIIT' },
  { id: 'sch2', className: 'Olympic Weightlifting', trainer: 'Vikram Rathore', time: '09:00 AM - 10:30 AM', day: 'Monday', category: 'Strength' },
  { id: 'sch3', className: 'Power Vinyasa Flow', trainer: 'Ananya Sen', time: '05:30 PM - 06:30 PM', day: 'Monday', category: 'Yoga' },
  { id: 'sch4', className: 'CrossFit WOD', trainer: 'Vikram Rathore', time: '07:00 PM - 08:00 PM', day: 'Monday', category: 'CrossFit' },
  
  // Tuesday
  { id: 'sch5', className: 'Spin Endurance', trainer: 'Sarah D\'Souza', time: '07:00 AM - 08:00 AM', day: 'Tuesday', category: 'Cardio' },
  { id: 'sch6', className: 'Mobility & Spine Flow', trainer: 'Rohan Sharma', time: '11:00 AM - 12:00 PM', day: 'Tuesday', category: 'Yoga' },
  { id: 'sch7', className: 'Core Crusher', trainer: 'Sarah D\'Souza', time: '06:00 PM - 06:45 PM', day: 'Tuesday', category: 'HIIT' },
  { id: 'sch8', className: 'MMA Conditioning', trainer: 'Vikram Rathore', time: '07:00 PM - 08:30 PM', day: 'Tuesday', category: 'Combat' },

  // Wednesday
  { id: 'sch9', className: 'CrossFit WOD', trainer: 'Vikram Rathore', time: '07:00 AM - 08:00 AM', day: 'Wednesday', category: 'CrossFit' },
  { id: 'sch10', className: 'Strength Mechanics', trainer: 'Rohan Sharma', time: '09:00 AM - 10:15 AM', day: 'Wednesday', category: 'Strength' },
  { id: 'sch11', className: 'Ashtanga Yoga', trainer: 'Ananya Sen', time: '05:30 PM - 07:00 PM', day: 'Wednesday', category: 'Yoga' },
  { id: 'sch12', className: 'Zumba Fiesta', trainer: 'Sarah D\'Souza', time: '07:15 PM - 08:15 PM', day: 'Wednesday', category: 'Group' },

  // Thursday
  { id: 'sch13', className: 'HIIT Conditioning', trainer: 'Sarah D\'Souza', time: '07:00 AM - 08:00 AM', day: 'Thursday', category: 'HIIT' },
  { id: 'sch14', className: 'Hypertrophy Split', trainer: 'Vikram Rathore', time: '09:00 AM - 10:30 AM', day: 'Thursday', category: 'Strength' },
  { id: 'sch15', className: 'Injury Free Mobility', trainer: 'Rohan Sharma', time: '04:00 PM - 05:00 PM', day: 'Thursday', category: 'Yoga' },
  { id: 'sch16', className: 'CrossFit WOD', trainer: 'Vikram Rathore', time: '07:00 PM - 08:00 PM', day: 'Thursday', category: 'CrossFit' },

  // Friday
  { id: 'sch17', className: 'Spin Endurance', trainer: 'Sarah D\'Souza', time: '07:00 AM - 08:00 AM', day: 'Friday', category: 'Cardio' },
  { id: 'sch18', className: 'Barbell Club', trainer: 'Vikram Rathore', time: '09:00 AM - 10:30 AM', day: 'Friday', category: 'Strength' },
  { id: 'sch19', className: 'Yin Yoga & Breath', trainer: 'Ananya Sen', time: '05:30 PM - 06:45 PM', day: 'Friday', category: 'Yoga' },
  { id: 'sch20', className: 'Kickboxing Padwork', trainer: 'Vikram Rathore', time: '07:00 PM - 08:30 PM', day: 'Friday', category: 'Combat' },

  // Saturday
  { id: 'sch21', className: 'Weekend Warrior WOD', trainer: 'Vikram Rathore', time: '08:00 AM - 09:30 AM', day: 'Saturday', category: 'CrossFit' },
  { id: 'sch22', className: 'HIIT Burnout', trainer: 'Sarah D\'Souza', time: '10:00 AM - 11:00 AM', day: 'Saturday', category: 'HIIT' },
  { id: 'sch23', className: 'Active Restoration Flow', trainer: 'Rohan Sharma', time: '04:00 PM - 05:00 PM', day: 'Saturday', category: 'Yoga' },

  // Sunday
  { id: 'sch24', className: 'Sunday Power Lifting', trainer: 'Vikram Rathore', time: '09:00 AM - 10:30 AM', day: 'Sunday', category: 'Strength' },
  { id: 'sch25', className: 'De-Stress Vinyasa', trainer: 'Ananya Sen', time: '11:00 AM - 12:15 PM', day: 'Sunday', category: 'Yoga' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev1',
    name: 'Karan Malhotra',
    role: 'Member for 2 Years',
    rating: 5,
    quote: 'Onyx is unlike any corporate gym in town. The powerlifting racks, quality of coaching, and high-energy community push me to hit PRs I never dreamed possible.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'rev2',
    name: 'Pooja Iyer',
    role: 'Member for 1 Year',
    rating: 5,
    quote: 'The group HIIT and spinning classes are electric! I have lost 15kg of pure body fat, gained insane stamina, and look forward to every session.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'rev3',
    name: 'Amit Patel',
    role: 'Member for 3 Years',
    rating: 5,
    quote: 'Rohan Sharma rebuilt my shoulder stability after a severe rotary tear. The physiotherapists here work directly with strength coaches, which is highly professional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'rev4',
    name: 'Riya Sen',
    role: 'Member for 6 Months',
    rating: 5,
    quote: 'I love the premium amenities! Having a dry sauna, private showers, and a high-end nutrition shake bar under one roof makes it worth every single rupee.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'rev5',
    name: 'Kabir Mehta',
    role: 'Member for 4 Years',
    rating: 5,
    quote: 'The CrossFit equipment inside the Onyx box is elite. Solid bumper plates, clean chalk stands, and heavy sled lanes make it a paradise for hardcore lifters.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'rev6',
    name: 'Dr. Meera Nair',
    role: 'Member for 18 Months',
    rating: 5,
    quote: 'As a medical professional, I highly value Ananya\'s scientific approach to nutrition combined with therapeutic yoga. My spinal posture and energy levels are phenomenal.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
    category: 'facilities',
    title: 'Onyx Main Strength Arena'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000',
    category: 'workouts',
    title: 'Elite Dumbbell Selection'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000',
    category: 'workouts',
    title: 'Olympic Plate Loading Platform'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=1000',
    category: 'cardio',
    title: 'Interactive HIIT Treadmill Deck'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000',
    category: 'facilities',
    title: 'Premium Wood-Infused Sauna Room'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
    category: 'facilities',
    title: 'Onyx Protein & Juice Lounge'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000',
    category: 'boxing',
    title: 'Premium Combat Heavy Bag Area'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000',
    category: 'workouts',
    title: 'Core Stability Gym Ring Rig'
  }
];
