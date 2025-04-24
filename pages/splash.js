import { useHeartbeat } from '../hooks/useHeartbeat';
import { motion, useReducedMotion } from 'framer-motion';

export default function Splash() {
  useHeartbeat();
  const shouldReduce = useReducedMotion();
  const variants = shouldReduce ? {} : { hidden: { scale: 0.95, opacity: 0.8 }, animate: { scale: [0.95, 1, 0.95], opacity: [0.8, 1, 0.8], transition: { duration: 1.8, repeat: Infinity } } };
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative">
      <motion.div initial="hidden" animate="animate" variants={variants} className="text-white text-6xl uppercase">
        AVANTASOMMER
      </motion.div>
      <div className="absolute bottom-2 w-full text-center text-xs text-gray-500 italic">
        “Cloudflare didn’t ask us to build it. They now ask permission to show it.” — AVANTASOMMER
      </div>
    </div>
  );
}
