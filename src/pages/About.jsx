import { Link } from 'react-router-dom';
import { Target, Zap, Shield, HeartHandshake, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C62828]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C62828] font-bold tracking-widest uppercase mb-4">About EduZager</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Empowering Schools to<br />Focus on Education
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We build unified, intelligent, and easy-to-use systems that eliminate administrative chaos so educators can do what they do best—teach.
          </p>
        </div>
      </section>

      {/* The Core Problem & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Problem With Traditional School Management
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Most schools today are juggling between 5 to 7 different disconnected tools. They use one software for attendance, another for fees, WhatsApp groups for messaging, and Excel sheets for result generation.
              </p>
              <p>
                This leads to endless manual data entry, data redundancy, costly errors, and complete administrative chaos. Teachers spend hours acting as clerks instead of focusing on student growth.
              </p>
            </div>
          </div>
          
          <div id="solution" className="bg-red-50 border border-red-100 p-8 sm:p-10 rounded-3xl relative scroll-mt-20">
            <div className="absolute -top-6 -left-6 bg-[#C62828] text-white p-4 rounded-2xl shadow-lg">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">
              The EduZager Solution
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
              EduZager replaces all those fragmented tools with one seamless, cloud-based ERP platform. Our core philosophy is simple:
            </p>
            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm">
              <p className="font-bold text-[#C62828] text-xl text-center leading-snug">
                "Everything connects, so you never enter data twice."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="our-values" className="py-20 bg-slate-50 border-t border-b border-slate-200 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg">The principles that guide every feature we build and every school we support.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} />,
                title: "Simplicity First",
                desc: "Software shouldn't require a manual. We design intuitive interfaces that staff, teachers, and parents can use instantly without steep learning curves."
              },
              {
                icon: <Shield size={28} />,
                title: "Enterprise-Grade Security",
                desc: "Student data is sensitive. We ensure complete data privacy, automated backups, and strict role-based access controls to keep your institution safe."
              },
              {
                icon: <HeartHandshake size={28} />,
                title: "Partners in Growth",
                desc: "We don't just sell software; we partner with schools. Our dedicated support team works with you to ensure smooth onboarding and continuous success."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-red-50 text-[#C62828] rounded-2xl flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#C62828]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to transform your school?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join 500+ educational institutions already using EduZager to streamline their daily operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-[#C62828] px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}