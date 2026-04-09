"use client";

import { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { flowers } from "@/data/flowers";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FlowerCarouselSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [rotation, setRotation] = useState(0);
  const [limitHit, setLimitHit] = useState(false);
  const flowerCarouselRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((f) => f !== id));
      return;
    }

    if (selected.length >= 7) {
      setLimitHit(true);
      setTimeout(() => setLimitHit(false), 400);
      return;
    }

    setSelected([...selected, id]);
  };

  const selectedData = flowers.filter((f) => selected.includes(f.id));

  return (
    <section
      id="flower-carousel"
      ref={flowerCarouselRef}
      className="w-full py-16 md:py-24 flex flex-col items-center gap-10 md:gap-14 bg-gradient-to-b from-orange-100 via-gray-200 to-white"
    >
      {/* 🎠 CARRUSEL */}
      <div className="relative w-full h-[340px] sm:h-[380px] md:h-[420px] flex items-center justify-center [perspective:1200px]">
        <div
          className="relative w-[110px] h-[220px] sm:w-[160px] sm:h-[200px] md:w-[110px] md:h-[260px] transition-transform duration-700"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {flowers.map((flower, index) => {
            const angle = (360 / flowers.length) * index;
            const isSelected = selected.includes(flower.id);

            return (
              <div
                key={flower.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(260px)`,
                }}
              >
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.04}>
                  <div
                    onClick={() => handleSelect(flower.id)}
                    className={`relative rounded-2xl p-3 sm:p-4 h-full flex flex-col items-center justify-center cursor-pointer backdrop-blur-xl shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-gray-100 border ${
                      isSelected
                        ? "border-emerald-400 scale-105"
                        : "border-orange-300"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-gray-100/30 pointer-events-none" />

                    <img
                      src={flower.img}
                      alt={flower.name}
                      className="w-full h-20 sm:h-24 md:h-28 object-contain mb-2 sm:mb-3 relative z-10"
                    />

                    <h3 className="text-[11px] sm:text-xs md:text-sm font-semibold text-emerald-900 text-center relative z-10">
                      {flower.name}
                    </h3>

                    {isSelected && (
                      <div className="mt-1 text-[10px] sm:text-xs text-emerald-700 font-medium relative z-10">
                        ✔ Añadida
                      </div>
                    )}
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🎮 CONTROLES */}
      <div className="flex gap-4 text-xl md:text-2xl">
        <button
          onClick={() => setRotation(rotation + 30)}
          className="px-4 md:px-5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:scale-105 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => setRotation(rotation - 30)}
          className="px-4 md:px-5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:scale-105 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* 🌼 PANEL SELECCIÓN */}
      <div className="fixed bottom-4 right-4 md:top-1/2 md:-translate-y-1/2 md:right-6 w-[90%] max-w-xs md:w-72 z-50">
        <div className="bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-xl p-4">
          <h2 className="text-base md:text-lg font-semibold text-emerald-900 mb-2">
            Tu mezcla ({selected.length}/7)
          </h2>

          <p
            className={`text-xs mb-3 transition-all duration-300 ${
              limitHit ? "text-red-500 scale-110 animate-shake" : "text-emerald-700"
            }`}
          >
            Has alcanzado el máximo de 7 flores 🌿
          </p>

          <ul className="flex flex-col gap-2 max-h-40 md:max-h-80 overflow-y-auto pr-1">
            {selectedData.map((flower) => (
              <li
                key={flower.id}
                onClick={() => handleSelect(flower.id)}
                className="flex items-center justify-between text-sm text-emerald-900 cursor-pointer px-2 py-1 rounded-md hover:bg-emerald-100 transition"
              >
                <span>{flower.name}</span>
                <span className="text-emerald-500 hover:text-red-500">✕</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🧾 SOLICITAR PEDIDO */}
      <div className="w-full max-w-5xl px-4 sm:px-6 mt-10 md:mt-20">
        <div className="bg-white/80 backdrop-blur-md border border-orange-300 rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/eli.png"
              alt="Asesora floral"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2">
              Solicitar pedido 🌼
            </h2>

            <p className="text-xs sm:text-sm text-emerald-700 mb-4">
              Envía tu mezcla personalizada por WhatsApp 💚
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 sm:p-4 mb-4 max-h-32 md:max-h-40 overflow-y-auto">
              {selectedData.length === 0 ? (
                <p className="text-xs sm:text-sm text-emerald-600">
                  No has seleccionado flores aún 🌿
                </p>
              ) : (
                <ul className="text-xs sm:text-sm text-emerald-900 space-y-1">
                  {selectedData.map((flower) => (
                    <li key={flower.id}>• {flower.name}</li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href={`https://wa.me/52XXXXXXXXXX?text=${encodeURIComponent(
                `Hola, quiero solicitar un arreglo con estas flores:\n\n${selectedData
                  .map((f) => `• ${f.name}`)
                  .join("\n")}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-4 sm:px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
            >
              Pedir por WhatsApp 📲
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
