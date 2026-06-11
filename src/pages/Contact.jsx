import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, ArrowRight, Clock, Headphones } from 'lucide-react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// --- Floating Label Input ---
const FloatingInput = ({ label, name, type = 'text', value, onChange, required, placeholder }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 bg-white/80
        focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 focus:border-[#C62828]
        transition-all text-slate-800 text-sm font-medium"
    />
    <label
      htmlFor={name}
      className="absolute left-4 top-2 text-[11px] font-bold tracking-widest uppercase
        text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
        peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal
        peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[11px]
        peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#C62828]
        transition-all pointer-events-none"
    >
      {label}
    </label>
  </div>
);

// --- Floating Label Textarea ---
const FloatingTextarea = ({ label, name, value, onChange, required, rows = 5 }) => (
  <div className="relative group">
    <textarea
      name={name}
      id={name}
      required={required}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder=" "
      className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 bg-white/80
        focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 focus:border-[#C62828]
        transition-all text-slate-800 text-sm font-medium resize-none"
    />
    <label
      htmlFor={name}
      className="absolute left-4 top-2 text-[11px] font-bold tracking-widest uppercase
        text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
        peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal
        peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[11px]
        peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#C62828]
        transition-all pointer-events-none"
    >
      {label}
    </label>
  </div>
);

// --- Info Card ---
const InfoCard = ({ icon: Icon, label, lines }) => (
  <div className="flex items-start gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#C62828]/80 transition-all duration-300">
      <Icon size={18} className="text-white" />
    </div>
    <div>
      <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-1">{label}</p>
      {lines.map((line, i) => (
        <p key={i} className="text-slate-200 text-sm leading-relaxed">{line}</p>
      ))}
    </div>
  </div>
);

// --- Stats Badge ---
const Stat = ({ number, label }) => (
  <div className="text-center px-4 py-3 rounded-xl bg-white/5 border border-white/10">
    <p className="text-2xl font-black text-white tracking-tight">{number}</p>
    <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mt-0.5">{label}</p>
  </div>
);

// --- Department Selector ---
const departments = [
  { value: 'sales', label: 'Sales & Pricing' },
  { value: 'demo', label: 'Request a Demo' },
  { value: 'support', label: 'Technical Support' },
  { value: 'enterprise', label: 'Enterprise / Custom' },
  { value: 'other', label: 'Other Inquiry' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    department: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await axios.post(`${API_BASE_URL}/api/public/contact`, formData);
      setStatus('success');
      setFormData({ name: '', email: '', institution: '', department: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div
      className="min-h-screen w-full font-sans bg-[#F7F5F0] relative overflow-hidden"
      style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
    >
      {/* ── Background grid motif ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#0F1B2D 1px, transparent 1px), linear-gradient(90deg, #0F1B2D 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* ── Top rule lines (academic paper motif) ── */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C62828] via-[#E8A020] to-[#C62828]" /> */}

      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pt-10 lg:pb-24">

        {/* ══ HEADER ══ */}
        <div className="max-w-2xl mb-8">
          <h1
            className="text-4xl lg:text-5xl font-black text-[#0F1B2D] leading-[1.05] tracking-tight mb-3"
            style={{ fontStretch: 'condensed' }}
          >
            Let's build a<br />
            <span className="relative inline-block">
              smarter campus.
              <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#E8A020]/40 rounded-full -z-10" />
            </span>
          </h1>
          <p className="text-slate-500 text-base leading-relaxed max-w-lg">
            Whether you're a principal evaluating ERP options or an IT lead planning a rollout — our team will respond within one business day.
          </p>
        </div>

        {/* ══ MAIN CARD ══ */}
        <div className="grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(15,27,45,0.22)] border border-white/60">

          {/* ── LEFT PANEL ── */}
          <div className="lg:col-span-2 bg-[#0F1B2D] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Ruled-paper accent lines */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="pointer-events-none absolute left-0 right-0 h-px bg-white/[0.04]"
                style={{ top: `${80 + i * 52}px` }}
              />
            ))}
            {/* Vertical margin line */}
            <div className="pointer-events-none absolute left-14 top-0 bottom-0 w-px bg-[#C62828]/20" />

            <div className="relative z-10">

              <h3 className="text-2xl font-bold text-white mb-8 leading-snug">
                We're here when<br />
                <span className="text-[#E8A020]">you need us.</span>
              </h3>

              <div className="space-y-7">
                <InfoCard
                  icon={Mail}
                  label="Email"
                  lines={['hello@eduzager.com', 'support@eduzager.com']}
                />
                <InfoCard
                  icon={Phone}
                  label="Phone"
                  lines={['+91 555-123-4567', 'Mon–Fri, 9 AM – 6 PM IST']}
                />
                <InfoCard
                  icon={MapPin}
                  label="Office"
                  lines={['123 Innovation Drive, Suite 400', 'Durg, Chhattisgarh 491001']}
                />
                <InfoCard
                  icon={Headphones}
                  label="Support Portal"
                  lines={['help.eduzager.com', 'Avg. response: &lt; 4 hours']}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="relative z-10 mt-12 grid grid-cols-3 gap-3">
              <Stat number="500+" label="Schools" />
              <Stat number="2M+" label="Students" />
              <Stat number="99.9%" label="Uptime" />
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm p-10 lg:p-12">
            <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-6">
              Send us a message
            </p>

            {/* Success state */}
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-[#0F1B2D] mb-2">Message Received</h3>
                <p className="text-slate-500 max-w-sm">
                  Our team will review your inquiry and get back to you within one business day.
                </p>
                <div className="flex items-center gap-2 mt-5 text-[#C62828] text-sm font-semibold">
                  <Clock size={15} />
                  <span>Expected response: within 24 hours</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FloatingInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FloatingInput
                  label="Institution / School Name"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                />

                {/* Department selector */}
                <div className="relative">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none px-4 pt-6 pb-2 rounded-xl border border-slate-200 bg-white/80
                      focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 focus:border-[#C62828]
                      transition-all text-slate-800 text-sm font-medium cursor-pointer"
                  >
                    <option value="" disabled>Select a department…</option>
                    {departments.map((d) => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                  <label className="absolute left-4 top-2 text-[11px] font-bold tracking-widest uppercase text-slate-400 pointer-events-none">
                    Department
                  </label>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <FloatingTextarea
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />

                {/* Error */}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-sm">
                    <AlertCircle size={16} className="text-red-600 shrink-0" />
                    <span className="text-red-700 font-semibold">
                      Delivery failed. Please try again or email us directly.
                    </span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0F1B2D] text-white py-4 px-6 rounded-xl font-bold text-sm tracking-wide
                    hover:bg-[#C62828] transition-all duration-300 disabled:opacity-60
                    flex items-center justify-center gap-3 group shadow-lg shadow-slate-900/20"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  By submitting, you agree to our{' '}
                  <a href="#" className="underline hover:text-[#C62828] transition-colors">Privacy Policy</a>.
                  We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* ══ BOTTOM TRUST BAR ══ */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: '🔒', text: 'SOC 2 Type II Certified' },
            { icon: '🇮🇳', text: 'DPDPA Compliant' },
            { icon: '☁️', text: '99.9% SLA Uptime' },
            { icon: '🏫', text: 'Used by 500+ Schools' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-slate-500 text-sm">
              <span>{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}