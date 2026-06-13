import AcademicImg from "../../assets/edzageracdemicmangment.png";
import { useState } from "react";
import {
  Users,
  LayoutGrid,
  UserCircle,
  GraduationCap,
  BookOpen,
  BadgeCheck,
  CalendarClock,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "bulk",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Bulk Enrollment",
    description:
      "Upload a CSV or pull from your student registry to enroll entire batches at once. Conflict detection prevents duplicates and section overflows before they cause problems.",
    tags: ["CSV Import", "Batch Processing", "Error Rollback"],
  },
  {
    id: "class",
    icon: <LayoutGrid size={22} strokeWidth={1.5} />,
    title: "Class Management",
    description:
      "Create and organise classes for every session with capacity limits. Clone last year's entire structure in one action — no rebuilding from scratch.",
    tags: ["Session Linked", "One-click Clone", "Archive Support"],
  },
  {
    id: "profile",
    icon: <UserCircle size={22} strokeWidth={1.5} />,
    title: "Student Profile",
    description:
      "Edit personal, academic, and contact details from one unified view. Role-based permissions ensure only authorised staff can modify sensitive records.",
    tags: ["Audit Log", "Role Access", "Document Upload"],
  },
  {
    id: "student",
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "Student Management",
    description:
      "Search, filter, and group across all enrolled students. Track section assignment, attendance status, and export data to PDF or Excel instantly.",
    tags: ["Advanced Filters", "Status Tracking", "PDF / Excel Export"],
  },
  {
    id: "subject",
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    title: "Subject Management",
    description:
      "Map subjects to classes with credit hours and core/elective designation. Teachers see only what's assigned to them — no clutter, no confusion.",
    tags: ["Credit Hours", "Elective Tagging", "Syllabus Attach"],
  },
  {
    id: "teacher",
    icon: <BadgeCheck size={22} strokeWidth={1.5} />,
    title: "Teacher Management",
    description:
      "Assign class teachers and section in-charges. Enforce workload limits and view each teacher's full class schedule from their profile page.",
    tags: ["Workload Limit", "Clash Detection", "Staff Directory"],
  },
  {
    id: "timetable",
    icon: <CalendarClock size={22} strokeWidth={1.5} />,
    title: "Timetable Management",
    description:
      "Schedule periods across classes and sections with automatic conflict detection for teachers and rooms. Publish to all students and staff in one click.",
    tags: ["Auto Clash Detect", "Room Allocation", "Instant Publish"],
  },
];

const stats = [
  { to: 17, suffix: "+", label: "Classes" },
  { to: 42, suffix: "+", label: "Sections" },
  { to: 38, suffix: "+", label: "Teachers Assigned" },
  { to: 1250, suffix: "+", label: "Students Enrolled" },
];

const workflow = [
  { step: "01", title: "Create Session", desc: "Set academic year and term dates." },
  { step: "02", title: "Add Classes", desc: "Define grades with sections and capacity." },
  { step: "03", title: "Map Subjects", desc: "Attach subjects, credits, and type." },
  { step: "04", title: "Assign Teachers", desc: "Link staff to classes and subjects." },
  { step: "05", title: "Enroll Students", desc: "Bulk import or add individually." },
  { step: "06", title: "Publish Timetable", desc: "Schedule periods and notify all." },
];

const benefits = [
  {
    title: "No duplicate data entry",
    desc: "Create a class once — it reflects across enrollment, timetable, and reports automatically.",
  },
  {
    title: "Clash-free scheduling",
    desc: "Teacher and room conflicts are flagged before they make it into the published timetable.",
  },
  {
    title: "Session continuity",
    desc: "Clone last year's full structure in a single action and start the new year in minutes.",
  },
  {
    title: "Role-based control",
    desc: "Admins, teachers, and staff each see exactly what they need — no more, no less.",
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
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[660px] object-cover object-top block"
        />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#C62828]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
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
            Academic Management is the operational core of your ERP
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Inside your ERP, the Academic Management module brings together every
            function your institution needs to run an academic year — class
            creation, student enrollment, teacher assignment, subject mapping, and
            timetable scheduling. All seven features work together so data flows
            between them without manual re-entry.
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
            Everything Academic. Nothing Missing.
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
            From Session Setup to Live Timetable
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
              One module that keeps your entire academic year on track
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Without a centralised academic structure, schools end up with
              mismatched data across departments — attendance that doesn't match
              enrollment, timetables that clash with teacher assignments, sections
              that overflow without warning.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              The Academic Management module solves this by making all seven
              operations aware of each other. A change in sections automatically
              reflects in the timetable, enrollment, and teacher assignment views.
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