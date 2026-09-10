import { BRAND_INFO } from '../data/brandData';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { BrandButterfly } from './BrandButterfly';

export function InstagramSection() {
  return (
    <section id="instagram" className="py-24 md:py-32 bg-[#0D0A14] border-b border-[#2D1C3D] relative overflow-hidden">
      {/* Subtle purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#7E22CE]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Floating butterfly */}
      <div className="absolute top-12 right-20 hidden md:block">
        <BrandButterfly size="sm" variant="flutter" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1028] border border-[#D4AF37]/40 text-xs text-[#FAF7FC] uppercase tracking-widest font-medium shadow-xs">
          <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[#F3D37A]">{BRAND_INFO.handle}</span>
          <BrandButterfly size="xs" variant="flutter" />
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
          {BRAND_INFO.instagramSection.title}
        </h2>

        <p className="font-editorial text-lg sm:text-2xl text-[#C4B6D4] font-light leading-relaxed max-w-2xl mx-auto">
          {BRAND_INFO.instagramSection.description}
        </p>

        <div className="pt-4">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-btn-seguir"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all duration-300 rounded-sm shadow-lg shadow-[#D4AF37]/20 cursor-pointer group"
          >
            <Instagram className="w-4 h-4" />
            <span>{BRAND_INFO.instagramSection.cta}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="pt-8 text-xs text-[#A89CB8] font-light tracking-wide uppercase">
          Acompanhe os lançamentos diários, provadores ao vivo e novidades em primeira mão
        </div>
      </div>
    </section>
  );
}
