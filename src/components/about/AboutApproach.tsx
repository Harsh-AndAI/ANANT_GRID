import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Gauge, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Innovation",
    description:
      "Applying new approaches and thinking to the development of critical transmission infrastructure.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Execution Excellence",
    description:
      "Maintaining disciplined execution and high standards throughout infrastructure development and delivery.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Responsible Development",
    description:
      "Balancing infrastructure growth with strong standards of safety, environmental responsibility and long-term stakeholder value.",
    icon: ShieldCheck,
  },
];

export const AboutApproach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Line & Content Entrance
      gsap.fromTo(
        ".approach-line",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".approach-header > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Approach Cards Cascade with 3D Pop
      gsap.fromTo(
        ".approach-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Ambient Continuous Pulse on Active Rings
      gsap.to(".beacon-ring", {
        scale: 1.8,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
        stagger: 0.6,
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative bg-white text-[#08111d] w-full h-auto lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 sm:py-16 lg:py-0 border-b border-slate-100"
>
      {/* Precision Blueprint Dots Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#08111d 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Technical Crosshairs in Background */}
      <div className="absolute top-10 left-10 w-4 h-4 border-l border-t border-slate-300 opacity-60 pointer-events-none" />
      <div className="absolute top-10 right-10 w-4 h-4 border-r border-t border-slate-300 opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-l border-b border-slate-300 opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-r border-b border-slate-300 opacity-60 pointer-events-none" />

      {/* Ambient Copper Lighting */}
      <div className="absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full bg-[#d97736]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full bg-[#08111d]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="approach-header max-w-3xl mb-6 lg:mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="approach-line h-[1.5px] w-8 bg-[#d97736]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
              How We Operate
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-light text-[#08111d] leading-[1.12] tracking-tight">
            An approach built around{" "}
            <span className="font-normal italic text-[#d97736]">
              infrastructure excellence.
            </span>
          </h2>
        </div>

        {/* ================= PRINCIPLES INTERACTIVE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 items-stretch">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="approach-card group relative bg-[#fafbfd] border border-slate-200/90 rounded-sm p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-500 hover:bg-white hover:border-[#d97736]/40 hover:shadow-[0_16px_36px_rgba(8,17,29,0.06)] hover:-translate-y-1.5"
              >
                {/* Top Glowing Copper Edge */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(217,119,54,0.6)]" />

                {/* Corner Geometric Crosshair Accents */}
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Index with Pulse Beacon + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      {/* Animated Pulse Beacon */}
                      <div className="relative flex items-center justify-center w-2 h-2">
                        <div className="beacon-ring absolute w-2 h-2 rounded-full bg-[#d97736]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d97736]" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider text-[#d97736]">
                        {item.number}
                      </span>
                    </div>

                    {/* Interactive Icon Box with 3D Flip & Flare */}
                    <div className="w-10 h-10 rounded-sm border border-slate-200 bg-white flex items-center justify-center text-[#08111d] group-hover:bg-[#08111d] group-hover:text-white group-hover:border-[#08111d] group-hover:rotate-[6deg] group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <Icon className="w-4 h-4 text-[#d97736] group-hover:text-[#d97736] transition-colors stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title Box (Guarantees matching horizontal height across cards) */}
                  <div className="min-h-[56px] lg:min-h-[64px] flex items-center">
                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-light text-[#08111d] leading-snug group-hover:text-[#d97736] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Morphing Indicator Line */}
                  <div className="w-8 h-[1.5px] bg-slate-200 group-hover:w-14 group-hover:bg-[#d97736] transition-all duration-500 mb-4" />

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Accent Strip */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#d97736] transition-colors duration-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#d97736]/60 transition-colors duration-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#d97736]/30 transition-colors duration-300 rounded-full" />
                  </div>

                  {/* Subtle Expanding Line on Hover */}
                  <div className="h-[1px] w-6 group-hover:w-12 bg-slate-200 group-hover:bg-[#d97736] transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};