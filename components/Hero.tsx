"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Topbar from "./Topbar";
import { div } from "framer-motion/client";

export default function Hero() {

  const flowerCarouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (flowerCarouselRef.current) {
      flowerCarouselRef.current.scrollIntoView({ behavior: "smooth" });
    };
  };
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-white to-orange-100 overflow-hidden">
      
      <section >
        {/* Background soft blur shapes */}

        <div className="relative z-10 max-w-3xl text-center px-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-emerald-900 leading-tight"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Esencia y Equilibrio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-emerald-800"
          >
            Descubre el poder de las esencias florales para armonizar tus emociones
            y reconectar con tu bienestar interior.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex justify-center gap-4"
          >

          </motion.div>
        </div>

        {/* Subtle floating animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-10 text-emerald-500 text-sm"
        >
          ↓ Explora tu bienestar
        </motion.div>
      </section>
    </div>
  );
}
