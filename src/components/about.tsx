import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { getGravatarUrl } from "../libs/gravatar";

export default function About() {
  const { general, description } = portfolioData;

  return (
    <section
      id="about"
      className="min-h-[100svh] flex flex-col justify-center py-20 md:py-40 px-4 xs:px-6 md:px-24 w-full bg-white text-neutral relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-10 right-10 text-[7rem] xs:text-[10rem] md:text-[15rem] font-goldman opacity-[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start w-full relative z-10">
        {/* Title */}
        <div className="lg:col-span-4 self-stretch flex flex-col justify-between">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl xs:text-6xl md:text-8xl lg:text-[10rem] font-goldman leading-none tracking-tighter mb-12"
          >
            WHO <br /> AM I?
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <img
              src={getGravatarUrl(general.avatar, 400)}
              alt={general.name}
              className="w-full aspect-square grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent z-[-1]" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 flex flex-col justify-center h-full pt-4 md:pt-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h3 className="text-2xl xs:text-3xl md:text-4xl lg:text-6xl font-goldman mb-8 text-secondary uppercase">
              {general.name} / {general.nickname}
            </h3>

            <div className="space-y-8 md:space-y-12 text-lg xs:text-xl md:text-2xl lg:text-4xl font-opensans leading-tight text-neutral/80">
              {description.map((item, index) => (
                <p key={index} className="relative group">
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-4 bg-accent/20 -z-1"
                  />
                </p>
              ))}
            </div>

            <div className="mt-12 md:mt-20 pt-12 md:pt-20 border-t border-neutral/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-goldman">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral/40 mb-2">
                  Location
                </p>
                <p className="text-xl xs:text-2xl">Da Nang, Vietnam</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral/40 mb-2">
                  Current Job
                </p>
                <p className="text-xl xs:text-2xl">Luviha Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
