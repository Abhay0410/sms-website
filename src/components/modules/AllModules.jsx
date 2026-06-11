import React from "react";
import { Link } from "react-router-dom";
import EduzagerAllModulesImg from "../../assets/eduzageralmodules.png";
import {
  Bus,
  Library,
  CalendarPlus,
  Calculator,
  AlertTriangle,
  Users,
  Smartphone,
  CalendarCheck,
  Shield,
  UserMinus,
  Laptop,
  FileText,
  HeartPulse,
  Activity,
  HelpCircle,
  UserPlus,
  ClipboardList,
  Printer,
  Book,
  GraduationCap,
  Banknote,
  CreditCard,
  Mic,
  BookOpen,
  Calendar,
  Award,
  Contact,
  MonitorPlay,
  Globe,
  Briefcase,
  BarChart,
  MessageSquare,
  Stethoscope,
  Star,
  FolderOpen,
  Database,
  Gift,
  Fingerprint,
  Archive,
  Lock,
  Clock,
  Wrench,
  Image as ImageIcon,
  Newspaper,
  Mail,
  CheckSquare,
  PieChart,
  ArrowRight,
} from "lucide-react";

const modulesData = [
  {
    title: "Transport Management System",
    description: "The transport management software helps students, parents, staff and management.",
    icon: Bus,
  },
  {
    title: "Academic Management",
    description: "This module streamlines academic processes, including course management and grading.",
    icon: BookOpen,
  },
  {
    title: "Library Management System",
    description: "The Library management software helps in operating library with an automated system.",
    icon: Library,
  },
  {
    title: "Timetable Management",
    description: "Teachers and administrators can generate and alter timetables easily.",
    icon: CalendarPlus,
  },
  {
    title: "Accounting: Managing school fee System",
    description: "This Software helps in managing student fee collection records.",
    icon: Calculator,
  },
  {
    title: "Alert Management System",
    description: "Alert management system Helps to keep track of ongoing tasks and their current status.",
    icon: AlertTriangle,
  },
  {
    title: "Student Management",
    description: "Manage student profiles, enrollment, and records.",
    icon: Users,
  },
  {
    title: "Teacher Management",
    description: "Oversee teacher profiles, assignments, and schedules.",
    icon: Users,
  },
  {
    title: "Admission & Enquiry",
    description: "Handle the entire admission process from enquiry to enrollment.",
    icon: UserPlus,
  },
  {
    title: "Parent – Teacher Interaction Module",
    description: "School ERP software helps parents to get real-time access to their child's daily performance.",
    icon: Users,
  },
  {
    title: "Visitor Management System",
    description: "This system helps to create a appropriate visitor management record for school.",
    icon: Smartphone,
  },
  {
    title: "Attendance Management System",
    description: "Attendance management system helps to keep track of daily attendance in real-time.",
    icon: CalendarCheck,
  },
  {
    title: "Result Management",
    description: "Manage examination results and generate report cards.",
    icon: GraduationCap,
  },
  {
    title: "Discipline management System",
    description: "This module assist to monitor and maintain student discipline and run a school with a good and productive atmosphere.",
    icon: Shield,
  },
  {
    title: "Leave Management System",
    description: "This software simplifies the process and status of leave, daily attendance record.",
    icon: UserMinus,
  },
  {
    title: "HR & Payroll",
    description: "Manage staff, payroll, and human resources functions.",
    icon: Briefcase,
  },
  {
    title: "E-learning System Virtual Classroom",
    description: "This system helps to conduct real-time online web classes.",
    icon: Laptop,
  },
  {
    title: "Transfer certificate generation system",
    description: "It helps in easy, effortless and time saving generation of transfer certificate.",
    icon: FileText,
  },
  {
    title: "Healthcare Management System",
    description: "This system also helps in recording the student's previous ailments/disorders.",
    icon: HeartPulse,
  },
  {
    title: "Co-curricular Activities Management System",
    description: "Co-curricular activities in course of study for overall development of the students.",
    icon: Activity,
  },
  {
    title: "Enquiry Management System",
    description: "This software helps in Recording and managing all the admission related enquiries.",
    icon: HelpCircle,
  },
  {
    title: "Inventory & Assets",
    description: "Track and manage school inventory and assets.",
    icon: Archive,
  },
  {
    title: "Online Admission Management System",
    description: "It provides a secured login portal for students with one-time password protection (OTP) for admission.",
    icon: UserPlus,
  },
  {
    title: "Work allocation Management System",
    description: "This system helps in allocating/assigning tasks digitally across faculties and staff members.",
    icon: ClipboardList,
  },
  {
    title: "Financial Ledger",
    description: "Maintain a comprehensive financial ledger for all transactions.",
    icon: Banknote,
  },
  {
    title: "Managing and Printing documents",
    description: "School ERP system also enables in generating and printing important documents/certificates automatically.",
    icon: Printer,
  },
  {
    title: "Homework/assignment Management System",
    description: "It allows you to post homework/assignment details online to student who can see their homework for reference.",
    icon: Book,
  },
  {
    title: "Communication",
    description: "Facilitate communication between school, parents, and students.",
    icon: MessageSquare,
  },
  {
    title: "Examination Management System",
    description: "The examination management system module assists in monitoring and managing examination activities.",
    icon: GraduationCap,
  },
  {
    title: "Fees & Fine Management",
    description: "This module streamlines school fee and fine management, simplifying payment processing and record-keeping.",
    icon: Banknote,
  },
  {
    title: "Online Payment Gateway",
    description: "Provides a secure platform for online payments, enhancing convenience for students and parents.",
    icon: CreditCard,
  },
  {
    title: "Staff Management",
    description: "Manage staff records, roles, and permissions.",
    icon: Users,
  },
  {
    title: "Daily Lecture Topic & Details",
    description: "This module records & communicates daily lecture topics & related information for students & teachers.",
    icon: Mic,
  },
  {
    title: "Child Management",
    description: "Manage and track individual student progress and activities.",
    icon: Users,
  },
  {
    title: "Bulk Import",
    description: "Import large amounts of data for students, staff, and more.",
    icon: FileText,
  },
  {
    title: "Holidays & School Planner",
    description: "Manages school holidays and schedules, helping in effective planning and communication.",
    icon: Calendar,
  },
  {
    title: "Achievement & Talent",
    description: "This module recognizes and showcases student achievements and talents.",
    icon: Award,
  },
  {
    title: "Student Id Card Generation",
    description: "Generates student identification cards for security and identification purposes.",
    icon: Contact,
  },
  {
    title: "Certificate Management System",
    description: "Manages the issuance and tracking of various certificates for students and staff.",
    icon: Award,
  },
  {
    title: "Online Exam/Quiz Management",
    description: "Facilitates the creation, administration, and grading of online exams and quizzes.",
    icon: MonitorPlay,
  },
  {
    title: "Web – Design & Maintenance",
    description: "Manages the school website, ensuring it remains up-to-date and visually appealing.",
    icon: Globe,
  },
  {
    title: "Employee Management",
    description: "This module handles employee records, payroll, and HR-related functions.",
    icon: Briefcase,
  },
  {
    title: "Report Cards & Result Analysis",
    description: "Generates and analyzes student report cards and academic results.",
    icon: BarChart,
  },
  {
    title: "Online Ptm Feedback",
    description: "Gathers feedback from students on teacher performance and teaching methods.",
    icon: MessageSquare,
  },
  {
    title: "Medical Room Management",
    description: "This module tracks student health records and manages medical facilities within the school.",
    icon: Stethoscope,
  },
  {
    title: "Online Teacher Feedback",
    description: "Gathers feedback from students on teacher performance and teaching methods.",
    icon: Star,
  },
  {
    title: "Student Dossier",
    description: "This module maintains comprehensive student profiles, including academic, behavioral, and personal data.",
    icon: FolderOpen,
  },
  {
    title: "U-Dise Reports",
    description: "Generates and submits data to the Unified District Information System for Education (U-DISE).",
    icon: Database,
  },
  {
    title: "Event Management",
    description: "This module plans, organizes, and tracks school events and activities.",
    icon: Gift,
  },
  {
    title: "Hr Management",
    description: "Manages employee records, recruitment, and HR-related processes.",
    icon: Users,
  },
  {
    title: "Biometric Integration",
    description: "Integrates biometric authentication for access control and attendance tracking.",
    icon: Fingerprint,
  },
  {
    title: "Inventory Management",
    description: "This module manages school inventory, procurement, and asset tracking.",
    icon: Archive,
  },
  {
    title: "Access Management System",
    description: "Controls user access and security features within the software.",
    icon: Lock,
  },
  {
    title: "Scheduled Services",
    description: "Optimizes scheduling of services such as maintenance and transportation.",
    icon: Clock,
  },
  {
    title: "Services Requests",
    description: "Handles service requests from parents and staff members.",
    icon: Wrench,
  },
  {
    title: "Photo Gallery & School Videos",
    description: "This module stores and shares photos and videos of school events and activities.",
    icon: ImageIcon,
  },
  {
    title: "News & Events",
    description: "Communicates school news and upcoming events to the school community.",
    icon: Newspaper,
  },
  {
    title: "Invitees Management",
    description: "Manages guest lists and invitations for school events and functions.",
    icon: Mail,
  },
  {
    title: "Student Behavior Management",
    description: "Records and manages student behavior incidents and interventions.",
    icon: Activity,
  },
  {
    title: "Duty/Activity Allocation & Monitoring",
    description: "Allocates and monitors duties and activities for school staff.",
    icon: CheckSquare,
  },
  {
    title: "Graphical Presentation Of Data",
    description: "This module presents data and reports in graphical formats for better visualization and analysis.",
    icon: PieChart,
  },
];

const AllModules = () => {
  return (
    <section className="bg-[#FFFFFF] min-h-screen font-sans">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src={EduzagerAllModulesImg}
          alt="EduZager Modules Overview"
          className="w-full h-auto block"
        />
      </div>

      {/* Header Area */}
      <div className="flex flex-col items-center text-center pt-16 pb-8 px-6 max-w-4xl mx-auto">
        <span className="text-[#D32F2F] uppercase tracking-[0.2em] font-semibold text-sm mb-4">
          Our Products & Services
        </span>
        <h1 className="text-[#111111] text-4xl md:text-[36px] font-bold mb-6 leading-tight">
          School ERP Management Software
        </h1>
        <p className="text-[#444444] text-[15px] md:text-base w-full md:w-[75%] leading-[1.6]">
          Amplify your school with the most credible cloud-based management software
          to administer your school more efficiently by digitalising and automating 
          day-to-day academic and administrative activities and managing student's 
          progress through better parent-teacher communication.
        </p>
      </div>

      {/* Features Grid Area */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {modulesData.map((module, index) => {
            const Icon = module.icon;
            
            // Create an SEO friendly URL slug from the title
            const slug = module.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            
            const linkTo = module.title === "Academic Management" 
              ? "/academic-structure"
              : module.title === "Student Management"
              ? "/student-management"
              : module.title === "Teacher Management"
              ? "/teacher-management"
              : module.title === "Fees & Fine Management"
              ? "/fee-management"
              : module.title === "Admission & Enquiry"
              ? "/admission-and-enquiry"
              : module.title === "Result Management"
              ? "/result-management"
              : module.title === "HR & Payroll"
              ? "/hr-payroll"
              : module.title === "Library Management System"
              ? "/library-management"
              : module.title === "Transport Management System"
              ? "/transport-management"
              : module.title === "Communication"
              ? "/communication"
              : module.title === "Staff Management"
              ? "/staff-management"
              : module.title === "Child Management"
              ? "/child-management"
              : module.title === "Bulk Import"
              ? "/bulk-import"
              : module.title === "Inventory & Assets"
              ? "/inventory-management"
              : module.title === "Financial Ledger"
              ? "/financial-ledger"
            
              : `/modules/${slug}`;

            return (
              <div key={index} className="flex flex-col items-start group">
                {/* Clean, thin-line stroke black icon */}
                <div className="mb-5 text-[#111111]">
                  <Icon strokeWidth={1.5} size={36} />
                </div>
                
                {/* Feature Title */}
                <h3 className="text-[#111111] font-bold text-[18px] mb-3 leading-snug">
                  {module.title}
                </h3>
                
                {/* Description Text */}
                <p className="text-[#444444] text-[14px] leading-[1.5] mb-6 flex-grow">
                  {module.description}
                </p>
                
                {/* Call To Action Button */}
                <Link
                  to={linkTo}
                  className="inline-flex items-center gap-2 text-[#D32F2F] border border-[#D32F2F] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#D32F2F] hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllModules;
