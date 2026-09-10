import { useState } from 'react';
import { ProductItem } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { useCart } from '../context/CartContext';
import { X, Instagram, ShoppingBag, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenUploader?: () => void;
}

export function InquiryModal({ product, onClose }: InquiryModalProps) {
  const { addToCart, openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('M');

  if (!product) return null;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no *${product.name}* (Tamanho: ${selectedSize}) da Vibes Girl. Gostaria de saber mais sobre disponibilidade e formas de pagamento!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="bg-[#140E20] text-[#FAF7FC] w-full max-w-lg rounded-sm shadow-2xl border border-[#3E2558] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D1C3D] bg-[#1D122D]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF7FC]">
              Detalhes da Peça
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#A89CB8] hover:text-[#FAF7FC] transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="flex gap-4 items-start">
            {/* Image */}
            <div className="w-28 h-36 rounded-xs border border-[#3A2454] overflow-hidden shrink-0 bg-[#1D132D]">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 flex-1">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                {product.category}
              </span>
              <h4 className="font-editorial text-2xl text-[#FAF7FC] leading-tight">
                {product.name}
              </h4>
              <div className="font-editorial text-2xl text-[#F3D37A]">
                {formatCurrency(product.price)}
              </div>
              <p className="text-xs text-[#C4B6D4] font-light leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-2 pt-2 border-t border-[#2D1C3D]">
            <label className="block text-xs uppercase tracking-wider text-[#A89CB8] font-semibold">
              Selecione o Tamanho:
            </label>
            <div className="flex items-center gap-2">
              {(product.sizes || ['P', 'M', 'G']).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-[#D4AF37] text-[#0A090D] shadow-sm shadow-[#D4AF37]/30'
                      : 'bg-[#1C112C] text-[#FAF7FC] border border-[#3E2558] hover:border-[#D4AF37]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 bg-[#1C112C] border border-[#2D1C3D] rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F3D37A] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Finalize na Sacola ou WhatsApp</span>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all rounded-xs shadow-md shadow-[#D4AF37]/20 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Adicionar à Sacola</span>
              </button>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366]/20 border border-[#25D366]/60 text-emerald-300 hover:bg-[#25D366]/30 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Conversar direto no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#2D1C3D] bg-[#1A1028] flex justify-between items-center text-xs text-[#A89CB8]">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F3D37A] inline-flex items-center gap-1.5 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>@vibesgirl021</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#231536] border border-[#3E2558] text-xs uppercase tracking-wider text-[#FAF7FC] hover:border-[#D4AF37] hover:text-[#F3D37A] transition-colors cursor-pointer rounded-xs"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
