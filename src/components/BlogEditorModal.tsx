import React, { useState, useEffect, useRef } from 'react';
import { BlogPost } from '../types';
import { 
  X, 
  Upload, 
  Image as ImageIcon, 
  Eye, 
  Save, 
  Trash2, 
  Check, 
  Sparkles, 
  FileText, 
  Layers, 
  Tag, 
  Clock, 
  User, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface BlogEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: BlogPost) => void;
  onDelete?: (id: string) => void;
  postToEdit?: BlogPost | null;
}

const CATEGORY_OPTIONS = [
  'Surgical Precision',
  'Infection Control',
  'Dental Innovations',
  'Barber & Salon Shears',
  'Beauty & Podiatry',
  'Company News & Compliance',
  'Government Procurement',
];

const PRESET_IMAGES = [
  { label: 'Surgical Scissors', url: '/assets/images/products/surgical-instruments/scissors/hisense-1001.jpg' },
  { label: 'Cleanroom Facility', url: '/assets/images/about/hisense_medtech_cleanroom_hero_1792383674945.jpg' },
  { label: 'Dental Forceps', url: '/assets/images/products/dental-instruments/hisense-2001.jpg' },
  { label: 'Rainbow Hair Shears', url: '/assets/images/products/barber-salon-shears/hisense-4001.jpg' },
  { label: 'Corner Nail Nipper', url: '/assets/images/products/beauty-nail-care/hisense-3001.png' },
  { label: 'CSSD Sterilization', url: '/assets/images/services/service_sterilization.jpg' },
  { label: 'Tender Supplies', url: '/assets/images/services/service_tender.jpg' },
];

export const BlogEditorModal: React.FC<BlogEditorModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  postToEdit,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [readTime, setReadTime] = useState('4 min read');
  const [author, setAuthor] = useState('Dr. Tariq Mahmood');
  const [authorRole, setAuthorRole] = useState('Clinical & Materials Director');
  const [tagsStr, setTagsStr] = useState('Surgical Instruments, ISO 13485, AISI 420');
  const [featured, setFeatured] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load post details if editing
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setCategory(postToEdit.category);
      setExcerpt(postToEdit.excerpt);
      setContent(postToEdit.content || '');
      setImage(postToEdit.image || '');
      setReadTime(postToEdit.readTime || '4 min read');
      setAuthor(postToEdit.author || 'Dr. Tariq Mahmood');
      setAuthorRole(postToEdit.authorRole || 'Clinical & Materials Director');
      setTagsStr(postToEdit.tags ? postToEdit.tags.join(', ') : '');
      setFeatured(!!postToEdit.featured);
    } else {
      // Default clean template for new blog post
      setTitle('');
      setCategory(CATEGORY_OPTIONS[0]);
      setExcerpt('');
      setContent(`### Executive Summary\nWrite your introductory clinical overview or background here...\n\n### Material Science & Clinical Method\nDetail the engineering standards, metallurgy, or protocol steps...\n\n### Clinical Recommendations\n- Step 1: Ensure pre-cleaning and decontamination within 15 minutes.\n- Step 2: Validate autoclave parameters at 134°C.\n- Step 3: Inspect joint alignment and cutting bevel under magnification.`);
      setImage(PRESET_IMAGES[0].url);
      setReadTime('4 min read');
      setAuthor('Hisense Editorial Team');
      setAuthorRole('Medical & Technical Board');
      setTagsStr('Surgical Instruments, Healthcare Standards, Lahore Hub');
      setFeatured(false);
    }
    setPreviewMode(false);
    setUploadError(null);
  }, [postToEdit, isOpen]);

  if (!isOpen) return null;

  // Handle local image file upload and convert to base64 data URL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, WEBP, GIF).');
      return;
    }

    // Limit to 4MB for localStorage comfort
    if (file.size > 4 * 1024 * 1024) {
      setUploadError('Image file size exceeds 4MB. Please upload a compressed image.');
      return;
    }

    setUploadError(null);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  // Insert helper markdown text into content
  const insertFormatting = (snippet: string) => {
    setContent((prev) => prev + '\n\n' + snippet);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Please enter a blog title.');
      return;
    }
    if (!excerpt.trim()) {
      alert('Please enter a short excerpt for the card summary.');
      return;
    }

    const tags = tagsStr
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const newPost: BlogPost = {
      id: postToEdit ? postToEdit.id : `post-hisense-${Date.now()}`,
      title: title.trim(),
      category,
      date: postToEdit ? postToEdit.date : formattedDate,
      excerpt: excerpt.trim(),
      content: content.trim(),
      image: image || PRESET_IMAGES[0].url,
      readTime: readTime.trim() || '4 min read',
      author: author.trim() || 'Hisense Editorial Team',
      authorRole: authorRole.trim(),
      tags: tags.length > 0 ? tags : ['Hisense MedTech'],
      featured,
      published: true,
      updatedAt: now.toISOString(),
      createdAt: postToEdit?.createdAt || now.toISOString(),
    };

    onSave(newPost);
    onClose();
  };

  const handleDelete = () => {
    if (!postToEdit || !onDelete) return;
    if (confirm(`Are you sure you want to permanently delete "${postToEdit.title}"?`)) {
      onDelete(postToEdit.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-cyan-800 uppercase flex items-center gap-1.5">
                <span>ADMIN EDITORIAL CONSOLE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h3 className="text-lg font-black text-[#0f2a44]">
                {postToEdit ? 'Edit Blog Article' : 'Compose New Clinical Blog Article'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                previewMode
                  ? 'bg-cyan-600 text-white border-cyan-600 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{previewMode ? 'Edit Mode' : 'Live Preview'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {previewMode ? (
            /* Live Article Preview */
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 h-64 sm:h-80 relative">
                <img
                  src={image || PRESET_IMAGES[0].url}
                  alt={title || 'Preview'}
                  className="w-full h-full object-contain sm:object-cover"
                />
                <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-700 text-white uppercase shadow-sm">
                  {category}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono mb-2">
                  <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{readTime}</span>
                  <span>•</span>
                  <span className="text-cyan-800 font-bold">{author}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#0f2a44] leading-tight">
                  {title || 'Untitled Clinical Post'}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium italic border-l-4 border-cyan-600 pl-4 py-1 bg-cyan-50/50 rounded-r-lg">
                  {excerpt || 'Article summary excerpt...'}
                </p>
              </div>

              <div className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-slate-200">
                {content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="text-lg font-bold text-[#0f2a44] mt-6">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={idx} className="text-xl font-black text-[#0f2a44] mt-6">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').map((line) => line.replace('- ', ''));
                    return (
                      <ul key={idx} className="list-disc pl-5 space-y-1.5 text-slate-700">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx} className="leading-relaxed">{paragraph}</p>;
                })}
              </div>

              {tagsStr && (
                <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                  {tagsStr.split(',').map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Edit Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Title & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Advancements in AISI 420 Surgical Stainless Steel"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 bg-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 cursor-pointer"
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Excerpt Summary */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Short Excerpt / Teaser (for cards) *
                </label>
                <textarea
                  required
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A concise 2-3 sentence clinical summary that hooks the reader on the catalog / blog listing page..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 leading-relaxed"
                />
              </div>

              {/* Image Upload & Selection Section */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-cyan-600" />
                    <span>Article Cover Image (Upload or Choose)</span>
                  </label>
                  
                  {/* Local Upload Input */}
                  <div className="flex items-center gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="blog-image-upload"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload from Device</span>
                    </button>
                  </div>
                </div>

                {uploadError && (
                  <p className="text-xs text-red-600 font-medium">{uploadError}</p>
                )}

                {/* Preset Library Thumbnails */}
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block mb-1.5">
                    Or select from Hisense instrument &amp; facility photo library:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                    {PRESET_IMAGES.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setImage(preset.url)}
                        className={`group relative rounded-xl overflow-hidden border-2 p-0.5 transition cursor-pointer text-left ${
                          image === preset.url ? 'border-cyan-600 shadow-md ring-2 ring-cyan-200' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="h-16 w-full bg-white rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                            src={preset.url}
                            alt={preset.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[9px] font-mono text-slate-700 truncate block mt-1 px-1 font-semibold">
                          {preset.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Image URL input */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                  <span className="text-xs text-slate-500 shrink-0">Custom Image Path/URL:</span>
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="/assets/images/... or https://..."
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono text-slate-800 focus:outline-none focus:border-cyan-600"
                  />
                  {image && (
                    <div className="w-9 h-9 rounded-lg border border-slate-300 overflow-hidden shrink-0 bg-white p-0.5">
                      <img src={image} alt="Thumb" className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
              </div>

              {/* Author, Read Time, Tags Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Dr. Tariq Mahmood"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:border-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Author Designation / Role
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="e.g. Clinical & Materials Director"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              {/* Tags & Featured Checkbox */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Keywords &amp; Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tagsStr}
                    onChange={(e) => setTagsStr(e.target.value)}
                    placeholder="e.g. Surgical Instruments, AISI 420, ISO 13485"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  />
                </div>

                <div className="pt-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                    />
                    <span>Highlight as Featured Article</span>
                  </label>
                </div>
              </div>

              {/* Full Article Content & Quick Formatting Toolbar */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Full Article Content (Markdown / Text) *
                  </label>
                  
                  {/* Quick Format Inserters */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => insertFormatting('### Section Heading\nWrite section text here...')}
                      className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono rounded font-semibold transition cursor-pointer"
                    >
                      + Heading
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('- Key Clinical Point 1\n- Key Clinical Point 2\n- Key Clinical Point 3')}
                      className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono rounded font-semibold transition cursor-pointer"
                    >
                      + Bullet List
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('> "Clinical Note: Always verify sterilization parameters prior to procedure."')}
                      className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono rounded font-semibold transition cursor-pointer"
                    >
                      + Note Quote
                    </button>
                  </div>
                </div>

                <textarea
                  required
                  rows={10}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Compose your comprehensive technical article here..."
                  className="w-full p-4 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 leading-relaxed"
                />
              </div>

              {/* Form Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                <div>
                  {postToEdit && onDelete && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete Article</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-bold flex items-center gap-2 transition shadow-md cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{postToEdit ? 'Update & Publish Changes' : 'Publish Blog Post'}</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
