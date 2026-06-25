import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { getGravatarUrl } from "../../libs/gravatar";

export default function NewspaperAbout() {
  const { general } = portfolioData;

  // Only show the first description line (role), hide university & employer
  const role = portfolioData.description[0];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-8"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-playfair font-bold text-xs uppercase tracking-[0.3em] text-[#1a1208]/50">
          Profile
        </span>
        <div className="flex-1 h-px bg-[#1a1208]/20" />
      </div>

      {/* Two-column layout: photo | bio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {/* Photo */}
        <div className="md:col-span-1">
          <figure className="relative">
            <div className="border-2 border-[#1a1208]/20 p-1 bg-white">
              <img
                src={getGravatarUrl(general.avatar, 400)}
                alt={general.name}
                className="w-full aspect-square object-cover grayscale"
              />
            </div>
            <figcaption className="mt-2 text-center font-imfell italic text-[11px] text-[#1a1208]/60">
              {general.name}, known as &ldquo;{general.nickname}&rdquo;
            </figcaption>
          </figure>

          {/* Pull quote */}
          <div className="mt-6 border-l-4 border-[#1a1208] pl-4">
            <p className="font-playfair italic text-lg font-bold leading-snug text-[#1a1208]">
              &ldquo;Every problem will be solved — that&apos;s the promise behind the name.&rdquo;
            </p>
          </div>
        </div>

        {/* Bio text */}
        <div className="md:col-span-2">
          <h3 className="font-playfair font-black text-2xl md:text-3xl text-[#1a1208] mb-3 uppercase leading-tight">
            Who Is Resolved?
          </h3>
          <div className="w-12 h-0.5 bg-[#1a1208] mb-4" />

          <div className="font-imfell text-base md:text-lg leading-relaxed text-[#1a1208]/85 columns-1 sm:columns-2 gap-6 column-rule">
            <p className="drop-cap">
              Nguyen Huu Khoa, better known in developer circles as{" "}
              <strong>Resolved</strong>, is a {role.toLowerCase()} with a
              passion for crafting seamless digital experiences across the full
              spectrum of the web stack.
            </p>
            <p className="mt-4">
              Operating from the vibrant coastal city of{" "}
              <strong>Da Nang, Vietnam</strong>, Resolved brings a meticulous,
              problem-first mindset to every project — a philosophy encapsulated
              in the very alias he carries.
            </p>
            <p className="mt-4">
              His technical repertoire spans modern single-page application
              frameworks, cross-platform mobile development, robust backend
              services, and emerging AI/ML tooling — assembled into a coherent
              craft honed through years of hands-on engineering.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1a1208]/20 flex flex-wrap gap-6 font-imfell text-sm text-[#1a1208]/70">
            <div>
              <span className="uppercase tracking-widest text-[10px] block text-[#1a1208]/40 mb-0.5">
                Location
              </span>
              Da Nang, Vietnam
            </div>
            <div>
              <span className="uppercase tracking-widest text-[10px] block text-[#1a1208]/40 mb-0.5">
                Discipline
              </span>
              Full-Stack Development
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
