import {
    GraduationCap,
    Users,
    UserCog,
    IndianRupee,
    FileText,
    ClipboardList,
    Briefcase,
    BookOpen,
    Bus,
    Package,
    Wallet,
    MessageSquare,
    UserCheck,
    Baby,
    Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
const modules = [
    {
        title: "Academic Management",
        icon: GraduationCap,
        path: "/academic-structure",
        desc: "Manage classes, subjects, academic sessions, timetables and curriculum planning from a centralized platform. Monitor academic activities and student performance with actionable insights.",
    },
    {
        title: "Student Management",
        icon: Users,
        desc: "Maintain complete student records including admissions, attendance, documents and academic progress. Access student information instantly through an organized digital database.",
    },
    {
        title: "Teacher Management",
        icon: UserCog,
        desc: "Organize teacher profiles, attendance, workload assignments and performance tracking. Streamline faculty management and improve operational efficiency.",
    },
    {
        title: "Fee Management",
        icon: IndianRupee,
        desc: "Automate fee structures, collections, payment tracking and outstanding dues. Generate detailed financial reports and monitor fee activities in real time.",
    },
    {
        title: "Result Management",
        icon: FileText,
        desc: "Create examinations, record marks, generate report cards and analyze academic results. Simplify assessment management with automated result processing.",
    },
    {
        title: "Admission & Enquiry",
        icon: ClipboardList,
        desc: "Manage enquiries, admission applications and follow-up activities from a single dashboard. Track the complete admission lifecycle efficiently.",
    },
    {
        title: "HR & Payroll",
        icon: Briefcase,
        desc: "Handle employee records, attendance, leave requests, payroll processing and salary management. Ensure accurate workforce administration with ease.",
    },
    {
        title: "Library Management",
        icon: BookOpen,
        desc: "Digitize library operations including book cataloging, issue-return tracking and fine management. Maintain complete library records effortlessly.",
    },
    {
        title: "Transport Management",
        icon: Bus,
        desc: "Manage routes, vehicles, drivers and student transport allocations. Monitor transportation activities and ensure safe school commuting.",
    },
    {
        title: "Inventory & Assets",
        icon: Package,
        desc: "Track inventory, school assets, stock movements and procurement activities. Maintain complete visibility over institutional resources.",
    },
    {
        title: "Financial Ledger",
        icon: Wallet,
        desc: "Record income, expenses, ledger entries and financial transactions in a centralized system. Generate comprehensive accounting and finance reports.",
    },
    {
        title: "Communication",
        icon: MessageSquare,
        desc: "Engage parents, students and staff through SMS, Email and WhatsApp notifications. Deliver important updates and announcements instantly.",
    },
    {
        title: "Staff Management",
        icon: UserCheck,
        desc: "Maintain staff records, attendance, documentation and work history. Simplify administrative operations and staff monitoring processes.",
    },
    {
        title: "Child Management",
        icon: Baby,
        desc: "Store child profiles, parent information, medical records and developmental activities. Ensure complete child care management through a secure platform.",
    },
    {
        title: "Bulk Import",
        icon: Upload,
        desc: "Import academic data, teachers, students, fee heads and fee payments in bulk. Save time and reduce manual data entry with automated imports.",
    },
];
export default function ModulesSection() {
    return (
        <section className="py-10 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-slate-800">
                        School ERP Modules
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Comprehensive School Management System with all essential
                        administrative, academic and financial modules.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module, index) => {
                        const Icon = module.icon;

                        return (
                            <div
                                key={index}
                                className="
    group
    bg-white
    border border-gray-200
    rounded-2xl
    p-8
    shadow-sm
    hover:shadow-xl
    transition-all
    duration-300
    hover:-translate-y-2
    flex flex-col
    h-full
  "
                            >
                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
                                    <Icon size={32} className="text-indigo-600" />
                                </div>

                                <h3 className="text-xl font-semibold text-center mt-6">
                                    {module.title}
                                </h3>

                                <p className="text-gray-500 text-center mt-3 leading-7 flex-grow">
                                    {module.desc}
                                </p>

                                <div className="text-center mt-6">
                                  

                                    <Link
                                        to={module.path || "#"}
                                        key={index}
                                        className="
      group
      bg-white
      border border-gray-200
      rounded-2xl
      p-8
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      flex flex-col
      h-full
    "
                                    >
                                        ...
                                    </Link>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}