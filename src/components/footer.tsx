import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { quote } = portfolioData.footer;

  return (
    <footer className="w-full py-12 bg-black/20 backdrop-blur-md border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="font-goldman text-lg md:text-2xl text-accent/80 hover:text-accent transition-colors duration-500 cursor-default">
          "{quote}"
        </p>
        <p className="mt-8 text-sm text-white/40 font-opensans">
          © {new Date().getFullYear()} {portfolioData.general.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
