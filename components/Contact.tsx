
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  AtSign,
  Code2,
  ExternalLink,
  Send,
  Mail,
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
      name: "GitHub",
      username: "@rflypryg",
      href: "https://github.com/rflypryg",
      icon: Code2,
    },
    {
      name: "GitHub",
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Pesan dari ${formData.name}`
    );

    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan:\n${formData.message}`
    );

    window.location.href =
      `mailto:raflyzadam43@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors duration-300 focus:border-violet-500";

  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 pb-8 pt-24 text-white sm:px-10 sm:pt-28 lg:px-16 lg:pb-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Mari buat sesuatu
            <br />
            yang{" "}
            <span className="text-violet-500">hebat.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Punya ide, proyek, atau tawaran kerja sama?
            Hubungi saya dan mari ciptakan sesuatu yang
            bermanfaat bersama.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Social Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
              Temukan Saya
            </p>

            <div>
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={`${social.name}-${social.username}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-white/10 py-4 transition-colors hover:border-violet-500/50"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-gray-400 transition-colors group-hover:text-violet-500"
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          {social.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {social.username}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-gray-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500"
                    />
                  </a>
                );
              })}
            </div>

            {/* Email */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
                Email
              </p>

              <a
                href="mailto:raflyzadam43@gmail.com"
                className="group inline-flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-violet-400"
              >
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="text-violet-500"
                />

                raflyzadam43@gmail.com

                <ArrowUpRight
                  size={15}
                  className="text-gray-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
              Kirim Pesan
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Nama Lengkap
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Masukkan nama kamu"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Nomor Telepon{" "}
                  <span className="text-gray-600">
                    (Opsional)
                  </span>
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+62 ..."
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-xs text-gray-400"
                >
                  Pesan
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder="Ceritakan ide atau pesan kamu..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-violet-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-violet-500"
              >
                Kirim Pesan

                <Send
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Rafly Prayoga</span>
          <span>Mari buat sesuatu yang bermanfaat.</span>
        </footer>
      </div>
    </section>
  );
}
