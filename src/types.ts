export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  assetKey?: 'lookPreto' | 'vestidoRosa' | 'vestidoVinho' | 'vestidoAzul';
  colorTone: string;
  accentBadge: string;
  sizes?: string[];
}

export interface CartItem {
  id: string; // unique key combining productId and size
  productId: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatarColor?: string;
  location?: string;
}

export interface StoryChapter {
  id: string;
  chapterNumber: string;
  title: string;
  highlightText?: string;
  editorialQuote?: string;
  bodyParagraphs: string[];
  theme: 'neutral' | 'accent' | 'contrast';
  keyStat?: {
    value: string;
    label: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  description: string;
  assetKey: 'lookPreto' | 'vestidoRosa' | 'vestidoVinho' | 'vestidoAzul';
  aspectRatio: string;
  spanCol?: string;
  tag: string;
}
