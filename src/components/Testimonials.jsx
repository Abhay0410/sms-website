const testimonials = [
  { name: "Sarah Jenkins", role: "Principal, Lincoln High", quote: "EduZager replaced 4 different tools we were using. The unified dashboard for parents and teachers has completely transformed our communication." },
  { name: "Dr. Robert Chen", role: "Director, Westside Academy", quote: "The automated fee collection and payroll modules alone save our admin team 20 hours a week. It's an indispensable asset." },
  { name: "Maria Garcia", role: "IT Head, Global Prep", quote: "Setting up a new academic year used to take weeks. With the bulk import and automated promotions, it now takes an afternoon." }
];

const Testimonials = () => (
  <section className="py-12 px-6 w-full max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Loved by educators</h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how EduZager is transforming campus management globally.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
          <p className="text-slate-600 leading-relaxed mb-8">"{testimonial.quote}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">{testimonial.name.charAt(0)}</div>
            <div>
              <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
