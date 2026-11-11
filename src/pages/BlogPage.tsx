import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { 
  getStoredBlogs, 
  saveStoredBlogs, 
  isUserAdminAuthenticated, 
  setAdminAuthenticated 
} from '../data/blogData';
import { AdminPasscodeModal } from '../components/AdminPasscodeModal';
import { BlogEditorModal } from '../components/BlogEditorModal';
import { BlogDetailModal } from '../components/BlogDetailModal';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Plus, 
  Edit3, 
  Trash2, 
  ShieldCheck, 
  LogOut, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  FileText,
  Lock,
  ChevronRight
} from 'lucide-react';

interface BlogPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onSelectCategory?: (category: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onSelectCategory,
}) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => getStoredBlogs());
  const [isAdmin, setIsAdmin] = useState<boolean>(() => isUserAdminAuthenticated());
  
  // Modals state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);
  const [selectedPostForDetail, setSelectedPostForDetail] = useState<BlogPost | null>(null);

  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Secret triple-click counter for discreet access
  const [secretClickCount, setSecretClickCount] = useState<number>(0);

  // Sync blogs from localStorage and listen to updates
  useEffect(() => {
    const handleBlogsUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<BlogPost[]>;
      if (customEvent.detail) {
        setBlogs(customEvent.detail);
      } else {
        setBlogs(getStoredBlogs());
      }
    };

    const handleAdminStatusChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsAdmin(customEvent.detail);
    };

    window.addEventListener('hisense_blogs_updated', handleBlogsUpdate);
    window.addEventListener('hisense_admin_status_changed', handleAdminStatusChange);

    return () => {
      window.removeEventListener('hisense_blogs_updated', handleBlogsUpdate);
      window.removeEventListener('hisense_admin_status_changed', handleAdminStatusChange);
    };
  }, []);

  // Keyboard shortcut listener: Ctrl + Shift + A OR Ctrl + Alt + B
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl + Shift + A or Cmd + Shift + A
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const isShiftA = e.shiftKey && (e.key === 'a' || e.key === 'A');
      const isAltB = e.altKey && (e.key === 'b' || e.key === 'B');

      if (isCtrlOrCmd && (isShiftA || isAltB)) {
        e.preventDefault();
        if (isUserAdminAuthenticated()) {
          // If already logged in, open the new blog composer directly
          setPostToEdit(null);
          setIsEditorModalOpen(true);
        } else {
          // Otherwise prompt for passcode
          setIsAuthModalOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Check URL hash for admin query parameter e.g. #/blog/admin or #/blog?admin=true
  useEffect(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('admin')) {
      if (isUserAdminAuthenticated()) {
        setIsAdmin(true);
      } else {
        setIsAuthModalOpen(true);
      }
    }
  }, []);

  // Handle secret discreet trigger (e.g. clicking the subtle footer dot / version text 3 times)
  const handleSecretTriggerClick = () => {
    const newCount = secretClickCount + 1;
    setSecretClickCount(newCount);
    if (newCount >= 3) {
      setSecretClickCount(0);
      if (isUserAdminAuthenticated()) {
        setIsEditorModalOpen(true);
      } else {
        setIsAuthModalOpen(true);
      }
    }
  };

  // Admin Actions
  const handleSavePost = (newPost: BlogPost) => {
    let updated: BlogPost[];
    const exists = blogs.some((b) => b.id === newPost.id);
    if (exists) {
      updated = blogs.map((b) => (b.id === newPost.id ? newPost : b));
    } else {
      updated = [newPost, ...blogs];
    }
    setBlogs(updated);
    saveStoredBlogs(updated);
  };

  const handleDeletePost = (id: string) => {
    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
    saveStoredBlogs(updated);
  };

  const handleAdminSignOut = () => {
    setAdminAuthenticated(false);
    setIsAdmin(false);
  };

  // Filter Categories
  const categories = [
    'All',
    'Surgical Precision',
    'Infection Control',
    'Dental Innovations',
    'Barber & Salon Shears',
    'Beauty & Podiatry',
    'Company News & Compliance',
  ];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCat = selectedCategory === 'All' || b.category.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      b.title.toLowerCase().includes(query) ||
      b.excerpt.toLowerCase().includes(query) ||
      b.content.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      (b.tags && b.tags.some((t) => t.toLowerCase().includes(query)));
    return matchesCat && matchesSearch;
  });

  const featuredPost = blogs.find((b) => b.featured) || blogs[0];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* SECRET ADMIN TOP CONSOLE BAR (Visible ONLY when admin is authenticated!) */}
      {isAdmin && (
        <div className="bg-[#0f2a44] border-b border-cyan-500/30 text-white px-4 sm:px-8 py-3 sticky top-[60px] sm:top-[68px] z-40 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs font-black tracking-wide text-cyan-300 uppercase">
                  Hisense Editorial Admin Console
                </span>
                <span className="text-[11px] text-slate-300 ml-2 hidden sm:inline font-mono">
                  (Authorized Session Active · {blogs.length} Posts)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setPostToEdit(null);
                  setIsEditorModalOpen(true);
                }}
                className="px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition shadow-sm cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write New Blog Post</span>
              </button>

              <button
                onClick={handleAdminSignOut}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 transition border border-white/20 cursor-pointer"
                title="Sign out of editorial console"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock Console</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="hover:text-cyan-700 font-semibold text-[#0f2a44] cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-bold text-cyan-800">Insights &amp; Clinical Blog</span>
          </div>

          <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
            ISO 13485:2016 · Surgical Metallurgy &amp; Device Education
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        
        {/* Main Page Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-600" />
              <span>HISENSE CLINICAL KNOWLEDGE BASE &amp; EDITORIAL</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
              Insights &amp; Clinical Articles
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl font-normal leading-relaxed">
              Authoritative technical guides, autoclave sterilization science, AISI 420 surgical metallurgy, and institutional procurement standards published by the Hisense International editorial advisory board.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, metallurgy, author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition shadow-xs"
            />
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0f2a44] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Hero Article (If visible and matches search/category) */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div className="mt-6 mb-12">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
              
              {/* Featured Image */}
              <div 
                onClick={() => setSelectedPostForDetail(featuredPost)}
                className="lg:col-span-7 h-72 sm:h-96 bg-slate-100 overflow-hidden relative cursor-pointer"
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-xs font-mono font-black uppercase text-white bg-cyan-700/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md">
                  ★ Featured Article
                </span>
              </div>

              {/* Featured Content */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono mb-3">
                    <span className="text-cyan-800 font-bold uppercase">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 
                    onClick={() => setSelectedPostForDetail(featuredPost)}
                    className="text-xl sm:text-2xl font-black text-[#0f2a44] group-hover:text-cyan-700 transition cursor-pointer leading-tight"
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {featuredPost.tags?.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-full font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    By <strong className="text-slate-800">{featuredPost.author}</strong>
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {isAdmin && (
                      <button
                        onClick={() => {
                          setPostToEdit(featuredPost);
                          setIsEditorModalOpen(true);
                        }}
                        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                        title="Edit featured post"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedPostForDetail(featuredPost)}
                      className="px-4 py-2 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500">
              Showing {filteredBlogs.length} Clinical Articles {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
            </h3>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-700">No articles match your criteria</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try searching for different keywords or clear the category filter to view all articles.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-cyan-700 text-white text-xs font-bold hover:bg-cyan-800 transition cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl border border-slate-200/90 hover:border-cyan-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Cover Image Container */}
                    <div 
                      onClick={() => setSelectedPostForDetail(post)}
                      className="w-full h-52 sm:h-56 bg-slate-100 overflow-hidden relative cursor-pointer"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-black uppercase text-cyan-950 bg-cyan-100/95 border border-cyan-300 px-3 py-1 rounded-full shadow-xs backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3
                        onClick={() => setSelectedPostForDetail(post)}
                        className="text-base font-bold text-[#0f2a44] group-hover:text-cyan-700 transition cursor-pointer line-clamp-2 leading-snug"
                      >
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                        {post.tags?.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                    <span className="text-[11px] text-slate-500 truncate max-w-[140px]">
                      By <span className="font-semibold text-slate-800">{post.author}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {isAdmin && (
                        <>
                          <button
                            onClick={() => {
                              setPostToEdit(post);
                              setIsEditorModalOpen(true);
                            }}
                            className="p-2 rounded-full bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 border border-slate-200 transition cursor-pointer"
                            title="Edit this post"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 transition cursor-pointer"
                            title="Delete this post"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => setSelectedPostForDetail(post)}
                        className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#0f2a44] text-slate-800 hover:text-white text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          )}
        </div>

        {/* Subtle, Discreet Bottom Bar (Contains secret trigger that regular users won't notice!) */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>Hisense International Clinical Publishing Board · 48-Main Multan Road Lahore</span>
          </div>
          
          {/* Subtle click target: triple clicking this activates the secret admin PIN dialog */}
          <div 
            onClick={handleSecretTriggerClick}
            className="cursor-default select-none text-[11px] font-mono text-slate-400 hover:text-slate-500 transition"
            title="Editorial Verification Index"
          >
            DRAP Ref: MED-48-LHR-2026 • v2.4
          </div>
        </div>

      </div>

      {/* Admin Passcode Modal (Hidden trigger only) */}
      <AdminPasscodeModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAdmin(true);
          setIsEditorModalOpen(true);
        }}
      />

      {/* Blog Editor Modal (Admin only) */}
      <BlogEditorModal
        isOpen={isEditorModalOpen}
        onClose={() => {
          setIsEditorModalOpen(false);
          setPostToEdit(null);
        }}
        onSave={handleSavePost}
        onDelete={handleDeletePost}
        postToEdit={postToEdit}
      />

      {/* Blog Detail Reader Modal (For all visitors) */}
      <BlogDetailModal
        post={selectedPostForDetail}
        onClose={() => setSelectedPostForDetail(null)}
      />

    </div>
  );
};
