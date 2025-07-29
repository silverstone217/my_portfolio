import { PROJECTS } from "@/utils";
import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const MyProjects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="projets">
      <h2
        className={`text-4xl font-extrabold tracking-tight mb-4 text-foreground text-center
      ${raleway.className}
        `}
      >
        Mes Projets
      </h2>

      <p className="mb-10 text-center  text-muted-foreground max-w-sm mx-auto">
        Voici quelques-uns de mes projets les plus récents. Vous pouvez les
        trouver sur mon GitHub.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className="bg-primary/60 rounded-3xl p-6 flex flex-col gap-6 border border-border shadow-lg hover:shadow-xl hover:border-accent transition-all duration-300"
          >
            {/* Optionnel : image ou icône */}
            {proj.image && (
              <Image
                src={proj.image}
                alt={proj.title}
                className="rounded-xl object-contain aspect-video mb-3"
                priority
                width={400}
                height={200}
              />
            )}
            <h3 className="text-xl font-bold text-accent mb-1">{proj.title}</h3>
            <p className="text-muted-foreground text-base mb-2">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-muted-foreground/10 text-muted-foreground px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm font-medium"
                >
                  Code
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm font-medium"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
