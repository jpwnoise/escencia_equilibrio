"use client";

import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({ children, className }: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1000}
      transitionSpeed={1200}
      scale={1.03}
      gyroscope={true}
      className={`rounded-2xl ${className}`}
    >
      <div className="bg-red/90 backdrop-blur-2xl rounded-2xl shadow-lg p-6 border border-emerald-100">
        {children}
      </div>
    </Tilt>
  );
}