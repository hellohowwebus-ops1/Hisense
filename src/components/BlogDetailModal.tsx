import React, { useState } from 'react';
import { BlogPost } from '../types';
import { 
  X, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Check, 
  MessageSquare, 
  ArrowLeft, 
  Tag, 
  ShieldCheck, 
  Building2,
  ExternalLink
} from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  onClose,
  onSelectCategory,
}) => {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(
      `Hello Hisense International,\n\nI just read your clinical article: *"${post.title}"* on your website.\n\nCould you please share more technical details and catalog specifications regarding the instruments mentioned?`
    );
    window.open(`https://wa.me/923218000560?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-800 bg-cyan-100/80 border border-cyan-200 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-mono text-slate-500">{post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition border border-slate-200 cursor-pointer"
              title="Share article link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                <span>{post.readTime}</span>
              </span>
              <span>•</span>
              <span className="text-slate-700 font-semibold">
                By {post.author} {post.authorRole ? `(${post.authorRole})` : ''}
              </span>
            </div>

            <h1 id="blog-title" className="text-2xl sm:text-4xl font-black text-[#0f2a44] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-l-4 border-cyan-600 pl-4 py-1 bg-cyan-50/40 rounded-r-xl">
              {post.excerpt}
            </p>
          </div>

          {/* Hero Image Stage */}
          <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-contain sm:object-cover"
            />
            <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-950/70 text-white px-2.5 py-1 rounded-full backdrop-blur-xs">
              Hisense Medical Archives · DRAP Traceable
            </div>
          </div>

          {/* Formatted Article Body */}
          <article className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-5">
            {post.content.split('\n\n').map((block, idx) => {
              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-black text-[#0f2a44] mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-cyan-600 rounded-full"></span>
                    <span>{block.replace('### ', '')}</span>
                  </h3>
                );
              }
              if (block.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-black text-[#0f2a44] mt-10 pt-4 border-t border-slate-200">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('- ')) {
                const listItems = block.split('\n').map((line) => line.replace('- ', ''));
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-700 marker:text-cyan-600">
                    {listItems.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith('> ')) {
                return (
                  <blockquote key={idx} className="p-4 rounded-xl bg-cyan-50 border-l-4 border-cyan-600 text-cyan-950 italic text-sm font-medium">
                    {block.replace('> ', '')}
                  </blockquote>
                );
              }
              return (
                <p key={idx} className="leading-relaxed text-slate-700">
                  {block}
                </p>
              );
            })}
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-600" />
                <span>Article Subject Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-semibold border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio & WhatsApp Inquiry Box */}
          <div className="p-6 rounded-2xl bg-linear-to-r from-slate-900 to-[#0f2a44] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase mb-1">
                EDITORIAL INQUIRY &amp; PRODUCT ADVICE
              </div>
              <h4 className="text-base sm:text-lg font-bold">
                Have questions about instruments referenced in this article?
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Consult Hisense International technical specialists directly regarding institutional tender pricing, autoclave parameters, and standing hospital stock in Lahore.
              </p>
            </div>

            <button
              onClick={handleWhatsAppConsult}
              className="px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center gap-2 transition shadow-md shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span className="font-mono text-[11px]">
            Hisense International · Estd. 2010 · ISO 13485:2016
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition cursor-pointer"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
};
