import { motion } from "framer-motion";
import { portfolioData, type PortfolioData } from "../../data/portfolio";
import {
  SiReact, SiVuedotjs, SiAngular, SiFlutter, SiPython, SiNodedotjs,
  SiDotnet, SiHuggingface, SiDocker, SiGithubactions, SiNginx, SiOllama,
  SiGooglegemini, SiGooglecloud,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

const TechIconMap: Record<string, IconType> = {
  React: SiReact,
  Vue: SiVuedotjs,
  Angular: SiAngular,
  "React Native": SiReact,
  Flutter: SiFlutter,
  Python: SiPython,
  Nodejs: SiNodedotjs,
  ".NET": SiDotnet,
  Huggingface: SiHuggingface,
  GenAI: SiGooglegemini,
  Ollama: SiOllama,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Nginx: SiNginx,
  AWS: FaAws,
  GCP: SiGooglecloud,
};

export default function NewspaperTechstack() {
  const { techstack } = portfolioData;
  const categories = Object.values(techstack);

  return (
    <motion.section
      id="techstack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-8"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-playfair font-bold text-xs uppercase tracking-[0.3em] text-[#1a1208]/50">
          Technical Dossier
        </span>
        <div className="flex-1 h-px bg-[#1a1208]/20" />
      </div>

      <h3 className="font-playfair font-black text-2xl md:text-3xl text-[#1a1208] mb-1 uppercase">
        Skills &amp; Instruments
      </h3>
      <p className="font-imfell italic text-sm text-[#1a1208]/60 mb-6">
        A classified inventory of tools wielded in the field
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1208]/15">
        {categories.map(
          (
            category: PortfolioData["techstack"][keyof PortfolioData["techstack"]],
            index,
          ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#f5f0e8] p-5"
            >
              <h4 className="font-playfair font-bold text-sm uppercase tracking-widest text-[#1a1208]/50 mb-3 border-b border-[#1a1208]/15 pb-2">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech: string, i: number) => {
                  const Icon = TechIconMap[tech] || SiReact;
                  return (
                    <div key={i} className="flex items-center gap-1.5 group">
                      <Icon className="w-4 h-4 text-[#1a1208]/50 group-hover:text-[#1a1208] transition-colors" />
                      <span className="font-imfell text-sm text-[#1a1208]/80">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ),
        )}
      </div>
    </motion.section>
  );
}
