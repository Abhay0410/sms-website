// import {
//   Users,
//   ClipboardCheck,
//   CreditCard,
//   FileText,
//   UserCog,
//   BookOpen,
//   Calendar,
//   BarChart3,
// } from "lucide-react";

// const features = [
//   {
//     icon: Users,
//     title: "Student Management",
//     description:
//       "Manage student records, admissions, profiles, and academic details efficiently.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Attendance Tracking",
//     description:
//       "Monitor daily attendance with real-time reports and automated records.",
//   },
//   {
//     icon: CreditCard,
//     title: "Fee Management",
//     description:
//       "Handle fee collection, payment tracking, invoices, and reminders seamlessly.",
//   },
//   {
//     icon: FileText,
//     title: "Exam & Results",
//     description:
//       "Create exams, publish results, and generate report cards effortlessly.",
//   },
//   {
//     icon: UserCog,
//     title: "Staff Management",
//     description:
//       "Manage teachers, staff records, payroll information, and schedules.",
//   },
//   {
//     icon: BookOpen,
//     title: "Parent Portal",
//     description:
//       "Enable parents to track attendance, performance, and school updates.",
//   },
//   {
//     icon: Calendar,
//     title: "Timetable Scheduling",
//     description:
//       "Create and manage class schedules with ease and flexibility.",
//   },
//   {
//     icon: BarChart3,
//     title: "Reports & Analytics",
//     description:
//       "Gain insights through detailed reports and performance analytics.",
//   },
// ];

// export default function KeyFeatures() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
//             Key Features
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-[#0F1B2D]">
//             Everything You Need to Manage Your School
//           </h2>

//           <p className="mt-4 text-gray-600 text-lg">
//             Streamline school operations, improve communication, and enhance
//             academic management with our all-in-one School ERP solution.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <div
//                 key={index}
//                 className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition">
//                   <Icon
//                     size={28}
//                     className="text-blue-600 group-hover:text-white transition"
//                   />
//                 </div>

//                 <h3 className="text-xl font-bold text-[#0F1B2D] mb-3">
//                   {feature.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  Users,
  ClipboardCheck,
  CreditCard,
  FileText,
  UserCog,
  BookOpen,
  Calendar,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Manage admissions, student records, academic progress, and profiles from a centralized dashboard.",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Tracking",
    description:
      "Track attendance in real-time with automated reports and notifications.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description:
      "Simplify fee collection, payment tracking, invoices, and reminders.",
  },
  {
    icon: FileText,
    title: "Exam & Results",
    description:
      "Create exams, publish results, and generate report cards effortlessly.",
  },
  {
    icon: UserCog,
    title: "Staff Management",
    description:
      "Manage teachers, staff information, schedules, and performance records.",
  },
  {
    icon: BookOpen,
    title: "Parent Portal",
    description:
      "Keep parents informed with attendance, grades, and school updates.",
  },
  {
    icon: Calendar,
    title: "Timetable Scheduling",
    description:
      "Organize classes, subjects, and faculty schedules efficiently.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Access actionable insights with comprehensive reports and dashboards.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-15 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto ">
          <span className="text-xs tracking-widest text-indigo-600 font-bold uppercase bg-indigo-50 px-3 py-1 rounded-md inline-block">
            KEY FEATURES
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black text-black uppercase">
            Powerful Tools For
           
              Smart Schools
            
          </h2>

          <p className="text-slate-500 mt-1.5 font-sans text-lg max-w-xl mx-auto leading-relaxed">
            Streamline academic operations, improve communication, and manage
            every aspect of your institution from a single platform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white p-7 border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Number */}
                <span className="absolute top-5 right-5 text-5xl font-black text-slate-100 group-hover:text-blue-50 transition">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-[#0F1B2D]">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-1 w-0 bg-[#204589] rounded-full transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}