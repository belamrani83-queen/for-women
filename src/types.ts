export interface ProductBundle {
  id: string;
  titleAr: string;
  subtitleAr: string;
  capsuleCount: number;
  monthsSupply: number;
  priceMAD: number;
  originalPriceMAD: number;
  savingsMAD: number;
  badge?: string;
  popular?: boolean;
  freeGifts: string[];
}

export interface MoroccanOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
  bundleId: string;
  bundleTitle: string;
  totalPriceMAD: number;
  createdAt: string;
  status: 'new' | 'confirmed' | 'shipping' | 'delivered' | 'cancelled';
}

export interface CustomerReview {
  id: string;
  authorName: string;
  city: string;
  rating: number;
  verifiedPurchase: boolean;
  date: string;
  benefitCategory: 'sleep' | 'anxiety' | 'cramps' | 'hormones';
  title: string;
  comment: string;
  helpfulCount: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'usage' | 'safety' | 'delivery' | 'results';
}
