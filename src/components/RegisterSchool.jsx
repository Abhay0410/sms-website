import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export default function RegisterSchool() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    adminName: '',
    adminEmail: '',
    adminPassword: '',
    schoolName: '',
    contactPhone: '',
    subdomain: '',
    plan: 'Pro', // Default plan selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Auto-generate subdomain from school name
    if (name === 'schoolName' && !formData.subdomain) {
      setFormData((prev) => ({
        ...prev,
        subdomain: value.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      }));
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Structure the payload exactly how the public backend endpoint expects it
      const payload = {
        schoolName: formData.schoolName,
        // Auto-generate a unique 6-character school code based on the subdomain
        schoolCode: formData.subdomain.toUpperCase().substring(0, 6) + Math.floor(10 + Math.random() * 90),
        subdomain: formData.subdomain,
        adminDetails: {
          name: formData.adminName,
          email: formData.adminEmail,
          password: formData.adminPassword,
          phone: formData.contactPhone,
        }
      };

      // 2. Hit the PUBLIC registration endpoint dynamically
      const response = await axios.post(`${API_BASE_URL}/api/schools/register`, payload);

      if (response.data.success) {
        setSuccess(true);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to submit registration. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="py-12 flex items-center justify-center px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white max-w-lg w-full rounded-[2rem] shadow-2xl p-10 text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ⏳
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for choosing EduZager for <strong>{formData.schoolName}</strong>. Your account is currently <strong>Pending Approval</strong>.
            <br/><br/>
            Our team will review your application and activate your workspace shortly. We will notify you at <strong>{formData.adminEmail}</strong>.
          </p>
          <Link
            to="/"
            className="block w-full bg-slate-100 text-slate-700 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 flex items-center justify-center px-6 bg-slate-50">
      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Set up your institution
          </h1>
          <p className="text-slate-600">
            Join thousands of modern schools running on EduZager.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2">
            <motion.div 
              className="bg-indigo-600 h-2"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-8 md:p-10">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
              <AnimatePresence mode="wait">
                {/* STEP 1: ADMIN DETAILS */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Step 1: Admin Account</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                        <input type="text" name="adminName" required value={formData.adminName} onChange={handleChange} placeholder="Principal / Admin Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                        <input type="email" name="adminEmail" required value={formData.adminEmail} onChange={handleChange} placeholder="admin@school.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Secure Password</label>
                        <input type="password" name="adminPassword" required value={formData.adminPassword} onChange={handleChange} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SCHOOL DETAILS */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Step 2: School Information</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">School Name</label>
                        <input type="text" name="schoolName" required value={formData.schoolName} onChange={handleChange} placeholder="Springfield High School" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Phone</label>
                        <input type="tel" name="contactPhone" required value={formData.contactPhone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: PLATFORM SETUP */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Step 3: Portal Setup</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">School Login URL (Slug)</label>
                        <div className="flex items-center">
                          <span className="bg-slate-100 border border-slate-300 border-r-0 px-4 py-3 rounded-l-xl text-slate-500 text-sm font-medium">
                            eduzager.com/school/
                          </span>
                          <input type="text" name="subdomain" required value={formData.subdomain} onChange={handleChange} placeholder="springfield" className="w-full px-4 py-3 rounded-r-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select Plan</label>
                        <select name="plan" value={formData.plan} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition bg-white">
                          <option value="Basic">Basic - Up to 500 Students</option>
                          <option value="Pro">Pro - Up to 2,000 Students</option>
                          <option value="Enterprise">Enterprise - Unlimited</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button type="button" onClick={prevStep} className="px-6 py-3 font-semibold text-slate-500 hover:text-slate-800 transition">
                    ← Back
                  </button>
                ) : (
                  <div></div> // Placeholder to keep alignment
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/30 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading && (
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  )}
                  {step === 3 ? (loading ? 'Submitting...' : 'Submit Application') : 'Continue →'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-slate-500">
          Already have an account? <Link to="/" className="text-indigo-600 font-bold hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
}