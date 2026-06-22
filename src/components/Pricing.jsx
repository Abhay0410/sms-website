import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  Wallet,
  Bus,
  Library,
  HeartHandshake,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  CircleCheckBig
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' or 'yearly'
  const [viewMode, setViewMode] = useState('plans'); // 'plans' or 'custom'

  // Module categories with their features
  const moduleCategories = [
    {
      name: "Academic Core",
      icon: <GraduationCap size={20} />,
      modules: [
        { name: "Student Management", basePrice: 5000, description: "Complete student profiles, documents, history" },
        { name: "Class & Subject Management", basePrice: 3000, description: "Classes, sections, subjects, teacher mapping" },
        { name: "Timetable Management", basePrice: 4000, description: "Auto-generated clash-free schedules" },
        { name: "Attendance Management", basePrice: 3500, description: "Biometric, RFID, or manual attendance" },
        { name: "Result Management", basePrice: 4500, description: "Exam scheduling, grade entry, report cards" },
      ]
    },
    {
      name: "Finance & Fees",
      icon: <Wallet size={20} />,
      modules: [
        { name: "Fee Management", basePrice: 6000, description: "Fee structure, reminders, online collection" },
        { name: "Expense Tracking", basePrice: 4000, description: "Track all institutional expenses" },
        { name: "Payroll Management", basePrice: 5500, description: "Staff salary, PF, TDS calculations" },
        { name: "Financial Reports", basePrice: 3500, description: "Ledger, balance sheet, P&L statements" },
      ]
    },
    {
      name: "HR & Staff",
      icon: <Users size={20} />,
      modules: [
        { name: "Staff Management", basePrice: 4500, description: "Teacher & staff profiles, documents" },
        { name: "Leave Management", basePrice: 2500, description: "Leave application, approval, tracking" },
        { name: "Staff Attendance", basePrice: 3000, description: "Track staff check-in/check-out" },
        { name: "Recruitment", basePrice: 3500, description: "Job postings, applications, hiring pipeline" },
      ]
    },
    {
      name: "Transport",
      icon: <Bus size={20} />,
      modules: [
        { name: "Route Management", basePrice: 4000, description: "Route planning, stop management" },
        { name: "Vehicle Tracking", basePrice: 5000, description: "Live GPS tracking for parents" },
        { name: "Fuel & Maintenance", basePrice: 3000, description: "Fuel logs, vehicle maintenance records" },
        { name: "Driver Management", basePrice: 2500, description: "Driver profiles, license, attendance" },
      ]
    },
    {
      name: "Library",
      icon: <Library size={20} />,
      modules: [
        { name: "Catalog Management", basePrice: 4000, description: "Book cataloging, search, categories" },
        { name: "Issue/Return System", basePrice: 3500, description: "Barcode-based book circulation" },
        { name: "Fine Management", basePrice: 2000, description: "Auto-calculate overdue fines" },
        { name: "Digital Library", basePrice: 4500, description: "E-books, digital resources" },
      ]
    },
    {
      name: "Communication",
      icon: <Megaphone size={20} />,
      modules: [
        { name: "Announcements", basePrice: 2500, description: "School-wide notices and updates" },
        { name: "Messaging System", basePrice: 3500, description: "In-app chat between parents & teachers" },
        { name: "Email/SMS Gateway", basePrice: 4000, description: "Bulk emails and SMS notifications" },
        { name: "Emergency Alerts", basePrice: 3000, description: "Instant crisis communication" },
      ]
    },
    {
      name: "Parent Portal",
      icon: <HeartHandshake size={20} />,
      modules: [
        { name: "Student Progress", basePrice: 3500, description: "Real-time performance tracking" },
        { name: "Fee Payment Portal", basePrice: 4000, description: "Online fee payment for parents" },
        { name: "Leave Requests", basePrice: 2000, description: "Parent-initiated leave applications" },
        { name: "Feedback System", basePrice: 2500, description: "Parent surveys and feedback" },
      ]
    },
    {
      name: "Inventory & Assets",
      icon: <Briefcase size={20} />,
      modules: [
        { name: "Asset Tracking", basePrice: 3500, description: "Track all school assets" },
        { name: "Stock Management", basePrice: 3500, description: "Stationery, uniforms, supplies" },
        { name: "Vendor Management", basePrice: 3000, description: "Supplier information and orders" },
      ]
    }
  ];

  // Pre-built plans
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small schools and preschools",
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      students: "Up to 200",
      features: [
        "Student & Class Management",
        "Basic Attendance",
        "Fee Collection",
        "Parent Portal",
        "Email Support",
        "5GB Storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Complete solution for growing schools",
      monthlyPrice: 9999,
      yearlyPrice: 99990,
      students: "Up to 1000",
      features: [
        "All Starter Features",
        "Transport Management",
        "Library Management",
        "Result Management",
        "HR & Payroll",
        "Priority Support",
        "50GB Storage",
        "WhatsApp Integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Advanced solution for large institutions",
      monthlyPrice: 19999,
      yearlyPrice: 199990,
      students: "Unlimited",
      features: [
        "All Professional Features",
        "Custom Module Development",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Unlimited Storage",
        "On-Premise Option",
        "API Access",
        "SLA Guarantee"
      ],
      popular: false
    }
  ];

  // Custom plan builder state
  const [selectedModules, setSelectedModules] = useState([]);
  const [studentCount, setStudentCount] = useState(500);

  const toggleModule = (moduleName, modulePrice) => {
    setSelectedModules(prev => {
      const exists = prev.find(m => m.name === moduleName);
      if (exists) {
        return prev.filter(m => m.name !== moduleName);
      } else {
        return [...prev, { name: moduleName, price: modulePrice }];
      }
    });
  };

  const calculateCustomPrice = () => {
    const basePrice = studentCount <= 200 ? 5000 : studentCount <= 500 ? 8000 : studentCount <= 1000 ? 12000 : 18000;
    const modulesTotal = selectedModules.reduce((sum, m) => sum + m.price, 0);
    let total = basePrice + modulesTotal;
    
    if (billingCycle === 'yearly') {
      total = total * 10; // 2 months free on yearly
    }
    
    return total;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Simple, Transparent Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Pricing that grows<br />with your school
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              No hidden fees. No long-term contracts. Pay only for what you need.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-300'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-9 w-20 items-center rounded-full bg-indigo-600/50 backdrop-blur-sm transition-colors border border-indigo-600"
              >
                <motion.span
                  className="inline-block h-7 w-7 rounded-full bg-white shadow-lg"
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  animate={{ x: billingCycle === 'yearly' ? 42 : 4 }}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-300'}`}>
                  Yearly
                </span>
                <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Save 20%
                </span>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => setViewMode('plans')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  viewMode === 'plans' ? 'bg-white text-slate-900' : 'text-white hover:bg-white/20'
                }`}
              >
                Pre-built Plans
              </button>
              <button
                onClick={() => setViewMode('custom')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  viewMode === 'custom' ? 'bg-white text-slate-900' : 'text-white hover:bg-white/20'
                }`}
              >
                Build Your Own
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {viewMode === 'plans' ? (
            <motion.div id="plans"
              key="plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 ${
                      plan.popular ? 'border-indigo-600 shadow-2xl' : 'border-gray-200 hover:shadow-xl'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-2xl text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="p-8 pt-10">
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-500 mb-4">{plan.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-black text-gray-900">
                            ₹{billingCycle === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                          </span>
                          <span className="text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {billingCycle === 'monthly' ? 'Billed monthly' : `Billed ₹${plan.yearlyPrice.toLocaleString()} annually`}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-3 py-1">
                          <Users size={14} className="text-indigo-600" />
                          <span className="text-xs font-semibold text-indigo-600">{plan.students} Students</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to="/register"
                        className={`w-full block text-center py-3 rounded-xl font-bold transition-all ${
                          plan.popular
                            ? 'bg-indigo-600 text-white hover:bg-[#a81f1f] shadow-lg hover:shadow-indigo-600/25'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        Get Started <ArrowRight size={16} className="inline ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div id="custom-plan"
              key="custom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Module Selection */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-3xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Modules</h2>
                    <p className="text-gray-500 mb-6">Select the features your school needs</p>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Students
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="50"
                          max="5000"
                          step="50"
                          value={studentCount}
                          onChange={(e) => setStudentCount(parseInt(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <span className="font-bold text-indigo-600 min-w-[80px]">{studentCount} students</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                      {moduleCategories.map((category) => (
                        <div key={category.name}>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="text-indigo-600">{category.icon}</div>
                            <h3 className="font-bold text-gray-800">{category.name}</h3>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {category.modules.map((module) => (
                              <button
                                key={module.name}
                                onClick={() => toggleModule(module.name, module.basePrice)}
                                className={`text-left p-3 rounded-xl border transition-all ${
                                  selectedModules.find(m => m.name === module.name)
                                    ? 'border-indigo-600 bg-red-50 ring-2 ring-red-100'
                                    : 'border-gray-200 hover:border-indigo-600/50 hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="font-semibold text-gray-900 text-sm">{module.name}</div>
                                    <div className="text-xs text-gray-500 mt-1">{module.description}</div>
                                  </div>
                                  {selectedModules.find(m => m.name === module.name) && (
                                    <CircleCheckBig size={18} className="text-indigo-600 shrink-0" />
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Price Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-slate-900 rounded-3xl shadow-xl p-8 sticky top-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Your Custom Plan</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Base Price ({studentCount} students)</span>
                        <span className="font-semibold">
                          ₹{studentCount <= 200 ? 5000 : studentCount <= 500 ? 8000 : studentCount <= 1000 ? 12000 : 18000}
                        </span>
                      </div>
                      
                      {selectedModules.map((module) => (
                        <div key={module.name} className="flex justify-between text-sm">
                          <span className="text-slate-300">{module.name}</span>
                          <span className="font-semibold">₹{module.price}</span>
                        </div>
                      ))}
                      
                      <div className="border-t border-slate-700 my-4 pt-4">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>₹{calculateCustomPrice().toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">
                          {billingCycle === 'yearly' ? 'Billed annually (2 months free)' : 'Billed monthly'}
                        </p>
                      </div>
                    </div>
                    
                    <Link
                      to="/register"
                      className="w-full block text-center py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-[#a81f1f] transition-all"
                    >
                      Get This Plan <ArrowRight size={16} className="inline ml-1" />
                    </Link>
                    
                    <p className="text-xs text-slate-400 text-center mt-4">
                      Need help? <span className="underline cursor-pointer">Contact our team</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-gray-50 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle." },
              { q: "Is there a setup fee?", a: "No setup fees for Standard and Professional plans. Enterprise plans may have a one-time setup fee for custom integrations." },
              { q: "Do you offer discounts for long-term commitments?", a: "Yes, yearly plans come with 2 months free (20% discount). Multi-year contracts available for Enterprise." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, UPI, net banking, and bank transfers." },
              { q: "Is there a free trial?", a: "Yes, all plans come with a 14-day free trial. No credit card required." },
              { q: "Can I get a custom quote?", a: "Absolutely! Contact our sales team for institutions with 5000+ students." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your school?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Join 500+ schools already using EduZager
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Start Free Trial
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Pricing;