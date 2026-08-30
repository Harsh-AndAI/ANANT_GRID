import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "../PageHero";
import {
  MapPin,
  Zap,
  Network,
  Layers3,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Radio,
  Sliders,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const corridorDistricts = [
  {
    id: "01",
    name: "Vadodara",
    short: "VAD",
    role: "Origin Substation",
    tech: "765 kV GIS Substation & 2×240 MVAr Line Reactors",
    distance: "0 km (Origin)",
    status: "Terminal Interconnection",
    description: "Anchor interconnecting GIS terminal bay transferring bulk power into the central grid.",
  },
  {
    id: "02",
    name: "Anand",
    short: "AND",
    role: "Corridor Segment 1",
    tech: "765 kV D/C Hexa-Bundle Quad Conductor Corridor",
    distance: "+45 km",
    status: "Double Circuit Segment",
    description: "High-capacity overhead lines traversing the central agricultural & industrial corridor.",
  },
  {
    id: "03",
    name: "Kheda",
    short: "KHD",
    role: "Corridor Segment 2",
    tech: "Heavy-Duty River Crossing & Tower Foundation",
    distance: "+88 km",
    status: "Grid Interlink Corridor",
    description: "Reinforced engineering stretch engineered for high wind zones and soil load balancing.",
  },
  {
    id: "04",
    name: "Ahmedabad",
    short: "AMD",
    role: "Bypass Corridor",
    tech: "Urban Ring Bypass & Dynamic Transposition Bays",
    distance: "+142 km",
    status: "Regional Demand Corridor",
    description: "Strategic orbital transmission route bypassing dense metropolitan load areas.",
  },
  {
    id: "05",
    name: "Surendranagar",
    short: "SNR",
    role: "Gateway Sector",
    tech: "Saurashtra Gateway Grid Intertie & Surge Arresters",
    distance: "+205 km",
    status: "Renewable Feeder Corridor",
    description: "Critical transmission corridor interconnecting Western solar & wind generation clusters.",
  },
  {
    id: "06",
    name: "Halvad / Morbi",
    short: "MRB",
    role: "Endpoint Substation",
    tech: "765 kV GIS Switching Station & 2×330 MVAr Mid-Point Reactors",
    distance: "260 km (Terminal)",
    status: "Bulk Evacuation Hub",
    description: "Primary mid-point pooling terminal routing green energy from Kutch, Lakadia & Jamnagar.",
  },
];

const technicalScope = [
  {
    icon: Zap,
    tag: "Transmission",
    title: "765 kV Double Circuit Line",
    desc: "Lakadia–Vadodara 765 kV D/C line formed through the Vadodara–Halvad route and its interconnection with Lakadia.",
  },
  {
    icon: Network,
    tag: "Vadodara GIS End",
    title: "Line Bays & Reactors",
    desc: "Includes 2 × 765 kV line bays and 2 × 765 kV, 240 MVAr switchable line reactors for grid stabilization.",
  },
  {
    icon: Layers3,
    tag: "Halvad Bypass",
    title: "Mid-Point Reactors",
    desc: "Includes 2 × 765 kV, 330 MVAr switchable mid-point reactors, spare single-phase units, and terminal line bays.",
  },
  {
    icon: Network,
    tag: "Substation Scope",
    title: "South Olpad GIS Augmentation",
    desc: "Augmentation includes 1 × 1500 MVA, 765/400 kV ICT along with associated 765 kV & 400 kV ICT switch bays.",
  },
  {
    icon: Zap,
    tag: "Transformation",
    title: "1500 MVA Additional Capacity",
    desc: "Substation expansion provides 1500 MVA of active step-down transformation to power major industrial zones.",
  },
  {
    icon: Layers3,
    tag: "Project Scale",
    title: "520 ckm Transmission Grid",
    desc: "Executing approximately 520 ckm of ultra high-voltage transmission asset delivery across Gujarat.",
  },
];

export const ProjectsPage = () => {
  const [activeDistrict, setActiveDistrict] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Overview Section Animations
      gsap.fromTo(
        ".proj-ov-header > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proj-overview-frame",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".proj-main-card",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proj-overview-frame",
            start: "top 72%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Corridor Console Frame Animations
      const cTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".proj-corridor-frame",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      cTl.fromTo(
  ".proj-corridor-header > *",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }
)
        .fromTo(
  ".proj-district-btn",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
  "-=0.25"
)
        .fromTo(
  ".proj-telemetry-box",
  { opacity: 0, scale: 0.96 },
  { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
  "-=0.3"
);

      // Power Flow Line Pulse Continuous
      gsap.fromTo(
        ".signal-flow-beam",
        { xPercent: -100 },
        {
          xPercent: 300,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          repeatDelay: 0.4,
        }
      );

      // 3. Technical Scope Frame Animations
      const sTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".proj-scope-frame",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      sTl.fromTo(
  ".proj-scope-header > *",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }
).fromTo(
  ".proj-scope-card",
  { opacity: 0, y: 25, scale: 0.96 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    stagger: 0.06,
    ease: "power3.out",
  },
  "-=0.25"
);

      // 4. Closing Frame Animations
      gsap.fromTo(
        ".proj-closing-content > *",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proj-closing-frame",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, pageRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div
  ref={pageRef}
  className="bg-[#f8fafc] min-h-screen text-[#08111d] snap-y snap-proximity"
>
      
      {/* ============================================================
          01 — HERO (Single Viewport Lock)
      ============================================================ */}
      <PageHero
        label="Our Projects"
        title="Strengthening Gujarat's Grid"
        subtitle="A major 765 kV transmission infrastructure asset designed to strengthen power evacuation and support Gujarat's renewable energy transition."
        image="/images/transmission-project.jpg"
      />

      {/* ============================================================
          02 — FLAGSHIP OVERVIEW (Single Frame Viewport)
      ============================================================ */}
<section
  className="proj-overview-frame relative bg-white text-[#08111d] w-full min-h-[calc(100dvh-72px)] flex items-center overflow-hidden py-12 lg:py-16 border-b border-slate-200/70 snap-start"
  style={{
    scrollMarginTop: "72px",
  }}
>        
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#08111d 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center">
          
          {/* Header */}
          <div className="proj-ov-header mb-4 lg:mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Flagship Asset
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-light leading-[1.12] tracking-tight text-[#08111d]">
              Common Transmission System for{" "}
              <span className="font-normal italic text-[#d97736]">
                renewable power evacuation.
              </span>
            </h2>
          </div>

          {/* Main Card */}
          <div className="proj-main-card bg-white border border-slate-200/90 rounded-sm shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-4">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#d97736] font-bold text-xs uppercase tracking-[0.25em] mb-2.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Western Regional Corridor • Gujarat
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-[#08111d] leading-snug mb-3">
                  Evacuation of power from Lakadia, Jam Khambhaliya and Jamnagar – Part-A
                </h3>

                <div className="border-l-2 border-[#d97736] pl-3 mb-3">
                  <p className="text-xs sm:text-sm text-[#08111d] italic font-medium">
                    Reinforcing interstate reliability for 765 kV renewable grid corridors.
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-light">
                  The project establishes high-voltage pathways connecting western renewable generation
                  zones to regional demand clusters, enhancing stability across the National Grid.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-mono block">
                    Concession Status
                  </span>
                  <span className="text-xs font-semibold text-[#08111d]">
                    Under Active Development (TBCB Route)
                  </span>
                </div>
                <div className="w-8 h-8 rounded-sm bg-[#08111d] text-[#d97736] flex items-center justify-center">
                  <Network className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full bg-[#08111d] overflow-hidden">
              <img
                src="/images/transmission-project.jpg"
                alt="Transmission Infrastructure"
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111d]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d97736] font-mono font-bold block mb-0.5">
                  High-Voltage Grid Asset
                </span>
                <p className="text-white text-xs font-light">
                  765 kV Double Circuit Transmission Corridor
                </p>
              </div>
            </div>

          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-sm overflow-hidden">
            <div className="bg-[#fafbfd] p-3.5 sm:p-4">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                Territory
              </span>
              <span className="text-lg sm:text-xl font-light text-[#08111d]">Gujarat, India</span>
            </div>

            <div className="bg-[#fafbfd] p-3.5 sm:p-4">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                Circuit Length
              </span>
              <span className="text-lg sm:text-xl font-light text-[#08111d] font-mono">
                520 <span className="text-xs text-[#d97736]">ckm</span>
              </span>
            </div>

            <div className="bg-[#fafbfd] p-3.5 sm:p-4">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                Transformation
              </span>
              <span className="text-lg sm:text-xl font-light text-[#08111d] font-mono">
                1,500 <span className="text-xs text-[#d97736]">MVA</span>
              </span>
            </div>

            <div className="bg-[#fafbfd] p-3.5 sm:p-4">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                Voltage Class
              </span>
              <span className="text-lg sm:text-xl font-light text-[#08111d] font-mono">
                765 <span className="text-xs text-[#d97736]">kV D/C</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          03 — CORRIDOR ARCHITECTURE CONSOLE (Single Frame Viewport)
      ============================================================ */}
<section
  className="proj-corridor-frame relative bg-[#060e18] text-white w-full min-h-[calc(100dvh-72px)] flex items-center overflow-hidden py-12 lg:py-16 border-b border-white/10 snap-start"
  style={{
    scrollMarginTop: "72px",
  }}
>        
        {/* Precision Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#d97736]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center">
          
          {/* Header */}
          <div className="proj-corridor-header flex flex-col md:flex-row md:items-end justify-between mb-5 gap-3">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Corridor Architecture
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-light tracking-tight leading-tight">
                260 km Vadodara–Halvad{" "}
                <span className="font-normal italic text-[#d97736]">
                  Single-Line Architecture.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xs">
              <Radio className="w-3.5 h-3.5 text-[#d97736] animate-pulse" />
              <span className="text-[11px] font-mono text-slate-300">
                6 District Interconnection Points
              </span>
            </div>
          </div>

          {/* Interactive Console Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left: District Switcher with Animated Hover States */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
              {corridorDistricts.map((item, index) => {
                const isActive = activeDistrict === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveDistrict(index)}
                    onMouseEnter={() => setActiveDistrict(index)}
                    className={`proj-district-btn relative overflow-hidden w-full text-left px-4 py-3 rounded-sm border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? "bg-[#0c1b2f] border-[#d97736] shadow-lg shadow-[#d97736]/15 translate-x-1.5"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.06] hover:border-[#d97736]/50 hover:translate-x-1.5 hover:shadow-md"
                    }`}
                  >
                    {/* Top Laser Accent on Hover / Active */}
                    <div
                      className={`absolute top-0 left-0 h-[2px] bg-[#d97736] transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 group-hover:w-full opacity-75"
                      }`}
                    />

                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-7 h-7 rounded-xs font-mono text-xs flex items-center justify-center font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#d97736] text-white shadow-[0_0_10px_rgba(217,119,54,0.6)]"
                            : "bg-white/5 text-slate-400 group-hover:bg-[#d97736] group-hover:text-white group-hover:scale-105"
                        }`}
                      >
                        {item.id}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-xs sm:text-sm font-light transition-colors duration-200 ${
                              isActive
                                ? "text-white font-medium"
                                : "text-slate-200 group-hover:text-[#d97736]"
                            }`}
                          >
                            {item.name}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-300">
                            ({item.short})
                          </span>
                        </div>
                        <span className="text-[9px] text-slate-400 uppercase tracking-wider font-mono block">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#d97736] font-semibold hidden sm:block">
                        {item.distance}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive
                            ? "text-[#d97736] translate-x-1"
                            : "text-slate-500 group-hover:text-[#d97736] group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Technical Telemetry Display & Signal Bus */}
            <div className="proj-telemetry-box lg:col-span-7 bg-[#091524] border border-white/15 rounded-sm p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736]" />

              {/* 1. Signal Bus */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#d97736]">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>765 kV TRANSMISSION PIPELINE BUS</span>
                  </div>

                </div>

                {/* Linear Schematic Spine */}
                <div className="relative py-3 my-1">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                    <div className="signal-flow-beam absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#d97736] to-transparent shadow-[0_0_12px_#d97736]" />
                  </div>

                  {/* 6 Circuit Nodes */}
                  <div className="flex items-center justify-between relative -mt-3">
                    {corridorDistricts.map((node, idx) => {
                      const isSelected = activeDistrict === idx;

                      return (
                        <div
                          key={node.id}
                          onClick={() => setActiveDistrict(idx)}
                          className="flex flex-col items-center cursor-pointer group"
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-[#d97736] border-white shadow-[0_0_12px_#d97736] scale-125"
                                : "bg-[#060e18] border-white/40 group-hover:border-[#d97736]"
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-white" />
                          </div>
                          <span
                            className={`mt-1.5 text-[7.5px] font-mono uppercase tracking-wider transition-colors ${
                              isSelected ? "text-[#d97736] font-bold" : "text-slate-400"
                            }`}
                          >
                            {node.short}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 2. Active Node Detailed Telemetry */}
              <div className="mt-4 pt-4 border-t border-white/10 bg-white/[0.02] p-4 rounded border border-white/10">
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#d97736] block font-bold mb-0.5">
                      Sector Point 0{activeDistrict + 1} • {corridorDistricts[activeDistrict].role}
                    </span>
                    <h4 className="text-lg sm:text-xl font-light text-white">
                      {corridorDistricts[activeDistrict].name} Substation Intertie
                    </h4>
                  </div>

                  <div className="px-2.5 py-0.5 bg-[#d97736]/10 border border-[#d97736]/30 text-[#d97736] text-[9.5px] font-mono uppercase rounded-xs">
                    {corridorDistricts[activeDistrict].distance}
                  </div>
                </div>

                <p className="text-slate-300 text-xs font-light leading-relaxed mb-3">
                  {corridorDistricts[activeDistrict].description}
                </p>

                {/* Technical Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <Zap className="w-3 h-3 text-[#d97736] shrink-0" />
                    <span>765 kV Double Circuit</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d97736] shrink-0" />
                    <span>Substation Switchgear (GIS)</span>
                  </div>

                  <div className="sm:col-span-2 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Cpu className="w-3.5 h-3.5 text-[#d97736] shrink-0" />
                    <span className="truncate">{corridorDistricts[activeDistrict].tech}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d97736]" />
                  Central Gujarat Bulk Transmission Corridor
                </span>
                <span>Part-A Scheme</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          04 — TECHNICAL SCOPE (Single Frame Viewport with Laser Lines & Crosshairs)
      ============================================================ */}
      <section
  className="proj-scope-frame relative bg-white text-[#08111d] w-full min-h-[calc(100dvh-72px)] flex items-center overflow-hidden py-12 lg:py-16 border-b border-slate-200/70 snap-start"
  style={{
    scrollMarginTop: "72px",
  }}
>
        
        {/* Precision blueprint dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#08111d 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient subtle corner glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#d97736]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#08111d]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center">
          
          <div className="proj-scope-header mb-5 lg:mb-6">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Technical Scope
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-light text-[#08111d] leading-tight tracking-tight">
              Infrastructure engineered for{" "}
              <span className="font-normal italic text-[#d97736]">
                ultra high-voltage transfer.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-4 items-stretch">
            {technicalScope.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="proj-scope-card group relative bg-[#fafbfd] border border-slate-200/90 rounded-sm p-4 sm:p-5 hover:border-[#d97736]/50 hover:bg-white hover:shadow-[0_12px_28px_rgba(8,17,29,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Glowing Copper Edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(217,119,54,0.5)]" />

                  {/* Corner Geometric Crosshair Ticks */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Tag + 3D Tilting Icon Container */}
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/70">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d97736]" />
                        <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#d97736] font-bold">
                          {item.tag}
                        </span>
                      </div>

                      <div className="w-7 h-7 bg-white border border-slate-200 text-[#08111d] flex items-center justify-center rounded-xs shadow-xs group-hover:bg-[#08111d] group-hover:text-[#d97736] group-hover:border-[#08111d] group-hover:rotate-[6deg] group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-3.5 h-3.5 stroke-[1.75]" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-medium text-[#08111d] mb-1.5 group-hover:text-[#d97736] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Morphing Accent Line */}
                    <div className="w-5 h-[1.5px] bg-slate-200 group-hover:w-10 group-hover:bg-[#d97736] transition-all duration-300 mb-2" />

                    <p className="text-[11.5px] text-slate-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Technical Accent Strip */}
                  <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span>Verified Spec</span>
                    <span className="text-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity">765 kV Class</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
    05 — CLOSING / GRID CONNECTION
============================================================ */}
<section
  className="proj-closing-frame relative bg-[#08111d] text-white w-full min-h-[calc(100dvh-72px)] flex items-center overflow-hidden py-12 lg:py-16 snap-start"
  style={{
    scrollMarginTop: "72px",
  }}
>

  {/* Subtle blueprint grid */}
  <div
    className="absolute inset-0 opacity-[0.035] pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(to right, #ffffff 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
      `,
      backgroundSize: "70px 70px",
    }}
  />

  {/* Ambient glow */}
  <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-96 h-96 bg-[#d97736]/[0.07] rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

      {/* ======================================================
          LEFT — PROJECT STATEMENT
      ====================================================== */}
      <div className="proj-closing-content lg:col-span-6">

        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-[1.5px] w-8 bg-[#d97736]" />

          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
            Strengthening Gujarat&apos;s Grid
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-light leading-[1.08] tracking-tight mb-5">
          Infrastructure built to support the next phase of{" "}
          <span className="font-normal italic text-[#d97736]">
            renewable power growth.
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-xl mb-6">
          The project forms an integral link in the transmission network
          required to evacuate bulk renewable power from Gujarat&apos;s
          clean energy hubs directly to the National Grid.
        </p>

        <div className="flex items-center gap-3 pt-6 border-t border-white/10 max-w-xl">
          <span className="w-2 h-2 rounded-full bg-[#d97736]" />

          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-300">
            AnantGrid Project Platform • Part-A Concession
          </span>
        </div>

      </div>


      {/* ======================================================
          RIGHT — TRANSMISSION NETWORK VISUAL
      ====================================================== */}
      <div className="lg:col-span-6">

<div className="relative h-[320px] sm:h-[360px] lg:h-[400px] border border-white/10 bg-[#091524] overflow-hidden">
          {/* Top technical label */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">

            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-slate-400">
              Grid Connection
            </span>

            

          </div>


          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
            }}
          />


          {/* ==================================================
              CONNECTION DIAGRAM
          ================================================== */}
          <div className="absolute inset-x-8 sm:inset-x-12 top-1/2 -translate-y-1/2">

            {/* Horizontal transmission line */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/20" />

            {/* Animated energy beam */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] overflow-hidden">

              <div
                className="absolute top-0 left-0 h-full w-28 bg-gradient-to-r from-transparent via-[#d97736] to-transparent"
                style={{
                  animation: "signalMove 3s linear infinite",
                }}
              />

            </div>


            {/* Connection nodes */}
            <div className="relative flex items-center justify-between">

              {/* Node 01 */}
              <div className="flex flex-col items-center">

                <div className="relative w-10 h-10 rounded-full border border-[#d97736]/60 bg-[#091524] flex items-center justify-center">

                  <div className="w-3 h-3 rounded-full bg-[#d97736] shadow-[0_0_18px_rgba(217,119,54,0.8)]" />

                </div>

                <span className="mt-4 text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400">
                  Renewable
                </span>

                <span className="mt-1 text-xs text-white">
                  Generation
                </span>

              </div>


              {/* Node 02 */}
              <div className="flex flex-col items-center">

                <div className="relative w-10 h-10 rounded-full border border-white/30 bg-[#091524] flex items-center justify-center">

                  <div className="w-2 h-2 rounded-full bg-white/80" />

                </div>

                <span className="mt-4 text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400">
                  Transfer
                </span>

                <span className="mt-1 text-xs text-white">
                  Transmission
                </span>

              </div>


              {/* Node 03 */}
              <div className="flex flex-col items-center">

                <div className="relative w-10 h-10 rounded-full border border-[#d97736]/60 bg-[#091524] flex items-center justify-center">

                  <div className="w-3 h-3 rounded-full bg-[#d97736] shadow-[0_0_18px_rgba(217,119,54,0.8)]" />

                </div>

                <span className="mt-4 text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400">
                  Destination
                </span>

                <span className="mt-1 text-xs text-white">
                  National Grid
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              LOWER TECHNICAL STRIP
          ================================================== */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#08111d]/80 backdrop-blur-sm">

            <div className="grid grid-cols-3 divide-x divide-white/10">

              <div className="p-4 sm:p-5">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                  Network
                </span>

                <span className="text-xs font-mono text-slate-200">
                  Western Region
                </span>
              </div>


              <div className="p-4 sm:p-5">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                  System
                </span>

                <span className="text-xs font-mono text-slate-200">
                  Bulk Evacuation
                </span>
              </div>


              <div className="p-4 sm:p-5">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                  Platform
                </span>

                <span className="text-xs font-mono text-slate-200">
                  Part-A
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>


  {/* Small animation */}
  <style>{`
    @keyframes signalMove {
      0% {
        transform: translateX(-140px);
        opacity: 0;
      }

      15% {
        opacity: 1;
      }

      85% {
        opacity: 1;
      }

      100% {
        transform: translateX(650px);
        opacity: 0;
      }
    }
  `}</style>

</section>

    </div>
  );
};