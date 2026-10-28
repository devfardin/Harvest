// src/app/admin/layout.jsx
// ─────────────────────────────────────────────────────────────────────────────
// ADMIN LAYOUT — wraps all /admin/* pages with sidebar + header.
//
// PERMISSION SYSTEM:
// Right now permissions are hardcoded here (mockAdminUser).
// When you connect a real backend, replace mockAdminUser with data
// fetched from your auth token/session.
//
// HOW TO CHANGE PERMISSIONS FOR TESTING:
// Edit the `permissions` array in mockAdminUser below.
// Available permission keys are defined in src/lib/adminPermissions.js
//
// ADDING A NEW ADMIN PAGE:
// 1. Create src/app/admin/your-page/page.jsx
// 2. Add a nav item in AdminSidebar.jsx with the matching permission key
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader  from '@/components/admin/AdminHeader';

// ── Mock admin user ───────────────────────────────────────────────────────────
// TODO: Replace this with real data from your auth system (JWT, session, etc.)
// The `permissions` array controls what this admin can see and do.
// See src/lib/adminPermissions.js for all available permission keys.
const mockAdminUser = {
  name: 'Admin User',
  role: 'Admin',                // Display label shown in the header
  permissions: [
    'DASHBOARD_VIEW',
    'USER_VIEW',
    'USER_EDIT',
    'PRODUCT_VIEW',
    'PRODUCT_EDIT',
    'PRODUCT_CREATE',
    'TRANSACTION_VIEW',
    'TRANSACTION_APPROVE',
    'REPORT_VIEW',
    'SETTINGS_VIEW',
    // Remove any of the above to restrict access
    // Add 'USER_DELETE', 'PRODUCT_DELETE', 'SETTINGS_EDIT' for more access
    // Add all keys from PERMISSIONS for super-admin access
  ],
};

export default function AdminLayout({ children }) {
  // activePage tracks which sidebar item is highlighted
  // It is set by showPage() which is passed down to AdminSidebar
  const [activePage, setActivePage] = useState('dashboard');

  // showPage is called when a sidebar nav button is clicked.
  // For now it just updates the highlight — real navigation uses
  // Next.js <Link> or router.push() inside each nav item.
  function showPage(page) {
    setActivePage(page);
  }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[248px_minmax(0,1fr)]">

      {/* Sidebar — desktop only, shows only items the user has permission for */}
      <AdminSidebar
        activePage={activePage}
        showPage={showPage}
        userPermissions={mockAdminUser.permissions}
      />

      {/* Main content area */}
      <main className="min-w-0">

        {/* Header — shows role badge and user info */}
        <AdminHeader
          showPage={showPage}
          userRole={mockAdminUser.role}
          userName={mockAdminUser.name}
          userPermissions={mockAdminUser.permissions}
        />

        {/* Page content */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 xl:px-9 py-5 sm:py-7 pb-10">
          {children}
        </div>
      </main>
    </div>
  );
}
