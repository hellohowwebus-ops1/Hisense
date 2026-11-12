import React, { useState, useEffect } from 'react';
import { PRODUCTS, COMPANY_DETAILS, MIXED_PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  ExternalLink, 
  Home, 
  ArrowLeft,
  Filter,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onOpenProductDetail: (product: Product) => void;
  onOpenProductPage: (product: Product) => void;
  onAddToRfq: (product: Product, quantity?: number) => void;
  onOpenRfq: () => void;
  initialCategory?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateHome,
  onOpenProductDetail,
  onOpenProductPage,
  onAddToRfq,
  onOpenRfq,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setSelectedSubcategory('all');
    }
  }, [initialCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, searchQuery, itemsPerPage]);

  const categories = [
    { id: 'all', label: 'All Products (109)', zip: '/downloads/Hisense-Complete-Catalog.zip', count: 109 },
    { id: 'surgical-instruments', label: 'Surgical Instruments (49)', zip: '/downloads/Hisense-Surgical-Instruments.zip', count: 49 },
    { id: 'surgical-disposables', label: 'Surgical Disposables (12)', zip: '/downloads/Hisense-Surgical-Disposables.zip', count: 12 },
    { id: 'contraceptive-range', label: 'Contraceptive Range (18)', zip: '/downloads/Hisense-Contraceptive-Range.zip', count: 18 },
    { id: 'dental-instruments', label: 'Dental Instruments (10)', zip: '/downloads/Hisense-Dental-Instruments.zip', count: 10 },
    { id: 'beauty-nail-care', label: 'Beauty & Nail Care (10)', zip: '/downloads/Hisense-Beauty-Nail-Care.zip', count: 10 },
    { id: 'barber-salon-shears', label: 'Barber & Salon Hair Shears (10)', zip: '/downloads/Hisense-Barber-Salon-Shears.zip', count: 10 },
  ];

  const currentCategoryObj = categories.find((c) => c.id === selectedCategory) || categories[0];

  const subcategories = React.useMemo(() => {
    const pool = selectedCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter((p) => p.category === selectedCategory);
    const counts: { [key: string]: number } = {};
    pool.forEach((p) => {
      if (p.subcategory) {
        counts[p.subcategory] = (counts[p.subcategory] || 0) + 1;
      }
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [selectedCategory]);

  const sourceProducts = selectedCategory === 'all' ? MIXED_PRODUCTS : PRODUCTS;

  const filteredProducts = sourceProducts.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSubcat = selectedSubcategory === 'all' || p.subcategory === selectedSubcategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.articleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSubcat && matchesSearch;
  });

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
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    pages.push(1);
    if (validCurrentPage > 3) pages.push('...');
    const start = Math.max(2, validCurrentPage - 1);
    const end = Math.min(totalPages - 1, validCurrentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (validCurrentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Top Banner Header */}
      <div className="bg-[#0f2a44] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-cyan-800/40">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-4">
            <button 
              onClick={onNavigateHome}
              className="hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-white font-bold">Products Catalog</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-1.5">
                CERTIFIED PRECISION INSTRUMENTS &amp; CONSUMABLES
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
                Complete Products Catalog
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl font-normal">
                Explore all 109 precision instruments and hospital supplies across 6 specialized divisions. Manufactured to ISO 13485:2016, CE Medical &amp; DRAP standards with nationwide dispatch and export capability.
              </p>
            </div>

            {/* Quick RFQ Quote Action */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRfq}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black transition shadow-sm cursor-pointer"
              >
                View RFQ Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSubcategory('all');
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider whitespace-nowrap shrink-0 transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0f2a44] text-white font-black shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Subcategory Filter Pills */}
        {subcategories.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 scrollbar-none mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0 pl-1">
              Subcategories:
            </span>
            <button
              onClick={() => setSelectedSubcategory('all')}
              className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedSubcategory === 'all'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All {selectedCategory === 'all' ? '' : 'Subcategories'}
            </button>
            {subcategories.map((subcat) => (
              <button
                key={subcat.name}
                onClick={() => setSelectedSubcategory(subcat.name)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedSubcategory === subcat.name
                    ? 'bg-cyan-700 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{subcat.name}</span>
                <span className="ml-1 text-[10px] opacity-75">({subcat.count})</span>
              </button>
            ))}
          </div>
        )}

        {/* Filter, Search & Pagination Info Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-2xs">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by article #, name, instrument type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white transition"
            />
          </div>

          {/* Counts & Per Page Selector */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 text-xs font-mono text-slate-600">
            <div>
              Showing <strong className="text-cyan-700">{totalItems > 0 ? startIndex + 1 : 0}–{endIndex}</strong> of <strong className="text-slate-900">{totalItems}</strong> items
              {totalPages > 1 && <span className="text-slate-400 ml-2">| Page {validCurrentPage} of {totalPages}</span>}
            </div>

            <div className="flex items-center gap-1.5">
              <span>Per page:</span>
              <button
                onClick={() => setItemsPerPage(12)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  itemsPerPage === 12 ? 'bg-[#0f2a44] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                12
              </button>
              <button
                onClick={() => setItemsPerPage(24)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  itemsPerPage === 24 ? 'bg-[#0f2a44] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                24
              </button>
              <button
                onClick={() => setItemsPerPage(9999)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  isAllSelected ? 'bg-[#0f2a44] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {displayedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center max-w-md mx-auto">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onOpenProductPage(product)}
                    className="w-full h-64 sm:h-72 bg-slate-50 flex items-center justify-center p-2.5 sm:p-3 relative cursor-pointer border-b border-slate-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Article badge */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none gap-1">
                      <span className="text-[10px] font-mono font-black tracking-wider uppercase text-cyan-950 bg-cyan-100/95 border border-cyan-300 px-2.5 py-0.5 rounded-full shadow-xs">
                        {product.articleNo}
                      </span>
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-slate-700 bg-white/95 border border-slate-200 px-2 py-0.5 rounded-full shadow-xs truncate max-w-[125px]">
                        {product.subcategory}
                      </span>
                    </div>

                    {/* Hover inspection */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition backdrop-blur-2xs bg-slate-950/20">
                      <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1 shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-600" /> Full Specs
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-4.5">
                    <h3
                      onClick={() => onOpenProductPage(product)}
                      className="text-sm sm:text-[15px] font-bold text-[#0f2a44] group-hover:text-cyan-700 transition cursor-pointer line-clamp-2 leading-snug"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card actions */}
                <div className="p-4 sm:p-5 pt-0">
                  <button
                    onClick={() => onAddToRfq(product)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-2xs cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Add to RFQ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Full Page Pagination Bar */}
        {totalPages > 1 && !isAllSelected && (
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-600">
              Showing <strong className="text-slate-900">{startIndex + 1}–{endIndex}</strong> of <strong className="text-slate-900">{totalItems}</strong> instruments (Page {validCurrentPage} of {totalPages})
            </div>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition border ${
                  validCurrentPage === 1
                    ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                    : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-300 cursor-pointer shadow-2xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {getPageNumbers().map((pageNum, idx) => {
                if (pageNum === '...') {
                  return (
                    <span key={`pdots-${idx}`} className="px-2 text-slate-400 text-xs font-mono">
                      …
                    </span>
                  );
                }
                const isSelected = pageNum === validCurrentPage;
                return (
                  <button
                    key={`ppage-${pageNum}`}
                    onClick={() => handlePageChange(Number(pageNum))}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f2a44] text-white shadow-md font-black'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 transition ${
                  validCurrentPage === totalPages
                    ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md cursor-pointer'
                }`}
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Back to Home CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0f2a44] text-xs font-black border border-slate-300 shadow-2xs cursor-pointer transition"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-600" />
            <span>Return to Home Page (3D Lab &amp; Company Overview)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
