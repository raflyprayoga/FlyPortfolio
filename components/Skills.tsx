"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* =========================================================
   DATA SKILLS
========================================================= */

const skillCategories = [
  {
    type: "Frontend",
    title: "React",
    description:
      "Teknologi yang saya gunakan untuk membangun interface web yang modern, interaktif, dan responsif.",
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.25)",
    mainIcon: "https://cdn.simpleicons.org/react/61DAFB",

    skills: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
        desc: "Library UI berbasis komponen untuk membangun antarmuka yang cepat dan interaktif.",
      },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
        desc: "Framework React untuk rendering server-side, routing, dan optimasi performa.",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
        desc: "Superset JavaScript dengan tipe data statis untuk kode yang lebih aman.",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        desc: "Bahasa inti untuk logika dan interaktivitas di sisi client maupun server.",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        desc: "Utility-first CSS framework untuk styling yang cepat dan konsisten.",
      },
      {
        name: "HTML5",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
        desc: "Markup dasar untuk struktur setiap halaman web.",
      },
      {
        name: "CSS3",
        icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        desc: "Bahasa styling untuk tampilan visual dan layout halaman.",
      },
    ],
  },

  {
    type: "Backend",
    title: "Node.js",
    description:
      "Teknologi yang saya gunakan untuk membangun server, REST API, autentikasi, dan pemrosesan data.",
    color: "#339933",
    glow: "rgba(51, 153, 51, 0.25)",
    mainIcon: "https://cdn.simpleicons.org/nodedotjs/339933",

    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs/339933",
        desc: "Runtime JavaScript untuk membangun server dan API yang scalable.",
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/FFFFFF",
        desc: "Framework minimalis untuk membangun REST API dengan Node.js.",
      },
      {
        name: "PHP",
        icon: "https://cdn.simpleicons.org/php/777BB4",
        desc: "Bahasa server-side untuk pengembangan aplikasi web dinamis.",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
        desc: "Database NoSQL berbasis dokumen untuk data yang fleksibel.",
      },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase/3FCF8E",
        desc: "Backend-as-a-service berbasis PostgreSQL dengan auth dan realtime API.",
      },
    ],
  },

  {
    type: "Mobile",
    title: "Flutter",
    description:
      "Framework yang saya gunakan untuk membuat aplikasi mobile Android dan iOS dengan satu codebase.",
    color: "#54C5F8",
    glow: "rgba(84, 197, 248, 0.28)",
    mainIcon: "https://cdn.simpleicons.org/flutter/54C5F8",

    skills: [
      {
        name: "Flutter",
        icon: "https://cdn.simpleicons.org/flutter/54C5F8",
        desc: "Framework UI untuk membangun aplikasi mobile lintas platform dari satu codebase.",
      },
      {
        name: "Dart",
        icon: "https://cdn.simpleicons.org/dart/0175C2",
        desc: "Bahasa pemrograman yang digunakan Flutter untuk logika aplikasi.",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase/FFCA28",
        desc: "Platform backend untuk autentikasi, database, dan notifikasi realtime.",
      },
      {
        name: "Android",
        icon: "https://cdn.simpleicons.org/android/3DDC84",
        desc: "Platform target utama untuk deployment aplikasi mobile.",
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
        desc: "Tools desain UI/UX untuk membuat wireframe dan prototype aplikasi.",
      },
    ],
  },

  {
    type: "Programming",
    title: "C++",
    description:
      "Bahasa pemrograman yang saya gunakan untuk memahami algoritma, struktur data, dan pengembangan aplikasi.",
    color: "#00599C",
    glow: "rgba(0, 89, 156, 0.28)",
    mainIcon: "https://cdn.simpleicons.org/cplusplus/00599C",

    skills: [
      {
        name: "C++",
        icon: "https://cdn.simpleicons.org/cplusplus/00599C",
        desc: "Bahasa pemrograman performa tinggi untuk algoritma dan struktur data.",
      },
      {
        name: "Java",
        icon: "https://cdn.simpleicons.org/openjdk/ED8B00",
        desc: "Bahasa berorientasi objek untuk aplikasi enterprise dan Android.",
      },
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
        desc: "Bahasa serbaguna untuk scripting, data, dan automasi.",
      },
    ],
  },

  {
    type: "Tools",
    title: "GitHub",
    description:
      "Tools yang saya gunakan untuk version control, kolaborasi, desain, dan development workflow.",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.18)",
    mainIcon: "https://cdn.simpleicons.org/github/FFFFFF",

    skills: [
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/FFFFFF",
        desc: "Platform kolaborasi dan hosting repository berbasis Git.",
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
        desc: "Tools desain UI/UX untuk membuat wireframe dan prototype aplikasi.",
      },
      {
        name: "VS Code",
        icon: "https://code.visualstudio.com/assets/branding/code-stable.png",
        desc: "Code editor utama untuk menulis dan debugging kode sehari-hari.",
      },
      {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
        desc: "Platform hosting dan deployment untuk aplikasi frontend/Next.js.",
      },
    ],
  },
];

/* =========================================================
   SKILLS COMPONENT
========================================================= */

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = skillCategories[activeIndex];

  function nextCategory() {
    setActiveIndex((current) =>
      current === skillCategories.length - 1 ? 0 : current + 1
    );
  }

  // Jari-jari (Radius) lingkaran tempat ikon berada
  const RADIUS_DESKTOP = 210;
  const RADIUS_MOBILE = 160;

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND GLOW */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.type}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 50% 65% at 78% 45%,
                ${active.glow},
                transparent 70%
              )
            `,
          }}
        />
      </AnimatePresence>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 md:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-4">
          
          {/* LEFT CONTENT */}
          <div className="relative z-30 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500"
            >
              Skill & Technology
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold tracking-tight md:text-6xl"
            >
              My Skills
              <span style={{ color: active.color }}>.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-md text-xs leading-6 text-neutral-500 md:text-sm"
            >
              Beberapa teknologi dan tools yang saya gunakan dalam
              membangun aplikasi web, mobile, maupun project lainnya.
            </motion.p>

            {/* ACTIVE CATEGORY */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: active.color }}
                  >
                    {active.type}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    {active.title}
                  </h2>

                  <p className="mt-3 max-w-sm text-xs leading-6 text-neutral-500 md:text-sm">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* SEE MORE */}
            <div className="mt-10">
              <button
                onClick={nextCategory}
                className="group flex items-center gap-3"
              >
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-3xl leading-none text-white"
                >
                  →
                </motion.span>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600">
                    see more
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.type}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-sm font-medium text-neutral-300 group-hover:text-white"
                    >
                      {active.type}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </button>
            </div>

            {/* CATEGORY DOTS */}
            <div className="mt-6 flex items-center gap-2">
              {skillCategories.map((category, index) => (
                <button
                  key={category.type}
                  onClick={() => setActiveIndex(index)}
                  aria-label={category.type}
                  className="transition-all duration-300"
                  style={{
                    width: activeIndex === index ? 28 : 6,
                    height: 4,
                    borderRadius: 999,
                    backgroundColor:
                      activeIndex === index
                        ? category.color
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CIRCLE */}
          <div className="relative flex h-[560px] items-center justify-center lg:h-[680px]">
            {/* BIG GLOW */}
            <motion.div
              key={`big-glow-${active.type}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
              style={{ background: active.glow }}
            />

            {/* CIRCLE BORDER (Sesuai dengan Radius 210px -> Diameter 420px) */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-700/70 md:h-[420px] md:w-[420px]" />
            <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-800/30 md:h-[390px] md:w-[390px]" />

            {/* ICONS CONTAINER */}
            <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
              {active.skills.map((skill, index) => {
                const totalSkills = active.skills.length;
                
                // Dimulai dari -90 derajat (posisi paling atas / jam 12)
                // Membagi 360 derajat secara merata untuk mengelilingi ikon tengah
                const angleDeg = -90 + (index * 360) / totalSkills;
                const angleRad = (angleDeg * Math.PI) / 180;

                // Hitung koordinat X dan Y melingkar
                const xDesktop = RADIUS_DESKTOP * Math.cos(angleRad);
                const yDesktop = RADIUS_DESKTOP * Math.sin(angleRad);

                const xMobile = RADIUS_MOBILE * Math.cos(angleRad);
                const yMobile = RADIUS_MOBILE * Math.sin(angleRad);

                return (
                  <motion.div
                    key={`${active.type}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `var(--x)`,
                      top: `var(--y)`,
                      ["--x" as any]: `${xDesktop}px`,
                      ["--y" as any]: `${yDesktop}px`,
                    }}
                  >
                    <style jsx>{`
                      @media (max-width: 768px) {
                        div {
                          --x: ${xMobile}px !important;
                          --y: ${yMobile}px !important;
                        }
                      }
                    `}</style>

                    <motion.div
                      whileHover={{ scale: 1.18 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#151515] p-2.5 shadow-2xl md:h-14 md:w-14"
                      style={{
                        boxShadow: `0 0 25px ${active.glow}`,
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        title={skill.name}
                        draggable={false}
                        className="h-full w-full object-contain"
                      />

                      {/* TOOLTIP */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-3 w-48 -translate-x-1/2 scale-95 rounded-lg border border-white/10 bg-[#151515] px-3 py-2 text-center opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                        <p
                          className="text-[11px] font-semibold"
                          style={{ color: active.color }}
                        >
                          {skill.name}
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-neutral-400">
                          {skill.desc}
                        </p>
                        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-white/10 bg-[#151515]" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.type}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.45 }}
                className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-28 w-28 items-center justify-center"
                >
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl"
                    style={{ background: active.glow }}
                  />

                  <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-black">
                    <img
                      src={active.mainIcon}
                      alt={active.title}
                      draggable={false}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                </motion.div>

                <p
                  className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: active.color }}
                >
                  {active.type}
                </p>

                <h3 className="mt-1 text-2xl font-bold">{active.title}</h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}