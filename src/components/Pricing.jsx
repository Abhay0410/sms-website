import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CheckIcon = ({ highlighted }) => (
  <svg 
    className={`w-5 h-5 mr-3 shrink-0 ${highlighted ? 'text-indigo-300' : 'text-indigo-600'}`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  // Pricing tiers mapped to your SuperAdmin backend plan structures
  const plans = [
    {
      name: "Basic",
      description: "Perfect for small schools just getting started.",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "Up to 500 Students",
        "Core Modules (Attendance, Fees)",
        "5GB Cloud Storage",
        "Basic Email Support",
        "1 Admin Account"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      description: "Everything you need to automate a growing campus.",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "Up to 2,000 Students",
        "Advanced Modules (Transport, Payroll, Inventory)",
        "20GB Cloud Storage",
        "Priority 24/7 Support",
        "Parent & Student Portals"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Advanced security and custom workflows for large institutions.",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        "Unlimited Students",
        "All Modules + Custom Integrations",
        "Unlimited Cloud Storage",
        "Dedicated Account Manager",
        "On-premise deployment option"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="py-12 px-6 w-full max-w-7xl mx-auto">
      {/* Header & Toggle */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          No hidden fees. No surprise charges. Choose the plan that best fits your institution's size and operational needs.
        </p>

        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <motion.span
              className="inline-block h-6 w-6 transform rounded-full bg-white shadow-sm"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              initial={false}
              animate={{ x: isYearly ? 34 : 4 }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Yearly</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-0.5 rounded-full">Save 20%</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`relative flex flex-col p-8 rounded-[2rem] border transition-transform duration-300 ${
              plan.highlighted 
                ? 'bg-slate-900 text-white border-slate-900 shadow-2xl md:scale-105 z-10 py-12' 
                : 'bg-white text-slate-900 border-slate-200 shadow-xl'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-md">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-3 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                {typeof plan.monthlyPrice === 'number' ? (
                  <>
                    <span className="text-5xl font-black tracking-tight">₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                    <span className={`text-lg font-medium ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>
                  </>
                ) : (
                  <span className="text-5xl font-black tracking-tight">{plan.monthlyPrice}</span>
                )}
              </div>
              {typeof plan.monthlyPrice === 'number' && (
                <p className={`text-sm mt-3 font-medium h-5 ${plan.highlighted ? 'text-indigo-300' : 'text-slate-400'}`}>
                  {isYearly ? `Billed ₹${plan.yearlyPrice * 12} annually` : "Billed monthly"}
                </p>
              )}
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon highlighted={plan.highlighted} />
                  <span className={`text-sm font-semibold ${plan.highlighted ? 'text-slate-100' : 'text-slate-700'}`}>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/register"
              className={`w-full text-center py-4 rounded-xl font-bold text-lg transition-all ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/30'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}