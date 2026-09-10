import { Calendar, ShoppingBag, Sparkles, ShieldAlert, HeartHandshake, ArrowRight } from 'lucide-react';
import { BrandButterfly } from './BrandButterfly';

export function StoryChapters() {
  return (
    <section id="historia" className="py-24 md:py-36 bg-[#0A090D] relative border-b border-[#2D1C3D]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#7E22CE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Strategic Butterfly */}
      <div className="absolute top-20 right-12 hidden md:block">
        <BrandButterfly size="sm" variant="flutter" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Lead */}
        <div className="max-w-2xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Trajetória Real</span>
            </span>
            <BrandButterfly size="xs" variant="flutter" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
            Do Sonho à Vibes Girl
          </h2>
          <p className="text-sm sm:text-base text-[#C4B6D4] font-light leading-relaxed">
            Uma história contada passo a passo. Sem atalhos, com coragem genuína e construída na vida real.
          </p>
        </div>

        {/* Narrative Chapters Container */}
        <div className="space-y-28 md:space-y-36">
          {/* ================= CHAPTER 01 ================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-[#150E22] border border-[#3A2454] p-8 md:p-10 rounded-sm space-y-6 relative overflow-hidden shadow-xl">
                <div className="absolute top-4 right-4 text-6xl font-editorial font-light text-[#D4AF37]/15 select-none">
                  01
                </div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>20 de Junho de 2024</span>
                </div>
                <div className="space-y-2">
                  <span className="font-editorial text-4xl sm:text-5xl font-light text-[#FAF7FC] block">
                    20.06.2024
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#A89CB8] font-medium block">
                    O início de tudo
                  </span>
                </div>
                <div className="pt-4 border-t border-[#2D1C3D] space-y-3 text-xs sm:text-sm text-[#C4B6D4] font-light leading-relaxed">
                  <p>
                    A história começou com a vontade autêntica de construir uma trajetória própria através do comércio de moda.
                  </p>
                  <p>
                    No dia 20 de junho de 2024, surgiu o primeiro lote de produtos: um desafio aceito com total dedicação e uma meta superada logo nos primeiros dias.
                  </p>
                </div>
                <div className="p-4 bg-[#211435] border-l-2 border-[#D4AF37] text-xs sm:text-sm italic font-editorial text-[#FAF7FC]">
                  “Foi pequeno para alguns. Mas foi gigante para quem estava começando.”
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                Capítulo 01 • O Primeiro Passo
              </span>
              <h3 className="font-editorial text-3xl sm:text-5xl text-[#FAF7FC] font-normal leading-tight">
                Tudo começou com uma vontade.
              </h3>
              <p className="text-base sm:text-lg text-[#C4B6D4] font-light leading-relaxed">
                Todo grande projeto começa antes de qualquer estrutura formal. Começa no desejo sincero de construir algo próprio, na disposição para agir no momento em que a primeira porta se abre.
              </p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#FAF7FC] font-semibold pt-2">
                <span>Determinação</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#F3D37A]">Primeira Meta</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#D4AF37]">Primeira Conquista</span>
              </div>
            </div>
          </article>

          {/* ================= CHAPTER 02 ================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 lg:pr-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                Capítulo 02 • O Espaço Físico
              </span>
              <h3 className="font-editorial text-3xl sm:text-5xl text-[#FAF7FC] font-normal leading-tight">
                De um pequeno expositor para um sonho maior.
              </h3>
              <p className="text-base sm:text-lg text-[#C4B6D4] font-light leading-relaxed">
                Em um espaço acolhedor e compartilhado, surgiu a oportunidade de instalar um pequeno expositor para dar os primeiros passos presenciais.
              </p>
              <p className="text-sm sm:text-base text-[#C4B6D4] font-light leading-relaxed">
                Ali, as primeiras peças foram expostas com carinho e cuidado diário. A resposta positiva de quem passava trouxe a confirmação diária de que a energia daquele projeto tinha fôlego para se expandir.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#1C112C] border border-[#D4AF37]/40 rounded-full text-xs text-[#FAF7FC] uppercase tracking-wider font-medium">
                  <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pequeno começo → Grande sonho</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#160E22] text-[#FAF7FC] p-8 md:p-10 rounded-sm space-y-6 relative overflow-hidden border border-[#3E2558] shadow-xl">
                <div className="absolute top-4 right-4 text-6xl font-editorial font-light text-[#D4AF37]/15 select-none">
                  02
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                  O Ponto Físico Inicial
                </span>
                <h4 className="font-editorial text-2xl sm:text-3xl font-light text-[#FAF7FC]">
                  O Pequeno Expositor
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#C4B6D4] font-light border-y border-[#2D1C3D] py-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Primeiro contato presencial com clientes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Seleção cuidadosa de peças iniciais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Validação e crescimento diário</span>
                  </li>
                </ul>
                <p className="text-xs italic text-[#E9D5FF] font-editorial leading-relaxed">
                  “De um pequeno expositor nascia a clareza de que aquele era só o início de algo muito maior.”
                </p>
              </div>
            </div>
          </article>

          {/* ================= CHAPTER 03 ================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-gradient-to-b from-[#1E1130] to-[#120B1E] border border-[#D4AF37]/50 p-8 md:p-12 rounded-sm text-center space-y-6 shadow-2xl">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                  O Ponto de Inflexão
                </span>
                <div className="font-editorial text-5xl sm:text-7xl font-light text-[#F3D37A] tracking-tight">
                  R$ 200
                </div>
                <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto opacity-70" />
                <p className="font-editorial text-lg sm:text-xl text-[#FAF7FC] italic max-w-sm mx-auto leading-relaxed">
                  “Foi com apenas R$200 que a seleção autoral ganhou vida.”
                </p>
                <span className="inline-block text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-[#2A1640] px-3 py-1 rounded-full border border-[#D4AF37]/40">
                  Investimento com Autenticidade
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                Capítulo 03 • A Identidade de Estilo
              </span>
              <h3 className="font-editorial text-3xl sm:text-5xl text-[#FAF7FC] font-normal leading-tight">
                O estilo que eu queria vestir.
              </h3>
              <div className="p-5 bg-[#170F24] border-l-2 border-[#D4AF37] rounded-xs shadow-md">
                <blockquote className="font-editorial text-xl sm:text-2xl text-[#F3D37A] font-light leading-snug">
                  “E se eu trouxesse para a cidade o estilo que eu queria vestir?”
                </blockquote>
              </div>
              <p className="text-base sm:text-lg text-[#C4B6D4] font-light leading-relaxed">
                Decidiu-se investir em roupas que representassem autenticidade e estilo próprio: peças jovens, marcantes e desejadas, que fugiam do óbvio e não eram facilmente encontradas por valores acessíveis.
              </p>
              <p className="text-sm sm:text-base text-[#C4B6D4] font-light leading-relaxed">
                Nascia ali uma curadoria focada em valorizar a autoestima de mulheres reais, com looks que têm presença e personalidade.
              </p>
            </div>
          </article>

          {/* ================= CHAPTER 04 ================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 lg:pr-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Capítulo 04 • Resiliência Real
              </span>
              <h3 className="font-editorial text-3xl sm:text-5xl text-[#FAF7FC] font-normal leading-tight">
                Nem todo sonho cresce sem tropeçar.
              </h3>
              <p className="text-base sm:text-lg text-[#C4B6D4] font-light leading-relaxed">
                A trajetória de quem constrói também enfrenta momentos difíceis. Ao longo da caminhada, prejuízos financeiros e contratempos testaram a firmeza do negócio.
              </p>
              <p className="text-sm sm:text-base text-[#C4B6D4] font-light leading-relaxed">
                Momentos desafiadores que poderiam ter feito o sonho parar, mas que foram transformados em resiliência e foco inabalável para blindar o propósito da loja.
              </p>
              <div className="p-6 bg-[#180F25] border border-[#3A2454] rounded-sm">
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] block font-semibold mb-2">
                  Mensagem Visual
                </span>
                <p className="font-editorial text-2xl sm:text-3xl text-[#FAF7FC] font-medium leading-snug">
                  “Construir também é aprender a continuar.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 md:p-10 bg-[#160E22] border border-[#2D1C3D] rounded-sm text-left space-y-5 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-[#7E22CE]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-2xl font-light text-[#FAF7FC]">
                  Maturidade & Superação
                </h4>
                <p className="text-xs sm:text-sm text-[#C4B6D4] font-light leading-relaxed">
                  Uma marca autêntica carrega o peso e o orgulho das suas batalhas. Cada obstáculo enfrentado fortaleceu a certeza de que desistir nunca foi uma opção.
                </p>
              </div>
            </div>
          </article>

          {/* ================= CHAPTER 05 ================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-12">
              <div className="bg-gradient-to-br from-[#211235] via-[#140C20] to-[#0A0710] text-[#FAF7FC] p-8 sm:p-12 md:p-16 rounded-sm border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
                <div className="absolute top-6 right-6 hidden sm:block">
                  <BrandButterfly size="md" variant="flutter" />
                </div>

                <div className="max-w-3xl space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Capítulo 05 • Quem Acredita Junto</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-5xl font-light text-[#FAF7FC] leading-tight">
                    Alguns sonhos também são construídos por quem acredita neles.
                  </h3>

                  <p className="text-base sm:text-lg text-[#C4B6D4] font-light leading-relaxed">
                    Nenhum projeto grandioso se sustenta inteiramente sozinho. O incentivo contínuo, a lealdade e o apoio sincero nos momentos cruciais foram o alicerce para manter a chama acesa e seguir em frente.
                  </p>

                  {/* Universal Pillars (Not identifying specific individuals) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#2D1C3D]">
                    <div className="text-center p-3 rounded bg-[#2B1742]/50 border border-[#D4AF37]/20">
                      <span className="block font-editorial text-2xl text-[#FAF7FC]">Fé</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">A Direção</span>
                    </div>
                    <div className="text-center p-3 rounded bg-[#2B1742]/50 border border-[#D4AF37]/20">
                      <span className="block font-editorial text-2xl text-[#FAF7FC]">Companheirismo</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">Apoio & Incentivo</span>
                    </div>
                    <div className="text-center p-3 rounded bg-[#2B1742]/50 border border-[#D4AF37]/20">
                      <span className="block font-editorial text-2xl text-[#FAF7FC]">Família</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">Raiz & Acolhimento</span>
                    </div>
                    <div className="text-center p-3 rounded bg-[#2B1742]/50 border border-[#D4AF37]/20">
                      <span className="block font-editorial text-2xl text-[#FAF7FC]">Clientes</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">A Razão de Tudo</span>
                    </div>
                  </div>

                  {/* Central Quote Highlight */}
                  <div className="pt-4">
                    <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F3D37A] font-light leading-relaxed italic">
                      “Com fé, apoio verdadeiro, dedicação diária e a confiança de cada cliente, a Vibes Girl segue transformando sonho em realidade.”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
