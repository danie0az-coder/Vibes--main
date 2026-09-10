import React, { useState, useEffect, useRef } from 'react';
import { ASSET_DEFINITIONS, AssetKey, getCustomAsset, setCustomAsset, removeCustomAsset, subscribeToAssets } from '../data/assets';
import { X, Upload, Check, Trash2, Camera, Sparkles, Image as ImageIcon, Info } from 'lucide-react';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAssetKey?: AssetKey | null;
}

export function PhotoUploaderModal({ isOpen, onClose, selectedAssetKey }: PhotoUploaderModalProps) {
  const [activeTab, setActiveTab] = useState<AssetKey>(selectedAssetKey || 'lookPreto');
  const [assetStatuses, setAssetStatuses] = useState<Record<AssetKey, boolean>>({
    logo: false,
    lookPreto: false,
    vestidoRosa: false,
    vestidoVinho: false,
    vestidoAzul: false,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedAssetKey) {
      setActiveTab(selectedAssetKey);
    }
  }, [selectedAssetKey]);

  const checkStatus = () => {
    const keys: AssetKey[] = ['logo', 'lookPreto', 'vestidoRosa', 'vestidoVinho', 'vestidoAzul'];
    const newStatuses = {} as Record<AssetKey, boolean>;
    keys.forEach((key) => {
      newStatuses[key] = Boolean(getCustomAsset(key));
    });
    setAssetStatuses(newStatuses);
  };

  useEffect(() => {
    checkStatus();
    const unsubscribe = subscribeToAssets(() => {
      checkStatus();
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const currentDef = ASSET_DEFINITIONS[activeTab];
  const customSrc = getCustomAsset(activeTab);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCustomAsset(activeTab, dataUrl);
      }
    };
    reader.readAsDataURL(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemove = () => {
    removeCustomAsset(activeTab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="bg-[#140E20] text-[#FAF7FC] w-full max-w-2xl rounded-sm shadow-2xl border border-[#3E2558] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2D1C3D] bg-[#1D122D]">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-editorial text-xl font-medium tracking-wide text-[#FAF7FC]">Fotos Reais do Provador & Logo</h3>
              <p className="text-xs text-[#C4B6D4] font-light">
                Gerencie as 4 fotografias reais das peças e a identidade visual da Vibes Girl
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#A89CB8] hover:text-[#FAF7FC] transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Tabs */}
        <div className="flex overflow-x-auto border-b border-[#2D1C3D] px-6 gap-2 bg-[#0E0818]">
          {(Object.keys(ASSET_DEFINITIONS) as AssetKey[]).map((key) => {
            const def = ASSET_DEFINITIONS[key];
            const isSet = assetStatuses[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-3 px-3 text-xs tracking-wider uppercase font-medium border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-[#D4AF37] text-[#F3D37A]'
                    : 'border-transparent text-[#A89CB8] hover:text-[#FAF7FC]'
                }`}
              >
                {isSet ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] inline-block" />
                )}
                {def.label.replace(' (Provador)', '')}
              </button>
            );
          })}
        </div>

        {/* Active Asset Details */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Preview Box */}
            <div className="w-full sm:w-56 h-72 rounded-sm border border-[#3E2558] overflow-hidden bg-[#1D122D] flex items-center justify-center relative shrink-0">
              {customSrc ? (
                <img
                  src={customSrc}
                  alt={currentDef.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-4 text-center space-y-2">
                  <ImageIcon className="w-8 h-8 mx-auto text-[#A89CB8]/60" />
                  <p className="text-xs text-[#C4B6D4]">Nenhuma foto carregada nesta sessão</p>
                  <span className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 bg-[#2A1642] text-[#F3D37A] rounded border border-[#3E2558]">
                    {currentDef.defaultPath}
                  </span>
                </div>
              )}
            </div>

            {/* Info and Actions */}
            <div className="flex-1 space-y-4">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                  Identificação Oficial
                </span>
                <h4 className="font-editorial text-2xl mt-1 text-[#FAF7FC]">{currentDef.label}</h4>
                <p className="text-sm text-[#C4B6D4] mt-2 font-light leading-relaxed">
                  {currentDef.description}
                </p>
              </div>

              <div className="p-4 rounded bg-[#1C112C] border border-[#2D1C3D] text-xs text-[#C4B6D4] space-y-2">
                <div className="flex items-center gap-1.5 font-medium text-[#FAF7FC]">
                  <Info className="w-4 h-4 text-[#D4AF37]" />
                  <span>Como disponibilizar o arquivo real:</span>
                </div>
                <p>
                  1. <strong>Envio direto agora:</strong> Clique no botão abaixo para selecionar a foto original salva no seu celular ou computador. Ela será exibida imediatamente em todo o site.
                </p>
                <p>
                  2. <strong>Ou salvando no projeto:</strong> Coloque o arquivo em <code className="bg-[#2B1744] px-1 py-0.5 rounded text-[11px] text-[#F3D37A] font-mono">{currentDef.defaultPath}</code>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="asset-file-input"
                />
                <label
                  htmlFor="asset-file-input"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#E6C265] via-[#D4AF37] to-[#B89327] text-[#0A090D] text-xs uppercase tracking-wider font-bold hover:brightness-110 transition-all rounded-sm cursor-pointer shadow-md shadow-[#D4AF37]/20"
                >
                  <Upload className="w-4 h-4" />
                  Carregar Foto Real
                </label>

                {customSrc && (
                  <button
                    type="button"
                    onClick={handleRemove}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-red-500/40 text-red-400 text-xs uppercase tracking-wider hover:bg-red-950/30 transition-colors rounded-sm cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remover
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#2D1C3D] bg-[#1A1028] flex justify-between items-center text-xs text-[#A89CB8]">
          <span>Fotos autênticas da marca Vibes Girl</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#231536] border border-[#3E2558] text-[#FAF7FC] uppercase text-xs tracking-wider font-semibold hover:border-[#D4AF37] hover:text-[#F3D37A] transition-colors cursor-pointer rounded-xs"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}
