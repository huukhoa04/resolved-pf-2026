import { motion } from "framer-motion";

export default function Header() {
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
      <nav className="mx-auto flex h-24 items-center justify-end px-12">
        <ul className="flex gap-12">
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
      </nav>
    </motion.header>
  );
}
