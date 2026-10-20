import React, { useState, useEffect } from 'react';
import { HisenseLogo } from './HisenseLogo';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Phone
} from 'lucide-react';

interface NavbarProps {
  rfqCount: number;
  onOpenRfq: () => void;
  onOpenPresentation?: () => void;
  onNavigateTo3d?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  rfqCount,
  onOpenRfq,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-1.5 shadow-sm'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-2 sm:py-2.5 shadow-2xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left Side: Logo & Clean Nav Links */}
        <div className="flex items-center gap-8 lg:gap-10">
          <a href="#home" className="flex items-center shrink-0">
            <HisenseLogo size="lg" light={false} />
          </a>

          {/* Nav Links clustered close to logo to avoid empty stretched width */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-wider text-slate-800 uppercase">
            <a 
              href="#about" 
              className="text-slate-700 hover:text-cyan-700 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-cyan-600"
            >
              ABOUT US
            </a>
            <a 
              href="#products" 
              className="text-slate-700 hover:text-cyan-700 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-cyan-600"
            >
              PRODUCTS
            </a>
          </nav>
        </div>

        {/* Right Action Island */}
        <div className="hidden sm:flex items-center gap-3 text-xs font-semibold">
          {/* Direct Line */}
          <a
            href="tel:+923218000560"
            className="text-slate-700 hover:text-cyan-700 font-semibold px-2.5 py-1.5 transition flex items-center gap-1.5 text-xs bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200/70"
            title="Call CEO Direct"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-600" />
            <span className="font-mono font-bold tracking-tight">0321-8000560</span>
          </a>

          {/* RFQ / Cart Button */}
          <button
            onClick={onOpenRfq}
            className="relative px-4 py-1.5 sm:py-2 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
            <span>RFQ QUOTE</span>
            {rfqCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-black text-[9px] flex items-center justify-center">
                {rfqCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer border border-slate-200"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2.5 text-sm font-bold uppercase tracking-wider text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-600 transition border-b border-slate-100"
            >
              ABOUT US
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-600 transition"
            >
              PRODUCTS
            </a>
          </div>

          <div className="pt-2.5 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:+923218000560"
              className="w-full py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>Call: 0321-8000560</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-2 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
              <span>View RFQ Cart ({rfqCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
