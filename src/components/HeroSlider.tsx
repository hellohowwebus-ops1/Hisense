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
  Maximize2
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
      className="relative w-full min-h-[92vh] sm:min-h-screen pt-20 sm:pt-24 pb-8 flex flex-col justify-between overflow-hidden group/hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. DYNAMIC HIGH-RESOLUTION BACKGROUND PHOTOGRAPHY (NECHY WALI IMAGES) */}
      {/* Crystal clear presentation of hero1.jpg, hero2.jpg, hero3.jpg with natural lighting & zero heavy washes */}
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
                className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.03]"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* Quick Controls Bar: Active Tag & Pause/Play Control */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 mb-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-900 font-bold">
            {activeSlide.categoryTag}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Pause / Play Auto-slides */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-full bg-white/85 hover:bg-white text-slate-700 border border-slate-200/80 shadow-xs backdrop-blur-md transition cursor-pointer"
            title={isPaused ? 'Resume auto-slides' : 'Pause auto-slides'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-cyan-600" /> : <Pause className="w-3.5 h-3.5 text-slate-500" />}
          </button>
        </div>
      </div>

      {/* Main Hero Container: Left Content & Compact Right Spotlight Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Direct Clean Typography with ZERO White Card Background & ZERO White Glow */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            <div className="relative max-w-xl transition-all duration-300 py-1">

              {/* Slide Counter & Category Pill */}
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono font-bold uppercase tracking-wider">
                <span className="bg-white/90 backdrop-blur-xs text-cyan-950 px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-xs">
                  SLIDE 0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
                </span>
                <span className="text-slate-500">•</span>
                <span className="bg-white/85 backdrop-blur-xs text-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-xs truncate">
                  {activeSlide.shortLabel}
                </span>
              </div>

              {/* Main Headline with crisp text and NO white glow */}
              <div key={`title-${currentSlideIndex}`} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0a1f33] tracking-tight leading-[1.14] uppercase min-h-[64px] sm:min-h-[76px] flex items-center">
                  <span>
                    {activeSlide.title.includes('IVF') ? (
                      <>
                        MAKING ACCESS TO <span className="text-cyan-700">IVF, ART &amp; MEDICAL</span> TECH EASY
                      </>
                    ) : activeSlide.title.includes('COPPER') ? (
                      <>
                        WHO-SPEC <span className="text-cyan-700">COPPER T 380A &amp; CONTRACEPTIVE</span> SOLUTIONS
                      </>
                    ) : (
                      <>
                        HOSPITAL <span className="text-cyan-700">CSSD STERILIZATION &amp; SURGICAL</span> PRECISION
                      </>
                    )}
                  </span>
                </h1>
              </div>

              {/* Sound Wave Equalizer + Clean Paragraph with NO white glow */}
              <div 
                key={`desc-${currentSlideIndex}`} 
                className="flex items-start gap-3 mt-4 animate-in fade-in duration-300"
              >
                {/* Animated Sound Wave Equalizer */}
                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <span className="w-1 bg-cyan-700 rounded-full animate-eq-1" />
                  <span className="w-1 bg-cyan-600 rounded-full animate-eq-2" />
                  <span className="w-1 bg-teal-700 rounded-full animate-eq-3" />
                  <span className="w-1 bg-cyan-700 rounded-full animate-eq-4" />
                </div>

                {/* Description Paragraph with pure crisp text */}
                <p className="text-xs sm:text-sm text-[#0f2a44] font-medium leading-relaxed line-clamp-3">
                  {activeSlide.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {/* Primary Pill Button: ABOUT US */}
                <a
                  href="#about"
                  className="px-7 py-3 rounded-full bg-[#0f2a44] hover:bg-[#173e63] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
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

                {/* 3D Demo Trigger */}
                <button
                  onClick={() => onOpen3dModel(activeSlide.modelKey)}
                  className="px-4.5 py-3 rounded-full text-cyan-900 bg-white hover:bg-cyan-50 font-bold text-xs flex items-center gap-1.5 border border-cyan-300 transition cursor-pointer shadow-xs"
                >
                  <Sliders className="w-3.5 h-3.5 text-cyan-700" />
                  <span>3D Lab</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-700" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: COMPACT, NON-INTRUSIVE FLOATING PRODUCT SPOTLIGHT */}
          {/* Sits elegantly to the side without blocking the people/family in the background photo */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            <div 
              key={`visual-${currentSlideIndex}`}
              className="relative w-full max-w-[270px] sm:max-w-[310px] aspect-[16/11] rounded-2xl overflow-hidden bg-white/90 p-2.5 sm:p-3 border border-white/90 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-102 group/spotlight"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={
                    activeSlide.id === 'slide-contraceptive'
                      ? '/assets/images/home/contraceptive_kit_pack.jpg'
                      : activeSlide.image
                  }
                  alt={activeSlide.title}
                  className="w-full h-full object-cover rounded-xl filter drop-shadow-sm transition-transform duration-700 group-hover/spotlight:scale-105"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/assets/images/home/contraceptive_kit_pack.jpg';
                  }}
                />

                {/* Spotlight Overlay Badge */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#0f2a44]/85 backdrop-blur-xs text-white text-[9px] font-mono font-bold tracking-wider uppercase">
                  {activeSlide.badge}
                </div>

                {/* Navigation arrows directly on spotlight card */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/85 hover:bg-white text-slate-700 shadow-sm backdrop-blur-xs transition cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/85 hover:bg-white text-slate-700 shadow-sm backdrop-blur-xs transition cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom spec caption */}
              <div className="flex items-center justify-between mt-2 px-1 text-[10px] font-mono">
                <span className="text-[#0f2a44] font-bold truncate max-w-[170px]">
                  {activeSlide.specsPreview[0].label}: {activeSlide.specsPreview[0].val}
                </span>
                <button
                  onClick={() => onOpen3dModel(activeSlide.modelKey)}
                  className="text-cyan-700 hover:text-cyan-900 font-bold flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Inspect 3D</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SLEEK HORIZONTAL SLIDE CONTROLLER (MINIMAL VERTICAL FOOTPRINT) */}
      {/* Allows clear view of the lower half of the photograph */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = currentSlideIndex === index;
            return (
              <div
                key={slide.id}
                onClick={() => handleSelectSlide(index)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 p-2.5 flex items-center gap-3 backdrop-blur-md ${
                  isActive
                    ? 'bg-white/95 border-2 border-cyan-500 shadow-lg shadow-cyan-500/15 scale-[1.01]'
                    : 'bg-white/80 hover:bg-white/95 border border-white/70 shadow-xs opacity-85 hover:opacity-100'
                }`}
              >
                {/* Miniature Thumbnail */}
                <div className="relative w-14 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                  <img
                    src={
                      slide.id === 'slide-contraceptive'
                        ? '/assets/images/home/contraceptive_kit_pack.jpg'
                        : slide.image
                    }
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/assets/images/home/contraceptive_kit_pack.jpg';
                    }}
                  />
                  {isActive && (
                    <div className="absolute top-0.5 left-0.5 px-1 rounded bg-cyan-600 text-white text-[7px] font-mono font-black uppercase">
                      ACTIVE
                    </div>
                  )}
                </div>

                {/* Text Summary */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[9px] font-mono font-bold text-cyan-800 uppercase truncate">
                      {slide.shortLabel}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#0f2a44] truncate">
                    {slide.subtitle}
                  </h4>
                </div>

                {/* Slide Active Progress Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100">
                  {isActive ? (
                    <div 
                      className="h-full bg-linear-to-r from-cyan-500 to-teal-500 transition-all duration-75"
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

      {/* 4. SLIM SINGLE-LINE STATS TICKER (DOCKS COMPACTLY AT BOTTOM) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 mt-4">
        <div className="w-full rounded-full bg-white/80 backdrop-blur-md border border-white/70 py-2 sm:py-2.5 px-6 flex flex-wrap items-center justify-around gap-4 text-center shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-black text-[#0f2a44]">+42K</span>
            <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase">Orders Delivered</span>
          </div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-black text-[#0f2a44]">+250K</span>
            <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase">Women &amp; Families Served</span>
          </div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-black text-[#0f2a44]">80+</span>
            <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase">Hospitals Equipped</span>
          </div>
        </div>
      </div>

    </section>
  );
};
