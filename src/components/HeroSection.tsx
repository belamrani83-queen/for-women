import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft,
  Flame,
  Moon,
  HeartPulse,
  Activity,
  Zap
} from 'lucide-react';
import officialImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';
import isolatedBottleImg from '../assets/images/micro_bottle_isolated_1789757135077.jpg';

interface HeroSectionProps {
  onScrollToOrder: () => void;
  onSelectBundle: (bundleId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOrder, onSelectBundle }) => {
  const images = [
    { src: officialImg, alt: 'صورة مركب المغنيسيوم للنساء 20 في 1 من Micro Ingredients الأصلية مع شهادات الجودة' },
    { src: isolatedBottleImg, alt: 'علبة Micro Ingredients الأصلية - 30 كبسولة نباتية نقية' },
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Countdown timer for Moroccan daily promo
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 5, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      'السلام عليكم، بغيت نطلب باقة علبتين من مركب المغنيسيوم للنساء 20 في 1 (449 درهم + توصيل مجاني والدفع عند الاستلام).'
    );
    window.open(`https://wa.me/212600000000?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pb-16 bg-gradient-to-b from-[#fdfbf7] via-white to-[#fbf9f5]">
      {/* Background soft ambient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Product Media Gallery (5 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-md">
              <img
                src={images[activeImgIndex].src}
                alt={images[activeImgIndex].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
              />

              {/* Badges on Image */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <span className="bg-emerald-700/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md backdrop-blur-xs flex items-center gap-1.5 border border-emerald-500/40">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>تركيبة 20 في 1 الأصلية</span>
                </span>
                <span className="bg-amber-500/95 text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-md backdrop-blur-xs border border-amber-300">
                  30 كبسولة نباتية = شهر كامل
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="الصورة السابقة"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="الصورة التالية"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white ${
                    activeImgIndex === idx
                      ? 'border-emerald-600 ring-2 ring-emerald-200 shadow-sm'
                      : 'border-stone-200 hover:border-emerald-300 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>

            {/* Moroccan Guarantee Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="flex items-center gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/80">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px] font-bold text-stone-700 leading-tight">توصيل مجاني 24-48 ساعة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px] font-bold text-stone-700 leading-tight">الدفع عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/80">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[11px] font-bold text-stone-700 leading-tight">كبسولات نباتية 100%</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200/80">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px] font-bold text-stone-700 leading-tight">ضمان استبدال 14 يوم</span>
              </div>
            </div>
          </div>

          {/* Product Details & Purchase Triggers (7 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Social Proof & Rating Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-amber-900 mr-1">4.9/5</span>
              </div>
              <span className="text-xs text-stone-600 font-medium">
                بناءً على <strong className="text-slate-900 font-bold">847 مراجعة موثوقة</strong> من نساء مغربيات 🇲🇦
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                مركب المغنيسيوم المتطور للنساء <span className="text-emerald-700">20 في 1</span>
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium leading-relaxed">
                30 كبسولة نباتية نقية تكفيكِ <strong className="text-emerald-800 font-bold">شهراً كاملاً</strong>. تركيبة علاجية متكاملة تجمع بين أنقى أنواع المغنيسيوم، عشبة الأشواغاندا، فيتامين D3 و K2، والإينوزيتول لتوديع الأرق، التوتر، وتشنجات العضلات نهائياً.
              </p>
            </div>

            {/* Core Health Pillars for Women */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/70">
                <Moon className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">نوم عميق ومستقر</h4>
                  <p className="text-[11px] text-emerald-800 leading-tight">الاستيقاظ بنشاط وبدون أرق الليل</p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-teal-50/70 p-2.5 rounded-xl border border-teal-200/70">
                <HeartPulse className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-teal-950">تهدئة فورية للأعصاب</h4>
                  <p className="text-[11px] text-teal-800 leading-tight">تخفيف التوتر، القلق، وخفقان القلب</p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/70">
                <Activity className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-950">إنهاء تشنج الساقين</h4>
                  <p className="text-[11px] text-amber-800 leading-tight">راحة المفاصل والعضلات في 7 أيام</p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-purple-50/70 p-2.5 rounded-xl border border-purple-200/70">
                <Zap className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-purple-950">توازن الهرمونات (PCOS)</h4>
                  <p className="text-[11px] text-purple-800 leading-tight">تنظيم الدورة وتقليل انتفاخ البطن</p>
                </div>
              </div>
            </div>

            {/* Special Moroccan Offer Price Box */}
            <div className="bg-gradient-to-br from-stone-900 to-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-lg border border-stone-800 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 border-b border-stone-700/80 pb-3 mb-3">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                    عرض اليوم الحصري بالمغرب 🇲🇦
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-black text-white">229 درهم</span>
                    <span className="text-sm sm:text-base text-stone-400 line-through">320 درهم</span>
                    <span className="bg-rose-500 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md">
                      تخفيض 28%
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-stone-300 block">مصاريف الشحن</span>
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-600/40 px-2.5 py-0.5 rounded-md">
                    مجاناً 0 درهم
                  </span>
                </div>
              </div>

              {/* Best Value Bundle Callout */}
              <div 
                onClick={() => {
                  onSelectBundle('bundle-2');
                  onScrollToOrder();
                }}
                className="bg-emerald-900/60 hover:bg-emerald-900/80 border border-emerald-500/50 p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-2 mb-3"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded">
                    العرض الأكثر طلباً
                  </span>
                  <span className="text-xs font-bold text-emerald-100">
                    باقة علبتين بـ 389 درهم فقط (وفري 251 درهم!)
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-300 underline underline-offset-2 shrink-0">
                  اختاريها الآن ←
                </span>
              </div>

              {/* Stock and Timer Urgency */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
                  <span className="text-stone-300">
                    باقي في مخزون الدار البيضاء: <strong className="text-amber-300 font-bold">14 علبة فقط</strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-stone-800/80 px-2.5 py-1 rounded-lg border border-stone-700 text-stone-200">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>ينتهي التخفيض خلال:</span>
                  <span className="font-mono font-bold text-amber-300 dir-ltr">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                id="hero-order-btn"
                onClick={onScrollToOrder}
                className="flex-1 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-base sm:text-lg py-3.5 px-6 rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 animate-pulse-subtle"
              >
                <span>اضغطي هنا للطلب (الدفع عند الاستلام)</span>
                <Truck className="w-5 h-5 text-amber-300" />
              </button>

              <button
                id="hero-whatsapp-btn"
                onClick={handleWhatsAppOrder}
                className="sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>اطلبي عبر الواتساب</span>
              </button>
            </div>

            {/* Reassurance text */}
            <p className="text-center text-xs text-stone-500 font-medium">
              🔒 لا تدفعي أي درهم مسبقاً — افتحي طردك وتأكدي من العلبة الأصلية عاد خلصي الموزع
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
