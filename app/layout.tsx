import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Stephane Mfuni | Développeur Web & Mobile Minimaliste",
  description:
    "Portfolio de Stephane Mfuni — développeur passionné spécialisé en applications Web, Mobile et Desktop. Contactez-moi pour un site moderne, élégant et sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} scroll-smooth antialiased`}>
        {children}
      </body>
    </html>
  );
}
