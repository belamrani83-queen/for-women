import React from 'react';
import { Truck, ShieldCheck, Clock, Award } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 text-white text-xs md:text-sm py-2 px-3 shadow-sm border-b border-emerald-800/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center justify-center bg-emerald-500/20 border border-emerald-400/40 rounded-full px-2 py-0.5 text-emerald-300 text-[11px]">
            🇲🇦 المغرب كامل
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>التوصيل <strong className="text-amber-300">بالمجان</strong> وسريع لجميع مدن المغرب</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-emerald-100/90 text-xs">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>الدفع نقداً عند الاستلام (COD)</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>توصيل خلال 24 - 48 ساعة</span>
          </span>
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>منتج أمريكي أصلي 100%</span>
          </span>
        </div>
      </div>
    </header>
  );
};
