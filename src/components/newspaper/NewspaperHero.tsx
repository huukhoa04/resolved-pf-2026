import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";

export default function NewspaperHero() {
  const { general } = portfolioData;
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="w-full border-b-4 border-[#1a1208] pb-4">
      {/* Topline bar */}
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-imfell border-b border-[#1a1208] pb-2 mb-4 text-[#1a1208]/60">
        <span>Est. 2026</span>
        <span>{today}</span>
        <span>Vol. I &mdash; No. 1</span>
      </div>

      {/* Masthead */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center my-6"
      >
        <p className="font-imfell italic text-sm tracking-[0.3em] text-[#1a1208]/60 mb-2">
          The Portfolio Gazette
        </p>
        <h1
          className="font-fraktur leading-none text-[4rem] xs:text-[5.5rem] md:text-[9rem] lg:text-[12rem] text-[#1a1208] tracking-tight"
          style={{ fontFamily: "UnifrakturMaguntia, cursive" }}
        >
          Resolved
        </h1>
        <div className="flex items-center gap-3 justify-center mt-3">
          <div className="flex-1 h-px bg-[#1a1208]" />
          <p className="font-imfell italic text-xs xs:text-sm tracking-widest text-[#1a1208]/70 whitespace-nowrap">
            Full-Stack Developer &mdash; Da Nang, Vietnam
          </p>
          <div className="flex-1 h-px bg-[#1a1208]" />
        </div>
      </motion.div>

      {/* Thick rule */}
      <div className="h-1 bg-[#1a1208] mt-4" />
      <div className="h-0.5 bg-[#1a1208] mt-1" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between mt-4 text-[10px] uppercase tracking-[0.3em] font-imfell text-[#1a1208]/50"
      >
        <span>Portfolio Edition</span>
        <span className="font-bold text-[#1a1208]">SPECIAL ISSUE</span>
        <span>Price: Free</span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="mt-8 text-center px-4"
      >
        <h2 className="font-playfair font-black text-3xl xs:text-4xl md:text-6xl lg:text-7xl leading-tight text-[#1a1208] uppercase">
          {general.name}
        </h2>
        <p className="font-imfell italic text-base md:text-xl text-[#1a1208]/70 mt-2">
          &ldquo;{general.nickname}&rdquo; &mdash; Building tomorrow&apos;s web, one commit at a time
        </p>
      </motion.div>
    </header>
  );
}
