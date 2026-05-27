import { Link } from 'react-router-dom';

const CtaBanner = () => (
  <section className="w-full bg-slate-900 py-16 px-6 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready to transform your campus?</h2>
      <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join hundreds of modern schools using EduZager to streamline their operations. Set up your digital campus in minutes.</p>
      <Link to="/register" className="inline-block bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-400 transition shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] transform hover:-translate-y-1">Start Your Free Trial</Link>
    </div>
  </section>
);

export default CtaBanner;
