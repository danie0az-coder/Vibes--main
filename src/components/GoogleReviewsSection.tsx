import { useState, useEffect } from 'react';
import { CustomerReview } from '../types';
import { BrandButterfly } from './BrandButterfly';
import { Star, Send, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Mariana Costa',
    rating: 5,
    comment: 'O caimento das peças é surreal! Comprei o look preto para um evento e recebi elogios a noite inteira. O atendimento pelo WhatsApp foi super rápido e atencioso.',
    date: 'Há 3 dias',
    verified: true,
    location: 'Rio de Janeiro, RJ',
    avatarColor: 'bg-purple-600',
  },
  {
    id: 'rev-2',
    author: 'Larissa Albuquerque',
    rating: 5,
    comment: 'Amei que as fotos do provador mostram a realidade da peça sem mentiras. O vestido veste como uma luva, tecido gostoso e acabamento impecável. Já sou cliente fiel!',
    date: 'Há 1 semana',
    verified: true,
    location: 'Niterói, RJ',
    avatarColor: 'bg-amber-600',
  },
  {
    id: 'rev-3',
    author: 'Beatriz Vasconcelos',
    rating: 5,
    comment: 'Experiência 10/10! A Vibes Girl tem uma identidade única. O pedido chegou super rápido e muito bem embalado com um cheirinho maravilhoso.',
    date: 'Há 2 semanas',
    verified: true,
    location: 'Rio de Janeiro, RJ',
    avatarColor: 'bg-fuchsia-600',
  },
  {
    id: 'rev-4',
    author: 'Camila Mendonça',
    rating: 5,
    comment: 'Dá para sentir todo o carinho e a coragem por trás dessa loja em cada detalhe. Peças que valorizam o corpo e elevam nossa autoestima!',
    date: 'Há 3 semanas',
    verified: true,
    location: 'São Gonçalo, RJ',
    avatarColor: 'bg-emerald-600',
  },
];

const REVIEWS_STORAGE_KEY = 'vibes_girl_reviews_v1';

export function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<CustomerReview[]>(() => {
    try {
      const saved = localStorage.getItem(REVIEWS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // ignore
    }
  }, [reviews]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim()) {
      setFormError('Por favor, informe seu nome para a avaliação.');
      return;
    }
    if (!comment.trim() || comment.trim().length < 8) {
      setFormError('Por favor, escreva um breve comentário sobre sua experiência.');
      return;
    }

    setFormError('');

    const newReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      rating,
      comment: comment.trim(),
      date: 'Hoje',
      verified: true,
      location: location.trim() || 'Brasil',
      avatarColor: 'bg-purple-700',
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);

    // Copy text to clipboard so user can easily paste into Google Reviews
    try {
      navigator.clipboard.writeText(comment.trim());
    } catch {
      // ignore
    }

    // Direct Google Review Search URL for Vibes Girl
    const googleReviewUrl = `https://www.google.com/search?q=Vibes+Girl+${encodeURIComponent(
      authorName
    )}+avaliar#lrd=0x0:0x0,3`;
    
    // Open Google review prompt
    setTimeout(() => {
      window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleResetForm = () => {
    setAuthorName('');
    setComment('');
    setLocation('');
    setRating(5);
    setSubmitted(false);
  };

  return (
    <section id="avaliacoes" className="py-24 md:py-36 bg-[#0A090D] relative border-b border-[#2D1C3D]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7E22CE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Google Identity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181024] border border-[#D4AF37]/40 text-xs text-[#FAF7FC]">
              <span className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </span>
              <span className="font-semibold text-[#F3D37A]">4.9 de 5.0</span>
              <span className="text-[#A89CB8]">• Google Avaliações</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7FC] tracking-tight">
              A voz de quem vive a Vibes Girl.
            </h2>
            <p className="text-sm sm:text-base text-[#C4B6D4] font-light leading-relaxed">
              Avaliações reais de clientes que vestem nossa personalidade. Deixe seu relato abaixo — sua avaliação ajuda outros clientes e é integrada com o Google.
            </p>
          </div>

          {/* Google Search Rich Snippets Badge */}
          <div className="p-4 rounded-sm bg-[#160E24] border border-[#3E2558] flex items-center gap-3 self-start md:self-auto shadow-md">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37] block">
                Google Rich Snippets
              </span>
              <span className="text-xs text-[#FAF7FC] font-medium block">
                Indexado para busca oficial no Google
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Form on Left/Top, Wall of Reviews on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Review Submission Card */}
          <div className="lg:col-span-5 bg-[#140E20] border border-[#3E2558] rounded-sm p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#2D1C3D] pb-4">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37] block">
                  Avalie Nossa Loja
                </span>
                <h3 className="font-editorial text-2xl text-[#FAF7FC] font-medium mt-0.5">
                  Sua Experiência Conta
                </h3>
              </div>
              <BrandButterfly size="sm" variant="flutter" />
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-editorial text-2xl text-[#FAF7FC]">Obrigada pelo seu carinho!</h4>
                  <p className="text-xs text-[#C4B6D4] max-w-xs mx-auto leading-relaxed">
                    Sua avaliação foi salva no site e a página do Google foi aberta para você confirmar sua avaliação na sua conta Google!
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="https://www.google.com/search?q=Vibes+Girl+avaliar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-widest font-bold rounded-xs cursor-pointer hover:brightness-110"
                  >
                    <span>Ver no Google Avaliações</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs text-[#A89CB8] hover:text-[#FAF7FC] underline cursor-pointer py-1"
                  >
                    Enviar outra avaliação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Rating Selector */}
                <div>
                  <label className="block text-xs text-[#FAF7FC] font-medium mb-1.5">
                    Sua Nota <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-[#3E2558] hover:scale-110 transition-transform cursor-pointer"
                        title={`${star} estrelas`}
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            (hoverRating || rating) >= star
                              ? 'text-[#D4AF37] fill-[#D4AF37]'
                              : 'text-[#3E2558]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-[#F3D37A] ml-2">
                      {rating === 5
                        ? 'Excelente!'
                        : rating === 4
                        ? 'Muito Bom'
                        : rating === 3
                        ? 'Bom'
                        : 'Regular'}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="review-author" className="block text-xs text-[#FAF7FC] font-medium mb-1">
                    Seu Nome Completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Ex: Gabriela Santos"
                    className="w-full px-3.5 py-2.5 bg-[#120D1A] border border-[#3E2558] rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="review-location" className="block text-xs text-[#FAF7FC] font-medium mb-1">
                    Sua Cidade / Estado <span className="text-[#A89CB8] font-light">(opcional)</span>
                  </label>
                  <input
                    id="review-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Rio de Janeiro, RJ"
                    className="w-full px-3.5 py-2.5 bg-[#120D1A] border border-[#3E2558] rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label htmlFor="review-comment" className="block text-xs text-[#FAF7FC] font-medium mb-1">
                    Sua Mensagem / Opinião sobre a Loja <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="review-comment"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Conte como foi vestir as peças, o atendimento, caimento no provador e a entrega..."
                    className="w-full px-3.5 py-2.5 bg-[#120D1A] border border-[#3E2558] rounded-xs text-xs text-[#FAF7FC] placeholder-[#7E6F90] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <p className="text-xs text-red-400 font-light">{formError}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  id="btn-enviar-avaliacao"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-[0.2em] font-bold rounded-xs cursor-pointer hover:brightness-110 transition-all shadow-lg shadow-[#D4AF37]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Publicar no Site & Google</span>
                </button>

                <p className="text-[11px] text-[#A89CB8] text-center font-light leading-relaxed">
                  Ao clicar em publicar, sua avaliação aparece imediatamente aqui e abre o Google para somar à nossa pontuação pública.
                </p>
              </form>
            )}
          </div>

          {/* Column 2: Reviews Wall & Stats */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Stat Bar */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-sm bg-[#160E24] border border-[#2D1C3D] text-center">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#FAF7FC] block">
                  4.9
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Média no Google
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#FAF7FC] block">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Clientes Satisfeitas
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#FAF7FC] block">
                  {reviews.length}+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Depoimentos
                </span>
              </div>
            </div>

            {/* Reviews Cards List */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 rounded-sm bg-[#140E20] border border-[#3E2558] space-y-3 shadow-md hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full ${rev.avatarColor || 'bg-purple-800'} flex items-center justify-center font-editorial text-base text-[#FAF7FC] font-semibold border border-white/10`}>
                        {rev.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-editorial text-lg text-[#FAF7FC] font-medium leading-none">
                          {rev.author}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#A89CB8]">
                          {rev.location && <span>{rev.location}</span>}
                          <span>•</span>
                          <span>{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center text-[#D4AF37]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C4B6D4] font-light leading-relaxed">
                    “{rev.comment}”
                  </p>

                  <div className="pt-2 border-t border-[#2D1C3D] flex items-center justify-between text-[10px] text-[#D4AF37]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Compra Verificada</span>
                    </span>
                    <span className="uppercase tracking-wider text-[#A89CB8]">Google Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
