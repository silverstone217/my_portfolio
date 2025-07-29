import { raleway } from "@/utils/fonts";
import { FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center gap-14 text-center"
    >
      <div>
        <h2
          className={`text-4xl md:text-4xl font-extrabold text-foreground mb-4 ${raleway.className}`}
        >
          Me contacter
        </h2>
        <p className=" text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Une idée, un projet ou juste une question&nbsp;?{" "}
          <br className="hidden md:block" />
          Échangeons ensemble pour trouver la solution qui vous correspond, sur
          le canal qui vous convient.
        </p>
      </div>

      {/* Bloc infos contact principal */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center max-w-xl mx-auto">
        {/* Carte contact - Email */}
        <div className="flex-1 bg-primary/60 rounded-3xl p-8 flex flex-col items-center gap-3 border border-border shadow-md hover:border-accent transition">
          <MdEmail className="text-accent text-3xl mb-2" />
          <div className="font-bold text-base mb-1">Email</div>
          <a
            href="mailto:stiviggs217@gmail.com"
            className="text-accent hover:underline text-lg transition"
          >
            stiviggs217@gmail.com
          </a>
          <span className="text-muted-foreground text-xs">
            Réponse rapide 📩
          </span>
        </div>
        {/* Carte contact - WhatsApp */}
        <div
          className="flex-1 bg-primary/60 rounded-3xl p-8 flex flex-col items-center gap-3 
        border border-border shadow-md hover:border-accent transition"
        >
          <FaWhatsapp className="text-accent text-3xl mb-2" />
          <div className="font-bold text-base mb-1">WhatsApp</div>
          <a
            href="https://wa.me/tonnum" // à remplacer par ton numéro
            className="text-accent hover:underline text-lg transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            +7 953 346 36 25
          </a>
          <span className="text-muted-foreground text-xs">
            Discutons en direct
          </span>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="text-base text-foreground font-semibold mb-2">
          Ou sur les réseaux :
        </div>
        <div className="flex gap-8 justify-center">
          {/* Twitter / X */}
          <a
            href="https://twitter.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl text-accent group-hover:scale-125 transition-transform" />
            <span className="text-xs mt-1 text-muted-foreground group-hover:text-accent transition-colors">
              X/Twitter
            </span>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl text-accent group-hover:scale-125 transition-transform" />
            <span className="text-xs mt-1 text-muted-foreground group-hover:text-accent transition-colors">
              Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Formulaire de contact rapide */}
      <div
        className="w-full max-w-xl mx-auto bg-primary/40 rounded-2xl p-8 border 
      border-border flex flex-col items-center gap-6 shadow-sm"
      >
        <h3 className="text-xl font-bold mb-2 text-foreground">
          Formulaire express
        </h3>
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full bg-background border border-border rounded px-4 py-2 
            text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent 
            transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full bg-background border border-border rounded px-4 py-2 
            text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent 
            transition"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="w-full bg-background border border-border rounded px-4 py-2 
            min-h-24 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent 
            transition"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-background font-semibold 
            mt-2 py-2 rounded-xl w-full transition"
            // tu peux ici connecter à un service externe ou handler form
          >
            Envoyer
          </button>
        </form>
        <span className="text-xs text-muted-foreground">
          Je réponds sous 24h.
        </span>
      </div>
    </section>
  );
}
