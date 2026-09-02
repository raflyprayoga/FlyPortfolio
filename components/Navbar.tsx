"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
  =========================================
  ACTIVE SECTION
  =========================================
  */
  useEffect(() => {
    const sections = navItems
      .filter((item) => item.label !== "Welcome")
      .map((item) => item.href.replace("#", ""))
      .filter((id) => document.getElementById(id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = sections[0];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  =========================================
  CLOSE MOBILE MENU
  =========================================
  */
  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.header
        initial={{
          opacity: 0,
          y: -30,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          right-0
          top-5
          z-50
          px-4
          md:px-6
        "
      >
        {/* =========================================
            NAVBAR
        ========================================= */}
        <div
          className="
            mx-auto
            flex
            h-14
            max-w-5xl
            items-center
            justify-between
            rounded-full
            border
            border-black/10
            bg-white/30
            px-3
            shadow-lg
            shadow-black/5
            backdrop-blur-2xl
            backdrop-saturate-150
            transition-all
            duration-300
          "
        >
          {/* =========================================
              LOGO
          ========================================= */}
          <a
            href="#welcome"
            className="
              relative
              flex
              h-14
              w-20
              shrink-0
              items-center
            "
            onClick={handleNavClick}
          >
            <img
              src="/logo.png"
              alt="Rafly Prayoga"
              className="
                absolute
                left-0
                top-1/2
                h-20
                w-20
                -translate-y-1/2
                object-contain
                transition-transform
                duration-300
                hover:scale-110
              "
            />
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems
              .filter((item) => item.label !== "Welcome")
              .map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-black text-white shadow-md"
                          : "text-neutral-500 hover:bg-black/10 hover:text-black"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}
          </nav>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div className="flex items-center gap-2">

            {/* HIRE ME */}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="
                hidden
                rounded-full
                border
                border-black
                bg-black
                px-5
                py-2.5
                text-[11px]
                font-bold
                uppercase
                tracking-widest
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                md:block
              "
            >
              Hire Me
            </a>

            {/* =========================================
                MOBILE BUTTON
            ========================================= */}
            <button
              onClick={() => setOpen(!open)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-black
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
                md:hidden
              "
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="space-y-1.5">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </div>
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="
                mx-auto
                mt-2
                max-w-5xl
                rounded-3xl
                border
                border-black/10
                bg-white/40
                p-4
                shadow-xl
                shadow-black/10
                backdrop-blur-2xl
                backdrop-saturate-150
              "
            >
              <nav className="flex flex-col gap-1">

                {/* MOBILE NAV ITEMS */}
                {navItems
                  .filter((item) => item.label !== "Welcome")
                  .map((item) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className={`
                          rounded-2xl
                          px-5
                          py-4
                          text-xs
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "bg-black text-white"
                              : "text-neutral-500 hover:bg-black/10 hover:text-black"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>

                          {isActive && (
                            <motion.span
                              layoutId="mobile-active-dot"
                              className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-white
                              "
                            />
                          )}
                        </div>
                      </a>
                    );
                  })}

                {/* MOBILE HIRE ME */}
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="
                    mt-2
                    rounded-2xl
                    bg-black
                    px-5
                    py-4
                    text-center
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    duration-300
                    hover:bg-neutral-800
                  "
                >
                  Hire Me
                </a>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}