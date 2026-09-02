export default function Footer() {
return ( <footer
   className="
     border-t
     border-black/10
     bg-white
     px-6
     py-8
     transition-colors
     duration-500
     dark:border-white/10
     dark:bg-black
   "
 > <div
     className="
       mx-auto
       flex
       max-w-7xl
       flex-col
       justify-between
       gap-4
       text-xs
       uppercase
       tracking-[0.2em]
       text-neutral-500
       md:flex-row
       dark:text-neutral-600
     "
   > <span>© 2026 Rafly Prayoga</span>

    <span>Designed & Built with Next.js</span>
  </div>
</footer>
);
}
