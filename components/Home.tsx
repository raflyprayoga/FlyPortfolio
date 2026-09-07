"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import MoltenMetal from "./MoltenMetal";
import TiltedCard from "./TiltedCard";

export default function Home() {
  const homeRef = useRef<HTMLElement | null>(null);

  /*
    Scroll progress khusus untuk Home.

    0   = bagian atas Home
    1   = bagian bawah Home sudah meninggalkan viewport
  */
  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end start"],
  });

  /*
    Purple glow akan sedikit muncul,
    kemudian menghilang ketika masuk About.
  */
  const transitionGlowOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.72, 1],
    [0.15, 0.3, 0]
  );

  const transitionGlowScale = useTransform(
    scrollYProgress,
    [0.55, 0.8, 1],
    [0.8, 1.2, 1.5]
  );

  /*
    Fade bagian bawah Home.
  */
  const transitionFadeOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.85, 1],
    [0.2, 0.8, 1]
  );

  return (
    <motion.section
      ref={homeRef}
      id="home"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-black
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >
      {/* =====================================================
          MOLTEN METAL BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
        "
      >
        <MoltenMetal
          color1="#4b00fa"
          color2="#e90be2"
          color3="#9b05ff"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
          opacity={1}
        />
      </div>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-black/40
        "
      />

      {/* =====================================================
          EXTRA VIGNETTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div
          className="
            grid
            items-center
            gap-14
            md:gap-16
            lg:grid-cols-[minmax(0,1fr)_420px_minmax(0,1fr)]
            lg:gap-12
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-2
              lg:order-1
            "
          >
            {/* LABEL */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-neutral-500
                sm:text-[11px]
              "
            >
              Fullstak Developer
            </motion.p>

            {/* NAME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(15px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[3.5rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                xl:text-[7rem]
              "
            >
              Rafly
              <br />

              <span
                className="
                  text-neutral-600
                "
              >
                Prayoga
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.95,
                ease: "easeOut",
              }}
              className="
                mt-7
                max-w-lg
                text-sm
                leading-6
                text-neutral-400
                sm:mt-9
                sm:text-base
                sm:leading-7
                md:text-lg
              "
            >
              merancang dan mengembangkan solusi digital yang memadukan keindahan visual, performa tinggi, dan kenyamanan pengguna.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.15,
                ease: "easeOut",
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
                sm:mt-9
              "
            >
              {/* VIEW PROJECTS */}

              <a
                href="#projects"
                className="
                  border
                  border-white
                  bg-white
                  px-5
                  py-3.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-transparent
                  hover:text-white
                  sm:px-6
                  sm:text-[11px]
                "
              >
                View Projects
              </a>

              {/* ABOUT */}

              <a
                href="#about"
                className="
                  border
                  border-white/15
                  px-5
                  py-3.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white/5
                  sm:px-6
                  sm:text-[11px]
                "
              >
                About Me
              </a>
            </motion.div>
          </motion.div>

          {/* =================================================
              CENTER PHOTO
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-1
              flex
              justify-center
              lg:order-2
            "
          >
            <div
              className="
                scale-[0.72]
                sm:scale-[0.82]
                md:scale-[0.9]
                lg:scale-100
              "
            >
              <TiltedCard
                imageSrc="/profile.png"
                altText="Rafly Prayoga"
                captionText="Rafly Prayoga"
                containerHeight="560px"
                containerWidth="400px"
                imageHeight="560px"
                imageWidth="400px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-3
              lg:pl-4
              xl:pl-8
            "
          >
            {/* =================================================
                CURRENTLY
            ================================================== */}

            <div
              className="
                border-t
                border-white/10
                pt-5
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.85,
                }}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                  sm:text-[10px]
                "
              >
                Currently
              </motion.span>

              {/* TITLE */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                }}
                className="
                  mt-5
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  sm:text-3xl
                  md:text-4xl
                "
              >
                Fullstack
                <br />
                Developer
              </motion.h2>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.15,
                }}
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >
                Mengubah ide menjadi produk digital yang berfungsi baik, fleksibel, dan tampil elegan.
              </motion.p>
            </div>

            {/* =================================================
                FOCUS
            ================================================== */}

            <div
              className="
                mt-9
                border-t
                border-white/10
                pt-5
                sm:mt-10
              "
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                }}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                  sm:text-[10px]
                "
              >
                Focus
              </motion.p>

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {[
                  "Mobile",
                  "Fullstack",
                  "Software",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 1.1 + index * 0.08,
                    }}
                    className="
                      border
                      border-white/10
                      px-3
                      py-2
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-neutral-400
                      transition-all
                      duration-300
                      hover:border-white
                      hover:text-white
                    "
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* =================================================
                LOCATION
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1.4,
              }}
              className="
                mt-9
                flex
                items-end
                justify-between
                sm:mt-10
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-500
                  "
                >
                  Based in
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-neutral-300
                  "
                >
                  Indonesia
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM INFO
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
          }}
          className="
            mt-14
            border-t
            border-white/10
            pt-6
            sm:mt-16
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-4
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-neutral-500
              sm:flex
              sm:flex-wrap
              sm:items-center
              sm:justify-between
              sm:gap-5
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            {[
              "Fullstak Developer",
              "Mobile Developer",
              "Software Developer",
              "2026",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.6 + index * 0.1,
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          HOME → ABOUT TRANSITION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-30
          h-56
          w-full
          overflow-hidden
        "
      >
        {/* PURPLE AMBIENT GLOW */}

        <motion.div
          style={{
            opacity: transitionGlowOpacity,
            scale: transitionGlowScale,
          }}
          className="
            absolute
            bottom-[-150px]
            left-1/2
            h-72
            w-[60%]
            -translate-x-1/2
            rounded-full
            bg-purple-700/25
            blur-[120px]
          "
        />

        {/* MAIN FADE */}

        <motion.div
          style={{
            opacity: transitionFadeOpacity,
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-black/70
            to-black
          "
        />

        {/* EXTRA SOFT PURPLE LINE */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-[70%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-purple-500/20
            to-transparent
          "
        />
      </div>
    </motion.section>
  );
}