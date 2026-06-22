import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Search, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ── Module list with icons (emoji as lightweight stand-in for lucide) ──
const modules = [
  { label: "Academic Management",  path: "/academic-structure",   icon: "🎓" },
  { label: "Student Management",   path: "/student-management",   icon: "👤" },
  { label: "Teacher Management",   path: "/teacher-management",   icon: "🏫" },
  { label: "Fee Management",       path: "/fee-management",       icon: "💳" },
  { label: "Admission & Enquiry",  path: "/admission-and-enquiry",icon: "📋" },
  { label: "Result Management",    path: "/result-management",    icon: "📊" },
  { label: "HR & Payroll",         path: "/hr-payroll",           icon: "💼" },
  { label: "Library Management",   path: "/library-management",   icon: "📚" },
  { label: "Transport Management", path: "/transport-management", icon: "🚌" },
  { label: "Inventory & Assets",   path: "/inventory-management", icon: "📦" },
  { label: "Financial Ledger",     path: "/financial-ledger",     icon: "🧾" },
  { label: "Communication",        path: "/communication",        icon: "💬" },
  { label: "Staff Management",     path: "/staff-management",     icon: "🗂️"  },
  { label: "Child Management",     path: "/child-management",     icon: "🧒" },
  { label: "Bulk Import",          path: "/bulk-import",          icon: "⬆️"  },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing",  path: "/pricing"  },
  { label: "About",    path: "/about"    },
  { label: "Contact",  path: "/contact"  },
];

// ── Search Data Aggregation (Expanded for Site-Wide Search) ──
const searchData = [
  // Pages
  ...navLinks.map(l => ({ ...l, category: 'Pages', icon: '📄' })),
  // Modules
  ...modules.map(m => ({ ...m, category: 'Modules' })),
  // Page Sections
  { label: "Our Core Values", path: "/about#our-values", category: 'About Us', icon: '🎯' },
  { label: "The EduZager Solution", path: "/about#solution", category: 'About Us', icon: '💡' },
  { label: "Pre-built Pricing Plans", path: "/pricing#plans", category: 'Pricing', icon: '📦' },
  { label: "Build Your Own Plan", path: "/pricing#custom-plan", category: 'Pricing', icon: '🛠️' },
  { label: "Pricing FAQs", path: "/pricing#faq", category: 'Pricing', icon: '❓' },
  { label: "Feature Comparison Table", path: "/features#comparison-table", category: 'Features', icon: '📊' },
  { label: "Benefits for Every Role", path: "/features#role-benefits", category: 'Features', icon: '👥' },
  
  // Actions
  { label: "Book a Demo", path: "/contact", category: "Actions", icon: '🚀' },
  { label: "Start Free Trial", path: "/register", category: "Actions", icon: '⚡' },
  { label: "Get Started", path: "/register", category: "Actions", icon: '⚡' },
];

// ── Logo mark — SVG inline, no external deps ──
const Logo = () => (
  // <Link to="/" className="flex items-center gap-2.5 select-none group">
  //   {/* Mark: Isometric Layered Stack / Academic Cap (Represents Modules + Education) */}
  //   <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     {/* Bottom Layer (Shadow/Data) */}
  //     <path d="M16 29L3 22L16 15L29 22L16 29Z" fill="#111111" fillOpacity="0.15"/>
  //     <path d="M16 29L3 22L16 15L29 22L16 29Z" stroke="#111111" strokeWidth="1.5" strokeOpacity="0.2" strokeLinejoin="round"/>
      
  //     {/* Middle Layer (Module/Application) */}
  //     <path d="M16 23L3 16L16 9L29 16L16 23Z" fill="#C62828" fillOpacity="0.4"/>
  //     <path d="M16 23L3 16L16 9L29 16L16 23Z" stroke="#C62828" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round"/>
      
  //     {/* Top Layer (Cap/Academics) */}
  //     <path d="M16 17L3 10L16 3L29 10L16 17Z" fill="#C62828"/>
  //     <path d="M16 17L3 10L16 3L29 10L16 17Z" stroke="#C62828" strokeWidth="1.5" strokeLinejoin="round"/>
      
  //     {/* Tassel line dropping from right edge */}
  //     <path d="M29 10V17" stroke="#C62828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //   </svg>

  //   <span className="text-[22px] leading-none tracking-tight font-black text-slate-900 group-hover:opacity-90 transition-opacity">
  //     Edu<span className="text-indigo-600">Zager</span>
  //   </span>
  // </Link>
  <Link to="/" className="flex items-center gap-2.5 select-none group">
    {/* Mark: Isometric Layered Stack / Academic Cap (Represents Modules + Education) */}
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom Layer (Shadow/Data) */}
      <path d="M16 29L3 22L16 15L29 22L16 29Z" fill="#111111" fillOpacity="0.15"/>
      <path d="M16 29L3 22L16 15L29 22L16 29Z" stroke="#111111" strokeWidth="1.5" strokeOpacity="0.2" strokeLinejoin="round"/>
      
      {/* Middle Layer (Module/Application) */}
      <path d="M16 23L3 16L16 9L29 16L16 23Z" fill="#4F46E5" fillOpacity="0.4"/>
      <path d="M16 23L3 16L16 9L29 16L16 23Z" stroke="#4F46E5" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round"/>
      
      {/* Top Layer (Cap/Academics) */}
      <path d="M16 17L3 10L16 3L29 10L16 17Z" fill="#4F46E5"/>
      <path d="M16 17L3 10L16 3L29 10L16 17Z" stroke="#4F46E5" strokeWidth="1.5" strokeLinejoin="round"/>
      
      {/* Tassel line dropping from right edge */}
      <path d="M29 10V17" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    <span className="text-[22px] leading-none tracking-tight font-black text-slate-900 group-hover:opacity-90 transition-opacity">
      Edu<span className="text-[#4F46E5]">Zager</span>
    </span>
  </Link>
);

export default function Navbar() {
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled,   setScrolled]   = useState(false);
  const megaRef  = useRef(null);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchInputRefMobile = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // close mega on route change
  const handleNavigation = (path) => {
    setMegaOpen(false);
    setMobileOpen(false);
    setIsSearchOpen(false);
    setMobileModulesOpen(false);
    navigate(path);
  };

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

  // close desktop search on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Cmd+K Shortcut & Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter search results
  const filteredSearch = useMemo(() => {
    if (!searchQuery) return [];
    return searchData.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearchNavigate = (path) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setHighlightedIndex(-1);
    handleNavigation(path);
  };

  const handleSearchKeyDown = (e) => {
    if (filteredSearch.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % filteredSearch.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + filteredSearch.length) % filteredSearch.length);
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      handleSearchNavigate(filteredSearch[highlightedIndex].path);
    }
  };

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
          <div className="hidden lg:flex items-center gap-1">

            

            {/* Modules mega trigger */}
            <div 
              ref={megaRef} 
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="relative"
            >
              <Link
                to="/modules"
                className={`
                  flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${megaOpen
                    ? "text-indigo-600 bg-red-50"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"}
                `}
              >
                Modules
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${megaOpen ? "rotate-180 text-indigo-600" : ""}`}
                />
              </Link>

              {/* ── MEGA DROPDOWN ── */}
              {megaOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-160 bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">

                  {/* header strip */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase">
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
                        onClick={() => handleNavigation(mod.path)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-indigo-600 transition-all group"
                      >
                        <span className="text-base leading-none">{mod.icon}</span>
                        <span className="font-medium leading-tight">{mod.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* footer strip */}
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
                    <span className="text-xs text-gray-400">Need a custom module?</span>
                    <Link to="/contact" onClick={() => handleNavigation('/contact')} className="text-xs text-indigo-600 font-semibold hover:underline">
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
                onClick={() => handleNavigation(link.path)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${location.pathname === link.path
                    ? "text-indigo-600 bg-red-50"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── RIGHT: Actions ── */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search Input with Dropdown */}
            <div ref={searchContainerRef} className="relative">
              <div className="group flex items-center gap-2 px-3 h-10 mr-2 w-56 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:border-transparent transition-all">
                <Search size={16} className="text-slate-400 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search Features"
                  className="text-sm w-full bg-transparent outline-none text-slate-800 placeholder-slate-500"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setHighlightedIndex(-1); }}
                  onFocus={() => setIsSearchOpen(true)}
                  onKeyDown={handleSearchKeyDown}
                />
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>{isSearchOpen && filteredSearch.length > 0 && <SearchResults results={filteredSearch} onNavigate={handleSearchNavigate} highlightedIndex={highlightedIndex} setHighlightedIndex={setHighlightedIndex} />}</AnimatePresence>
            </div>

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
                bg-indigo-600 text-white
                px-4 py-2 rounded-full
                text-sm font-semibold
                hover:bg-indigo-500
                transition-all
                shadow-sm
              "
            >
              Start Free Trial
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* ── MOBILE: actions ── */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => {
                setMobileOpen(true);
                setTimeout(() => searchInputRefMobile.current?.focus(), 100);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-white flex flex-col
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* top spacing for the fixed navbar */}
        <div className="h-16 border-b border-gray-100 flex items-center px-6">
          <Logo />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* Accordion for Modules */}
          <button
            onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
            className="flex items-center justify-between w-full px-3 py-3 mb-2 rounded-xl text-base font-bold text-gray-900 hover:bg-gray-100 transition-all"
          >
            <span>Modules</span>
            <ChevronDown size={18} className={`transition-transform duration-200 ${mobileModulesOpen ? "rotate-180 text-indigo-600" : ""}`} />
          </button>

          <AnimatePresence>
            {mobileModulesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-4 mb-4 border-l-2 border-red-100 ml-3 mt-1">
                  {modules.map((mod) => (
                    <Link
                      key={mod.path}
                      to={mod.path}
                      onClick={() => handleNavigation(mod.path)}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-indigo-600 transition-all"
                    >
                      <span className="text-base leading-none">{mod.icon}</span>
                      <span className="font-medium leading-tight">{mod.label}</span>
                    </Link>
                  ))}
                  <Link
                    to="/modules"
                    onClick={() => handleNavigation('/modules')}
                    className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 bg-red-50 hover:bg-red-100 rounded-xl py-3 transition-colors col-span-1 sm:col-span-2"
                  >
                    View All Modules <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-full h-px bg-gray-100 my-4"></div>

          {/* Other links */}
          <div className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavigation(link.path)}
                className="px-3 py-3 rounded-xl text-base font-bold text-gray-900 hover:bg-gray-100 transition-all"
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
            className="w-full text-center bg-indigo-600 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-[#a81f1f] transition-all"
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

const SearchResults = ({ results, onNavigate, highlightedIndex, setHighlightedIndex }) => {
  const resultsRef = useRef(null);  

  useEffect(() => {
    if (highlightedIndex >= 0 && resultsRef.current) {
      const highlightedElement = resultsRef.current.querySelector(`[data-index="${highlightedIndex}"]`);
      highlightedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);  

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full mt-2 w-[600px] -ml-40 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
    >
      <div ref={resultsRef} className="max-h-[70vh] overflow-y-auto p-2">
        {results.map((item, idx) => {
          const showCategory = idx === 0 || item.category !== results[idx - 1].category;
          return (
            <div key={item.path + idx}>
              {showCategory && (
                <h3 className="px-3 pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {item.category}
                </h3>
              )}
              <button
                data-index={idx}
                onClick={() => onNavigate(item.path)}
                onMouseEnter={() => setHighlightedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group text-left
                  ${highlightedIndex === idx ? 'bg-red-50' : 'hover:bg-slate-50'}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shadow-sm
                    ${highlightedIndex === idx 
                      ? 'bg-white border border-red-100 text-indigo-600' 
                      : 'bg-white border border-slate-200 text-slate-500'}`
                  }>
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowRight size={16} className="text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};