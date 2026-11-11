import React, { useState, useRef } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Layers, 
  Pill, 
  Syringe, 
  ShieldCheck,
  Building2,
  FileCheck,
  Eye,
  Check
} from 'lucide-react';
import { Product } from '../types';

interface FamilyPlanningProgramSectionProps {
  onOpenVideoModal: (title: string, category: string) => void;
  onOpenRfq: () => void;
  onAddToRfq?: (product: Product) => void;
}

export const FamilyPlanningProgramSection: React.FC<FamilyPlanningProgramSectionProps> = ({
  onOpenVideoModal,
  onOpenRfq,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const contraceptiveLines = [
    {
      title: 'Injectable Contraceptives (DMPA)',
      spec: '150 mg/mL Depot Medroxyprogesterone Acetate',
      desc: '3-month intramuscular prolonged-release vials supplied with 0.5mL auto-disable (AD) single-use immunization & family planning syringes.',
      badge: '3-Month Protection',
      icon: Syringe,
    },
    {
      title: 'Oral Contraceptive Pills (OCP)',
      spec: 'Ethinylestradiol 0.03mg + Levonorgestrel 0.15mg',
      desc: 'Standard 28-day cycle blister packs containing 21 active hormonal tablets and 7 ferrous fumarate iron reminder tablets for compliance.',
      badge: '28-Day Cycle Pack',
      icon: Pill,
    },
    {
      title: 'Barrier Contraceptives (ISO 4074)',
      spec: 'Natural Rubber Latex • Silicone Lubricated',
      desc: 'Conforming strictly to WHO 2010 and ISO 4074 standards. 100% electronically tested with reservoir tip for dual pregnancy & STI protection.',
      badge: '100% Electronic Tested',
      icon: ShieldCheck,
    },
    {
      title: 'Emergency Contraception (ECP)',
      spec: 'Levonorgestrel 1.5mg Single Dose',
      desc: 'High-efficacy post-coital oral emergency contraceptive tablets for national health clinic dispensing and humanitarian emergency kits.',
      badge: 'Emergency Dispensing',
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden" id="family-planning-programs">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
              <span>PUBLIC HEALTH &amp; MATERNAL CARE • SECTION 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
              National Family Planning &amp; Hormonal Contraceptive Supplies
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-3xl leading-relaxed">
              Supporting institutional procurement across Pakistan: Population Welfare Departments (Punjab, Sindh, KP, Balochistan), Department of Health, Greenstar Social Marketing, DKT International, Marie Stopes Society, and community Lady Health Worker (LHW) networks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenRfq}
              className="px-5 py-3 rounded-full bg-[#0f2a44] hover:bg-[#16436e] text-white text-xs font-black shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>Submit Institutional Tender Inquiry</span>
            </button>
          </div>
        </div>

        {/* 4 Contraceptive Product Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contraceptiveLines.map((line, idx) => {
            const Icon = line.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-800 border border-cyan-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0f2a44] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-900 bg-cyan-100/70 border border-cyan-200 px-2 py-0.5 rounded-full">
                    {line.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#0f2a44] mt-2.5 mb-1 group-hover:text-cyan-700 transition">
                    {line.title}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-800 font-semibold mb-2">
                    {line.spec}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {line.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5" /> DRAP Enlisted
                  </span>
                  <span className="text-cyan-700 font-bold group-hover:underline cursor-pointer" onClick={onOpenRfq}>
                    Inquire Quote →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multimedia Video Showcase + Institutional Warehousing & Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Dedicated Image Slot 01: Warehouse & Dispatch Clean Storage */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-[#0f2a44] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-cyan-600" />
                    <span>CENTRAL LAHORE RESERVE DEPOT</span>
                  </div>
                  <span className="text-[10px] font-mono bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded-full font-bold">
                    Image Slot 03
                  </span>
                </div>

                {/* Image Container with high quality contraceptive packaging */}
                <div className="w-full h-52 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative group">
                  <img
                    src="/assets/images/home/contraceptive_kit_pack.jpg"
                    alt="Hisense Contraceptive Logistics & Warehousing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white text-xs font-bold">
                      Temperature-controlled reserve for rapid nationwide &amp; export distribution
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Our central facility on Multan Road, Lahore maintains standing inventories of family planning consignments, ensuring rapid 24–48 hour delivery to teaching hospitals and rural health centers across Pakistan and global export destinations.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-cyan-900 font-bold">
                <span>✓ Validated Cold Chain</span>
                <span>✓ Lot-Specific Batch COA</span>
              </div>
            </div>
          </div>

          {/* Embedded Video Player 2 (5 cols): Demonstration of Manufacturing & Sterilization */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-xl group h-full flex flex-col justify-between">
              
              <div className="relative flex-1 min-h-[300px]">
                <video
                  ref={videoRef}
                  src="/assets/images/home/3d2.mp4"
                  poster="/assets/images/home/copper_t_device_macro.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/90 backdrop-blur-md text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-md">
                    ● CONTRACEPTIVE QUALITY ASSURANCE REEL
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-mono">
                    Video Slot 02
                  </span>
                </div>

                {/* Controls Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center transition cursor-pointer shadow-md"
                      title={isPlaying ? 'Pause Reel' : 'Play Reel'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                    </button>
                    <span className="text-xs font-mono text-cyan-300 font-bold ml-1 hidden sm:inline">
                      Sterility &amp; Barrier Verification
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenVideoModal('Hisense Family Planning Sterility Reel', 'Quality Assurance')}
                    className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Dedicated Image Slot 02 (3 cols): Technical Certification & Institutional Documentation */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-[#0f2a44] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>REGULATORY COMPLIANCE</span>
                  </div>
                  <span className="text-[10px] font-mono bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded-full font-bold">
                    Image Slot 04
                  </span>
                </div>

                {/* Image Container for Documentation */}
                <div className="w-full h-44 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center p-3 relative group">
                  <img
                    src="/assets/images/products/contraceptive-range/IMG-20261108-WA0020.jpg"
                    alt="Hisense Institutional Certification Dossier & NORIFAM Packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-md">
                      Inspect Product Pack
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ISO 13485:2016 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ISO 9001:2015 Quality Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>DRAP Pakistan Enlisted</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WHO Specifications Compliant</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={onOpenRfq}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-cyan-50 text-[#0f2a44] hover:text-cyan-800 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileCheck className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Request Institutional Spec Sheet &amp; RFQ</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Multi-Division Manufacturing Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#0f2a44] via-[#16436e] to-[#0f2a44] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>HISENSE INTERNATIONAL • COMPLETE HEALTHCARE MANUFACTURING PORTFOLIO</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Supplying Pakistan &amp; International Export Markets
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Beyond national contraceptive &amp; reproductive devices, Hisense International is a trusted manufacturer and exporter of <strong className="text-white">49+ Surgical Instruments</strong>, <strong className="text-white">18+ Contraceptive Products</strong>, <strong className="text-white">10+ Dental Instruments</strong>, <strong className="text-white">Japanese 440C Hair Shears</strong>, and <strong className="text-white">Advanced IVF Embryology Consumables</strong> compliant with ISO 13485:2016, CE Medical and DRAP registrations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#products"
              className="px-5 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-black transition shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore All 97 Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
