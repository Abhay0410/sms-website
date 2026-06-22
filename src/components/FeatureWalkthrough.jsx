import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserShield,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUserFriends,
  FaSearch,
  FaBell,
  FaCheckCircle,
  FaClock,
  // FaAngleRight,
} from 'react-icons/fa';

// ─── Replace these with your real screenshots / video thumbnails ───────────────
import adminImg from '../../src/assets/adminDashboardImg.png';
import userRegistration from '../../src/assets/User Registration.png';
import bulkImport from '../../src/assets/BulkImport.png';
import academicManagement from '../../src/assets/academicManagement.png';
import feeManagement from '../../src/assets/FeeManage.png';
import resultManagement from '../../src/assets/ResultManage.png';
import staffHR from '../../src/assets/StaffHR.png';
import payroll from '../../src/assets/Payroll&Salary.png';
import library from '../../src/assets/Library.png';
import transport from '../../src/assets/Transport.png';
import Enquiry from '../../src/assets/Enquiry&Assets.png';
// If you have separate images per section, import them here too.
// Otherwise the same image is reused (swap per section below).

const STEP_DURATION = 3500; // ms per content step
const PROGRESS_INTERVAL = 40;

const profiles = [
  {
  id: 'admin',
  title: 'Admin Portal',
  icon: FaUserShield,
  badge: 'SuperAdmin',
  headerText: 'eduzager.erp — Admin Portal',
  avatarChar: 'A',
  accentColor: '#5346D6',
  accentLight: '#EDE9FD',

  steps: [
    {
      navLabel: 'Dashboard',
      stat: { label: 'System Status', value: 'Live' },
      heading: 'Complete overview of your institution',
      body: 'Real-time analytics of students, fees, staff, attendance, and performance all in one dashboard.',
      img: adminImg,
    },

    {
      navLabel: 'User Registration',
      stat: { label: 'Active Students', value: '2,845' },
      heading: 'Register students & staff in seconds',
      body: 'Bulk-import via CSV or enrol individually. Automatic role assignment and credential dispatch on save.',
      img: userRegistration,
    },

    {
      navLabel: 'Bulk Import',
      stat: { label: 'Imports Done', value: '1,120' },
      heading: 'Fast bulk data upload system',
      body: 'Upload students, staff, and records using Excel/CSV with validation and error reporting.',
      img: bulkImport,
    },

    {
      navLabel: 'Academic Management',
      stat: { label: 'Classes Active', value: '38' },
      heading: 'End-to-end academic control',
      body: 'Manage classes, subjects, timetable, exams, syllabus tracking, and results publishing.',
      img: academicManagement,
    },

    {
      navLabel: 'Fee Management',
      stat: { label: 'Monthly Revenue', value: '₹4,52,000' },
      heading: 'Automated fee collection & receipts',
      body: 'Configure fee structures, generate invoices, track payments, and send automated reminders.',
      img: feeManagement,
    },

    {
      navLabel: 'Inventory & Assets',
      stat: { label: 'Items Registered', value: '3,210' },
      heading: 'Track all institutional assets',
      body: 'Manage furniture, lab equipment, devices, and consumables with stock tracking and maintenance logs.',
      img: adminImg,
    },

    {
      navLabel: 'Financial Ledger',
      stat: { label: 'Transactions', value: '9,540' },
      heading: 'Complete financial transparency',
      body: 'Record income, expenses, audits, and generate financial reports for accounting clarity.',
      img: adminImg,
    },

    {
      navLabel: 'Result Management',
      stat: { label: 'Exams Published', value: '120' },
      heading: 'Manage student results efficiently',
      body: 'Create exams, enter marks, auto-calculate grades, and publish results online.',
      img: resultManagement,
    },

    {
      navLabel: 'Staff HR',
      stat: { label: 'Employees', value: '142' },
      heading: 'Complete HR management system',
      body: 'Manage staff profiles, attendance, leaves, roles, and performance tracking.',
      img: staffHR,
    },

    {
      navLabel: 'Payroll & Salary',
      stat: { label: 'Monthly Payroll', value: '₹18,40,000' },
      heading: 'Automated payroll processing',
      body: 'Calculate salaries, deductions, PF, and generate payslips with one click.',
      img: payroll,
    },

    {
      navLabel: 'Library',
      stat: { label: 'Books Available', value: '12,500' },
      heading: 'Digital library management',
      body: 'Track books, issue/return records, late fees, and student library usage.',
      img: library,
    },

    {
      navLabel: 'Transport',
      stat: { label: 'Vehicles', value: '24' },
      heading: 'Manage school transport system',
      body: 'Track routes, bus allocation, driver details, and student transport assignments.',
      img: transport,
    },

    {
      navLabel: 'Admission & Enquiry',
      stat: { label: 'New Leads', value: '340' },
      heading: 'Streamline admissions process',
      body: 'Handle enquiries, applications, approvals, and admission workflows digitally.',
      img: Enquiry,
    },

    {
      navLabel: 'Communication',
      stat: { label: 'Messages Sent', value: '25K' },
      heading: 'Central communication system',
      body: 'Send notices, SMS, emails, and alerts to students, parents, and staff instantly.',
      img: adminImg,
    },

    {
      navLabel: 'Edit Profile',
      stat: { label: 'Profile Status', value: 'Updated' },
      heading: 'Manage admin profile settings',
      body: 'Update personal details, security settings, password, and system preferences.',
      img: adminImg,
    },
  ],
},
  {
    id: 'teacher',
    title: 'Teacher Hub',
    icon: FaChalkboardTeacher,
    badge: 'Class Teacher',
    headerText: 'eduzager.erp — Teacher Hub',
    avatarChar: 'T',
    accentColor: '#0E7A55',
    accentLight: '#E1F5EE',
    steps: [
      {
        navLabel: 'Mark Attendance',
        stat: { label: "Today's Attendance", value: '98%' },
        heading: 'One-tap attendance for every class',
        body: 'Mark present / absent / late with a single tap. Parents are notified instantly on absent marks.',
        img: adminImg,
      },
      {
        navLabel: 'Record Marks',
        stat: { label: 'Pending Grades', value: '3 classes' },
        heading: 'Grade entry with instant analytics',
        body: 'Enter scores per student, see class average and distribution charts update live as you type.',
        img: adminImg,
      },
      {
        navLabel: 'My Schedule',
        stat: { label: 'Periods Today', value: '6' },
        heading: 'Daily timetable at a glance',
        body: 'Your full week in a colour-coded grid. Tap any period to see class details or add a note.',
        img: adminImg,
      },
    ],
  },
  {
    id: 'student',
    title: 'Student Panel',
    icon: FaGraduationCap,
    badge: 'Class XI-A',
    headerText: 'eduzager.erp — Student Panel',
    avatarChar: 'S',
    accentColor: '#B45309',
    accentLight: '#FAEEDA',
    steps: [
      {
        navLabel: 'Exam Results',
        stat: { label: 'Current Rank', value: 'Top 5%' },
        heading: 'Full result history, always accessible',
        body: 'View marks, percentile, and subject-wise breakdown for every exam. Download report cards in one tap.',
        img: adminImg,
      },
      {
        navLabel: 'Attendance Tracker',
        stat: { label: 'Overall Attendance', value: '94%' },
        heading: 'Know exactly where you stand',
        body: 'Day-by-day attendance log with a running percentage and alerts when you approach the minimum threshold.',
        img: adminImg,
      },
      {
        navLabel: 'Class Timetable',
        stat: { label: 'Assignments Due', value: '2' },
        heading: 'Never miss a class or deadline',
        body: 'Live timetable with subject, teacher, and room number. Pending assignments surface right alongside it.',
        img: adminImg,
      },
    ],
  },
  {
    id: 'parent',
    title: 'Parent Portal',
    icon: FaUserFriends,
    badge: 'Guardian Access',
    headerText: 'eduzager.erp — Parent Hub',
    avatarChar: 'P',
    accentColor: '#9333EA',
    accentLight: '#F5F0FE',
    steps: [
      {
        navLabel: 'Academic Hub',
        stat: { label: 'Pending Fees', value: '₹0.00' },
        heading: "Your child's progress, always in view",
        body: "Real-time marks, attendance, and teacher remarks — no more waiting for PTMs to know how they're doing.",
        img: adminImg,
      },
      {
        navLabel: 'Transport Tracking',
        stat: { label: 'Bus ETA', value: '4 mins' },
        heading: 'Live bus location on the map',
        body: 'Track the school bus in real-time and get push notifications 5 minutes before pickup and drop-off.',
        img: adminImg,
      },
      {
        navLabel: 'Financials Ledger',
        stat: { label: 'Last Payment', value: '₹12,000' },
        heading: 'Full fee history & online payment',
        body: 'View every transaction, download receipts, and pay outstanding dues directly within the app.',
        img: adminImg,
      },
    ],
  },
];

const STEP_PROGRESS = (PROGRESS_INTERVAL / STEP_DURATION) * 100;

export default function FeatureWalkthrough() {
  const [activeProfile, setActiveProfile] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const profile = profiles[activeProfile];
  const step = profile.steps[activeStep];

  // Preload images to prevent flashing
  useEffect(() => {
    profiles.forEach((p) => {
      p.steps.forEach((s) => {
        const img = new Image();
        img.src = s.img;
      });
    });
  }, []);

  const resetTo = (profileIdx, stepIdx = 0) => {
    setActiveProfile(profileIdx);
    setActiveStep(stepIdx);
    setProgress(0);
  };

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + STEP_PROGRESS;
        if (next >= 100) {
          setActiveStep((s) => {
            const nextStep = s + 1;
            if (nextStep >= profiles[activeProfile].steps.length) {
              setActiveProfile((p) => (p + 1) % profiles.length);
              return 0;
            }
            return nextStep;
          });
          return 0;
        }
        return next;
      });
    }, PROGRESS_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [activeProfile]);

  return (
    <section className=" py-16 px-6 max-w-[85rem] w-full mx-auto  antialiased overflow-x-hidden">
      {/* Headline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase ">
          One platform.{' '}
          <span
            
           
          >
            Every user role.
          </span>
        </h2>
        <p className="text-slate-500 mt-1.5 font-sans text-lg max-w-xl mx-auto leading-relaxed">
          A unified ecosystem built for every stakeholder — from administration to parents.
        </p>
      </div>

      {/* Outer frame */}
      <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] bg-white flex flex-col h-full w-full">

        {/* Window chrome */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between select-none">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProfile}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="flex-1 max-w-sm mx-6 bg-slate-200/50 rounded-md py-1 px-3 flex items-center gap-2 text-xs text-slate-500 font-medium"
            >
              <FaSearch className="text-slate-400 text-[10px]" />
              {profile.headerText}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2.5">
            <FaBell className="text-slate-400 text-sm" />
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: profile.accentColor }}
            >
              {profile.avatarChar}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">

          {/* ── LEFT: Persona tabs with their nav items inline ── */}
         <div className="w-full lg:w-80 shrink-0 bg-white border-r border-slate-100 flex flex-col h-full overflow-y-auto">
            {profiles.map((p, pi) => {
              const Icon = p.icon;
              const isActiveProfile = pi === activeProfile;
              return (
                <div key={p.id}>
                  {/* Persona header row */}
                  <button
                    onClick={() => resetTo(pi)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-slate-100 ${
                      isActiveProfile ? 'bg-slate-50' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: isActiveProfile ? p.accentColor : '#f1f5f9',
                        color: isActiveProfile ? '#fff' : '#64748b',
                      }}
                    >
                      <Icon className="text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-800 truncate">{p.title}</div>
                    </div>
                    {isActiveProfile && (
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide shrink-0"
                        style={{ background: p.accentLight, color: p.accentColor }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </button>

                  {/* Steps / nav — only visible for active profile with animation */}
                  <AnimatePresence initial={false}>
                    {isActiveProfile && (
                      <motion.div
                        key="steps-content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto' },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-50/60">
                          {p.steps.map((s, si) => {
                            const isActiveStep = si === activeStep;
                            return (
                              <button
                                key={si}
                                onClick={() => { setActiveStep(si); setProgress(0); }}
                                className="w-full flex items-center gap-2 px-5 py-2.5 text-left group transition-all"
                              >
                                {/* Step progress pill */}
                                <div
                                  className="w-0.5 h-4 rounded-full shrink-0 transition-all"
                                  style={{ background: isActiveStep ? p.accentColor : '#e2e8f0' }}
                                />
                                <span
                                  className={`text-xs font-medium truncate transition-colors ${
                                    isActiveStep ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                                  }`}
                                >
                                  {s.navLabel}
                                </span>
                                {isActiveStep && (
                                  <div className="ml-auto shrink-0">
                                    <div className="w-14 h-1 bg-slate-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full rounded-full transition-all ease-linear"
                                        style={{
                                          width: `${progress}%`,
                                          background: p.accentColor,
                                          transitionDuration: `${PROGRESS_INTERVAL}ms`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                                </div>
              );
            })}
          </div>

          {/* ── RIGHT: Content area ── */}
          <div className="flex-1 min-w-0 w-full bg-slate-50/40 flex flex-col">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${activeProfile}-${activeStep}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                layout // Add layout prop for smooth height transitions
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex flex-col w-full p-3 lg:p-4 gap-2"
              >
                {/* Heading (Fixed Height to prevent any container fluctuations) */}
                <div className="h-16 md:h-20 flex items-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">{step.heading}</h3>
                </div>

                {/* Image / video preview */}
                <div className="w-full aspect-video bg-slate-900 rounded-xl overflow-hidden relative group">
                  {/* Header bar inside preview */}
                  <div className="absolute top-0 left-0 right-0 z-10 px-5 pt-4 pb-2 bg-linear-to-b from-slate-900/80 to-transparent">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                          style={{ background: profile.accentColor }}
                        />
                        <span
                          className="relative inline-flex rounded-full h-2 w-2"
                          style={{ background: profile.accentColor }}
                        />
                      </span>
                      <span className="text-xs font-semibold text-white">{step.navLabel}</span>
                      <span
                        className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center gap-1"
                        style={{ background: profile.accentLight, color: profile.accentColor }}
                      >
                        <FaClock className="text-[9px]" /> Live
                      </span>
                    </div>
                  </div>

                  {/* The actual image */}
                  <img
                    src={step.img}
                    alt={step.navLabel}
                    className="w-full h-full object-contain absolute " // Changed to object-contain for full visibility
                  />

                  {/* Bottom overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2.5 flex items-center justify-between opacity-90 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="p-1.5 rounded-md"
                        style={{ background: 'rgba(34,197,94,0.2)', color: '#4ade80' }}
                      >
                        <FaCheckCircle className="text-xs" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">{profile.title} — module live</p>
                        <p className="text-[10px] text-slate-300/80">Multi-tenant RBAC verified</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-black tracking-widest uppercase text-white/70 bg-white/10 px-2 py-1 rounded">
                      RBAC ✓
                    </span>
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