import AcademicImg from "../../assets/edzageracdemicmangment.png";
import { useState } from "react";
import {
  
    UserCircle,
  
    BookOpen,
    
    CalendarClock,
    Award,
    Search,
    School,
    Activity,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";
// import teacherManagement  from "../../assets/TeacherManagement.png";

const features = [
    {
        id: "search",
        icon: <Search size={22} strokeWidth={1.5} />,
        title: "Teacher Search & Filters",
        description:
            "Quickly locate teachers using advanced filters including name, employee ID, email, department, session, and status. Switch between grid and list views with one click.",
        tags: [
            "Advanced Search",
            "Department Filter",
            "Grid View"
        ],
    },

    {
        id: "profile",
        icon: <UserCircle size={22} strokeWidth={1.5} />,
        title: "Teacher Profile",
        description:
            "Maintain complete teacher records including personal information, qualifications, experience, department, and contact details from one centralized profile.",
        tags: [
            "Profile Management",
            "Contact Details",
            "Experience Tracking"
        ],
    },

    {
        id: "class",
        icon: <School size={22} strokeWidth={1.5} />,
        title: "Class Assignment",
        description:
            "Assign class teachers and section in-charges while preventing workload conflicts. View all assigned classes directly from teacher profiles.",
        tags: [
            "Class Allocation",
            "Section In-charge",
            "Conflict Detection"
        ],
    },

    {
        id: "subject",
        icon: <BookOpen size={22} strokeWidth={1.5} />,
        title: "Subject Assignment",
        description:
            "Map multiple subjects to teachers with workload balancing and automatic validation for duplicate assignments.",
        tags: [
            "Subject Mapping",
            "Workload Control",
            "Assignment History"
        ],
    },

    {
        id: "schedule",
        icon: <CalendarClock size={22} strokeWidth={1.5} />,
        title: "Schedule Summary",
        description:
            "View daily and weekly teaching schedules including upcoming classes, free periods, teaching hours, and timetable summaries.",
        tags: [
            "Teaching Hours",
            "Timetable View",
            "Daily Schedule"
        ],
    },

    {
        id: "activity",
        icon: <Activity size={22} strokeWidth={1.5} />,
        title: "Activity Feed",
        description:
            "Track teacher activities such as grading assignments, uploading study material, attendance marking, and report submissions.",
        tags: [
            "Live Activities",
            "Audit Trail",
            "Recent Actions"
        ],
    },

    {
        id: "development",
        icon: <Award size={22} strokeWidth={1.5} />,
        title: "Professional Development",
        description:
            "Monitor training programs, certifications, workshops, and professional growth records for every teacher.",
        tags: [
            "Certifications",
            "Training Records",
            "Career Growth"
        ],
    },
];

const stats = [
    { to: 250, suffix: "+", label: "Teachers" },
    { to: 35, suffix: "+", label: "Departments" },
    { to: 600, suffix: "+", label: "Subject Assignments" },
    { to: 1200, suffix: "+", label: "Classes Conducted Weekly" },
];

const workflow = [
    {
        step: "01",
        title: "Add Teacher",
        desc: "Create teacher profile and department details.",
    },
    {
        step: "02",
        title: "Assign Classes",
        desc: "Allocate classes and sections.",
    },
    {
        step: "03",
        title: "Assign Subjects",
        desc: "Map subjects to teachers.",
    },
    {
        step: "04",
        title: "Generate Timetable",
        desc: "Schedule teaching periods.",
    },
    {
        step: "05",
        title: "Track Activities",
        desc: "Monitor attendance and grading.",
    },
    {
        step: "06",
        title: "Professional Growth",
        desc: "Manage certifications and training.",
    },
];

const benefits = [
    {
        title: "Balanced Workload",
        desc: "Prevent teacher overload with intelligent class and subject allocation.",
    },
    {
        title: "Centralized Records",
        desc: "Access teacher profiles, schedules, and assignments from one place.",
    },
    {
        title: "Improved Productivity",
        desc: "Reduce manual administration through automation and tracking.",
    },
    {
        title: "Continuous Development",
        desc: "Track certifications, workshops, and professional training programs.",
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
                    alt="Teacher Management Dashboard"
                    className="w-full h-auto block"
                />
            </section>

            {/* ── STATS STRIP ── */}
            <section className="bg-[#C62828]">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`px-10 py-8 text-white ${i !== stats.length - 1 ? "border-r border-white/20" : ""
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
                        Teacher Management simplifies staff administration across your institution
                    </h2>
                    <p className=" text-gray-600 text-sm md:text-base leading-relaxed">
                        The Teacher Management module provides a centralized system for managing
                        teacher profiles, class assignments, subject allocations, schedules,
                        activities, and professional development. It ensures efficient staff
                        coordination while maintaining workload balance and academic excellence.
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
                      Empowering Educators. Simplifying Administration.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <div
                            key={f.id}
                            className={`group border rounded-2xl p-7 transition-all cursor-pointer ${activeFeature === f.id
                                    ? "border-[#C62828] bg-red-50"
                                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white"
                                }`}
                            onClick={() =>
                                setActiveFeature(activeFeature === f.id ? null : f.id)
                            }
                        >
                            <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all ${activeFeature === f.id
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
                                className={`border px-3 py-1 rounded-full text-xs transition-all ${activeFeature === f.id
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
                       From Teacher Profiles to Class & Subject Assignments
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
                            Empower teachers with organized schedules, assignments, and growth opportunities.
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            Managing teacher records, class assignments, subject allocations, and daily
                            responsibilities across an institution can quickly become overwhelming.
                            Without a centralized system, administrators struggle with scheduling
                            conflicts, workload imbalances, and fragmented staff information.
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            The Teacher Management module brings everything together in one place.
                            From assigning classes and subjects to tracking activities, schedules,
                            and professional development, it ensures teachers stay productive while
                            administrators maintain complete visibility and control.
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
                                    <div className="text-sm font-bold text-black mb-1">
                                        {b.title}
                                    </div>
                                    <div className="text-gray-600 text-sm leading-relaxed">
                                        {b.desc}
                                    </div>
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