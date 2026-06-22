import Admission from "../../assets/EduZagerAdmission&Enquiry.png";
import { useState } from "react";
import {
  ClipboardList,
  GitBranch,
  BarChart3,
  FileText,
  Search,
  GraduationCap,

  CalendarClock,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "pipeline",
    icon: <GitBranch size={22} strokeWidth={1.5} />,
    title: "Enquiry Pipeline",
    description:
      "Track prospective students through every stage of the admission journey with real-time pipeline visibility and conversion monitoring.",
    tags: [
      "Lead Tracking",
      "Admission Stages",
      "Conversion Monitoring"
    ],
  },

  {
    id: "analytics",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Analytics & Pipeline",
    description:
      "Monitor Total Leads, New Leads, Visited Students, Converted Admissions, and Conversion Rate through interactive analytics dashboards.",
    tags: [
      "Lead Analytics",
      "Conversion Rate",
      "Performance Insights"
    ],
  },

  {
    id: "enquiries",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    title: "All Enquiries",
    description:
      "View and manage all enquiry submissions in one place with complete student and parent information.",
    tags: [
      "Enquiry Records",
      "Student Details",
      "Lead Management"
    ],
  },

  {
    id: "followups",
    icon: <CalendarClock size={22} strokeWidth={1.5} />,
    title: "Follow-ups & Tasks",
    description:
      "Track overdue follow-ups and today's admission tasks to ensure no prospective student is missed.",
    tags: [
      "Overdue Follow-ups",
      "Daily Tasks",
      "Reminder System"
    ],
  },

  {
    id: "form",
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Enquiry Form",
    description:
      "Capture student and parent information through a structured enquiry form for streamlined admission processing.",
    tags: [
      "Lead Capture",
      "Digital Form",
      "Quick Registration"
    ],
  },

  {
    id: "enrollment",
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "Pending Enrollments",
    description:
      "Manage students who have completed admissions and assign classes and sections before enrollment is finalized.",
    tags: [
      "Class Allocation",
      "Section Assignment",
      "Enrollment Tracking"
    ],
  },

  {
    id: "filters",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Advanced Search & Filters",
    description:
      "Quickly find students using Name, Student ID, Class, Admission Status, and Enrollment Progress filters.",
    tags: [
      "Name Search",
      "ID Filter",
      "Class Filter"
    ],
  },
];

const stats = [
  { to: 1250, suffix: "+", label: "Total Leads" },
  { to: 320, suffix: "+", label: "New Leads" },
  { to: 780, suffix: "+", label: "Visited" },
  { to: 540, suffix: "+", label: "Converted" },

];


const workflow = [
  {
    step: "01",
    title: "Receive Enquiry",
    desc: "Capture student enquiry details.",
  },
  {
    step: "02",
    title: "Follow-up",
    desc: "Contact prospective students and parents.",
  },
  {
    step: "03",
    title: "Campus Visit",
    desc: "Schedule and track school visits.",
  },
  {
    step: "04",
    title: "Admission Approval",
    desc: "Process and approve applications.",
  },
  {
    step: "05",
    title: "Pending Enrollment",
    desc: "Assign class and section.",
  },
  {
    step: "06",
    title: "Student Enrolled",
    desc: "Complete admission successfully.",
  },
];

const benefits = [
  {
    title: "Higher Admission Conversion",
    desc: "Track leads effectively and improve enquiry-to-admission conversion rates.",
  },
  {
    title: "Organized Follow-ups",
    desc: "Never miss important follow-ups with task management and reminders.",
  },
  {
    title: "Centralized Lead Tracking",
    desc: "Manage enquiries, visits, admissions, and enrollments from one dashboard.",
  },
  {
    title: "Faster Student Enrollment",
    desc: "Assign classes and sections quickly after admission approval.",
  },
];

export default function AcademicStructure() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
      <section className="w-full bg-white">
        <img
          src={Admission}
          alt="EduZager School Management Platform"
          className="w-full h-[350px]"
        />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#001A48]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-10 py-4 text-white ${i !== stats.length - 1 ? "border-r border-blue/20" : ""
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
          <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">
            What Is This Module
          </p>
          <h2 className="text-[#111111] text-4xl md:text-[36px] font-bold mb-6 leading-tight uppercase">
            Admission & Enquiry Management streamlines lead tracking, admissions, and student enrollment
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Admission & Enquiry module helps institutions manage the complete admission lifecycle,
            from capturing enquiries and tracking follow-ups to converting leads into enrolled students. With analytics, pipeline tracking, enrollment management, and automated workflows,
            schools can improve admission efficiency while maintaining a seamless experience for students and parents.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-3">
            Seven Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
            Convert Enquiries into Successful Enrollments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className={`group border rounded-2xl p-7 transition-all cursor-pointer ${activeFeature === f.id
                  ? "border-indigo-600 bg-red-50"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white"
                }`}
              onClick={() =>
                setActiveFeature(activeFeature === f.id ? null : f.id)
              }
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all ${activeFeature === f.id
                    ? "bg-indigo-600 text-white"
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
                className={`border px-3 py-1 rounded-full text-xs transition-all ${activeFeature === f.id
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
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
          <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
            From Lead Tracking to Student Enrollment
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {workflow.map((w, i) => (
            <div key={w.step} className="relative">
              {i < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gray-200 z-0" />
              )}
              <div className="relative z-10 bg-white border border-gray-200 rounded-2xl p-5 h-full">
                <div className="text-xs font-bold text-indigo-600 mb-3 tracking-widest">
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
            <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">
              Why It Matters
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight uppercase">
              Turn enquiries into enrollments with a structured admission process.
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Managing admission enquiries manually often results in missed follow-ups,
              lost leads, and inefficient communication with prospective students and
              parents. Tracking every stage of the admission journey becomes difficult
              as enquiry volumes increase.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              The Admission & Enquiry module centralizes lead management, follow-ups,
              admission tracking, and enrollment workflows. From the first enquiry to
              final class allocation, every step is organized, measurable, and easy to manage.
            </p>

            <button className="border border-indigo-600 text-indigo-600 px-3 py-1 rounded-full text-xs hover:bg-indigo-600 hover:text-white transition-all">
              Read Documentation
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 items-start border border-gray-200 rounded-2xl p-5 bg-white hover:border-indigo-600 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
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
          <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">
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
            <button className="bg-indigo-600 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#a81f1f] transition-all">
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