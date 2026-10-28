'use client';
import WithdrawalsPage from "@/components/pages/WithdrawalsPage";
import { useProductModal } from "@/hooks/useDashboardModals";

export default function Page() {
  const openProduct = useProductModal();
  return <WithdrawalsPage openProduct={openProduct} />;
}
