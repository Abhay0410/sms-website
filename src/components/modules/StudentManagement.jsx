import StudentOverviewImg from "../../assets/eduzagerstudentmagement.png";
import { useState, useEffect } from "react";
import {
  UserPlus,
  ArrowUpRight,
  UserCheck,
  Users,
  Search,
  Database
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "registration",
    icon: <UserPlus size={22} strokeWidth={1.5} />,
    title: "Student Registration",
    description:
      "Add and manage student admission records with complete details. Supports single entry and bulk imports to save time across entire batches.",
    tags: ["Quick Add", "Bulk Import", "Document Upload"],
  },
  {
    id: "promotion",
    icon: <ArrowUpRight size={22} strokeWidth={1.5} />,
    title: "Student Promotion",
    description:
      "Promote students individually or in bulk to the next class based on their academic performance at the end of the year smoothly.",
    tags: ["Bulk Promote", "Session Map", "History Log"],
  },
  {
    id: "status",
    icon: <UserCheck size={22} strokeWidth={1.5} />,
    title: "Status Management",
    description:
      "Track the lifecycle of every student from active enrollment to alumni status, dropouts, or transfers effortlessly in one place.",
    tags: ["Active", "Alumni", "Transfer"],
  },
  {
    id: "allocation",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Class Allocation",
    description:
      "Allocate students to classes and sections seamlessly. Automatically assign roll numbers based on customizable sorting rules.",
    tags: ["Section Assign", "Auto Roll No", "Capacity Check"],
  },
  {
    id: "search",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Search & Filters",
    description:
      "Instantly locate student records by filtering through Academic Year, Status, Class, Section, or custom keywords like IDs.",
    tags: ["Advanced Search", "Multi-Filter", "Quick View"],
  },
  {
    id: "bulk",
    icon: <Database size={22} strokeWidth={1.5} />,
    title: "Bulk Operations",
    description:
      "Perform bulk administrative actions like status updates, section transfers, and data exports to CSV/PDF with minimal effort.",
    tags: ["Export Data", "Mass Update", "CSV/PDF"],
  },
];

const stats = [
  { to: 1250, suffix: "+", label: "Active Students" },
  { to: 210, suffix: "", label: "New Admissions" },
  { to: 95, suffix: "%", label: "Promotion Rate" },
  { to: 320, suffix: "+", label: "Alumni Records" },
];

const workflow = [
  { step: "01", title: "Register", desc: "Enroll students manually or via bulk upload." },
  { step: "02", title: "Assign", desc: "Allocate classes, sections, and roll numbers." },
  { step: "03", title: "Update", desc: "Maintain records, documents, and contacts." },
  { step: "04", title: "Track", desc: "Monitor academic and behavioral progress." },
  { step: "05", title: "Promote", desc: "Upgrade to the next academic session." },
  { step: "06", title: "Archive", desc: "Transfer to alumni or update leave status." },
];

const benefits = [
  {
    title: "Centralized Student Records",
    desc: "Access complete student information, academic history, and documents from one secure platform.",
  },
  {
    title: "Faster Administration",
    desc: "Reduce manual paperwork and administrative workload by automating data entry and promotions.",
  },
  {
    title: "Better Data Accuracy",
    desc: "Ensure accurate and updated student records across all departments with a single source of truth.",
  },
  {
    title: "Seamless Alumni Tracking",
    desc: "Maintain lasting relationships by easily tracking and engaging with graduated students.",
  },
];

export default function StudentManagement() {
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
      <section className="w-full bg-white border-b border-slate-100">
        <img
          src={StudentOverviewImg}
          alt="Student Management Dashboard"
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
            The Complete Student Record Hub
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Student Management enables educational institutions to maintain comprehensive 
            student records from admission to graduation. Administrators can manage personal details, 
            academic history, attendance records, documents, and class allocations through a 
            centralized platform. Filtering and bulk actions make student administration effortless.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Six Core Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Simplify the Student Journey.
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
            From Registration to Graduation
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
              Keep student data secure, accurate, and easily accessible.
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Tracking students throughout their academic lifecycle can be a logistical nightmare. 
              Without a unified system, information gets lost in physical files and disconnected tools.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              The Student Management module solves this by connecting admissions, attendance, and academics 
              into a single source of truth. Moving students to the next grade is a matter of clicks rather 
              than days of manual entry.
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
            Ready to simplify student management?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            See the full Student Management module live — with your own data —
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