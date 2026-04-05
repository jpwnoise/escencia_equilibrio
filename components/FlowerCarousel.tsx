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
    <section id="flower-carousel" ref={flowerCarouselRef} className="w-full py-24 flex flex-col items-center gap-14 bg-gradient-to-b from-orange-100 via-gray-300 to-white">

      {/* 🎠 CARRUSEL */}
      <div className="relative w-full h-[420px] flex items-center justify-center [perspective:1200px]">

        <div
          className="relative w-[260px] h-[260px] md:w-[120px] md:h-[320px] transition-transform duration-700"
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
                  transform: `rotateY(${angle}deg) translateZ(380px)`,
                }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={isSelected ? 1.08 : 1.04}
                  transitionSpeed={900}
                >
                  <div
                    onClick={() => handleSelect(flower.id)}
                    className={`relative rounded-2xl p-4 h-full flex flex-col items-center justify-center cursor-pointer
                    backdrop-blur-xl shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-gray-100 border  

                    ${isSelected
                        ? "border-emerald-400"
                        : "border-orange-400/80"
                      }`}
                  >
                    {/* 🌫️ overlay suave */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-gray-100/30 pointer-events-none" />

                    {/* 🌼 Imagen */}
                    <img
                      src={flower.img}
                      alt={flower.name}
                      className="w-full h-32 object-contain mb-3 relative z-10"
                    />

                    {/* 🌿 Texto */}
                    <h3 className="text-sm md:text-base font-semibold text-emerald-900 text-center relative z-10">
                      {flower.name}
                    </h3>

                    {/* ✨ Feedback visual */}
                    {isSelected && (
                      <div className="mt-2 text-xs text-emerald-700 font-medium relative z-10">
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
      <div className="flex gap-4 text-2xl">
        <button
          onClick={() => setRotation(rotation + 30)}
          className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white  rounded-xl hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 shadow-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => setRotation(rotation - 30)}
          className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white  rounded-xl hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 shadow-md"
        >
          <FaArrowRight />
        </button>

      </div>

      {/* 🌼 SELECCIONADAS */}
      {/* 🌼 SELECCIONADAS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 w-72 z-50">

        <div className="bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-xl p-4 transition-all duration-300">

          {/* Título */}
          <h2 className="text-lg font-semibold text-emerald-900 mb-2">
            Tu mezcla ({selected.length}/7)
          </h2>

          {/* Mensaje */}
          <p
            className={`
    text-xs mb-3 transition-all duration-300
    ${limitHit
                ? "text-red-500 scale-110 animate-shake"
                : "text-emerald-700"
              }
  `}
          >
            Has alcanzado el máximo de 7 flores 🌿
          </p>

          {/* Lista */}
          <ul className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
            {selectedData.map((flower) => (
              <li
                key={flower.id}
                onClick={() => handleSelect(flower.id)}
                className="
            flex items-center justify-between
            text-sm text-emerald-900
            cursor-pointer
            px-2 py-1 rounded-md
            hover:bg-emerald-100
            transition-all duration-200
          "
              >
                <span>{flower.name}</span>
                <span className="text-emerald-500 hover:text-red-500 transition">
                  ✕
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
      {/* 🧾 SOLICITAR PEDIDO */}
<div className="w-full max-w-4xl px-6 mt-20">

  <div className="bg-white/80 backdrop-blur-md border border-orange-400/60 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">

    {/* 🖼 Foto */}
    <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
      <img
        src="/eli.png" // 👉 cambia por tu imagen
        alt="Asesora floral"
        className="w-full h-full object-cover bg-gradient-to-r from-gray-200 to-emerald-200 border-2 border-emerald-600/50 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      />
    </div>

    {/* 📋 Contenido */}
    <div className="flex-1 w-full">
      <h2 className="text-2xl font-bold text-emerald-900 mb-2">
        Solicitar pedido 🌼
      </h2>

      <p className="text-sm text-emerald-700 mb-4">
        Envía tu mezcla personalizada por WhatsApp y te ayudamos a prepararla 💚
      </p>

      {/* 🌿 Lista de flores */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4 max-h-40 overflow-y-auto">
        {selectedData.length === 0 ? (
          <p className="text-sm text-emerald-600">
            No has seleccionado flores aún 🌿
          </p>
        ) : (
          <ul className="text-sm text-emerald-900 space-y-1">
            {selectedData.map((flower) => (
              <li key={flower.id}>• {flower.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 📲 Botón WhatsApp */}
      <a
        href={`https://wa.me/52XXXXXXXXXX?text=${encodeURIComponent(
          `Hola, quiero solicitar un arreglo con estas flores:\n\n${selectedData
            .map((f) => `• ${f.name}`)
            .join("\n")}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block w-full text-center
          px-6 py-3
          bg-gradient-to-r from-emerald-600 to-emerald-700
          text-white font-semibold rounded-xl
          shadow-md
          hover:from-orange-600 hover:to-orange-700
          hover:scale-105 hover:-translate-y-1
          transition-all duration-300
        "
      >
        Pedir por WhatsApp 📲
      </a>
    </div>
  </div>
</div>
    </section>
  );
}