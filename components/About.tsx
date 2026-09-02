export default function About() {
  return (
    <section
      id="about"
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

        <p
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-neutral-500
            dark:text-neutral-600
          "
        >
          02 / About
        </p>

        <div className="mt-12 grid gap-16 md:grid-cols-[1fr_0.7fr]">

          {/* CONTENT */}
          <div>
            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                text-black
                transition-colors
                duration-500
                md:text-6xl
                dark:text-white
              "
            >
              Developer with a passion for building meaningful digital
              experiences.
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-neutral-600
                transition-colors
                duration-500
                dark:text-neutral-400
              "
            >
              I am an Informatics student and developer who enjoys exploring
              both frontend and backend technologies. I like transforming
              ideas into products that are useful, intuitive, and visually
              strong.
            </p>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-neutral-500
                dark:text-neutral-500
              "
            >
              My interests include web development, mobile development,
              UI/UX design, and experimenting with modern technologies.
            </p>
          </div>

          {/* INFO CARD */}
          <div
            className="
              border
              border-black/10
              bg-white
              p-8
              transition-colors
              duration-500
              dark:border-white/10
              dark:bg-black
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-widest
                text-neutral-500
                dark:text-neutral-600
              "
            >
              Currently
            </p>

            <h3
              className="
                mt-5
                text-2xl
                font-semibold
                text-black
                dark:text-white
              "
            >
              Informatics Student
            </h3>

            <p className="mt-2 text-neutral-500">
              Universitas Tarumanagara
            </p>

            <div
              className="
                mt-10
                border-t
                border-black/10
                pt-6
                dark:border-white/10
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-neutral-500
                  dark:text-neutral-600
                "
              >
                Based in
              </p>

              <p
                className="
                  mt-3
                  text-xl
                  font-medium
                  text-black
                  dark:text-white
                "
              >
                Indonesia
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}