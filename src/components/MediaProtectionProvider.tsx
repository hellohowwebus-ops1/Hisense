import React, { useEffect, useState } from 'react';
import { ShieldAlert, Lock } from 'lucide-react';

interface MediaProtectionProps {
  children: React.ReactNode;
}

export const MediaProtectionProvider: React.FC<MediaProtectionProps> = ({ children }) => {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [isWindowBlurred, setIsWindowBlurred] = useState<boolean>(false);

  const showSecurityNotice = (message: string) => {
    setWarningMessage(message);
    window.clearTimeout((window as any).__noticeTimer);
    (window as any).__noticeTimer = window.setTimeout(() => {
      setWarningMessage(null);
    }, 2400);
  };

  useEffect(() => {
    // 1. Prevent Right-Click Context Menu (Save Image As, Inspect, Copy Image Address)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showSecurityNotice('Right-click & image saving are disabled for proprietary Hisense assets.');
      return false;
    };

    // 2. Prevent Dragging Media to Desktop or another tab
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      showSecurityNotice('Direct image dragging and downloading are restricted.');
      return false;
    };

    // 3. Prevent Screenshot & Save Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        e.preventDefault();
        try {
          navigator.clipboard.writeText('');
        } catch {
          // ignore if clipboard permission denied
        }
        showSecurityNotice('Screenshots are restricted on this portal.');
        return;
      }

      // Check Ctrl / Cmd modifier
      const isModifier = e.ctrlKey || e.metaKey;

      if (isModifier) {
        // Ctrl+S / Cmd+S (Save webpage complete)
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          showSecurityNotice('Saving page assets is disabled.');
          return;
        }

        // Ctrl+P / Cmd+P (Print page / Save as PDF)
        if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          showSecurityNotice('Printing and export to PDF are restricted.');
          return;
        }

        // Ctrl+U / Cmd+U (View Page Source)
        if (e.key === 'u' || e.key === 'U') {
          e.preventDefault();
          showSecurityNotice('Source inspection is restricted.');
          return;
        }

        // Ctrl+Shift+I / Cmd+Option+I / F12 (DevTools / Inspect)
        if (
          e.key === 'I' || 
          e.key === 'i' || 
          e.key === 'J' || 
          e.key === 'j' || 
          e.key === 'C' || 
          e.key === 'c'
        ) {
          if (e.shiftKey) {
            e.preventDefault();
            showSecurityNotice('Developer tools access is restricted.');
            return;
          }
        }

        // Ctrl+Shift+S (Browser Screenshot Tools in Edge/Firefox)
        if (e.shiftKey && (e.key === 's' || e.key === 'S')) {
          e.preventDefault();
          showSecurityNotice('Web capture is restricted.');
          return;
        }
      }

      // F12 key
      if (e.key === 'F12') {
        e.preventDefault();
        showSecurityNotice('Developer tools are disabled.');
        return;
      }
    };

    // 4. Clear Clipboard on PrintScreen key release
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        try {
          navigator.clipboard.writeText('');
        } catch {
          // ignore
        }
        showSecurityNotice('Screenshots are restricted on this portal.');
      }
    };

    // 5. Snipping Tool & Screen Capture Detection (Detect window blur when snipper opens)
    const handleWindowBlur = () => {
      setIsWindowBlurred(true);
    };

    const handleWindowFocus = () => {
      setIsWindowBlurred(false);
    };

    // Attach global listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  return (
    <>
      {children}

      {/* Snipping Tool Shield (Activates when screen capture utility steals window focus) */}
      {isWindowBlurred && (
        <div className="fixed inset-0 z-[9999] pointer-events-none backdrop-blur-xl bg-slate-950/80 flex items-center justify-center transition-all duration-150 animate-in fade-in">
          <div className="bg-[#0f2a44] border-2 border-cyan-500/50 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md text-center">
            <Lock className="w-8 h-8 text-cyan-400 shrink-0" />
            <div className="text-left">
              <div className="font-bold text-sm text-cyan-200">Protected Clinical Media</div>
              <div className="text-xs text-slate-300 mt-0.5">
                Screen capture &amp; recording are restricted for Hisense International proprietary assets.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Security Toast when download or screenshot is attempted */}
      {warningMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] animate-in fade-in slide-in-from-bottom-3 duration-200 pointer-events-none">
          <div className="bg-slate-950/95 border border-cyan-500/60 text-white px-5 py-3 rounded-full shadow-2xl backdrop-blur-xl flex items-center gap-3 text-xs font-semibold">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-slate-100">{warningMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};
