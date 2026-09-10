import { BRAND_INFO } from '../data/brandData';

export function ImpactTransition() {
  return (
    <section className="py-32 md:py-48 bg-[#0C0814] relative overflow-hidden border-b border-[#2D1C3D]">
      {/* Ambient purple illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7E22CE]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Delicate center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 relative z-10">
        <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold block">
          Continuidade & Sonho
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#FAF7FC] tracking-tight leading-tight max-w-3xl mx-auto">
          {BRAND_INFO.impactTransition.title}
        </h2>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-70 my-6" />

        <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#F3D37A] font-normal italic tracking-wide">
          “{BRAND_INFO.impactTransition.subtitle}”
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-t from-[#D4AF37]/60 to-transparent" />
    </section>
  );
}
