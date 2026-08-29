import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navigation, company } from "@/data/content";
import { Mail, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Logo light className="mb-6" />
            <p className="text-brand-text-secondary text-sm leading-relaxed mb-8 max-w-xs">
              {company.tagline}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-brand-copper font-bold mb-2">
              Promoted by
            </p>
            <p className="text-xs text-brand-text-secondary">
              National Investment and Infrastructure Fund (NIIF)
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Explore</h4>
            <ul className="flex flex-col gap-4">
              {navigation.slice(1).map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href as any} 
                    className="text-brand-text-secondary hover:text-brand-copper transition-colors text-sm flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Business Segments</h4>
            <ul className="flex flex-col gap-4">
              {["Power Transmission Project Development", "Business Development and Bid Management", "Project Management and Execution Oversight", "Strategic Partnerships and Joint Development"].map((item) => (
                <li key={item}>
                  <Link to={"/business" as any} className="text-brand-text-secondary hover:text-brand-copper transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-copper shrink-0" />
                <span className="text-brand-text-secondary text-sm leading-relaxed">
                  AnantGrid Private Limited<br />
                  Registered Office, India
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-copper shrink-0" />
                <a href="mailto:info@anantgrid.com" className="text-brand-text-secondary hover:text-brand-copper transition-colors text-sm">
                  info@anantgrid.com
                </a>
              </li>
              <li className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-copper hover:text-brand-copper transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-copper hover:text-brand-copper transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-text-secondary text-xs">
            © {new Date().getFullYear()} AnantGrid Private Limited. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to={"/privacy" as any} className="text-brand-text-secondary hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to={"/terms" as any} className="text-brand-text-secondary hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
