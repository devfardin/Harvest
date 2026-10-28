'use client';
import BankPage from "@/components/pages/BankPage";
import TasksPage from "@/components/pages/TasksPage";
import { useProductModal } from "@/hooks/useDashboardModals";

export default function Page() {
  const openProduct = useProductModal();
  return <BankPage openProduct={openProduct} />;
}
