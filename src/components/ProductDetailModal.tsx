import React from 'react';
import { Product } from '../types';
import { X, CheckCircle, ShieldCheck, Sliders, Plus, ExternalLink, PhoneCall, Share2 } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onLaunch3d: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
  onAddToRfq: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onLaunch3d,
  onAddToRfq,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-800 uppercase bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
              {product.subcategory}
            </span>
            <h3 className="text-xl font-bold text-[#0f2a44] mt-1 leading-snug">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Image & Status */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="media-protection-shield" aria-hidden="true" />
                {product.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full bg-cyan-600 text-white shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-3 text-xs text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> In Stock &amp; Ready
                </span>
                <span className="text-slate-500 font-mono">Lead: {product.leadTime}</span>
              </div>
            </div>

            {/* Right Details */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                Clinical Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                {product.fullDesc}
              </p>

              <h4 className="text-xs font-mono font-bold uppercase text-cyan-800 tracking-wider mt-4">
                Key Technical Features
              </h4>
              <ul className="space-y-1.5 mt-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-cyan-600 mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-cyan-800 tracking-wider mb-2">
              Engineering &amp; Material Specifications
            </h4>
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs">
              <table className="w-full text-xs text-left">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}
                    >
                      <td className="px-4 py-2.5 font-semibold text-slate-600 w-1/3 border-b border-slate-100">
                        {spec.label}
                      </td>
                      <td className="px-4 py-2.5 font-mono text-slate-900 border-b border-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Certifications and Compliance */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-2">
              Regulatory Standards &amp; Testing
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 border border-cyan-200 text-cyan-800 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>Direct Inquiry:</span>
            <a
              href="tel:+923218000560"
              className="text-[#0f2a44] font-bold font-mono hover:text-cyan-700"
            >
              +92 321 8000560
            </a>
          </div>

          <div className="flex items-center gap-3">
            {product.model3dKey && (
              <button
                onClick={() => {
                  onClose();
                  onLaunch3d(product.model3dKey!);
                }}
                className="px-4 py-2 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center gap-1.5 transition border border-cyan-200 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-cyan-600" />
                <span>Inspect in 3D</span>
              </button>
            )}

            <button
              onClick={() => {
                onAddToRfq(product);
                onClose();
              }}
              className="px-5 py-2 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
