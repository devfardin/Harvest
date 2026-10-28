'use client';
import { createContext, useContext, useState } from 'react';

// DashboardContext — shared state available to every dashboard page
// Provides: showToast, openModal, closeModal, savedBank, setSavedBank

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  // ── Toast ──────────────────────────────────────────────────────
  const [toastMsg, setToastMsg] = useState('');

  function showToast(msg) {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2600); // auto-hide after 2.6s
  }

  // ── Modal ──────────────────────────────────────────────────────
  const [modal, setModal] = useState({ open: false, tag: '', title: '', body: null });

  function openModal(tag, title, body) {
    setModal({ open: true, tag, title, body });
  }

  function closeModal() {
    setModal(m => ({ ...m, open: false }));
  }

  // ── Saved bank (payout method) ─────────────────────────────────
  // Shared between BankPage and WithdrawPage
  const [savedBank, setSavedBank] = useState(null);

  return (
    <DashboardContext.Provider value={{ showToast, toastMsg, openModal, closeModal, modal, savedBank, setSavedBank }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook — use this in any dashboard page to access shared state
export function useDashboard() {
  return useContext(DashboardContext);
}
