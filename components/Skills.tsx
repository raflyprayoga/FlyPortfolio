import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        border-t
        border-black/10
        bg-white
        px-6
        py-32
        transition-colors
        duration-500
        dark:border-white/10
        dark:bg-black
      "
    >
      <div className="mx-auto max-w-7xl">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-neutral-500
            dark:text-neutral-600
          "
        >
          03 / Skills
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
          What I work with.
        </h2>

        <div
          className="
            mt-16
            border-t
            border-black/10
            dark:border-white/10
          "
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="
                group
                grid
                gap-6
                border-b
                border-black/10
                py-8
                transition-all
                duration-300

                hover:bg-black
                hover:px-6

                dark:border-white/10
                dark:hover:bg-white

                md:grid-cols-[100px_250px_1fr]
                md:items-center
              "
            >
              {/* NUMBER */}
              <span
                className="
                  text-sm
                  text-neutral-500
                  transition-colors
                  group-hover:text-neutral-400
                  dark:text-neutral-600
                  dark:group-hover:text-neutral-500
                "
              >
                0{index + 1}
              </span>

              {/* NAME */}
              <h3
                className="
                  text-2xl
                  font-bold
                  text-black
                  transition-colors
                  group-hover:text-white
                  dark:text-white
                  dark:group-hover:text-black
                "
              >
                {skill.name}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  max-w-xl
                  text-neutral-500
                  transition-colors
                  group-hover:text-neutral-300
                  dark:text-neutral-500
                  dark:group-hover:text-neutral-700
                "
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}