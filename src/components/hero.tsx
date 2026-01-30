import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full bg-neutral py-20 px-4 md:px-0"
    >
      {/* Background Decorative Large Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[40vw] md:text-[30vw] font-goldman font-bold whitespace-nowrap outline-text leading-none opacity-5"
        >
          RESOLVED
        </motion.span>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center w-full max-w-[100vw]"
      >
        <div className="relative inline-block w-full max-w-fit px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute -top-4 left-0 h-1 bg-accent"
          />
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl xs:text-5xl sm:text-7xl md:text-[12rem] lg:text-[16rem] font-bold font-goldman text-white tracking-tighter leading-[0.8] break-all md:break-normal"
          >
            RESOLVED
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
            className="absolute -bottom-4 right-0 h-1 bg-accent"
          />
        </div>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="vertical-text font-goldman text-accent tracking-[1em] text-xl hidden md:block"
          >
            PORTFOLIO 2026
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg xs:text-xl md:text-4xl text-white/50 font-opensans border-l-4 border-accent pl-6 py-2 uppercase tracking-widest"
          >
            Full-Stack <br /> Developer
          </motion.p>
        </div>
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-white/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-white/5 hidden lg:block" />
    </section>
  );
}
