import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { HisenseLogo } from './HisenseLogo';
import { ShieldCheck, MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1a2c] text-slate-300 text-xs border-t border-slate-800">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <HisenseLogo size="md" light={true} />
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Established in 2010. Premier manufacturer, importer, exporter and government contractor for advanced IVF &amp; ART technologies, contraceptive range, hospital medical equipment, dental instruments, and turnkey institutional procurement.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 9001:2015 &amp; ISO 13485 Registered</span>
            </div>
            <div className="text-[11px] text-amber-400 font-bold font-mono">
              Chief Executive Officer: Mr. Hafiz Asif Ali
            </div>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] font-mono mb-3">
              Specialized Divisions
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#products" className="hover:text-cyan-400 transition">Hisense EchoFlex™ IVF Catheters</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition">Hisense MicroPoint™ ICSI Needles</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition">Hisense Precision-IUI™ Devices</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition">Hisense Cu-T 380A® &amp; PPIUCD</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition">Hospital Class-B Autoclaves</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition">Hisense AeroDent™ Turbines</a></li>
            </ul>
          </div>

          {/* Institutional Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] font-mono mb-3">
              Procurement &amp; Supply
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition">Government Procurement Tenders</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">Teaching Hospital Frameworks</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">NGO &amp; Donor Supply Projects</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">Local Purchase (LP) Quotations</a></li>
              <li><a href="#brand-posts" className="hover:text-cyan-400 transition">Cleanroom Facility Upgrades</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">DRAP &amp; Customs Clearance</a></li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] font-mono mb-3">
              Lahore Headquarters
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>48-Main Multan Road, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono">0321-0333-8000560</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">hisenseinternational@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>www.hisenseinternational.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left text-slate-400 text-[11px]">
          © {new Date().getFullYear()} <strong className="text-white">Hisense International</strong>. All Rights Reserved. Minimizing Distances, Promising Happiness.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 transition cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
