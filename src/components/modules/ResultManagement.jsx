import AcademicImg from "../../assets/edzageracdemicmangment.png";
import { useState } from "react";
import {
  ClipboardList,
  FileSpreadsheet,
  FileEdit,
  Send,
  Download,
  BadgeCheck,
  Search,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "search",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Student Search & Filters",
    description:
      "Quickly find student results using Name, Student ID, Roll Number, Exam Type, and Result Status filters.",
    tags: [
      "Name Search",
      "ID Filter",
      "Roll No Search",
    ],
  },

  {
    id: "exam",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    title: "Exam Type Management",
    description:
      "Manage and filter results across Final Exam, Half Yearly, Quarterly, Unit Test, and Mid Semester examinations.",
    tags: [
      "Final Exam",
      "Half Yearly",
      "Unit Test",
    ],
  },

  {
    id: "result",
    icon: <FileSpreadsheet size={22} strokeWidth={1.5} />,
    title: "Result Listing",
    description:
      "View detailed result records including marks, percentage, grade, status, and exam information for every student.",
    tags: [
      "Marks Tracking",
      "Grade System",
      "Result Summary",
    ],
  },

  {
    id: "status",
    icon: <BadgeCheck size={22} strokeWidth={1.5} />,
    title: "Result Status Filters",
    description:
      "Categorize students based on Pass, Fail, Absent, and Pass by Grace criteria for easier result analysis.",
    tags: [
      "Pass",
      "Fail",
      "Absent",
    ],
  },

  {
    id: "publish",
    icon: <Send size={22} strokeWidth={1.5} />,
    title: "Publish Results",
    description:
      "Approve and publish results individually or in bulk after verification and academic review.",
    tags: [
      "Bulk Publish",
      "Approval Workflow",
      "Instant Release",
    ],
  },

  {
    id: "draft",
    icon: <FileEdit size={22} strokeWidth={1.5} />,
    title: "Draft Management",
    description:
      "Move results back to draft for corrections before making them visible to students and parents.",
    tags: [
      "Draft Mode",
      "Result Review",
      "Corrections",
    ],
  },

  {
    id: "download",
    icon: <Download size={22} strokeWidth={1.5} />,
    title: "Result Downloads",
    description:
      "Generate downloadable mark sheets and result reports for students, teachers, and administrators.",
    tags: [
      "PDF Export",
      "Mark Sheets",
      "Reports",
    ],
  },
];

const stats = [
  { to: 3200, suffix: "+", label: "Results Generated" },
  { to: 2800, suffix: "+", label: "Results Published" },
  { to: 92, suffix: "%", label: "Pass Percentage" },
  { to: 400, suffix: "+", label: "Pending Approval" },
];

const workflow = [
  {
    step: "01",
    title: "Select Exam",
    desc: "Choose examination type and session.",
  },
  {
    step: "02",
    title: "Upload Marks",
    desc: "Enter or import student marks.",
  },
  {
    step: "03",
    title: "Generate Results",
    desc: "Calculate percentage and grades.",
  },
  {
    step: "04",
    title: "Review Results",
    desc: "Verify student performance records.",
  },
  {
    step: "05",
    title: "Approve Results",
    desc: "Approve individually or in bulk.",
  },
  {
    step: "06",
    title: "Publish Results",
    desc: "Release results to students.",
  },
];

const benefits = [
  {
    title: "Accurate Result Processing",
    desc: "Automate grade calculations and reduce manual errors in result preparation.",
  },
  {
    title: "Faster Publication",
    desc: "Approve and publish individual or bulk results within minutes.",
  },
  {
    title: "Comprehensive Performance Tracking",
    desc: "Monitor marks, grades, percentages, and exam outcomes across all students.",
  },
  {
    title: "Centralized Examination Records",
    desc: "Maintain result history and downloadable reports in a single platform.",
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
            Result Management simplifies examination processing, result approval, and academic performance tracking
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           The Result Management module provides a centralized platform for managing student 
           examination results across all exam types. From marks entry and grade calculation to
            result approval, publishing, and report generation
           , it helps institutions maintain accuracy, transparency, and efficiency throughout the assessment process.
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
         Accurate Results. Transparent Performance.
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
           Accurate Results. Transparent Performance.
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
    Simplify result processing, approval, and publication across all examinations.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing examination results manually can lead to calculation errors,
    delayed publishing, and difficulties in tracking student performance.
    Handling multiple exam types and thousands of records becomes increasingly challenging.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Result Management module streamlines the entire result lifecycle,
    from marks entry and grade calculation to approval and publication.
    With advanced filters, bulk actions, and real-time status tracking,
    institutions can ensure accuracy, transparency, and efficiency.
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