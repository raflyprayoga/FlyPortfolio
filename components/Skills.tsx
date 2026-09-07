"use client";

import { motion } from "framer-motion";

/* =========================================================
   SKILL DATA
========================================================= */

const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
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
    description: "Developing APIs, server-side applications, and services.",
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
    description: "Languages I use for development and problem solving.",
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
    description: "Creating cross-platform mobile applications.",
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
    description: "Managing and working with application data.",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase/3FCF8E",
      },
    ],
  },

  {
    title: "Tools & Design",
    description: "Tools I use for development, design, and collaboration.",
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
        name: "VS Code",
        icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      },
    ],
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
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-neutral-800
        bg-neutral-900/40
        p-5
        transition-all
        duration-300
        hover:border-neutral-700
        hover:bg-neutral-900/70
      "
    >
      {/* Subtle glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-white/[0.025]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-white/[0.05]
        "
      />

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
            >
              {category.title}
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                leading-relaxed
                text-neutral-500
              "
            >
              {category.description}
            </p>
          </div>

          <span
            className="
              shrink-0
              pt-1
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-neutral-600
            "
          >
            {String(categoryIndex + 1).padStart(2, "0")}
          </span>
        </div>

        {/* =================================================
            SKILLS
        ================================================== */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={`${category.title}-${skill.name}`}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.3,
                delay:
                  categoryIndex * 0.06 +
                  skillIndex * 0.035,
              }}
              title={skill.name}
              className="
                group/icon
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-neutral-800
                bg-black/50
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-neutral-600
                hover:bg-neutral-800
              "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                draggable={false}
                loading="lazy"
                className="
                  h-6
                  w-6
                  object-contain
                  opacity-80
                  transition-all
                  duration-200
                  group-hover/icon:scale-110
                  group-hover/icon:opacity-100
                "
              />

              {/* TOOLTIP */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -top-9
                  left-1/2
                  z-30
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  border
                  border-neutral-800
                  bg-neutral-950
                  px-2
                  py-1
                  text-[9px]
                  font-medium
                  text-neutral-300
                  opacity-0
                  shadow-xl
                  transition-all
                  duration-200
                  group-hover/icon:-translate-y-0.5
                  group-hover/icon:opacity-100
                "
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN SKILLS SECTION
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        bg-black
        py-20
        text-white
        md:py-24
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

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            flex
            flex-col
            justify-between
            gap-5
            md:flex-row
            md:items-end
          "
        >
          <div>
            <p
              className="
                mb-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-neutral-600
              "
            >
              Skills
            </p>

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
                md:text-6xl
              "
            >
              What I work with.
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-xs
              leading-relaxed
              text-neutral-500
              md:text-right
            "
          >
            Technologies, programming languages, databases,
            and tools I use to build modern digital experiences.
          </p>
        </motion.div>

        {/* =================================================
            SIMPLE SKILLS GRID
        ================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            items-start
          "
        >

          {skillCategories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              categoryIndex={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
}