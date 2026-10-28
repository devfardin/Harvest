// src/components/admin/AdminHeader.jsx
// ─────────────────────────────────────────────────────────────────────────────
// ADMIN HEADER — sticky top bar shown on all /admin/* pages.
//
// Shows: search bar (desktop), role badge, notification bell, user avatar.
// The role badge text comes from the `userRole` prop passed by layout.jsx.
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import Link from 'next/link';

export default function AdminHeader({ userRole = 'Admin', userName = 'Admin User' }) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="h-[66px] lg:h-[78px] px-4 sm:px-6 xl:px-9 flex items-center gap-3">

        {/* Mobile logo — only visible on small screens (sidebar is hidden on mobile) */}
        <div className="flex items-center gap-2 lg:hidden">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 text-white text-xl grid place-items-center">⚡</span>
          <b className="text-lg">Admin</b>
        </div>

        {/* Search bar — desktop only */}
        <div className="hidden lg:block relative w-full max-w-sm">
          <span className="absolute left-3 top-2.5 text-slate-400">⌕</span>
          <input
            placeholder="Search users, products, transactions..."
            className="w-full rounded-xl border bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">

          {/* Role badge — shows the current admin's role */}
          <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-xs font-bold text-blue-700">{userRole}</span>
          </div>

          {/* Notification bell */}
          <button className="relative w-10 h-10 rounded-xl border grid place-items-center">
            🔔
            {/* Red dot — replace with real unread count logic */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
          </button>

          {/* User avatar — links to settings */}
          <Link
            href="/admin/settings"
            className="flex items-center gap-2 sm:border-l sm:pl-3"
          >
            <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 grid place-items-center text-xs font-extrabold">
              {userName.charAt(0).toUpperCase()}
            </span>
            <span className="hidden sm:block text-left">
              <b className="block text-xs">{userName}</b>
              <small className="text-[10px] text-slate-500">{userRole}</small>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
