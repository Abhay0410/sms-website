import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="text-center px-4 pt-16 pb-16 max-w-5xl mx-auto">
    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-sm">
      ✨ EduZager v2.0 is now live
    </div>
    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
      The Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Modern Schools</span>
    </h1>
    <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Streamline admissions, automate fee collection, and power up your academic tracking all in one beautifully designed platform.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/register" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1">Start Free Trial</Link>
      <Link to="/contact" className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition">Book a Demo</Link>
    </div>
    <p className="mt-8 text-sm font-medium text-slate-400">Trusted by over 500+ institutions worldwide</p>
  </section>
);

export default HeroSection;
