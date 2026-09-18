import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/moroccanData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent('السلام عليكم، عندي سؤال إضافي حول مكمل المغنيسيوم للنساء 20 في 1.');
    window.open(`https://wa.me/212600000000?text=${text}`, '_blank');
  };

  return (
    <section className="py-14 sm:py-20 bg-[#f9f7f2] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 inline-block mb-3">
            كل ما يدور في ذهنك
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            الأسئلة الشائعة حول مركب المغنيسيوم 20 في 1
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
            إليكِ الإجابات الشافية والمفصلة لطرد أي تردد قبل تأكيد طلبكِ.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-emerald-600 shadow-md ring-1 ring-emerald-100' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-4 sm:p-5 flex items-center justify-between gap-4 font-extrabold text-slate-900 text-sm sm:text-base cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-emerald-600' : 'text-stone-400'}`} />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-medium border-t border-stone-100 bg-stone-50/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-10 bg-white rounded-2xl p-6 border border-stone-200">
          <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
            عندك شي سؤال آخر مذكرناهش هنا؟
          </h4>
          <p className="text-xs text-stone-600 mb-4">
            فريق المستشارات في خدمتكِ طيلة أيام الأسبوع عبر الواتساب للإجابة عن كل استفساراتك.
          </p>
          <button
            onClick={handleWhatsAppHelp}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تحدثي مع مستشارة واتساب الآن</span>
          </button>
        </div>

      </div>
    </section>
  );
};
