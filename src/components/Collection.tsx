import { useState } from 'react';
import { PRODUCTS } from '../data/brandData';
import { ProductItem } from '../types';
import { useCart } from '../context/CartContext';
import { InquiryModal } from './InquiryModal';
import { BrandButterfly } from './BrandButterfly';
import { ArrowUpRight, Sparkles, ShoppingBag, Check } from 'lucide-react';

interface CollectionProps {
  onOpenUploader?: () => void;
}

export function Collection({ onOpenUploader }: CollectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({});
  const [addedAnimation, setAddedAnimation] = useState<{ [productId: string]: boolean }>({});
  const { addToCart } = useCart();

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuickAdd = (product: ProductItem) => {
    const size = selectedSizes[product.id] || 'M';
    addToCart(product, size, 1);

    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="colecao" className="py-24 md:py-36 bg-[#0A090D] relative border-b border-[#2D1C3D]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7E22CE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Strategic Butterfly */}
      <div className="absolute top-28 right-16 hidden lg:block">
        <BrandButterfly size="md" variant="float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Coleção Exclusiva</span>
            </span>
            <BrandButterfly size="xs" variant="flutter" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
            Escolhas que têm personalidade.
          </h2>
          <p className="font-editorial text-lg sm:text-2xl text-[#E9D5FF] font-light leading-relaxed italic">
            “Peças para quem não quer apenas vestir uma roupa. Quer vestir uma vibe.”
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-70 mt-4" />
        </div>

        {/* 5 Products Editorial Presentation: Grid adaptable for 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => {
            const currentSize = selectedSizes[product.id] || 'M';
            const isAdded = addedAnimation[product.id];

            return (
              <article
                key={product.id}
                id={`produto-${product.id}`}
                className="bg-[#140E20] border border-[#3A2454] rounded-sm p-4 flex flex-col justify-between group hover:border-[#D4AF37]/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-950/60"
              >
                {/* Product Visual */}
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xs bg-[#1F1430] aspect-[3/4]">
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} - Vibes Girl`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A090D]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold bg-[#1C102C]/90 backdrop-blur-xs text-[#F3D37A] border border-[#D4AF37]/40 rounded-full shadow-xs">
                      {product.accentBadge}
                    </span>

                    {/* Price Tag Overlay */}
                    <span className="absolute bottom-3 right-3 px-3 py-1 bg-[#120D1A]/90 backdrop-blur-xs text-[#FAF7FC] font-editorial text-lg rounded-xs border border-[#D4AF37]/40">
                      {formatCurrency(product.price)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                      <span>{product.category}</span>
                      <span className="text-[#A89CB8]">0{index + 1}</span>
                    </div>

                    <h3 className="font-editorial text-2xl text-[#FAF7FC] font-medium leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#C4B6D4] font-light leading-relaxed min-h-[44px]">
                      {product.description}
                    </p>
                  </div>

                  {/* Size Selector */}
                  <div className="pt-2 border-t border-[#2D1C3D] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#A89CB8] font-semibold">
                      Tamanho:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {(product.sizes || ['P', 'M', 'G']).map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => handleSelectSize(product.id, sz)}
                          className={`w-7 h-7 rounded-xs text-[11px] font-bold uppercase transition-all cursor-pointer flex items-center justify-center ${
                            currentSize === sz
                              ? 'bg-[#D4AF37] text-[#0A090D] shadow-sm'
                              : 'bg-[#1D132D] text-[#C4B6D4] border border-[#3E2558] hover:border-[#D4AF37]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions: Add to Bag + Quero Saber Mais */}
                <div className="pt-4 mt-4 border-t border-[#2D1C3D] space-y-2">
                  <button
                    type="button"
                    id={`btn-add-cart-${product.id}`}
                    onClick={() => handleQuickAdd(product)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1C112C] hover:bg-[#2A1642] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#FAF7FC] hover:text-[#F3D37A] text-[11px] uppercase tracking-[0.2em] font-bold rounded-xs cursor-pointer transition-all shadow-xs group/add"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Adicionado à Sacola!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37] group-hover/add:scale-110 transition-transform" />
                        <span>Adicionar à Sacola</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    id={`btn-saber-mais-${product.id}`}
                    onClick={() => setSelectedProduct(product)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-[11px] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all rounded-xs cursor-pointer shadow-md shadow-[#D4AF37]/20 group/btn"
                  >
                    <span>QUERO SABER MAIS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
