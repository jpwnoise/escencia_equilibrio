'use client'

import { ReactNode, useState } from 'react';
import { FaHome, FaLeaf, FaUser, FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  name: string;
  icon: ReactNode;
  link: string;
}

const navitems: NavItem[] = [
  { name: 'Home', icon: <FaHome />, link: '#home' },
  { name: 'Mi mezcla', icon: <FaLeaf />, link: '#mix' },
  { name: 'Contacto', icon: <FaUser />, link: '#contact' },
];

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow flex justify-between items-center bg-gradient-to-r from-emerald-50/70 to-teal-50/70 border border-emerald-200/50 p-2 text-emerald-700 sticky top-0 z-30 backdrop-blur-lg">
        {/* Logo */}
        <div className="font-bold text-lg bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
          Esencia y Equilibrio
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex">
          {navitems.map((item, index) => (
            <div
              key={index}
              className="flex items-center m-2 cursor-pointer"
              onClick={() =>
                document.querySelector(item.link)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="m-2 flex" style={{ fontFamily: 'var(--font-poppins)' }}>
                {item.name}
              </span>
              <span>{item.icon}</span>
            </div>
          ))}
        </div>

        {/* Hamburguesa */}
        <div className="md:hidden">
          {open
            ? <FaTimes size={24} className="cursor-pointer" onClick={() => setOpen(false)} />
            : <FaBars size={24} className="cursor-pointer" onClick={() => setOpen(true)} />
          }
        </div>
      </div>

      {/* Dropdown FUERA del topbar — backdrop-blur funciona correctamente */}
      {open && (
        <>
          {/* Overlay para cerrar al hacer clic afuera */}
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-[52px] left-0 w-full backdrop-blur-2xl bg-emerald-50/80 border border-emerald-200/50 shadow-md flex flex-col md:hidden z-40">
            {navitems.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 cursor-pointer hover:bg-white/40 transition-colors"
                onClick={() => {
                  setOpen(false);
                  document.querySelector(item.link)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="mr-3 text-gray-500">{item.icon}</span>
                <span className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}