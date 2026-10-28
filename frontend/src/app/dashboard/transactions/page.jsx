'use client';

import TransactionsPage from "@/components/pages/TransactionsPage";
import { useProductModal } from "@/hooks/useDashboardModals";


export default function Page() {
  const openProduct = useProductModal();
  return <TransactionsPage openProduct={openProduct} />;
}
