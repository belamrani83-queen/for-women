import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 sm:pb-12 border-t border-stone-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800 text-xs sm:text-sm">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-extrabold text-lg text-white font-sans">
                VITA<span className="text-emerald-500">MAROC</span>
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md">
              المتجر المغربي المعتمد لمركب المغنيسيوم المتقدم للنساء 20 في 1 (30 كبسولة). نلتزم بتقديم أرقى المكملات الغذائية الأمريكية المفحوصة مخبرياً مع ضمان التوصيل بالمجان والدفع بعد المعاينة عند الاستلام.
            </p>
            <div className="flex items-center gap-4 mt-4 text-stone-400 text-xs">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>أصلي 100% ومضمون</span>
              </span>
              <span>•</span>
              <span>سجل تجاري وقانوني مغربي</span>
            </div>
          </div>

          {/* Contact Details in Morocco */}
          <div>
            <h4 className="text-white font-extrabold text-sm mb-3">خدمة الزبناء والمستودع</h4>
            <div className="flex flex-col gap-2.5 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>مستودع التوزيع المركزي: حي سيدي معروف، الدار البيضاء، المغرب</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span dir="ltr">+212 654-892134</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contact@vitamaroc.ma</span>
              </div>
            </div>
          </div>

          {/* Guarantees & Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm mb-3">شروط الشراء بالمغرب</h4>
            <ul className="flex flex-col gap-2 text-stone-400">
              <li>• التوصيل مجاني لكافة المدن (24-48 ساعة)</li>
              <li>• المعاينة وفحص الطرد قبل دفع الثمن</li>
              <li>• إمكانية الاستبدال أو الإرجاع خلال 14 يوماً</li>
              <li>• دعم متواصل عبر الواتساب طيلة أيام الأسبوع</li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="max-w-2xl leading-relaxed text-[11px]">
            <strong>إخلاء مسؤولية قانوني وطبي:</strong> هذا المنتج مكمل غذائي طبيعي وليس دواءً مخصصاً لعلاج أو تشخيص الأمراض المزمنة. النتائج تختلف حسب قابلية كل جسم والتزامه بالجرعة اليومية. يرجى استشارة الطبيب في حالة الحمل أو الرضاعة.
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmin}
              className="text-stone-400 hover:text-emerald-400 underline underline-offset-4 text-[11px]"
            >
              دخول التاجر (لوحة الطلبات)
            </button>
            <span>•</span>
            <span className="text-stone-400">جميع الحقوق محفوظة © {new Date().getFullYear()} VitaMaroc</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
