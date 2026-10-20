import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { HisenseLogo } from './HisenseLogo';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  QrCode, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Truck,
  Users
} from 'lucide-react';

interface AboutCompanyProps {
  onOpenRfq: () => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ onOpenRfq }) => {
  const [showExecutiveCard, setShowExecutiveCard] = useState(false);

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
            CORPORATE HERITAGE &amp; EXECUTIVE MANDATE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
            Bridging World-Class Medical Devices with Pakistan
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Founded in 2010 in Lahore, Hisense International is an established Government Contractor, Importer, Exporter, and General Supplier specializing in Assisted Reproductive Technologies (IVF/IUI), hospital machinery, and sterile surgical supplies.
          </p>
        </div>

        {/* Cleanroom Visual + CEO Statement Bento Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left: Cleanroom Facility Hero Image with Hisense Branding */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl relative min-h-[400px] group">
            <img
              src="/assets/images/hisense_lab_cleanroom_post_1792385753427.jpg"
              alt="Hisense International Cleanroom Manufacturing & Inspection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold bg-[#0f2a44]/90 px-3 py-1 rounded-full border border-cyan-400/30 backdrop-blur-md">
                HISENSE CLASS 100 CLEANROOM
              </span>
              <h3 className="text-xl font-black text-white mt-2">
                Automated Medical Assembly &amp; Sterilization
              </h3>
              <p className="text-xs text-slate-200 mt-1 leading-relaxed max-w-lg">
                Stringent bioburden control, 1-cell Mouse Embryo Assays (MEA), and endotoxin testing guarantee zero cytotoxicity across all reproductive and surgical consumables.
              </p>
            </div>
          </div>

          {/* Right: CEO Message Card */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0f2a44] text-white flex items-center justify-center font-black text-2xl shadow-md border border-cyan-500/30">
                  HA
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase text-cyan-700">
                    MESSAGE FROM THE CHIEF EXECUTIVE OFFICER
                  </div>
                  <h3 className="text-2xl font-black text-[#0f2a44]">
                    Mr. Hafiz Asif Ali
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Executive Leadership &amp; Institutional Tenders
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-cyan-600 pl-4 my-4 italic text-slate-700 text-sm leading-relaxed">
                &ldquo;Hisense International was established with an uncompromising dedication to clinical integrity. Every IVF catheter, micro-needle, and autoclave unit we supply directly impacts human life. By maintaining rapid cold-chain logistics from our Lahore warehouse, we eliminate procurement friction and empower doctors to deliver miracles.&rdquo;
              </blockquote>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] font-mono uppercase">Direct Phone</span>
                  <strong className="text-slate-900 font-mono">0321-8000560</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-mono uppercase">Warehouse</span>
                  <strong className="text-slate-900">Multan Rd, Lahore</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-mono uppercase">Certification</span>
                  <strong className="text-cyan-800">ISO 9001:2015</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={() => setShowExecutiveCard(!showExecutiveCard)}
                className="px-5 py-2.5 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-md"
              >
                <QrCode className="w-4 h-4 text-cyan-400" />
                <span>{showExecutiveCard ? 'Hide Business Card' : 'Inspect Official Business Card'}</span>
              </button>

              <button
                onClick={onOpenRfq}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition border border-slate-300 cursor-pointer shadow-xs"
              >
                <span>Vendor Pre-qualification</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-600" />
              </button>
            </div>
          </div>

        </div>

        {/* Digital Interactive Executive Card Reveal */}
        {showExecutiveCard && (
          <div className="mb-20 max-w-xl mx-auto bg-white text-slate-900 rounded-3xl p-8 shadow-2xl border-2 border-cyan-500/40 relative overflow-hidden animate-fade-in">
            {/* Geometric accents matching card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0f2a44] rounded-bl-full pointer-events-none opacity-95" />
            <div className="absolute top-0 right-12 w-20 h-1.5 bg-amber-400 rounded-full" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#0f2a44] rounded-tr-full pointer-events-none opacity-95" />
            <div className="absolute bottom-0 left-10 w-20 h-1.5 bg-amber-400 rounded-full" />

            <div className="relative z-10 flex items-start justify-between">
              <HisenseLogo size="md" light={false} />
              <div className="text-right">
                <div className="text-xl font-black text-[#0f2a44] leading-tight">
                  HAFIZ ASIF ALI
                </div>
                <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                  CHIEF EXECUTIVE OFFICER
                </div>
              </div>
            </div>

            <div className="relative z-10 text-[9px] font-bold tracking-wider uppercase text-center text-slate-700 border-y border-slate-200 py-2.5 my-5 font-mono">
              GOVERNMENT CONTRACTOR | IMPORTER | EXPORTER | GENERAL SUPPLIER
            </div>

            <div className="relative z-10 space-y-2.5 text-xs text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold font-mono">0321-0333-8000560</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">48-Main Multan Road, Lahore.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-cyan-800">hisenseinternational@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#0f2a44] text-white flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-[#0f2a44]">www.hisenseinternational.com</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 mt-5 border-t border-slate-200 text-[10px] text-slate-500 font-mono">
              <span>ESTABLISHED 2010 • LAHORE</span>
              <span className="font-bold text-cyan-700">HISENSE OFFICIAL CREDENTIAL</span>
            </div>
          </div>
        )}

        {/* Core Institutional Services Grid */}
        <div className="mb-20" id="logistics">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Institutional Capabilities &amp; Turnkey Supply
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Structured to support public sector health departments, teaching hospitals, and private fertility networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DETAILS.services.map((svc, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-cyan-500 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-cyan-700" />
                </div>
                <h4 className="text-base font-bold text-[#0f2a44] mb-2">
                  {svc.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Leadership Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-[#0f2a44] uppercase tracking-tight">
              Operational &amp; Technical Leadership
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Qualified pharmacists, biotechnologists, biomedical engineers, and logistics specialists.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANY_DETAILS.leadership.map((member, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center shadow-xs hover:shadow-md hover:border-cyan-400 transition"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 text-[#0f2a44] font-black text-sm grid place-items-center mb-3 border border-slate-200">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                  {member.name}
                </div>
                <div className="text-[10px] text-cyan-700 font-mono font-bold mt-1">
                  {member.role}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {member.qualification}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
