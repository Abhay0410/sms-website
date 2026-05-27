import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-200 flex justify-between items-center">
    <Link to="/" className="text-2xl font-black tracking-tight text-indigo-600 flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">E</div>
      EduZager
    </Link>
    <div className="flex items-center gap-6">
      <Link to="/pricing" className="text-slate-600 font-medium hover:text-indigo-600 transition">Pricing</Link>
      <Link to="/contact" className="text-slate-600 font-medium hover:text-indigo-600 transition">Contact</Link>
      <Link to="/register" className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition">
        Start Free Trial
      </Link>
    </div>
  </nav>
);

export default Navbar;
