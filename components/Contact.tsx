"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  AtSign,
  Code2,
  ExternalLink,
  Send,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const socials = [
    {
      name: "GitHub 1",
      username: "@rflypryg",
      href: "https://github.com/rflypryg",
      icon: Code2,
    },
    {
      name: "GitHub 2",
      username: "@raflyprayoga",
      href: "https://github.com/raflyprayoga",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${formData.name}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:raflyzadam43@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        bg-black
        px-6
        py-12
        font-sans
        text-white
        md:px-12
      "
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        {/* Content Utama Grid (Tepat di Tengah) */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* SISI KIRI: Judul, Deskripsi Ringkas, Sosmed */}
          <div className="space-y-5">
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl">
              Mari buat
              <br />
              sesuatu yang
              <br />
              <span className="text-neutral-500">hebat.</span>
            </h2>

            <p className="max-w-md text-xs leading-relaxed text-neutral-400 md:text-sm">
              Punya ide, proyek, atau tawaran kerja sama? Mari diskusi dan buat
              karya menarik bersama.
            </p>

            {/* Sosmed */}
            <div className="pt-1">
              <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Temukan Saya
              </p>

              <div className="space-y-2">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border
                        border-neutral-800
                        bg-neutral-900/50
                        px-3.5
                        py-2.5
                        transition-all
                        duration-200
                        hover:border-neutral-700
                        hover:bg-neutral-900
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-800 bg-black">
                          <Icon size={13} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                            {social.name}
                          </p>
                          <p className="text-[9px] text-neutral-400">
                            {social.username}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SISI KANAN: Form Kontak */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* YOUR NAME */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-800 bg-neutral-900/50 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white placeholder-neutral-500 outline-none transition duration-200 focus:border-white focus:bg-neutral-900"
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-800 bg-neutral-900/50 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white placeholder-neutral-500 outline-none transition duration-200 focus:border-white focus:bg-neutral-900"
                />
              </div>

              {/* TELEPHONE NUMBER */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="TELEPHONE NUMBER"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-neutral-800 bg-neutral-900/50 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white placeholder-neutral-500 outline-none transition duration-200 focus:border-white focus:bg-neutral-900"
                />
              </div>

              {/* YOUR MESSAGE */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none border border-neutral-800 bg-neutral-900/50 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white placeholder-neutral-500 outline-none transition duration-200 focus:border-white focus:bg-neutral-900"
                />
              </div>

              {/* SEND MESSAGE BUTTON */}
              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  border-white
                  bg-white
                  px-6
                  py-3.5
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                  transition-all
                  duration-200
                  hover:bg-black
                  hover:text-white
                "
              >
                <span>SEND MESSAGE</span>
                <Send size={13} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Teks Paling Bawah Tanpa Garis */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6 text-[9px] uppercase tracking-[0.2em] text-neutral-500 md:px-12">
        <span>Rafly Prayoga</span>
        <span>Mari buat sesuatu yang bermanfaat.</span>
      </div>
    </section>
  );
}