import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { 
  Search, 
  Sliders, 
  Plus, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProductCatalogProps {
  onLaunch3d: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
  onAddToRfq: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onLaunch3d,
  onAddToRfq,
  onOpenProductDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'ALL PRODUCTS' },
    { id: 'ivf-art', label: 'IVF & ART' },
    { id: 'contraceptive', label: 'CONTRACEPTIVES' },
    { id: 'medical-equipment', label: 'MEDICAL & CSSD' },
    { id: 'dental', label: 'DENTAL & SURGICAL' },
    { id: 'cssd-disposables', label: 'STERILIZATION REELS' },
    { id: 'government-order', label: 'GOVT. ORDERS' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              HISENSE CLINICAL CATALOG &amp; E-COMMERCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
              Specialized Medical Devices &amp; Consumables
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl font-normal">
              Manufactured and supplied under ISO 13485 and ISO 9001:2015 certifications. Pre-tested for Mouse Embryo Assay (MEA) cellular safety and sterile barrier protection.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search catheters, autoclaves, IUDs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0f2a44] text-white font-black shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Product Card Top */}
              <div>
                {/* Image Container with Full Fit & Bigger Size */}
                <div 
                  onClick={() => onOpenProductDetail(product)}
                  className="w-full h-72 sm:h-80 bg-slate-50 flex items-center justify-center p-4 overflow-hidden relative cursor-pointer border-b border-slate-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Subcategory and Stock Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-800 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-full shadow-xs backdrop-blur-md">
                      {product.subcategory}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-cyan-600 text-white shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition backdrop-blur-xs bg-slate-950/20">
                    <span className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-black flex items-center gap-1.5 shadow-xl">
                      <ExternalLink className="w-3.5 h-3.5" /> View Clinical Specs
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-cyan-800 font-mono mb-2">
                    <span className="font-semibold">{product.leadTime}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-emerald-600 font-bold">In Stock</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500">Class I/IIa</span>
                  </div>

                  <h3 
                    onClick={() => onOpenProductDetail(product)}
                    className="text-lg font-bold text-[#0f2a44] group-hover:text-cyan-700 transition cursor-pointer leading-snug line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Certifications line */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    {product.certifications.map((cert, i) => (
                      <span key={i} className="text-[10px] font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full font-medium">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onAddToRfq(product)}
                  className="w-full py-3 px-4 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-black flex items-center justify-center gap-2 transition shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-cyan-400" />
                  <span>Add to RFQ</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
