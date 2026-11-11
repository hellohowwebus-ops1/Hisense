import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
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
  Activity, 
  FileText,
  RotateCcw,
  Eye,
  Check,
  Building2,
  Syringe,
  Pill,
  Shield,
  HeartHandshake
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface ContraceptiveShowcaseSectionProps {
  onOpen3d: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
  onOpenVideoModal: (title: string, category: string) => void;
  onOpenRfq: () => void;
  onAddToRfq?: (product: Product) => void;
  onNavigateAbout?: () => void;
  onOpenProductPage?: (product: Product) => void;
  onNavigateProducts?: () => void;
}

interface ContraceptiveMethod {
  id: string;
  name: string;
  category: string;
  desc: string;
  specs: string[];
  efficacy: string;
  duration: string;
  iconType: 'iud' | 'pill' | 'implant' | 'shot' | 'patch' | 'condom' | 'spermicide' | 'cap';
  badge: string;
}

export const ContraceptiveShowcaseSection: React.FC<ContraceptiveShowcaseSectionProps> = ({
  onOpen3d,
  onOpenVideoModal,
  onOpenRfq,
  onAddToRfq,
  onNavigateAbout,
  onOpenProductPage,
  onNavigateProducts,
}) => {
  const [selectedMethodId, setSelectedMethodId] = useState<string>('iud');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contraceptiveProducts = PRODUCTS.filter((p) => p.category === 'contraceptive-range');

  const methods: ContraceptiveMethod[] = [
    {
      id: 'pill',
      name: 'Progestogen Only & Combined Pill',
      category: 'Oral Hormonal Tablets',
      desc: 'Standard 28-day cycle blister packs containing 21 active low-dose hormonal tablets (Ethinylestradiol 0.03mg + Levonorgestrel 0.15mg) and 7 reminder iron tablets for continuous patient adherence.',
      specs: ['28-Day Blister Pack', 'Iron (Ferrous Fumarate) Supplementation', 'Reversible Daily Oral Regimen', 'WHO-Standard Formulations'],
      efficacy: '99.3%',
      duration: 'Daily Oral Cycle',
      iconType: 'pill',
      badge: '28-Day Cycle',
    },
    {
      id: 'iud',
      name: 'Intrauterine Devices (IUDs)',
      category: 'Long-Acting Reversible Contraception (LARC)',
      desc: 'WHO-specification Copper T 380A and Post-Partum PPIUCD systems. Features 380 mm² electrolytic copper wire, flexible polyethylene T-frame with barium sulfate radiopacity, and pre-loaded insertion sheath.',
      specs: ['380 mm² Pure Copper Wire', '10 Years Continuous Protection', 'Barium Sulfate Radiopaque', 'Pre-Loaded Sterile Blister with Flange'],
      efficacy: '99.4%',
      duration: 'Up to 10 Years',
      iconType: 'iud',
      badge: 'WHO Spec Cu-T 380A',
    },
    {
      id: 'implant',
      name: 'Subdermal Implants',
      category: 'Subdermal LARC Rods',
      desc: 'Flexible sub-dermal contraceptive rods releasing controlled progestin into the bloodstream, offering 3 to 5 years of uninterrupted, reversible protection inserted by trained healthcare providers.',
      specs: ['Subdermal Arm Insertion', '3–5 Years Protection', 'Non-Estrogenic Formula', 'Immediate Return to Fertility upon Removal'],
      efficacy: '99.5%',
      duration: '3 to 5 Years',
      iconType: 'implant',
      badge: 'Multi-Year Rod',
    },
    {
      id: 'shot',
      name: 'Birth Control Shot (DMPA)',
      category: 'Injectable Suspension',
      desc: '150 mg/mL Depot Medroxyprogesterone Acetate (DMPA) deep intramuscular prolonged-release injection. Supplied with pre-packaged 0.5mL auto-disable (AD) single-use sterilization syringes.',
      specs: ['150 mg/mL Depot Suspension', '3 Months Prolonged Protection', 'Auto-Disable (AD) Sterile Syringes', 'Institutional Cold Chain Integrity'],
      efficacy: '99.2%',
      duration: '3 Months / Shot',
      iconType: 'shot',
      badge: 'DMPA 3-Month',
    },
    {
      id: 'patch',
      name: 'Contraceptive Patch',
      category: 'Transdermal Delivery System',
      desc: 'Transdermal contraceptive matrix patch releasing a steady daily dose of estrogen and progestin through the skin, changed weekly for three consecutive weeks followed by one patch-free week.',
      specs: ['Weekly Transdermal Application', 'Waterproof Hypoallergenic Adhesive', 'Steady Hormonal Blood Concentration', 'Discreet & Convenient'],
      efficacy: '99.0%',
      duration: '7 Days per Patch',
      iconType: 'patch',
      badge: 'Transdermal',
    },
    {
      id: 'condom',
      name: 'Barrier Condoms (ISO 4074)',
      category: 'Dual Protection Barrier',
      desc: 'Manufactured from premium natural rubber latex conforming to ISO 4074 and WHO 2010 specifications. 100% electronically tested with reservoir tip and medical-grade silicone lubrication.',
      specs: ['100% Electronic Pinhole Tested', 'ISO 4074 / WHO 2010 Certified', 'Reservoir Tip with Silicone Lubricant', 'Dual STI & Pregnancy Protection'],
      efficacy: '98.0%',
      duration: 'Single-Use Barrier',
      iconType: 'condom',
      badge: 'ISO 4074 Tested',
    },
    {
      id: 'spermicide',
      name: 'Spermicides & Gels',
      category: 'Chemical Barrier Agents',
      desc: 'Clinical-grade vaginal contraceptive gels, foams, and pessaries containing Nonoxynol-9 (N-9) surfactant to immobilize sperm, designed for standalone use or combined with barrier methods.',
      specs: ['Nonoxynol-9 Active Agent', 'Water-Soluble Non-Staining Gel', 'Applicator-Assisted Delivery', 'Compatible with Latex Barriers'],
      efficacy: '88.0%',
      duration: 'Up to 1 Hour per Dose',
      iconType: 'spermicide',
      badge: 'Vaginal Barrier',
    },
    {
      id: 'cap',
      name: 'Cervical Caps & Diaphragms',
      category: 'Reusable Anatomical Barriers',
      desc: 'Anatomically contoured, hypoallergenic medical silicone caps that fit snugly over the uterine cervix, preventing sperm entry into the uterus when used alongside spermicidal gel.',
      specs: ['100% Medical Grade Silicone', 'Anatomical Suction Rim', 'Reusable & Washable', 'Non-Hormonal Protection'],
      efficacy: '92.0%',
      duration: 'Reusable Barrier',
      iconType: 'cap',
      badge: 'Silicone Barrier',
    },
  ];

  const selectedMethod = methods.find((m) => m.id === selectedMethodId) || methods[1];

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

  // Render method icon with vibrant styling
  const renderMethodIcon = (type: string) => {
    switch (type) {
      case 'pill':
        return (
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#e6007e] flex items-center justify-center font-bold">
            <Pill className="w-6 h-6" />
          </div>
        );
      case 'iud':
        return (
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
            {/* Custom IUD T symbol */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2">
              <path d="M4 6h16" />
              <path d="M12 6v14" />
              <path d="M10 20c0 1.1.9 2 2 2s2-.9 2-2" />
            </svg>
          </div>
        );
      case 'implant':
        return (
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Activity className="w-6 h-6" />
          </div>
        );
      case 'shot':
        return (
          <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
            <Syringe className="w-6 h-6" />
          </div>
        );
      case 'patch':
        return (
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            <Layers className="w-6 h-6" />
          </div>
        );
      case 'condom':
        return (
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#e6007e] flex items-center justify-center font-bold">
            <Shield className="w-6 h-6" />
          </div>
        );
      case 'spermicide':
        return (
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <FileText className="w-6 h-6" />
          </div>
        );
      case 'cap':
        return (
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
        );
      default:
        return <Activity className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden" id="contraceptive-range">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-pink-100 to-cyan-100 border border-pink-200 text-[#0f2a44] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e6007e]" />
            <span>GLOBAL CONTRACEPTIVE MANUFACTURING &amp; PUBLIC HEALTH SUPPLY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase leading-tight">
            World-Leading Contraceptives &amp; Family Planning
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Supplying international export markets, national public health tenders, Population Welfare Departments, Greenstar, DKT, and private hospitals with certified contraceptive devices and medicines.
          </p>
        </div>

        {/* 1. METHOD SHOWCASE HUB (Inspired by Contraceptives Pakistan UI) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Feature Card: Magenta/Navy Brand Statement Card */}
          <div className="lg:col-span-4 bg-linear-to-br from-[#e6007e] via-[#c20067] to-[#0f2a44] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
            
            <div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-mono font-bold tracking-widest uppercase backdrop-blur-md">
                COMPLETE RESOURCE HUB
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-4 leading-snug tracking-tight">
                World Leading Contraceptive Products
              </h3>
              <p className="text-xs sm:text-sm text-pink-100 mt-4 leading-relaxed font-normal">
                For providing complete resources from global ISO 13485 certified manufacturing lines to institutional healthcare clients, tender boards, and national family planning programs across Pakistan and export destinations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>WHO-Compliant Copper T 380A &amp; PPIUCD</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>DRAP Enlisted Hormonal Cycles &amp; DMPA</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>100% Electronically Tested Barrier Latex</span>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('method-inspection-detail');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-4 w-full py-3 px-5 rounded-full bg-[#0f2a44] hover:bg-[#16436e] text-white text-xs font-black shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group-hover:scale-102"
              >
                <span>Choose Methods</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Right 8-Card Grid: The 8 Contraceptive Methods */}
          <div className="lg:col-span-8 bg-slate-50/70 p-5 sm:p-7 rounded-3xl border border-slate-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {methods.map((method) => {
                const isSelected = selectedMethodId === method.id;
                return (
                  <div
                    key={method.id}
                    onClick={() => setSelectedMethodId(method.id)}
                    className={`p-5 rounded-2xl bg-white border transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative group ${
                      isSelected
                        ? 'border-[#e6007e] shadow-lg scale-102 ring-2 ring-[#e6007e]/20'
                        : 'border-slate-200/90 hover:border-cyan-500 shadow-2xs hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    {/* Method Icon */}
                    <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                      {renderMethodIcon(method.iconType)}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-[#0f2a44] leading-snug group-hover:text-cyan-700 transition">
                      {method.name}
                    </h4>

                    <span className="text-[10px] font-mono text-slate-500 mt-1">
                      {method.badge}
                    </span>

                    {/* Active Indicator dot */}
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#e6007e] animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Method Detail Drawer */}
            <div id="method-inspection-detail" className="mt-6 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  {renderMethodIcon(selectedMethod.iconType)}
                  <div>
                    <div className="text-[10px] font-mono text-cyan-800 font-bold uppercase tracking-wider">
                      {selectedMethod.category} • EFFICACY: {selectedMethod.efficacy}
                    </div>
                    <h4 className="text-lg font-black text-[#0f2a44]">
                      {selectedMethod.name}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedMethod.id === 'iud' && (
                    <button
                      onClick={() => onOpen3d('copper-t')}
                      className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-black flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-cyan-200" />
                      <span>Inspect in 3D</span>
                    </button>
                  )}
                  <button
                    onClick={onOpenRfq}
                    className="px-4 py-2 rounded-xl bg-[#0f2a44] hover:bg-[#16436e] text-white text-xs font-black flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inquire Quotation</span>
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed font-normal">
                {selectedMethod.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-slate-100">
                {selectedMethod.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 2. ABOUT US & SPECIALIZATIONS PROGRESS RINGS (Matches Screenshot 2 image_519d01c4.png) */}
        <div className="bg-linear-to-r from-slate-50 to-cyan-50/40 p-8 sm:p-10 rounded-3xl border border-slate-200/90 mb-20 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description: Why People Choose Our Products */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#e6007e]">
                  CORPORATE GOVERNANCE &amp; CLINICAL RIGOR
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0f2a44] tracking-tight mt-1">
                  Why Global Institutions Choose Hisense Products?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Hisense International provides certified contraceptive medicines, intrauterine devices, and institutional supplies under the executive leadership of CEO Mr. Hafiz Asif Ali. With over five decades of cumulative pharmaceutical, maternal health, and surgical manufacturing experience, we bridge international quality standards with reliable institutional procurement across Pakistan and worldwide export destinations.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateAbout}
                  className="px-6 py-2.5 rounded-full bg-[#e6007e] hover:bg-[#c20067] text-white text-xs font-black shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Company Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono text-slate-500">
                  ISO 13485:2016 • ISO 9001:2015 • DRAP Enlisted
                </div>
              </div>
            </div>

            {/* Right: 3 Circular Percentage Progress Meters (As seen in Screenshot 2) */}
            <div className="lg:col-span-6">
              <div className="text-center lg:text-left mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800">
                  HISENSE INTERNATIONAL • CLINICAL FOCUS &amp; CAPACITY
                </span>
                <h4 className="text-lg font-black text-[#0f2a44]">
                  Our Healthcare Specializations
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* 1. Intrauterine Contraception Ring (85%) */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="56" cy="56" r="46" stroke="#f1f5f9" strokeWidth="9" fill="transparent" />
                      <circle 
                        cx="56" cy="56" r="46" 
                        stroke="#e6007e" strokeWidth="9" 
                        strokeDasharray={289}
                        strokeDashoffset={289 * (1 - 0.85)}
                        strokeLinecap="round" 
                        fill="transparent" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-[#0f2a44]">85%</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-[#0f2a44]">
                    Intrauterine Contraception (LARC)
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Copper T 380A &amp; PPIUCD systems</p>
                </div>

                {/* 2. Hormonal Methods Ring (68%) */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="56" cy="56" r="46" stroke="#f1f5f9" strokeWidth="9" fill="transparent" />
                      <circle 
                        cx="56" cy="56" r="46" 
                        stroke="#0ea5e9" strokeWidth="9" 
                        strokeDasharray={289}
                        strokeDashoffset={289 * (1 - 0.68)}
                        strokeLinecap="round" 
                        fill="transparent" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-[#0f2a44]">68%</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-[#0f2a44]">
                    Hormonal Methods
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">DMPA Injections &amp; OCP Cycles</p>
                </div>

                {/* 3. Barrier Methods Ring (79%) */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="56" cy="56" r="46" stroke="#f1f5f9" strokeWidth="9" fill="transparent" />
                      <circle 
                        cx="56" cy="56" r="46" 
                        stroke="#10b981" strokeWidth="9" 
                        strokeDasharray={289}
                        strokeDashoffset={289 * (1 - 0.79)}
                        strokeLinecap="round" 
                        fill="transparent" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-[#0f2a44]">79%</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-[#0f2a44]">
                    Barrier Methods
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">ISO 4074 Tested Natural Latex</p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 3. MULTIMEDIA PHOTOGRAPHIC & VIDEO SHOWCASE (FEATURING NEW REAL ASSETS) */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800">
                CLINICAL PACKAGING &amp; STERILIZATION GALLERY
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f2a44] tracking-tight">
                Authentic Product Photography &amp; Video Inspection
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full font-bold">
                Batch Traceable • CE Certified
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Real Product Image 1: Contraceptive Pack Suite */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all duration-300 group flex flex-col justify-between">
              <div className="relative w-full h-64 overflow-hidden bg-white">
                <img
                  src="/assets/images/home/contraceptive_kit_pack.jpg"
                  alt="Hisense Contraceptive Kit Pack with Copper T 380A and DMPA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0f2a44]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                  Clinical Pack Suite
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-[#0f2a44] group-hover:text-cyan-700 transition">
                  Sterile Blister Copper T 380A &amp; DMPA Vial
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  High-barrier medical packaging featuring tamper-evident Tyvek seals, pre-loaded depth insertion tubes, and lot-specific batch codes.
                </p>
              </div>
            </div>

            {/* Real Product Image 2: Copper T Device Macro */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all duration-300 group flex flex-col justify-between">
              <div className="relative w-full h-64 overflow-hidden bg-white">
                <img
                  src="/assets/images/home/copper_t_device_macro.jpg"
                  alt="Hisense Copper T 380A Macro on Surgical Steel Tray"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-cyan-700/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                  Device Engineering
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-[#0f2a44] group-hover:text-cyan-700 transition">
                  380 mm² Pure Electrolytic Copper Wire
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Precision winding on anatomical polyethylene T-stem with graduated centimetre depth flange and dual monofilament cervical retrieval threads.
                </p>
              </div>
            </div>

            {/* Embedded Live Video Player: 3d3.mp4 */}
            <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col justify-between relative group">
              <div className="relative w-full h-64 overflow-hidden">
                <video
                  ref={videoRef}
                  src="/assets/images/home/3d3.mp4"
                  poster="/assets/images/home/contraceptive_kit_pack.jpg"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/90 text-slate-950 text-[10px] font-mono font-black uppercase">
                    ● 4K MEDICAL DEMO
                  </span>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-black/60 text-white hover:text-cyan-400 transition"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Bottom Controls Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-bold"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <button
                    onClick={() => onOpenVideoModal('Hisense Contraceptive Manufacturing & Sterility Reel', 'Contraceptives')}
                    className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-5 text-white">
                <h4 className="text-base font-bold text-cyan-300">
                  Cleanroom Assembly &amp; Packaging Reel
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Automated blister sealing, gamma irradiation, and strict endotoxin testing conforming to ISO 13485 standards.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. OFFICIAL CONTRACEPTIVE PRODUCT RANGE SHOWCASE (18 PRODUCTS) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#e6007e] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#e6007e]" />
                HISENSE MEDICAL &amp; REPRODUCTIVE RANGE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f2a44] tracking-tight">
                Contraceptive Range Products (Hisense 5001 – 5018)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Supplying certified intrauterine contraceptive systems (IUCD), subdermal implants, hormonal injectable suspensions, oral cycles, and clinical vacuum aspiration kits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  if (onNavigateProducts) {
                    onNavigateProducts();
                  } else {
                    const el = document.getElementById('products');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-black transition flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Product Cards Grid: 8 Top Contraceptive Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contraceptiveProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-[#e6007e] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onOpenProductPage ? onOpenProductPage(product) : onOpenRfq()}
                    className="w-full h-52 bg-slate-50 flex items-center justify-center p-4 relative cursor-pointer border-b border-slate-100 overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-mono font-black text-pink-950 bg-pink-100/90 border border-pink-300 px-2 py-0.5 rounded-full shadow-xs">
                        {product.articleNo}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-slate-700 bg-white/95 border border-slate-200 px-2 py-0.5 rounded-full shadow-xs truncate max-w-[120px]">
                        {product.subcategory}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-[#0f2a44]/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-md flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#e6007e]" /> Inspect
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <div className="text-[10px] font-mono text-pink-800 font-bold mb-1">
                      {product.length || 'Clinical Grade'} • DRAP / WHO Spec
                    </div>

                    <h4 
                      onClick={() => onOpenProductPage ? onOpenProductPage(product) : onOpenRfq()}
                      className="text-sm font-bold text-[#0f2a44] group-hover:text-[#e6007e] transition cursor-pointer line-clamp-2 leading-snug"
                    >
                      {product.name}
                    </h4>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Footer / RFQ */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => onAddToRfq && onAddToRfq(product)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#0f2a44] hover:bg-[#e6007e] text-white text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Add to RFQ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice Banner below cards */}
          <div className="mt-8 p-4 rounded-2xl bg-linear-to-r from-pink-50 via-white to-cyan-50 border border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#e6007e] shrink-0" />
              <span>
                <strong>18 Contraceptive Products Enlisted:</strong> From WHO-Standard Copper-T 380A and Mirena® IUS to Jadelle®, Implanon NXT®, Famila 28F, Norifam®, and Ipas MVA PLUS systems.
              </span>
            </div>
            <a
              href="#products"
              className="text-[#e6007e] font-black hover:underline shrink-0 flex items-center gap-1"
            >
              <span>Explore All 18 Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
