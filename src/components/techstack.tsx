import { motion } from "framer-motion";
import { portfolioData, type PortfolioData } from "../data/portfolio";
import {
  MdMonitor,
  MdSmartphone,
  MdStorage,
  MdPsychology,
  MdCloudQueue,
} from "react-icons/md";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiPython,
  SiNodedotjs,
  SiDotnet,
  SiHuggingface,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiOllama,
  SiGooglegemini,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";

const CategoryIconMap: Record<string, IconType> = {
  "monitor-dashboard": MdMonitor,
  cellphone: MdSmartphone,
  server: MdStorage,
  brain: MdPsychology,
  docker: MdCloudQueue,
};

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
  OpenAI: SiOpenai,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Nginx: SiNginx,
  AWS: FaAws,
  GCP: SiGooglecloud,
};

export default function Techstack() {
  const { techstack } = portfolioData;
  const categories = Object.values(techstack);

  return (
    <section
      id="techstack"
      className="min-h-[100svh] flex flex-col py-20 md:py-40 px-4 xs:px-6 md:px-24 w-full bg-neutral relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-10 left-10 text-[7rem] xs:text-[10rem] md:text-[15rem] font-goldman opacity-[0.03] select-none pointer-events-none text-white">
        02
      </div>

      <div className="relative z-10 w-full">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl xs:text-6xl md:text-8xl lg:text-[12rem] font-goldman text-white mb-16 md:mb-32 tracking-tighter"
        >
          SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
          {categories.map(
            (
              category: PortfolioData["techstack"][keyof PortfolioData["techstack"]],
              index,
            ) => (
              <TechLayer key={index} category={category} index={index} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function TechLayer({
  category,
  index,
}: {
  category: PortfolioData["techstack"][keyof PortfolioData["techstack"]];
  index: number;
}) {
  const CategoryIcon = CategoryIconMap[category.icon] || MdStorage;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group grid grid-cols-1 lg:grid-cols-12 items-center bg-neutral hover:bg-white transition-colors duration-500 p-6 md:p-8 lg:p-16"
    >
      <div className="lg:col-span-1 hidden lg:block">
        <CategoryIcon
          size={48}
          className="text-white/20 group-hover:text-neutral transition-colors"
        />
      </div>

      <div className="lg:col-span-3">
        <h3 className="text-xl xs:text-2xl md:text-4xl lg:text-5xl font-goldman text-white group-hover:text-neutral transition-colors flex items-center gap-4">
          <span className="text-xs font-opensans opacity-30">0{index + 1}</span>
          {category.name}
        </h3>
      </div>

      <div className="lg:col-span-8 mt-6 lg:mt-0">
        <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-16 justify-start">
          {category.items.map((tech: string, i: number) => {
            const Icon = TechIconMap[tech] || SiReact;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 md:gap-4 group/item"
              >
                <Icon className="text-accent group-hover:text-secondary group-hover:scale-125 transition-all duration-300 w-8 h-8 md:w-10 md:h-10" />
                <span className="font-goldman text-[10px] md:text-xs tracking-widest text-white/40 group-hover:text-neutral transition-colors uppercase">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
