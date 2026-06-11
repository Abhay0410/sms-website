import AcademicImg from "../../assets/edzageracdemicmangment.png";
import { useState } from "react";
import {
  Users,
Wallet,
BarChart3,
BadgeIndianRupee ,
Receipt,

FileText,
  CalendarClock,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "payroll",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Payroll Dashboard",
    description:
      "View all teachers and staff in a centralized payroll dashboard. Configure salary structures, monitor payroll status, and manage salary records efficiently.",
    tags: [
      "Staff Directory",
      "Salary Records",
      "Payroll Overview",
    ],
  },

  {
    id: "salarysetup",
    icon: <Wallet size={22} strokeWidth={1.5} />,
    title: "Salary Setup",
    description:
      "Configure individual salary structures for staff members with customizable salary components and payroll settings.",
    tags: [
      "Individual Salary",
      "Salary Components",
      "Payroll Configuration",
    ],
  },

  {
    id: "slip",
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Pro-forma Salary Slip",
    description:
      "Generate estimated salary breakdowns including earnings, deductions, take-home pay, and employer liabilities before payroll processing.",
    tags: [
      "Salary Preview",
      "Earnings Breakdown",
      "Take Home Pay",
    ],
  },

  {
    id: "earnings",
    icon: <BadgeIndianRupee size={22} strokeWidth={1.5} />,
    title: "Salary Components",
    description:
      "Customize Basic Salary, Dearness Allowance (DA), House Rent Allowance (HRA), and other salary components according to organizational policies.",
    tags: [
      "Basic Salary",
      "DA",
      "HRA",
    ],
  },

  {
    id: "payrun",
    icon: <CalendarClock size={22} strokeWidth={1.5} />,
    title: "Monthly Pay Run",
    description:
      "Process monthly payroll and generate salary slips individually or for the entire organization with a single click.",
    tags: [
      "Monthly Payroll",
      "Bulk Processing",
      "Salary Generation",
    ],
  },

  {
    id: "history",
    icon: <Receipt size={22} strokeWidth={1.5} />,
    title: "Processed Salary Slips",
    description:
      "Track all generated salary slips with payroll history, payment status, and downloadable salary records.",
    tags: [
      "Payroll History",
      "Slip Archive",
      "Download Support",
    ],
  },

  {
    id: "analytics",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Payroll Analytics",
    description:
      "Monitor pending staff salaries, processed slips, and total payroll expenses through real-time payroll statistics.",
    tags: [
      "Pending Staff",
      "Processed Slips",
      "Payroll Analytics",
    ],
  },
];

const stats = [
  { to: 350, suffix: "+", label: "Staff Members" },
  { to: 180, suffix: "+", label: "Processed Slips" },
  { to: 28, suffix: "L+", label: "Monthly Payroll" },
  { to: 42, suffix: "+", label: "Pending Staff" },
];

const workflow = [
  {
    step: "01",
    title: "Add Staff",
    desc: "Register staff and payroll information.",
  },
  {
    step: "02",
    title: "Configure Salary",
    desc: "Set salary structure and allowances.",
  },
  {
    step: "03",
    title: "Review Salary Slip",
    desc: "Generate estimated salary preview.",
  },
  {
    step: "04",
    title: "Run Payroll",
    desc: "Process salaries for selected month.",
  },
  {
    step: "05",
    title: "Generate Slips",
    desc: "Create individual or bulk salary slips.",
  },
  {
    step: "06",
    title: "Track Payroll",
    desc: "Monitor payroll records and reports.",
  },
];

const benefits = [
  {
    title: "Accurate Payroll Processing",
    desc: "Automate salary calculations, allowances, and deductions to reduce payroll errors.",
  },
  {
    title: "Flexible Salary Configuration",
    desc: "Customize salary structures including Basic Pay, DA, HRA, and additional allowances.",
  },
  {
    title: "Faster Salary Slip Generation",
    desc: "Generate individual or bulk salary slips instantly for monthly payroll cycles.",
  },
  {
    title: "Complete Payroll Visibility",
    desc: "Track processed salaries, pending payrolls, and payroll expenses through centralized reporting.",
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
           HR & Payroll streamlines salary management, payroll processing, and staff compensation
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           The HR & Payroll module provides a comprehensive solution for managing employee
            salaries, payroll processing, salary structures, and payroll reporting. From configuring staff
             compensation packages to generating monthly salary slips and monitoring payroll analytics,
            it helps institutions maintain accuracy, transparency, and efficiency in workforce management.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Seven Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
           Managing People. Simplifying Payroll.
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
          From Salary Setup to Monthly Pay Runs
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
    Simplify payroll processing, salary management, and staff compensation.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing staff salaries manually can be time-consuming and prone to errors.
    Payroll calculations, allowances, deductions, and salary slip generation often
    require significant administrative effort and verification.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The HR & Payroll module centralizes salary configuration, payroll processing,
    salary slip generation, and payroll analytics into one platform. From individual
    salary setup to bulk monthly payroll processing, institutions can ensure accurate,
    transparent, and efficient staff compensation management.
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