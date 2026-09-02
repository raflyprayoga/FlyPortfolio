import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        border-t
        border-black/10
        bg-neutral-50
        px-6
        py-32
        transition-colors
        duration-500
        dark:border-white/10
        dark:bg-neutral-950
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-neutral-500
                dark:text-neutral-600
              "
            >
              04 / Projects
            </p>

            <h2
              className="
                mt-8
                text-5xl
                font-bold
                text-black
                transition-colors
                duration-500
                md:text-7xl
                dark:text-white
              "
            >
              Selected work.
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-neutral-600
              dark:text-neutral-500
            "
          >
            A collection of projects exploring development, design,
            interaction, and problem solving.
          </p>

        </div>

        {/* PROJECTS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.number}
              className="
                group
                border
                border-black/10
                bg-white
                p-8
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-black

                dark:border-white/10
                dark:bg-black
                dark:hover:border-white
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <span
                  className="
                    text-sm
                    text-neutral-500
                    dark:text-neutral-600
                  "
                >
                  {project.number}
                </span>

                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-neutral-500
                    dark:text-neutral-600
                  "
                >
                  {project.category}
                </span>

              </div>

              {/* CONTENT */}
              <div className="mt-24">

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-black
                    transition-colors
                    dark:text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-7
                    text-neutral-600
                    dark:text-neutral-500
                  "
                >
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="
                    mt-8
                    inline-block
                    border-b
                    border-black/30
                    pb-1
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-black
                    transition

                    hover:border-black

                    dark:border-white/30
                    dark:text-white
                    dark:hover:border-white
                  "
                >
                  View Project →
                </a>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
