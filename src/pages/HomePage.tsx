import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { CorporateReliabilityTicker } from '../components/CorporateReliabilityTicker';
import { ProductCatalog } from '../components/ProductCatalog';
import { ContraceptiveShowcaseSection } from '../components/ContraceptiveShowcaseSection';
import { ThreeDShowcase } from '../components/ThreeDShowcase';
import { BrandPostsSection } from '../components/BrandPostsSection';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';
import { 
  Sparkles, 
  Microscope, 
  Activity, 
  ShieldCheck, 
  Truck,
  ArrowRight,
  Building2,
  Phone,
  Wrench
} from 'lucide-react';

interface HomePageProps {
  onOpen3d: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
  onOpenVideoModal: (title: string, category: string) => void;
  onOpenRfq: () => void;
  onAddToRfq: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
  onOpenProductPage?: (product: Product) => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
  onNavigateServices?: () => void;
  onNavigateBlog?: () => void;
  onNavigateProducts?: (category?: string) => void;
  active3dModel: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t';
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpen3d,
  onOpenVideoModal,
  onOpenRfq,
  onAddToRfq,
  onOpenProductDetail,
  onOpenProductPage,
  onNavigateAbout,
  onNavigateContact,
  onNavigateServices,
  onNavigateBlog,
  onNavigateProducts,
  active3dModel,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <main id="home" className="flex-1 scroll-smooth">
      
      {/* 1. Hero Section on Dynamic Cleanroom Background */}
      <HeroSlider
        onOpen3dModel={onOpen3d}
        onOpenVideoModal={onOpenVideoModal}
        onOpenRfqModal={onOpenRfq}
      />

      {/* Dual Continuous Reliability & International Standards Sliding Tickers */}
      <CorporateReliabilityTicker />

      {/* 2. Specialized Medical Devices & Consumables Catalog (Compact 6-Item Paginated View) */}
      <ProductCatalog
        onLaunch3d={onOpen3d}
        onAddToRfq={onAddToRfq}
        onOpenProductDetail={onOpenProductDetail}
        onOpenProductPage={onOpenProductPage}
        onNavigateToProductsPage={onNavigateProducts}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        isCompactHome={true}
      />

      {/* 3. DEDICATED CONTRACEPTIVE SECTION 01: WHO-Spec Copper T 380A & PPIUCD System with Video & 3D */}
      <ContraceptiveShowcaseSection
        onOpen3d={onOpen3d}
        onOpenVideoModal={onOpenVideoModal}
        onOpenRfq={onOpenRfq}
        onAddToRfq={onAddToRfq}
        onNavigateAbout={onNavigateAbout}
        onOpenProductPage={onOpenProductPage}
        onNavigateProducts={() => onNavigateProducts && onNavigateProducts('contraceptive-range')}
      />

      {/* 4. Interactive 3D Medical Device & VFX Studio */}
      <div className="relative bg-slate-50 text-slate-900 border-b border-slate-200" id="3d-demo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-800 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-spin" style={{ animationDuration: '8s' }} />
            HISENSE 3D PRODUCT DEMONSTRATION &amp; VFX LAB
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
            Sub-Micron Precision &amp; Device Functionality
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mt-2">
            Experience 360° product motion, inspect exploded slow-motion assemblies, switch to clinical X-Ray mode, and examine device engineering precision.
          </p>
        </div>

        <ThreeDShowcase
          initialModel={active3dModel}
          onSelectProductForRfq={(modelKey) => {
            const matched = PRODUCTS.find((p) => p.model3dKey === modelKey) || PRODUCTS[0];
            onAddToRfq(matched);
          }}
        />
      </div>


      {/* 4. Clinical Functionality & Quality Assurance Pillars (Dark Theme matching #0f2a44) */}
      <section className="py-24 bg-[#0f2a44] text-white border-b border-cyan-950/80 relative overflow-hidden">
        {/* Subtle decorative glow accents in background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ENGINEERING RIGOR &amp; VALIDATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Pioneering Healthcare Standards in Pakistan
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Cleanroom manufacturing, certified toxicity-free polymers, and institutional quality governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Dedicated Image Showcase Slot */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#081522] flex-1 min-h-[340px] group">
                <img
                  src="/assets/images/home/validation.jpg"
                  alt="Hisense Engineering Rigor & Validation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081522] via-[#0f2a44]/50 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider mb-2.5 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Medical Validation Lab</span>
                  </div>
                  <h4 className="text-lg font-black leading-tight text-white">
                    DRAP &amp; ISO 13485 Manufacturing Facility
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    Particulate-controlled cleanroom environments ensuring medical sterility across Pakistan.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Validation Pillar Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-6 rounded-3xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Microscope className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    Class 10,000 Cleanroom
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Manufactured under particulate-controlled cleanroom environments with zero pyrogens and endotoxin &lt; 0.05 EU/device.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                  <span>✓</span>
                  <span>ISO 14644-1 Air Purity Validated</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-blue-400/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Activity className="w-6 h-6 text-blue-300" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    Ultrasound Echogenicity
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Tip micro-bead texturing engineered for maximum acoustic reflection under 2D/3D/4D ultrasound, ensuring safe embryo transfer.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                  <span>✓</span>
                  <span>100% Acoustic Visibility Checked</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-emerald-400/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    MEA Biocompatibility
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    1-cell Mouse Embryo Assay validated with &gt; 80% blastocyst development rates, preventing cellular toxicity during in-vitro handling.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
                  <span>✓</span>
                  <span>Non-Embryotoxic Batch Verified</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-amber-400/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Truck className="w-6 h-6 text-amber-300" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    24–48h Rapid Dispatch
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Central Multan Road warehouse in Lahore maintains standing reserve inventory for rapid delivery to teaching hospitals nationwide.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-amber-300">
                  <span>✓</span>
                  <span>Standing Reserve in Lahore Depot</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Hisense Corporate Brand Insights & Media Posts */}
      <BrandPostsSection onNavigateBlog={onNavigateBlog} />

      {/* 6. Dedicated Page Teasers (About Us, Services & Contact Us) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* About Us Teaser */}
            <div 
              onClick={onNavigateAbout}
              className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-700 font-mono text-xs font-bold uppercase mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 group-hover:bg-[#0f2a44] group-hover:text-white transition-colors duration-300">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span>CORPORATE HERITAGE</span>
                </div>
                <h3 className="text-xl font-black text-[#0f2a44] group-hover:text-cyan-700 transition uppercase tracking-tight">
                  About Hisense International
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Established in 2010 under the executive leadership of CEO Mr. Hafiz Asif Ali. Discover our ISO 13485 cleanroom facilities and nationwide hospital procurement track record.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-cyan-700 group-hover:text-cyan-900 flex items-center gap-1.5 transition">
                  <span>Company Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-slate-400">ESTD. 2010</span>
              </div>
            </div>

            {/* Services Teaser */}
            <div 
              onClick={onNavigateServices ? onNavigateServices : onNavigateAbout}
              className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-700 font-mono text-xs font-bold uppercase mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 group-hover:bg-[#0f2a44] group-hover:text-white transition-colors duration-300">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span>HEALTHCARE ENGINEERING</span>
                </div>
                <h3 className="text-xl font-black text-[#0f2a44] group-hover:text-cyan-700 transition uppercase tracking-tight">
                  Specialized Services
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Turnkey hospital &amp; OT setup, cleanroom IVF lab commissioning, CSSD autoclave maintenance, biomedical calibration &amp; 24–48h cold chain logistics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-cyan-700 group-hover:text-cyan-900 flex items-center gap-1.5 transition">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-slate-400">6 DIVISIONS</span>
              </div>
            </div>

            {/* Contact Us Teaser */}
            <div 
              onClick={onNavigateContact}
              className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-700 font-mono text-xs font-bold uppercase mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 group-hover:bg-[#0f2a44] group-hover:text-white transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>CLIENT RELATIONS &amp; TENDERS</span>
                </div>
                <h3 className="text-xl font-black text-[#0f2a44] group-hover:text-cyan-700 transition uppercase tracking-tight">
                  Headquarters &amp; Inquiries
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Connect with our Lahore Multan Road central hub. Speak directly with CEO Mr. Hafiz Asif Ali, request sample evaluation, or submit government tender dossiers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-cyan-700 group-hover:text-cyan-900 flex items-center gap-1.5 transition">
                  <span>Contact Desk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] font-mono text-slate-400">LAHORE HUB</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
