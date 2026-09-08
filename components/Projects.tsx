"use client";

import AccordionGallery from "./AccordionGallery";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const items = projects.map((project) => ({
    image: project.image,
    label: project.title,
    link: project.link || "#",
  }));

  return (
    <section
      id="projects"
      className="
      bg-black
      px-6
      py-32
      text-white
  "
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <h2
              className="
                mt-8
                text-5xl
                font-bold
                text-white
                md:text-7xl
              "
            >
              Experience
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-neutral-400
            "
          >
            Koleksi proyek tempat saya belajar, mencoba hal baru, dan merajut desain menjadi solusi yang bermanfaat
          </p>

        </div>

        {/* ACCORDION GALLERY */}
        <div className="mt-16 overflow-hidden">
          <AccordionGallery
            items={items}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>

      </div>
    </section>
  );
}