import React from "react";
import OpenMenuSmallScreen from "./OpenMenuSmallScreen";
import { HOMES_LINKS } from "@/utils/links";
import Link from "next/link";
import { raleway } from "@/utils/fonts";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 xl:px-8 ">
      {/* container */}
      <div className="py-4 flex items-center justify-between">
        {/* logo */}
        <Link
          href={"/"}
          className={`flex items-center gap-1
            ${raleway.className} font-black uppercase
            text-lg tracking-wide group
            `}
          aria-label="Home"
        >
          <span>Stephane</span>
          <span className="group-hover:text-accent transition-colors ease-in-out duration-500">
            Mfuni.
          </span>
        </Link>

        {/* nav for big screen */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {HOMES_LINKS.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-muted-foreground font-medium hover:text-accent 
                    transition-colors ease-in-out duration-500"
                >
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* open menu nav for small screen */}
        <OpenMenuSmallScreen />
      </div>
    </header>
  );
};

export default Header;
