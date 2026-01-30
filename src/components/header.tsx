import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "TECHSTACK", href: "#techstack" },
    { name: "SNS", href: "#sns" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 w-full mix-blend-difference"
    >
      <nav className="mx-auto flex h-24 items-center justify-end px-6 md:px-12">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-goldman text-xs tracking-[0.3em] text-white hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-neutral z-[60] flex flex-col items-center justify-center gap-12"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdClose size={40} />
            </button>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="font-goldman text-4xl md:text-6xl text-white hover:text-accent transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
