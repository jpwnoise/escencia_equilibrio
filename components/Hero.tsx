"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const flowerCarouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (flowerCarouselRef.current) {
      flowerCarouselRef.current.scrollIntoView({ behavior: "smooth" });
    };
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-green-200/30 to-emerald-200/30 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-teal-100/30 to-cyan-100/30 blur-2xl"
        />
      </div>

      {/* Decorative floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/50"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 16}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-emerald-100/80 to-teal-100/80 backdrop-blur-sm border border-emerald-200/50"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-lg"
          >
            ✨
          </motion.span>
          <span className="text-sm font-medium text-emerald-800" style={{ fontFamily: 'var(--font-poppins)' }}>
            Bienestar Natural & Personalizado
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          <span className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Esencia y
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
            Equilibrio
          </span>
        </motion.h1>

        {/* Elegant divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto my-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-emerald-800/80 max-w-3xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Descubre el poder de las{" "}
          <span className="font-semibold text-emerald-700">esencias florales</span> para armonizar
          tus emociones y reconectar con tu{" "}
          <span className="font-semibold text-emerald-700">bienestar interior</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-500 hover:to-teal-500"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Crea tu mezcla
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-white/70 backdrop-blur-sm text-emerald-700 font-semibold text-lg border border-emerald-200 shadow-lg hover:shadow-xl transition-all"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Conoce más
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-emerald-700/70"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span>100% Natural</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span>Terapia de Bach</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💚</span>
            <span>Personalizado</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-emerald-400/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
          />
        </div>
      </motion.div>
    </div>
  );
}
