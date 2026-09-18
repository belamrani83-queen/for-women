import React from 'react';
import { Truck, MessageCircle, ArrowUp } from 'lucide-react';
import { PRODUCT_BUNDLES } from '../data/moroccanData';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface StickyBottomBarProps {
  selectedBundleId: string;
  onScrollToOrder: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  selectedBundleId,
  onScrollToOrder,
}) => {
  const currentBundle = PRODUCT_BUNDLES.find((b) => b.id === selectedBundleId) || PRODUCT_BUNDLES[1];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `السلام عليكم، بغيت نطلب ${currentBundle.titleAr} (${currentBundle.priceMAD} درهم + توصيل مجاني والدفع عند الاستلام).`
    );
    window.open(`https://wa.me/212600000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 sm:hidden shadow-lg">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        
        {/* Product & Price info */}
        <div className="flex items-center gap-2.5">
          <img
            src={bottleImg}
            alt="Micro Ingredients Magnesium"
            referrerPolicy="no-referrer"
            className="w-10 h-10 object-cover rounded-xl border border-stone-200 bg-[#4a154b] p-0.5 shrink-0"
          />
          <div>
            <span className="text-[10px] text-stone-500 block leading-tight">السعر عند الاستلام</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black text-emerald-800">{currentBundle.priceMAD} DH</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-100 font-bold px-1 rounded">
                شحن مجاني
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm shrink-0"
            aria-label="طلب عبر الواتساب"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          <button
            onClick={onScrollToOrder}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-black py-2.5 px-4 rounded-xl shadow-md flex items-center gap-1.5"
          >
            <span>اطلبي الآن</span>
            <Truck className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </div>
  );
};
