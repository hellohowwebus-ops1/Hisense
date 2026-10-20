import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  FileCheck, 
  Globe2, 
  Microscope,
  Cpu,
  BadgeCheck
} from 'lucide-react';

interface TickerItem {
  icon?: React.ReactNode;
  badge?: string;
  text: string;
  highlight?: string;
}

const PRIMARY_TICKER_ITEMS: TickerItem[] = [
  {
    badge: 'ISO 13485:2016',
    text: 'Certified Medical Device Manufacturing & Cleanroom Control',
    highlight: 'INTERNATIONAL QUALITY',
  },
  {
    badge: '100% MEA TESTED',
    text: 'IVF Embryology Devices Validated with ≥80% Blastocyst Survival',
    highlight: 'EMBRYO SAFE',
  },
  {
    badge: 'WHO SPECIFICATION',
    text: 'Copper T 380A & PPIUCD Family Planning Verified Compliant',
    highlight: 'DRAP APPROVED',
  },
  {
    badge: 'GOVT CONTRACTOR',
    text: 'Trusted Institutional Supplier to Pakistan Health Departments & 80+ Hospitals',
    highlight: 'ESTD. 2010',
  },
  {
    badge: 'CLASS 10,000 CLEANROOM',
    text: 'Automated Blister Packaging & Gamma Radiation SAL 10⁻⁶ Sterilization',
    highlight: 'ZERO DEFECT',
  },
  {
    badge: 'SURGICAL GRADE 5',
    text: 'Titanium Laparoscopy Trocar Forceps with 4000V Dielectric Ceramic Insulation',
    highlight: 'GERMAN STANDARD',
  },
  {
    badge: '+42,000 ORDERS',
    text: 'Nationwide Delivery with Standing Inventory at Multan Road Lahore Hub',
    highlight: '100% RELIABLE',
  },
  {
    badge: 'CE MARK COMPLIANT',
    text: 'European Class-B Fractionated Pre-Vacuum Autoclaves & Dental Turbines',
    highlight: 'STERILITY ASSURED',
  },
];

const MICRO_TICKER_TEXTS = [
  'WHO TECHNICAL SPECIFICATION COMPLIANT',
  '10-YEAR ACTIVE EFFICACY ASSURANCE',
  'ZERO PYROGEN & ENDOTOXIN TESTED (<0.05 EU/ML)',
  'GAMMA RADIATION SAL 10⁻⁶ TERMINAL STERILITY',
  'ISO 9001:2015 & ISO 13485:2016 AUDITED',
  'USP CLASS VI MEDICAL-GRADE RAW MATERIALS',
  'FULL BATCH TRACEABILITY CERTIFICATION WITH EVERY ORDER',
  'DIRECT GOVERNMENT HEALTH DEPARTMENT CONTRACTOR',
  'PRECISION BOROSILICATE GLASS FOR ICSI MICROMANIPULATION',
  'STANDBY TECHNICAL SUPPORT & LOCAL LAHORE WARRANTY HUB',
  'OVER 250,000 PATIENTS & WOMEN SERVED SAFELY',
  'RIGID EUROPEAN STERILITY & PURITY ASSURANCE',
];

export const CorporateReliabilityTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden select-none border-y border-slate-200/90 shadow-sm">
      
      {/* 
        SLIDE 1 (TOP STRIP):
        - Direction: Left to Right (animate-marquee-ltr)
        - Height: Half-inch (~40px, h-10)
        - Theme: Deep Corporate Navy (#0a1c2e) with Glowing Cyan Badges & White Typography
        - Content: Why Hisense is reliable & complies with international medical benchmarks
      */}
      <div 
        className="w-full h-10 bg-[#0a1c2e] text-white flex items-center overflow-hidden border-b border-cyan-500/20 relative"
        title="Hisense International Quality & Reliability Standards (Left to Right)"
      >
        {/* Subtle decorative glow line at top */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        {/* Marquee Track: duplicated items for seamless infinite loop */}
        <div className="animate-marquee-ltr flex items-center py-1">
          {[...PRIMARY_TICKER_ITEMS, ...PRIMARY_TICKER_ITEMS].map((item, idx) => (
            <div 
              key={`ltr-${idx}`} 
              className="flex items-center gap-3 shrink-0 px-5 text-xs font-medium border-r border-slate-800/80 group"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[10px] font-mono font-bold text-cyan-300 tracking-wider">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                <span>{item.badge}</span>
              </div>

              <span className="text-slate-200 font-semibold tracking-wide whitespace-nowrap">
                {item.text}
              </span>

              <span className="text-[10px] font-mono font-black uppercase text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                {item.highlight}
              </span>

              <span className="text-cyan-500/40 font-bold ml-1">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 
        SLIDE 2 (BOTTOM STRIP):
        - Direction: Right to Left (animate-marquee-rtl)
        - Height: Half of the top one (~20px, h-5)
        - Theme: Hisense Luminous Cyan / Teal Gradient (#0284c7 to #0f766e)
        - Content: Micro-technical specifications and international regulatory benchmarks
      */}
      <div 
        className="w-full h-5 bg-gradient-to-r from-cyan-800 via-teal-700 to-cyan-900 text-white flex items-center overflow-hidden relative"
        title="International Regulatory Specifications (Right to Left)"
      >
        {/* Subtle decorative shine */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />

        {/* Marquee Track in Reverse: Right to Left */}
        <div className="animate-marquee-rtl flex items-center">
          {[...MICRO_TICKER_TEXTS, ...MICRO_TICKER_TEXTS].map((text, idx) => (
            <div 
              key={`rtl-${idx}`}
              className="flex items-center gap-2 shrink-0 px-4 text-[9.5px] font-mono font-bold tracking-widest uppercase text-cyan-50/95 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              <span>{text}</span>
              <span className="text-teal-300/60 font-mono text-[9px] ml-1">///</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
