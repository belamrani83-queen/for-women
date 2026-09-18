import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface ComparisonTableProps {
  onScrollToOrder: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onScrollToOrder }) => {
  const comparisonData = [
    {
      feature: 'عدد المكونات الفعالة',
      regular: 'مكون واحد فقط (غالباً أكسيد المغنيسيوم)',
      ourProduct: '20 مكون علاجي متكامل في كبسولة واحدة',
      highlight: true,
    },
    {
      feature: 'معدل الامتصاص واللطافة على المعدة',
      regular: 'امتصاص ضعيف (4-10%) ويسبب إسهال وغازات',
      ourProduct: 'امتصاص خلوي فائق (Glycinate & Malate) ولطيف جداً',
      highlight: true,
    },
    {
      feature: 'جودة الكبسولات ومدة الاستعمال',
      regular: 'كبسولات تجارية بمواد كيميائية وأكسيد رخيص',
      ourProduct: '30 كبسولة نباتية نقية 100% (تكفيكِ شهراً كاملاً)',
      highlight: true,
    },
    {
      feature: 'علاج التوتر والقلق العصبي',
      regular: 'غير مدعم بأي أعشاب مهدئة',
      ourProduct: 'مدعم بخلاصة الأشواغاندا النقية لخفض الكورتيزول',
      highlight: false,
    },
    {
      feature: 'تنظيم الهرمونات وتكيس المبايض',
      regular: 'لا يحتوي على أي دعم هرموني للنساء',
      ourProduct: 'مدعم بـ Myo-Inositol وفيتامينات B النشطة',
      highlight: false,
    },
    {
      feature: 'توجيه الكالسيوم للعظام والأسنان',
      regular: 'بدون فيتامين D3 أو K2',
      ourProduct: 'يحتوي على D3 + K2 (MK-7) لحماية الشرايين والقلب',
      highlight: false,
    },
    {
      feature: 'التكلفة الحقيقية شهرياً',
      regular: '120 إلى 180 درهم شهرياً (تتكرر كل شهر)',
      ourProduct: 'أقل من 69 درهم شهرياً بفضل العبوة الاقتصادية الكبرى',
      highlight: true,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 inline-block mb-3">
            مقارنة صريحة وشفافة
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            لماذا يفضل أطباء التغذية مركبنا 20 في 1 على المغنيسيوم التقليدي؟
          </h2>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-stone-200 shadow-md">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="p-4 sm:p-5 bg-stone-50 text-xs sm:text-sm font-extrabold text-slate-800 w-1/3">
                  وجه المقارنة
                </th>
                <th className="p-4 sm:p-5 bg-stone-100 text-xs sm:text-sm font-bold text-stone-500 w-1/3">
                  مغنيسيوم الصيدليات التقليدي
                </th>
                <th className="p-4 sm:p-5 bg-emerald-900 text-white text-xs sm:text-sm font-black w-1/3 relative">
                  <div className="flex items-center gap-2">
                    <img
                      src={bottleImg}
                      alt="Micro Ingredients Magnesium Complex"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-cover rounded-lg border border-emerald-500/50 bg-[#4a154b] p-0.5 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1 text-amber-300">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs sm:text-sm">مركب المغنيسيوم 20 في 1</span>
                      </div>
                      <span className="text-[10px] text-emerald-200 font-normal block mt-0.5">
                        Micro Ingredients® الأصلي
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900 bg-stone-50/70">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500 bg-white">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.regular}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-extrabold text-emerald-950 bg-emerald-50/60">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                      <span className={row.highlight ? 'text-emerald-900 font-black' : ''}>
                        {row.ourProduct}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action button below table */}
        <div className="text-center mt-8">
          <button
            onClick={onScrollToOrder}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base py-3 px-8 rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>اختاري صحتكِ واطلبي الباقة الموفرة الآن</span>
            <span>←</span>
          </button>
        </div>

      </div>
    </section>
  );
};
