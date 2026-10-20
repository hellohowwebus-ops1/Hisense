import React, { useState } from 'react';
import { RfqItem } from '../types';
import { COMPANY_DETAILS, PRODUCTS } from '../data/mockData';
import { HisenseLogo } from './HisenseLogo';
import { 
  X, 
  Trash2, 
  Send, 
  Plus, 
  CheckCircle, 
  Building, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Printer 
} from 'lucide-react';

interface RfqBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfqItems: RfqItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onAddItem: (productId: string) => void;
}

export const RfqBuilderModal: React.FC<RfqBuilderModalProps> = ({
  isOpen,
  onClose,
  rfqItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onAddItem,
}) => {
  const [hospitalName, setHospitalName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [tenderNotes, setTenderNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Format WhatsApp Message
  const generateWhatsAppMessage = () => {
    let msg = `*OFFICIAL RFQ / TENDER INQUIRY*\n`;
    msg += `*To:* Hisense International (CEO Hafiz Asif Ali)\n\n`;
    msg += `*Institution/Hospital:* ${hospitalName || 'Not specified'}\n`;
    msg += `*Contact Person:* ${contactPerson || 'Healthcare Inquirer'}\n`;
    msg += `*Phone:* ${contactPhone || 'N/A'}\n`;
    msg += `*Email:* ${contactEmail || 'N/A'}\n\n`;
    msg += `*REQUESTED MEDICAL ITEMS:*\n`;

    if (rfqItems.length === 0) {
      msg += `- General Catalogue & Price Inquiry\n`;
    } else {
      rfqItems.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.product.name} (Qty: ${item.quantity})\n   - Subcategory: ${item.product.subcategory}\n`;
      });
    }

    if (tenderNotes) {
      msg += `\n*Additional Notes / Tender Spec:*\n${tenderNotes}\n`;
    }

    msg += `\n_Generated via Hisense International Official Portal_`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/923218000560?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <HisenseLogo size="sm" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0f2a44]">
                Institutional RFQ &amp; Quotation Cart
              </h3>
              <p className="text-xs text-slate-500">
                Direct Submission to Hisense International Executive Desk • Lahore Hub
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {submitted ? (
            <div className="text-center py-10 bg-cyan-50 rounded-2xl border border-cyan-200 p-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0f2a44]">Quotation Request Dispatched!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                Your request has been prepared for Mr. Hafiz Asif Ali and our procurement department. A formal quotation with delivery schedule will be issued promptly.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300"
                >
                  Edit Inquiry
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#0f2a44] text-white text-xs font-bold shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product List In Quotation */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-cyan-800 tracking-wider">
                    Selected Healthcare Devices ({rfqItems.length})
                  </h4>
                  {rfqItems.length > 0 && (
                    <button
                      onClick={onClearAll}
                      className="text-[11px] text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear All
                    </button>
                  )}
                </div>

                {rfqItems.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center">
                    <p className="text-sm text-slate-600">
                      No specific items in your cart. You can still submit a general tender inquiry, or quick-add from our flagship lines below:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {PRODUCTS.slice(0, 4).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => onAddItem(p.id)}
                          className="px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold hover:bg-cyan-100 transition flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" /> {p.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {rfqItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                      >
                        <div className="flex-1 pr-3">
                          <div className="font-bold text-slate-900 text-sm">{item.product.name}</div>
                          <div className="text-slate-500 text-[11px] font-mono">{item.product.subcategory}</div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 text-[11px]">Units:</span>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-slate-900 font-mono text-center text-xs focus:border-cyan-600 outline-none"
                          />
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 transition cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Institution / Inquirer Details Form */}
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase text-cyan-800 tracking-wider">
                  Procurement Officer / Hospital Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Hospital / Clinic / Organization</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Services Hospital Lahore / Genesis IVF"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:border-cyan-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Officer Name &amp; Role</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Salman (Medical Director)"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:border-cyan-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. 0300-1234567"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:border-cyan-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        placeholder="procurement@hospital.com.pk"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:border-cyan-600 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tender Requirements / Specific Catheter Gauges / Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Specify tender closing date, delivery destination (e.g. Lahore, Islamabad, Karachi), or specific clinical dimensions..."
                    value={tenderNotes}
                    onChange={(e) => setTenderNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:border-cyan-600 outline-none resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                  <div className="text-[11px] text-slate-500 font-mono">
                    Direct recipient: <strong className="text-slate-900">Hafiz Asif Ali (CEO)</strong>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition border border-slate-200 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Summary</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-md transition cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit via WhatsApp</span>
                    </button>
                  </div>
                </div>

              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
