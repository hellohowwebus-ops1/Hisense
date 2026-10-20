import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { HisenseLogo } from './HisenseLogo';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  Building2, 
  FileCheck,
  PhoneCall,
  Printer
} from 'lucide-react';

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen3d: (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  isOpen,
  onClose,
  onOpen3d,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Company Credentials & Institutional Mandate',
      subtitle: 'Government Contractor • Importer • Exporter • General Supplier',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-mono text-cyan-700 font-bold mb-2">ESTABLISHED 2010 • LAHORE, PAKISTAN</div>
            <h3 className="text-2xl font-black text-[#0f2a44]">Hisense International</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Founded under the leadership of <strong>Mr. Hafiz Asif Ali (CEO)</strong>, Hisense International brings extensive healthcare procurement and turnkey supply capabilities across Pakistan.
            </p>
            <div className="space-y-3 mt-6">
              {[
                'ISO 9001:2015 & ISO 13485 Registered Medical Supplier',
                'Pre-qualified Government & Armed Forces Healthcare Contractor',
                'Comprehensive IVF, ART, and Infertility Technology Supply Chain',
                'Dedicated 24-48 Hour Logistics From Central Multan Road Warehouse',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-mono text-cyan-800 uppercase tracking-wider mb-4 font-bold">Core Organizational Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-3xl font-black text-[#0f2a44]">2010</div>
                <div className="text-xs text-slate-500 font-medium">Established In Lahore</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-3xl font-black text-cyan-700">80+</div>
                <div className="text-xs text-slate-500 font-medium">Institutional Hospitals</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-3xl font-black text-amber-600">250+</div>
                <div className="text-xs text-slate-500 font-medium">Active Product Lines</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-3xl font-black text-emerald-600">100%</div>
                <div className="text-xs text-slate-500 font-medium">Batch MEA Tested</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'IVF & Test Tube Baby Technology Suite',
      subtitle: 'EchoFlex™ Catheters & MicroPoint™ ICSI Micropipettes',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-mono text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200 font-bold">
              HISENSE REPRODUCTIVE MEDICINE
            </span>
            <h3 className="text-2xl font-bold text-[#0f2a44] mt-3">Micron-Precision Embryo Placement</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Our IVF devices are specifically engineered to eliminate endometrial micro-trauma and ensure optimal blastocyst survival during assisted reproduction cycles.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-cyan-800 font-bold">EchoFlex™ Catheters</span>
                <p className="text-[11px] text-slate-500 mt-1">High-density echogenic tip visible on 4D ultrasound monitors.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-cyan-800 font-bold">MicroPoint™ ICSI</span>
                <p className="text-[11px] text-slate-500 mt-1">30° bevelled borosilicate glass with 4.8µm inner bore.</p>
              </div>
            </div>
            <button
              onClick={() => { onClose(); onOpen3d('catheter'); }}
              className="mt-6 px-5 py-2.5 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Launch 3D Catheter Model In Live Viewport</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
            <img 
              src="/assets/images/ivf_embryo_catheter_macro_1792383675323.jpg" 
              alt="Hisense EchoFlex IVF Catheter" 
              className="w-full h-64 object-cover"
            />
            <div className="p-3.5 bg-slate-50 text-xs text-slate-600 font-mono flex justify-between border-t border-slate-100">
              <span className="font-semibold">MEA Tested: &gt; 80% Blastocyst</span>
              <span className="text-emerald-700 font-bold">Class 10,000 Cleanroom</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'CSSD Sterilization, Hospital & Dental Machinery',
      subtitle: 'Class-B Vacuum Autoclaves & Titanium Surgical Precision',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-mono text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200 font-bold">
              HISENSE CSSD &amp; SURGERY DIVISION
            </span>
            <h3 className="text-2xl font-bold text-[#0f2a44] mt-3">Turnkey Operating Theater Solutions</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Equipping major teaching hospitals, district headquarters (DHQs), and private surgery centers with European Class-B autoclaves, patient monitoring systems, and laparoscopic instrumentation.
            </p>
            <div className="space-y-2 mt-4 text-xs text-slate-700">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span>EN 13060 European Class-B Pre-Vacuum</span>
                <span className="text-emerald-700 font-bold">Certified</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span>Warranty &amp; Spare Parts Warehouse</span>
                <span className="text-cyan-800 font-bold">Lahore Local Hub</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span>Tender Quotation Response Time</span>
                <span className="text-amber-700 font-bold">&lt; 24 Hours</span>
              </div>
            </div>
            <button
              onClick={() => { onClose(); onOpen3d('autoclave'); }}
              className="mt-6 px-5 py-2.5 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Inspect Autoclave 3D Geometry</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
            <img 
              src="/assets/images/hisense_autoclave_clean_white_1792385688682.jpg" 
              alt="Hisense Class-B Autoclave" 
              className="w-full h-64 object-cover"
            />
            <div className="p-3.5 bg-slate-50 text-xs text-slate-600 font-mono flex justify-between border-t border-slate-100">
              <span className="font-semibold">Chamber: 304 Stainless Steel</span>
              <span className="text-cyan-800 font-bold">Class B Triple Vacuum</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Official Executive Contacts & Tender Engagement',
      subtitle: 'Direct Lines to Chief Executive & Procurement Officers',
      content: (
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
          <div className="inline-block p-4 rounded-full bg-cyan-100 border border-cyan-200 mb-4">
            <Building2 className="w-10 h-10 text-cyan-700 mx-auto" />
          </div>
          <h3 className="text-2xl font-black text-[#0f2a44]">Hisense International</h3>
          <p className="text-cyan-800 font-bold text-sm mt-1">{COMPANY_DETAILS.tagline}</p>
          <p className="text-slate-600 text-sm mt-3">
            For urgent tender submissions, institutional vendor registration, or hospital supply frameworks, please contact CEO Mr. Hafiz Asif Ali directly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-left">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase font-mono">CHIEF EXECUTIVE OFFICER</span>
              <div className="text-sm font-bold text-slate-900">Mr. Hafiz Asif Ali</div>
              <div className="text-xs text-cyan-800 font-mono font-bold mt-1">0321-8000560 / 0333-8000560</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase font-mono">HEADQUARTERS &amp; WAREHOUSE</span>
              <div className="text-sm font-bold text-slate-900">48-Main Multan Road</div>
              <div className="text-xs text-slate-600 mt-1">Lahore, Pakistan</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923218000560"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-md"
            >
              <span>Instant WhatsApp Procurement</span>
            </a>
            <a
              href="mailto:hisenseinternational@gmail.com"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm"
            >
              <span>hisenseinternational@gmail.com</span>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh]">
        
        {/* Pitch Deck Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <HisenseLogo size="sm" light={false} />
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200 font-bold hidden sm:inline">
              BOARDROOM PRESENTATION MODE
            </span>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 transition cursor-pointer"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-700 uppercase">
              SLIDE {activeSlide + 1} OF {slides.length} • HISENSE INTERNATIONAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f2a44] mt-1">
              {slides[activeSlide].title}
            </h2>
            <p className="text-sm text-slate-600 font-semibold mt-0.5">
              {slides[activeSlide].subtitle}
            </p>
          </div>

          <div className="my-auto">
            {slides[activeSlide].content}
          </div>
        </div>

        {/* Slide Footer Navigation */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <button
            onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
            disabled={activeSlide === 0}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 disabled:opacity-40 text-xs font-bold flex items-center gap-1.5 transition border border-slate-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx ? 'bg-cyan-600 scale-125' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1))}
            disabled={activeSlide === slides.length - 1}
            className="px-4 py-2 rounded-xl bg-[#0f2a44] text-white font-bold disabled:opacity-40 text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm"
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
