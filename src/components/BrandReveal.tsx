import { BRAND_INFO } from '../data/brandData';
import { BrandImage } from './BrandImage';
import { BrandButterfly } from './BrandButterfly';
import { ArrowDown } from 'lucide-react';

interface BrandRevealProps {
  onOpenUploader?: () => void;
}

export function BrandReveal({ onOpenUploader }: BrandRevealProps) {
  return (
    <section className="py-24 md:py-36 bg-[#0D0A14] border-y border-[#2D1C3D] relative overflow-hidden">
      {/* Ambient background illumination */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7E22CE]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating butterfly */}
      <div className="absolute top-12 left-10 hidden md:block">
        <BrandButterfly size="sm" variant="flutter" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Transformation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                {BRAND_INFO.brandReveal.lead}
              </span>
              <BrandButterfly size="xs" variant="flutter" />
            </div>

            <div className="flex items-center gap-4">
              <h2 className="font-brand text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.14em] text-[#FAF7FC] leading-none">
                {BRAND_INFO.brandReveal.title}
              </h2>
              <BrandButterfly size="lg" variant="flutter" className="hidden sm:inline-block" />
            </div>

            <p className="text-base sm:text-xl text-[#C4B6D4] font-light leading-relaxed max-w-lg">
              {BRAND_INFO.brandReveal.subtitle}
            </p>

            {/* Visual Transformation Pathway */}
            <div className="p-6 bg-[#160E24] border border-[#3A2454] rounded-sm max-w-md space-y-4 shadow-xl">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37] block">
                A Linha da Transformação
              </span>

              <div className="flex flex-col items-center gap-2 py-2">
                <div className="w-full py-3 px-4 rounded bg-[#241538] text-center text-xs uppercase tracking-[0.2em] font-medium text-[#C4B6D4] border border-[#3E265C]">
                  {BRAND_INFO.brandReveal.transformation.from}
                </div>

                <div className="w-8 h-8 rounded-full bg-[#1C0F2E] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-sm">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="w-full py-3.5 px-4 rounded bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-center text-sm uppercase tracking-[0.25em] font-black text-[#0A090D] shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2">
                  <span>{BRAND_INFO.brandReveal.transformation.to}</span>
                </div>
              </div>

              <div className="text-[11px] text-center text-[#A89CB8] italic font-editorial">
                Coragem • Personalidade • Desafios • Aprendizado • Vontade de Crescer
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photo of Garment in Fitting Room */}
          <div className="lg:col-span-6">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#D4AF37]/30 rounded-sm pointer-events-none hidden sm:block" />
              <div className="relative bg-[#150E22] p-4 border border-[#3E2558] shadow-2xl rounded-sm">
                <BrandImage
                  assetKey="vestidoRosa"
                  alt="Vestido Cut-Out Purple - Provador Vibes Girl"
                  aspectRatio="aspect-[3/4]"
                  className="rounded-xs"
                  onOpenUploader={onOpenUploader}
                />
                <div className="mt-3 pt-3 border-t border-[#2D1C3D] flex items-center justify-between text-xs text-[#A89CB8]">
                  <span className="tracking-wider uppercase font-medium text-[#D4AF37] text-[11px]">
                    Identidade & Silhueta
                  </span>
                  <span className="italic font-editorial text-sm text-[#FAF7FC]">Vestido Cut-Out • Provador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
