'use client';
import ProfilePage from "@/components/pages/ProfilePage";
import { useProductModal } from "@/hooks/useDashboardModals";

export default function Page() {
  const openProduct = useProductModal();
  return <ProfilePage openProduct={openProduct} />;
}
