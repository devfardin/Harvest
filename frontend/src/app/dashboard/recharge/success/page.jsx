'use client';
import SuccessPage from "@/components/pages/SuccessPage";
import TasksPage from "@/components/pages/TasksPage";
import { useProductModal } from "@/hooks/useDashboardModals";

export default function Page() {
  const openProduct = useProductModal();
  return <SuccessPage openProduct={openProduct} />;
}
