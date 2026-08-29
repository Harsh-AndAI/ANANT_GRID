import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { company } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 1. Divider line expand animation
      tl.fromTo(
        ".vm-divider-y",
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.55, ease: "power3.out" }
      )
        .fromTo(
          ".vm-divider-x",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.45, ease: "power3.out" },
          "-=0.5"
        )
        // 2. Main content blocks stagger
        .fromTo(
          ".vm-col-content",
          { opacity: 0, y: 35 },
          {
  opacity: 1,
  y: 0,
  duration: 0.55,
  stagger: 0.08,
  ease: "power3.out",
},
          "-=0.25"
        )
        // 3. Anchor image reveal
        .fromTo(
          ".vm-image-box",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        // 4. Bottom values pill stagger
        .fromTo(
          ".vm-value-item",
          { opacity: 0, x: -15 },
          {
  opacity: 1,
  x: 0,
  duration: 0.4,
  stagger: 0.05,
  ease: "power2.out",
},
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#08111d] text-white w-full lg:h-[calc(100vh-76px)] flex flex-col justify-between overflow-hidden"
    >
      {/* ================= TOP SECTION: EDITORIAL VISION & MISSION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 relative">
        
        {/* Left 4 cols: Purpose & Anchor Image */}
        <div className="lg:col-span-4 relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 bg-[#060e18]">
          <div className="vm-col-content">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1.5px] w-6 bg-[#d97736]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d97736]">
                Our Commitment
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Powering India’s <br />
              <span className="font-normal italic text-[#d97736]">
                tomorrow, today.
              </span>
            </h2>
          </div>

          {/* Infrastructure Image Anchor */}
          <div className="vm-image-box relative mt-6 h-36 sm:h-44 w-full overflow-hidden rounded border border-white/10 group cursor-pointer">
            <img
              src="/images/transmission-infrastructure.jpg"
              alt="Grid Transmission Network"
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e18] via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[10px] uppercase font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
              National Grid Target 2031
            </span>
          </div>

          {/* Vertical Border Right */}
          <div className="vm-divider-y hidden lg:block absolute top-0 right-0 bottom-0 w-[1px] bg-white/10" />
        </div>

        {/* Right 8 cols: Side-by-Side Clean Statements */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 relative">
          
          {/* THE VISION */}
          <div className="vm-col-content group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500">
            {/* Top Hover Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d97736] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d97736]">
                  01 / Vision
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white leading-[1.25] mb-6 group-hover:translate-x-1 transition-transform duration-300">
                To be the{" "}
                <span className="text-[#d97736] font-normal">
                  best-in-class grid infrastructure
                </span>{" "}
                provider, powering India’s growth sustainably.
              </h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light border-t border-white/5 pt-6 mt-6">
              Shaping a resilient network where green power reaches every industrial corridor and urban hub without disruption.
            </p>

            {/* Vertical Inner Divider */}
            <div className="vm-divider-y hidden md:block absolute top-0 right-0 bottom-0 w-[1px] bg-white/10" />
          </div>

          {/* THE MISSION */}
          <div className="vm-col-content group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500">
            {/* Top Hover Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d97736] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d97736]">
                  02 / Mission
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white leading-[1.25] mb-6 group-hover:translate-x-1 transition-transform duration-300">
                To build{" "}
                <span className="text-[#d97736] font-normal">
                  10,000 ckm grid infrastructure
                </span>{" "}
                by 2031, delivering on time, always.
              </h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light border-t border-white/5 pt-6 mt-6">
              Engineering with precision, strict safety standards, and robust project governance to anchor national energy transition.
            </p>
          </div>

        </div>

        {/* Horizontal Divider Bottom */}
        <div className="vm-divider-x absolute left-0 right-0 bottom-0 h-[1px] bg-white/10" />
      </div>

      {/* ================= BOTTOM BAR: INTEGRATED VALUES BAR ================= */}
      <div className="bg-[#050c14] px-8 sm:px-10 lg:px-12 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 shrink-0">
          Core Operating Values
        </span>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-8">
          {company.values.map((value, idx) => (
            <div
              key={idx}
              className="vm-value-item flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 group cursor-default transition-transform hover:-translate-y-0.5 duration-200"
            >
              <span className="text-[10px] font-mono text-[#d97736] opacity-70 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </span>
              <span className="font-light tracking-wide group-hover:text-white transition-colors">
                {value}
              </span>
              {idx !== company.values.length - 1 && (
                <span className="text-white/15 hidden lg:inline ml-4">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};