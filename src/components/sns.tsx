import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { FaFacebook, FaGithub, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";

const IconMap: Record<string, IconType> = {
  facebook: FaFacebook,
  twitter: FaXTwitter,
  github: FaGithub,
  email: MdEmail,
};

export default function SNS() {
  const { sns } = portfolioData;

  return (
    <section
      id="sns"
      className="min-h-[100svh] flex flex-col py-20 md:py-40 px-4 xs:px-6 md:px-24 w-full bg-white text-neutral relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute bottom-10 right-10 text-[7rem] xs:text-[10rem] md:text-[15rem] font-goldman opacity-[0.03] select-none pointer-events-none">
        03
      </div>

      <div className="relative z-10 w-full mb-16 md:mb-32">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl xs:text-6xl md:text-8xl lg:text-[12rem] font-goldman tracking-tighter"
        >
          CONNECT
        </motion.h2>
      </div>

      <div className="flex flex-col border-t border-neutral/10">
        {sns.map((item, index) => {
          const Icon = IconMap[item.icon] || MdEmail;
          return (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between py-8 md:py-12 border-b border-neutral/10 hover:bg-neutral hover:text-white transition-all duration-500 px-4 md:px-8"
            >
              <div className="flex items-center gap-4 md:gap-12">
                <span className="font-goldman text-xs xs:text-sm md:text-xl opacity-20">
                  0{index + 1}
                </span>
                <div className="p-3 md:p-4 rounded-full border border-neutral/10 group-hover:border-white/20">
                  <Icon className="w-5 h-5 xs:w-6 xs:h-6 md:w-10 md:h-10" />
                </div>
                <span className="font-goldman text-[1.1rem] xs:text-2xl sm:text-4xl md:text-7xl uppercase tracking-tighter">
                  {item.platform}
                </span>
              </div>

              <div className="hidden md:flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-goldman text-xl uppercase tracking-widest">
                  Visit Link
                </span>
                <FaArrowRight size={32} />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
