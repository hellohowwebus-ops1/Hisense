import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Building2, 
  Microscope, 
  Activity, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Clock, 
  FileText, 
  Sparkles,
  Calendar,
  Layers,
  ChevronRight,
  Stethoscope,
  Cpu
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onOpenRfq: () => void;
  onNavigateProducts: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onOpenRfq,
  onNavigateProducts,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const services = [
    {
      id: 'turnkey',
      category: 'infrastructure',
      categoryLabel: 'Institutional Setup',
      title: 'Turnkey Hospital & OT Infrastructure Setup',
      tagline: 'Complete modular surgical suite & healthcare facility engineering',
      description: 'End-to-end procurement, layout planning, and commissioning for Operation Theatres, Intensive Care Units, CSSD sterilization departments, and maternal healthcare facilities tailored to government and private hospital standards.',
      image: '/assets/images/services/service_turnkey.jpg',
      features: [
        'Modular Cleanroom OT walls & laminar air flow ceilings',
        'Pendant systems, surgical lighting & medical gas pipeline integration',
        'Turnkey architectural alignment to DRAP & Punjab Healthcare Commission norms',
        'Complete equipment installation with full testing protocols'
      ],
      sla: 'Comprehensive Turnkey Project Handover'
    },
    {
      id: 'ivf-lab',
      category: 'laboratory',
      categoryLabel: 'Specialized ART Labs',
      title: 'IVF & Reproductive Biology Lab Commissioning',
      tagline: 'Class 100/10,000 certified cleanroom embryology suite setup',
      description: 'Specialized setup for assisted reproductive technology (ART) and embryology centers across Pakistan. We supply and commission micro-manipulation systems, tri-gas benchtop incubators, laminar hoods, and consumable supply pipelines.',
      image: '/assets/images/services/service_ivf_lab.jpg',
      features: [
        'Vibration-isolated anti-vibration microscope workstations',
        'CO2 / O2 gas mixer manifold & backup alarm monitoring',
        'Micro-manipulator laser alignment for ICSI needle precision',
        'Routine MEA biocompatibility testing and culture media replenishment'
      ],
      sla: 'Sub-Micron Calibration Guaranteed'
    },
    {
      id: 'sterilization',
      category: 'sterilization',
      categoryLabel: 'CSSD & Infection Control',
      title: 'CSSD Autoclave & Sterilization Engineering',
      tagline: 'European Class-B autoclaves, steam validation & maintenance',
      description: 'Design and servicing of hospital Central Sterile Supply Departments (CSSD). We supply pre-vacuum medical sterilizers, ultrasonic instrument washers, and implement multi-stage biological indicator validation routines.',
      image: '/assets/images/services/service_sterilization.jpg',
      features: [
        'Class-B vacuum leak testing & Bowie-Dick cycle diagnostics',
        'Biological spore indicator verification (SAL 10⁻⁶ standards)',
        'Heating element, solenoid valve & silicone door seal preventative replacements',
        'Annual regulatory inspection dossier preparation'
      ],
      sla: 'Zero-Contamination Certification'
    },
    {
      id: 'calibration',
      category: 'maintenance',
      categoryLabel: 'Biomedical Engineering',
      title: 'Biomedical Equipment Calibration & AMC Support',
      tagline: 'Annual Maintenance Contracts (AMC) & certified repair services',
      description: 'Dedicated team of certified biomedical engineers offering periodic preventive maintenance, electrical safety inspections, and emergency breakdown repairs for medical equipment in Punjab and nationwide.',
      image: '/assets/images/services/service_calibration.jpg',
      features: [
        'Comprehensive Annual Maintenance Contracts (AMC / CMC)',
        'Ultrasound transducer acoustic output and echogenicity testing',
        'Dental turbine rotor replacement, dynamic balancing & torque verification',
        'Original OEM spare parts direct from verified manufacturer stocks'
      ],
      sla: '< 4-Hour Rapid Emergency Response'
    },
    {
      id: 'tender',
      category: 'procurement',
      categoryLabel: 'Government Contracting',
      title: 'Government Tender Bidding & Bulk Institutional Procurement',
      tagline: 'DRAP-verified supply chains for health departments & armed forces',
      description: 'Over 14 years of flawless execution in federal and provincial health tenders, bulk maternal health programs (Copper T 380A & PPIUCD), hospital general supplies, and institution-wide medical hardware delivery.',
      image: '/assets/images/services/service_tender.jpg',
      features: [
        'DRAP import registration, enlistment certificates & MEA lot certificates',
        'Full compliance with PPRA (Public Procurement Regulatory Authority) guidelines',
        'Large-scale batch warehouse capacity at 48-Multan Road Lahore Hub',
        'Post-delivery inspection support with national testing labs'
      ],
      sla: '100% Tender Compliance Record'
    },
    {
      id: 'logistics',
      category: 'logistics',
      categoryLabel: 'Cold-Chain & Warehousing',
      title: 'Validated Cold-Chain Storage & Nationwide Logistics',
      tagline: '24–48h emergency medical supply dispatch across Pakistan',
      description: 'State-of-the-art climate-controlled warehouse facility in Lahore. We maintain calibrated 2°C–8°C cold chain systems for temperature-sensitive embryo culture media, sterile medical catheters, and emergency surgical reserves.',
      image: '/assets/images/services/service_logistics.jpg',
      features: [
        'Real-time temperature telemetry & datalogger verification',
        'Insulated thermal packaging with ice/gel phase-change packs',
        '24–48 hours rapid door-to-hospital delivery across Pakistan',
        'Standing buffer stock maintained for contracted hospital networks'
      ],
      sla: 'Continuous 2°C–8°C Thermal Integrity'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const workflowSteps = [
    {
      step: '01',
      title: 'Technical Consultation & Needs Assessment',
      desc: 'Our senior biomedical engineers conduct a comprehensive site survey and clinical requirement audit tailored to your facility volume and regulatory targets.'
    },
    {
      step: '02',
      title: 'Certified Engineering & Equipment Specification',
      desc: 'Detailed architectural drawings, gas schematic mappings, and ISO 13485 compliant device specifications submitted for formal approval.'
    },
    {
      step: '03',
      title: 'Precision Installation & Calibration',
      desc: 'On-site installation by licensed specialists followed by vacuum testing, optical alignment, and documented biological validation.'
    },
    {
      step: '04',
      title: 'Staff Clinical Training & 24/7 AMC Coverage',
      desc: 'Hands-on operational training for surgeons, embryologists, and nursing staff, backed by round-the-clock emergency maintenance support.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-20 pb-20">
      
      {/* 1. Header / Breadcrumb Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-cyan-50/20 to-slate-50 py-16 sm:py-20 border-b border-slate-200 overflow-hidden">
        
        {/* Soft Background Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 mb-6">
            <button onClick={onNavigateHome} className="hover:text-cyan-700 transition cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-cyan-700 font-bold">SPECIALIZED SERVICES</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-200 text-cyan-800 text-xs font-mono font-bold tracking-wider uppercase mb-4">
              <Wrench className="w-3.5 h-3.5 text-cyan-700" />
              <span>SPECIALIZED HEALTHCARE SERVICES &amp; INSTITUTIONAL CONTRACTING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase leading-[1.15]">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-[#0f2a44]">Medical &amp; Biomedical</span> Engineering
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Hisense International delivers turnkey institutional contracting, precision IVF lab establishment, hospital CSSD sterilization maintenance, and certified biomedical equipment calibration across Pakistan since 2010.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 text-xs font-bold text-slate-700 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 13485 CERTIFIED</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>DRAP REGISTERED SUPPLIER</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>24/7 BIOMEDICAL ONSITE SUPPORT</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          
          <div className="flex items-center gap-2">
            {[
              { key: 'all', label: 'All Services (6)' },
              { key: 'infrastructure', label: 'OT & Turnkey Setup' },
              { key: 'laboratory', label: 'IVF & ART Labs' },
              { key: 'sterilization', label: 'CSSD Sterilization' },
              { key: 'maintenance', label: 'AMC & Calibration' },
              { key: 'procurement', label: 'Tenders & Supply' },
              { key: 'logistics', label: 'Cold-Chain' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-[#0f2a44] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenRfq}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition shadow-xs cursor-pointer"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </section>

      {/* 3. Detailed Services Showcase Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              
              {/* Image Frame with Overlay Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/80 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-cyan-800 uppercase shadow-xs">
                  {service.categoryLabel}
                </div>

                {/* SLA / Guarantee Badge */}
                <div className="absolute bottom-3 left-4 right-4 z-10 text-white text-[11px] font-mono font-semibold flex items-center gap-1.5 drop-shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{service.sla}</span>
                </div>
              </div>

              {/* Service Details Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#0f2a44] uppercase tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-cyan-700 mt-1">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mt-3 font-normal">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                      Core Engineering Scope:
                    </span>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={onNavigateContact}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f2a44] hover:text-cyan-700 transition cursor-pointer"
                  >
                    <span>Inquire Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                  </button>

                  <button
                    onClick={onOpenRfq}
                    className="px-3.5 py-1.5 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-bold text-xs border border-cyan-200 transition cursor-pointer"
                  >
                    Get Tender Quote
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. Engineering Workflow (Step-by-Step Methodology) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-1">
              QUALITY MANAGEMENT SYSTEM
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Our 4-Stage Project Execution Workflow
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every healthcare installation follows audited ISO 13485 protocols to guarantee clinical sterility, electrical safety, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#0f2a44] text-white flex items-center justify-center font-mono font-bold text-sm mb-5 shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0f2a44] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Key Institutional Stats Banner */}
      <section className="py-14 bg-gradient-to-r from-[#0f2a44] to-[#153a5c] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
            
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">
                14+ Years
              </div>
              <div className="text-xs text-slate-300 font-medium uppercase mt-1">
                Institutional Contracting Experience
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">
                80+ Hospitals
              </div>
              <div className="text-xs text-slate-300 font-medium uppercase mt-1">
                Equipped &amp; Maintained Across Pakistan
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">
                &lt; 4 Hours
              </div>
              <div className="text-xs text-slate-300 font-medium uppercase mt-1">
                Emergency Breakdown Response
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">
                100%
              </div>
              <div className="text-xs text-slate-300 font-medium uppercase mt-1">
                DRAP &amp; ISO 13485 Verification
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Direct Contact & RFQ Callout */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-widest block mb-2">
              DISCUSS YOUR HOSPITAL OR CLINICAL PROJECT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Schedule a Technical Consultation with Our Senior Engineers
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Whether you are planning a new IVF lab, seeking Annual Maintenance for CSSD autoclaves, or preparing a government tender quotation, our team is ready to support you.
            </p>
            <div className="flex items-center gap-3 mt-4 text-xs font-mono text-slate-600">
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Direct CEO Line: <strong>{COMPANY_DETAILS.contacts.phoneMobile}</strong></span>
              <span className="text-slate-300">|</span>
              <span>Lahore Head Office</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white font-bold text-xs uppercase tracking-wider text-center shadow-md transition cursor-pointer"
            >
              Contact Engineering Desk
            </button>

            <button
              onClick={onOpenRfq}
              className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md transition cursor-pointer"
            >
              Submit Service RFQ
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
