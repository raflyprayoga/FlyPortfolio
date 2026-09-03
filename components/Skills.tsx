"use client";

import { motion } from "framer-motion";

/* =========================================================
   SKILL DATA
========================================================= */

const skillCategories = [
  {
    title: "Frontend",
    description:
      "Building modern and responsive user interfaces.",
    skills: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      },
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "HTML",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS",
        icon: "https://cdn.simpleicons.org/css3/1572B6",
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Developing APIs, server-side applications, and services.",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express/FFFFFF",
      },
      {
        name: "PHP",
        icon: "https://cdn.simpleicons.org/php/777BB4",
      },
      {
        name: "Laravel",
        icon: "https://cdn.simpleicons.org/laravel/FF2D20",
      },
    ],
  },

  {
    title: "Programming",
    description:
      "Programming languages I use for development and problem solving.",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
      },
      {
        name: "Java",
        icon: "https://cdn.simpleicons.org/openjdk/ED8B00",
      },
      {
        name: "C++",
        icon: "https://cdn.simpleicons.org/cplusplus/00599C",
      },
    ],
  },

  {
    title: "Mobile",
    description:
      "Creating cross-platform mobile applications.",
    skills: [
      {
        name: "Flutter",
        icon: "https://cdn.simpleicons.org/flutter/02569B",
      },
      {
        name: "Dart",
        icon: "https://cdn.simpleicons.org/dart/0175C2",
      },
    ],
  },

  {
    title: "Database",
    description:
      "Managing and working with application data.",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql/4479A1",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase/FFCA28",
      },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase/3FCF8E",
      },
    ],
  },

  {
    title: "Tools & Design",
    description:
      "Tools I use for development, design, and collaboration.",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git/F05032",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/FFFFFF",
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
      },
      {
        name: "Postman",
        icon: "https://cdn.simpleicons.org/postman/FF6C37",
      },
      {
        name: "VS Code",
        icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      },
    ],
  },
];

/* =========================================================
   RANDOM POSITIONS
========================================================= */

const randomPositions = [
  {
    x: -80,
    y: -60,
    rotate: -15,
    scale: 0.65,
  },
  {
    x: 80,
    y: -70,
    rotate: 14,
    scale: 0.7,
  },
  {
    x: -100,
    y: 60,
    rotate: -18,
    scale: 0.65,
  },
  {
    x: 100,
    y: 70,
    rotate: 18,
    scale: 0.7,
  },
  {
    x: -50,
    y: 90,
    rotate: -12,
    scale: 0.68,
  },
  {
    x: 60,
    y: -90,
    rotate: 12,
    scale: 0.65,
  },
  {
    x: -110,
    y: 0,
    rotate: -20,
    scale: 0.62,
  },
];

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({
  category,
  categoryIndex,
}: {
  category: (typeof skillCategories)[number];
  categoryIndex: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: categoryIndex * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]

        border
        border-white/[0.08]

        bg-[#1d1d1d]

        p-6

        shadow-[0_15px_50px_rgba(0,0,0,0.25)]

        transition-all
        duration-500

        hover:border-white/[0.15]
        hover:bg-[#202020]
      "
    >
      {/* =====================================================
          CARD LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-52
          w-52
          rounded-full
          bg-white/[0.035]
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-white/[0.07]
        "
      />

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-6
          right-6
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.14]
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">

        {/* TITLE */}

        <motion.h3
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: categoryIndex * 0.05 + 0.1,
          }}
          className="
            text-xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {category.title}
        </motion.h3>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: categoryIndex * 0.05 + 0.15,
          }}
          className="
            mt-2
            max-w-md
            text-xs
            leading-5
            text-neutral-400
          "
        >
          {category.description}
        </motion.p>

        {/* =================================================
            ICON AREA

            IMPORTANT:
            Animation sekarang hanya bergerak sedikit.
            Jadi tidak ada icon yang keluar dari card.
        ================================================= */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-4
          "
        >
          {category.skills.map((skill, skillIndex) => {
            const start =
              randomPositions[
                (skillIndex + categoryIndex) %
                  randomPositions.length
              ];

            return (
              <motion.div
                key={`${category.title}-${skill.name}`}
                initial={{
                  opacity: 0,
                  x: start.x,
                  y: start.y,
                  rotate: start.rotate,
                  scale: start.scale,
                  filter: "blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.9,
                  delay:
                    0.2 +
                    categoryIndex * 0.08 +
                    skillIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -7,
                  scale: 1.1,
                  rotate: 3,
                  transition: {
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group/icon relative"
              >
                {/* =================================================
                    GLOW
                ================================================= */}

                <div
                  className="
                    absolute
                    -inset-3
                    rounded-full
                    bg-white/[0.08]
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover/icon:opacity-100
                  "
                />

                {/* =================================================
                    GLASS CIRCLE
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center

                    overflow-hidden
                    rounded-full

                    border
                    border-white/[0.14]

                    bg-white/[0.055]

                    shadow-
                    [inset_0_1px_1px_rgba(255,255,255,0.12)]

                    backdrop-blur-xl
                    backdrop-saturate-150

                    transition-all
                    duration-500

                    group-hover/icon:border-white/[0.3]
                    group-hover/icon:bg-white/[0.1]
                  "
                >
                  {/* =================================================
                      GLASS REFLECTION
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[10%]
                      right-[10%]
                      top-[5%]
                      h-[45%]
                      rounded-full

                      bg-gradient-to-b
                      from-white/[0.14]
                      via-white/[0.04]
                      to-transparent

                      opacity-80
                    "
                  />

                  {/* =================================================
                      INNER BORDER
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      ring-1
                      ring-inset
                      ring-white/[0.04]
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    draggable={false}
                    loading="eager"
                    className="
                      relative
                      z-10
                      h-7
                      w-7
                      object-contain

                      transition-transform
                      duration-500

                      group-hover/icon:scale-110
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN SKILLS
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-black
        py-24
        text-white

        md:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            justify-between
            gap-8

            md:flex-row
            md:items-end
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-neutral-600
              "
            >
              03 / Skills
            </p>

            <h2
              className="
                text-5xl
                font-bold
                tracking-tight
                text-white

                sm:text-6xl
                md:text-7xl
              "
            >
              What I work with.
            </h2>
          </div>

          {/* RIGHT */}

          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-neutral-400

              md:text-right
            "
          >
            Technologies, programming languages,
            databases, and tools I use to build
            modern digital experiences.
          </p>
        </motion.div>

        {/* ===================================================
            MASONRY GRID
        =================================================== */}

        <div className="mt-16">

          <div
            className="
              columns-1
              gap-4

              sm:columns-2

              lg:columns-3
            "
          >
            {skillCategories.map(
              (category, categoryIndex) => (
                <div
                  key={category.title}
                  className="
                    mb-4
                    break-inside-avoid
                  "
                >
                  <CategoryCard
                    category={category}
                    categoryIndex={categoryIndex}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          LEFT EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />
    </section>
  );
}