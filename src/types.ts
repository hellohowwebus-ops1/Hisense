export interface Product {
  id: string;
  articleNo: string;
  name: string;
  category: string;
  subcategory: string;
  shortDesc: string;
  fullDesc: string;
  specifications: { label: string; value: string }[];
  features: string[];
  certifications: string[];
  model3dKey?: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t';
  inStock: boolean;
  leadTime: string;
  image: string;
  downloadPath?: string;
  length?: string;
  badge?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  highlightText: string;
  description: string;
  categoryTag: string;
  modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t';
  specsPreview: { label: string; val: string }[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  backgroundImage: string;
  badge: string;
  videoTitle: string;
  shortLabel: string;
  statsTitle: string;
  statsSubtitle: string;
}

export interface RfqItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface BrandPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  author: string;
  tags: string[];
  content?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  author: string;
  authorRole?: string;
  tags: string[];
  featured?: boolean;
  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

