"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const tabs = [
  { id: "bio", label: "Bio" },
  { id: "education", label: "Education" },
  { id: "location", label: "Location" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabId>("bio");

  const sectionRef = useRef<HTMLElement>(null);

  /*
  ============================================================
  SCROLL PROGRESS
  ============================================================
  */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.75, 1],
    [0.38, 0.48, 0.68, 0.9, 1.08]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [180, 100, 40, 0]
  );

  /*
  ============================================================
  OPACITY
  ============================================================
  */

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.3, 0.5],
    [0, 0.25, 0.65, 1]
  );

  /*
  ============================================================
  BORDER RADIUS
  ============================================================
  */

  const cardRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [55, 35, 24]
  );

  /*
  ============================================================
  GLASS BLUR
  ============================================================
  */

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-40
        text-[#EDEDEA]
        sm:px-6
        lg:py-52
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-250px]
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.035]
            blur-[200px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.02]
            blur-[200px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[500px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.02]
            blur-[180px]
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black
            via-[#040404]
            to-black
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">


        {/* =================================================
            GLASS CARD
        ================================================== */}

        <motion.div
          style={{
            scale: cardScale,
            y: cardY,
            opacity: cardOpacity,
            borderRadius: cardRadius,
          }}
          className="
            relative
            min-h-[590px]
            w-full
            origin-center
            overflow-hidden

            border
            border-white/[0.15]

            bg-white/[0.035]

            shadow-[0_40px_120px_rgba(0,0,0,0.75)]

            backdrop-blur-[35px]
            backdrop-saturate-150

            will-change-transform
          "
        >

          {/* =================================================
              GLASS TOP EDGE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />

          {/* =================================================
              GLASS LIGHT REFLECTION
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -top-[55%]
              left-[5%]
              h-[90%]
              w-[75%]
              rotate-[-15deg]
              bg-gradient-to-b
              from-white/[0.10]
              via-white/[0.025]
              to-transparent
              blur-[45px]
            "
          />

          {/* Secondary reflection */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[20%]
              top-[10%]
              h-[80%]
              w-[40%]
              rotate-[15deg]
              bg-white/[0.015]
              blur-[70px]
            "
          />

          {/* =================================================
              INNER GLASS BORDER
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[inherit]
              border
              border-white/[0.035]
            "
          />

          {/* =================================================
              MAIN LAYOUT
          ================================================== */}

          <div className="relative flex min-h-[590px] flex-col md:flex-row">

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside
              className="
                relative
                flex
                w-full
                shrink-0
                flex-col

                border-b
                border-white/[0.08]

                bg-white/[0.018]

                p-6

                md:w-[240px]
                md:border-b-0
                md:border-r
                md:p-7
              "
            >

              {/* Glass sidebar line */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  top-0
                  hidden
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-white/10
                  to-transparent
                  md:block
                "
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/30
                "
              >
                Sections
              </p>

              <div className="mt-5 h-px w-full bg-white/[0.07]" />

              {/* Tabs */}

              <nav className="mt-5 flex flex-row gap-2 md:flex-col md:gap-1.5">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        group
                        relative
                        flex
                        flex-1
                        items-center
                        overflow-hidden
                        rounded-xl
                        px-4
                        py-4
                        text-left
                        transition-all
                        duration-300

                        md:flex-none

                        ${
                          isActive
                            ? "bg-white/[0.075] text-white shadow-[inset_0_0_30px_rgba(255,255,255,0.025)]"
                            : "text-white/35 hover:bg-white/[0.035] hover:text-white/70"
                        }
                      `}
                    >

                      {/* Active indicator */}

                      {isActive && (
                        <motion.span
                          layoutId="activeAboutIndicator"
                          className="
                            absolute
                            bottom-0
                            left-0
                            top-0
                            w-[2px]
                            bg-white
                            shadow-[0_0_14px_rgba(255,255,255,0.7)]
                          "
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="text-sm font-medium">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar bottom */}

              <div className="mt-auto hidden border-t border-white/[0.07] pt-6 md:block">

                <div className="flex items-center gap-2">

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white
                      shadow-[0_0_8px_rgba(255,255,255,0.5)]
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    Profile
                  </span>
                </div>

                <p className="mt-3 text-[12px] leading-5 text-white/30">
                  Developer, student, and someone who likes turning ideas
                  into working software.
                </p>
              </div>
            </aside>

            {/* =================================================
                CONTENT
            ================================================== */}

            <main className="relative min-w-0 flex-1 p-7 sm:p-10 lg:p-14">

              <AnimatePresence mode="wait">

                {/* =================================================
                    BIO
                ================================================== */}

                {activeTab === "bio" && (
                  <motion.div
                    key="bio"
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                      filter: "blur(8px)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="flex h-full flex-col"
                  >

                    {/* Profile */}

                    <div className="flex flex-col gap-8 sm:flex-row sm:items-center">

                      {/* PHOTO */}

                      <div
                        className="
                          group
                          relative
                          h-40
                          w-40
                          shrink-0
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/[0.15]
                          bg-white/[0.04]
                          shadow-2xl
                          sm:h-48
                          sm:w-48
                        "
                      >
                        <img
                          src="/profile.png"
                          alt="Rafly Prayoga"
                          className="
                            h-full
                            w-full
                            object-cover
                            grayscale
                            transition-all
                            duration-700
                            group-hover:scale-105
                            group-hover:grayscale-0
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-white/[0.12]
                            via-transparent
                            to-black/40
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            left-0
                            right-0
                            top-0
                            h-px
                            bg-white/40
                          "
                        />
                      </div>

                      {/* INFO */}

                      <div>
                        <h2
                          className="
                            mt-4
                            font-serif
                            text-4xl
                            font-medium
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                          "
                        >
                          Rafly Prayoga
                        </h2>

                        <p className="mt-4 text-sm text-white/40">
                          Informatics student and developer, based in
                          Indonesia
                        </p>
                      </div>
                    </div>

                    {/* Divider */}

                    <div className="my-12 h-px w-full bg-white/[0.07]" />

                    {/* Text */}

                    <div className="grid gap-12 lg:grid-cols-[1fr_240px]">

                      <div>

                        <p
                          className="
                            max-w-2xl
                            text-sm
                            leading-8
                            text-white/65
                            sm:text-base
                          "
                        >
                          I&apos;m an Informatics student who enjoys
                          working across the stack — from the interface
                          someone actually touches, to the systems
                          running quietly behind it. I like taking a
                          rough idea and shaping it into something people
                          find useful, clear, and good to look at.
                        </p>

                        <p
                          className="
                            mt-6
                            max-w-2xl
                            text-sm
                            leading-8
                            text-white/35
                          "
                        >
                          Outside of coursework, I spend most of my time
                          building web and mobile projects, and picking
                          apart new tools to see how they work.
                        </p>
                      </div>

                      {/* Focus */}

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-white/30
                          "
                        >
                          Focus areas
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">

                          {[
                            "Frontend",
                            "Backend",
                            "Mobile",
                            "Software Development",
                          ].map((item) => (
                            <span
                              key={item}
                              className="
                                rounded-full
                                border
                                border-white/[0.1]
                                bg-white/[0.035]
                                px-4
                                py-2.5
                                text-xs
                                text-white/45
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-white/20
                                hover:bg-white/[0.07]
                                hover:text-white
                              "
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    EDUCATION
                ================================================== */}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                      filter: "blur(8px)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <div className="max-w-4xl">

                      <div className="relative border-l border-white/[0.09] pl-9">

                        <div
                          className="
                            absolute
                            -left-[5px]
                            top-1
                            h-2
                            w-2
                            rounded-full
                            bg-white
                            shadow-[0_0_10px_rgba(255,255,255,0.6)]
                          "
                        />

                        <p
                          className="
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-white/45
                          "
                        >
                          2023 — Present
                        </p>

                        <h2
                          className="
                            mt-5
                            font-serif
                            text-4xl
                            font-medium
                            tracking-tight
                            text-white
                            sm:text-5xl
                          "
                        >
                          Universitas Tarumanagara
                        </h2>

                        <p className="mt-4 text-sm text-white/45">
                          Informatics Engineering
                        </p>

                        <p
                          className="
                            mt-8
                            max-w-2xl
                            text-sm
                            leading-8
                            text-white/35
                            sm:text-base
                          "
                        >
                          Currently studying software development, web
                          technologies, mobile development, data
                          structures, and modern computing.
                        </p>
                      </div>

                      {/* Stats */}

                      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3">

                        {[
                          {
                            label: "Field",
                            value: "Informatics",
                          },
                          {
                            label: "Status",
                            value: "Student",
                          },
                          {
                            label: "Since",
                            value: "2023",
                          },
                        ].map((stat, index) => (
                          <div
                            key={stat.label}
                            className={`
                              rounded-2xl
                              border
                              border-white/[0.09]
                              bg-white/[0.025]
                              p-6
                              backdrop-blur-xl
                              transition-all
                              duration-300
                              hover:bg-white/[0.05]

                              ${
                                index === 2
                                  ? "col-span-2 sm:col-span-1"
                                  : ""
                              }
                            `}
                          >
                            <p
                              className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-white/25
                              "
                            >
                              {stat.label}
                            </p>

                            <p className="mt-4 text-sm font-medium text-white/70">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    LOCATION
                ================================================== */}

                {activeTab === "location" && (
                  <motion.div
                    key="location"
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                      filter: "blur(8px)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <div className="grid gap-12 lg:grid-cols-[1fr_280px]">

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-white/30
                          "
                        >
                          Currently based in
                        </p>

                        <h2
                          className="
                            mt-6
                            font-serif
                            text-6xl
                            font-medium
                            tracking-tight
                            text-white
                            sm:text-7xl
                          "
                        >
                          Jakarta
                        </h2>

                        <p
                          className="
                            mt-7
                            max-w-xl
                            text-sm
                            leading-8
                            text-white/40
                            sm:text-base
                          "
                        >
                          Working out of Indonesia — learning, building,
                          and keeping an eye on where technology is
                          headed next.
                        </p>

                        <div className="mt-12 flex items-center gap-4">

                          <span
                            className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/[0.12]
                              bg-white/[0.04]
                              backdrop-blur-md
                            "
                          >
                            <span
                              className="
                                h-2
                                w-2
                                rounded-full
                                bg-white
                                shadow-[0_0_10px_rgba(255,255,255,0.6)]
                              "
                            />
                          </span>

                          <div>

                            <p
                              className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-white/25
                              "
                            >
                              Open to
                            </p>

                            <p className="mt-1 text-sm text-white/60">
                              Collaboration & projects
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Location Info */}

                      <div
                        className="
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/[0.09]
                          bg-white/[0.025]
                          backdrop-blur-xl
                        "
                      >

                        <div className="p-7">

                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.2em]
                              text-white/25
                            "
                          >
                            Timezone
                          </p>

                          <p className="mt-4 text-xl font-medium text-white/80">
                            GMT +7
                          </p>
                        </div>

                        <div className="border-t border-white/[0.08] p-7">

                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.2em]
                              text-white/25
                            "
                          >
                            Region
                          </p>

                          <p className="mt-4 text-sm text-white/55">
                            Southeast Asia
                          </p>
                        </div>

                        <div className="border-t border-white/[0.08] p-7">

                          <p
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.2em]
                              text-white/25
                            "
                          >
                            Availability
                          </p>

                          <p className="mt-4 text-sm text-white/60">
                            Open for opportunities
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          </div>
        </motion.div>

        {/* Bottom hint */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-8 flex justify-end"
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}