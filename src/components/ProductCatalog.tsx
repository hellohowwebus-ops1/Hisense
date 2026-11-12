import React, { useState, useEffect } from 'react';
import { PRODUCTS, MIXED_PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { 
  Search, 
  Sliders, 
  Plus, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  ListFilter
} from 'lucide-react';

interface ProductCatalogProps {
  onLaunch3d: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
  onAddToRfq: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
  onOpenProductPage?: (product: Product) => void;
  onNavigateToProductsPage?: () => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  isCompactHome?: boolean;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onLaunch3d,
  onAddToRfq,
  onOpenProductDetail,
  onOpenProductPage,
  onNavigateToProductsPage,
  selectedCategory: propCategory,
  onCategoryChange,
  isCompactHome = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(propCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(isCompactHome ? 8 : 16);

  useEffect(() => {
    if (propCategory && propCategory !== selectedCategory) {
      setSelectedCategory(propCategory);
    }
  }, [propCategory]);

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, itemsPerPage]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
  };

  const categories = [
    { id: 'all', label: 'ALL PRODUCTS (97)', zip: '/downloads/Hisense-Complete-Catalog.zip' },
    { id: 'surgical-instruments', label: 'SURGICAL INSTRUMENTS (49)', zip: '/downloads/Hisense-Surgical-Instruments.zip' },
    { id: 'contraceptive-range', label: 'CONTRACEPTIVE RANGE (18)', zip: '/downloads/Hisense-Contraceptive-Range.zip' },
    { id: 'dental-instruments', label: 'DENTAL INSTRUMENTS (10)', zip: '/downloads/Hisense-Dental-Instruments.zip' },
    { id: 'beauty-nail-care', label: 'BEAUTY & NAIL CARE (10)', zip: '/downloads/Hisense-Beauty-Nail-Care.zip' },
    { id: 'barber-salon-shears', label: 'BARBER & SALON HAIR SHEARS (10)', zip: '/downloads/Hisense-Barber-Salon-Shears.zip' },
  ];

  const currentCategoryObj = categories.find((c) => c.id === selectedCategory) || categories[0];

  // In 'all' view, use the balanced interleaved MIXED_PRODUCTS so the home page presents a diverse mix of all 5 divisions
  // When a specific category is clicked, use PRODUCTS to display that category's instruments in clean sequence
  const sourceProducts = selectedCategory === 'all' ? MIXED_PRODUCTS : PRODUCTS;

  const filteredProducts = sourceProducts.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.articleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Calculate pagination
  const totalItems = filteredProducts.length;
  const isAllSelected = itemsPerPage === 9999;
  const actualItemsPerPage = isAllSelected ? (totalItems || 1) : itemsPerPage;
  const totalPages = Math.ceil(totalItems / actualItemsPerPage) || 1;
  const validCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (validCurrentPage - 1) * actualItemsPerPage;
  const endIndex = Math.min(startIndex + actualItemsPerPage, totalItems);
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    const targetPage = Math.min(Math.max(newPage, 1), totalPages);
    setCurrentPage(targetPage);
    const gridTop = document.getElementById('products-grid-top');
    if (gridTop) {
      gridTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate pagination numbers array
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    pages.push(1);
    if (validCurrentPage > 3) {
      pages.push('...');
    }
    const start = Math.max(2, validCurrentPage - 1);
    const end = Math.min(totalPages - 1, validCurrentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (validCurrentPage < totalPages - 2) {
      pages.push('...');
    }
    pages.push(totalPages);
    return pages;
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Fast Jump */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-full">
                HISENSE 5 CORE MANUFACTURING &amp; SUPPLY LINES
              </span>
              <span className="text-xs font-mono text-slate-500">
                • {totalItems} Certified Instruments
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
              Instruments &amp; Precision Tools
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-3xl font-normal">
              Organized into 5 specialized divisions: <strong className="text-slate-800">Contraceptive Range</strong>, <strong className="text-slate-800">Surgical Instruments</strong>, <strong className="text-slate-800">Dental Instruments</strong>, <strong className="text-slate-800">Beauty &amp; Nail Care</strong>, and <strong className="text-slate-800">Barber &amp; Salon Hair Shears</strong>.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full lg:w-80">
            {/* Search Box */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search article #, name, tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
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

        {/* Top Control Bar: Showing X of Y, Per-Page Options, and Next Page Quick Jump */}
        <div id="products-grid-top" className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-white rounded-2xl border border-slate-200 mb-6 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-700">
              Showing <span className="text-cyan-700 font-black">{totalItems > 0 ? startIndex + 1 : 0}–{endIndex}</span> of <span className="text-[#0f2a44] font-black">{totalItems}</span> instruments
            </span>
            {totalPages > 1 && (
              <span className="text-xs font-mono text-slate-400 border-l border-slate-200 pl-3">
                Page {validCurrentPage} of {totalPages}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Items Per Page Selector */}
            {/* Items Per Page Selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <span className="hidden sm:inline">Per page:</span>
              <button
                onClick={() => setItemsPerPage(8)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  itemsPerPage === 8 ? 'bg-[#0f2a44] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="8 items view (4 top, 4 bottom)"
              >
                8
              </button>
              <button
                onClick={() => setItemsPerPage(16)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  itemsPerPage === 16 ? 'bg-[#0f2a44] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                16
              </button>
              <button
                onClick={() => setItemsPerPage(9999)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  isAllSelected ? 'bg-[#0f2a44] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="Display all items at once"
              >
                All
              </button>
            </div>

            {/* Quick Next Page Button if multiple pages */}
            {totalPages > 1 && validCurrentPage < totalPages && (
              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                className="hidden sm:flex items-center gap-1 px-3 py-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 text-xs font-bold rounded-lg border border-cyan-200 transition cursor-pointer"
              >
                <span>Next Page</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State if No Results */}
        {displayedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#0f2a44]">No instruments match "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another article code (e.g., "Hisense 1001", "Forceps", "Scissors", "Nail") or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#0f2a44] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Products Grid: 4 items per row, 4 on top + 4 on bottom = 8 items total */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-cyan-500 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Product Card Top */}
                <div className="flex flex-col flex-1">
                  {/* Image Container with Full Fit - Maximized product image in box with minimal padding */}
                  <div 
                    onClick={() => onOpenProductPage ? onOpenProductPage(product) : onOpenProductDetail(product)}
                    className="w-full h-64 sm:h-72 bg-slate-50 flex items-center justify-center p-2.5 sm:p-3 overflow-hidden relative cursor-pointer border-b border-slate-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Article Number Badge & Category */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none gap-1">
                      <span className="text-[10px] font-mono font-black tracking-wider uppercase text-cyan-950 bg-cyan-100/95 border border-cyan-300 px-2 py-0.5 rounded-full shadow-2xs backdrop-blur-md">
                        {product.articleNo}
                      </span>
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-slate-700 bg-white/95 border border-slate-200 px-2 py-0.5 rounded-full shadow-2xs backdrop-blur-md truncate max-w-[125px]">
                        {product.subcategory}
                      </span>
                    </div>

                    {/* Hover Inspect CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition backdrop-blur-2xs bg-slate-950/20 gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-black flex items-center gap-1 shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-600" /> Full Specs
                      </span>
                    </div>
                  </div>

                  {/* Content Area - Clean, prominent title and concise description */}
                  <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 
                        onClick={() => onOpenProductPage ? onOpenProductPage(product) : onOpenProductDetail(product)}
                        className="text-sm sm:text-[15px] font-bold text-[#0f2a44] group-hover:text-cyan-700 transition cursor-pointer leading-snug line-clamp-2"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Button: Add to RFQ */}
                <div className="p-4 sm:p-4.5 pt-0">
                  <button
                    onClick={() => onAddToRfq(product)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-2xs hover:shadow-xs cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Add to RFQ</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* BOTTOM PAGINATION CONTROLS & BOTTOM NAVIGATION BAR */}
        {totalPages > 1 && !isAllSelected && (
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Status indicator */}
            <div className="text-xs font-mono text-slate-600 text-center md:text-left">
              Showing <strong className="text-slate-900">{startIndex + 1}–{endIndex}</strong> of <strong className="text-slate-900">{totalItems}</strong> instruments across <strong className="text-slate-900">{totalPages} pages</strong>
            </div>

            {/* Pagination Button Controls */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {/* Previous Page Button */}
              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition border ${
                  validCurrentPage === 1
                    ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                    : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-300 hover:border-cyan-500 cursor-pointer shadow-2xs'
                }`}
                title="Pichla Page / Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Numbered Page Buttons */}
              {getPageNumbers().map((pageNum, idx) => {
                if (pageNum === '...') {
                  return (
                    <span key={`dots-${idx}`} className="px-2 text-slate-400 text-xs font-mono">
                      …
                    </span>
                  );
                }
                const isSelected = pageNum === validCurrentPage;
                return (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => handlePageChange(Number(pageNum))}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f2a44] text-white shadow-md font-black scale-105'
                        : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Page Button (Highlighted so user can immediately click to see more products) */}
              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition ${
                  validCurrentPage === totalPages
                    ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md hover:shadow-lg cursor-pointer'
                }`}
                title="Agla Page / Next Page"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
