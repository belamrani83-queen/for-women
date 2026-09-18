import React from 'react';
import { CheckCircle2, PhoneCall, Package, MessageCircle, X, Truck, ShieldCheck } from 'lucide-react';
import { MoroccanOrder } from '../types';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface OrderSuccessModalProps {
  order: MoroccanOrder | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `السلام عليكم، قمت بتأكيد طلبي بالموقع برقم: ${order.orderNumber}\nالاسم: ${order.customerName}\nالمدينة: ${order.city}\nالعرض: ${order.bundleTitle} (${order.totalPriceMAD} درهم)`
    );
    window.open(`https://wa.me/212600000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-inner ring-4 ring-emerald-50">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Header Title */}
        <div className="text-center mb-5">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-block mb-2">
            تم تسجيل طلبك بنجاح 🇲🇦
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            شكراً لثقتك بنا يا {order.customerName}!
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            رقم الطلب المرجعي الخاص بك: <strong className="text-emerald-800 font-mono text-base">{order.orderNumber}</strong>
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-xs text-stone-700 flex flex-col gap-2.5 mb-5">
          <div className="flex items-center gap-3 pb-2.5 border-b border-stone-200">
            <img
              src={bottleImg}
              alt="Micro Ingredients Magnesium Complex for Women"
              referrerPolicy="no-referrer"
              className="w-12 h-12 object-cover rounded-xl border border-stone-200 bg-white shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-emerald-800 font-bold block">Micro Ingredients® الأصلي</span>
              <span className="font-extrabold text-slate-900 text-xs truncate block">{order.bundleTitle}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-stone-200">
            <span className="text-stone-500">المدينة ووجهة التوصيل:</span>
            <span className="font-bold text-slate-900">{order.city}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-stone-200">
            <span className="text-stone-500">المبلغ الإجمالي عند الاستلام:</span>
            <span className="font-black text-emerald-700 text-base">{order.totalPriceMAD} درهم (توصيل بالمجان)</span>
          </div>

          <div className="flex items-center gap-2 pt-1 text-emerald-800 font-semibold">
            <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>الموعد التقريبي للتسليم: خلال 24 - 48 ساعة</span>
          </div>
        </div>

        {/* What Happens Next Steps */}
        <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200/80 mb-6 text-xs text-amber-950 flex items-start gap-3">
          <PhoneCall className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <h5 className="font-bold text-sm text-amber-900 mb-0.5">ماذا سيحدث الآن؟</h5>
            <p className="text-[11px] leading-relaxed text-amber-800">
              سيتصل بك أحد أفراد خدمة العملاء عبر رقم هاتفك <strong>({order.phone})</strong> لتأكيد العنوان النهائي وإعطاء الإذن لشركة الشحن بالانطلاق فوراً. المرجو إبقاء هاتفك قريباً منك.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={handleWhatsAppConfirmation}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>متابعة الطلب مع مستشارة الواتساب مباشرة</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs py-2.5 px-4 rounded-xl transition-colors"
          >
            إغلاق ومتابعة تصفح المتجر
          </button>
        </div>

      </div>
    </div>
  );
};
