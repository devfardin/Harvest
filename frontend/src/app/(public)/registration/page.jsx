'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        // Connect to backend API here
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        // Redirect to dashboard after login
        window.location.href = '/dashboard';
    }

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-6 ">
            <div className="w-full max-w-md">
                <div className="bg-white border rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2.5 mb-4">
                            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-300 to-harvest-700 text-white text-lg grid place-items-center">✦</span>
                            <b className="text-xl">Harvest</b>
                        </div>
                        <h1 className="text-2xl font-extrabold">Welcome back</h1>
                        <p className="text-sm text-slate-500 mt-1">Log in to your account</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-harvest-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-harvest-500"
                            />
                        </div>

                        {error && <p className="text-sm text-rose-600">{error}</p>}

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-harvest-700 text-white font-bold hover:bg-harvest-800 transition-colors"
                        >
                            Log in →
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-600">
                        Don't have an account? <Link href="/login" className="text-harvest-700 font-bold hover:underline">Register here</Link>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-500 mt-6">
                    By logging in, you agree to our <Link href="#" className="hover:text-harvest-700">Terms of Service</Link> and <Link href="#" className="hover:text-harvest-700">Privacy Policy</Link>
                </p>
            </div>
        </div>
    )
}