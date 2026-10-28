'use client';
import { useState } from 'react';
import Link from 'next/link';

const HarvestLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M12 21V10M12 14C5 14 4 8 4 4c7 0 10 3 8 10ZM12 17c0-6 4-9 8-9 0 6-2 9-8 9Z"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EyeIcon = ({ open }) => open ? (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" />
  </svg>
) : (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.email.value || !form.password.value) {
      setError('Please fill in all fields');
      return;
    }
    window.location.href = '/dashboard';
  }

  return (
    <div className="min-h-screen bg-[#f5f8f5]">
      <div className="min-h-screen lg:grid lg:grid-cols-[1.1fr_0.9fr]">

        {/* ── Left decorative panel (desktop only) ── */}
        <section className="relative hidden overflow-hidden bg-[#0d3d26] lg:flex lg:flex-col lg:justify-between p-14 xl:p-20">
          {/* Background blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-48 -left-32 h-[38rem] w-[38rem] rounded-full bg-[#1a6b3c]/50 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-lime-400/5 blur-3xl" />
          </div>

          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3 text-white">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime-300 text-[#0d3d26] shadow-lg shadow-lime-400/30">
              <HarvestLogo />
            </span>
            <span className="text-2xl font-extrabold tracking-tight">Harvest</span>
          </a>

          {/* Hero text */}
          <div className="relative z-10 max-w-lg">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-lime-200">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-sm shadow-lime-400/60" />
              A better way to manage your journey
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.15] text-white xl:text-6xl">
              Grow with<br />
              <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
                confidence.
              </span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/60">
              Your products, activity, and account tools — thoughtfully brought together in one simple place.
            </p>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[['A','amber'],['M','sky'],['S','rose']].map(([l, c]) => (
                  <span key={l} className={`grid h-10 w-10 place-items-center rounded-full border-2 border-[#0d3d26] bg-${c}-200 text-sm font-bold text-${c}-900`}>{l}</span>
                ))}
              </div>
              <div className="text-white">
                <p className="text-sm font-semibold">Made for your next step</p>
                <p className="text-xs text-white/50">Simple. Clear. Member-first.</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[['3K+','Members'],['99%','Uptime'],['24/7','Support']].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <p className="text-xl font-extrabold text-lime-300">{n}</p>
                  <p className="mt-0.5 text-xs text-white/50">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-xs text-white/30">© 2026 Harvest · Member portal</p>
        </section>

        {/* ── Right form panel ── */}
        <section className="flex min-h-screen flex-col bg-[#f5f8f5]">

          {/* Mobile top banner */}
          <div className="relative overflow-hidden bg-[#0d3d26] px-6 pb-10 pt-8 lg:hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-lime-400/10 blur-2xl" />
            <a href="#" className="relative z-10 flex items-center gap-2.5 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-[#0d3d26]">
                <HarvestLogo />
              </span>
              <span className="text-xl font-extrabold">Harvest</span>
            </a>
            <p className="relative z-10 mt-4 text-2xl font-extrabold text-white">Welcome back 👋</p>
            <p className="relative z-10 mt-1 text-sm text-white/60">Sign in to your Harvest account</p>
          </div>

          {/* Form card */}
          <div className="flex flex-1 items-start justify-center px-4 py-8 sm:px-6 lg:items-center lg:px-10 xl:px-16">
            <div className="w-full max-w-[440px]">

              {/* Desktop heading */}
              <div className="mb-8 hidden lg:block">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">Member portal</p>
                <h2 className="text-3xl font-extrabold text-slate-900">Welcome back</h2>
                <p className="mt-2 text-sm text-slate-500">Sign in to continue to your Harvest dashboard.</p>
              </div>

              {/* Tab switcher */}
              <div className="mb-6 grid grid-cols-2 gap-1 rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
                <span className="rounded-xl bg-[#0d3d26] px-4 py-3 text-center text-sm font-bold text-white shadow-md">
                  Sign In
                </span>
                <Link href="/registration"
                  className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-slate-400 transition hover:text-slate-700">
                  Create Account
                </Link>
              </div>

              {/* Form card */}
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                <form onSubmit={handleLogin} className="space-y-5">

                  {/* Email */}
                  <div className="group">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Email or phone number
                    </label>
                    <input name="email" required autoComplete="username"
                      placeholder="Enter your email or phone"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/15" />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-semibold text-slate-700">Password</label>
                      <button type="button" className="text-xs font-semibold text-emerald-700 hover:underline">
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <input name="password" required autoComplete="current-password"
                        type={showPw ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/15" />
                      <button type="button" onClick={() => setShowPw(p => !p)}
                        className="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 hover:text-slate-600">
                        <EyeIcon open={showPw} />
                      </button>
                    </div>
                  </div>

                  {/* Remember me */}
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                      <input type="checkbox" className="h-4 w-4 rounded accent-emerald-600" />
                      Remember me
                    </label>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Secure access
                    </span>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-600 ring-1 ring-rose-200">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {error}
                    </div>
                  )}

                  <button type="submit"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0d3d26] text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#0a3020] active:scale-[.98]">
                    Sign In
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>

                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-xs text-slate-400">or</span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                <p className="mt-5 text-center text-sm text-slate-500">
                  New to Harvest?{' '}
                  <Link href="/registration" className="font-bold text-emerald-700 hover:underline">
                    Create a free account
                  </Link>
                </p>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                🔒 Your data is encrypted and stays private
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
