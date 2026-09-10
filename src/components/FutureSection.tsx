import { BRAND_INFO } from '../data/brandData';
import { Sparkles, ArrowRight } from 'lucide-react';

export function FutureSection() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-[#180C26] via-[#10071A] to-[#0A0510] text-[#FAF7FC] relative overflow-hidden border-b border-[#2D1C3D]">
      {/* Soft ambient purple & gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7E22CE]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24133A] text-xs text-[#D4AF37] uppercase tracking-widest font-semibold border border-[#D4AF37]/30 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Visão de Futuro</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-6xl font-light text-[#FAF7FC] tracking-tight">
          {BRAND_INFO.futureSection.title}
        </h2>

        <p className="font-editorial text-xl sm:text-2xl text-[#E9D5FF] font-light leading-relaxed max-w-2xl mx-auto">
          {BRAND_INFO.futureSection.description}
        </p>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-70 my-6" />

        <div className="space-y-3">
          <p className="font-editorial text-2xl sm:text-3xl text-[#F3D37A] font-normal italic">
            “{BRAND_INFO.futureSection.phrase1}”
          </p>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            {BRAND_INFO.futureSection.phrase2}
          </p>
        </div>

        <div className="pt-6">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all rounded-xs shadow-lg shadow-[#D4AF37]/25 cursor-pointer"
          >
            <span>Acompanhar Esta Jornada</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
