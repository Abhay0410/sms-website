import Communication from "../../assets/EduZagerCommunication.png";
import { useState } from "react";
import {
  Users,
  LayoutDashboard,
Search,
  Megaphone,
  BellRing,
  Activity,
  Paperclip,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "announcement",
    icon: <Megaphone size={22} strokeWidth={1.5} />,
    title: "Announcement Management",
    description:
      "Create and manage school announcements with title, content, priority levels, audience selection, and attachments.",
    tags: [
      "Announcements",
      "Priority Control",
      "File Attachments",
    ],
  },

  {
    id: "audience",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Target Audience Selection",
    description:
      "Send announcements to students, teachers, parents, or selected classes with flexible audience targeting.",
    tags: [
      "Students",
      "Teachers",
      "Parents",
    ],
  },

  {
    id: "priority",
    icon: <BellRing size={22} strokeWidth={1.5} />,
    title: "Priority & Pinning",
    description:
      "Mark announcements as Low, Medium, or High priority and pin important notices to keep them visible.",
    tags: [
      "High Priority",
      "Pinned Posts",
      "Urgent Notices",
    ],
  },

  {
    id: "search",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Search & Filters",
    description:
      "Quickly find announcements using title, content, priority level, audience, and creation date filters.",
    tags: [
      "Title Search",
      "Content Search",
      "Advanced Filters",
    ],
  },

  {
    id: "dashboard",
    icon: <LayoutDashboard size={22} strokeWidth={1.5} />,
    title: "Dashboard Communication Feed",
    description:
      "Published announcements automatically appear on student, parent, and teacher dashboards for instant visibility.",
    tags: [
      "Dashboard Feed",
      "Real-Time Updates",
      "Role Based Access",
    ],
  },

  {
    id: "tracking",
    icon: <Activity size={22} strokeWidth={1.5} />,
    title: "Announcement Tracking",
    description:
      "Track who created announcements, when they were published, and which user groups received them.",
    tags: [
      "Sender Details",
      "Delivery Tracking",
      "Activity Logs",
    ],
  },

  {
    id: "attachments",
    icon: <Paperclip size={22} strokeWidth={1.5} />,
    title: "Document Attachments",
    description:
      "Upload PDFs, images, and documents with announcements to provide detailed information and resources.",
    tags: [
      "PDF Upload",
      "Images",
      "Documents",
    ],
  },
];

const stats = [
  { to: 2500, suffix: "+", label: "Announcements Sent" },
  { to: 850, suffix: "+", label: "Active Students" },
  { to: 120, suffix: "+", label: "Teachers Reached" },
  { to: 95, suffix: "%", label: "Communication Coverage" },
];

const workflow = [
  {
    step: "01",
    title: "Create Announcement",
    desc: "Add title, content, and priority.",
  },
  {
    step: "02",
    title: "Select Audience",
    desc: "Choose students, parents, or teachers.",
  },
  {
    step: "03",
    title: "Attach Documents",
    desc: "Upload PDFs, images, or files.",
  },
  {
    step: "04",
    title: "Publish Notice",
    desc: "Send announcement instantly.",
  },
  {
    step: "05",
    title: "Dashboard Delivery",
    desc: "Display on user dashboards.",
  },
  {
    step: "06",
    title: "Track Communication",
    desc: "Monitor visibility and engagement.",
  },
];

const benefits = [
  {
    title: "Instant Information Delivery",
    desc: "Share important notices with students, teachers, and parents in real time.",
  },
  {
    title: "Targeted Communication",
    desc: "Send announcements to specific user groups and selected classes.",
  },
  {
    title: "Improved Visibility",
    desc: "Pin critical announcements and display them prominently on dashboards.",
  },
  {
    title: "Centralized Communication Hub",
    desc: "Manage all institutional announcements from a single platform.",
  },
];

export default function CommunicationModule() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
     <section className="w-full bg-white">
                             <img
                                 src={Communication}
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
            Communication Management bridges administrators, teachers, students, and parents
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           The Communication Management module enables schools to create, publish, 
           and manage announcements efficiently. From audience-specific notifications 
           and document attachments to dashboard delivery and announcement tracking, it
            provides a centralized platform for seamless communication between administrators,
             teachers, students, and parents.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Seven Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
          Stay Connected. Keep Everyone Informed.
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
          From Announcements Creation to School-Wide Communication
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
    Deliver important information instantly across your entire institution.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Effective communication is critical for keeping students, parents, and
    teachers informed about school activities, events, examinations, and
    important updates. Manual communication methods often result in missed
    messages and inconsistent information delivery.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Communication Management module centralizes announcements, audience
    targeting, priority notifications, and dashboard delivery into one
    platform. Institutions can ensure timely, transparent, and organized
    communication across all stakeholders.
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