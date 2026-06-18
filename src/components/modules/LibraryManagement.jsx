import LibraryManagement from "../../assets/EduZagerLibraryMM.png";
import { useState } from "react";
import {
  Library,
  Search,
  PlusCircle,
  ClipboardList,
  AlertTriangle,
  Activity,
  
  BookOpen,

} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "circulation",
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    title: "Book Circulation",
    description:
      "Issue books to students and teachers by entering Student ID, Name, Serial Code, and Due Date. Track every transaction in real time.",
    tags: [
      "Book Issue",
      "Due Date Tracking",
      "Teacher & Student Access",
    ],
  },

  {
    id: "livefeed",
    icon: <Activity size={22} strokeWidth={1.5} />,
    title: "Live Activity Feed",
    description:
      "Monitor book issuance activities in real time and view which user has borrowed which book.",
    tags: [
      "Real-Time Updates",
      "Issue History",
      "Activity Tracking",
    ],
  },

  {
    id: "issued",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    title: "Issued Book List",
    description:
      "View all active book issues with borrower details, issue dates, due dates, and return status.",
    tags: [
      "Issued Books",
      "Borrower Details",
      "Return Tracking",
    ],
  },

  {
    id: "overdue",
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Overdue Management",
    description:
      "Track books whose return dates have passed and identify overdue borrowers instantly.",
    tags: [
      "Overdue Books",
      "Late Returns",
      "Penalty Tracking",
    ],
  },

  {
    id: "inventory",
    icon: <Library size={22} strokeWidth={1.5} />,
    title: "Library Inventory",
    description:
      "Maintain a centralized inventory of all books with advanced search and category-based filtering.",
    tags: [
      "Book Catalog",
      "Inventory Control",
      "Library Search",
    ],
  },

  {
    id: "booksearch",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Advanced Book Search",
    description:
      "Search books using Title, Author Name, ISBN, Serial Code, Category, and Availability Status.",
    tags: [
      "ISBN Search",
      "Author Search",
      "Category Filters",
    ],
  },

  {
    id: "bookadd",
    icon: <PlusCircle size={22} strokeWidth={1.5} />,
    title: "Book Registration",
    description:
      "Add new books to the library with complete details including ISBN, category, rack number, and pricing information.",
    tags: [
      "Book Registration",
      "Rack Management",
      "Catalog Creation",
    ],
  },
];

const stats = [
  { to: 12500, suffix: "+", label: "Books Available" },
  { to: 2800, suffix: "+", label: "Books Issued" },
  { to: 180, suffix: "+", label: "Overdue Books" },
  { to: 42, suffix: "+", label: "Categories" },
];

const workflow = [
  {
    step: "01",
    title: "Add Books",
    desc: "Register books with catalog details.",
  },
  {
    step: "02",
    title: "Organize Inventory",
    desc: "Assign categories and rack locations.",
  },
  {
    step: "03",
    title: "Issue Books",
    desc: "Issue books to students or staff.",
  },
  {
    step: "04",
    title: "Track Circulation",
    desc: "Monitor active borrowings.",
  },
  {
    step: "05",
    title: "Manage Returns",
    desc: "Update returned book records.",
  },
  {
    step: "06",
    title: "Monitor Overdues",
    desc: "Track pending book returns.",
  },
];

const benefits = [
  {
    title: "Centralized Book Inventory",
    desc: "Maintain all library resources in a searchable and organized catalog.",
  },
  {
    title: "Efficient Book Circulation",
    desc: "Issue and return books quickly for both students and staff members.",
  },
  {
    title: "Real-Time Activity Tracking",
    desc: "Monitor library transactions and borrowing activities as they happen.",
  },
  {
    title: "Reduced Overdue Returns",
    desc: "Track overdue books and improve return compliance with timely monitoring.",
  },
];

export default function LibraryManagementModule() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
          <section className="w-full bg-white">
                   <img
                     src={LibraryManagement}
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
           Library Management streamlines book circulation, inventory tracking, and resource management
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Library Management module provides a complete solution for managing book 
            inventories, circulation records, borrower activities, and overdue tracking.
             From registering books and organizing shelves to issuing resources and monitoring returns,
             it helps institutions maintain an efficient, accessible, and well-organized library system.
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
           Knowledge Organized. Resources Accessible.
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
         From Book Inventory to Circulation Tracking
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
    Organize library resources, track circulation, and improve book accessibility.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing a library manually can make it difficult to track issued books,
    monitor overdue returns, and maintain accurate inventory records. As the
    number of books and borrowers grows, keeping records updated becomes
    increasingly challenging.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Library Management module centralizes book inventory, circulation,
    borrower records, and overdue tracking into one platform. From registering
    books to monitoring real-time issuance activity, it helps institutions
    manage library operations efficiently and transparently.
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