import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Techstack from "./components/techstack";
import SNS from "./components/sns";
import Footer from "./components/footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <div className="bg-neutral min-h-screen text-white accent-accent selection:bg-accent selection:text-neutral relative">
        {/* Parallax Background for HERO ONLY */}
        <div className="absolute top-0 left-0 right-0 z-0 h-screen overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 w-full h-[120%] bg-cover bg-center grayscale opacity-10"
            style={{
              backgroundImage: 'url("/assets/herta.jpeg")',
              y,
              filter: "blur(2px) brightness(0.5)",
            }}
          />
        </div>

        <div className="relative z-10 w-full overflow-x-hidden">
          <Header />
          <main className="w-full flex flex-col">
            <Hero />
            <About />
            <Techstack />
            <SNS />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
