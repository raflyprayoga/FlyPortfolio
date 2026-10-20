
"use client";

import { motion } from "framer-motion";

const interests = [
  "Web Development",
  "Full-Stack Development",
  "Mobile Development",
  "Software Engineering",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black px-6 pb-10 pt-24 text-white sm:px-10 sm:pt-28 lg:px-16 lg:pb-8 lg:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <div className="mb-9">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I’m{" "}
            <span className="text-violet-500">
              Rafly Prayoga.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Mahasiswa Teknik Informatika di Universitas
            Tarumanagara yang memiliki ketertarikan pada
            pengembangan aplikasi dan teknologi digital.
          </p>
        </div>

        {/* Profile and Biography */}
        <div className="grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr] lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src="/profile.png"
              alt="Rafly Prayoga"
              className="h-56 w-48 object-cover object-top grayscale transition duration-500 hover:grayscale-0 sm:h-64 sm:w-52 lg:h-72 lg:w-60"
            />
          </motion.div>

          {/* About Text */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
              Tentang Saya
            </p>

            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              Saya senang mempelajari teknologi baru dan
              mengembangkan ide menjadi aplikasi yang fungsional
              serta memiliki desain yang menarik. Saya terus
              meningkatkan kemampuan pemrograman melalui
              pembelajaran dan pengerjaan berbagai proyek.
            </p>

            {/* Interests */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
                Areas of Interest
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs text-gray-300 transition-colors duration-200 hover:text-purple-400 sm:text-sm"
                  >
                    <span className="mr-2 text-violet-500">•</span>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education and Location */}
        <div className="mt-10 border-t border-white/10 pt-7 sm:mt-12 sm:pt-8">
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
                Education
              </p>

              <h3 className="text-lg font-semibold sm:text-xl">
                Universitas Tarumanagara
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Teknik Informatika
              </p>

              <p className="mt-1 text-xs text-gray-500">
                2024 — Sekarang
              </p>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
                Location
              </p>

              <h3 className="text-lg font-semibold sm:text-xl">
                Jakarta, Indonesia
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
