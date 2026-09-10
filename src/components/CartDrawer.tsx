import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BrandButterfly } from './BrandButterfly';
import { X, Plus, Minus, Trash2, ShoppingBag, Send, AlertCircle, CheckCircle2, Copy } from 'lucide-react';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    customerAddress,
    setCustomerAddress,
    customerNotes,
    setCustomerNotes,
  } = useCart();

  const [nameError, setNameError] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  // Format currency in Brazilian Real
  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Generate WhatsApp Message
  const generateMessage = () => {
    const itemsList = items
      .map(
        (item) =>
          `• ${item.quantity}x *${item.name}* (Tamanho: ${item.size}) — ${formatCurrency(
            item.price * item.quantity
          )}`
      )
      .join('\n');

    return `✨ *NOVO PEDIDO — VIBES GIRL* ✨
═══════════════════════
👤 *Cliente:* ${customerName.trim()}
📱 *WhatsApp:* ${customerPhone.trim() || 'A combinar'}
📍 *Endereço/Cidade:* ${customerAddress.trim() || 'A combinar'}
${customerNotes.trim() ? `📝 *Observações:* ${customerNotes.trim()}\n` : ''}
🛍️ *ITENS SELECIONADOS:*
${itemsList}

💰 *VALOR TOTAL:* ${formatCurrency(subtotal)}
═══════════════════════
_Olá! Montei meu pedido no site da Vibes Girl e gostaria de confirmar a disponibilidade e acertar o pagamento!_`;
  };

  const handleCheckout = () => {
    if (!customerName.trim()) {
      setNameError(true);
      const input = document.getElementById('cart-customer-name');
      if (input) input.focus();
      return;
    }
    setNameError(false);

    const message = generateMessage();
    const encoded = encodeURIComponent(message);
    
    // Official WhatsApp link for Vibes Girl (defaults to Instagram bio WhatsApp or direct inquiry)
    const whatsappNumber = '5521999999999'; // Can be customized
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (!customerName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    const message = generateMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#120D1A] border-l border-[#3E2558] text-[#FAF7FC] flex flex-col shadow-2xl relative z-10">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#2D1C3D] bg-[#181024] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                <BrandButterfly size="xs" className="absolute -top-3 -right-3" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#FAF7FC] leading-none">
                  Sua Sacola
                </h3>
                <span className="text-[11px] uppercase tracking-widest text-[#C4B6D4] font-medium block mt-1">
                  {totalItems === 0
                    ? 'Sacola vazia'
                    : totalItems === 1
                    ? '1 peça selecionada'
                    : `${totalItems} peças selecionadas`}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-full text-[#C4B6D4] hover:text-[#FAF7FC] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1F142E] border border-[#3E2558] flex items-center justify-center text-[#D4AF37]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-editorial text-2xl text-[#FAF7FC]">Sua sacola está vazia</h4>
                  <p className="text-xs text-[#A89CB8] max-w-xs mx-auto leading-relaxed">
                    Explore a curadoria da Vibes Girl e escolha as peças que conversam com o seu estilo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-[0.2em] font-bold rounded-xs cursor-pointer hover:brightness-110 transition-all shadow-md shadow-[#D4AF37]/20"
                >
                  Ver Coleção
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3 divide-y divide-[#2D1C3D]">
                  {items.map((item) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex gap-4 items-start">
                      {/* Thumbnail */}
                      <div className="w-20 h-24 rounded-xs overflow-hidden bg-[#1A1126] border border-[#3E2558] shrink-0 relative">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-editorial text-lg text-[#FAF7FC] font-medium truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#A89CB8] hover:text-red-400 transition-colors p-1 cursor-pointer"
                            title="Remover item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-[#C4B6D4]">
                          <span className="px-2 py-0.5 rounded-full bg-[#231536] border border-[#3E2558] text-[#D4AF37] font-semibold">
                            Tam: {item.size}
                          </span>
                          <span className="text-xs font-medium text-[#FAF7FC]">
                            {formatCurrency(item.price)}
                          </span>
                        </div>

                        {/* Quantity and Line Total */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[#3E2558] rounded-xs bg-[#1A1024]">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2.5 py-1 text-[#C4B6D4] hover:text-[#FAF7FC] hover:bg-white/5 cursor-pointer"
                              title="Diminuir quantidade"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-semibold text-[#FAF7FC]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2.5 py-1 text-[#C4B6D4] hover:text-[#FAF7FC] hover:bg-white/5 cursor-pointer"
                              title="Aumentar quantidade"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-sm font-editorial text-[#F3D37A] font-medium">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Identification Section (Required by user) */}
                <div className="p-4 rounded-sm bg-[#1A1026] border border-[#3E2558] space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                      <span>Identificação do Cliente</span>
                    </span>
                    <span className="text-[10px] text-[#A89CB8] uppercase tracking-wider">
                      Para o fornecedor
                    </span>
                  </div>

                  {/* Nome do Cliente (Obrigatório) */}
                  <div>
                    <label
                      htmlFor="cart-customer-name"
                      className="block text-xs text-[#FAF7FC] font-medium mb-1"
                    >
                      Seu Nome Completo <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="cart-customer-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (e.target.value.trim()) setNameError(false);
                      }}
                      placeholder="Ex: Amanda Silva"
                      className={`w-full px-3 py-2 bg-[#120D1A] border rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none transition-colors ${
                        nameError
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#3E2558] focus:border-[#D4AF37]'
                      }`}
                    />
                    {nameError && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-light">
                        <AlertCircle className="w-3 h-3" />
                        Por favor, informe seu nome para o fornecedor identificar o pedido.
                      </span>
                    )}
                  </div>

                  {/* Telefone / WhatsApp (Opcional) */}
                  <div>
                    <label
                      htmlFor="cart-customer-phone"
                      className="block text-xs text-[#FAF7FC] font-medium mb-1"
                    >
                      Seu WhatsApp / Telefone <span className="text-[#A89CB8] font-light">(opcional)</span>
                    </label>
                    <input
                      id="cart-customer-phone"
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Ex: (21) 99999-9999"
                      className="w-full px-3 py-2 bg-[#120D1A] border border-[#3E2558] rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Endereço / Cidade de Entrega (Opcional) */}
                  <div>
                    <label
                      htmlFor="cart-customer-address"
                      className="block text-xs text-[#FAF7FC] font-medium mb-1"
                    >
                      Endereço ou Cidade de Entrega <span className="text-[#A89CB8] font-light">(opcional)</span>
                    </label>
                    <input
                      id="cart-customer-address"
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Ex: Rio de Janeiro / Bairro Centro"
                      className="w-full px-3 py-2 bg-[#120D1A] border border-[#3E2558] rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Observações (Opcional) */}
                  <div>
                    <label
                      htmlFor="cart-customer-notes"
                      className="block text-xs text-[#FAF7FC] font-medium mb-1"
                    >
                      Observações <span className="text-[#A89CB8] font-light">(opcional)</span>
                    </label>
                    <input
                      id="cart-customer-notes"
                      type="text"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="Ex: Preferência para entrega no fim de semana"
                      className="w-full px-3 py-2 bg-[#120D1A] border border-[#3E2558] rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="p-4 rounded-sm bg-[#160E24] border border-[#2D1C3D] space-y-2 text-xs">
                  <div className="flex justify-between text-[#C4B6D4]">
                    <span>Subtotal ({totalItems} itens)</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#C4B6D4]">
                    <span>Atendimento & Envio</span>
                    <span className="text-[#F3D37A]">A combinar no WhatsApp</span>
                  </div>
                  <div className="pt-2 border-t border-[#2D1C3D] flex justify-between items-center text-sm font-semibold">
                    <span className="text-[#FAF7FC]">Total Estimado</span>
                    <span className="font-editorial text-xl text-[#F3D37A]">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="px-6 py-4 border-t border-[#2D1C3D] bg-[#181024] space-y-2.5">
              {/* Primary: Finalizar via WhatsApp */}
              <button
                type="button"
                id="btn-finalizar-whatsapp"
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xs cursor-pointer hover:brightness-110 transition-all shadow-lg shadow-emerald-950/40 group"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>Finalizar Pedido via WhatsApp</span>
              </button>

              {/* Secondary actions: Copiar Mensagem & Limpar */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-[#3E2558] hover:border-[#D4AF37] text-[11px] uppercase tracking-wider text-[#C4B6D4] hover:text-[#FAF7FC] rounded-xs transition-colors cursor-pointer bg-[#140E20]"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Copiar Pedido</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={clearCart}
                  className="py-2 px-3 border border-[#3E2558] hover:border-red-500/50 text-[11px] uppercase tracking-wider text-[#A89CB8] hover:text-red-400 rounded-xs transition-colors cursor-pointer bg-[#140E20]"
                >
                  Esvaziar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
