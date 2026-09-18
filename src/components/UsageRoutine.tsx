import React from 'react';
import { Clock, Calendar, CheckCircle2, Droplets, Sparkles, Heart } from 'lucide-react';

export const UsageRoutine: React.FC = () => {
  const steps = [
    {
      period: 'الأسبوع الأول (اليوم 1 إلى 7)',
      focus: 'الاسترخاء والنوم الهادئ',
      description: 'تبدأ مستقبلات الدماغ في الهدوء بفضل جليسينات المغنيسيوم والأشواغاندا. ستشعرين برغبة طبيعية في النوم العميق والاستيقاظ برأس خفيف ومزاج صافٍ.',
    },
    {
      period: 'الأسبوع الثاني (اليوم 8 إلى 14)',
      focus: 'راحة العضلات والمفاصل',
      description: 'اختفاء شبه كامل لتشنجات الساقين (les crampes) ليلاً، واسترخاء عضلات الرقبة والكتفين التي تشتد بسبب ضغوطات العمل واليوميات.',
    },
    {
      period: 'الشهر الأول فما فوق (اليوم 30+)',
      focus: 'التوازن الهرموني والطاقة المتجددة',
      description: 'بفضل الإينوزيتول وفيتامينات B و D3/K2، ينتظم التبويض وتقل آلام الدورة الشهرية واحتباس السوائل المزعج مع نضارة واضحة في البشرة والنشاط.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#fbf9f5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-300 inline-block mb-3">
            طريقة الاستعمال والنتائج
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            كيف تدمجين هذا المكمل في روتينك اليومي؟
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium">
            خطوات سهلة ومريحة لضمان أفضل نتيجة ممكنة لجسمك وصحتك النفسية.
          </p>
        </div>

        {/* How to Take Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="flex flex-col items-center p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-1">الجرعة اليومية</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                تناولي <strong className="text-emerald-800">كبسولة واحدة (1) يومياً</strong> فقط مع كأس ماء كبير (تكفيكِ العلبة شهراً كاملاً).
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-1">التوقيت المثالي</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                بعد وجبة العشاء بحوالي 30 دقيقة للحصول على نوم فائق، أو بعد الغداء للحد من التوتر.
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-1">شرب الماء والانتظام</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                شرب 1.5 إلى 2 لتر من الماء يومياً يساعد المعادن على تغذية الألياف العضلية والخلايا.
              </p>
            </div>

          </div>
        </div>

        {/* Timeline of Results */}
        <h3 className="text-xl font-extrabold text-slate-900 text-center mb-6">
          الجدول الزمني للتحول الصحي الذي ستشعرين به:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs relative overflow-hidden"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white text-xs font-black flex items-center justify-center mb-3">
                {idx + 1}
              </div>
              <span className="text-[11px] font-bold text-emerald-700 block mb-1">
                {step.period}
              </span>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">
                {step.focus}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
