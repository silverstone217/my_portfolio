import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />

      <main className="mt-8 px-4 sm:px-6 xl:px-8">
        {/* hero */}
        <HeroSection />

        {/* my project */}
        <MyProjects />

        {/* About */}
        <AboutSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="px-4 sm:px-6 xl:px-8 py-2">
        <p className="text-sm text-gray-300 text-center">
          &copy; {new Date().getFullYear()} Stephane Mfuni. Tous droits
          réservés.
        </p>
      </div>
    </div>
  );
}
