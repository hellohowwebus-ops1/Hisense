import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Building,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [hospital, setHospital] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `*GENERAL HISENSE INQUIRY*\n*From:* ${name}\n*Institution:* ${hospital}\n*Phone:* ${phone}\n*Message:* ${message}`
    );
    window.open(`https://wa.me/923218000560?text=${encoded}`, '_blank');
    setSent(true);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 mb-2">
            INSTITUTIONAL PROCUREMENT &amp; CLIENT PORTAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2a44] tracking-tight uppercase">
            Headquarters &amp; Direct Client Relations
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Reach out directly to CEO Mr. Hafiz Asif Ali and our healthcare logistics team for government tenders, hospital frameworks, or sample evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Headquarters Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              <h3 className="text-lg font-bold text-[#0f2a44] flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-cyan-700" />
                Lahore Corporate Office &amp; Central Warehouse
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Physical Address:</strong>
                    48-Main Multan Road, Lahore, Punjab, Pakistan
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Executive Direct Numbers:</strong>
                    <div>Mobile / WhatsApp: <strong className="text-cyan-800 font-mono">0321-8000560 / 0333-8000560</strong></div>
                    <div>PTCL Office Line: <strong className="text-cyan-800 font-mono">+92 42 35494400</strong></div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Official Email:</strong>
                    hisenseinternational@gmail.com
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Operational Hours:</strong>
                    Monday – Saturday: 9:00 AM – 6:00 PM (PKT)
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-cyan-800 font-bold">Direct CEO WhatsApp</span>
                  <div className="text-base font-black text-[#0f2a44] font-mono">+92 321 8000560</div>
                </div>

                <a
                  href="https://wa.me/923218000560?text=Hello%20Hisense%20International%20CEO%2C%20I%20would%20like%20to%20inquire%20about%20medical%20devices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Regulatory Registrations */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs space-y-2">
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500">
                STATUTORY &amp; TAX CREDENTIALS
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Company Name</span>
                <span className="font-bold text-slate-900">HISENSE INTERNATIONAL</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Status</span>
                <span className="font-bold text-emerald-700">Govt. Contractor &amp; Importer</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-600">Quality Management</span>
                <span className="font-bold text-cyan-800">ISO 9001:2015</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct RFP & Procurement Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md">
            <h3 className="text-xl font-bold text-[#0f2a44] mb-2">
              Direct Institutional Tender &amp; Quote Inquiry
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Inquiries are routed directly to Mr. Hafiz Asif Ali and the institutional sales department.
            </p>

            {sent ? (
              <div className="p-8 text-center bg-cyan-50 border border-cyan-200 rounded-2xl text-cyan-900 space-y-3">
                <CheckCircle className="w-12 h-12 text-cyan-600 mx-auto" />
                <h4 className="text-base font-bold">Inquiry Transmitted Successfully</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your procurement request has been routed to Hisense International via WhatsApp. Our sales unit will respond shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#0f2a44] text-white text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Tariq Mahmood"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hospital / Clinic / Department *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Services Hospital / IVF Center"
                      value={hospital}
                      onChange={(e) => setHospital(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Inquiry Details / Products of Interest *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify device requirements (e.g., 500 pcs EchoFlex Catheters, 5 units Class-B Autoclaves, Laparoscopic instruments quote, etc.)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:bg-white transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Submit Procurement RFP Directly to CEO</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center font-mono mt-2">
                  Guaranteed confidentiality • Direct factory authorization • Lahore distribution center
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
