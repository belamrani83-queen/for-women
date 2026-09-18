import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Moon, 
  Heart, 
  Zap, 
  Sparkles, 
  Brain, 
  Smile, 
  Flame, 
  ShieldCheck 
} from 'lucide-react';
import lifestyleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface BenefitsSectionProps {
  onScrollToOrder: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onScrollToOrder }) => {
  const problems = [
    'الأرق وصعوبة النعاس، كتبقاي كتقلبي فالفراش حتى لساعات متأخرة',
    'تشنجات مؤلمة فربلة الساق (les crampes) فاش كتكوني ناعسة',
    'العصبية، القلق السريع، والتفكير الزائد اللي مكيخليش دماغك يرتاح',
    'الخمول والعيى الصباحي، كتفيقي عيانة وخا نعستي 8 ساعات',
    'آلام الدورة الشهرية، انتفاخ البطن وتقلب المزاج الحاد (PCOS)',
    'خفقان القلب المفاجئ وتوتر عضلات الرقبة والكتفين',
  ];

  const benefits = [
    {
      icon: Moon,
      title: 'نوم عميق وراحة متواصلة',
      description: 'يحفز مستقبلات GABA في الدماغ ليهدئ الجهاز العصبي وينقلكِ إلى نوم طبيعي ومريح بدون أي منومات كيميائية.',
      color: 'emerald',
    },
    {
      icon: Zap,
      title: 'ارتخاء فوري للعضلات والمفاصل',
      description: 'أشكال المغنيسيوم المتقدمة (Glycinate & Malate) تتدفق للألياف العضلية لتنهي التشنجات وتيبس الظهر والساقين.',
      color: 'teal',
    },
    {
      icon: Brain,
      title: 'تهدئة هرمون التوتر (الكورتيزول)',
      description: 'بفضل خلاصة الأشواغاندا النقية، يستعيد جسمك توازنه النفسي وتقل نوبات القلق والتوتر اليومي وضغط العمل.',
      color: 'amber',
    },
    {
      icon: Heart,
      title: 'توازن الهرمونات ودعم تكيس المبايض',
      description: 'الإينوزيتول مع فيتامينات B المركبة ينظم حساسية الأنسولين ويقلل انتفاخ البطن والرغبة الشديدة في تناول السكريات.',
      color: 'purple',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Problem vs Solution Hook */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 inline-block mb-3">
            أكثر من 78% من النساء المغربيات يعانين من نقص المغنيسيوم دون علمهن!
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            واش كتعاني من هاد الأعراض المزعجة يومياً؟
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 font-medium">
            الجسم ديال المرأة كيفقد المغنيسيوم باستمرار بسبب التوتر، الدورة الشهرية، القهوة، وضغوطات الحياة اليومية.
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-16">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="bg-rose-50/50 hover:bg-rose-50 border border-rose-200/70 p-4 rounded-2xl flex items-start gap-3 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {problem}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: Visual Transformation Story */}
        <div className="bg-gradient-to-br from-stone-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-3">
                السر العلمي وراء فعالية التركيبة 20 في 1
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                علاش كبسولة وحدة كتجمع 20 مكون أحسن بـ 5 مرات من المغنيسيوم العادي؟
              </h3>
              <p className="text-sm text-stone-300 mt-4 leading-relaxed font-normal">
                في الصيدليات التقليدية، غالبية منتجات المغنيسيوم تحتوي على نوع واحد رخيص (مثل Oxide) الذي لا يمتص منه الجسم سوى 4% فقط، والأسوأ أنه يسبب اضطرابات في الأمعاء.
              </p>
              <p className="text-sm text-stone-300 mt-3 leading-relaxed font-normal">
                مركبنا الأمريكي المتطور يجمع بين <strong className="text-emerald-300">أرقى 5 أشكال نقية سريعة الامتصاص</strong>، معززة بفيتامين D3 و K2 لضمان امتصاصه داخل العظام والخلايا، إضافة إلى الأشواغاندا والإينوزيتول لراحة نفسية وتوازن هرموني متكامل.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <span className="text-xl font-black text-amber-300">800 mg</span>
                  <p className="text-[11px] text-stone-300 mt-0.5">مركب مغنيسيوم نقي عالي الحيوية</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <span className="text-xl font-black text-emerald-300">30 كبسولة</span>
                  <p className="text-[11px] text-stone-300 mt-0.5">تكفيك شهراً كاملاً من الراحة</p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onScrollToOrder}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base py-3 px-6 rounded-xl shadow-lg transition-all"
                >
                  اطلبي الآن مع التوصيل المجاني والدفع عند الاستلام
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <img
                  src={lifestyleImg}
                  alt="Micro Ingredients Magnesium Complex for Women 20-in-1 الأصلي"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain bg-[#4a154b] p-3 object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3 left-3 text-white">
                  <p className="text-xs font-bold leading-tight">
                    العلبة الأصلية المعتمدة بتصريح cGMP والمختبرة معملياً ✨
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#fbf9f5] border border-stone-200/90 rounded-2xl p-5 hover:border-emerald-400 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>نتائج موثقة خلال 14 يوماً</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
