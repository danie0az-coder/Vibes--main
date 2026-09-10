import { useState, useEffect } from 'react';
import { NAV_LINKS, BRAND_INFO } from '../data/brandData';
import { useCart } from '../context/CartContext';
import { BrandButterfly } from './BrandButterfly';
import { Menu, X, Instagram, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenUploader?: () => void;
}

export function Header({ onOpenUploader }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  const logoUrl = BRAND_INFO.logoUrl;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A090D]/95 backdrop-blur-md py-3 border-b border-[#2D1C3D] shadow-xl shadow-black/50'
          : 'bg-[#0A090D]/85 backdrop-blur-xs py-4 border-b border-[#2D1C3D]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#inicio"
          id="brand-logo-link"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          {/* Official Logo Image before the name */}
          <div className="relative shrink-0 flex items-center">
            <img
              src={logoUrl}
              alt="Vibes Girl Logo Oficial"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
            />
          </div>

          <div className="relative">
            <div className="flex items-center gap-1.5">
              <span className="font-brand font-bold text-xl sm:text-2xl tracking-[0.18em] text-[#FAF7FC] block leading-none group-hover:text-[#F3D37A] transition-colors">
                VIBES GIRL
              </span>
              <BrandButterfly size="xs" variant="flutter" className="hidden sm:inline-block" />
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium block mt-1">
              {BRAND_INFO.handle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-7" aria-label="Navegação Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.href.replace('#', '')}`}
              className="text-xs uppercase tracking-[0.2em] text-[#C4B6D4] hover:text-[#F3D37A] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Cart + Instagram + Mobile Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Shopping Bag Button with Live Counter Badge */}
          <button
            type="button"
            id="header-cart-button"
            onClick={openCart}
            title="Abrir sacola de compras"
            className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1028] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#FAF7FC] hover:text-[#F3D37A] hover:bg-[#25153A] transition-all cursor-pointer shadow-md group"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold tracking-wider hidden sm:inline">
              Sacola
            </span>
            {totalItems > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] font-bold text-[10px] shadow-sm">
                {totalItems}
              </span>
            )}
          </button>

          {/* Instagram Link */}
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Oficial Vibes Girl"
            className="p-2 text-[#FAF7FC] hover:text-[#D4AF37] transition-colors rounded-full hover:bg-white/10"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-2 text-[#FAF7FC] hover:text-[#D4AF37] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120D1A] border-b border-[#2D1C3D] px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4" aria-label="Menu Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[#FAF7FC] hover:text-[#F3D37A] py-2 border-b border-[#2D1C3D]/60"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-widest font-bold rounded-xs cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Sacola ({totalItems} itens)</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
