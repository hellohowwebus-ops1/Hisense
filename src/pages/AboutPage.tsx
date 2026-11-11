import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Truck,
  Users,
  Target,
  FileCheck,
  Microscope,
  Activity,
  HeartHandshake,
  Calendar,
  Globe2,
  ChevronRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';
import { HisenseLogo } from '../components/HisenseLogo';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onOpenRfq: () => void;
  onNavigateProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onOpenRfq,
  onNavigateProducts,
}) => {
  const milestones = [
    {
      year: '2010',
      title: 'Founding in Lahore',
      desc: 'Established as an authorized importer, exporter, and specialized healthcare general supplier at 48-Main Multan Road Lahore.',
    },
    {
      year: '2014',
      title: 'IVF & ART Innovation',
      desc: 'Introduced high-precision EchoFlex™ ultrasound catheters and MicroPoint™ ICSI needles to top Pakistani fertility clinics.',
    },
    {
      year: '2018',
      title: 'National Contraceptive Tender',
      desc: 'Validated WHO-specification Copper T 380A and postpartum PPIUCD kits for national and provincial reproductive health departments.',
    },
    {
      year: '2022',
      title: 'CSSD & Surgical Systems',
      desc: 'Expanded hospital sterilization machinery division, supplying European Class-B pre-vacuum autoclaves and laparoscopic surgical lines.',
    },
    {
      year: '2026',
      title: 'Turnkey Institutional Contractor',
      desc: 'Operating as a premier registered contractor for public teaching hospitals, armed forces institutions, and private medical consortiums.',
    },
  ];

  const qualityStandards = [
    {
      title: 'ISO 13485 Certified',
      subtitle: 'Medical Device Quality Management',
      desc: 'Fully certified and audited design, assembly, and cleanroom packaging protocols for sterile invasive and non-invasive medical supplies.',
      icon: ShieldCheck,
      color: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    },
    {
      title: 'ISO 9001:2015 Audited',
      subtitle: 'Corporate Process & Traceability',
      desc: 'End-to-end lot verification, batch tracking, and guaranteed cold-chain documentation from international port to final hospital ward.',
      icon: Award,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      title: 'WHO & DRAP Compliant',
      subtitle: 'Federal Regulatory Assurance',
      desc: 'Registered with the Drug Regulatory Authority of Pakistan (DRAP) and manufactured to World Health Organization technical specifications.',
      icon: FileCheck,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'Mouse Embryo Assay (MEA > 80%)',
      subtitle: 'Zero Cytotoxicity Validation',
      desc: 'Rigorous 1-cell MEA screening and pyrogen-free testing (< 0.05 EU/device) ensuring safety for delicate reproductive tissues.',
      icon: Microscope,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
      
      {/* 1. Page Breadcrumb & Hero Banner */}
      <section className="relative bg-[#0b1c2e] text-white py-16 sm:py-20 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle background cleanroom texture */}
        <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none"
             style={{ backgroundImage: "url('/assets/images/about/hisense_medtech_cleanroom_hero_1792383674945.jpg')" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300 font-bold">About Us</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>HISENSE INTERNATIONAL • ESTABLISHED 2010</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase max-w-3xl leading-tight">
            Pioneering Medical Precision &amp; Clinical Trust in Pakistan
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Headquartered in Lahore, Hisense International is a premier registered Government Contractor, Importer, Exporter, and Healthcare Supplier. We bridge world-class Assisted Reproductive Technologies (IVF/ART), sterile contraceptive devices, hospital autoclaves, and surgical instruments with national healthcare institutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer"
            >
              <span>Connect With Executive Office</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateProducts}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition backdrop-blur-md cursor-pointer"
            >
              Explore Clinical Catalog
            </button>
          </div>

        </div>
      </section>

      {/* 2. Executive Leadership & Message from CEO */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* CEO Badge & Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0f2a44] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-slate-700/60">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  HA
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                    EXECUTIVE LEADERSHIP
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    Mr. Hafiz Asif Ali
                  </h3>
                  <p className="text-xs text-slate-300">
                    Chief Executive Officer &amp; Founder
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Executive Direct Line:</span>
                  <a href="tel:+923218000560" className="font-mono font-bold text-cyan-300 hover:text-white transition">
                    0321-8000560
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Secondary Line:</span>
                  <span className="font-mono font-bold text-slate-200">0333-8000560</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Official Correspondence:</span>
                  <span className="text-slate-200 truncate">hisenseinternational@gmail.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Headquarters:</span>
                  <span className="text-slate-200">48-Multan Road, Lahore</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-[11px] text-cyan-400 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Authorized Govt Contractor</span>
                </div>
                <a
                  href="https://wa.me/923218000560?text=Hello%20CEO%20Mr.%20Hafiz%20Asif%20Ali%2C%20inquiry%20regarding%20Hisense%20International"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
                >
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
                EXECUTIVE COMMITMENT
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f2a44] tracking-tight uppercase">
                &ldquo;Minimizing Distances, Promising Clinical Excellence&rdquo;
              </h2>

              <blockquote className="border-l-4 border-cyan-600 pl-5 my-6 italic text-slate-700 text-sm leading-relaxed bg-cyan-50/50 py-3 rounded-r-2xl">
                &ldquo;When we founded Hisense International in 2010, Pakistani reproductive clinics and teaching hospitals were severely constrained by erratic supply chains and excessive costs for critical single-use consumables. We made it our mandate to provide verified, internationally compliant medical devices with immediate delivery from our central Lahore logistics hub.&rdquo;
              </blockquote>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Today, Hisense International partners with the country&apos;s leading fertility specialists, district health authorities, military hospitals, and private surgical groups. Every device we import or supply is tested against strict cytotoxicity, MEA blastocyst growth, and gamma sterility benchmarks.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-black text-[#0f2a44] font-mono">15+ Years</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Established Since 2010</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-black text-cyan-700 font-mono">250K+</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Patients &amp; Units Served</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-xl font-black text-emerald-700 font-mono">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Batch Traceability Guaranteed</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Company Vision, Mission & Values */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              OUR GUIDING PRINCIPLES
            </div>
            <h2 className="text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Mission, Vision &amp; Corporate Values
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Driven by medical responsibility, ethical supply practices, and unyielding product safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-black text-[#0f2a44] mb-3">Our Corporate Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be Pakistan&apos;s undisputed benchmark in healthcare procurement and high-end biotechnology supplies, ensuring no clinic or patient compromises on clinical device efficacy.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-black text-[#0f2a44] mb-3">Our Dedicated Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Providing verified, cost-efficient, and prompt healthcare equipment and consumables with immediate local inventory support and transparent institutional tendering.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-black text-[#0f2a44] mb-3">Pillars of Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero tolerance for non-sterile supplies, 100% compliance with DRAP regulations, authentic batch testing, and long-term institutional partnerships built on trust.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Cleanroom & Manufacturing Facilities Showcase */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700">
                MANUFACTURING &amp; STERILE LOGISTICS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a44] uppercase tracking-tight">
                Class 10,000 Cleanroom &amp; Advanced Bioburden Control
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every catheter, pipette, and contraceptive device handled by Hisense International is produced in certified ISO 13485 cleanroom facilities with positive pressure air filtration and laminar airflow benches.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Gamma Radiation Terminal Sterilization (SAL 10⁻⁶):</strong>
                    High-level sterility assurance ensuring complete eradication of microbial bioburden without toxic residue.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Continuous Mouse Embryo Assay (MEA) Screening:</strong>
                    Each batch tested on mouse embryos to ensure blastocyst development exceeds 80%, ensuring optimal embryology safety.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Central Lahore Multan Road Hub:</strong>
                    Temperature-controlled staging warehouse maintaining rapid standby stock for emergency hospital orders.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl relative min-h-[380px] group">
              <img
                src="/assets/images/about/hisense_lab_cleanroom_post_1792385753427.jpg"
                alt="Hisense International Cleanroom Inspection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold bg-[#0f2a44]/90 px-3 py-1 rounded-full border border-cyan-400/30 backdrop-blur-md">
                  LAHORE FACILITY OPERATIONS
                </span>
                <h3 className="text-xl font-black text-white mt-2">
                  Sterile Packaging &amp; Inspection Benchmarks
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  100% optical inspection under stereomicroscopes before sealing in medical-grade Tyvek pouches.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Quality Standards & Certifications */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              REGULATORY BENCHMARKS
            </div>
            <h2 className="text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              International Accreditations &amp; Standards
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Strictly conforming to national and international healthcare manufacturing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${item.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0f2a44]">{item.title}</h3>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-700 font-bold mt-0.5">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified &amp; Current
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Corporate Timeline */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              GROWTH &amp; REPUTATION
            </div>
            <h2 className="text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Our Journey Since 2010
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Over a decade and a half of continuous dedication to Pakistan&apos;s healthcare infrastructure.
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-cyan-600 shadow-md group-hover:scale-125 transition-transform" />
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm max-w-3xl">
                  <span className="text-xs font-mono font-black text-cyan-700 bg-cyan-100/80 px-2.5 py-1 rounded-full inline-block mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f2a44]">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Institutional Tender & Procurement Callout */}
      <section className="py-16 bg-[#0f2a44] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>DIRECT GOVERNMENT CONTRACTOR</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
            Ready to Partner for Institutional Tenders or Clinical Supply?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            We provide official tender documents, DRAP certificates, bioburden test reports, and volume-discount pricing within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/30 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Lahore Office</span>
            </button>

            <button
              onClick={onOpenRfq}
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0f2a44] font-black text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
            >
              Request Institutional RFQ
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
