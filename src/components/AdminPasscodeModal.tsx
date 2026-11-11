import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck, X, KeyRound, AlertCircle } from 'lucide-react';
import { DEFAULT_ADMIN_PIN, setAdminAuthenticated } from '../data/blogData';

interface AdminPasscodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminPasscodeModal: React.FC<AdminPasscodeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Verify passcode against default admin PIN (case-insensitive trim)
    if (passcode.trim().toLowerCase() === DEFAULT_ADMIN_PIN.toLowerCase()) {
      setAdminAuthenticated(true);
      setPasscode('');
      onSuccess();
      onClose();
    } else {
      setError('Invalid master key. Please enter the authorized administrator passcode.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 relative animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-dialog-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Lock Icon Header */}
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4 shadow-xs">
          <KeyRound className="w-6 h-6 text-cyan-700" />
        </div>

        <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-800 mb-1">
          HISENSE INTERNAL CONSOLE
        </div>
        <h3 id="admin-dialog-title" className="text-xl font-black text-[#0f2a44] tracking-tight">
          Editorial Admin Authorization
        </h3>
        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
          Authorized staff access for publishing clinical articles, uploading instrument media, and managing blog entries.
        </p>

        {/* Passcode Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Master Access Passcode
            </label>
            <div className="relative">
              <input
                type={showPasscode ? 'text' : 'password'}
                autoFocus
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter access PIN..."
                className="w-full pl-4 pr-11 py-3 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition shadow-xs"
              />
              <button
                type="button"
                onClick={() => setShowPasscode(!showPasscode)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                aria-label={showPasscode ? 'Hide passcode' : 'Show passcode'}
              >
                {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs animate-in shake">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Hint badge for administrator */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Master Secret Key: </span>
              <span className="font-mono bg-cyan-100/70 text-cyan-900 px-1.5 py-0.5 rounded font-bold">{DEFAULT_ADMIN_PIN}</span>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Shortcut: <kbd className="px-1 py-0.5 bg-white border border-slate-300 rounded font-mono text-[9px]">Ctrl+Shift+A</kbd> or <kbd className="px-1 py-0.5 bg-white border border-slate-300 rounded font-mono text-[9px]">Ctrl+Alt+B</kbd>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Unlock Console</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
