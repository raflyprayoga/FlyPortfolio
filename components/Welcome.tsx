"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Welcome",
  "Selamat Datang",
  "ようこそ",
  "환영합니다",
];

const STEP_MS = 600; // durasi tiap teks tampil (dinaikkan biar sempat kebaca)
const TOTAL_MS = (greetings.length - 1) * STEP_MS + 700; // total sebelum welcome hilang

export default function Welcome() {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, STEP_MS);

    const timer = setTimeout(() => {
      setShow(false);
    }, TOTAL_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black
            text-white
          "
        >
          {/* CONTENT */}
          <div className="flex flex-col items-center text-center">

            {/* SMALL LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-8
                text-[10px]
                font-medium
                uppercase
                tracking-[0.5em]
                text-white/40
              "
            >
              Rafly Prayoga
            </motion.p>

            {/* GREETING */}
            <div
              className="
                relative
                flex
                h-24
                w-[340px]
                items-center
                justify-center
                sm:h-28
                sm:w-[500px]
              "
            >
              {/* mode="popLayout" agar teks baru tidak menunggu teks lama selesai keluar sepenuhnya */}
              <AnimatePresence mode="popLayout">
                <motion.h1
                  key={greetings[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12}}
                  transition={{
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    whitespace-nowrap
                    text-5xl
                    font-light
                    tracking-tight
                    text-white
                    sm:text-7xl
                  "
                >
                  {greetings[index]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="
                mt-8
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/30
              "
            >
              Creative Developer
            </motion.p>
          </div>

          {/* PROGRESS */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-full
              bg-white/10
            "
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: TOTAL_MS / 1000,
                ease: "linear",
              }}
              className="
                h-full
                w-full
                origin-left
                bg-white
              "
            />
          </div>

          {/* LEFT INFO */}
          <div
            className="
              absolute
              bottom-8
              left-6
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/20
              sm:left-10
            "
          >
            Portfolio / 2026
          </div>

          {/* RIGHT INFO */}
          <div
            className="
              absolute
              bottom-8
              right-6
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/20
              sm:right-10
            "
          >
            Indonesia
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}