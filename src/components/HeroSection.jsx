// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 overflow-hidden">
//       <div className="grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT SECTION */}
//         <div>

//           <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
//             Your Complete
//             <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               School
//             </span>
//             <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Management
//             </span>
//             <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Platform
//             </span>
//           </h1>

//           <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
//             Manage admissions, attendance, fees, academics,
//             transport, parents and staff from a single dashboard.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <Link
//               to="/register"
//               className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all"
//             >
//               Start Free Trial
//             </Link>

//             <Link
//               to="/contact"
//               className="px-8 py-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 transition-all"
//             >
//               Book Demo
//             </Link>
//           </div>

//           <div className="mt-10 flex gap-8">
//             <div>
//               <h3 className="text-3xl font-black">500+</h3>
//               <p className="text-slate-500">Schools</p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-black">50K+</h3>
//               <p className="text-slate-500">Students</p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-black">99.9%</h3>
//               <p className="text-slate-500">Uptime</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="relative">

//           <div className="relative h-[650px] rounded-[32px] overflow-hidden border border-slate-200 bg-white shadow-2xl">

//             {/* VIDEO */}
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src="/videos/demo.mp4" type="video/mp4" />
//             </video>

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white/20 to-purple-50/70"></div>

//             {/* LIVE ERP */}
//             <div className="absolute top-8 right-8 bg-white rounded-full px-5 py-3 shadow-lg border border-slate-100">
//               <span className="text-emerald-500 mr-2">●</span>
//               <span className="font-semibold text-slate-700">
//                 Live ERP Sync
//               </span>
//             </div>

//             {/* STUDENTS CARD */}
//             <div className="absolute top-8 left-6 bg-white rounded-3xl shadow-2xl p-5 w-64">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
//                   🎓
//                 </div>

//                 <div>
//                   <h4 className="font-bold">Students Enrolled</h4>
//                   <p className="text-sm text-slate-500">
//                     Active this session
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 flex items-end gap-2">
//                 <span className="text-4xl font-black">2,845</span>
//                 <span className="text-emerald-600 font-semibold">
//                   +12%
//                 </span>
//               </div>

//               <div className="mt-3 h-2 bg-slate-100 rounded-full">
//                 <div className="h-2 w-[78%] bg-emerald-500 rounded-full"></div>
//               </div>
//             </div>

//             {/* SCHOOL OVERVIEW */}
//             <div className="absolute top-28 right-6 bg-white rounded-3xl shadow-xl p-6 w-80">
//               <h4 className="font-bold mb-4">
//                 School Overview
//               </h4>

//               <div className="grid grid-cols-2 gap-3">
//                 <div className="bg-indigo-50 rounded-2xl p-4">
//                   <p className="text-xs text-slate-500">
//                     Students
//                   </p>
//                   <h3 className="text-2xl font-black">
//                     2,845
//                   </h3>
//                 </div>

//                 <div className="bg-emerald-50 rounded-2xl p-4">
//                   <p className="text-xs text-slate-500">
//                     Teachers
//                   </p>
//                   <h3 className="text-2xl font-black">
//                     126
//                   </h3>
//                 </div>

//                 <div className="bg-orange-50 rounded-2xl p-4">
//                   <p className="text-xs text-slate-500">
//                     Classes
//                   </p>
//                   <h3 className="text-2xl font-black">
//                     54
//                   </h3>
//                 </div>

//                 <div className="bg-purple-50 rounded-2xl p-4">
//                   <p className="text-xs text-slate-500">
//                     Branches
//                   </p>
//                   <h3 className="text-2xl font-black">
//                     12
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* FEE COLLECTION */}
//             <div className="absolute left-6 bottom-36 bg-white rounded-3xl shadow-xl p-5 w-72">
//               <div className="flex justify-between mb-4">
//                 <h4 className="font-bold">
//                   Fee Collection
//                 </h4>

//                 <span className="text-emerald-600 font-semibold">
//                   +18%
//                 </span>
//               </div>

//               <div className="space-y-4">

//                 <div>
//                   <div className="flex justify-between text-sm">
//                     <span>January</span>
//                     <span>₹8.2L</span>
//                   </div>

//                   <div className="h-2 bg-slate-100 rounded-full mt-1">
//                     <div className="h-2 w-[85%] bg-indigo-600 rounded-full"></div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex justify-between text-sm">
//                     <span>February</span>
//                     <span>₹9.1L</span>
//                   </div>

//                   <div className="h-2 bg-slate-100 rounded-full mt-1">
//                     <div className="h-2 w-[92%] bg-emerald-500 rounded-full"></div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* ATTENDANCE */}
//             <div className="absolute bottom-8 right-6 bg-white rounded-3xl shadow-xl p-5 w-72">
//               <h4 className="font-bold">
//                 Today's Attendance
//               </h4>

//               <p className="text-sm text-slate-500 mb-4">
//                 Live classroom status
//               </p>

//               <div className="space-y-3">

//                 <div className="flex justify-between">
//                   <span>Class X-A</span>
//                   <span className="text-emerald-600 font-semibold">
//                     96%
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span>Class IX-B</span>
//                   <span className="text-amber-500 font-semibold">
//                     91%
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span>Class VIII-C</span>
//                   <span className="text-indigo-600 font-semibold">
//                     94%
//                   </span>
//                 </div>

//               </div>
//             </div>

//             {/* RECENT ACTIVITIES */}
//             <div className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-white rounded-3xl shadow-xl p-5 w-72">
//               <h4 className="font-bold mb-4">
//                 Recent Activities
//               </h4>

//               <div className="space-y-3 text-sm">

//                 <div className="flex gap-2 items-center">
//                   <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
//                   New Admission Added
//                 </div>

//                 <div className="flex gap-2 items-center">
//                   <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//                   Fee Payment Received
//                 </div>

//                 <div className="flex gap-2 items-center">
//                   <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//                   Transport Route Updated
//                 </div>

//                 <div className="flex gap-2 items-center">
//                   <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//                   Exam Schedule Published
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import HeroImg from "../../src/assets/HeroSectionImg.png";

// const HeroSection = () => {
//   return (
//  <section className="relative w-full min-h-screen overflow-hidden">

//       {/* Background Image */}
//       <img
//         src={HeroImg}
//         alt="Hero"
//         className="w-full h-[500px] object-contain object-center block"
    
//       />

//       {/* Overlay (optional dark effect) */}
     

//       {/* Content */}
      

//     </section>
//   );
// };

// export default HeroSection;

import HeroImg from "../../src/assets/HeroSectionImg.png";

const HeroSection = () => {
  return (
    <section className="relative  w-full overflow-hidden bg-white">
      <img
        src={HeroImg}
        alt="Hero"
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[400px]  object-cover object-center block"
      />

      {/* <img
  src={HeroImg}
  alt="Hero"
  className="w-full h-auto block"
/> */}
    </section>
  );
};

export default HeroSection;

