import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

// ── Shared Logo (same as Navbar) ──
const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 select-none group">
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 29L3 22L16 15L29 22L16 29Z" fill="#ffffff" fillOpacity="0.08"/>
      <path d="M16 29L3 22L16 15L29 22L16 29Z" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.15" strokeLinejoin="round"/>
      <path d="M16 23L3 16L16 9L29 16L16 23Z" fill="#C62828" fillOpacity="0.45"/>
      <path d="M16 23L3 16L16 9L29 16L16 23Z" stroke="#C62828" strokeWidth="1.5" strokeOpacity="0.65" strokeLinejoin="round"/>
      <path d="M16 17L3 10L16 3L29 10L16 17Z" fill="#C62828"/>
      <path d="M16 17L3 10L16 3L29 10L16 17Z" stroke="#C62828" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M29 10V17" stroke="#C62828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-[22px] leading-none tracking-tight font-black text-white group-hover:opacity-90 transition-opacity">
      Edu<span className="text-[#C62828]">Zager</span>
    </span>
  </Link>
);

// ── All 15 modules ──
const modules = [
  { label: "Academic Management",  path: "/academic-structure"  },
  { label: "Student Management",   path: "/student-management"  },
  { label: "Teacher Management",   path: "/teacher-management"  },
  { label: "Fee Management",       path: "/fee-management"      },
  { label: "Admission & Enquiry",  path: "/admission"           },
  { label: "Result Management",    path: "/result-management"   },
  { label: "HR & Payroll",         path: "/hr-payroll"          },
  { label: "Library Management",   path: "/library"             },
  { label: "Transport Management", path: "/transport"           },
  { label: "Inventory & Assets",   path: "/inventory"           },
  { label: "Financial Ledger",     path: "/financial-ledger"    },
  { label: "Communication",        path: "/communication"       },
  { label: "Staff Management",     path: "/staff-management"    },
  { label: "Child Management",     path: "/child-management"    },
  { label: "Bulk Import",          path: "/bulk-import"         },
];

const product = [
  { label: "Features",    path: "/features"  },
  { label: "Pricing",     path: "/pricing"   },
  { label: "Security",    path: "/security"  },
  { label: "Changelog",   path: "/changelog" },
  { label: "Roadmap",     path: "/roadmap"   },
];

const company = [
  { label: "About Us",       path: "/about"          },
  { label: "Blog",           path: "/blog"           },
  { label: "Careers",        path: "/careers"        },
  { label: "Contact",        path: "/contact"        },
  { label: "Privacy Policy", path: "/privacy"        },
  { label: "Terms of Use",   path: "/terms"          },
];

const FooterCol = ({ heading, links }) => (
  <div>
    <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-5">
      {heading}
    </p>
    <ul className="flex flex-col gap-3">
      {links.map((l) => (
        <li key={l.path}>
          <Link
            to={l.path}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]">

      {/* ── TOP CTA BAND ── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-2">
              Get Started Today
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to modernise your institution?
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">
              Join hundreds of schools already running on EduZager. Free 30-day trial, no credit card needed.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <Link
              to="/register"
              className="flex items-center gap-1.5 bg-[#C62828] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a81f1f] transition-all"
            >
              Start Free Trial <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:border-white/40 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand col */}
        <div className="md:col-span-4">
          <Logo />
          <p className="text-sm text-gray-400 leading-relaxed mt-5 max-w-xs">
            The complete ERP for educational institutions — academics, administration, finance, and communication in one platform.
          </p>

          {/* Contact details */}
          <div className="mt-6 flex flex-col gap-3">
            <a href="mailto:hello@eduzager.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
              <Mail size={14} className="text-[#C62828] flex-shrink-0" />
              hello@eduzager.com
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
              <Phone size={14} className="text-[#C62828] flex-shrink-0" />
              +91 12345 67890
            </a>
            <span className="flex items-center gap-2.5 text-sm text-gray-400">
              <MapPin size={14} className="text-[#C62828] flex-shrink-0" />
              Durg, Chhattisgarh, India
            </span>
          </div>
        </div>

        {/* Modules — 2 col sub-grid */}
        <div className="md:col-span-4">
          <p className="text-xs tracking-widest text-[#C62828] font-semibold uppercase mb-5">
            Modules
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {modules.map((m) => (
              <Link
                key={m.path}
                to={m.path}
                className="text-sm text-gray-400 hover:text-white transition-colors leading-tight"
              >
                {m.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Product + Company */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <FooterCol heading="Product" links={product} />
          <FooterCol heading="Company" links={company} />
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} EduZager. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {[
              { label: "Twitter / X", href: "https://x.com" },
              { label: "LinkedIn",    href: "https://linkedin.com" },
              { label: "Instagram",   href: "https://instagram.com" },
              { label: "YouTube",     href: "https://youtube.com" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            <span className="text-xs text-gray-600">All systems operational</span>
          </div>
        </div>
      </div>

    </footer>
  );
}