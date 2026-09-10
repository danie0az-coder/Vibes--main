import { BrandImage } from './BrandImage';
import { Camera, Sparkles } from 'lucide-react';
import { BrandButterfly } from './BrandButterfly';

interface RealPhotosGalleryProps {
  onOpenUploader: () => void;
}

export function RealPhotosGallery({ onOpenUploader }: RealPhotosGalleryProps) {
  return (
    <section id="galeria" className="py-24 md:py-36 bg-[#0A090D] relative border-b border-[#2D1C3D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Registros Autênticos de Provador</span>
              </span>
              <BrandButterfly size="xs" variant="flutter" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
              Vibes Girl em movimento.
            </h2>
            <p className="text-sm sm:text-base text-[#C4B6D4] font-light max-w-xl leading-relaxed">
              Fotografias das peças no provador. Sem modelos de stock, sem filtros artificiais: a verdade de como cada modelagem realmente veste.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenUploader}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 bg-[#1C102C] border border-[#D4AF37]/50 text-xs uppercase tracking-widest font-semibold text-[#FAF7FC] hover:text-[#F3D37A] hover:bg-[#2A1642] hover:border-[#D4AF37] transition-all rounded-sm cursor-pointer shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Personalizar Provador
          </button>
        </div>

        {/* Fashion Feed Grid: Desktop 3 cols, Mobile 2 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Card 01 - Look Preto */}
          <div className="space-y-3">
            <div className="bg-[#150E22] p-2.5 sm:p-3.5 border border-[#3E2558] hover:border-[#D4AF37]/50 transition-colors shadow-lg rounded-sm group">
              <BrandImage
                assetKey="lookPreto"
                alt="Look Preto - Top brilhante e saia fluida em provador"
                aspectRatio="aspect-[3/4]"
                className="rounded-xs"
                onOpenUploader={onOpenUploader}
              />
            </div>
            <div className="px-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold block">
                01 • No Provador
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#FAF7FC] font-medium">
                Look Preto Glam
              </h3>
              <p className="text-xs text-[#C4B6D4] font-light mt-0.5 line-clamp-2">
                Top sem alças com brilho e saia fluida.
              </p>
            </div>
          </div>

          {/* Card 02 - Vestido Rosa */}
          <div className="space-y-3">
            <div className="bg-[#150E22] p-2.5 sm:p-3.5 border border-[#3E2558] hover:border-[#D4AF37]/50 transition-colors shadow-lg rounded-sm group">
              <BrandImage
                assetKey="vestidoRosa"
                alt="Vestido Rosa - Recortes frontais e amarrações em provador"
                aspectRatio="aspect-[3/4]"
                className="rounded-xs"
                onOpenUploader={onOpenUploader}
              />
            </div>
            <div className="px-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold block">
                02 • No Provador
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#FAF7FC] font-medium">
                Vestido Cut-Out Purple
              </h3>
              <p className="text-xs text-[#C4B6D4] font-light mt-0.5 line-clamp-2">
                Recortes frontais, amarrações e detalhe franzido.
              </p>
            </div>
          </div>

          {/* Card 03 - Vestido Vinho */}
          <div className="space-y-3">
            <div className="bg-[#150E22] p-2.5 sm:p-3.5 border border-[#3E2558] hover:border-[#D4AF37]/50 transition-colors shadow-lg rounded-sm group">
              <BrandImage
                assetKey="vestidoVinho"
                alt="Vestido Vinho - Decote ombro a ombro em provador"
                aspectRatio="aspect-[3/4]"
                className="rounded-xs"
                onOpenUploader={onOpenUploader}
              />
            </div>
            <div className="px-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold block">
                03 • No Provador
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#FAF7FC] font-medium">
                Vestido Elegance Ombro a Ombro
              </h3>
              <p className="text-xs text-[#C4B6D4] font-light mt-0.5 line-clamp-2">
                Modelagem ajustada e decote ombro a ombro.
              </p>
            </div>
          </div>

          {/* Card 04 - Vestido Azul (Spans visually in responsive rhythm) */}
          <div className="space-y-3">
            <div className="bg-[#150E22] p-2.5 sm:p-3.5 border border-[#3E2558] hover:border-[#D4AF37]/50 transition-colors shadow-lg rounded-sm group">
              <BrandImage
                assetKey="vestidoAzul"
                alt="Vestido Azul - Longo azul-marinho com torção frontal"
                aspectRatio="aspect-[3/4]"
                className="rounded-xs"
                onOpenUploader={onOpenUploader}
              />
            </div>
            <div className="px-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold block">
                04 • No Provador
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#FAF7FC] font-medium">
                Vestido Longo Imperial
              </h3>
              <p className="text-xs text-[#C4B6D4] font-light mt-0.5 line-clamp-2">
                Longo fluido, torcido frontal e fenda sofisticada.
              </p>
            </div>
          </div>

          {/* Editorial Block 01 - Fashion Manifesto */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#24133A] via-[#160B24] to-[#0A0512] text-[#FAF7FC] p-6 sm:p-8 rounded-sm flex flex-col justify-between border border-[#D4AF37]/40 shadow-xl">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                Estética & Autenticidade
              </span>
              <h4 className="font-editorial text-2xl sm:text-3xl font-light leading-snug">
                Moda que se vive no espelho do provador.
              </h4>
              <p className="text-xs sm:text-sm text-[#E9D5FF] font-light leading-relaxed max-w-lg">
                As fotos do provador transmitem a verdade da peça no corpo: o caimento natural, as texturas e a confiança que cada escolha desperta.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#2D1C3D] flex items-center justify-between text-xs text-[#F3D37A]">
              <span>@vibesgirl021</span>
              <span>Curadoria Vibes Girl</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
