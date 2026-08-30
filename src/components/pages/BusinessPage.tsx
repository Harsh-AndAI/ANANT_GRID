import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  Handshake,
  Network,
  Target,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    tag: "Origination & Structure",
    title: "Power Transmission Project Development",
    description:
      "Identifying, structuring and advancing interstate and intrastate transmission corridors, substations and high-voltage infrastructure opportunities.",
    icon: Network,
  },
  {
    number: "02",
    tag: "TBCB Framework",
    title: "Business Development & Bid Management",
    description:
      "Pursuing transmission opportunities and managing the commercial and strategic requirements associated with competitive bidding.",
    icon: Target,
  },
  {
    number: "03",
    tag: "Execution Rigor",
    title: "Project Management & Execution Oversight",
    description:
      "Providing structured oversight across project delivery and coordinating with EPC partners through the development and execution lifecycle.",
    icon: Building2,
  },
  {
    number: "04",
    tag: "Consortia & Alliances",
    title: "Strategic Partnerships & Joint Development",
    description:
      "Working with strategic partners through co-bidding and joint development opportunities for large-scale transmission infrastructure.",
    icon: Handshake,
  },
];

export const BusinessPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const metricCkmRef = useRef<HTMLSpanElement>(null);
  const metricMvaRef = useRef<HTMLSpanElement>(null);
  const ctaBoxRef = useRef<HTMLDivElement>(null);
  const ctaSpotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /*
      ============================================================
      DESKTOP / TABLET ANIMATION SYSTEM (>= 1024px)
      ============================================================
      */
      mm.add("(min-width: 1024px)", () => {
        // 01. HERO
        gsap.fromTo(
          ".biz-hero-bg",
          { scale: 1.08 },
          { scale: 1, duration: 2, ease: "power2.out" }
        );

        gsap.fromTo(
          ".biz-hero-content > *",
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.15,
          }
        );

        gsap.to(".biz-hero-bg", {
          yPercent: 12,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: ".biz-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // 02. BUSINESS PLATFORM
        const overviewTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".biz-overview-section",
            start: "top 80%",
            end: "top 35%",
            scrub: 0.8,
          },
        });

        overviewTl
          .fromTo(
            ".biz-overview-left > *",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.12, ease: "power2.out" }
          )
          .fromTo(
            ".biz-overview-line",
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, ease: "power2.inOut" },
            "-=0.25"
          )
          .fromTo(
            ".biz-overview-card",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.15, ease: "power2.out" },
            "-=0.25"
          );

        // 03. CORE CAPABILITIES
        gsap.fromTo(
          ".biz-capabilities-header > *",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-capabilities-section",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          ".biz-cap-card",
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-capabilities-section",
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 04. OPERATING MODEL
        const operatingTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".biz-model-section",
            start: "top 75%",
            end: "top 30%",
            scrub: 0.9,
          },
        });

        operatingTl
          .fromTo(
            ".biz-model-header > *",
            { opacity: 0, x: -45 },
            { opacity: 1, x: 0, stagger: 0.1, ease: "power2.out" }
          )
          .fromTo(
            ".biz-model-card",
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.15, ease: "power3.out" },
            "-=0.2"
          )
          .fromTo(
            ".biz-model-pipe",
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, ease: "power2.inOut" },
            "-=0.25"
          );

        // 05. INFRASTRUCTURE SCALE
        const scaleTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".biz-scale-section",
            start: "top 75%",
            end: "top 30%",
            scrub: 0.8,
          },
        });

        scaleTl
          .fromTo(
            ".biz-scale-content > *",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, stagger: 0.1, ease: "power3.out" }
          )
          .fromTo(
            ".biz-scale-visual",
            { opacity: 0, x: 45, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, ease: "power3.out" },
            "-=0.3"
          );

        // 06. COUNTERS
        const ckmCounter = { value: 0 };
        const mvaCounter = { value: 0 };

        gsap.to(ckmCounter, {
          value: 520,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".biz-scale-section",
            start: "top 65%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (metricCkmRef.current) {
              metricCkmRef.current.innerText = Math.floor(
                ckmCounter.value
              ).toString();
            }
          },
        });

        gsap.to(mvaCounter, {
          value: 1500,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".biz-scale-section",
            start: "top 65%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (metricMvaRef.current) {
              metricMvaRef.current.innerText = Math.floor(
                mvaCounter.value
              ).toLocaleString();
            }
          },
        });

        // 07. CTA
        gsap.fromTo(
          ctaBoxRef.current,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-cta-section",
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /*
      ============================================================
      MOBILE ANIMATION SYSTEM (< 1024px)
      ============================================================
      */
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          ".biz-hero-content > *",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }
        );

        gsap.fromTo(
          ".biz-overview-left > *, .biz-overview-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-overview-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".biz-cap-card",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-capabilities-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".biz-model-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-model-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".biz-scale-content > *, .biz-scale-visual",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".biz-scale-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Immediate counters on mobile
        if (metricCkmRef.current) metricCkmRef.current.innerText = "520";
        if (metricMvaRef.current) metricMvaRef.current.innerText = "1,500";
      });

      // Continuous Pulse Signal & Beam
      gsap.fromTo(
        ".biz-pipe-beam",
        { xPercent: -120 },
        {
          xPercent: 350,
          duration: 2.8,
          repeat: -1,
          repeatDelay: 0.5,
          ease: "none",
        }
      );
    }, pageRef);

    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="bg-[#f8fafc] min-h-screen text-[#08111d] overflow-x-hidden">
      
      {/* =========================================================
          01. HERO (Responsive Single Frame)
      ========================================================= */}
      <section className="biz-hero-section relative w-full min-h-[100svh] lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-[#08111d] text-white pt-24 pb-8 lg:pt-20 lg:pb-6 border-b border-white/10">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/business.jpg"
            alt="Transmission Grid"
            className="biz-hero-bg w-full h-full object-cover object-center will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08111d]/95 via-[#08111d]/80 to-[#08111d]/50 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08111d]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08111d] via-[#08111d]/50 to-transparent pointer-events-none" />
        </div>

        {/* Ambient Warm Glow */}
        <div className="absolute top-1/3 left-6 w-72 lg:w-96 h-72 lg:h-96 bg-[#d97736]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content */}
        <div className="biz-hero-content relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 my-auto py-4 lg:py-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="h-[2px] w-8 lg:w-10 bg-[#d97736]" />
              <span className="text-[11px] sm:text-xs lg:text-sm uppercase tracking-[0.3em] font-bold text-[#d97736]">
                What We Do
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-[76px] font-light text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 lg:mb-6">
              Building the platform behind{" "}
              <span className="font-normal italic text-[#d97736]">
                India&apos;s transmission infrastructure.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-xl text-slate-200/90 leading-relaxed font-light max-w-2xl">
              AnantGrid operates across the development, bidding, execution, and
              partnership stages of large-scale power transmission infrastructure.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="biz-scroll-indicator relative z-10 flex flex-col items-center gap-1.5 shrink-0">
          <div className="w-px h-6 lg:h-8 bg-gradient-to-b from-transparent via-white/40 to-[#d97736]" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-slate-400">
            Scroll Down
          </span>
        </div>
      </section>

      {/* =========================================================
          02. BUSINESS PLATFORM (Responsive Single Frame)
      ========================================================= */}
      <section className="biz-overview-section relative bg-white text-[#08111d] w-full min-h-[100svh] lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 lg:py-0 border-b border-slate-200/70">
        
        {/* Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#08111d 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            
            {/* Left Header */}
            <div className="biz-overview-left lg:col-span-5">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Business Platform
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-light leading-[1.14] tracking-tight mb-4">
                From opportunity to{" "}
                <span className="font-normal italic text-[#d97736]">
                  operating asset.
                </span>
              </h2>

              <div className="p-3.5 sm:p-4 rounded-sm bg-gradient-to-r from-[#f8fafc] to-white border border-slate-200/90 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded bg-[#d97736]/10 text-[#d97736] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-700 font-medium leading-snug">
                  End-to-End Concession &amp; Lifecycle Management
                </span>
              </div>
            </div>

            {/* Right Narrative & Focus Blocks */}
            <div className="biz-overview-right lg:col-span-7 flex flex-col justify-between">
              <p className="text-slate-600 text-xs sm:text-base lg:text-[17px] leading-relaxed font-light mb-5">
                AnantGrid was established as a dedicated platform for transmission
                projects in India, bringing together project development, business
                development, execution oversight, and strategic partnerships within
                one unified operating framework.
              </p>

              <div className="biz-overview-line h-px bg-slate-200 w-full mb-5 hidden sm:block" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                {/* Focus Area Card */}
                <div className="biz-overview-card group p-4 sm:p-5 rounded-sm bg-[#fafbfd] border border-slate-200/80 hover:bg-white hover:border-[#d97736]/40 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="block text-[9.5px] uppercase tracking-[0.25em] font-bold text-[#d97736] font-mono">
                      Focus Area
                    </span>
                    <Activity className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#d97736] transition-colors" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#08111d] mb-1 group-hover:text-[#d97736] transition-colors">
                    Large-Scale Transmission
                  </h4>
                  <p className="text-[11.5px] sm:text-xs text-slate-500 font-light leading-relaxed">
                    High-voltage interstate &amp; intrastate power evacuation networks.
                  </p>
                </div>

                {/* Platform Scope Card */}
                <div className="biz-overview-card group p-4 sm:p-5 rounded-sm bg-[#fafbfd] border border-slate-200/80 hover:bg-white hover:border-[#d97736]/40 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="block text-[9.5px] uppercase tracking-[0.25em] font-bold text-[#d97736] font-mono">
                      Platform Scope
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#d97736] transition-colors" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#08111d] mb-1 group-hover:text-[#d97736] transition-colors">
                    Integrated Operations
                  </h4>
                  <p className="text-[11.5px] sm:text-xs text-slate-500 font-light leading-relaxed">
                    Turnkey development, competitive bidding, execution, and partnerships.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          03. FOUR CORE CAPABILITIES (Responsive Grid)
      ========================================================= */}
      <section className="biz-capabilities-section relative bg-[#f8fafc] text-[#08111d] w-full min-h-[100svh] lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 lg:py-0 border-b border-slate-200/70">
        
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center my-auto">
          
          {/* Header */}
          <div className="biz-capabilities-header flex flex-col md:flex-row md:items-end justify-between mb-5 lg:mb-8 gap-2.5">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Core Capabilities
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-light leading-[1.12] tracking-tight">
                Four capabilities supporting the{" "}
                <span className="font-normal italic text-[#d97736]">
                  transmission platform.
                </span>
              </h2>
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 hidden md:block">
              Integrated Model
            </span>
          </div>

          {/* 4 Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-5 items-stretch">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="biz-cap-card group relative bg-white border border-slate-200/90 rounded-sm p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#d97736]/40 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(217,119,54,0.5)]" />

                  <div>
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="relative flex items-center justify-center w-2 h-2">
                          <div className="beacon-cap-ring absolute w-2 h-2 rounded-full bg-[#d97736]" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d97736]" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#d97736]">
                          {item.number}
                        </span>
                        <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-semibold text-slate-400 ml-1">
                          {item.tag}
                        </span>
                      </div>

                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-[#08111d] group-hover:bg-[#08111d] group-hover:text-white group-hover:border-[#08111d] group-hover:rotate-[6deg] group-hover:scale-105 transition-all duration-300 shadow-xs">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d97736] stroke-[1.75]" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[#08111d] leading-snug mb-1.5 group-hover:text-[#d97736] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          04. OPERATING MODEL (Responsive Single Frame)
      ========================================================= */}
      <section className="biz-model-section relative bg-[#08111d] text-white w-full min-h-[100svh] lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 lg:py-0 border-b border-white/10">
        
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute top-1/2 -right-24 w-72 lg:w-96 h-72 lg:h-96 bg-[#d97736]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Left Header */}
            <div className="biz-model-header lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Operating Model
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-light leading-[1.12] tracking-tight mb-3">
                An institutional model for{" "}
                <span className="font-normal italic text-[#d97736]">
                  transmission development.
                </span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                Ring-fenced institutional structuring connecting sovereign-backed capital with turnkey project delivery.
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d97736] border border-[#d97736]/30 px-3 py-1.5 rounded-xs bg-[#d97736]/5">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span>SPV Lifecycle Governance</span>
              </div>
            </div>

            {/* Right 3-Stage Model Stack */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4">
                
                {/* 01 NIIF */}
                <div className="biz-model-card group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d97736]/50 p-4 sm:p-5 rounded-sm flex flex-col justify-between transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <span className="text-[10px] font-mono font-bold text-[#d97736] uppercase tracking-wider">
                        01 — Capital
                      </span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#d97736] group-hover:bg-[#d97736]/10 transition-colors">
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base lg:text-lg font-light text-white mb-1 group-hover:text-[#d97736] transition-colors">
                      NIIF Master Fund
                    </h3>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Anchor institutional platform providing equity commitment and tier-1 risk governance.
                    </p>
                  </div>
                </div>

                {/* 02 SPV */}
                <div className="biz-model-card group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d97736]/50 p-4 sm:p-5 rounded-sm flex flex-col justify-between transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <span className="text-[10px] font-mono font-bold text-[#d97736] uppercase tracking-wider">
                        02 — Vehicle
                      </span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#d97736] group-hover:bg-[#d97736]/10 transition-colors">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base lg:text-lg font-light text-white mb-1 group-hover:text-[#d97736] transition-colors">
                      Project SPV
                    </h3>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Dedicated statutory concession entity responsible for financing and physical asset execution.
                    </p>
                  </div>
                </div>

                {/* 03 AnantGrid */}
                <div className="biz-model-card group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d97736]/50 p-4 sm:p-5 rounded-sm flex flex-col justify-between transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <span className="text-[10px] font-mono font-bold text-[#d97736] uppercase tracking-wider">
                        03 — Operations
                      </span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#d97736] group-hover:bg-[#d97736]/10 transition-colors">
                        <Network className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base lg:text-lg font-light text-white mb-1 group-hover:text-[#d97736] transition-colors">
                      AnantGrid
                    </h3>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Expert platform appointed for long-term transmission asset management, operations, and grid uptime.
                    </p>
                  </div>
                </div>

              </div>

              {/* Connecting Pipeline */}
              <div className="biz-model-pipe mt-5 h-[2px] bg-white/10 relative hidden md:block overflow-hidden">
                <div className="biz-pipe-beam absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#d97736] to-transparent shadow-[0_0_10px_#d97736]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          05. INFRASTRUCTURE SCALE (Responsive Single Frame)
      ========================================================= */}
      <section className="biz-scale-section relative bg-white text-[#08111d] w-full min-h-[100svh] lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 lg:py-0 border-b border-slate-200/70">
        
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="biz-scale-content lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Infrastructure Scale
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-light leading-[1.14] tracking-tight mb-3">
                Developing infrastructure at{" "}
                <span className="font-normal italic text-[#d97736]">
                  transmission scale.
                </span>
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-light mb-4 sm:mb-6">
                The Gujarat transmission development demonstrates the technical rigor of
                the platform, executing large-scale high-voltage corridors designed for bulk renewable evacuation.
              </p>

              <Link
                to={"/projects" as any}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#08111d] hover:text-[#d97736] transition-colors group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 text-[#d97736] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Right Visual & Metric Strips */}
            <div className="biz-scale-visual lg:col-span-7 flex flex-col">
              <div className="relative overflow-hidden rounded-t-sm bg-[#08111d] aspect-[16/9] max-h-[220px] sm:max-h-[300px]">
                <img
                  src="/images/transmission-project.jpg"
                  alt="Gujarat Transmission"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111d] via-[#08111d]/30 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                  <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#d97736] font-mono font-bold block mb-0.5">
                    Gujarat Transmission Grid
                  </span>
                  <p className="text-white text-xs sm:text-sm font-light">
                    Lakadia, Jam Khambhaliya &amp; Jamnagar Evacuation Corridor
                  </p>
                </div>
              </div>

              {/* Stat Blocks */}
              <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-b-sm overflow-hidden">
                <div className="bg-[#f8fafc] p-3.5 sm:p-5 flex flex-col">
                  <span
                    ref={metricCkmRef}
                    className="text-2xl sm:text-4xl lg:text-5xl font-light font-mono text-[#08111d] leading-none"
                  >
                    520
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mt-1.5 sm:mt-2">
                    ckm transmission length
                  </span>
                </div>

                <div className="bg-[#f8fafc] p-3.5 sm:p-5 flex flex-col">
                  <span
                    ref={metricMvaRef}
                    className="text-2xl sm:text-4xl lg:text-5xl font-light font-mono text-[#08111d] leading-none"
                  >
                    1,500
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mt-1.5 sm:mt-2">
                    MVA additional capacity
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          06. STRATEGIC PARTNERSHIPS CTA (Responsive Single Frame)
      ========================================================= */}
      <section className="biz-cta-section relative w-full min-h-[100svh] lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 lg:py-0 bg-[#f8fafc] border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10 w-full my-auto">
          
          <div
            ref={ctaBoxRef}
            className="relative bg-[#060e18] text-white rounded-lg p-6 sm:p-12 lg:p-14 overflow-hidden shadow-[0_20px_50px_rgba(6,14,24,0.35)] border border-white/10 group"
          >
            {/* Interactive Spotlight */}
            <div
              ref={ctaSpotlightRef}
              className="absolute w-[300px] h-[300px] bg-radial from-[#d97736]/20 via-[#d97736]/5 to-transparent rounded-full pointer-events-none blur-2xl top-0 left-0 hidden lg:block"
            />

            {/* Mesh pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #d97736 1px, transparent 1px), linear-gradient(to bottom, #d97736 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#d97736] via-[#d97736]/60 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              
              <div className="flex items-center gap-2 mb-2.5">
                <div className="h-[1.5px] w-6 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-semibold text-[#d97736] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#d97736] animate-pulse" />
                  Strategic Partnerships
                </span>
                <div className="h-[1.5px] w-6 bg-[#d97736]" />
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-3 sm:mb-4">
                Building the next generation of{" "}
                <span className="font-normal italic text-[#d97736]">
                  transmission infrastructure.
                </span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-xl mb-6 sm:mb-8">
                Explore opportunities to collaborate on large-scale transmission infrastructure
                development, co-bidding, and consortium alliances.
              </p>

              <Link
                to={"/contact" as any}
                className="inline-flex items-center gap-2.5 bg-[#d97736] hover:bg-[#c4682b] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xs text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#d97736]/25 hover:-translate-y-0.5 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};