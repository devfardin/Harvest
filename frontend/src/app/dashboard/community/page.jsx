'use client';
import CommunityPage from "@/components/pages/CommunityPage";
import { useProductModal } from "@/hooks/useDashboardModals";

export default function Page() {
  const openProduct = useProductModal();
  return <CommunityPage openProduct={openProduct} />;
}
