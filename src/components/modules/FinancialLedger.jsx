import FinancialLedger from "../../assets/EduZagerFinancialLedger.png";
import { useState } from "react";
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  FileBarChart,
  Receipt,
  Search,
  Wallet,
  RefreshCw,
  PieChart,
  Tags,
 
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "dashboard",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Financial Overview Dashboard",
    description:
      "Monitor institution-wide spending through real-time dashboards, expenditure summaries, and expense distribution analytics.",
    tags: [
      "Expense Dashboard",
      "Financial Insights",
      "Spending Overview",
    ],
  },

  {
    id: "ledger",
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    title: "Master Ledger Management",
    description:
      "Maintain a centralized ledger of all financial transactions with complete audit trails and expense history.",
    tags: [
      "Ledger Entries",
      "Transaction Records",
      "Audit Trail",
    ],
  },

  {
    id: "manual",
    icon: <Receipt size={22} strokeWidth={1.5} />,
    title: "Manual Expense Recording",
    description:
      "Record custom expenses with category, payment method, date, description, and amount for complete financial tracking.",
    tags: [
      "Expense Entry",
      "Payment Method",
      "Manual Records",
    ],
  },

  {
    id: "categories",
    icon: <Tags size={22} strokeWidth={1.5} />,
    title: "Expense Category Management",
    description:
      "Create and manage expense categories to organize spending and improve financial reporting accuracy.",
    tags: [
      "Categories",
      "Budgeting",
      "Expense Classification",
    ],
  },

  {
    id: "automation",
    icon: <RefreshCw size={22} strokeWidth={1.5} />,
    title: "Automated Expense Tracking",
    description:
      "Automatically generate ledger entries from inventory purchases, payroll, transport, maintenance, and operational activities.",
    tags: [
      "Automation",
      "ERP Integration",
      "Auto Entries",
    ],
  },

  {
    id: "analytics",
    icon: <PieChart size={22} strokeWidth={1.5} />,
    title: "Expense Analytics",
    description:
      "Analyze spending trends, category-wise expenses, financial distribution, and institutional expenditure patterns.",
    tags: [
      "Expense Analytics",
      "Financial Reports",
      "Insights",
    ],
  },

  {
    id: "reporting",
    icon: <FileBarChart size={22} strokeWidth={1.5} />,
    title: "Financial Reporting",
    description:
      "Generate detailed reports for audits, budgeting, compliance, and strategic financial planning.",
    tags: [
      "Reports",
      "Audit Ready",
      "Budget Planning",
    ],
  },

  {
    id: "search",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Search & Filtering",
    description:
      "Locate transactions quickly using category, source, description, amount, and date range filters.",
    tags: [
      "Advanced Search",
      "Filters",
      "Quick Audit",
    ],
  },

  {
    id: "budget",
    icon: <Wallet size={22} strokeWidth={1.5} />,
    title: "Budget Monitoring",
    description:
      "Track expenditures against budgets and identify areas of overspending or savings opportunities.",
    tags: [
      "Budget Control",
      "Monitoring",
      "Cost Management",
    ],
  },

  {
    id: "audit",
    icon: <ClipboardCheck size={22} strokeWidth={1.5} />,
    title: "Audit & Compliance",
    description:
      "Maintain transparent and audit-ready financial records with complete transaction history.",
    tags: [
      "Compliance",
      "Audit Logs",
      "Financial Governance",
    ],
  },
];

const stats = [
  { to: 5000000, prefix: "₹", suffix: "+", label: "Expenses Tracked" },
  { to: 12000, suffix: "+", label: "Ledger Entries" },
  { to: 25, suffix: "+", label: "Expense Categories" },
  { to: 99, suffix: "%", label: "Financial Accuracy" },
];

const workflow = [
  {
    step: "01",
    title: "Record Expense",
    desc: "Add manual or automated transactions.",
  },
  {
    step: "02",
    title: "Categorize Entry",
    desc: "Assign expense category and source.",
  },
  {
    step: "03",
    title: "Generate Ledger",
    desc: "Create centralized financial records.",
  },
  {
    step: "04",
    title: "Track Spending",
    desc: "Monitor expenses in real time.",
  },
  {
    step: "05",
    title: "Analyze Trends",
    desc: "Review category-wise expenditure.",
  },
  {
    step: "06",
    title: "Generate Reports",
    desc: "Support audits and budgeting.",
  },
];

const benefits = [
  {
    title: "Centralized Financial Tracking",
    desc: "Maintain all institutional expenses in a single financial ledger.",
  },
  {
    title: "Automated Expense Recording",
    desc: "Reduce manual bookkeeping through ERP-integrated expense automation.",
  },
  {
    title: "Improved Budget Control",
    desc: "Monitor spending patterns and optimize budget allocation.",
  },
  {
    title: "Audit-Ready Financial Records",
    desc: "Ensure compliance with complete transaction histories and reports.",
  },
];

export default function FinancialLedgerModule() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
     <section className="w-full bg-white">
                            <img
                                src={FinancialLedger}
                                alt="EduZager School Management Platform"
                                className="w-full h-[350px]"
                              /> 
                </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-10 py-4 text-white ${
                i !== stats.length - 1 ? "border-r border-blue/20" : ""
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
          <h2 className="text-[#111111] text-4xl md:text-[36px] font-bold mb-6 leading-tight uppercase">
            Financial Ledger Management centralizes institutional expense tracking and financial visibility
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Financial Ledger Management module provides a centralized platform for tracking,
             categorizing, and analyzing institutional expenses. From automated ERP-generated
              transactions to manually recorded expenditures, it helps administrators maintain 
              transparent financial records, monitor spending patterns, improve budget planning,
               and generate audit-ready reports with complete confidence.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Ten Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
          Track Every Expense. Control Every Rupee.
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
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
         From Automated Ledger Entries to Financial Analytics & Reporting
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

  <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight uppercase">
    Gain complete visibility into institutional spending and financial performance.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing financial transactions across multiple departments can become
    complex without a centralized ledger system. Missing records, inconsistent
    categorization, and manual bookkeeping often reduce financial transparency.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Financial Ledger Management module consolidates all expenses into a
    single source of truth. Automated transaction tracking, expense analytics,
    reporting, and audit-ready records help institutions maintain financial
    control while supporting informed budgeting and planning decisions.
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
      {/* <section className="px-6 md:px-24 py-20 bg-black">
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
      </section> */}

    </div>
  );
}