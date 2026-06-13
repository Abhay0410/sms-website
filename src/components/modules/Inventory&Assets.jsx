import InventoryAssets from "../../assets/Inventory & Assets.png";
import { useState } from "react";
import {
  Package,
  Boxes,
  ArrowRightLeft,
  RotateCcw,
  ShoppingCart,
  BarChart3,
  AlertTriangle,
  Search,
  Building2,
  ClipboardList,
} from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const features = [
  {
    id: "itemmaster",
    icon: <Package size={22} strokeWidth={1.5} />,
    title: "Item Master Management",
    description:
      "Create and maintain a centralized inventory catalog with item categories, stock levels, units, and asset classifications.",
    tags: [
      "Item Catalog",
      "Categories",
      "Stock Records",
    ],
  },

  {
    id: "inventory",
    icon: <Boxes size={22} strokeWidth={1.5} />,
    title: "Inventory Tracking",
    description:
      "Monitor inventory availability, stock movement, current usage, and resource utilization from a single dashboard.",
    tags: [
      "Stock Tracking",
      "Availability",
      "Inventory Control",
    ],
  },

  {
    id: "allocation",
    icon: <ArrowRightLeft size={22} strokeWidth={1.5} />,
    title: "Allocation & Issue Tracking",
    description:
      "Issue inventory items to classrooms, departments, staff, and facilities while maintaining complete allocation records.",
    tags: [
      "Asset Allocation",
      "Issue Tracking",
      "Resource Assignment",
    ],
  },

  {
    id: "returns",
    icon: <RotateCcw size={22} strokeWidth={1.5} />,
    title: "Returns & Damage Management",
    description:
      "Track returned items, damaged assets, and inventory recovery to maintain accurate stock records.",
    tags: [
      "Returns",
      "Damaged Assets",
      "Recovery Tracking",
    ],
  },

  {
    id: "purchase",
    icon: <ShoppingCart size={22} strokeWidth={1.5} />,
    title: "Stock Replenishment",
    description:
      "Manage inventory purchases and replenish stock directly from the inventory dashboard when levels are low.",
    tags: [
      "Purchasing",
      "Stock Refill",
      "Procurement",
    ],
  },

  {
    id: "reports",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Reports & Analytics",
    description:
      "Generate inventory reports, consumption summaries, asset utilization insights, and stock movement analytics.",
    tags: [
      "Consumption Reports",
      "Analytics",
      "Usage Trends",
    ],
  },

  {
    id: "lowstock",
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Low Stock Monitoring",
    description:
      "Receive automatic low-stock alerts and notifications to avoid shortages and maintain operational continuity.",
    tags: [
      "Low Stock Alerts",
      "Notifications",
      "Inventory Planning",
    ],
  },

  {
    id: "search",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Smart Search & Filtering",
    description:
      "Quickly find inventory items, allocations, issue logs, and reports using advanced filters and search tools.",
    tags: [
      "Search",
      "Filters",
      "Quick Access",
    ],
  },

  {
    id: "asset",
    icon: <Building2 size={22} strokeWidth={1.5} />,
    title: "Asset Lifecycle Management",
    description:
      "Track assets from procurement and allocation to maintenance, transfer, and retirement.",
    tags: [
      "Asset Lifecycle",
      "Maintenance",
      "Asset History",
    ],
  },

  {
    id: "audit",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    title: "Audit & Compliance",
    description:
      "Maintain complete audit trails for inventory movement, allocations, returns, and stock adjustments.",
    tags: [
      "Audit Logs",
      "Compliance",
      "Tracking History",
    ],
  },
];

const stats = [
  { to: 12000, suffix: "+", label: "Inventory Items" },
  { to: 3500, suffix: "+", label: "Assets Allocated" },
  { to: 98, suffix: "%", label: "Inventory Accuracy" },
  { to: 120, suffix: "+", label: "Low Stock Alerts" },
];

const workflow = [
  {
    step: "01",
    title: "Add Inventory",
    desc: "Create inventory items and assets.",
  },
  {
    step: "02",
    title: "Organize Categories",
    desc: "Assign categories and units.",
  },
  {
    step: "03",
    title: "Allocate Resources",
    desc: "Issue items to users or departments.",
  },
  {
    step: "04",
    title: "Track Usage",
    desc: "Monitor consumption and movement.",
  },
  {
    step: "05",
    title: "Manage Returns",
    desc: "Record returned and damaged assets.",
  },
  {
    step: "06",
    title: "Analyze Reports",
    desc: "Generate inventory insights.",
  },
];

const benefits = [
  {
    title: "Centralized Inventory Control",
    desc: "Manage all inventory items and institutional assets from a unified platform.",
  },
  {
    title: "Improved Asset Utilization",
    desc: "Track allocations and usage to maximize resource efficiency.",
  },
  {
    title: "Reduced Stock Shortages",
    desc: "Receive low-stock alerts and maintain optimal inventory levels.",
  },
  {
    title: "Data-Driven Procurement",
    desc: "Use consumption analytics and inventory reports to improve purchasing decisions.",
  },
];

export default function AcademicStructure() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="font-sans text-black bg-white">

      {/* ── HERO ── */}
      <section className="w-full bg-white border-b border-slate-100">
        <img
          src={InventoryAssets}
          alt="Academic Management Dashboard"
          className="w-full h-auto block"
        />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-red-500">
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
            Inventory & Assets Management centralizes resource tracking and utilization
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Inventory & Assets Management module provides a centralized solution for tracking inventory,
             managing institutional assets, monitoring stock levels, and controlling resource allocation.
              From item registration and asset assignment to low-stock alerts and consumption analytics
            , it helps institutions improve operational efficiency, reduce waste, and maintain complete
            inventory controlvisibility over their resources.
            </p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-6 md:px-24 py-16 border-b border-gray-100">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-3">
            Ten Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
           Track Every Asset. Optimize Every Resource.
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
           From Inventory Control to Asset Allocation & Analytics
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
    Gain complete visibility into inventory, assets, and resource utilization.
  </h2>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
    Managing inventory manually can lead to misplaced assets, stock shortages,
    duplicate purchases, and inefficient resource allocation. As institutions
    grow, maintaining accurate inventory records becomes increasingly difficult.
  </p>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
    The Inventory & Assets Management module centralizes inventory tracking,
    asset allocation, stock monitoring, and reporting into a single platform.
    Institutions can optimize resource utilization, reduce losses, and make
    informed procurement decisions through real-time visibility and analytics.
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