export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  certifications: string[];
  experience: number;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // we will map these to lucide icons
  fullDetails?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  isPopular?: boolean;
  features: string[];
}

export interface ClassScheduleItem {
  id: string;
  className: string;
  trainer: string;
  time: string;
  day: string; // 'Monday', 'Tuesday', etc.
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'facilities' | 'workouts' | 'cardio' | 'boxing';
  title: string;
}
