import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search, ArrowUpRight } from "lucide-react";

// ── Module list with icons (emoji as lightweight stand-in for lucide) ──
const modules = [
  { label: "Academic Management",  path: "/academic-structure",   icon: "🎓" },
  { label: "Student Management",   path: "/student-management",   icon: "👤" },
  { label: "Teacher Management",   path: "/teacher-management",   icon: "🏫" },
  { label: "Fee Management",       path: "/fee-management",       icon: "💳" },
  { label: "Admission & Enquiry",  path: "/admission",            icon: "📋" },
  { label: "Result Management",    path: "/result-management",    icon: "📊" },
  { label: "HR & Payroll",         path: "/hr-payroll",           icon: "💼" },
  { label: "Library Management",   path: "/library",              icon: "📚" },
  { label: "Transport Management", path: "/transport",            icon: "🚌" },
  { label: "Inventory & Assets",   path: "/inventory",            icon: "📦" },
  { label: "Financial Ledger",     path: "/financial-ledger",     icon: "🧾" },
  { label: "Communication",        path: "/communication",        icon: "💬" },
  { label: "Staff Management",     path: "/staff-management",     icon: "🗂️"  },
  { label: "Child Management",     path: "/child-management",     icon: "🧒" },
  { label: "Bulk Import",          path: "/bulk-import",          icon: "⬆️"  },
];

const navLinks = [
  { label: "Features", path: "/features" },
  { label: "Pricing",  path: "/pricing"  },
  { label: "About",    path: "/about"    },
  { label: "Contact",  path: "/contact"  },
];

// ── Logo mark — SVG inline, no external deps ──
const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 select-none group">
    {/* Mark: Isometric Layered Stack / Academic Cap (Represents Modules + Education) */}
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom Layer (Shadow/Data) */}
      <path d="M16 29L3 22L16 15L29 22L16 29Z" fill="#111111" fillOpacity="0.15"/>
      <path d="M16 29L3 22L16 15L29 22L16 29Z" stroke="#111111" strokeWidth="1.5" strokeOpacity="0.2" strokeLinejoin="round"/>
      
      {/* Middle Layer (Module/Application) */}
      <path d="M16 23L3 16L16 9L29 16L16 23Z" fill="#C62828" fillOpacity="0.4"/>
      <path d="M16 23L3 16L16 9L29 16L16 23Z" stroke="#C62828" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round"/>
      
      {/* Top Layer (Cap/Academics) */}
      <path d="M16 17L3 10L16 3L29 10L16 17Z" fill="#C62828"/>
      <path d="M16 17L3 10L16 3L29 10L16 17Z" stroke="#C62828" strokeWidth="1.5" strokeLinejoin="round"/>
      
      {/* Tassel line dropping from right edge */}
      <path d="M29 10V17" stroke="#C62828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    <span className="text-[22px] leading-none tracking-tight font-black text-slate-900 group-hover:opacity-90 transition-opacity">
      Edu<span className="text-[#C62828]">Zager</span>
    </span>
  </Link>
);

export default function Navbar() {
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const megaRef  = useRef(null);
  const location = useLocation();

  // close mega on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mega on outside click
  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white
          transition-shadow duration-200
          ${scrolled ? "shadow-[0_1px_16px_rgba(0,0,0,0.08)] border-b border-gray-100" : "border-b border-gray-100"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

          {/* ── LEFT: Logo ── */}
          <Logo />

          {/* ── CENTER: Nav links (desktop) ── */}
          <div className="hidden md:flex items-center gap-1">

            {/* Modules mega trigger */}
            <div 
              ref={megaRef} 
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                to="/modules"
                className={`
                  flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${megaOpen
                    ? "text-[#C62828] bg-red-50"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"}
                `}
              >
                Modules
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${megaOpen ? "rotate-180 text-[#C62828]" : ""}`}
                />
              </Link>

              {/* ── MEGA DROPDOWN ── */}
              {megaOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[640px] bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">

                  {/* header strip */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase">
                        All Modules
                      </p>
                      <p className="text-sm font-bold text-black mt-0.5">
                        15 modules, one platform
                      </p>
                    </div>
                  </div>

                  {/* 3-col grid */}
                  <div className="grid grid-cols-3 gap-0 p-4">
                    {modules.map((mod) => (
                      <Link
                        key={mod.path}
                        to={mod.path}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-[#C62828] transition-all group"
                      >
                        <span className="text-base leading-none">{mod.icon}</span>
                        <span className="font-medium leading-tight">{mod.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* footer strip */}
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
                    <span className="text-xs text-gray-400">Need a custom module?</span>
                    <Link to="/contact" className="text-xs text-[#C62828] font-semibold hover:underline">
                      Talk to us →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${location.pathname === link.path
                    ? "text-[#C62828] bg-red-50"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── RIGHT: Actions ── */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search */}
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all"
              aria-label="Search"
            >
              <Search size={16} />
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-all"
            >
              Log in
            </Link>

            {/* CTA */}
            <Link
              to="/register"
              className="
                flex items-center gap-1.5
                bg-[#C62828] text-white
                px-4 py-2 rounded-full
                text-sm font-semibold
                hover:bg-[#a81f1f]
                transition-all
                shadow-sm
              "
            >
              Start Free Trial
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* ── MOBILE: hamburger ── */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-white flex flex-col
          transition-transform duration-300 ease-in-out
          md:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* top spacing for the fixed navbar */}
        <div className="h-16 border-b border-gray-100 flex items-center px-6">
          <Logo />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* Modules section */}
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Modules
          </p>
          <div className="grid grid-cols-2 gap-1 mb-8">
            {modules.map((mod) => (
              <Link
                key={mod.path}
                to={mod.path}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-[#C62828] transition-all"
              >
                <span className="text-base leading-none">{mod.icon}</span>
                <span className="font-medium leading-tight">{mod.label}</span>
              </Link>
            ))}
          </div>

          {/* Other links */}
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Company
          </p>
          <div className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* bottom CTA */}
        <div className="px-6 py-6 border-t border-gray-100 flex flex-col gap-3">
          <Link
            to="/login"
            className="w-full text-center border border-gray-200 px-4 py-3 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-all"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="w-full text-center bg-[#C62828] text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-[#a81f1f] transition-all"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

      {/* ── MEGA backdrop ── */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
          onClick={() => setMegaOpen(false)}
        />
      )}

      {/* spacer so page content starts below fixed nav */}
      <div className="h-16" />
    </>
  );
}