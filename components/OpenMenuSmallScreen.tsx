"use client";
import { raleway } from "@/utils/fonts";
import { HOMES_LINKS } from "@/utils/links";
import Link from "next/link";
import React, { useState } from "react";

const OpenMenuSmallScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
      {/* Bouton hamburger */}
      {!open && (
        <button
          className="flex flex-col gap-1.5 items-center justify-center"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="bg-foreground w-8 h-0.5"></span>
          <span className="bg-foreground w-8 h-0.5"></span>
        </button>
      )}

      {/* Menu avec transition */}
      <div
        className={`
          fixed inset-0 backdrop-blur-sm bg-background/90 bg-opacity-90 flex flex-col 
          transition-opacity duration-300 ease-in-out transform 
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Contenu menu */}
        <div className="flex items-center gap-2  px-4 py-4">
          <div
            className={
              "flex items-center gap-1.5 font-bold text-lg tracking-tight " +
              raleway.className
            }
          >
            <span>STEPHANE</span>
            <span>MFUNI.</span>
          </div>

          {/* Bouton close */}
          <button
            className="relative ml-auto w-8 h-8 cursor-pointer"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-foreground rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-foreground -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
          </button>
        </div>

        {/* Liens */}
        <div className="flex-1 p-4 flex flex-col gap-6 items-center pt-24 min-h-72">
          {HOMES_LINKS.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="text-xl font-bold p-2 bg-primary/60 min-w-56 text-center rounded-2xl shadow-2xl"
              onClick={() => setOpen(false)} // ferme le menu au clic
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-1 right-2">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Stephane Mfuni. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenMenuSmallScreen;
