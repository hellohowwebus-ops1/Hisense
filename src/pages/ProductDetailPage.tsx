import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, COMPANY_DETAILS } from '../data/mockData';
import { 
  ArrowLeft, 
  Plus, 
  Download, 
  CheckCircle, 
  ShieldCheck, 
  FileText, 
  Phone, 
  MessageSquare, 
  Maximize2, 
  Share2, 
  Check, 
  Sparkles,
  ChevronRight,
  FolderArchive,
  Layers
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onBackToCatalog: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToRfq: (product: Product, quantity?: number) => void;
  onOpenRfq: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBackToCatalog,
  onSelectProduct,
  onAddToRfq,
  onOpenRfq,
}) => {
  const [quantity, setQuantity] = useState<number>(50);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Find related products in the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Hisense International,\n\nI am inquiring about:\n*Product:* ${product.name}\n*Article No:* ${product.articleNo}\n*Category:* ${product.subcategory}\n*Quantity:* ${quantity} units\n\nPlease provide quotation and technical documentation.`
    );
    window.open(`https://wa.me/923218000560?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <button
              onClick={onBackToCatalog}
              className="hover:text-cyan-700 flex items-center gap-1 font-semibold text-[#0f2a44] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-500">{product.subcategory}</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-mono font-bold text-cyan-800">{product.articleNo}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share Product'}</span>
            </button>

            {product.downloadPath && (
              <a
                href={product.downloadPath}
                download
                className="px-3 py-1.5 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center gap-1.5 transition border border-cyan-200 cursor-pointer"
              >
                <FolderArchive className="w-3.5 h-3.5" />
                <span>Download Category ZIP</span>
              </a>
            )}
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Main Product Showcase Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Full Product Image Viewer (Completely uncropped, full view) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Main Image Stage */}
              <div className="relative w-full h-[450px] sm:h-[540px] bg-linear-to-b from-slate-50 to-slate-100/70 rounded-2xl border border-slate-200/90 flex items-center justify-center p-6 sm:p-10 overflow-hidden group">
                
                {/* Article Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="text-xs font-mono font-black uppercase text-cyan-950 bg-cyan-100/95 border border-cyan-300 px-3 py-1 rounded-full shadow-xs backdrop-blur-md">
                    {product.articleNo}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-700 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-full shadow-xs">
                    {product.subcategory}
                  </span>
                </div>

                {/* Top Right Actions */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-cyan-700 border border-slate-200 shadow-xs transition cursor-pointer"
                    title="Fullscreen Zoom"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <a
                    href={product.image}
                    download={`${product.articleNo}.jpg`}
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-cyan-700 border border-slate-200 shadow-xs transition cursor-pointer"
                    title="Download High-Res Image"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>

                {/* THE IMAGE: object-contain with 100% full view - never cropped */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  onClick={() => setIsZoomed(true)}
                />

                {/* Bottom Notice */}
                <div className="absolute bottom-3 text-center text-[11px] text-slate-400 font-mono">
                  Full uncropped surgical instrument view • Click to zoom
                </div>
              </div>

              {/* Quick Image Tools Bar */}
              <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Standing Reserve Stock in Lahore</span>
                </div>
                <a
                  href={product.image}
                  download={`${product.articleNo}.jpg`}
                  className="text-cyan-800 hover:text-cyan-950 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Download Full Photo
                </a>
              </div>

            </div>

            {/* Right: Product Details, Clinical Specs & Action */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Header Strip */}
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 mb-2">
                  <span className="font-bold text-[#0f2a44]">{product.articleNo}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-semibold">{product.leadTime}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">Class I/IIa Medical Device</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-[#0f2a44] tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {product.fullDesc}
                </p>

                {/* Key Technical Features */}
                <div className="mt-5">
                  <h4 className="text-xs font-mono font-bold uppercase text-cyan-800 tracking-wider mb-2">
                    Key Clinical Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-cyan-600 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Regulatory Badges */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Verified Quality Standards &amp; DRAP Registration
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 border border-cyan-200 text-cyan-800 flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Order & Quotation Box */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
                
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-slate-700 block">Order / RFQ Quantity</span>
                    <span className="text-[11px] text-slate-500">Institutional wholesale units</span>
                  </div>
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity((q) => Math.max(10, q - 10))}
                      className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 font-bold text-sm cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center text-xs font-mono font-bold border-x border-slate-200 py-1.5 focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity((q) => q + 10)}
                      className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 font-bold text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => {
                      onAddToRfq(product, quantity);
                      onOpenRfq();
                    }}
                    className="py-3 px-5 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-black flex items-center justify-center gap-2 transition shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-cyan-400" />
                    <span>Add to Quotation Cart</span>
                  </button>

                  <button
                    onClick={handleDirectWhatsApp}
                    className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-2 transition shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-200" />
                    <span>Direct WhatsApp Inquiry</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-2">
                  <span>For direct tenders &amp; hospital contracts:</span>
                  <a href="tel:+923218000560" className="text-[#0f2a44] font-bold font-mono hover:underline">
                    0321-8000560
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Full Technical Specifications Table */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-black text-[#0f2a44] uppercase tracking-tight mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-600" />
              Complete Engineering &amp; Metallurgy Specifications
            </h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
              <table className="w-full text-xs text-left">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}
                    >
                      <td className="px-5 py-3 font-bold text-slate-700 w-1/3 border-b border-slate-100">
                        {spec.label}
                      </td>
                      <td className="px-5 py-3 font-mono text-slate-900 border-b border-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Related Instruments in the same Category */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-cyan-700">MORE IN THIS CATEGORY</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f2a44] tracking-tight uppercase">
                  Related {product.subcategory} Instruments
                </h3>
              </div>
              <button
                onClick={onBackToCatalog}
                className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 cursor-pointer"
              >
                <span>View All In Category</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectProduct(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 shadow-xs hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="w-full h-44 bg-slate-50 rounded-xl flex items-center justify-center p-3 overflow-hidden border border-slate-100 relative mb-3">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-2 left-2 text-[10px] font-mono font-black text-cyan-900 bg-cyan-100 px-2 py-0.5 rounded border border-cyan-300">
                        {rel.articleNo}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-[#0f2a44] group-hover:text-cyan-700 transition line-clamp-2">
                      {rel.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {rel.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 text-[10px]">{rel.length || 'Standard'}</span>
                    <span className="font-bold text-cyan-700 flex items-center gap-1 text-[11px]">
                      View Full Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for Fullscreen Zoom View */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl"
            />
            <div className="absolute top-4 right-4 text-white text-xs font-mono bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md">
              Click anywhere to exit
            </div>
            <div className="absolute bottom-4 text-white text-xs font-mono bg-black/60 px-4 py-2 rounded-xl backdrop-blur-md">
              {product.articleNo} · {product.name}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
