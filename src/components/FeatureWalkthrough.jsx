import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserShield,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUserFriends,
  FaSearch,
  FaBell,
  FaAngleRight,
  FaCheckCircle,
  FaClock
} from 'react-icons/fa';
import screenshot from '../../src/assets/adminDashboardImg.png';

const DURATION = 8000;
const UPDATE_INTERVAL = 40;
const PROGRESS_STEP = (UPDATE_INTERVAL / DURATION) * 100;

const profiles = [
  {
    id: 'admin',
    title: 'Admin Portal',
    subtitle: 'Complete School ERP Control',
    icon: FaUserShield,
    headerText: 'EduSphere ERP — Admin Portal',
    sidebarLinks: ['User Registration', 'Bulk Imports', 'Academic Management', 'Fee Management', 'Staff HR', 'Payroll & Salary', 'Library', 'Transport'],
    imageSrc: screenshot,
    widgetTitle: 'System Automation Framework',
    stats: [{ label: 'Active Students', value: '2,845' }, { label: 'Monthly Revenue', value: '₹4,52,000' }, { label: 'Staff Count', value: '142' }],
    badge: 'SuperAdmin'
  },
  {
    id: 'teacher',
    title: 'Teacher Hub',
    subtitle: 'Academics & Attendance',
    icon: FaChalkboardTeacher,
    headerText: 'EduSphere ERP — Teacher Hub',
    sidebarLinks: ['My Classes', 'Schedule', 'Mark Attendance', 'Record Marks', 'Self Attendance', 'Apply Leave'],
    imageSrc: screenshot,
    widgetTitle: 'Live Attendance Grading Terminal',
    stats: [{ label: 'Pending Grades', value: '3 Classes' }, { label: "Today's Attendance", value: '98%' }, { label: 'Upcoming Leaves', value: '0' }],
    badge: 'Class Teacher'
  },
  {
    id: 'student',
    title: 'Student Panel',
    subtitle: 'Classes & Timetables',
    icon: FaGraduationCap,
    headerText: 'EduSphere ERP — Student Panel',
    sidebarLinks: ['My Classes', 'Exam Results', 'Class Timetable', 'Attendance Tracker', 'Fee Receipts'],
    imageSrc: screenshot,
    widgetTitle: 'Academic Performance Hub',
    stats: [{ label: 'Current Rank', value: 'Top 5%' }, { label: 'Overall Attendance', value: '94%' }, { label: 'Assignments Due', value: '2' }],
    badge: 'Class XI-A'
  },
  {
    id: 'parent',
    title: 'Parent Portal',
    subtitle: 'Child Tracking & Financials',
    icon: FaUserFriends,
    headerText: 'EduSphere ERP — Parent Hub',
    sidebarLinks: ['My Children', 'Academic Hub', 'Financials Ledger', 'Transport Tracking', 'Communication Hub'],
    imageSrc: screenshot,
    widgetTitle: 'Fee Ledger Real-time Pipeline',
    stats: [{ label: 'Pending Fees', value: '₹0.00' }, { label: 'Transport Status', value: 'In Transit' }, { label: 'Unread Alerts', value: '1' }],
    badge: 'Guardian Access'
  }
];

export default function FeatureWalkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isInterrupted = useRef(false);

  // Auto-advance loop tracking progress steps
  useEffect(() => {
    const timer = setInterval(() => {
      if (isInterrupted.current) return;

      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % profiles.length);
          return 0;
        }
        return prev + PROGRESS_STEP;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setProgress(0);
      // Optional: uncomment below to completely halt automation on interaction
      // isInterrupted.current = true; 
    }
  };

  const ActiveIcon = profiles[activeIndex].icon;

  return (
    <section className="py-12 px-4 max-w-[85rem] mx-auto w-full font-sans antialiased">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          One platform. <span className="bg-gradient-to-r bg-clip-text text-transparent from-indigo-600 to-violet-500">Every user role.</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Experience a unified ecosystem engineered natively for every core stakeholder in your institution.
        </p>
      </div>

      {/* Main Mac Mockup Frame Container */}
      <div className="bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(99,102,241,0.12)] border border-slate-200/80 overflow-hidden flex flex-col min-h-[680px]">

        {/* Top Window Chrome Window Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200/60 flex items-center justify-between select-none">
          <div className="flex gap-2 w-20">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          <div className="flex-1 max-w-md mx-auto bg-slate-200/60 rounded-lg py-1 px-3 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 shadow-inner">
            <FaSearch className="text-slate-400 text-[10px]" />
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
              >
                {profiles[activeIndex].headerText}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 w-20 justify-end text-slate-400">
            <FaBell className="text-sm hover:text-slate-600 transition-colors cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-slate-300 to-indigo-200 border border-white shadow-sm flex items-center justify-center text-[9px] font-bold text-slate-600 uppercase">
              {profiles[activeIndex].id[0]}
            </div>
          </div>
        </div>

        {/* Master Multi-Column Framework Grid layout */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0 bg-slate-50/50">

          {/* LEFT INTERACTIVE TRIGGER SELECTORS RAIL */}
          <div className="w-full lg:w-[28%] bg-white border-r border-slate-200/60 p-4 flex flex-col gap-2.5">
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 px-2 mb-1">Select Persona</span>
            {profiles.map((profile, index) => {
              const isActive = activeIndex === index;
              const Icon = profile.icon;
              return (
                <button
                  key={profile.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 group ${isActive ? "text-white shadow-md shadow-indigo-600/10" : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-profile-pill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70'
                      }`}>
                      <Icon className="text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>{profile.title}</h3>
                        {isActive && (
                          <span className="text-[9px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                            {profile.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-0.5 truncate ${isActive ? 'text-indigo-100/80' : 'text-slate-400'}`}>{profile.subtitle}</p>
                    </div>
                  </div>

                  {isActive && (
                    <div className="relative z-10 w-full h-[3px] bg-black/15 rounded-full mt-3.5 overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all ease-linear"
                        style={{
                          width: `${progress}%`,
                          transitionDuration: `${UPDATE_INTERVAL}ms`
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT WORKSPACE PREVIEW ENGINE CONTAINER */}
          <div className="w-full lg:w-[72%] flex flex-col md:flex-row min-h-0 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.99, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.99, x: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full flex flex-col md:flex-row flex-1"
              >
                {/* SUB-SIDEBAR SYSTEM NAVIGATION MODULES */}
                <div className="w-full md:w-56 bg-white/40 border-b md:border-b-0 md:border-r border-slate-200/50 p-4 flex flex-col gap-1 shrink-0 overflow-y-auto max-h-[180px] md:max-h-none">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2.5 flex items-center justify-between">
                    <span>Navigation Structure</span>
                  </div>
                  {profiles[activeIndex].sidebarLinks.map((link, idx) => (
                    <div
                      key={link}
                      className={`text-xs font-semibold px-2.5 py-2 rounded-lg cursor-pointer transition-all flex items-center justify-between group ${idx === 0
                        ? "bg-white text-indigo-600 shadow-sm border border-slate-100"
                        : "text-slate-500 hover:text-slate-800 hover:bg-white/60"
                        }`}
                    >
                      <span className="truncate">{link}</span>
                      <FaAngleRight className={`text-[10px] transition-transform ${idx === 0 ? 'text-indigo-500 translate-x-0.5' : 'opacity-0 group-hover:opacity-100 text-slate-400'}`} />
                    </div>
                  ))}
                </div>

                {/* CENTRAL CONTENT INTERACTIVE WORKSPACE */}
                <div className="flex-1 p-5 md:p-6 lg:p-7 flex flex-col gap-5 min-w-0 bg-slate-50/30 overflow-y-auto">

                  {/* Real-time Metric Dashboard Widget Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 shrink-0">
                    {profiles[activeIndex].stats.map((stat, i) => (
                      <div key={i} className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-between group hover:border-indigo-200 transition-colors">
                        <div>
                          <div className="text-[11px] font-medium text-slate-400 tracking-wide mb-0.5">{stat.label}</div>
                          <div className="text-lg font-bold text-slate-800 tracking-tight">{stat.value}</div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 group-hover:scale-125 transition-transform" />
                      </div>
                    ))}
                  </div>

                  {/* HTML5 Video Asset Frame Box Wrapper */}
                  <div className="flex-1 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-200/80 overflow-hidden flex flex-col min-h-[70] relative">
                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <h4 className="font-bold text-slate-700 text-xs tracking-wide">
                          {profiles[activeIndex].widgetTitle}
                        </h4>
                      </div>
                      <div className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <FaClock className="text-[9px]" /> Dynamic System Render
                      </div>
                    </div>

                    {/* Bug-free Video Swapping Rendering Engine Area */}
                    <div className="flex-1 bg-slate-900 relative min-h-0 group overflow-hidden">

                      <div className="absolute top-4 left-5 z-10">
                        

                        <h2 className="text-[10px] font-bold text-white leading-none">
                          EduSphere ERP
                        </h2>

                        <p className="text-[11px] text-slate-400 mt-1">
                          Complete School Management Platform
                        </p>
                      </div>

                      {profiles.map((p, index) => (
                        index === activeIndex && (
                          <img
                            key={p.id}
                            src={p.imageSrc}
                            alt={p.title}
                            className="w-full h-full object-contain absolute "
                          />
                        )
                      ))}

                      {/* Interactive Glassmorphism Overlay UI Card */}
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-lg p-3 text-white flex items-center justify-between shadow-lg transform translate-y-1 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-md shrink-0">
                            <FaCheckCircle className="text-xs" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold tracking-wide text-white truncate">Functional Module Live</p>
                            <p className="text-[10px] text-slate-300/90 truncate">Securely decoupled Multi-Tenant Role Access Verified.</p>
                          </div>
                        </div>
                        <div className="flex gap-1 shrink-0 px-2 py-1 bg-white/15 text-[9px] font-black tracking-wider rounded uppercase text-white/90">
                          RBAC Passed
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}