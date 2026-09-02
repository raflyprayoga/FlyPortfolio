export default function Contact() {
return ( <section
   id="contact"
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
 > <div className="mx-auto max-w-7xl">

    <p
      className="
        text-xs
        uppercase
        tracking-[0.4em]
        text-neutral-500
        dark:text-neutral-600
      "
    >
      05 / Contact
    </p>

    <div className="mt-12">

      <h2
        className="
          max-w-5xl
          text-5xl
          font-black
          uppercase
          leading-[0.95]
          tracking-tight
          text-black
          transition-colors
          duration-500
          md:text-8xl
          dark:text-white
        "
      >
        Let&apos;s make
        <br />
        something
        <br />
        <span className="text-neutral-400 dark:text-neutral-600">
          great.
        </span>
      </h2>

      <div className="mt-16 flex flex-wrap gap-4">

        {/* EMAIL */}
        <a
          href="mailto:hello@example.com"
          className="
            border
            border-black
            bg-black
            px-8
            py-4
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
            transition

            hover:bg-white
            hover:text-black

            dark:border-white
            dark:bg-white
            dark:text-black
            dark:hover:bg-black
            dark:hover:text-white
          "
        >
          Email Me
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/rflypryg"
          target="_blank"
          rel="noreferrer"
          className="
            border
            border-black/20
            px-8
            py-4
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-black
            transition

            hover:border-black

            dark:border-white/20
            dark:text-white
            dark:hover:border-white
          "
        >
          GitHub
        </a>

      </div>
    </div>
  </div>
</section>
);
}
