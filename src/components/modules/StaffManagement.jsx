import AcademicImg from "../../assets/edzageracdemicmangment.png";
import { useState } from "react";
import {
    Clock3,
  MapPin,
  CalendarDays,
  Briefcase,
  TrendingUp,
  UserCircle,
  Wallet,
  FileText,

} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "attendance",
    icon: <Clock3 size={22} strokeWidth={1.5} />,
    title: "Attendance Management",
    description:
      "Track staff check-ins and check-outs with timestamps, working hours calculations, attendance status, and attendance history.",
    tags: [
      "Check In/Out",
      "Working Hours",
      "Attendance Logs",
    ],
  },

  {
    id: "location",
    icon: <MapPin size={22} strokeWidth={1.5} />,
    title: "Location Verification",
    description:
      "Verify attendance through location tracking and GPS coordinates to ensure staff presence at authorized locations.",
    tags: [
      "GPS Tracking",
      "Location Verification",
      "Attendance Security",
    ],
  },

  {
    id: "leave",
    icon: <CalendarDays size={22} strokeWidth={1.5} />,
    title: "Leave Management",
    description:
      "Apply, track, approve, or reject leave requests with leave balances, leave history, and approval workflows.",
    tags: [
      "Leave Requests",
      "Approval Workflow",
      "Leave Balance",
    ],
  },

  {
    id: "profile",
    icon: <UserCircle size={22} strokeWidth={1.5} />,
    title: "Employee Profiles",
    description:
      "Maintain comprehensive employee records including personal information, department details, contact information, and employment history.",
    tags: [
      "Staff Records",
      "Department Info",
      "Profile Management",
    ],
  },

  {
    id: "payroll",
    icon: <Wallet size={22} strokeWidth={1.5} />,
    title: "Payroll & Salary",
    description:
      "Connect attendance and leave records with payroll calculations for accurate salary processing and compensation management.",
    tags: [
      "Salary Tracking",
      "Payroll Integration",
      "Compensation",
    ],
  },

  {
    id: "documents",
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Document Management",
    description:
      "Store employee documents, contracts, certifications, and verification records securely in one place.",
    tags: [
      "Document Storage",
      "Certificates",
      "Employee Records",
    ],
  },

  {
    id: "shift",
    icon: <Briefcase size={22} strokeWidth={1.5} />,
    title: "Shift & Duty Assignment",
    description:
      "Assign staff shifts, working schedules, and responsibilities while monitoring attendance compliance.",
    tags: [
      "Shift Planning",
      "Duty Assignment",
      "Scheduling",
    ],
  },

  {
    id: "performance",
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Performance Tracking",
    description:
      "Evaluate employee productivity, attendance consistency, and overall workforce performance through analytics.",
    tags: [
      "Performance Reviews",
      "Analytics",
      "Staff Insights",
    ],
  },
];

const stats = [
  { to: 250, suffix: "+", label: "Staff Members" },
  { to: 96, suffix: "%", label: "Attendance Rate" },
  { to: 48, suffix: "+", label: "Leave Requests" },
  { to: 1200, suffix: "+", label: "Attendance Logs" },
];

const workflow = [
  {
    step: "01",
    title: "Check In",
    desc: "Staff marks attendance with location verification.",
  },
  {
    step: "02",
    title: "Track Presence",
    desc: "Monitor working hours and attendance status.",
  },
  {
    step: "03",
    title: "Apply Leave",
    desc: "Submit leave requests digitally.",
  },
  {
    step: "04",
    title: "Approve Requests",
    desc: "Admin reviews and approves leaves.",
  },
  {
    step: "05",
    title: "Generate Reports",
    desc: "Track monthly attendance and productivity.",
  },
  {
    step: "06",
    title: "Process Payroll",
    desc: "Calculate salaries based on attendance.",
  },
];


const benefits = [
  {
    title: "Accurate Attendance Tracking",
    desc: "Monitor check-ins, check-outs, working hours, and attendance records with location verification.",
  },
  {
    title: "Streamlined Leave Management",
    desc: "Digitize leave requests, approvals, and leave balance tracking for greater efficiency.",
  },
  {
    title: "Improved Workforce Visibility",
    desc: "Track employee attendance, schedules, and performance from a centralized dashboard.",
  },
  {
    title: "Enhanced Productivity",
    desc: "Leverage workforce analytics and attendance insights to improve operational performance.",
  },
];

export default function AcademicStructure() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
      <section className="w-full bg-white border-b border-slate-100">
        <img
          src={AcademicImg}
          alt="Academic Management Dashboard"
          className="w-full h-auto block"
        />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#C62828]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-10 py-8 text-white ${
                i !== stats.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-xs text-white/70 mt-1 tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-4">
            What Is This Module
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
          Staff Management centralizes attendance, leave, and workforce operations
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
       The Staff Management module provides a centralized platform for managing employee attendance, 
       leave applications, workforce records, payroll integration, and performance tracking.
        From GPS-verified attendance and shift assignments to leave approvals and workforce analytics,
        it helps institutions maintain accountability, transparency, and operational efficiency across all staff operations.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Eight Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
          Manage Your Workforce. Monitor Every Shift.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className={`group border rounded-2xl p-7 transition-all cursor-pointer ${
                activeFeature === f.id
                  ? "border-[#C62828] bg-red-50"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white"
              }`}
              onClick={() =>
                setActiveFeature(activeFeature === f.id ? null : f.id)
              }
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all ${
                  activeFeature === f.id
                    ? "bg-[#C62828] text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                }`}
              >
                {f.icon}
              </div>

              <h3 className="text-base font-bold text-black mb-2">{f.title}</h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                {f.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-500 bg-gray-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className={`border px-3 py-1 rounded-full text-xs transition-all ${
                  activeFeature === f.id
                    ? "border-[#C62828] bg-[#C62828] text-white"
                    : "border-[#C62828] text-[#C62828] hover:bg-[#C62828] hover:text-white"
                }`}
              >
                {activeFeature === f.id ? "Close" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="px-6 md:px-24 py-16 bg-gray-50 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
        From Attendance Tracking to Leave & Performance Management
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {workflow.map((w, i) => (
            <div key={w.step} className="relative">
              {i < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gray-200 z-0" />
              )}
              <div className="relative z-10 bg-white border border-gray-200 rounded-2xl p-5 h-full">
                <div className="text-xs font-bold text-[#C62828] mb-3 tracking-widest">
                  {w.step}
                </div>
                <div className="text-sm font-bold text-black mb-1.5">{w.title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW / BENEFITS ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
  <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-4">
    Why It Matters
  </p>

  <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight">
    Improve workforce accountability, attendance tracking, and staff productivity.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing staff attendance, leave requests, working hours, and workforce
    records manually can be time-consuming and prone to inaccuracies.
    Organizations often struggle to maintain transparency and operational efficiency.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Staff Management module centralizes attendance tracking, leave management,
    employee records, shift assignments, and performance monitoring into a single platform.
    With real-time visibility and automated workflows, institutions can improve workforce
    management while ensuring compliance and productivity.
  </p>

  <button className="border border-[#C62828] text-[#C62828] px-3 py-1 rounded-full text-xs hover:bg-[#C62828] hover:text-white transition-all">
    Read Documentation
  </button>
</div>

          <div className="flex flex-col gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 items-start border border-gray-200 rounded-2xl p-5 bg-white hover:border-[#C62828] transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-[#C62828] mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-black mb-1">{b.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-24 py-20 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Ready to streamline your academic operations?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            See the full Academic Management module live — with your own data —
            in a 30-minute walkthrough with our team.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="bg-[#C62828] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#a81f1f] transition-all">
              Book a Demo
            </button>
            <button className="border border-white/30 text-white px-7 py-3 rounded-full text-sm hover:border-white transition-all">
              Explore All Modules
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}