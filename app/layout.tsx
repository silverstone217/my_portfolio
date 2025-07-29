import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Stephane Mfuni",
  description:
    "Pour de site web beau, minimaliste, conctatez-moi, et vous serez satifait.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} scroll-smooth antialiased`}>
        {children}
      </body>
    </html>
  );
}
