// src/app/admin/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// ADMIN DASHBOARD PAGE
//
// IMPORTANT: Next.js does NOT pass custom props from layout.jsx to page.jsx.
// So we cannot receive `userPermissions` as a prop here.
//
// For now, permissions are re-declared here matching layout.jsx.
// TODO: When you add real auth, fetch permissions from a shared context,
// a cookie, or a server-side session instead of hardcoding them.
// ─────────────────────────────────────────────────────────────────────────────

import { hasPermission } from '@/lib/adminPermissions';

// ── Permissions for this page ─────────────────────────────────────────────────
// Keep this in sync with mockAdminUser.permissions in layout.jsx
// TODO: Replace with real auth data
const userPermissions = [
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
];

export default function AdminDashboardPage() {
  // Derive booleans from the permissions array — easier to read in JSX
  const canViewUsers        = hasPermission(userPermissions, 'USER_VIEW');
  const canViewProducts     = hasPermission(userPermissions, 'PRODUCT_VIEW');
  const canViewTransactions = hasPermission(userPermissions, 'TRANSACTION_VIEW');
  const canViewReports      = hasPermission(userPermissions, 'REPORT_VIEW');
  const canApprove          = hasPermission(userPermissions, 'TRANSACTION_APPROVE');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Admin Dashboard</h1>
        <p className="text-slate-500 mt-1">Overview of platform activity and management tools</p>
      </div>

      {/* ── Stats cards ─────────────────────────────────────────────────────── */}
      {/* Each card only renders if the user has the matching permission */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {canViewUsers && (
          <div className="bg-white border rounded-2xl p-5">
            <div className="text-2xl mb-2">👥</div>
            <p className="text-xs text-slate-500">Total Users</p>
            <b className="block text-2xl mt-2">1,234</b>
          </div>
        )}
        {canViewProducts && (
          <div className="bg-white border rounded-2xl p-5">
            <div className="text-2xl mb-2">📦</div>
            <p className="text-xs text-slate-500">Active Products</p>
            <b className="block text-2xl mt-2">12</b>
          </div>
        )}
        {canViewTransactions && (
          <div className="bg-white border rounded-2xl p-5">
            <div className="text-2xl mb-2">💰</div>
            <p className="text-xs text-slate-500">Total Transactions</p>
            <b className="block text-2xl mt-2">5,678</b>
          </div>
        )}
        {canViewReports && (
          <div className="bg-white border rounded-2xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <p className="text-xs text-slate-500">Pending Requests</p>
            <b className="block text-2xl mt-2">23</b>
          </div>
        )}
      </div>

      {/* ── Recent activity tables ───────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent users — only visible with USER_VIEW permission */}
        {canViewUsers && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="font-extrabold mb-4">Recent Users</h2>
            <div className="space-y-3">
              {[
                { name: 'Fardin Ahmed', email: 'fardin@example.com', joined: '2 hours ago' },
                { name: 'Jane Smith',   email: 'jane@example.com',   joined: '5 hours ago' },
                { name: 'John Doe',     email: 'john@example.com',   joined: '1 day ago'   },
              ].map(({ name, email, joined }) => (
                <div key={email} className="flex justify-between items-start py-3 border-b last:border-0">
                  <div>
                    <b className="text-sm block">{name}</b>
                    <span className="text-xs text-slate-500">{email}</span>
                  </div>
                  <span className="text-xs text-slate-500">{joined}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pending approvals — only visible with TRANSACTION_VIEW permission */}
        {canViewTransactions && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="font-extrabold mb-4">Pending Approvals</h2>
            <div className="space-y-3">
              {[
                { type: 'Recharge Request',   user: 'Fardin Ahmed', amount: '৳5,000', status: 'Pending' },
                { type: 'Withdrawal Request', user: 'Jane Smith',   amount: '৳2,500', status: 'Pending' },
                { type: 'Product Purchase',   user: 'John Doe',     amount: '৳1,000', status: 'Pending' },
              ].map(({ type, user, amount, status }) => (
                <div key={`${user}-${type}`} className="flex justify-between items-start py-3 border-b last:border-0">
                  <div>
                    <b className="text-sm block">{type}</b>
                    <span className="text-xs text-slate-500">{user} · {amount}</span>
                  </div>
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full font-bold">{status}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Quick actions — only visible with TRANSACTION_APPROVE permission ─── */}
      {canApprove && (
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h3 className="font-extrabold text-blue-900 mb-2">Quick Actions</h3>
          <p className="text-sm text-blue-700 mb-4">
            You have permission to approve transactions. Review pending requests in the Transactions section.
          </p>
          {/* TODO: Link this button to /admin/transactions when that page exists */}
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700">
            Review Pending Transactions →
          </button>
        </div>
      )}
    </div>
  );
}
