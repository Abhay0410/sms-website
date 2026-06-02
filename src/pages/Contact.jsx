import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Hit your newly created public backend route
      await axios.post(`${API_BASE_URL}/api/public/contact`, formData);
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      alert('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto w-full font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Get in touch
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Have questions about EduZager, pricing, or need a custom enterprise solution? Our team is here to help you transform your campus.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8 text-slate-300">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-indigo-400 text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Email Us</p>
                  <p>hello@eduzager.com</p>
                  <p>support@eduzager.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-indigo-400 text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Call Us</p>
                  <p>+91 555-123-4567</p>
                  <p className="text-sm mt-1">Mon-Fri from 8am to 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-indigo-400 text-xl mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Headquarters</p>
                  <p>123 Innovation Drive<br/>Tech Hub, Suite 400<br/>Durg, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-3 p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" placeholder="john@school.edu" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea name="message" required value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition resize-none" placeholder="Tell us a little about your institution's needs..."></textarea>
            </div>
            <button type="submit" disabled={status === 'submitting'} className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30 disabled:opacity-70 flex justify-center items-center gap-2">
              {status === 'submitting' ? 'Sending...' : status === 'success' ? <><FaCheckCircle /> Message Sent!</> : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;