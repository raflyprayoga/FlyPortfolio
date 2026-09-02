"use client";

import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      {/* INTRO 2.5 DETIK */}
      <Welcome />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </main>
  );
}
