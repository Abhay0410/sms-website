import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const modules = [
  "Academic Management",
  "Student Management",
  "Teacher Management",
  "Fee Management",
  "Admission & Enquiry",
  "Result Management",
  "HR & Payroll",
  "Library Management",
  "Transport Management",
  "Inventory & Assets",
  "Financial Ledger",
  "Communication",
  "Staff Management",
  "Child Management",
  "Bulk Import",
];

const Navbar = () => {
  return (
    <nav className="px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-200 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-black tracking-tight text-indigo-600 flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">
          E
        </div>
        EduZager
      </Link>

      <div className="flex items-center gap-6">
        {/* Modules Dropdown */}
        <div className="relative group">
          <Link to="/modules" className="flex items-center gap-1 text-slate-600 font-medium hover:text-indigo-600 transition">
            Modules
            <ChevronDown size={16} />
          </Link>

          <div
            className=" 
              absolute top-full left-0 
              w-72 bg-white rounded-xl shadow-xl border border-slate-200
              opacity-0 invisible
              group-hover:opacity-100
              group-hover:visible
              transition-all duration-300
              
            "
          >
            {modules.map((module, index) => (
              <Link
                key={index}
                to={
                  module === "Academic Management" ? "/academic-structure" : "/modules"
                }
                className="
                  block px-3 py-2 text-[10px] text-slate-700
                  hover:bg-indigo-50 hover:text-indigo-600
                  border-b border-slate-100 last:border-none
                "
              >
                {module}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/pricing"
          className="text-slate-600 font-medium hover:text-indigo-600 transition"
        >
          Pricing
        </Link>

        <Link
          to="/contact"
          className="text-slate-600 font-medium hover:text-indigo-600 transition"
        >
          Contact
        </Link>

        <Link
          to="/register"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition"
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;