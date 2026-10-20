/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { ThreeDShowcase } from './components/ThreeDShowcase';
import { CorporateReliabilityTicker } from './components/CorporateReliabilityTicker';
import { ProductCatalog } from './components/ProductCatalog';
import { BrandPostsSection } from './components/BrandPostsSection';
import { AboutCompany } from './components/AboutCompany';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PresentationMode } from './components/PresentationMode';
import { RfqBuilderModal } from './components/RfqBuilderModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product, RfqItem } from './types';
import { PRODUCTS, COMPANY_DETAILS } from './data/mockData';
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Microscope, 
  CheckCircle2, 
  Truck,
  ArrowRight,
  Sliders,
  Award,
  Layers,
  HeartHandshake
} from 'lucide-react';

export default function App() {
  // RFQ Cart State
  const [rfqItems, setRfqItems] = useState<RfqItem[]>([
    { product: PRODUCTS[0], quantity: 100 },
    { product: PRODUCTS[5], quantity: 50 },
  ]);

  // Modal States
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [videoModalData, setVideoModalData] = useState<{ isOpen: boolean; title: string; category: string }>({
    isOpen: false,
    title: '',
    category: '',
  });

  // 3D Showcase Target Model
  const [active3dModel, setActive3dModel] = useState<'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t'>('catheter');

  // RFQ Handlers
  const handleAddToRfq = (product: Product) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 50 } : item
        );
      }
      return [...prev, { product, quantity: 50 }];
    });
    setIsRfqOpen(true);
  };

  const handleUpdateQuantity = (productId: string, qty: number) => {
    setRfqItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: Math.max(1, qty) } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearAll = () => {
    setRfqItems([]);
  };

  const handleAddItemById = (productId: string) => {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (p) handleAddToRfq(p);
  };

  // 3D Jump Handler
  const handleOpen3d = (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => {
    setActive3dModel(modelKey);
    const element = document.getElementById('3d-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Video Modal Trigger
  const handleOpenVideoModal = (title: string, category: string) => {
    setVideoModalData({ isOpen: true, title, category });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-cyan-600 selection:text-white">
      
      {/* Navigation in Crisp White Medical Styling */}
      <Navbar
        rfqCount={rfqItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenRfq={() => setIsRfqOpen(true)}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onNavigateTo3d={() => handleOpen3d(active3dModel)}
      />

      {/* Main Content Sections */}
      <main id="home" className="flex-1">
        
        {/* 1. Hero Section on Pure White Background */}
        <HeroSlider
          onOpen3dModel={handleOpen3d}
          onOpenVideoModal={handleOpenVideoModal}
          onOpenRfqModal={() => setIsRfqOpen(true)}
        />

        {/* Dual Continuous Reliability & International Standards Sliding Tickers (Right below Hero, above Catalog) */}
        <CorporateReliabilityTicker />

        {/* 2. Specialized Medical Devices & Consumables Catalog */}
        <ProductCatalog
          onLaunch3d={handleOpen3d}
          onAddToRfq={handleAddToRfq}
          onOpenProductDetail={(prod) => setSelectedProductDetail(prod)}
        />

        {/* 3. Interactive 3D Medical Device & VFX Studio */}
        <div className="relative bg-slate-50 text-slate-900 border-b border-slate-200" id="3d-demo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              HISENSE 3D PRODUCT DEMONSTRATION &amp; VFX LAB
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
              Sub-Micron Precision &amp; Device Functionality
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mt-2">
              Rotate in 360°, inspect exploded assemblies, switch to Holographic X-Ray mode, or view clinical engineering tolerances in real-time WebGL.
            </p>
          </div>

          <ThreeDShowcase
            initialModel={active3dModel}
            onSelectProductForRfq={(modelKey) => {
              const matched = PRODUCTS.find((p) => p.model3dKey === modelKey) || PRODUCTS[0];
              handleAddToRfq(matched);
            }}
          />
        </div>

        {/* 4. Clinical Functionality & Quality Assurance Pillars */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-1">
                ENGINEERING RIGOR &amp; VALIDATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
                Pioneering Healthcare Standards in Pakistan
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-cyan-500 transition">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-cyan-700" />
                </div>
                <h4 className="text-base font-bold text-[#0f2a44] mb-2">Class 10,000 Cleanroom</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Manufactured under particulate-controlled cleanroom environments with zero pyrogens and endotoxin &lt; 0.05 EU/device.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-cyan-500 transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-blue-700" />
                </div>
                <h4 className="text-base font-bold text-[#0f2a44] mb-2">Ultrasound Echogenicity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tip micro-bead texturing engineered for maximum acoustic reflection under 2D/3D/4D ultrasound, ensuring safe embryo transfer.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-cyan-500 transition">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <h4 className="text-base font-bold text-[#0f2a44] mb-2">MEA Biocompatibility</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  1-cell Mouse Embryo Assay validated with &gt; 80% blastocyst development rates, preventing cellular toxicity during in-vitro handling.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-cyan-500 transition">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-amber-700" />
                </div>
                <h4 className="text-base font-bold text-[#0f2a44] mb-2">24–48h Rapid Dispatch</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Central Multan Road warehouse in Lahore maintains standing reserve inventory for rapid delivery to teaching hospitals nationwide.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Hisense Corporate Brand Insights & Media Posts */}
        <BrandPostsSection />

        {/* 6. Company Heritage, Executive Card & Leadership */}
        <AboutCompany onOpenRfq={() => setIsRfqOpen(true)} />

        {/* 7. Contact Headquarters & Direct Lines */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        onClose={() => setVideoModalData({ isOpen: false, title: '', category: '' })}
        title={videoModalData.title}
        category={videoModalData.category}
      />

      <PresentationMode
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        onOpen3d={handleOpen3d}
      />

      <RfqBuilderModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        rfqItems={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
        onAddItem={handleAddItemById}
      />

      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onLaunch3d={handleOpen3d}
        onAddToRfq={handleAddToRfq}
      />

    </div>
  );
}
