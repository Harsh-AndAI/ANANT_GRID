import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navigation } from "@/data/content";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#08111d]/95 backdrop-blur-md py-3.5 border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo light={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href as any}
              activeOptions={{ exact: item.href === "/" }}
              className="relative px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
              activeProps={{
                className: "text-[#d97736] font-semibold",
              }}
            >
              {({ isActive }) => (
                <span className="relative flex items-center">
                  <span>{item.name}</span>

                  {/* Active & Hover Underline Pill */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300",
                      isActive
                        ? "bg-[#d97736] opacity-100 shadow-[0_0_8px_rgba(217,119,54,0.6)]"
                        : "bg-white/30 opacity-0 group-hover:opacity-100 scale-x-75 group-hover:scale-x-100"
                    )}
                  />
                </span>
              )}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            to={"/contact" as any}
            className="ml-5 inline-flex items-center gap-2 bg-[#d97736] hover:bg-[#c36528] text-white px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#d97736]/20 group"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#d97736] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#08111d] border-b border-white/10 py-6 px-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href as any}
                activeOptions={{ exact: item.href === "/" }}
                className="flex items-center justify-between py-2 text-base font-medium text-slate-300 hover:text-white"
                activeProps={{
                  className: "text-[#d97736] font-semibold border-l-2 border-[#d97736] pl-3",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to={"/contact" as any}
              className="mt-3 flex items-center justify-center gap-2 bg-[#d97736] text-white py-3 rounded-sm text-sm font-semibold uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};