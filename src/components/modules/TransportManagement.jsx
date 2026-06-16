import TransportManagement from "../../assets/Transport management.png";
import { useState } from "react";
import {
  Bus,
  UserCog,
  Fuel,
  Route,
  BarChart3,
  FileText,
  MapPinned,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "vehicle",
    icon: <Bus size={22} strokeWidth={1.5} />,
    title: "Vehicle Management",
    description:
      "Manage school buses and transport vehicles with complete registration, capacity, model, and status tracking.",
    tags: [
      "Vehicle Registry",
      "Fleet Management",
      "Status Tracking",
    ],
  },

  {
    id: "driver",
    icon: <UserCog size={22} strokeWidth={1.5} />,
    title: "Driver Management",
    description:
      "Add, update, and assign drivers to vehicles while maintaining license records and contact information.",
    tags: [
      "Driver Profiles",
      "License Tracking",
      "Vehicle Assignment",
    ],
  },

  {
    id: "fuel",
    icon: <Fuel size={22} strokeWidth={1.5} />,
    title: "Fuel Management",
    description:
      "Record fuel purchases, track costs, monitor fuel consumption, and maintain vehicle expense history.",
    tags: [
      "Fuel Entries",
      "Cost Tracking",
      "Expense Monitoring",
    ],
  },

  {
    id: "trip",
    icon: <Route size={22} strokeWidth={1.5} />,
    title: "Trip Logs",
    description:
      "Log daily vehicle trips including routes, drivers, odometer readings, and travel notes.",
    tags: [
      "Trip Records",
      "Distance Tracking",
      "Route Monitoring",
    ],
  },

  {
    id: "analytics",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Transport Analytics",
    description:
      "Analyze fleet performance, fuel efficiency, travel distance, and transportation costs through interactive reports.",
    tags: [
      "Fleet Analytics",
      "Mileage Reports",
      "Performance Insights",
    ],
  },

  {
    id: "reports",
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Transport Reports",
    description:
      "Generate monthly and yearly transport reports including fuel costs, vehicle utilization, and mileage summaries.",
    tags: [
      "Monthly Reports",
      "Yearly Reports",
      "Cost Analysis",
    ],
  },

  {
    id: "tracking",
    icon: <MapPinned size={22} strokeWidth={1.5} />,
    title: "Fleet Monitoring",
    description:
      "Monitor vehicle status, assigned drivers, active trips, and transportation operations from a centralized dashboard.",
    tags: [
      "Fleet Overview",
      "Live Status",
      "Vehicle Tracking",
    ],
  },
];

const stats = [
  { to: 25, suffix: "+", label: "Total Vehicles" },
  { to: 45, suffix: "+", label: "Drivers Assigned" },
  { to: 12000, suffix: "+", label: "Trips Logged" },
  { to: 95, suffix: "%", label: "Fleet Efficiency" },
];

const workflow = [
  {
    step: "01",
    title: "Add Vehicle",
    desc: "Register vehicle and fleet details.",
  },
  {
    step: "02",
    title: "Assign Driver",
    desc: "Link drivers to transport vehicles.",
  },
  {
    step: "03",
    title: "Record Fuel",
    desc: "Track fuel expenses and usage.",
  },
  {
    step: "04",
    title: "Log Trips",
    desc: "Capture daily route activities.",
  },
  {
    step: "05",
    title: "Monitor Fleet",
    desc: "Track utilization and performance.",
  },
  {
    step: "06",
    title: "Generate Reports",
    desc: "Analyze costs and efficiency.",
  },
];

const benefits = [
  {
    title: "Centralized Fleet Management",
    desc: "Manage vehicles, drivers, routes, and transportation records from one dashboard.",
  },
  {
    title: "Fuel Cost Optimization",
    desc: "Track fuel usage and expenses to improve operational efficiency and reduce costs.",
  },
  {
    title: "Accurate Trip Tracking",
    desc: "Maintain complete records of daily trips, distances traveled, and vehicle utilization.",
  },
  {
    title: "Actionable Transport Insights",
    desc: "Monitor fleet performance, mileage, and transport costs through detailed analytics.",
  },
];

export default function TransportManagementModule() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
      <section className="w-full bg-white border-b border-slate-100">
        <img
          src={TransportManagement}
          alt="Transport Management Dashboard"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[660px] object-cover object-top block"
        />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#C62828]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-10 py-8 text-white ${
                i !== stats.length - 1 ? "border-r border-white/20" : ""
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
           Transport Management simplifies fleet operations, driver management, and transport analytics
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           The Transport Management module provides a centralized solution for managing school 
           vehicles, driver assignments, fuel expenses, trip logs, and transport analytics. From 
           registering vehicles and tracking fuel consumption to analyzing fleet performance and generating reports, 
           it helps institutions maintain safe, efficient, and cost-effective transportation operations.
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
           Smarter Transportation. Safer Journeys.
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
          <h2 className="text-3xl md:text-4xl font-bold text-black">
         From Fleet Management to Transport Analytics
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
    Streamline fleet operations, transportation tracking, and vehicle maintenance.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing school transportation manually can make it difficult to track
    vehicle usage, fuel expenses, driver assignments, and route performance.
    As transportation operations grow, maintaining accurate records becomes
    increasingly complex.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Transport Management module centralizes vehicle management, driver
    assignments, fuel tracking, trip logging, and transport analytics into
    one platform. This helps institutions improve operational efficiency,
    reduce transportation costs, and maintain complete fleet visibility.
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