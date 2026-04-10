"use client";

import Tilt from "react-parallax-tilt";

type FlowerCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function FlowerCard({
  image,
  title,
  description,
}: FlowerCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1000}
      transitionSpeed={1200}
      scale={1.03}
      gyroscope={true}
      className="rounded-2xl"
    >
      <div className="bg-gradient-to-b from-white/90 to-emerald-50/50 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-emerald-200/60 h-full flex flex-col">
        
        {/* Imagen */}
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-contain"
          />
        </div>

        {/* Contenido */}
        <h3 className="text-xl font-semibold text-emerald-900">
          {title}
        </h3>

        <p className="text-sm text-emerald-700 mt-2 flex-grow">
          {description}
        </p>

      </div>
    </Tilt>
  );
}