import { BRAND_INFO } from '../data/brandData';
import { MessageSquareQuote, Heart, Send } from 'lucide-react';

export function TestimonialsStructure() {
  return (
    <section className="py-24 md:py-32 bg-[#0A090D] border-b border-[#2D1C3D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{BRAND_INFO.testimonialsSection.badge}</span>
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
            {BRAND_INFO.testimonialsSection.title}
          </h2>

          <p className="text-sm sm:text-base text-[#C4B6D4] font-light leading-relaxed">
            {BRAND_INFO.testimonialsSection.subtitle}
          </p>
        </div>

        {/* Editorial Real Testimonials Prepared Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className="p-8 bg-[#150E22] border border-[#3A2454] rounded-sm flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl"
            >
              <div className="space-y-4">
                <MessageSquareQuote className="w-8 h-8 text-[#D4AF37]/60" />
                <p className="font-editorial text-lg text-[#FAF7FC] font-light italic leading-relaxed">
                  “Espaço reservado para o relato espontâneo e autêntico de uma cliente Vibes Girl.”
                </p>
              </div>

              <div className="pt-4 border-t border-[#2D1C3D] flex items-center justify-between text-xs text-[#A89CB8]">
                <span className="tracking-wider uppercase font-medium text-[#D4AF37]">Cliente Vibes Girl</span>
                <span className="text-[10px] font-mono text-[#A89CB8]/80">Relato Real</span>
              </div>
            </div>
          ))}
        </div>

        {/* Invitation to participate */}
        <div className="mt-12 p-6 bg-[#180F25] border border-[#D4AF37]/30 rounded-sm text-center max-w-xl mx-auto space-y-3 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FAF7FC] font-semibold">
            Você já veste essa história?
          </p>
          <p className="text-xs text-[#C4B6D4] font-light">
            Compartilhe seu feedback ou foto vestindo sua peça no nosso Instagram oficial para fazer parte desta galeria.
          </p>
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#F3D37A] font-semibold tracking-wider uppercase hover:underline pt-1"
          >
            <Send className="w-3 h-3" />
            <span>Enviar meu relato via direct</span>
          </a>
        </div>
      </div>
    </section>
  );
}
