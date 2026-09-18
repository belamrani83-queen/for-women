import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Phone, 
  MessageCircle, 
  Trash2, 
  Search, 
  CheckCircle2, 
  Truck, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Users,
  PlusCircle
} from 'lucide-react';
import { MoroccanOrder } from '../types';
import bottleImg from '../assets/images/micro_magnesium_official_1789757121817.jpg';

interface AdminOrdersModalProps {
  orders: MoroccanOrder[];
  onClose: () => void;
  onUpdateStatus: (orderId: string, status: MoroccanOrder['status']) => void;
  onDeleteOrder: (orderId: string) => void;
  onSeedDemoOrders: () => void;
}

export const AdminOrdersModal: React.FC<AdminOrdersModalProps> = ({
  orders,
  onClose,
  onUpdateStatus,
  onDeleteOrder,
  onSeedDemoOrders,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Filtered orders
  const filteredOrders = orders.filter((ord) => {
    const matchesSearch =
      ord.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ord.phone.includes(searchTerm) ||
      ord.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ord.orderNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || ord.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const totalRevenue = orders
    .filter((o) => o.status !== 'cancelled')
    .reduce((acc, o) => acc + o.totalPriceMAD, 0);

  const confirmedCount = orders.filter((o) => o.status === 'confirmed' || o.status === 'shipping' || o.status === 'delivered').length;
  const confirmationRate = orders.length > 0 ? Math.round((confirmedCount / orders.length) * 100) : 0;

  // Export orders to CSV for Moroccan delivery platforms (Sendit, Ozone, Cathedis, etc.)
  const handleExportCSV = () => {
    if (orders.length === 0) return;

    const headers = ['رقم الطلب', 'تاريخ الطلب', 'اسم الزبون', 'رقم الهاتف', 'المدينة', 'العنوان', 'الباقة', 'المبلغ (درهم)', 'حالة الطلب', 'ملاحظات'];
    const rows = orders.map((o) => [
      o.orderNumber,
      new Date(o.createdAt).toLocaleString('fr-FR'),
      `"${o.customerName.replace(/"/g, '""')}"`,
      `"${o.phone}"`,
      `"${o.city.replace(/"/g, '""')}"`,
      `"${o.address.replace(/"/g, '""')}"`,
      `"${o.bundleTitle.replace(/"/g, '""')}"`,
      o.totalPriceMAD,
      o.status,
      `"${(o.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `commandes_magnesium_maroc_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWhatsAppConfirmation = (ord: MoroccanOrder) => {
    const cleanPhone = ord.phone.replace(/\D/g, '');
    const intPhone = cleanPhone.startsWith('0') ? '212' + cleanPhone.substring(1) : cleanPhone;
    const text = encodeURIComponent(
      `السلام عليكم أختي ${ord.customerName}،\nمعاك خدمة تأكيد الطلبات من متجر Vita Maroc بخصوص طلبيتك رقم #${ord.orderNumber}:\n- المنتج: ${ord.bundleTitle}\n- المبلغ: ${ord.totalPriceMAD} درهم (التوصيل بالمجان)\n- المدينة: ${ord.city}\n\nواش العنوان ديالك مؤكد باش نرسلو الطرد مع شركة الشحن دابا؟ شكراً ليك!`
    );
    window.open(`https://wa.me/${intPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-6xl w-full h-[90vh] shadow-2xl border border-stone-200 flex flex-col overflow-hidden text-right">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-black">
                لوحة إدارة طلبات الزبناء (COD Maroc)
              </h3>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                خاص بمالك المتجر
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              متابعة وتأكيد طلبات الدفع عند الاستلام وتصديرها لشركات التوصيل بالمغرب
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-xl hover:bg-stone-800 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick KPI Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-stone-50 border-b border-stone-200">
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-2xs">
            <span className="text-[11px] font-bold text-stone-500 block">إجمالي الطلبات</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-black text-slate-900">{orders.length}</span>
              <span className="text-xs text-stone-400">طلب</span>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-2xs">
            <span className="text-[11px] font-bold text-stone-500 block">المبيعات الإجمالية</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-black text-emerald-700">{totalRevenue}</span>
              <span className="text-xs text-stone-500 font-bold">درهم</span>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-2xs">
            <span className="text-[11px] font-bold text-stone-500 block">نسبة التأكيد التقديرية</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-black text-teal-700">{confirmationRate}%</span>
              <span className="text-xs text-stone-400">تأكيد</span>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-2xs">
            <span className="text-[11px] font-bold text-stone-500 block">متوسط قيمة السلة (AOV)</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-black text-amber-700">
                {orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0}
              </span>
              <span className="text-xs text-stone-500 font-bold">درهم</span>
            </div>
          </div>
        </div>

        {/* Controls & Actions */}
        <div className="p-4 sm:px-6 bg-white border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 flex-1 max-w-md">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="بحث بالاسم، الهاتف، المدينة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl pr-9 pl-3 py-1.5 text-xs outline-none focus:border-emerald-600"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs outline-none"
            >
              <option value="all">جميع الحالات</option>
              <option value="new">جديد (New)</option>
              <option value="confirmed">تم التأكيد (Confirmed)</option>
              <option value="shipping">قيد التوصيل (Shipping)</option>
              <option value="delivered">تم التسليم (Delivered)</option>
              <option value="cancelled">ملغى (Cancelled)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            {orders.length === 0 && (
              <button
                onClick={onSeedDemoOrders}
                className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors"
              >
                <PlusCircle className="w-4 h-4 text-emerald-600" />
                <span>إضافة طلبات تجريبية للتجربة</span>
              </button>
            )}

            <button
              onClick={handleExportCSV}
              disabled={orders.length === 0}
              className="flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>تصدير الطلبات CSV لشركة الشحن</span>
            </button>
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16 text-stone-400">
              <Truck className="w-12 h-12 mx-auto mb-3 text-stone-300" />
              <p className="text-sm font-bold text-stone-600">لا توجد أي طلبات مطابقة حالياً</p>
              <p className="text-xs text-stone-400 mt-1">عندما يملأ أي زبون فورم الشراء ستظهر طلبيته هنا فوراً.</p>
              {orders.length === 0 && (
                <button
                  onClick={onSeedDemoOrders}
                  className="mt-4 bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  توليد طلبات نموذجية من مدن مغربية
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-stone-200">
              <table className="w-full text-right text-xs">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold">
                  <tr>
                    <th className="p-3">رقم الطلب</th>
                    <th className="p-3">الزبونة</th>
                    <th className="p-3">الهاتف والاتصال</th>
                    <th className="p-3">المدينة والعنوان</th>
                    <th className="p-3">الباقة المختارة</th>
                    <th className="p-3">المبلغ</th>
                    <th className="p-3">حالة الطلب</th>
                    <th className="p-3">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {filteredOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-stone-50/70 transition-colors">
                      <td className="p-3 font-mono font-bold text-emerald-800">
                        {ord.orderNumber}
                        <span className="block text-[10px] text-stone-400 font-sans font-normal">
                          {new Date(ord.createdAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </td>

                      <td className="p-3 font-bold text-slate-900">
                        {ord.customerName}
                      </td>

                      <td className="p-3">
                        <span className="font-mono dir-ltr inline-block text-slate-800 font-semibold mb-1">
                          {ord.phone}
                        </span>
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${ord.phone}`}
                            className="text-stone-500 hover:text-emerald-700 bg-stone-100 p-1 rounded-md"
                            title="اتصال هاتفي"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => openWhatsAppConfirmation(ord)}
                            className="text-emerald-600 hover:text-emerald-700 bg-emerald-50 p-1 rounded-md"
                            title="تأكيد بالواتساب"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      <td className="p-3 max-w-[160px]">
                        <span className="font-bold text-slate-900 block">{ord.city.split(' ')[0]}</span>
                        <span className="text-[11px] text-stone-500 truncate block">{ord.address}</span>
                      </td>

                      <td className="p-3 text-stone-700 font-medium">
                        <div className="flex items-center gap-2">
                          <img
                            src={bottleImg}
                            alt="Micro Ingredients"
                            referrerPolicy="no-referrer"
                            className="w-7 h-7 object-cover rounded-md border border-stone-200 bg-[#4a154b] p-0.5 shrink-0"
                          />
                          <span>{ord.bundleTitle}</span>
                        </div>
                      </td>

                      <td className="p-3 font-black text-emerald-800 text-sm">
                        {ord.totalPriceMAD} درهم
                      </td>

                      <td className="p-3">
                        <select
                          value={ord.status}
                          onChange={(e) => onUpdateStatus(ord.id, e.target.value as any)}
                          className={`text-[11px] font-bold rounded-lg px-2 py-1 border outline-none cursor-pointer ${
                            ord.status === 'new'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : ord.status === 'confirmed'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : ord.status === 'shipping'
                              ? 'bg-purple-50 text-purple-800 border-purple-300'
                              : ord.status === 'delivered'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-rose-50 text-rose-800 border-rose-300'
                          }`}
                        >
                          <option value="new">جديد (قيد المراجعة)</option>
                          <option value="confirmed">تم التأكيد هاتفياً</option>
                          <option value="shipping">قيد الشحن مع الليفرور</option>
                          <option value="delivered">تم التسليم وقبض الثمن</option>
                          <option value="cancelled">ملغى / لم تجب</option>
                        </select>
                      </td>

                      <td className="p-3">
                        <button
                          onClick={() => onDeleteOrder(ord.id)}
                          className="text-stone-400 hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
