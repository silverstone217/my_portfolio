import otekis_logo from "@/public/images/oteki-logo.png";
import servi_logo from "@/public/images/servi-ads-logo.png";
import fideliz_logo from "@/public/images/fideliz-icon.png";

export const HOME_HERO_TEXTS = ["Parternaire", "Développeur", "Conseiller"];
export const HOME_HERO_APP = ["Webs", "Mobiles", "Desktops"];

export const PROJECTS = [
  {
    title: "OTEKIS",
    description:
      "Application web responsive pour la création et gestion d'une boutique en ligne, avec espace administrateur, vendeur et client.",
    stack: ["Next.js", "Tailwind", "Node.js"],
    github: "https://github.com/silverstone217/oteki",
    demo: "https://otekis.vercel.app/",
    image: otekis_logo, // optionnel
  },
  {
    title: "SERVI ADS",
    description:
      "Application web responsive pour la gestion de souscription au publicités, avec espace administrateur, vendeur et client.",
    stack: ["Next.js", "Tailwind", "Node.js"],
    github: "https://github.com/silverstone217/new_servi_ads",
    demo: "https://servi-ads.vercel.app/",
    image: servi_logo, // optionnel
  },
  {
    title: "Fideliz",
    description:
      "Application mobile pour la gestion de la fidélité des clients, les ventes de la boutiques.",
    stack: ["React Native", "Expo", "Zustand"],
    github: "https://github.com/silverstone217/new_servi_ads",
    demo: "https://servi-ads.vercel.app/",
    image: fideliz_logo, // optionnel
  },
];
