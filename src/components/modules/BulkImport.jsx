import AcademicImg from "../../assets/edzageracdemicmangment.png";
import { useState } from "react";
import {
  Users,
    ClipboardCheck,
    FileSpreadsheet,
    IndianRupee,
    Bus,
    ShieldCheck,
    History,
    RotateCcw,
    School,
  GraduationCap,
  BookOpen,
  NotebookPen,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "student",
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "Student Import",
    description:
      "Import student records in bulk including admission details, class assignments, parent information, contacts, and addresses.",
    tags: [
      "Student Records",
      "Admissions",
      "Parent Details",
    ],
  },

  {
    id: "teacher",
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    title: "Teacher Import",
    description:
      "Upload teacher profiles, employee IDs, qualifications, subjects, and contact information in a few clicks.",
    tags: [
      "Teacher Profiles",
      "Subjects",
      "Qualifications",
    ],
  },

  {
    id: "staff",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Staff Import",
    description:
      "Bulk import staff records including departments, designations, payroll information, and employment details.",
    tags: [
      "Departments",
      "Designations",
      "Payroll Data",
    ],
  },

  {
    id: "academic",
    icon: <School size={22} strokeWidth={1.5} />,
    title: "Academic Structure Import",
    description:
      "Import classes, sections, academic sessions, and institutional structures quickly and accurately.",
    tags: [
      "Classes",
      "Sections",
      "Sessions",
    ],
  },

  {
    id: "subjects",
    icon: <NotebookPen size={22} strokeWidth={1.5} />,
    title: "Subject Import",
    description:
      "Upload subject details including subject names, codes, and assigned teachers.",
    tags: [
      "Subject Codes",
      "Teachers",
      "Curriculum",
    ],
  },

  {
    id: "fees",
    icon: <IndianRupee size={22} strokeWidth={1.5} />,
    title: "Fee Structure Import",
    description:
      "Import fee heads, fee amounts, due dates, and class-wise fee structures in bulk.",
    tags: [
      "Fee Heads",
      "Fee Plans",
      "Due Dates",
    ],
  },

  {
    id: "attendance",
    icon: <ClipboardCheck size={22} strokeWidth={1.5} />,
    title: "Attendance Import",
    description:
      "Upload student and staff attendance records directly from spreadsheets.",
    tags: [
      "Student Attendance",
      "Staff Attendance",
      "Attendance Logs",
    ],
  },

  {
    id: "exam",
    icon: <FileSpreadsheet size={22} strokeWidth={1.5} />,
    title: "Exam & Marks Import",
    description:
      "Import exam schedules, marks, grades, and academic assessment records.",
    tags: [
      "Marks Upload",
      "Grades",
      "Exam Records",
    ],
  },

  {
    id: "transport",
    icon: <Bus size={22} strokeWidth={1.5} />,
    title: "Transport Import",
    description:
      "Bulk upload transport routes, vehicles, drivers, and fleet information.",
    tags: [
      "Routes",
      "Vehicles",
      "Drivers",
    ],
  },

  {
    id: "validation",
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Data Validation",
    description:
      "Automatically validate records before import to prevent duplicates, missing fields, and invalid data.",
    tags: [
      "Validation",
      "Duplicate Check",
      "Error Detection",
    ],
  },

  {
    id: "history",
    icon: <History size={22} strokeWidth={1.5} />,
    title: "Import History",
    description:
      "Track uploaded files, imported records, success rates, failures, and user activity logs.",
    tags: [
      "Audit Trail",
      "Upload Logs",
      "History",
    ],
  },

  {
    id: "rollback",
    icon: <RotateCcw size={22} strokeWidth={1.5} />,
    title: "Rollback & Recovery",
    description:
      "Undo incorrect imports and restore previous data states without affecting system integrity.",
    tags: [
      "Rollback",
      "Recovery",
      "Undo Import",
    ],
  },
];

const stats = [
  { to: 50000, suffix: "+", label: "Records Imported" },
  { to: 99, suffix: "%", label: "Import Accuracy" },
  { to: 2000, suffix: "+", label: "Files Processed" },
  { to: 15, suffix: "+", label: "Import Categories" },
];

const workflow = [
  {
    step: "01",
    title: "Download Template",
    desc: "Choose the required import template.",
  },
  {
    step: "02",
    title: "Fill Data",
    desc: "Populate records in Excel or CSV.",
  },
  {
    step: "03",
    title: "Upload File",
    desc: "Upload the completed template.",
  },
  {
    step: "04",
    title: "Validate Records",
    desc: "System checks data integrity.",
  },
  {
    step: "05",
    title: "Preview Import",
    desc: "Review valid and invalid entries.",
  },
  {
    step: "06",
    title: "Confirm Import",
    desc: "Import records into the ERP.",
  },
];

const benefits = [
  {
    title: "Rapid Data Migration",
    desc: "Import thousands of records within minutes using Excel and CSV templates.",
  },
  {
    title: "Automated Validation",
    desc: "Prevent duplicates and data inconsistencies before records enter the system.",
  },
  {
    title: "Safe Import Process",
    desc: "Preview records, review errors, and confirm imports with confidence.",
  },
  {
    title: "Full Audit & Recovery",
    desc: "Track import history and rollback incorrect uploads whenever necessary.",
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
           Bulk Import Management accelerates data onboarding across your ERP
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           The Bulk Import Management module provides a fast and reliable way to migrate large 
           datasets into your ERP. From students, teachers, and staff records to attendance,
            fees, exams, transport, and inquiries, administrators can upload data using Excel 
            or CSV files with built-in validation, preview, audit tracking, and rollback capabilities
             for maximum accuracy and control.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Twelve Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
          Import Faster. Manage Smarter.
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
          From Student Records to ERP-Wide Data Migration
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
    Eliminate repetitive data entry and accelerate ERP adoption.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Manually entering thousands of records can consume valuable administrative
    time and increase the likelihood of errors. Institutions often need to
    migrate data from spreadsheets and legacy systems quickly and accurately.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Bulk Import Management module enables secure and scalable data migration
    across every ERP module. With templates, validation, previews, error
    reporting, and rollback support, administrators can confidently onboard
    large datasets while maintaining data quality and operational efficiency.
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