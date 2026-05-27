import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-slate-900 pt-16 pb-8 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-2">
        <Link to="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-lg">E</div>
          EduZager
        </Link>
        <p className="text-slate-400 max-w-sm leading-relaxed">
          The modern operating system for educational institutions. Streamlining administration, academics, and communication in one powerful platform.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Product</h4>
        <ul className="space-y-2">
          <li><Link to="/pricing" className="text-slate-400 hover:text-white transition">Pricing</Link></li>
          <li><span className="text-slate-400 hover:text-white transition cursor-pointer">Features</span></li>
          <li><span className="text-slate-400 hover:text-white transition cursor-pointer">Security</span></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><span className="text-slate-400 hover:text-white transition cursor-pointer">About Us</span></li>
          <li><span className="text-slate-400 hover:text-white transition cursor-pointer">Contact Support</span></li>
          <li><span className="text-slate-400 hover:text-white transition cursor-pointer">Privacy Policy</span></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} EduZager SaaS. All rights reserved.
    </div>
  </footer>
);

export default Footer;
