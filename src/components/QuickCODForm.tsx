import React, { useState, useId } from 'react';
import { 
  Package, 
  Truck, 
  ShieldCheck, 
  Check, 
  MapPin, 
  Phone, 
  User, 
  AlertCircle,
  Clock,
  Sparkles,
  MessageCircle,
  FileText
} from 'lucide-react';
import { PRODUCT_BUNDLES, MOROCCAN_CITIES } from '../data/moroccanData';
import { MoroccanOrder } from '../types';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface QuickCODFormProps {
  selectedBundleId: string;
  onSelectBundle: (bundleId: string) => void;
  onSubmitOrder: (order: MoroccanOrder) => void;
}

export const QuickCODForm: React.FC<QuickCODFormProps> = ({
  selectedBundleId,
  onSelectBundle,
  onSubmitOrder,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(MOROCCAN_CITIES[0]);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputId = useId();
  const phoneInputId = useId();
  const citySelectId = useId();
  const addressInputId = useId();
  const notesInputId = useId();

  const currentBundle = PRODUCT_BUNDLES.find((b) => b.id === selectedBundleId) || PRODUCT_BUNDLES[1];

  // Quick Moroccan city chips
  const popularCities = ['الدار البيضاء (Casablanca)', 'الرباط (Rabat)', 'مراكش (Marrakech)', 'طنجة (Tanger)', 'فاس (Fès)', 'أكادير (Agadir)'];

  // Check valid Moroccan phone number
  const isMoroccanPhone = (val: string) => {
    const cleaned = val.replace(/\s+/g, '').replace(/[-+]/g, '');
    return /^(0[567]|212[567])[0-9]{8}$/.test(cleaned) || cleaned.length >= 9;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('يرجى إدخال الاسم الكامل لتسليم الطرد.');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 9) {
      setError('يرجى إدخال رقم هاتف صحيح ليتصل بك موزع شركة الشحن قبل الوصول.');
      return;
    }

    if (!city) {
      setError('يرجى اختيار مدينتك لتحديد موعد التوصيل.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: MoroccanOrder = {
        id: 'ord-' + Date.now(),
        orderNumber: 'MA-' + Math.floor(100000 + Math.random() * 900000),
        customerName: name.trim(),
        phone: phone.trim(),
        city: city,
        address: address.trim() || 'العنوان يحدد مع الموزع هاتفياً',
        notes: notes.trim(),
        bundleId: currentBundle.id,
        bundleTitle: currentBundle.titleAr,
        totalPriceMAD: currentBundle.priceMAD,
        createdAt: new Date().toISOString(),
        status: 'new',
      };

      onSubmitOrder(newOrder);
      setIsSubmitting(false);
    }, 600);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `السلام عليكم، بغيت نطلب مباشرة:\n- المنتج: مركب المغنيسيوم 20 في 1 للنساء\n- العرض: ${currentBundle.titleAr} (${currentBundle.priceMAD} درهم)\n- الاسم: ${name || '[الاسم]'}\n- الهاتف: ${phone || '[رقم الهاتف]'}\n- المدينة: ${city}\n- التوصيل مجاني والدفع عند الاستلام.`
    );
    window.open(`https://wa.me/212600000000?text=${message}`, '_blank');
  };

  return (
    <section id="order-form-section" className="py-12 sm:py-16 bg-[#f4f1eb] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 mb-2">
            <Truck className="w-3.5 h-3.5 text-emerald-700" />
            <span>طلب سريع خلال 30 ثانية | التوصيل بالمجان</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            استمارتك لتأكيد الطلب والدفع عند الاستلام
          </h2>
          <p className="text-sm text-stone-600 mt-2 font-medium">
            عمري معلوماتك لتحت، وغادي يتصل بك فريقنا لتأكيد العنوان وإرسال طلبيتك فالحين!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-stone-200/90">
          
          {/* Step 1: Select Pack / Bundle */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-black">
                  1
                </span>
                <span>اختاري الباقة المناسبة لكِ:</span>
              </label>
              <span className="text-xs text-stone-500 font-medium">
                جميع الباقات تشمل <strong className="text-emerald-700">توصيل مجاني</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {PRODUCT_BUNDLES.map((bundle) => {
                const isSelected = bundle.id === selectedBundleId;
                return (
                  <div
                    key={bundle.id}
                    onClick={() => onSelectBundle(bundle.id)}
                    className={`relative rounded-2xl p-4 cursor-pointer transition-all border-2 text-right flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/40 shadow-md ring-2 ring-emerald-200'
                        : 'border-stone-200 hover:border-emerald-300 bg-white hover:bg-stone-50/50'
                    }`}
                  >
                    {/* Popular Badge */}
                    {bundle.popular && (
                      <span className="absolute -top-3 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>الأكثر طلباً بالمغرب</span>
                      </span>
                    )}

                    {bundle.badge && !bundle.popular && (
                      <span className="absolute -top-3 right-4 bg-stone-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {bundle.badge}
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {bundle.titleAr}
                        </h4>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      {/* Visual Bottle Representation */}
                      <div className="flex items-center gap-1.5 my-2.5">
                        {[...Array(bundle.id === 'bundle-1' ? 1 : bundle.id === 'bundle-2' ? 2 : 3)].map((_, bIdx) => (
                          <img
                            key={bIdx}
                            src={bottleImg}
                            alt="علبة Micro Ingredients الأصلية"
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 object-cover rounded-lg border border-stone-200/90 bg-[#4a154b] p-0.5 shadow-xs"
                          />
                        ))}
                        <span className="text-[11px] text-stone-600 font-bold mr-1">
                          {bundle.capsuleCount} كبسولة
                        </span>
                      </div>

                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        {bundle.subtitleAr}
                      </p>

                      <div className="mt-3 pt-3 border-t border-stone-200/80">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-black text-emerald-800">
                            {bundle.priceMAD} درهم
                          </span>
                          <span className="text-xs text-stone-400 line-through">
                            {bundle.originalPriceMAD} درهم
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block mt-1">
                          وفري {bundle.savingsMAD} درهم
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 text-[11px] text-stone-600 flex flex-col gap-1 border-t border-dashed border-stone-200">
                      {bundle.freeGifts.map((gift, gIdx) => (
                        <div key={gIdx} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{gift}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Customer Contact Info */}
          <div className="mb-6">
            <label className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-black">
                2
              </span>
              <span>معلومات التوصيل والاستلام:</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor={nameInputId} className="block text-xs font-bold text-slate-700 mb-1.5">
                  الاسم الكامل <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id={nameInputId}
                    type="text"
                    required
                    placeholder="مثال: سناء بناني"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pr-10 pl-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor={phoneInputId} className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>رقم الهاتف المحمول <span className="text-rose-600">*</span></span>
                  <span className="text-[11px] text-stone-500 font-normal">سيتصل بك الموزع لتحديد الموعد</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id={phoneInputId}
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="06 00 00 00 00 أو 07 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pr-10 pl-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-right font-mono"
                  />
                  {phone && isMoroccanPhone(phone) && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-emerald-600">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {/* City Selection */}
              <div className="sm:col-span-2">
                <label htmlFor={citySelectId} className="block text-xs font-bold text-slate-700 mb-1.5">
                  المدينة <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    id={citySelectId}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pr-10 pl-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {MOROCCAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Popular Moroccan city quick-click chips */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <span className="text-[11px] text-stone-500 font-medium ml-1">مدن سريعة:</span>
                  {popularCities.map((pCity) => (
                    <button
                      key={pCity}
                      type="button"
                      onClick={() => setCity(pCity)}
                      className={`text-[11px] px-2 py-0.5 rounded-md border transition-all ${
                        city === pCity
                          ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                          : 'bg-stone-100 text-stone-700 border-stone-200 hover:border-emerald-400'
                      }`}
                    >
                      {pCity.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Address */}
              <div className="sm:col-span-2">
                <label htmlFor={addressInputId} className="block text-xs font-bold text-slate-700 mb-1.5">
                  العنوان أو الحي السكني <span className="text-stone-400 font-normal">(اختياري ولكن يفضل لتسريع التوصيل)</span>
                </label>
                <input
                  id={addressInputId}
                  type="text"
                  placeholder="مثال: حي المعاريف زنقة الزرقطوني عمارة 14 أو قرب مسجد..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
              </div>

              {/* Special Delivery Notes */}
              <div className="sm:col-span-2">
                <label htmlFor={notesInputId} className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-stone-400" />
                  <span>ملاحظات إضافية للتوصيل (اختياري)</span>
                </label>
                <input
                  id={notesInputId}
                  type="text"
                  placeholder="مثال: يرجى التوصيل في الفترة الصباحية، أو التسليم في مقر العمل"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Transparent Order Summary Box */}
          <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/80 mb-6">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
              <img
                src={bottleImg}
                alt="Micro Ingredients Magnesium Complex for Women"
                referrerPolicy="no-referrer"
                className="w-14 h-14 object-cover rounded-xl border border-stone-200 bg-white shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-emerald-800 font-bold block">Micro Ingredients® الأصلي</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                  {currentBundle.titleAr} ({currentBundle.capsuleCount} كبسولة)
                </h4>
                <span className="text-[10px] text-stone-500 font-medium">تركيبة 20 في 1 الأمريكية للنساء</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-600 py-2 border-b border-stone-200">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>مصاريف الشحن لـ {city.split(' ')[0]}:</span>
              </span>
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                مجاناً (0 درهم)
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-600 py-2 border-b border-stone-200">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>طريقة الأداء:</span>
              </span>
              <span className="font-bold text-slate-900">
                الدفع نقداً عند الاستلام بعد معاينة الطرد
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 text-sm sm:text-base font-extrabold text-slate-900">
              <span>المجموع الصافي للدفع:</span>
              <div className="text-left">
                <span className="text-2xl font-black text-emerald-800">{currentBundle.priceMAD} درهم</span>
                <span className="text-[11px] text-amber-700 font-bold block">
                  (وفرتِ {currentBundle.savingsMAD} درهم مغربي)
                </span>
              </div>
            </div>
          </div>

          {/* Validation Error Banner */}
          {error && (
            <div className="bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm p-3 rounded-xl mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Submission Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              id="confirm-order-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-75 cursor-pointer animate-pulse-subtle"
            >
              <Package className="w-5 h-5 text-amber-300" />
              <span>
                {isSubmitting ? 'جاري تسجيل طلبك...' : 'تأكيد الطلب الآن (الدفع عند الاستلام)'}
              </span>
            </button>

            <button
              id="order-by-whatsapp-btn"
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-sm sm:text-base py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>أو إرسال الطلب مباشرة عبر الواتساب بنقرة واحدة</span>
            </button>
          </div>

          {/* Moroccan Trust & Reassurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-stone-200 text-stone-600 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ضمان المعاينة قبل الأداء</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>توصيل سريع خلال 24 إلى 48 ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>توصيل مجاني لكافة المدن والقرى</span>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
};
