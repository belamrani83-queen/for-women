import React from 'react';
import { Phone, MessageCircle, Sparkles, ClipboardList, Shield } from 'lucide-react';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface HeaderProps {
  onOpenAdmin: () => void;
  orderCount: number;
  onScrollToOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, orderCount, onScrollToOrder }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('السلام عليكم، بغيت نستفسر على مكمل المغنيسيوم كومبلكس 20 في 1 للنساء المعروض في المتجر.');
    window.open(`https://wa.me/212600000000?text=${text}`, '_blank');
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#4a154b] p-0.5 border border-emerald-200 shadow-md shadow-emerald-700/20 ring-2 ring-emerald-100 shrink-0">
            <img
              src={bottleImg}
              alt="Micro Ingredients Magnesium"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-sans">
                VITA<span className="text-emerald-700">MAROC</span>
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                المتجر الرسمي
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium hidden sm:block">
              مركب المغنيسيوم المتقدم للنساء 20 في 1 | شحن سريع لجميع المدن
            </p>
          </div>
        </div>

        {/* Quick Actions & Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Admin Dashboard Trigger */}
          <button
            id="admin-orders-button"
            onClick={onOpenAdmin}
            title="لوحة تحكم الطلبات لمالك المتجر"
            className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-emerald-700 bg-stone-100 hover:bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-stone-200 transition-colors"
          >
            <ClipboardList className="w-4 h-4 text-emerald-600" />
            <span className="hidden md:inline font-semibold">طلبات الزبناء</span>
            {orderCount > 0 && (
              <span className="bg-emerald-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          {/* Quick WhatsApp Support */}
          <button
            id="header-whatsapp-button"
            onClick={handleWhatsApp}
            className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors font-semibold"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>استشارة واتساب</span>
          </button>

          {/* Order CTA Button */}
          <button
            id="header-cta-button"
            onClick={onScrollToOrder}
            className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5 text-amber-300" />
            <span>اطلبي الآن (الدفع عند الاستلام)</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
