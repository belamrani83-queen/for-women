import React from 'react';
import { Sparkles, Shield, Check, FlaskConical, Award } from 'lucide-react';
import { INGREDIENTS_LIST } from '../data/moroccanData';
import ingredientsImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

export const IngredientsBreakdown: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 inline-block mb-3">
            شفافية كاملة ونقاء 100%
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ماذا يوجد داخل كل كبسولة نباتية؟
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium">
            20 مكوناً علاجياً تم اختيارها بعناية طبية فائقة لتعمل بتناغم وتآزر مثالي داخل جسم المرأة.
          </p>
        </div>

        {/* Visual & Formula Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-white p-2">
              <img
                src={ingredientsImg}
                alt="Micro Ingredients Magnesium Complex for Women 20-in-1 مع شهادات الجودة"
                referrerPolicy="no-referrer"
                className="w-full aspect-square object-contain bg-[#4a154b] p-3 rounded-2xl"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm mb-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>معايير التصنيع الأمريكية المعتمدة (cGMP)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  خالٍ تماماً من المواد الحافظة، السكر، الغلوتين، الصويا، مشتقات الحليب، وأي مواد مسببة للحساسية.
                </p>

                {/* Quality Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="bg-stone-50 p-2 rounded-xl border border-stone-200">
                    <span className="text-xs font-black text-slate-900 block">Non-GMO</span>
                    <span className="text-[10px] text-stone-500">غير معدل وراثياً</span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-xl border border-stone-200">
                    <span className="text-xs font-black text-slate-900 block">100% حلال</span>
                    <span className="text-[10px] text-stone-500">كبسولات نباتية</span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-xl border border-stone-200">
                    <span className="text-xs font-black text-slate-900 block">Lab Tested</span>
                    <span className="text-[10px] text-stone-500">فحص مخبري ثلاثي</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List of 6 Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {INGREDIENTS_LIST.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-emerald-500 transition-all text-right"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item.name}</span>
                  </h4>
                </div>

                <span className="inline-block text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold mb-2" dir="ltr">
                  {item.subtext}
                </span>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
