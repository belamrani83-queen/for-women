/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MoroccanOrder } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { IngredientsBreakdown } from './components/IngredientsBreakdown';
import { ComparisonTable } from './components/ComparisonTable';
import { UsageRoutine } from './components/UsageRoutine';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { QuickCODForm } from './components/QuickCODForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { LiveBuyerPopup } from './components/LiveBuyerPopup';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { AdminOrdersModal } from './components/AdminOrdersModal';

const INITIAL_DEMO_ORDERS: MoroccanOrder[] = [
  {
    id: 'ord-101',
    orderNumber: 'MA-819241',
    customerName: 'سناء المرابط',
    phone: '0661248930',
    city: 'الدار البيضاء (Casablanca)',
    address: 'حي بوركون شارع أنفا عمارة 24',
    notes: 'التسليم في الفترة المسائية',
    bundleId: 'bundle-2',
    bundleTitle: 'علبتان (60 كبسولة - باقة التوفير)',
    totalPriceMAD: 389,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: 'confirmed',
  },
  {
    id: 'ord-102',
    orderNumber: 'MA-928410',
    customerName: 'فاطمة الزهراء الشرايبي',
    phone: '0672194055',
    city: 'الرباط (Rabat)',
    address: 'حي الرياض قرب محطة الترامواي',
    notes: 'الدفع عند الاستلام كاش',
    bundleId: 'bundle-2',
    bundleTitle: 'علبتان (60 كبسولة - باقة التوفير)',
    totalPriceMAD: 389,
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    status: 'shipping',
  },
  {
    id: 'ord-103',
    orderNumber: 'MA-392019',
    customerName: 'مريم بناني',
    phone: '0650993214',
    city: 'مراكش (Marrakech)',
    address: 'حي إيليز زنقة ابن بطوطة',
    notes: 'الاتصال قبل المجيء بساعة',
    bundleId: 'bundle-1',
    bundleTitle: 'علبة واحدة (30 كبسولة)',
    totalPriceMAD: 229,
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    status: 'delivered',
  },
];

export default function App() {
  const [selectedBundleId, setSelectedBundleId] = useState<string>('bundle-2');
  const [orders, setOrders] = useState<MoroccanOrder[]>(() => {
    try {
      const saved = localStorage.getItem('moroccan_magnesium_orders');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_DEMO_ORDERS;
  });

  const [completedOrder, setCompletedOrder] = useState<MoroccanOrder | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('moroccan_magnesium_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  const scrollToOrder = () => {
    const el = document.getElementById('order-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderSubmit = (newOrder: MoroccanOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCompletedOrder(newOrder);
  };

  const handleUpdateOrderStatus = (orderId: string, status: MoroccanOrder['status']) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status } : ord))
    );
  };

  const handleDeleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((ord) => ord.id !== orderId));
  };

  const handleSeedDemoOrders = () => {
    setOrders(INITIAL_DEMO_ORDERS);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-slate-800 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* 1. Announcement Banner */}
      <AnnouncementBar />

      {/* 2. Sticky Header */}
      <Header
        onOpenAdmin={() => setIsAdminOpen(true)}
        orderCount={orders.length}
        onScrollToOrder={scrollToOrder}
      />

      <main>
        {/* 3. Hero Section with Gallery, Highlights & Countdown */}
        <HeroSection
          onScrollToOrder={scrollToOrder}
          onSelectBundle={(id) => setSelectedBundleId(id)}
        />

        {/* 4. Common Symptoms & Therapeutic Transformation */}
        <BenefitsSection onScrollToOrder={scrollToOrder} />

        {/* 5. 20-in-1 Synergistic Ingredients Breakdown */}
        <IngredientsBreakdown />

        {/* 6. Comparison: Normal Moroccan Pharmacy vs 20-in-1 Complex */}
        <ComparisonTable onScrollToOrder={scrollToOrder} />

        {/* 7. Usage, Timing and Expected Results Timeline */}
        <UsageRoutine />

        {/* 8. Moroccan Customer Reviews & Ratings */}
        <CustomerReviewsSection />

        {/* 9. High-Conversion Moroccan COD Checkout Form */}
        <QuickCODForm
          selectedBundleId={selectedBundleId}
          onSelectBundle={setSelectedBundleId}
          onSubmitOrder={handleOrderSubmit}
        />

        {/* 10. Frequently Asked Questions in Moroccan Darija */}
        <FAQSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Mobile Sticky Action Bar */}
      <StickyBottomBar
        selectedBundleId={selectedBundleId}
        onScrollToOrder={scrollToOrder}
      />

      {/* Floating Live Moroccan Buyer Notifications */}
      <LiveBuyerPopup />

      {/* Order Confirmation Success Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

      {/* Admin Order Manager Drawer */}
      {isAdminOpen && (
        <AdminOrdersModal
          orders={orders}
          onClose={() => setIsAdminOpen(false)}
          onUpdateStatus={handleUpdateOrderStatus}
          onDeleteOrder={handleDeleteOrder}
          onSeedDemoOrders={handleSeedDemoOrders}
        />
      )}
    </div>
  );
}
