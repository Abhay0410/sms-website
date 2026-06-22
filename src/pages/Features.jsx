import {
  BookOpen,
  GraduationCap,
  CalendarClock,
  Users,
  BadgeCheck,
  Briefcase,
  Wallet,
  Banknote,
  Receipt,
  Bus,
  Library,
  Archive,
  UploadCloud,
  MessageSquare,
  UserPlus,
  ArrowRight,
  Check,
  ShieldCheck,
  DatabaseZap,
  Server,
  UserCog,
  User,
  HeartHandshake,
  Layers,
  Shuffle,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroImg from "../assets/EduZagerAllFeatures.png";

const pillars = [
  {
    name: "Academics",
    description: "The complete operational toolkit for running your academic year.",
    modules: [
      {
        icon: <BookOpen size={24} />,
        title: "Academic Management",
        desc: "The core module for classes, sections, subjects, and teacher assignments.",
        path: "/academic-structure",
      },
      {
        icon: <GraduationCap size={24} />,
        title: "Result Management",
        desc: "Manage exams, grade entry, and automated report card generation.",
        path: "/result-management",
      },
      {
        icon: <CalendarClock size={24} />,
        title: "Timetable Management",
        desc: "Create clash-free schedules with automatic teacher and room allocation.",
        path: "/timetable-management",
      },
    ],
  },
  {
    name: "People",
    description: "Unified profiles and portals for every stakeholder in your institution.",
    modules: [
      {
        icon: <Users size={24} />,
        title: "Student Management",
        desc: "A 360° view of every student from admission to alumni status.",
        path: "/student-management",
      },
      {
        icon: <BadgeCheck size={24} />,
        title: "Teacher & Staff Management",
        desc: "Manage staff profiles, workloads, and role-based access.",
        path: "/teacher-management",
      },
      {
        icon: <Briefcase size={24} />,
        title: "HR & Payroll",
        desc: "Automate salary processing, deductions, and payslip generation.",
        path: "/hr-payroll",
      },
    ],
  },
  {
    name: "Finance",
    description: "Centralized tools to manage fees, expenses, and financial health.",
    modules: [
      {
        icon: <Banknote size={24} />,
        title: "Fee Management",
        desc: "Automated fee collection, receipting, and due-date reminders.",
        path: "/fee-management",
      },
      {
        icon: <Receipt size={24} />,
        title: "Financial Ledger",
        desc: "Track every expense from payroll to inventory with detailed reports.",
        path: "/financial-ledger",
      },
      {
        icon: <Wallet size={24} />,
        title: "Online Payments",
        desc: "Integrated payment gateway for seamless online fee collection.",
        path: "/online-payments",
      },
    ],
  },
  {
    name: "Operations",
    description: "Streamline the day-to-day logistics that keep your campus running.",
    modules: [
      {
        icon: <Bus size={24} />,
        title: "Transport Management",
        desc: "Manage routes, vehicles, and live bus tracking for parents.",
        path: "/transport-management",
      },
      {
        icon: <Library size={24} />,
        title: "Library Management",
        desc: "Digitize your library with cataloging, circulation, and fine management.",
        path: "/library-management",
      },
      {
        icon: <Archive size={24} />,
        title: "Inventory & Assets",
        desc: "Track school assets from purchase to allocation and write-offs.",
        path: "/inventory-management",
      },
    ],
  },
  {
    name: "Communication",
    description: "Connect your entire school community through a single channel.",
    modules: [
      {
        icon: <MessageSquare size={24} />,
        title: "Communication Hub",
        desc: "Send targeted SMS, email, and push notifications to any user group.",
        path: "/communication",
      },
      {
        icon: <UserPlus size={24} />,
        title: "Admission & Enquiry",
        desc: "Manage the entire admissions pipeline from first contact to enrollment.",
        path: "/admission-and-enquiry",
      },
      {
        icon: <UploadCloud size={24} />,
        title: "Bulk Data Import",
        desc: "Migrate from your old system in minutes with smart CSV imports.",
        path: "/bulk-import",
      },
    ],
  },
];

const comparisonData = [
    { feature: "Attendance", oldWay: "Manual Registers", eduZager: true },
    { feature: "Fee Collection", oldWay: "Cash/Bank Deposits", eduZager: true },
    { feature: "Result Cards", oldWay: "Excel + Printing", eduZager: true },
    { feature: "Timetable", oldWay: "Manual Clash Checks", eduZager: true },
    { feature: "Parent Communication", oldWay: "WhatsApp/SMS", eduZager: true },
    { feature: "Admission Enquiries", oldWay: "Physical Forms", eduZager: true },
];

const roleBenefits = [
    { role: "For the Principal", benefit: "Get a real-time, 360° view of your entire institution's academic and financial health from a single dashboard.", icon: <UserCog/> },
    { role: "For the Admin", benefit: "Automate 90% of your manual tasks like fee reminders, payroll, and data entry, freeing up hours every week.", icon: <User/> },
    { role: "For the Teacher", benefit: "Spend more time teaching and less time on admin work with one-click attendance, digital grade-books, and a clear schedule.", icon: <BadgeCheck/> },
    { role: "For Parents", benefit: "Stay connected to your child's progress with live attendance alerts, fee payment portals, and direct communication channels.", icon: <HeartHandshake/> },
];

const securityFeatures = [
    { title: "Data Hosted in India", icon: <Server/> },
    { title: "Role-Based Access Control", icon: <ShieldCheck/> },
    { title: "Complete Audit Logs", icon: <Layers/> },
    { title: "Automated Daily Backups", icon: <DatabaseZap/> },
];

const ModuleCard = ({ icon, title, desc, path }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col group hover:border-indigo-600 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 text-gray-600 mb-5 group-hover:bg-red-50 group-hover:text-indigo-600 transition-all">
      {icon}
    </div>
    <h3 className="text-base font-bold text-black mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">{desc}</p>
    <Link
      to={path}
      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 border border-indigo-600 rounded-full px-3 py-1 self-start hover:bg-indigo-600 hover:text-white transition-colors"
    >
      Read More <ArrowRight size={12} />
    </Link>
  </div>
);

export default function Features() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Hero Section with Stats - Complete restructure */}
      <div className="bg-slate-50">
        {/* Hero Image Container - No padding, proper width */}
        <div className="w-full">
          <img
            src={HeroImg}
            alt="EduZager Dashboard"
            className="w-full h-[400px] "
          />
        </div>

        {/* Stats Bar */}
        <div className="bg-[#001A48] w-full ">
          <div className="max-w-7xl  px-4  sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 text-white divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="px-4 py-5 text-center border-b sm:border-b-0 sm:border-r border-white/20">
                <div className="text-3xl md:text-4xl font-bold">
                  <AnimatedCounter to={15} suffix="+" /> Modules
                </div>
              </div>
              <div className="px-4 py-5 text-center border-b sm:border-b-0 sm:border-r border-white/20">
                <div className="text-3xl md:text-4xl font-bold">
                  <AnimatedCounter to={1} /> Platform
                </div>
              </div>
              <div className="px-4 py-5 text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  <AnimatedCounter to={0} /> Switching Costs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Pillars Sections */}
      {pillars.map((pillar, idx) => (
        <section key={pillar.name} className={`px-4 sm:px-6 lg:px-8 py-16 ${idx !== pillars.length - 1 ? 'border-b border-gray-100' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">
                {pillar.name}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight uppercase">
                {pillar.description}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillar.modules.map((mod) => (
                <ModuleCard key={mod.title} {...mod} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Everything Connects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">The EduZager Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5 uppercase">
                Everything connects, so you never enter data twice.
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Unlike disconnected tools, our modules are built on a single, unified database. This means an action in one module instantly and automatically updates every other relevant part of the system, eliminating manual work and errors.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-indigo-600 rounded-lg flex-shrink-0">
                  <UserPlus size={20}/>
                </div>
                <p className="text-sm font-semibold text-gray-700">When you <span className="text-black">enroll a student</span>...</p>
              </div>
              <div className="flex justify-center">
                <Shuffle size={20} className="text-gray-300"/>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-indigo-600 rounded-lg flex-shrink-0">
                  <Banknote size={20}/>
                </div>
                <p className="text-sm font-semibold text-gray-700">...<span className="text-black">Fee Management</span> auto-generates their first invoice.</p>
              </div>
              <div className="flex justify-center">
                <Shuffle size={20} className="text-gray-300"/>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-indigo-600 rounded-lg flex-shrink-0">
                  <MessageSquare size={20}/>
                </div>
                <p className="text-sm font-semibold text-gray-700">...<span className="text-black">Communication Hub</span> sends them a welcome SMS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight uppercase">
              From Manual Chaos to Automated Control
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4">The Old Way</th>
                  <th className="px-6 py-4">The EduZager Way</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map(item => (
                  <tr key={item.feature}>
                    <td className="px-6 py-4 font-bold text-black whitespace-nowrap">{item.feature}</td>
                    <td className="px-6 py-4 text-gray-500">{item.oldWay}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <Check size={16}/> Automated
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Role Benefits Section */}
      <section id="role-benefits" className="px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight uppercase">
              A Unified Platform for Every Role
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {roleBenefits.map(item => (
              <div key={item.role} className="flex items-start gap-5 p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-red-100 text-indigo-600 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-black">{item.role}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {securityFeatures.map(item => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="text-gray-400">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="px-4 sm:px-6 lg:px-8 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-widest text-indigo-600 font-semibold uppercase mb-4">
              See It Live
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              See it live in 30 minutes.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Schedule a personalized demo and discover how EduZager can transform your institution's operations. No commitment, no pressure.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button className="bg-indigo-600 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#a81f1f] transition-all">
                Book a Demo
              </button>
              <Link
                to="/register"
                className="border border-white/30 text-white px-7 py-3 rounded-full text-sm hover:border-white transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}