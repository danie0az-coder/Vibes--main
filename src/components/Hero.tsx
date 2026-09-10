import { BRAND_INFO } from '../data/brandData';
import { BrandButterfly } from './BrandButterfly';
import { ArrowDownRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenUploader?: () => void;
}

export function Hero({ onOpenUploader }: HeroProps) {
  const heroImage = BRAND_INFO.heroCardImage;

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 md:pt-36 pb-16 md:pb-24 flex flex-col justify-center overflow-hidden border-b border-[#2D1C3D] bg-[#0A090D]"
    >
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#7E22CE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38254E_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Floating Strategic Butterfly Animations */}
      <div className="absolute top-32 left-12 hidden lg:block">
        <BrandButterfly size="sm" variant="float" />
      </div>
      <div className="absolute bottom-24 right-16 hidden lg:block">
        <BrandButterfly size="md" variant="flutter" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 text-left relative">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1028] border border-[#D4AF37]/50 text-[#FAF7FC] text-[11px] tracking-[0.25em] uppercase font-medium shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#F3D37A]">{BRAND_INFO.concept}</span>
              <BrandButterfly size="xs" variant="flutter" />
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF7FC] leading-[1.08]">
              {BRAND_INFO.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#C4B6D4] max-w-xl font-light leading-relaxed">
              {BRAND_INFO.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#historia"
                id="hero-btn-historia"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all duration-300 rounded-sm shadow-lg shadow-[#D4AF37]/20 group cursor-pointer"
              >
                <span>{BRAND_INFO.hero.ctaPrimary}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#colecao"
                id="hero-btn-colecao"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#180F25] text-[#FAF7FC] border border-[#7E22CE] hover:border-[#D4AF37] hover:text-[#F3D37A] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251439] transition-all duration-300 rounded-sm cursor-pointer shadow-xs"
              >
                {BRAND_INFO.hero.ctaSecondary}
              </a>
            </div>

            {/* Micro Metadata Strip */}
            <div className="pt-6 border-t border-[#2D1C3D] grid grid-cols-2 sm:grid-cols-3 gap-6 text-[#A89CB8]">
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                  Início
                </span>
                <span className="font-editorial text-xl sm:text-2xl text-[#FAF7FC] font-normal">
                  20.06.2024
                </span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                  Identidade
                </span>
                <span className="font-editorial text-xl sm:text-2xl text-[#FAF7FC] font-normal">
                  Vibes Girl
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                  Presença Oficial
                </span>
                <span className="text-xs uppercase tracking-wider text-[#F3D37A] font-medium block mt-1">
                  {BRAND_INFO.handle}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase (Requested Photo from user) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Strategic butterfly hovering on the frame */}
              <div className="absolute -top-6 -left-4 z-20">
                <BrandButterfly size="sm" variant="flutter" />
              </div>

              {/* Backing decorative frame with gold accent */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#D4AF37]/50 rounded-sm pointer-events-none hidden sm:block shadow-lg shadow-[#7E22CE]/10" />

              {/* Main Showcase Image Container */}
              <div className="relative bg-[#140E1E] p-3 border border-[#3E2558] shadow-2xl shadow-purple-950/50 rounded-sm overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xs bg-[#1A1028]">
                  <img
                    src={heroImage}
                    alt="Vibes Girl - Destaque Provador"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle golden corner vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A090D]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Editorial Caption Tag (Removed 'fotos reais' per request) */}
                <div className="mt-3 pt-2 border-t border-[#2D1C3D] flex items-center justify-between text-xs text-[#A89CB8]">
                  <span className="tracking-wider uppercase font-semibold text-[#D4AF37] text-[11px] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Destaque Provador</span>
                  </span>
                  <span className="italic font-editorial text-sm text-[#FAF7FC]">Vibes Girl Curadoria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
