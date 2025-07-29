import { raleway } from "@/utils/fonts";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import myImage from "@/public/images/mfuni.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 py-24 flex flex-col gap-14"
    >
      <h2
        className={`text-4xl font-extrabold tracking-tight text-foreground mb-6 text-center ${raleway.className}`}
      >
        À propos de moi
      </h2>

      {/* Bloc court bio */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* image bio*/}
        <div className="size-40 rounded-full bg-secondary mb-4">
          <Image
            src={myImage}
            alt="image de profil"
            className="rounded-full size-full object-cover"
            priority
            width={400}
            height={400}
          />
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Passionné par le développement et l’apprentissage continu, j’aime
          créer des applications robustes, élégantes et performantes.
          <br />
          <span className="inline-block mt-2">
            {`J'ai`} fait des etudes en IT en Russie, je mets l’accent sur la
            qualité, l’expérience utilisateur et l’adoption de nouveaux concepts
            technologiques.
          </span>
        </p>
      </div>

      {/* Bloc skills/tools stylisé */}
      <div className="flex flex-col gap-8">
        <h3 className="text-center">Outils utilisés</h3>
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          {/* Applications */}
          <div className="flex flex-col items-center">
            <span className="text-accent font-bold mb-2">Web</span>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                Next.js
              </span>
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                React
              </span>
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                JavaScript
              </span>
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                Python
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-accent font-bold mb-2">Mobile</span>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                Expo
              </span>
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                React Native
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-accent font-bold mb-2">Desktop</span>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                Electron
              </span>
              <span className="bg-primary/40 px-3 py-1 rounded-full text-sm text-foreground font-medium">
                Tauri
              </span>
            </div>
          </div>
        </div>

        {/* Autres outils */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            TypeScript
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            Zod
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            Zustand
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            PostgreSQL
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            Neon
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            Vercel
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            Google Storage
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            Shadcn UI
          </span>
          <span className="bg-muted-foreground/10 px-3 py-1 rounded text-xs text-muted-foreground font-medium">
            <HiDotsHorizontal />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
