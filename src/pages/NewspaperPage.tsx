import NewspaperHero from "../components/newspaper/NewspaperHero";
import NewspaperAbout from "../components/newspaper/NewspaperAbout";
import NewspaperTechstack from "../components/newspaper/NewspaperTechstack";
import NewspaperSNS from "../components/newspaper/NewspaperSNS";
import NewspaperFooter from "../components/newspaper/NewspaperFooter";

export default function NewspaperPage() {
  return (
    <div className="newspaper-texture min-h-screen">
      <div className="max-w-5xl mx-auto px-4 xs:px-6 md:px-12 py-8 md:py-14">
        <NewspaperHero />

        {/* Nav strip */}
        <nav className="flex flex-wrap gap-x-6 gap-y-1 my-5 font-imfell text-[11px] uppercase tracking-[0.25em] text-[#1a1208]/50 border-b border-[#1a1208]/20 pb-3">
          <a href="#about" className="hover:text-[#1a1208] transition-colors">Profile</a>
          <a href="#techstack" className="hover:text-[#1a1208] transition-colors">Technical Dossier</a>
          <a href="#sns" className="hover:text-[#1a1208] transition-colors">Correspondence</a>
          <span className="ml-auto">
            <a href="/" className="hover:text-[#1a1208] transition-colors">← Back to Modern Edition</a>
          </span>
        </nav>

        <div className="flex flex-col gap-12 md:gap-16">
          <NewspaperAbout />

          {/* Ornamental divider */}
          <div className="flex items-center gap-3 text-[#1a1208]/30 select-none">
            <div className="flex-1 h-px bg-[#1a1208]/20" />
            <span className="font-playfair text-lg">✦</span>
            <div className="flex-1 h-px bg-[#1a1208]/20" />
            <span className="font-playfair text-lg">✦</span>
            <div className="flex-1 h-px bg-[#1a1208]/20" />
          </div>

          <NewspaperTechstack />

          <div className="flex items-center gap-3 text-[#1a1208]/30 select-none">
            <div className="flex-1 h-px bg-[#1a1208]/20" />
            <span className="font-playfair text-lg">✦</span>
            <div className="flex-1 h-px bg-[#1a1208]/20" />
            <span className="font-playfair text-lg">✦</span>
            <div className="flex-1 h-px bg-[#1a1208]/20" />
          </div>

          <NewspaperSNS />
        </div>

        <NewspaperFooter />
      </div>
    </div>
  );
}
