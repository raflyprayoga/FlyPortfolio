import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafly Prayoga | Portfolio",
  description:
    "Personal portfolio of Rafly Prayoga — Software Developer, Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}