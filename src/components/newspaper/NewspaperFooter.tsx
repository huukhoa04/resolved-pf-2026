import { portfolioData } from "../../data/portfolio";

export default function NewspaperFooter() {
  const { quote } = portfolioData.footer;
  const { name } = portfolioData.general;

  return (
    <footer className="mt-12 pt-6 border-t-4 border-double border-[#1a1208]">
      <div className="text-center">
        <p className="font-playfair italic text-base md:text-lg text-[#1a1208]/70">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-4 justify-center">
          <div className="flex-1 h-px bg-[#1a1208]/20" />
          <p className="font-imfell text-xs text-[#1a1208]/40 whitespace-nowrap">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
            &mdash; The Portfolio Gazette
          </p>
          <div className="flex-1 h-px bg-[#1a1208]/20" />
        </div>
      </div>
    </footer>
  );
}
