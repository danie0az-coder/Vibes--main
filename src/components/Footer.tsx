import { BRAND_INFO, NAV_LINKS } from '../data/brandData';
import { Instagram, ArrowUp } from 'lucide-react';
import { BrandButterfly } from './BrandButterfly';

export function Footer() {
  const logoSrc = BRAND_INFO.logoUrl;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#09060E] text-[#FAF7FC] pt-20 pb-12 border-t border-[#2D1C3D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2D1C3D]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Vibes Girl Logo Oficial"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-brand font-bold text-2xl sm:text-3xl tracking-[0.18em] text-[#FAF7FC] block leading-none">
                    VIBES GIRL
                  </span>
                  <BrandButterfly size="xs" variant="flutter" />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold block mt-1">
                  {BRAND_INFO.handle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C4B6D4] font-light max-w-md leading-relaxed pt-2">
              Moda feminina com personalidade, estilo e uma história construída a partir de um sonho real.
            </p>

            <div className="pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FAF7FC] hover:text-[#D4AF37] transition-colors py-1"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>Instagram Oficial: {BRAND_INFO.handle}</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37] block">
              Navegação
            </span>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider text-[#C4B6D4] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37] block">
              Contato Oficial
            </span>
            <div className="space-y-3 text-xs text-[#C4B6D4] font-light">
              <p>
                Atendimento direto e personalizado via WhatsApp e Direct no Instagram oficial.
              </p>
              <div className="p-3 rounded bg-[#180E26] border border-[#3E2558] text-[11px] space-y-1">
                <span className="block font-medium text-[#FAF7FC]">Canal Direto:</span>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F3D37A] hover:underline block"
                >
                  instagram.com/vibesgirl021
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89CB8] font-light">
          <p>© {new Date().getFullYear()} Vibes Girl. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#C4B6D4] hover:text-[#D4AF37] transition-colors cursor-pointer text-[11px] uppercase tracking-wider"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
