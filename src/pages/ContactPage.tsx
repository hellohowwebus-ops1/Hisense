import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  Award,
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileText,
  AlertCircle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onOpenRfq: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onOpenRfq,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    phone: '',
    email: '',
    department: 'ivf-art',
    inquiryType: 'tender-procurement',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*OFFICIAL INQUIRY - HISENSE INTERNATIONAL*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Hospital/Institution:* ${formData.institution}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Division:* ${formData.department.toUpperCase()}\n` +
      `*Inquiry Type:* ${formData.inquiryType.toUpperCase()}\n\n` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/923218000560?text=${encodeURIComponent(formatted)}`, '_blank');
    setSubmitted(true);
  };

  const departments = [
    {
      name: 'IVF & Reproductive Consumables',
      contact: 'Mr. Hafiz Asif Ali',
      phone: '0321-8000560',
      email: 'hisenseinternational@gmail.com',
      desc: 'EchoFlex™ embryo transfer catheters, MicroPoint™ ICSI needles, and culture incubators.',
    },
    {
      name: 'CSSD & Surgical Systems',
      contact: 'Technical Engineering Team',
      phone: '0333-8000560',
      email: 'hisenseinternational@gmail.com',
      desc: 'Class-B European autoclaves, titanium laparoscopic trocars, and sterilization spares.',
    },
    {
      name: 'Contraceptives & Tender Supply',
      contact: 'Institutional Tender Desk',
      phone: '042-35494400',
      email: 'hisenseinternational@gmail.com',
      desc: 'Copper T 380A, PPIUCD postpartum kits, and provincial health tender bid packs.',
    },
    {
      name: 'Central Warehouse & Logistics',
      contact: 'Multan Road Dispatch Hub',
      phone: '0321-8000560',
      email: 'hisenseinternational@gmail.com',
      desc: 'Standing inventory, sameday courier dispatch across Punjab, Sindh, KPK & Balochistan.',
    },
  ];

  const faqs = [
    {
      q: 'How fast can emergency orders or sample packs be dispatched?',
      a: 'Orders confirmed before 2:00 PM are dispatched same-day from our 48-Main Multan Road Lahore warehouse via priority cold-chain courier or direct carrier with delivery within 24 to 48 hours nationwide.',
    },
    {
      q: 'Do you supply official DRAP registration and batch sterility reports?',
      a: 'Yes. Every batch of IVF catheters, ICSI glassware, and Copper-T devices is accompanied by valid Drug Regulatory Authority of Pakistan (DRAP) paperwork, Mouse Embryo Assay (> 80% MEA) reports, and Gamma Sterility certificates (SAL 10⁻⁶).',
    },
    {
      q: 'Can government teaching hospitals and armed forces issue direct tender RFQs?',
      a: 'Absolutely. Hisense International is an active, verified Government Contractor and General Supplier with active NTN, STRN, and PRA compliance. We provide complete institutional bidding dossiers within 24 hours.',
    },
    {
      q: 'Can we inspect products in person at your Lahore facility?',
      a: 'Yes, clinical directors, biomedical engineers, and tender committees are welcome to visit our Lahore office at 48-Main Multan Road, Monday through Saturday from 9:00 AM to 6:00 PM.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
      
      {/* 1. Page Breadcrumbs & Hero */}
      <section className="relative bg-[#0b1c2e] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-slate-300 font-bold">Contact Us</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>HEADQUARTERS &amp; CLIENT PROCUREMENT DESK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase max-w-3xl leading-tight">
            Connect With Hisense International
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Direct access to Executive CEO Mr. Hafiz Asif Ali, institutional tender coordinators, and regional warehouse dispatchers. Submit institutional bids, request clinical evaluation samples, or schedule technical product consultations.
          </p>

          {/* Quick Direct Hotline Pills */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="tel:+923218000560"
              className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call CEO: 0321-8000560</span>
            </a>

            <a
              href="https://wa.me/923218000560?text=Hello%20Hisense%20International%2C%20inquiry%20regarding%20medical%20supplies"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct Line</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. Main Contact Grid: Location Details + Interactive Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Corporate Office & Facility Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                    <Building className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f2a44]">
                      Lahore Executive Office
                    </h3>
                    <p className="text-xs text-slate-500">
                      Central Operations &amp; National Warehouse
                    </p>
                  </div>
                </div>

                <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                  
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Registered Facility Address:</strong>
                      <span>48-Main Multan Road, Lahore, Punjab, Pakistan</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Executive Direct Numbers:</strong>
                      <div className="font-mono text-cyan-800 font-bold">0321-8000560 / 0333-8000560</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">PTCL Office: +92 42 35494400</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Official Tender Email:</strong>
                      <a href="mailto:hisenseinternational@gmail.com" className="text-cyan-800 font-medium hover:underline">
                        hisenseinternational@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Warehouse &amp; Dispatch Timing:</strong>
                      <span>Monday – Saturday: 9:00 AM – 6:00 PM (PKT)</span>
                    </div>
                  </div>

                </div>

                {/* Verification Credentials */}
                <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 p-6 rounded-b-3xl text-xs space-y-2">
                  <div className="font-bold text-[#0f2a44] font-mono uppercase text-[11px] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Institutional Tender Data:</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax Status:</span>
                    <strong className="text-slate-900 font-mono">FBR Registered Active Taxpayer</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Quality Management:</span>
                    <strong className="text-cyan-800 font-mono">ISO 13485 &amp; ISO 9001:2015</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Federal Regulation:</span>
                    <strong className="text-emerald-700 font-mono">DRAP Verified Importer</strong>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="p-6 rounded-3xl bg-emerald-600 text-white shadow-lg flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-200 font-bold block">
                    INSTANT WHATSAPP RESPONSE
                  </span>
                  <div className="text-base font-black font-mono mt-0.5">
                    +92 321 8000560
                  </div>
                  <p className="text-[11px] text-emerald-100 mt-1">
                    Direct communication with Mr. Hafiz Asif Ali
                  </p>
                </div>
                <a
                  href="https://wa.me/923218000560?text=Hello%20Hisense%20International%20CEO%2C%20inquiry%20regarding%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white text-emerald-900 font-black text-xs uppercase tracking-wider shadow-md hover:bg-emerald-50 transition shrink-0"
                >
                  Chat Now
                </a>
              </div>

            </div>

            {/* Right Column: Institutional Inquiry & Tender Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md">
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-cyan-700 tracking-wider">
                  OFFICIAL INQUIRY TRANSMISSION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f2a44] mt-1">
                  Send Institutional Inquiry or Tender Request
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submissions are reviewed directly by CEO Mr. Hafiz Asif Ali with same-day confirmation.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0f2a44]">
                    Inquiry Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. Your inquiry has been routed to Mr. Hafiz Asif Ali via priority WhatsApp and corporate inbox. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0f2a44] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#153a5c] transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Mr. / Ms. Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Hospital / Organization <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="Hospital, Fertility Clinic, or Dept"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="03XX-XXXXXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Official Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@hospital.org"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Product Department
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50"
                      >
                        <option value="ivf-art">IVF &amp; ART Consumables</option>
                        <option value="contraceptive">Copper T 380A &amp; PPIUCD</option>
                        <option value="cssd-autoclave">Hospital Autoclaves &amp; CSSD</option>
                        <option value="laparoscopic">Laparoscopic Surgical Tools</option>
                        <option value="dental">Dental Machinery &amp; Handpieces</option>
                        <option value="general-supply">Turnkey Hospital General Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50"
                      >
                        <option value="tender-procurement">Institutional Tender Quotation</option>
                        <option value="sample-evaluation">Clinical Sample Request</option>
                        <option value="direct-purchase">Direct Purchase / Local PO</option>
                        <option value="distributorship">Regional Distribution / Agency</option>
                        <option value="technical-query">Technical &amp; Sterility Documentation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Specific Requirements &amp; Quantities <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify product models, required quantities, tender deadline, delivery location, or clinical inquiries..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#0f2a44] hover:bg-[#153a5c] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Transmit Official Inquiry to CEO Desk</span>
                  </button>

                  <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
                    <span>Your contact details are encrypted and kept confidential under institutional nondisclosure.</span>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 3. Department Direct Hotlines */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              SPECIALIZED CONTACTS
            </div>
            <h2 className="text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Department Direct Lines
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Reach specific biomedical specialists or warehouse logistics leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#0f2a44]">{dept.name}</h4>
                  <div className="text-[11px] text-cyan-800 font-bold font-mono mt-0.5">
                    {dept.contact}
                  </div>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <a
                    href={`tel:${dept.phone.replace(/[^0-9]/g, '')}`}
                    className="font-mono text-xs font-bold text-[#0f2a44] hover:text-cyan-700 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{dept.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
              HELP &amp; PROCUREMENT GUIDELINES
            </div>
            <h2 className="text-3xl font-black text-[#0f2a44] uppercase tracking-tight">
              Institutional Buyer FAQ
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Key details regarding orders, batch documentation, and hospital deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <h4 className="text-sm font-bold text-[#0f2a44] flex items-start gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
