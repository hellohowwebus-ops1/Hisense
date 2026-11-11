import React, { useState, useEffect, useRef } from 'react';
import { HisenseLogo } from './HisenseLogo';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Phone,
  ChevronDown,
  ArrowRight,
  Scissors,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export type AppPage = 'home' | 'about' | 'services' | 'blog' | 'contact' | 'product-detail' | 'products';

export interface ProductMenuCategory {
  id: string;
  name: string;
  articleRange: string;
  desc: string;
  badge: string;
  zip: string;
}

export const PRODUCT_MENU_CATEGORIES: ProductMenuCategory[] = [
  {
    id: 'surgical-instruments',
    name: 'Surgical Instruments',
    articleRange: 'Hisense 1001 – 1705',
    desc: 'Operating scissors, hemostats, forceps, retractors & scalpels',
    badge: 'AISI 420 Surgical',
    zip: '/downloads/Hisense-Surgical-Instruments.zip',
  },
  {
    id: 'contraceptive-range',
    name: 'Contraceptive Range',
    articleRange: 'Hisense 5001 – 5018',
    desc: 'WHO Copper-T 380A, Mirena, Jadelle, Famila, Norifam & MVA sets',
    badge: 'DRAP & WHO Spec',
    zip: '/downloads/Hisense-Contraceptive-Range.zip',
  },
  {
    id: 'dental-instruments',
    name: 'Dental Instruments',
    articleRange: 'Hisense 2001 – 2010',
    desc: 'Extraction forceps, root elevators, aspirating syringes & wax carvers',
    badge: 'ISO 7153-1 Dental',
    zip: '/downloads/Hisense-Dental-Instruments.zip',
  },
  {
    id: 'beauty-nail-care',
    name: 'Beauty & Nail Care',
    articleRange: 'Hisense 3001 – 3010',
    desc: 'Corner nippers, cuticle trimmers, Russian manicure scissors & pliers',
    badge: 'Podiatry & Salon',
    zip: '/downloads/Hisense-Beauty-Nail-Care.zip',
  },
  {
    id: 'barber-salon-shears',
    name: 'Barber & Salon Hair Shears',
    articleRange: 'Hisense 4001 – 4010',
    desc: 'Master shears, 30-tooth thinning scissors, titanium rainbow & wooden sets',
    badge: 'Japanese 440C',
    zip: '/downloads/Hisense-Barber-Salon-Shears.zip',
  },
];

interface NavbarProps {
  rfqCount: number;
  onOpenRfq: () => void;
  currentPage: AppPage;
  onNavigate: (page: AppPage, targetSectionId?: string) => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  rfqCount,
  onOpenRfq,
  currentPage,
  onNavigate,
  onSelectCategory,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: AppPage, targetSectionId?: string) => {
    onNavigate(page, targetSectionId);
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
  };

  const handleCategoryClick = (catId: string, directToProductsPage = false) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    if (directToProductsPage) {
      handleNavClick('products');
    } else {
      handleNavClick('home', 'products');
    }
    setProductDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-1.5 shadow-sm'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-2 sm:py-2.5 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Side: Logo & Clean Nav Links */}
        <div className="flex items-center gap-7 lg:gap-10">
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center shrink-0 cursor-pointer text-left"
            aria-label="Hisense Home"
          >
            <HisenseLogo size="lg" light={false} />
          </button>

          {/* Nav Links clustered close to logo */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-bold tracking-wider text-slate-800 uppercase">
            
            {/* HOME */}
            <button 
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap py-1 border-b-2 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-cyan-700 border-cyan-600 font-black'
                  : 'text-slate-700 hover:text-cyan-700 border-transparent hover:border-cyan-600'
              }`}
            >
              HOME
            </button>

            {/* ABOUT US (Dedicated Page) */}
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-colors whitespace-nowrap py-1 border-b-2 cursor-pointer ${
                currentPage === 'about'
                  ? 'text-cyan-700 border-cyan-600 font-black'
                  : 'text-slate-700 hover:text-cyan-700 border-transparent hover:border-cyan-600'
              }`}
            >
              ABOUT US
            </button>

            {/* SERVICES (Dedicated Page) */}
            <button 
              onClick={() => handleNavClick('services')}
              className={`transition-colors whitespace-nowrap py-1 border-b-2 cursor-pointer ${
                currentPage === 'services'
                  ? 'text-cyan-700 border-cyan-600 font-black'
                  : 'text-slate-700 hover:text-cyan-700 border-transparent hover:border-cyan-600'
              }`}
            >
              SERVICES
            </button>

            {/* PRODUCTS WITH MEGA DROPDOWN MENU */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => handleNavClick('products')}
                className={`transition-colors whitespace-nowrap py-1 border-b-2 flex items-center gap-1 cursor-pointer ${
                  currentPage === 'products' || currentPage === 'product-detail' || productDropdownOpen
                    ? 'text-cyan-700 border-cyan-600 font-black'
                    : 'text-slate-700 hover:text-cyan-700 border-transparent hover:border-cyan-600'
                }`}
                aria-expanded={productDropdownOpen}
              >
                <span>PRODUCTS</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-cyan-600' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown Card */}
              {productDropdownOpen && (
                <div 
                  className="absolute top-full left-0 sm:-left-24 w-[640px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                    <div>
                      <div className="text-[10px] font-mono font-bold tracking-widest text-cyan-800 uppercase flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5 text-cyan-600" />
                        HISENSE 5 CORE PRODUCT DIVISIONS
                      </div>
                      <div className="text-sm font-black text-[#0f2a44] tracking-tight">
                        Contraceptive, Surgical, Dental, Beauty &amp; Barber Salon Instruments
                      </div>
                    </div>
                  </div>

                  {/* 2-Column Categories Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {PRODUCT_MENU_CATEGORIES.map((cat) => (
                      <div
                        key={cat.id}
                        className="p-3 rounded-xl text-left bg-slate-50/70 hover:bg-slate-100/90 transition border border-slate-200/80 hover:border-cyan-400 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <button
                              onClick={() => handleCategoryClick(cat.id, true)}
                              className="text-xs font-black text-slate-900 group-hover:text-cyan-700 transition cursor-pointer text-left"
                            >
                              {cat.name}
                            </button>
                            <span className="text-[9px] font-mono text-cyan-800 bg-cyan-100/80 border border-cyan-200 px-1.5 py-0.5 rounded-full font-bold">
                              {cat.articleRange}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5 font-normal">
                            {cat.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-200/60 text-[10px]">
                          <span className="font-mono text-slate-400">{cat.badge}</span>
                          <button
                            onClick={() => handleCategoryClick(cat.id, true)}
                            className="text-cyan-700 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                          >
                            <span>Explore Category</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dedicated Contraceptive & Family Planning Quick Link */}
                  <div className="mt-2.5 p-2.5 rounded-xl bg-linear-to-r from-cyan-900/10 to-teal-900/10 border border-cyan-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                      <span className="text-xs font-black text-[#0f2a44]">Contraceptives &amp; Family Planning</span>
                      <span className="text-[10px] font-mono text-cyan-800 bg-cyan-100 px-1.5 py-0.5 rounded font-bold">Cu-T 380A • DMPA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleNavClick('home', 'contraceptive-range')}
                        className="text-[11px] font-bold text-cyan-700 hover:text-cyan-900 cursor-pointer flex items-center gap-0.5"
                      >
                        <span>Copper T 380A</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        onClick={() => handleNavClick('home', 'family-planning-programs')}
                        className="text-[11px] font-bold text-cyan-700 hover:text-cyan-900 cursor-pointer flex items-center gap-0.5"
                      >
                        <span>Public Health</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl">
                    <span className="text-[11px] text-slate-500">
                      Standard ISO 13485 &amp; DRAP batch traceable products
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCategoryClick('all', false)}
                        className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-[#0f2a44] text-xs font-bold border border-slate-200 transition cursor-pointer"
                      >
                        Home Showcase
                      </button>
                      <button
                        onClick={() => handleCategoryClick('all', true)}
                        className="px-4 py-1.5 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                      >
                        <span>Full Catalog Page</span>
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BLOG (Dedicated Page) */}
            <button 
              onClick={() => handleNavClick('blog')}
              className={`transition-colors whitespace-nowrap py-1 border-b-2 cursor-pointer ${
                currentPage === 'blog'
                  ? 'text-cyan-700 border-cyan-600 font-black'
                  : 'text-slate-700 hover:text-cyan-700 border-transparent hover:border-cyan-600'
              }`}
            >
              BLOG
            </button>

            {/* CONTACT US (Dedicated Page) */}
            <button 
              onClick={() => handleNavClick('contact')}
              className={`transition-colors whitespace-nowrap py-1 border-b-2 cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-cyan-700 border-cyan-600 font-black'
                  : 'text-slate-700 hover:text-cyan-700 border-transparent hover:border-cyan-600'
              }`}
            >
              CONTACT US
            </button>

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
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl space-y-3 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2 text-sm font-bold uppercase tracking-wider text-slate-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-1.5 transition border-b border-slate-100 ${
                currentPage === 'home' ? 'text-cyan-700 font-black' : 'hover:text-cyan-600'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-1.5 transition border-b border-slate-100 ${
                currentPage === 'about' ? 'text-cyan-700 font-black' : 'hover:text-cyan-600'
              }`}
            >
              ABOUT US
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-1.5 transition border-b border-slate-100 ${
                currentPage === 'services' ? 'text-cyan-700 font-black' : 'hover:text-cyan-600'
              }`}
            >
              SERVICES
            </button>

            {/* Mobile Products Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                className="w-full flex items-center justify-between text-left py-1.5 text-cyan-800 font-black cursor-pointer"
              >
                <span>PRODUCT CATEGORIES (4 DIVISIONS)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsExpanded ? 'rotate-180' : ''}`} />
              </button>

              {mobileProductsExpanded && (
                <div className="grid grid-cols-1 gap-1.5 pt-2 pl-2">
                  <button
                    onClick={() => handleCategoryClick('all')}
                    className="text-left py-1.5 px-2.5 rounded-lg bg-cyan-50 text-cyan-900 font-bold text-xs cursor-pointer flex items-center justify-between"
                  >
                    <span>★ View All Products</span>
                    <span className="text-[10px] font-mono text-cyan-700 bg-white px-1.5 py-0.5 rounded">All Lines</span>
                  </button>
                  {PRODUCT_MENU_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="text-left py-1.5 px-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <div>{cat.name}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{cat.badge}</div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-800 bg-cyan-50 px-1.5 py-0.5 rounded font-bold">
                        {cat.articleRange}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('blog')}
              className={`text-left py-1.5 transition border-b border-slate-100 ${
                currentPage === 'blog' ? 'text-cyan-700 font-black' : 'hover:text-cyan-600'
              }`}
            >
              BLOG &amp; INSIGHTS
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-1.5 transition ${
                currentPage === 'contact' ? 'text-cyan-700 font-black' : 'hover:text-cyan-600'
              }`}
            >
              CONTACT US
            </button>
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
