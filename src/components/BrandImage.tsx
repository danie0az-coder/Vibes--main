import { useState, useEffect } from 'react';
import { AssetKey, ASSET_DEFINITIONS, getCustomAsset, subscribeToAssets } from '../data/assets';
import { Camera, Sparkles, Upload } from 'lucide-react';

interface BrandImageProps {
  assetKey: AssetKey;
  alt: string;
  className?: string;
  aspectRatio?: string;
  onOpenUploader?: () => void;
  showEditorialCard?: boolean;
}

export function BrandImage({
  assetKey,
  alt,
  className = '',
  aspectRatio = 'aspect-[3/4]',
  onOpenUploader,
  showEditorialCard = true,
}: BrandImageProps) {
  const def = ASSET_DEFINITIONS[assetKey];
  const [customSrc, setCustomSrc] = useState<string | null>(() => getCustomAsset(assetKey));
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToAssets(() => {
      setCustomSrc(getCustomAsset(assetKey));
      setLoadError(false);
    });
    return unsubscribe;
  }, [assetKey]);

  // Determine source path
  const effectiveSrc = customSrc || def.defaultPath;

  // Background color accents matching the described garment tones in luxury purple/black aesthetic
  const getGarmentTone = () => {
    switch (assetKey) {
      case 'lookPreto':
        return 'from-[#1C0F28] via-[#100718] to-[#09040D] border-[#3E2558] text-[#FAF7FC]';
      case 'vestidoRosa':
        return 'from-[#3A1435] via-[#240A21] to-[#120510] border-[#5E2556] text-[#FDE8F5]';
      case 'vestidoVinho':
        return 'from-[#380E24] via-[#220716] to-[#11030B] border-[#591B3E] text-[#FDE8F0]';
      case 'vestidoAzul':
        return 'from-[#141838] via-[#0B0E24] to-[#050714] border-[#293268] text-[#E0E7FF]';
      case 'logo':
        return 'from-[#24133A] via-[#160B24] to-[#0A0512] border-[#D4AF37]/40 text-[#FAF7FC]';
      default:
        return 'from-[#1F1230] to-[#0D0714] border-[#3E2558] text-[#FAF7FC]';
    }
  };

  if (!loadError && effectiveSrc) {
    return (
      <div className={`relative overflow-hidden bg-[#1A1028] ${aspectRatio} ${className}`}>
        <img
          src={effectiveSrc}
          alt={alt}
          onError={() => setLoadError(true)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // When image file is awaiting upload or local placement in /public/images/
  return (
    <div
      className={`relative flex flex-col justify-between p-6 bg-gradient-to-b ${getGarmentTone()} border rounded-sm overflow-hidden ${aspectRatio} ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37]">
          Foto Real • Provador
        </span>
        <Camera className="w-4 h-4 text-[#D4AF37]" />
      </div>

      <div className="my-auto text-center space-y-3 px-2">
        <div className="w-12 h-12 mx-auto rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-xs bg-[#D4AF37]/10">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <div>
          <h4 className="font-editorial text-2xl tracking-wide font-normal">{def.label}</h4>
          <p className="text-xs text-[#C4B6D4] max-w-xs mx-auto mt-2 leading-relaxed font-light">
            {def.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 pt-4 border-t border-white/10">
        <div className="text-[11px] text-[#A89CB8] tracking-wider">
          Aguardando <code className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 font-mono text-[10px] text-[#F3D37A]">{def.defaultPath}</code>
        </div>
        {onOpenUploader && (
          <button
            type="button"
            onClick={onOpenUploader}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[#D4AF37]/60 text-[#F3D37A] rounded-full hover:bg-[#D4AF37]/15 transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            Carregar Foto
          </button>
        )}
      </div>
    </div>
  );
}
