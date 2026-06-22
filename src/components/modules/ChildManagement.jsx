import ChildManagement from "../../assets/EduZagerChildMM.png";
import { useState } from "react";
import {
  Users,
  ClipboardCheck,
  FileCheck,
  ShieldCheck,
  MessageSquare,
  IndianRupee,
  BarChart4,
  Star,
  FolderOpen,
  Baby,
  HeartPulse,
  GraduationCap,

  
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "profile",
    icon: <Baby size={22} strokeWidth={1.5} />,
    title: "Child Profile Management",
    description:
      "Maintain complete child profiles including personal information, photographs, admission details, class assignments, and address records.",
    tags: [
      "Child Records",
      "Admission Details",
      "Profile Management",
    ],
  },

  {
    id: "guardian",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Parent & Guardian Information",
    description:
      "Store parent, guardian, and emergency contact details along with occupations, emails, and communication preferences.",
    tags: [
      "Parent Records",
      "Emergency Contacts",
      "Guardian Details",
    ],
  },

  {
    id: "admission",
    icon: <FileCheck size={22} strokeWidth={1.5} />,
    title: "Admission & Enrollment",
    description:
      "Track admission applications, enrollment status, registration details, and previous school information from a centralized system.",
    tags: [
      "Admissions",
      "Enrollment Tracking",
      "Registration Records",
    ],
  },

  {
    id: "health",
    icon: <HeartPulse size={22} strokeWidth={1.5} />,
    title: "Health & Medical Records",
    description:
      "Maintain comprehensive medical profiles including allergies, blood group, vaccinations, doctor details, and health notes.",
    tags: [
      "Medical Records",
      "Vaccinations",
      "Health Monitoring",
    ],
  },

  {
    id: "academic",
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "Academic Progress Tracking",
    description:
      "Monitor class history, promotions, learning progress, and academic achievements throughout the child's educational journey.",
    tags: [
      "Academic Records",
      "Progress Tracking",
      "Promotion History",
    ],
  },

  {
    id: "attendance",
    icon: <ClipboardCheck size={22} strokeWidth={1.5} />,
    title: "Attendance Management",
    description:
      "Track daily attendance, late arrivals, leave records, and attendance performance through detailed reports.",
    tags: [
      "Daily Attendance",
      "Leave Records",
      "Attendance Reports",
    ],
  },

  {
    id: "behavior",
    icon: <Star size={22} strokeWidth={1.5} />,
    title: "Activity & Behavior Tracking",
    description:
      "Record classroom participation, behavior observations, activities, and teacher feedback to support holistic development.",
    tags: [
      "Behavior Notes",
      "Activities",
      "Teacher Observations",
    ],
  },

  {
    id: "documents",
    icon: <FolderOpen size={22} strokeWidth={1.5} />,
    title: "Document Management",
    description:
      "Store and manage photos, medical certificates, identity proofs, admission documents, and other important records securely.",
    tags: [
      "Photos",
      "Certificates",
      "Digital Records",
    ],
  },

  {
    id: "pickup",
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Pickup & Drop Management",
    description:
      "Manage authorized pickup guardians, transport assignments, pickup schedules, and child safety verification.",
    tags: [
      "Authorized Guardians",
      "Pickup Tracking",
      "Transport Safety",
    ],
  },

  {
    id: "communication",
    icon: <MessageSquare size={22} strokeWidth={1.5} />,
    title: "Parent Communication",
    description:
      "Share notifications, announcements, circulars, and messages directly with parents and guardians.",
    tags: [
      "Notifications",
      "Announcements",
      "Parent Messaging",
    ],
  },

  {
    id: "fees",
    icon: <IndianRupee size={22} strokeWidth={1.5} />,
    title: "Fee Tracking",
    description:
      "Track fee plans, payment history, due amounts, and outstanding balances linked directly to each child profile.",
    tags: [
      "Fee Plans",
      "Payments",
      "Outstanding Fees",
    ],
  },

  {
    id: "reports",
    icon: <BarChart4 size={22} strokeWidth={1.5} />,
    title: "Child Reports",
    description:
      "Generate detailed reports covering profile information, attendance, health records, academic progress, and development milestones.",
    tags: [
      "Profile Reports",
      "Progress Reports",
      "Health Reports",
    ],
  },
];

const stats = [
  { to: 1500, suffix: "+", label: "Children Enrolled" },
  { to: 3000, suffix: "+", label: "Parent Profiles" },
  { to: 98, suffix: "%", label: "Attendance Rate" },
  { to: 12000, suffix: "+", label: "Development Records" },
];

const workflow = [
  {
    step: "01",
    title: "Register Child",
    desc: "Create child profile and admission records.",
  },
  {
    step: "02",
    title: "Add Guardian Details",
    desc: "Capture parent and emergency contacts.",
  },
  {
    step: "03",
    title: "Manage Health Records",
    desc: "Store medical and vaccination information.",
  },
  {
    step: "04",
    title: "Track Learning Progress",
    desc: "Monitor academic and developmental milestones.",
  },
  {
    step: "05",
    title: "Monitor Attendance",
    desc: "Record attendance and participation.",
  },
  {
    step: "06",
    title: "Generate Reports",
    desc: "Create comprehensive child reports.",
  },
];

const benefits = [
  {
    title: "Complete Child Visibility",
    desc: "Access academic, health, attendance, and family information from a single profile.",
  },
  {
    title: "Enhanced Child Safety",
    desc: "Manage authorized pickups, emergency contacts, and medical information efficiently.",
  },
  {
    title: "Stronger Parent Engagement",
    desc: "Improve communication through notifications, updates, and shared progress reports.",
  },
  {
    title: "Holistic Development Tracking",
    desc: "Monitor learning, behavior, participation, attendance, and overall child growth.",
  },
];

export default function ChildManagementModule() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
       <section className="w-full bg-white">
              <img
                src={ChildManagement}
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
          <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">
            What Is This Module
          </p>
          <h2 className="text-[#111111] text-4xl md:text-[36px] font-bold mb-6 leading-tight uppercase">
           Child Management provides a complete view of every child's journey
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Child Management module provides a comprehensive view of every child's academic, 
            personal, health, and developmental journey. From enrollment and guardian records to attendance,
             behavior tracking, medical information, and parent communication, it enables institutions to deliver
             personalized care, maintain child safety, and support holistic development through a single centralized platform.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-3">
            Twelve Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
          Every Child Nurtured. Every Detail Connected.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className={`group border rounded-2xl p-7 transition-all cursor-pointer ${
                activeFeature === f.id
                  ? "border-indigo-600 bg-red-50"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white"
              }`}
              onClick={() =>
                setActiveFeature(activeFeature === f.id ? null : f.id)
              }
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all ${
                  activeFeature === f.id
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
                className={`border px-3 py-1 rounded-full text-xs transition-all ${
                  activeFeature === f.id
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
          From Enrollment Records to Holistic Child Development Tracking
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
    Build a complete and connected profile for every child's growth journey.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing child records across multiple systems can make it difficult to
    maintain accurate information about health, academics, attendance, family
    contacts, and developmental progress.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Child Management module centralizes every aspect of a child's journey,
    from admission and health records to attendance, communication, behavior,
    and academic growth. This enables educators and administrators to provide
    better care, improved safety, and personalized learning support.
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