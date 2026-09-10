import { BRAND_INFO } from '../data/brandData';
import { Sparkles } from 'lucide-react';
import { BrandButterfly } from './BrandButterfly';

export function OpeningStatement() {
  return (
    <section className="py-20 md:py-32 bg-[#0E0A16] relative overflow-hidden border-b border-[#2D1C3D]">
      {/* Soft purple glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#7E22CE]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating butterfly */}
      <div className="absolute top-8 right-16 hidden sm:block">
        <BrandButterfly size="sm" variant="flutter" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F142E] border border-[#D4AF37]/30 text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>Propósito</span>
          <BrandButterfly size="xs" variant="flutter" />
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
          {BRAND_INFO.openingStatement.title}
        </h2>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />

        <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E9D5FF] font-light leading-relaxed max-w-3xl mx-auto italic">
          “{BRAND_INFO.openingStatement.text}”
        </p>
      </div>
    </section>
  );
}
