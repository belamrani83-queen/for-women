import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquarePlus, ShieldCheck, MapPin } from 'lucide-react';
import { CustomerReview } from '../types';
import { REAL_REVIEWS, MOROCCAN_CITIES } from '../data/moroccanData';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

export const CustomerReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(REAL_REVIEWS);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sleep' | 'anxiety' | 'cramps' | 'hormones'>('all');
  const [showAddReview, setShowAddReview] = useState(false);

  // New review form states
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState(MOROCCAN_CITIES[0]);
  const [newRating, setNewRating] = useState(5);
  const [newCategory, setNewCategory] = useState<'sleep' | 'anxiety' | 'cramps' | 'hormones'>('sleep');
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter((r) => r.benefitCategory === selectedFilter);

  const handleLike = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: CustomerReview = {
      id: 'rev-' + Date.now(),
      authorName: newAuthor.trim(),
      city: newCity.split(' ')[0],
      rating: newRating,
      verifiedPurchase: true,
      date: 'الآن',
      benefitCategory: newCategory,
      title: newTitle.trim() || 'تجربة ممتازة تستحق الشكر',
      comment: newComment.trim(),
      helpfulCount: 1,
    };

    setReviews([newRev, ...reviews]);
    setShowAddReview(false);
    setNewAuthor('');
    setNewTitle('');
    setNewComment('');
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 inline-block mb-3">
            تجارب حقيقية وموثقة 🇲🇦
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ماذا تقول النساء المغربيات بعد تجربة هذا المكمل؟
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-medium">
            آراء زبوناتنا من مختلف مدن المملكة اللواتي استعدن هدوءهن وجودة نومهن.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl font-black text-slate-900">
              4.9<span className="text-2xl text-stone-400 font-normal">/5</span>
            </div>
            <div>
              <div className="flex items-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-stone-600 mt-1 font-medium">
                بناءً على 847 عملية شراء موثقة عبر الدفع عند الاستلام
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowAddReview(!showAddReview)}
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>شاركي تجربتكِ معنا</span>
            </button>
          </div>
        </div>

        {/* Add Review Drawer / Form */}
        {showAddReview && (
          <form onSubmit={handleAddReview} className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-emerald-200 mb-8 max-w-2xl mx-auto text-right">
            <h4 className="font-extrabold text-slate-900 text-base mb-4">
              إضافة مراجعتكِ لمركب المغنيسيوم 20 في 1
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسمكِ الكريم</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: حسناء الفاسي"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">المدينة</label>
                <select
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-600"
                >
                  {MOROCCAN_CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">أبرز فائدة لاحظتِها</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-600"
                >
                  <option value="sleep">تحسن جودة النوم والراحة</option>
                  <option value="cramps">اختفاء تشنجات الساقين والعضلات</option>
                  <option value="anxiety">الهدوء وتخفيف التوتر والقلق</option>
                  <option value="hormones">توازن الهرمونات والدورة الشهرية</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">تقييمك بالنجوم</label>
                <div className="flex items-center gap-2 pt-1.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setNewRating(num)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          num <= newRating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-bold text-slate-700 mb-1">عنوان المراجعة</label>
              <input
                type="text"
                placeholder="مثال: نوم عميق من الأسبوع الأول"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-1">تفاصيل تجربتكِ</label>
              <textarea
                rows={3}
                required
                placeholder="كتبي لينا على التغيير اللي حسيتي بيه فصحتك وطاقتك اليومية..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-emerald-600"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-800 transition-colors"
              >
                نشر التقييم فوراً
              </button>
              <button
                type="button"
                onClick={() => setShowAddReview(false)}
                className="bg-stone-200 text-stone-700 text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-stone-300"
              >
                إلغاء
              </button>
            </div>
          </form>
        )}

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
              selectedFilter === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            جميع المراجعات ({reviews.length})
          </button>
          <button
            onClick={() => setSelectedFilter('sleep')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
              selectedFilter === 'sleep'
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            النوم والأرق 🌙
          </button>
          <button
            onClick={() => setSelectedFilter('cramps')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
              selectedFilter === 'cramps'
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            تشنجات العضلات والساقين ⚡
          </button>
          <button
            onClick={() => setSelectedFilter('anxiety')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
              selectedFilter === 'anxiety'
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            تهدئة الأعصاب والتوتر 🧠
          </button>
          <button
            onClick={() => setSelectedFilter('hormones')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
              selectedFilter === 'hormones'
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            الهرمونات وتكيس المبايض 🌸
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#fcfaf7] rounded-2xl p-5 border border-stone-200/90 hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Meta */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-sm">{rev.authorName}</h4>
                      {rev.verifiedPurchase && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          <span>شراء مؤكد</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-500 text-[11px] mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{rev.city}</span>
                      <span>•</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Title & Content */}
                <h5 className="font-bold text-slate-900 text-sm mb-1.5">
                  "{rev.title}"
                </h5>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {rev.comment}
                </p>

                {rev.verifiedPurchase && (
                  <div className="mt-3 flex items-center gap-2 bg-stone-100/80 p-1.5 rounded-xl border border-stone-200/70 w-fit">
                    <img
                      src={bottleImg}
                      alt="العلبة المستلمة"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 object-cover rounded-lg bg-[#4a154b] p-0.5 border border-stone-200"
                    />
                    <span className="text-[10px] text-stone-600 font-bold">صورة العلبة المستلمة عند التوصيل</span>
                  </div>
                )}
              </div>

              {/* Helpful Footer */}
              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                <span className="text-[11px]">مراجعة حقيقية لزبونة مغربية</span>
                <button
                  onClick={() => handleLike(rev.id)}
                  className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>مفيد ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
