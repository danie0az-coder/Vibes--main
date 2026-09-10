export type AssetKey = 'lookPreto' | 'vestidoRosa' | 'vestidoVinho' | 'vestidoAzul' | 'logo';

export interface AssetConfig {
  key: AssetKey;
  label: string;
  defaultPath: string;
  description: string;
}

export const ASSET_DEFINITIONS: Record<AssetKey, AssetConfig> = {
  logo: {
    key: 'logo',
    label: 'Logo Oficial Vibes Girl',
    defaultPath: '/images/logo.png',
    description: 'Logo original da marca Vibes Girl.',
  },
  lookPreto: {
    key: 'lookPreto',
    label: 'Look Preto (Provador)',
    defaultPath: '/images/look-preto.jpg',
    description: 'Top preto sem alças com detalhes brilhantes e saia preta curta fluida.',
  },
  vestidoRosa: {
    key: 'vestidoRosa',
    label: 'Vestido Rosa (Provador)',
    defaultPath: '/images/vestido-rosa.jpg',
    description: 'Vestido curto rosa com recortes frontais, amarrações e detalhe franzido.',
  },
  vestidoVinho: {
    key: 'vestidoVinho',
    label: 'Vestido Vinho (Provador)',
    defaultPath: '/images/vestido-vinho.jpg',
    description: 'Vestido curto vinho/bordô com modelagem ajustada e decote ombro a ombro.',
  },
  vestidoAzul: {
    key: 'vestidoAzul',
    label: 'Vestido Azul (Provador)',
    defaultPath: '/images/vestido-azul.jpg',
    description: 'Vestido longo azul-marinho com detalhe torcido na região frontal e recorte central.',
  },
};

// Simple subscriber listener for dynamic in-browser image replacement
type AssetListener = () => void;
const listeners = new Set<AssetListener>();

export function subscribeToAssets(callback: AssetListener): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function notifyAssetChange() {
  listeners.forEach((cb) => cb());
}

export function getCustomAsset(key: AssetKey): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(`vibesgirl_asset_${key}`);
}

export function setCustomAsset(key: AssetKey, dataUrl: string) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`vibesgirl_asset_${key}`, dataUrl);
    notifyAssetChange();
  } catch (err) {
    console.error('Could not save asset to storage', err);
  }
}

export function removeCustomAsset(key: AssetKey) {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(`vibesgirl_asset_${key}`);
  notifyAssetChange();
}
