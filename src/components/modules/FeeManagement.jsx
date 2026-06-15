import FeeManagement from "../../assets/Fee management.png";
import { useState } from "react";
import {
  Wallet,
  BarChart3,
  AlertCircle,
  CreditCard,
  Receipt,
  School,
  FileText,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "overview",
    icon: <Wallet size={22} strokeWidth={1.5} />,
    title: "Fee Overview",
    description:
      "Get a complete overview of fee collections with real-time statistics including total students, revenue generated, collected amount, and pending dues.",
    tags: [
      "Revenue Tracking",
      "Collection Stats",
      "Pending Dues"
    ],
  },

  {
    id: "analytics",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Analytics & Filters",
    description:
      "Filter fee records using academic year and class to quickly analyze collections, outstanding balances, and fee performance.",
    tags: [
      "Academic Year Filter",
      "Class Filter",
      "Smart Analytics"
    ],
  },

  {
    id: "dues",
    icon: <AlertCircle size={22} strokeWidth={1.5} />,
    title: "Paid & Pending Dues",
    description:
      "Separate lists for fully paid students and pending fee defaulters help administrators track outstanding payments efficiently.",
    tags: [
      "Fully Paid",
      "Pending Dues",
      "Defaulter Tracking"
    ],
  },

  {
    id: "payment",
    icon: <CreditCard size={22} strokeWidth={1.5} />,
    title: "Record Payment",
    description:
      "View and manage student payment records including class details, fee summaries, payment status, and collection actions.",
    tags: [
      "Payment Records",
      "Fee Summary",
      "Status Tracking"
    ],
  },

  {
    id: "history",
    icon: <Receipt size={22} strokeWidth={1.5} />,
    title: "Payment History",
    description:
      "Access detailed payment history with receipts, payment methods, transaction dates, status updates, and downloadable records.",
    tags: [
      "Receipt Records",
      "Payment Method",
      "Transaction History"
    ],
  },

  {
    id: "classfee",
    icon: <School size={22} strokeWidth={1.5} />,
    title: "Set Class Fees",
    description:
      "Configure and update fee structures for every class, including due dates, fee amounts, and academic session settings.",
    tags: [
      "Fee Configuration",
      "Due Date Setup",
      "Session Based"
    ],
  },

  {
    id: "reports",
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Reports & Insights",
    description:
      "Generate collection reports, pending fee summaries, revenue insights, and financial records for informed decision making.",
    tags: [
      "Financial Reports",
      "Revenue Insights",
      "Export Support"
    ],
  },
];

const stats = [
  { to: 1250, suffix: "+", label: "Total Students" },
  { to: 8500000, suffix: "+", label: "Student Revenue" },
  { to: 7200000, suffix: "+", label: "Collected Amount" },
  { to: 320, suffix: "+", label: "Pending Students" },
];

const workflow = [
  {
    step: "01",
    title: "Set Class Fees",
    desc: "Configure fee structures and due dates.",
  },
  {
    step: "02",
    title: "Assign Students",
    desc: "Link students with applicable fee plans.",
  },
  {
    step: "03",
    title: "Record Payments",
    desc: "Collect and record fee payments.",
  },
  {
    step: "04",
    title: "Track Dues",
    desc: "Monitor pending and overdue payments.",
  },
  {
    step: "05",
    title: "Generate Receipts",
    desc: "Provide payment confirmations instantly.",
  },
  {
    step: "06",
    title: "Analyze Reports",
    desc: "Review revenue and collection performance.",
  },
];

const benefits = [
  {
    title: "Accurate Fee Tracking",
    desc: "Monitor collected amounts, pending dues, and student payment status in real time.",
  },
  {
    title: "Centralized Financial Records",
    desc: "Maintain payment histories, receipts, and fee structures from one unified platform.",
  },
  {
    title: "Faster Collections",
    desc: "Identify unpaid students quickly and streamline payment collection processes.",
  },
  {
    title: "Better Financial Insights",
    desc: "Generate detailed reports and analytics to support informed financial decisions.",
  },
];

export default function AcademicStructure() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
      <section className="w-full bg-white border-b border-slate-100">
        <img
          src={FeeManagement}
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
            Fee Management streamlines collections, payments, and financial tracking across your institution
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          The Fee Management module provides a complete solution for managing student fees, payment records
          , pending dues, receipts, and financial reporting. From setting class-wise fee structures to tracking collections
           and generating insights, it helps institutions maintain transparency, accuracy, and efficient revenue management.
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
         Every Payment Tracked. Every Record Accurate.
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
           From Fee Configuration to Collection Analytics
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
    Simplify fee collection, payment tracking, and financial management.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing fee collections manually often leads to missed payments,
    inaccurate records, and difficulty tracking outstanding balances.
    Administrators spend valuable time reconciling payments and generating reports.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Fee Management module centralizes fee collection, payment recording,
    due tracking, and financial reporting into a single platform. With
    real-time insights and automated tracking, institutions can improve
    collections while maintaining complete financial transparency.
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