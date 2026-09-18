import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { LIVE_PURCHASE_NOTIFICATIONS } from '../data/moroccanData';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

export const LiveBuyerPopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show popup after 4 seconds initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Rotate every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_PURCHASE_NOTIFICATIONS.length);
        setVisible(true);
      }, 1500);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = LIVE_PURCHASE_NOTIFICATIONS[currentIndex];

  return (
    <aside aria-label="آخر عمليات الشراء" className="fixed bottom-20 sm:bottom-6 right-4 z-40 max-w-xs w-full bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-stone-200/90 text-right animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-xl overflow-hidden border border-emerald-300/80 bg-[#4a154b] shrink-0 p-0.5 shadow-xs">
          <img
            src={bottleImg}
            alt="Micro Ingredients Magnesium"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">
              {current.name} من {current.city} 🇲🇦
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="text-stone-400 hover:text-stone-600 p-0.5"
              aria-label="إغلاق الإشعار"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-emerald-800 font-semibold mt-0.5">
            اشترت للتو: {current.bundle}
          </p>
          <span className="text-[10px] text-stone-400 mt-1 block">
            {current.time} • تم تأكيد الشحن
          </span>
        </div>
      </div>
    </aside>
  );
};
