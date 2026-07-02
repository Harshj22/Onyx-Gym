import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Onyx Fitness! I want to join the arena and Forge My Strength. Please guide me regarding the trial session!"
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1.5
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      id="whatsapp-floating-btn"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:shadow-[#25D366]/50 focus:outline-none"
      title="Chat with Onyx Fitness"
    >
      {/* Wave pulse rings */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
      <MessageCircle size={28} className="relative z-10" />
    </motion.a>
  );
}
