'use client';
import { useProductModal } from '@/hooks/useDashboardModals';
import PurchasedPage from '@/components/pages/PurchasedPage';

export default function Page() {
  const openProduct = useProductModal();
  return <PurchasedPage openProduct={openProduct} />;
}
