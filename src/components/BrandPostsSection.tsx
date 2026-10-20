import React from 'react';
import { BRAND_POSTS } from '../data/mockData';
import { 
  Newspaper, 
  ArrowRight, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Building2,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface BrandPostsSectionProps {
  onOpenArticle?: (postId: string) => void;
}

export const BrandPostsSection: React.FC<BrandPostsSectionProps> = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative" id="brand-posts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              <Newspaper className="w-4 h-4 text-cyan-600" />
              HISENSE BRAND INSIGHTS &amp; CLINICAL DEVELOPMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
              Corporate Releases &amp; Field Milestones
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl">
              Follow our latest cleanroom commissionings, WHO &amp; DRAP certifications, institutional tender supplies, and reproductive health advancements nationwide.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
            <span>OFFICIAL PRESS DESK</span>
            <span>·</span>
            <span className="text-cyan-700">HISENSE INTERNATIONAL</span>
          </div>
        </div>

        {/* Brand Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Post Featured Image with Hisense Branded Photography */}
                <div className="w-full h-48 bg-slate-100 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-900 bg-white/95 px-2.5 py-1 rounded-full shadow-xs backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Hisense Watermark */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[9px] font-mono font-black uppercase text-white bg-[#0f2a44]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      HISENSE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-600" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0f2a44] group-hover:text-cyan-700 transition leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    {post.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs font-bold text-cyan-700 group-hover:text-cyan-800 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">{post.author}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Release</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Corporate Trust Badge Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6 text-cyan-700" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0f2a44]">Hisense Quality Assurance System</div>
              <div className="text-[11px] text-slate-500">ISO 9001:2015 &amp; ISO 13485 Registered Medical Device Importer &amp; Manufacturer</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
            <span className="font-bold text-[#0f2a44]">DRAP Lic. Verified</span>
            <span>·</span>
            <span>Class 10,000 Cleanroom Certified</span>
            <span>·</span>
            <span className="text-cyan-700 font-bold">48-Multan Road Lahore Hub</span>
          </div>
        </div>

      </div>
    </section>
  );
};
