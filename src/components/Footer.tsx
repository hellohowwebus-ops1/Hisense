import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { HisenseLogo } from './HisenseLogo';
import { ShieldCheck, MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { AppPage } from './Navbar';

interface FooterProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent, page: AppPage, sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      window.location.hash = `#/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0b1a2c] text-slate-300 text-xs border-t border-slate-800">
      {/* Top Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={(e) => handleLink(e, 'home')}
              className="text-left cursor-pointer"
            >
              <HisenseLogo size="md" light={true} />
            </button>
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
              <li>
                <button onClick={(e) => handleLink(e, 'home', 'products')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Hisense EchoFlex™ IVF Catheters
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'home', 'products')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Hisense MicroPoint™ ICSI Needles
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'home', 'products')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Hisense Precision-IUI™ Devices
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'home', 'products')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Hisense Cu-T 380A® &amp; PPIUCD
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'home', 'products')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Hospital Class-B Autoclaves
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'home', 'products')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Hisense AeroDent™ Turbines
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] font-mono mb-3">
              Company Pages
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={(e) => handleLink(e, 'home')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Home Catalog &amp; 3D Lab
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'about')} className="hover:text-cyan-400 transition cursor-pointer text-left font-semibold text-slate-300">
                  About Us (Company Heritage)
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'services')} className="hover:text-cyan-400 transition cursor-pointer text-left font-semibold text-slate-300">
                  Services &amp; Turnkey Contracting
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'blog')} className="hover:text-cyan-400 transition cursor-pointer text-left font-semibold text-slate-300">
                  Insights &amp; Clinical Blog
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'contact')} className="hover:text-cyan-400 transition cursor-pointer text-left font-semibold text-slate-300">
                  Contact Us (Headquarters)
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'about')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Executive Message from CEO
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'about')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  ISO 13485 &amp; DRAP Licenses
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'contact')} className="hover:text-cyan-400 transition cursor-pointer text-left">
                  Tender Dossier Inquiry
                </button>
              </li>
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
                <a href="tel:+923218000560" className="font-mono hover:text-white transition">
                  0321-8000560 / 0333-8000560
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:hisenseinternational@gmail.com" className="truncate hover:text-white transition">
                  hisenseinternational@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={(e) => handleLink(e, 'contact')}
                  className="w-full py-2 rounded-lg bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 transition font-bold text-[11px] cursor-pointer"
                >
                  Visit Contact Page
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
