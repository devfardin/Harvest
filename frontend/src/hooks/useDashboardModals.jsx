'use client';
import { useRouter } from 'next/navigation';
import { useDashboard } from '@/context/DashboardContext';

// useProductModal — returns openProduct(name, price, cat) function
// Use this in any dashboard page that needs to open a product detail modal
export function useProductModal() {
  const router = useRouter();
  const { openModal, closeModal, showToast } = useDashboard();

  function openProduct(name, price, cat) {
    openModal('PRODUCT DETAILS', name, (
      <div>
        <div className="h-32 rounded-2xl bg-gradient-to-br from-lime-100 to-harvest-200 grid place-items-center text-6xl mb-4">🌿</div>
        <span className="bg-harvest-50 text-harvest-700 px-3 py-1.5 rounded-lg text-xs font-bold">{cat}</span>
        <p className="text-sm leading-6 text-slate-600 mt-4">Review the product type, underlying business activity, terms, eligibility and risks before deciding to participate.</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Product price</small><b className="block text-lg mt-1">৳{price.toLocaleString()}</b></div>
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Points</small><b className="block text-lg mt-1">{price / 10} pts</b></div>
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Contract days</small><b className="block mt-1">30 days</b></div>
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Daily income</small><b className="block mt-1">Subject to terms</b></div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4">
          <b className="text-sm">Source of profit</b>
          <p className="text-xs leading-5 mt-1">Returns are not guaranteed. Review all terms before participating.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Team commission B</small><b className="block text-sm mt-1">Terms apply</b></div>
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Team commission C</small><b className="block text-sm mt-1">Terms apply</b></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          <button onClick={() => { closeModal(); router.push('/dashboard/recharge'); }} className="border rounded-xl py-3 text-sm font-bold">＋ Recharge wallet</button>
          <button onClick={() => { closeModal(); showToast('Connect the backend purchase API to complete this action.'); }} className="bg-harvest-700 text-white rounded-xl py-3 text-sm font-extrabold">Join now →</button>
        </div>
      </div>
    ));
  }

  return openProduct;
}

// useTaskModal — returns openTask(name) function
// Use this in any dashboard page that needs to open a task detail modal
export function useTaskModal() {
  const { openModal, closeModal, showToast } = useDashboard();

  const TASKS = {
    'Share our announcement': { emoji: '📣', reward: '৳20', desc: 'Share an approved public announcement through your own social account. Avoid spam and do not make unsupported claims.', claim: 'Open the official announcement, share it with a short note, then submit the post link for review.' },
    'Complete your profile':  { emoji: '📝', reward: '৳30', desc: 'Review your contact information and keep your profile accurate.',                                                        claim: 'Visit the profile page, complete required fields and submit the task for review.' },
    'Read the safety guide':  { emoji: '📚', reward: '৳15', desc: 'Read the platform guide covering account security, product terms and financial risk.',                                   claim: 'Read the safety guide, then submit the task for review.' },
  };

  function openTask(name) {
    const t = TASKS[name] || TASKS['Share our announcement'];
    openModal('TASK BONUS', name, (
      <div>
        <div className="h-28 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-200 grid place-items-center text-6xl mb-4">{t.emoji}</div>
        <p className="text-sm text-slate-600 leading-6">{t.desc}</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Task reward</small><b className="block text-xl text-harvest-700 mt-1">{t.reward}</b></div>
          <div className="border rounded-xl p-3"><small className="text-xs text-slate-500">Status</small><b className="block mt-2">Available</b></div>
        </div>
        <b className="block text-sm mt-5">How to claim</b>
        <p className="text-sm text-slate-500 leading-6 mt-1">{t.claim}</p>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4">
          <b className="text-sm">Special note</b>
          <p className="text-xs leading-5 mt-1">Rewards are subject to eligibility and review. Never share private account information.</p>
        </div>
        <button onClick={() => { closeModal(); showToast('Task submissions will be connected to the backend.'); }} className="mt-5 w-full bg-harvest-700 text-white rounded-xl py-3 font-bold">
          Submit task for review →
        </button>
      </div>
    ));
  }

  return openTask;
}
