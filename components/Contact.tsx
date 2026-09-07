"use client";

import {
  ArrowUpRight,
  AtSign,
  Code2,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      username: "@rflypryg",
      href: "https://github.com/rflypryg",
      icon: Code2,
    },
    {
      name: "LinkedIn",
      username: "Rafly Prayoga",
      href: "https://www.linkedin.com/",
      icon: AtSign,
    },
    {
      name: "Instagram",
      username: "@rflypryg",
      href: "https://www.instagram.com/",
      icon: ExternalLink,
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-black/10
        bg-white
        px-6
        py-28
        text-black
        transition-colors
        duration-500
        dark:border-white/10
        dark:bg-black
        dark:text-white
        md:py-36
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-black/[0.025]
          blur-3xl
          dark:bg-white/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-black/[0.02]
          blur-3xl
          dark:bg-white/[0.02]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center gap-4">
          <span
            className="
              h-px
              w-10
              bg-black
              dark:bg-white
            "
          />

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.4em]
              text-neutral-500
            "
          >
            05 / Contact
          </p>
        </div>

        {/* Main layout */}
        <div
          className="
            mt-12
            grid
            gap-16
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-24
          "
        >
          {/* ========================================
              LEFT CONTENT
          ======================================== */}
          <div>
            <h2
              className="
                max-w-5xl
                text-5xl
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.05em]
                text-black
                transition-colors
                duration-500
                dark:text-white
                sm:text-6xl
                md:text-8xl
                lg:text-[8rem]
              "
            >
              Let&apos;s make
              <br />
              something
              <br />
              <span
                className="
                  text-neutral-300
                  dark:text-neutral-700
                "
              >
                great.
              </span>
            </h2>

            <p
              className="
                mt-10
                max-w-xl
                text-sm
                leading-7
                text-neutral-500
                dark:text-neutral-400
                md:text-base
              "
            >
              Have a project, idea, or opportunity in mind?
              Let&apos;s talk and build something meaningful
              together.
            </p>

            {/* Email button */}
            <div className="mt-10">
              <a
                href="mailto:hello@example.com?subject=Project%20Inquiry&body=Hello%20Rafly,"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  border
                  border-black
                  bg-black
                  px-7
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-black
                  dark:border-white
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-black
                  dark:hover:text-white
                "
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                />

                <span>
                  Send Me an Email
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>

          {/* ========================================
              RIGHT CONTENT
          ======================================== */}
          <div className="lg:pt-3">
            {/* Email */}
            <div
              className="
                border-t
                border-black/10
                dark:border-white/10
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-neutral-400
                  "
                >
                  Get in touch
                </span>

                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="text-neutral-400"
                />
              </div>

              <a
                href="mailto:hello@example.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-t
                  border-black/10
                  py-6
                  dark:border-white/10
                "
              >
                <div className="flex items-center gap-4">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="
                      text-neutral-400
                      transition-transform
                      duration-300
                      group-hover:-rotate-6
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      transition-colors
                      group-hover:text-neutral-500
                    "
                  >
                    hello@example.com
                  </span>
                </div>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>

            {/* ========================================
                SOCIAL MEDIA
            ======================================== */}
            <div className="mt-12">
              <p
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                Find me online
              </p>

              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border
                        border-black/10
                        px-5
                        py-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-black
                        hover:bg-black
                        hover:text-white
                        dark:border-white/10
                        dark:hover:border-white
                        dark:hover:bg-white
                        dark:hover:text-black
                      "
                    >
                      {/* Icon + info */}
                      <div className="flex items-center gap-4">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            border
                            border-black/10
                            transition-colors
                            group-hover:border-white/20
                            dark:border-white/10
                            dark:group-hover:border-black/20
                          "
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.6}
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                            "
                          >
                            {social.name}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              text-neutral-400
                              transition-colors
                              group-hover:text-neutral-300
                              dark:group-hover:text-neutral-500
                            "
                          >
                            {social.username}
                          </p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div
              className="
                mt-12
                flex
                items-center
                gap-3
                border-t
                border-black/10
                pt-6
                dark:border-white/10
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-black
                  dark:bg-white
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                "
              >
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        {/* ========================================
            FOOTER
        ======================================== */}
        <div
          className="
            mt-24
            flex
            flex-col
            justify-between
            gap-4
            border-t
            border-black/10
            pt-6
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-neutral-400
            dark:border-white/10
            md:flex-row
          "
        >
          <span>
            Rafly Prayoga
          </span>

          <span>
            Let&apos;s build something meaningful.
          </span>
        </div>
      </div>
    </section>
  );
}