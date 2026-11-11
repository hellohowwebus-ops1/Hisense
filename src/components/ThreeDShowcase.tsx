import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Plus, 
  Sparkles,
  Maximize2,
  RotateCcw,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

export type ModelType = 'catheter' | 'pipette' | 'copper-t' | 'surgical' | 'autoclave';

interface ModelConfig {
  id: ModelType;
  title: string;
  category: string;
  shortSpec: string;
  description: string;
  specs: { label: string; val: string }[];
  matchedProductId: string;
  videoSrc: string;
  badge: string;
}

const MODEL_CONFIGS: Record<ModelType, ModelConfig> = {
  catheter: {
    id: 'catheter',
    title: 'Hisense EchoFlex™ IVF Catheter',
    category: 'IVF & ART CONSUMABLE',
    shortSpec: 'Outer Ø 4.5 Fr | MEA > 80%',
    description: 'Ultrasound-echogenic dual lumen catheter with soft atraumatic bulb tip and depth centimeter markers.',
    specs: [
      { label: 'Echogenicity', val: 'Tip-Enhanced Ultra-Clear' },
      { label: 'Length', val: '230 mm Guided' },
      { label: 'Endotoxin', val: '< 0.05 EU/device' },
    ],
    matchedProductId: 'hisense-1001',
    videoSrc: '/assets/images/home/3d1.mp4',
    badge: 'ISO 13485 • MEA Tested',
  },
  pipette: {
    id: 'pipette',
    title: 'Hisense MicroPoint™ ICSI Needle & Cell',
    category: 'EMBRYOLOGY & MICROMANIPULATION',
    shortSpec: '30° Bevel Grind | Borosilicate 3.3',
    description: 'Precision bevelled glass injection needle and biomimetic oocyte demonstrating cellular penetration.',
    specs: [
      { label: 'Tip Bore', val: '4.8 µm Inner Ø' },
      { label: 'Bevel', val: '30° Spike Grind' },
      { label: 'Material', val: 'Glass 3.3' },
    ],
    matchedProductId: 'hisense-1002',
    videoSrc: '/assets/images/home/3d2.mp4',
    badge: 'Borosilicate 3.3 Precision',
  },
  'copper-t': {
    id: 'copper-t',
    title: 'Hisense Cu-T 380A® Intrauterine Device',
    category: 'CONTRACEPTIVE LARC',
    shortSpec: '380 mm² Copper | WHO Standard',
    description: 'World-standard Copper T contraceptive device with coiled active copper surface and retrieval threads.',
    specs: [
      { label: 'Active Area', val: '380 mm² Copper' },
      { label: 'Efficacy', val: 'Up to 10 Years' },
      { label: 'Safety', val: 'WHO Compliant' },
    ],
    matchedProductId: 'hisense-1101',
    videoSrc: '/assets/images/home/3d3.mp4',
    badge: 'WHO Standard',
  },
  surgical: {
    id: 'surgical',
    title: 'Hisense LaparoGrip™ Surgical Tool',
    category: 'MINIMALLY INVASIVE SURGERY',
    shortSpec: 'Titanium Grade 5 | 360° Rotatable',
    description: 'Articulating laparoscopic grasping forceps with dielectric ceramic insulation tested to 4000V.',
    specs: [
      { label: 'Shaft', val: '5mm × 330mm' },
      { label: 'Rotation', val: '360° Indexing' },
      { label: 'Insulation', val: '4000V Dielectric' },
    ],
    matchedProductId: 'hisense-1004',
    videoSrc: '/assets/images/home/3d1.mp4',
    badge: 'Titanium Grade 5',
  },
  autoclave: {
    id: 'autoclave',
    title: 'Hisense MedSteril-B23™ Autoclave',
    category: 'CSSD & STERILIZATION',
    shortSpec: '23 Litres | European Class-B',
    description: 'Triple fractionated pre-vacuum autoclave chamber with 304 stainless steel pressure vessel.',
    specs: [
      { label: 'Capacity', val: '23L Stainless 304' },
      { label: 'Cycle', val: 'Class-B Pre-Vacuum' },
      { label: 'Standard', val: 'EN 13060' },
    ],
    matchedProductId: 'hisense-1103',
    videoSrc: '/assets/images/home/3d3.mp4',
    badge: 'European Class-B',
  },
};

// Sub-component: Individual 3D Video Product Card
const Product3DCard: React.FC<{
  modelType: ModelType;
  onChangeModel?: (newModel: ModelType) => void;
  onSelectProductForRfq?: (productId: string) => void;
  availableOptions?: ModelType[];
}> = ({
  modelType,
  onChangeModel,
  onSelectProductForRfq,
  availableOptions,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSlowMotion, setIsSlowMotion] = useState(false);
  const [viewMode, setViewMode] = useState<'realistic' | 'xray' | 'wireframe'>('realistic');
  const config = MODEL_CONFIGS[modelType];

  // Keep playback state synced
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSlowMotion = () => {
    if (!videoRef.current) return;
    const nextSlow = !isSlowMotion;
    setIsSlowMotion(nextSlow);
    videoRef.current.playbackRate = nextSlow ? 0.45 : 1.0;
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Switch video source smoothly when modelType changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = isSlowMotion ? 0.45 : 1.0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [modelType, config.videoSrc]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group">
      
      {/* Card Header */}
      <div className="p-5 pb-3 flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50/50">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-800 font-bold bg-cyan-50 border border-cyan-200/80 px-2 py-0.5 rounded-full">
            {config.badge}
          </span>
          <h3 className="text-base font-bold text-[#0f2a44] mt-1.5 leading-snug">
            {config.title}
          </h3>
          <span className="text-xs font-mono text-slate-500 font-medium">
            {config.shortSpec}
          </span>
        </div>

        {/* Optional Model Selector for customizable card */}
        {availableOptions && onChangeModel && (
          <select
            value={modelType}
            onChange={(e) => onChangeModel(e.target.value as ModelType)}
            className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-600 cursor-pointer shadow-xs"
          >
            {availableOptions.map((opt) => (
              <option key={opt} value={opt}>
                {MODEL_CONFIGS[opt].title.replace('Hisense ', '')}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 3D Video Viewport */}
      <div 
        ref={containerRef}
        className="relative w-full h-[320px] bg-gradient-to-b from-[#f8fafc] via-slate-50 to-[#f1f5f9] overflow-hidden flex items-center justify-center cursor-pointer select-none"
        onClick={togglePlay}
      >
        {/* Subtle Engineering Grid Backdrop */}
        <div className="absolute inset-0 bg-grid-medical-light opacity-30 pointer-events-none" />

        {/* Real 3D MP4 Video Player */}
        <video
          ref={videoRef}
          src={config.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-contain p-2 relative z-1 transition-all duration-300 ${
            viewMode === 'xray' 
              ? 'invert contrast-125 hue-rotate-180 brightness-95' 
              : viewMode === 'wireframe' 
              ? 'contrast-150 saturate-200' 
              : ''
          }`}
        />

        {/* Top-Right Micro Overlay Controls */}
        <div 
          className="absolute top-3 right-3 flex items-center gap-1.5 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className={`p-1.5 rounded-lg border text-xs font-bold transition-all shadow-xs cursor-pointer ${
              isPlaying
                ? 'bg-cyan-50 text-cyan-800 border-cyan-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title={isPlaying ? 'Pause 3D Motion' : 'Play 3D Motion'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>

          {/* Slow Motion / Explode Toggle */}
          <button
            onClick={toggleSlowMotion}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer ${
              isSlowMotion
                ? 'bg-[#0f2a44] text-white border-[#0f2a44]'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title="Toggle Precision Slow-Motion / Exploded Inspection"
          >
            <Layers className="w-3 h-3 text-cyan-600" />
            <span>{isSlowMotion ? '0.5x Slow' : 'Explode'}</span>
          </button>

          {/* Fullscreen Expansion */}
          <button
            onClick={handleFullscreen}
            className="p-1.5 rounded-lg border text-xs font-bold bg-white text-slate-700 border-slate-200 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
            title="Fullscreen 3D Video"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Shading Mode Pills */}
        <div 
          className="absolute bottom-3 left-3 z-10 flex items-center gap-1 bg-white/90 p-1 rounded-lg border border-slate-200 shadow-xs backdrop-blur-xs"
          onClick={(e) => e.stopPropagation()}
        >
          {(['realistic', 'xray', 'wireframe'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-2 py-0.5 text-[10px] font-bold rounded capitalize transition cursor-pointer ${
                viewMode === mode
                  ? 'bg-[#0f2a44] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Video Type Badge */}
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-800 bg-white/90 px-2 py-0.5 rounded border border-slate-200/80 pointer-events-none hidden sm:block backdrop-blur-xs font-bold">
          3D Video 360°
        </div>
      </div>

      {/* Card Body & Specs */}
      <div className="p-5">
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {config.description}
        </p>

        {/* Specs Row */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-center">
          {config.specs.map((sp, i) => (
            <div key={i} className="bg-slate-50 p-2 rounded-xl border border-slate-100">
              <span className="block text-[10px] font-mono text-slate-400 uppercase">{sp.label}</span>
              <strong className="text-xs text-[#0f2a44] font-mono font-bold truncate block">{sp.val}</strong>
            </div>
          ))}
        </div>

        {/* Card Actions */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={() => {
              if (onSelectProductForRfq) {
                onSelectProductForRfq(config.matchedProductId);
              }
            }}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-black flex items-center justify-center gap-1.5 transition shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
};

// Main Section Component: 3 Separate 3D Video Product Showcase Cards Grid
interface ThreeDShowcaseProps {
  initialModel?: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t';
  onSelectProductForRfq?: (modelKey: string) => void;
  className?: string;
}

export const ThreeDShowcase: React.FC<ThreeDShowcaseProps> = ({
  onSelectProductForRfq,
  className = '',
}) => {
  // State for the 3rd customizable card
  const [thirdCardModel, setThirdCardModel] = useState<ModelType>('copper-t');

  const handleAddToCart = (productId: string) => {
    if (onSelectProductForRfq) {
      const prod = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
      onSelectProductForRfq(prod.model3dKey || 'catheter');
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      
      {/* 3 Separate 3D Product Video Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* 3D Video 1: IVF Catheter (3d1.mp4) */}
        <Product3DCard
          modelType="catheter"
          onSelectProductForRfq={handleAddToCart}
        />

        {/* 3D Video 2: ICSI Needle & Oocyte Cell (3d2.mp4) */}
        <Product3DCard
          modelType="pipette"
          onSelectProductForRfq={handleAddToCart}
        />

        {/* 3D Video 3: Contraceptive Copper-T / Surgical Tool / Autoclave (3d3.mp4) */}
        <Product3DCard
          modelType={thirdCardModel}
          onChangeModel={(m) => setThirdCardModel(m)}
          availableOptions={['copper-t', 'surgical', 'autoclave']}
          onSelectProductForRfq={handleAddToCart}
        />

      </div>

      {/* Bottom Technical Assurance Bar */}
      <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-cyan-600" />
          <span className="font-semibold text-[#0f2a44]">3D CAD Video Studio:</span>
          <span className="text-slate-500">High-definition 360° motion renders, sub-micron tolerances, interactive controls.</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-600">
          <span className="text-emerald-700 font-bold">✓ 3 Independent HD 3D Viewports</span>
          <span>·</span>
          <span>Class 10,000 Cleanroom Certified</span>
        </div>
      </div>

    </div>
  );
};
