import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

const IconMap: Record<string, IconType> = {
  facebook: FaFacebook,
  twitter: FaXTwitter,
  github: FaGithub,
  email: MdEmail,
};

export default function NewspaperSNS() {
  const { sns } = portfolioData;

  return (
    <motion.section
      id="sns"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-8"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-playfair font-bold text-xs uppercase tracking-[0.3em] text-[#1a1208]/50">
          Correspondence
        </span>
        <div className="flex-1 h-px bg-[#1a1208]/20" />
      </div>

      <h3 className="font-playfair font-black text-2xl md:text-3xl text-[#1a1208] mb-1 uppercase">
        Reach the Correspondent
      </h3>
      <p className="font-imfell italic text-sm text-[#1a1208]/60 mb-6">
        Letters and dispatches welcome through any of the following channels
      </p>

      <div className="border-t border-b border-[#1a1208]/20 divide-y divide-[#1a1208]/10">
        {sns.map((item, index) => {
          const Icon = IconMap[item.icon] || MdEmail;
          return (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between py-4 px-2 hover:bg-[#1a1208] hover:text-[#f5f0e8] transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <Icon className="w-5 h-5 text-[#1a1208]/40 group-hover:text-[#f5f0e8]/60 transition-colors" />
                <span className="font-playfair font-bold text-lg md:text-2xl uppercase tracking-tight text-[#1a1208] group-hover:text-[#f5f0e8] transition-colors">
                  {item.platform}
                </span>
              </div>
              <span className="font-imfell italic text-sm text-[#1a1208]/40 group-hover:text-[#f5f0e8]/60 transition-colors hidden sm:block">
                {item.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
