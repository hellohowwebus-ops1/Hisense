import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/mockData';
import { 
  Play, 
  Pause,
  ArrowRight, 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  ChevronLeft,
  Activity,
  Award,
  Building2,
  Phone,
  Clock,
  Eye
} from 'lucide-react';

interface HeroSliderProps {
  onOpen3dModel: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
  onOpenVideoModal: (title: string, category: string) => void;
  onOpenRfqModal: () => void;
}

const SLIDE_DURATION_MS = 6000;
const TICK_INTERVAL_MS = 50;

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpen3dModel,
  onOpenVideoModal,
  onOpenRfqModal,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100%

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-slide Timer Effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + (TICK_INTERVAL_MS / SLIDE_DURATION_MS) * 100;
        if (nextProgress >= 100) {
          setCurrentSlideIndex((oldIndex) => (oldIndex + 1) % HERO_SLIDES.length);
          return 0;
        }
        return nextProgress;
      });
    }, TICK_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, currentSlideIndex]);

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  return (
    <section 
      className="relative w-full min-h-screen pt-20 sm:pt-24 pb-14 flex flex-col justify-between overflow-hidden group/hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. DYNAMIC HIGH-RESOLUTION HISENSE BACKGROUND IMAGE PER SLIDE */}
      {/* Replaces the plain white background with slide-specific Hisense cleanroom and manufacturing images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = currentSlideIndex === index;
          return (
            <div
              key={`bg-slide-${slide.id}`}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                isActive 
                  ? 'opacity-100 scale-100 z-1' 
                  : 'opacity-0 scale-105 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.backgroundImage}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          );
        })}

        {/* Sophisticated Medical Frosted Glass Overlay Scrim */}
        {/* Ensures the background image is clearly visible while keeping headline & controls readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/94 via-white/75 to-white/20 z-[2] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/60 z-[2] pointer-events-none" />
        
        {/* Subtle high-tech cyan ambient tint & grid */}
        <div className="absolute inset-0 bg-grid-medical-light opacity-20 z-[2] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] z-[2] pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Glassmorphic Content Card for Maximum Readability */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="bg-white/85 backdrop-blur-md p-6 sm:p-8 lg:p-9 rounded-3xl border border-white/80 shadow-2xl shadow-slate-900/10 relative overflow-hidden">
              
              {/* Corner Watermark Badge */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Top Corporate Tag with Slide Indicator & Active Facility Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80">
                  <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-800 font-bold">
                    {activeSlide.categoryTag}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-slate-700">
                  <Eye className="w-3 h-3 text-cyan-600" />
                  <span className="text-[11px] font-mono font-bold text-slate-700">
                    SLIDE 0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
              </div>

              {/* Main Headline (Keyed for smooth crossfade) */}
              <div key={`title-${currentSlideIndex}`} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0f2a44] tracking-tight leading-[1.14] uppercase min-h-[90px] sm:min-h-[120px] flex items-center">
                  <span>
                    {activeSlide.title.includes('IVF') ? (
                      <>
                        MAKING ACCESS TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-[#0f2a44]">IVF, ART AND MEDICAL</span> EQUIPMENT EASY
                      </>
                    ) : activeSlide.title.includes('COPPER') ? (
                      <>
                        WHO-SPEC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-[#0f2a44]">COPPER T 380A &amp; CONTRACEPTIVE</span> SOLUTIONS
                      </>
                    ) : (
                      <>
                        HOSPITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-[#0f2a44]">CSSD STERILIZATION &amp; SURGICAL</span> PRECISION
                      </>
                    )}
                  </span>
                </h1>
              </div>

              {/* Equalizer Icon + Paragraph */}
              <div 
                key={`desc-${currentSlideIndex}`} 
                className="flex items-start gap-3.5 mt-5 max-w-xl animate-in fade-in duration-300 min-h-[65px]"
              >
                {/* Animated Sound Wave Equalizer Bars in Hisense Cyan/Teal */}
                <div className="flex items-center gap-1 shrink-0 pt-1" title="Clinical Precision Signal">
                  <span className="w-1 bg-cyan-600 rounded-full animate-eq-1" />
                  <span className="w-1 bg-cyan-500 rounded-full animate-eq-2" />
                  <span className="w-1 bg-teal-600 rounded-full animate-eq-3" />
                  <span className="w-1 bg-cyan-600 rounded-full animate-eq-4" />
                </div>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeSlide.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-7">
                {/* Primary Dark Pill Button: ABOUT US */}
                <a
                  href="#about"
                  className="px-7 py-3 rounded-full bg-[#0f2a44] hover:bg-[#173e63] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  ABOUT US
                </a>

                {/* White Pill Button: PRODUCTS / E-COMMERCE */}
                <a
                  href="#products"
                  className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  OUR PRODUCTS
                </a>

                {/* 3D Demo Trigger matching the active slide's model */}
                <button
                  onClick={() => onOpen3dModel(activeSlide.modelKey)}
                  className="px-4.5 py-3 rounded-full text-cyan-800 bg-cyan-50 hover:bg-cyan-100 font-bold text-xs flex items-center gap-2 border border-cyan-300 transition cursor-pointer shadow-xs"
                >
                  <Sliders className="w-3.5 h-3.5 text-cyan-600" />
                  <span>3D Device Lab</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-600" />
                </button>
              </div>

              {/* Direct Contact / Tagline from Card */}
              <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                <span className="text-cyan-700 font-bold">GOVERNMENT CONTRACTOR</span>
                <span className="text-slate-300">·</span>
                <span>IMPORTER &amp; EXPORTER</span>
                <span className="text-slate-300">·</span>
                <span className="text-amber-600 font-semibold">48-Multan Road Lahore Hub</span>
              </div>

            </div>

          </div>

          {/* Right Column: High-Resolution Photographic & 3D Visual Card for Active Slide */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Outer Orbit Halo */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-cyan-500/25 animate-spin [animation-duration:55s] pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-white/60 pointer-events-none" />

            {/* Main Visual Card Container */}
            <div 
              key={`visual-${currentSlideIndex}`}
              className="relative w-full max-w-[460px] aspect-square rounded-3xl overflow-hidden bg-white/90 p-4 border border-white/90 shadow-2xl backdrop-blur-md animate-float transition-all duration-500"
            >
              
              {/* Product Visual of the Active Slide with DRM Protection */}
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover rounded-2xl filter drop-shadow-[0_15px_35px_rgba(2,132,199,0.15)] transition-transform duration-700 hover:scale-105 select-none pointer-events-none"
                loading="eager"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="media-protection-shield rounded-2xl" aria-hidden="true" />

              {/* Real-time Interactive Video Demo Callout */}
              <button
                onClick={() => onOpenVideoModal(activeSlide.videoTitle, activeSlide.categoryTag)}
                className="absolute bottom-6 right-6 z-20 px-4 py-2.5 rounded-full bg-white/95 hover:bg-white border border-slate-200 text-slate-900 text-xs font-bold flex items-center gap-2.5 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Play 4K Reel</span>
              </button>

              {/* Top Left Spec Badge */}
              <div className="absolute top-6 left-6 z-20 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-[10px] font-mono text-slate-800 font-bold backdrop-blur-md shadow-sm">
                {activeSlide.badge}
              </div>

              {/* Top Right Hisense Brand Watermark */}
              <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-[#0f2a44] text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                HISENSE MEDTECH
              </div>

              {/* Floating Slide Navigation Arrows on Visual Card */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200/90 shadow-md backdrop-blur-md transition cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200/90 shadow-md backdrop-blur-md transition cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 3 AUTO-CHANGING SLIDE IMAGES / THUMBNAIL CARDS BENEATH THE HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 mt-10">
        
        {/* Strip Header with Auto-play status and controls */}
        <div className="flex items-center justify-between mb-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-cyan-900 font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/60">
              HISENSE PRODUCT HERO SLIDES ({HERO_SLIDES.length})
            </span>
            <span className="text-slate-600 font-medium hidden sm:inline">• Click any slide or let them auto-change</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs backdrop-blur-md transition cursor-pointer"
              title={isPaused ? 'Resume auto-slides' : 'Pause auto-slides'}
            >
              {isPaused ? <Play className="w-3 h-3 text-cyan-600" /> : <Pause className="w-3 h-3 text-slate-500" />}
              <span className="text-[10px] font-bold uppercase">{isPaused ? 'Paused' : 'Auto-Playing'}</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs backdrop-blur-md transition cursor-pointer"
                title="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs backdrop-blur-md transition cursor-pointer"
                title="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Interactive Thumbnail Cards with frosted glass and slide imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = currentSlideIndex === index;
            return (
              <div
                key={slide.id}
                onClick={() => handleSelectSlide(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 p-3.5 flex items-center gap-3.5 backdrop-blur-md ${
                  isActive
                    ? 'bg-white/95 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-white/85 hover:bg-white/95 border border-white/80 hover:border-cyan-300 shadow-md opacity-90 hover:opacity-100'
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-cyan-600 text-white text-[8px] font-mono font-black uppercase shadow-xs">
                      ACTIVE
                    </div>
                  )}
                </div>

                {/* Text & Specs */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-mono font-bold text-cyan-700 uppercase">
                      {slide.shortLabel}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[#0f2a44] truncate">
                    {slide.subtitle}
                  </h4>

                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                    {slide.highlightText}
                  </p>

                  <div className="text-[10px] font-mono text-cyan-800 font-semibold mt-1">
                    {slide.specsPreview[0].label}: {slide.specsPreview[0].val}
                  </div>
                </div>

                {/* Animated Progress Bar at bottom of card */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-100">
                  {isActive ? (
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  ) : (
                    <div className="h-full w-0" />
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Hero Bottom Bar / Stats Banner in Frosted Glass */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 mt-8">
        <div className="w-full rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80 shadow-lg">
          
          {/* Stat 1: +42K RECEIVED ORDERS */}
          <div className="flex flex-col items-center justify-center pt-2 md:pt-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a44] tracking-tight">
              +42K
            </div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-cyan-700 mt-0.5 font-mono">
              RECEIVED ORDERS SINCE 2010
            </div>
          </div>

          {/* Stat 2: +250K WOMEN SERVED */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a44] tracking-tight">
              +250K
            </div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-cyan-700 mt-0.5 font-mono">
              PATIENTS &amp; WOMEN SERVED
            </div>
          </div>

          {/* Stat 3: 80+ HOSPITALS EQUIPPED */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a44] tracking-tight">
              80+
            </div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-cyan-700 mt-0.5 font-mono">
              INSTITUTIONAL HOSPITALS EQUIPPED
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
