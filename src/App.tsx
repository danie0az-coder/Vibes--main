import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpeningStatement } from './components/OpeningStatement';
import { StoryChapters } from './components/StoryChapters';
import { BrandReveal } from './components/BrandReveal';
import { RealPhotosGallery } from './components/RealPhotosGallery';
import { ImpactTransition } from './components/ImpactTransition';
import { Collection } from './components/Collection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { FutureSection } from './components/FutureSection';
import { Footer } from './components/Footer';
import { PhotoUploaderModal } from './components/PhotoUploaderModal';
import { AssetKey } from './data/assets';

export default function App() {
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [selectedAssetKey, setSelectedAssetKey] = useState<AssetKey | null>(null);

  const handleOpenUploader = (key?: AssetKey) => {
    setSelectedAssetKey(key || 'lookPreto');
    setUploaderOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A090D] text-[#FAF7FC] flex flex-col selection:bg-[#7E22CE]/40 selection:text-[#F3D37A]">
        {/* Main Header with Logo, Navigation & Live Bag */}
        <Header onOpenUploader={() => handleOpenUploader('lookPreto')} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. HERO - With Provador Photo & Subtle Butterflies */}
          <Hero onOpenUploader={() => handleOpenUploader('lookPreto')} />

          {/* 2. FRASE DE ABERTURA */}
          <OpeningStatement />

          {/* 3. HISTÓRIA CAPÍTULOS 01 A 05 (Narrativa respeitosa sem identificação de pessoas) */}
          <StoryChapters />

          {/* 4. REVELAÇÃO DA MARCA VIBES GIRL */}
          <BrandReveal onOpenUploader={() => handleOpenUploader('vestidoRosa')} />

          {/* 5. REGISTROS DE PROVADOR */}
          <RealPhotosGallery onOpenUploader={() => handleOpenUploader('lookPreto')} />

          {/* 6. TRANSIÇÃO DE IMPACTO */}
          <ImpactTransition />

          {/* 7. COLEÇÃO COM AS 5 FOTOS REAIS & SACOLA DE COMPRAS */}
          <Collection onOpenUploader={() => handleOpenUploader('vestidoVinho')} />

          {/* 8. AVALIAÇÕES GOOGLE (Campo interativo + Integração com busca do Google) */}
          <GoogleReviewsSection />

          {/* 9. INSTAGRAM OFICIAL */}
          <InstagramSection />

          {/* 10. VISÃO DE FUTURO */}
          <FutureSection />
        </main>

        {/* FOOTER */}
        <Footer />

        {/* Sliding Shopping Bag Drawer with WhatsApp Checkout */}
        <CartDrawer />

        {/* Photo & Asset Manager Modal */}
        <PhotoUploaderModal
          isOpen={uploaderOpen}
          onClose={() => setUploaderOpen(false)}
          selectedAssetKey={selectedAssetKey}
        />
      </div>
    </CartProvider>
  );
}
