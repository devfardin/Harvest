// src/app/(public)/layout.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC SITE LAYOUT — wraps all public pages with the shared navbar + footer.
//
// The "(public)" folder name is a Next.js route group.
// Parentheses = the folder name is IGNORED in the URL.
// So these are the actual URLs this layout covers:
//   /              → (public)/page.js
//   /about-us      → (public)/about-us/page.jsx
//   /contact-us    → (public)/contact-us/page.jsx
//   /products      → (public)/products/page.jsx
//   /login         → (public)/login/page.jsx
//   /terms         → (public)/terms/page.jsx
//   /privacy       → (public)/privacy/page.jsx
//   /risk          → (public)/risk/page.jsx
//
// To add a new public page: create a folder + page.jsx inside (public)/
// ─────────────────────────────────────────────────────────────────────────────

import Navbar from '@/components/public/PublicNavbar';
import Footer from '@/components/public/PublicFooter';

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
