import { Star, Quote } from "lucide-react";

const testimonials = [
  { 
    name: "Sarah Jenkins", 
    role: "Principal",
    institution: "Lincoln High School",
    quote: "EduZager replaced 4 different tools we were using. The unified dashboard for parents and teachers has completely transformed our communication and trust metrics.",
    rating: 5
  },
  { 
    name: "Dr. Robert Chen", 
    role: "Director",
    institution: "Westside Academy",
    quote: "The automated fee collection and payroll modules alone save our admin team 20 hours a week. It is an indispensable operational asset for modern setups.",
    rating: 5
  },
  { 
    name: "Maria Garcia", 
    role: "IT Head",
    institution: "Global Prep Institute",
    quote: "Setting up a new academic year used to take weeks of database syncs. With the smart bulk data import system, it now takes just a single afternoon.",
    rating: 5
  }
];

const Testimonials = () => (
  <section className="py-24 px-6 bg-slate-50 w-full border-t border-b border-gray-100">
    <div className="max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <span className="text-xs tracking-widest text-indigo-600 font-bold uppercase bg-indigo-50 px-3 py-1 rounded-md inline-block">
          Case Studies & Reviews
        </span>
        <h2 className="text-3xl md:text-5xl  font-black text-black tracking-tight uppercase">
          Loved by Educators
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          See how EduZager is transforming campus management frameworks and workflow automation logs globally.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <div 
            key={i} 
            className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(198,40,40,0.04)] hover:border-red-100 transition-all duration-300 group"
          >
            <div>
              {/* Star Rating Matrix & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote size={24} className="text-gray-200 group-hover:text-red-100 transition-colors duration-300" />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </p>
            </div>

            {/* User Meta Meta-Data */}
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              {/* Premium Geometric Placeholder Avatar (Brand color scheme aligned) */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-100 flex items-center justify-center font-extrabold text-indigo-600 text-sm shrink-0 uppercase">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="overflow-hidden">
                <h4 className="font-bold text-gray-900 text-sm tracking-tight truncate">{testimonial.name}</h4>
                <p className="text-xs text-gray-500 font-medium truncate mt-0.5">
                  {testimonial.role} <span className="text-gray-300 mx-1">|</span> <span className="text-indigo-600 font-semibold">{testimonial.institution}</span>
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;