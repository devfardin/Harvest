import Link from 'next/link';

// Landing products page — shows product categories and overview

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Our Products</h1>
        <p className="text-lg text-slate-600">Explore verified investment products across different categories</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {[
          { emoji: '🌿', cat: 'Agriculture', desc: 'Farm-based investment products with daily returns' },
          { emoji: '🍎', cat: 'Food Supply', desc: 'Food distribution and supply chain products' },
          { emoji: '🤝', cat: 'Community', desc: 'Community-driven business opportunities' },
        ].map(({ emoji, cat, desc }) => (
          <div key={cat} className="bg-white border rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">{emoji}</div>
            <h3 className="font-extrabold text-lg mb-2">{cat}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-harvest-50 border border-harvest-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-extrabold mb-3">Ready to explore products?</h2>
        <p className="text-slate-600 mb-6">Log in to your account to view detailed product information, eligibility and purchase options.</p>
        <Link href="/login" className="inline-block px-6 py-3 rounded-xl bg-harvest-700 text-white font-bold hover:bg-harvest-800">
          View all products →
        </Link>
      </div>
    </div>
  );
}
