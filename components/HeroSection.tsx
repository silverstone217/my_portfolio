"use client";
import React, { useEffect, useState } from "react";
import { raleway } from "@/utils/fonts";
import { HOME_HERO_TEXTS, HOME_HERO_APP } from "@/utils";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ADJS = HOME_HERO_TEXTS;
const WORDS = HOME_HERO_APP;

const TRANSITION_DURATION = 6000; // 6s mixte entre adj et word

const HeroSection = () => {
  const [indexAdj, setIndexAdj] = useState(0);
  const [indexWord, setIndexWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAdj((prev) => (prev + 1) % ADJS.length);
      setIndexWord((prev) => (prev + 1) % WORDS.length);
    }, TRANSITION_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex flex-col justify-center items-center 
    min-h-[32rem] p-6 text-center max-w-5xl mx-auto"
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
            ${raleway.className} text-foreground max-w-3xl`}
        aria-live="polite"
      >
        Votre&nbsp;
        <span
          className="text-accent transition-opacity duration-700 ease-in-out inline-block"
          key={`adj-${indexAdj}`}
          role="text"
        >
          {ADJS[indexAdj]}
        </span>
        &nbsp;de confiance pour développer des applications&nbsp;
        <span
          className="text-accent transition-opacity duration-700 ease-in-out inline-block"
          key={`word-${indexWord}`}
          role="text"
        >
          {WORDS[indexWord]}
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-muted-foreground text-lg sm:text-xl leading-relaxed font-light">
        Je vous accompagne pour concrétiser vos idées avec des solutions
        élégantes, performantes et adaptées à vos besoins.
      </p>

      <Link
        href="#contact"
        className="mt-10 inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-foreground 
        font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 focus:outline-none 
        focus:ring-4 focus:ring-accent/50 group"
        aria-label="Réserver une consultation"
      >
        Réservez maintenant
        <FaArrowAltCircleRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  );
};

export default HeroSection;
