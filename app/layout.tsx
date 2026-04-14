import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins  = Poppins({variable:'--font-poppins', weight:['600']});

export const metadata: Metadata = {
  title: "Escencia y Equilibrio - Personaliza tu bienestar con esencias florales",
  description:
    "Descubre el poder de las esencias florales para armonizar tus emociones y reconectar con tu bienestar interior. Personaliza tu mezcla única y transforma tu vida hoy.",

  openGraph: {
    title: "Escencia y Equilibrio 🌿",
    description:
      "Terapias de flores de Bach para equilibrio emocional, reducción del estrés y bienestar integral.",
    url: "https://escenciaequilibrio.vercel.app/",
    siteName: "Escencia y Equilibrio",
    images: [
      {
        url: "https://escenciaequilibrio.vercel.app/og-image-3.png",
        width: 1200,
        height: 630,
        alt: "Terapias de Flores de Bach - Escencia y Equilibrio",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Escencia y Equilibrio 🌿",
    description:
      "Equilibra tus emociones con terapias naturales de flores de Bach.",
    images: ["https://escenciaequilibrio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/** */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
