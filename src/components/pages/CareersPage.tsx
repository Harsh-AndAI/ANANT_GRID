import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "../PageHero";
import {
  ArrowRight,
  Brain,
  Handshake,
  ShieldCheck,
  Target,
  Users,
  Zap,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const culturePrinciples = [
  {
    number: "01",
    title: "Ownership",
    description:
      "Take responsibility, own outcomes and follow through on commitments.",
    icon: Target,
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "Maintain high standards while delivering critical infrastructure with discipline.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Work together, welcome ideas and solve complex challenges as a team.",
    icon: Users,
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "Operate with respect, responsibility and strong professional standards.",
    icon: ShieldCheck,
  },
];

const waysOfWorking = [
  {
    step: "01",
    word: "THINK",
    text: "Challenge the status quo and bring forward new ideas.",
    icon: Brain,
  },
  {
    step: "02",
    word: "OWN",
    text: "Take responsibility and stay accountable for outcomes.",
    icon: Target,
  },
  {
    step: "03",
    word: "TOGETHER",
    text: "Work collaboratively across teams and disciplines.",
    icon: Handshake,
  },
  {
    step: "04",
    word: "CARE",
    text: "Put people, safety and sustainability at the heart of work.",
    icon: HeartHandshake,
  },
  {
    step: "05",
    word: "DELIVER",
    text: "Consistently deliver with discipline and excellence.",
    icon: Zap,
  },
];

const impactAreas = [
  {
    number: "01",
    title: "Project Development",
    description:
      "Identify, structure and advance inter-state and intra-state transmission corridors, substations and high-voltage infrastructure projects.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Business Development & Bids",
    description:
      "Pursue transmission opportunities under the Government of India's Tariff Based Competitive Bidding framework.",
    icon: Target,
  },
  {
    number: "03",
    title: "Project Execution",
    description:
      "Manage end-to-end delivery of transmission assets in collaboration with engineering, procurement and construction partners.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Strategic Partnerships",
    description:
      "Build alliances with industry players to co-bid and co-develop large-scale transmission infrastructure.",
    icon: Handshake,
  },
];

export const CareersPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ============================================================
         01 — CULTURE INTRO
      ============================================================ */

      gsap.fromTo(
        ".career-culture-header > *",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-culture-section",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".culture-card",
        {
          opacity: 0,
          y: 25,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".culture-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         02 — HOW WE WORK
      ============================================================ */

      const workTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".career-work-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      workTimeline
        .fromTo(
          ".career-work-header > *",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".work-item",
          {
            opacity: 0,
            x: -18,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        );

      /* ============================================================
         03 — IMPACT AREAS
      ============================================================ */

      gsap.fromTo(
        ".career-impact-header > *",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-impact-section",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".impact-card",
        {
          opacity: 0,
          y: 25,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".impact-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         04 — GROWTH SECTION
      ============================================================ */

      gsap.fromTo(
        ".career-growth-content > *",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-growth-section",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".growth-item",
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".career-growth-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         05 — CLOSING CTA
      ============================================================ */

      gsap.fromTo(
        ".career-closing-content > *",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-closing-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         SUBTLE CONTINUOUS ACCENTS
      ============================================================ */

      gsap.to(".career-pulse", {
        scale: 1.8,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
        stagger: 0.4,
      });
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
      className="bg-[#f8fafc] min-h-screen text-[#08111d]"
    >
      {/* ============================================================
          01 — HERO
      ============================================================ */}

      <PageHero
        label="Careers at AnantGrid"
        title="Build the infrastructure behind India's energy transition."
        subtitle="Join a team focused on ownership, collaboration, continuous learning and excellence in delivering critical infrastructure."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ============================================================
          02 — OUR CULTURE
      ============================================================ */}

      <section className="career-culture-section relative bg-white py-20 lg:py-28 overflow-hidden border-b border-slate-200/70">
        {/* Blueprint Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#08111d 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#d97736]/[0.045] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="career-culture-header max-w-4xl mb-12 lg:mb-14">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Our Culture
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight">
              A workplace built around{" "}
              <span className="font-normal italic text-[#d97736]">
                people and responsibility.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base lg:text-[16px] text-slate-600 leading-relaxed max-w-2xl font-light">
              We believe that building critical infrastructure requires people
              who take responsibility, challenge the status quo, work together
              and consistently deliver on their commitments.
            </p>
          </div>

          <div className="culture-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {culturePrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="culture-card group relative bg-[#fafbfd] border border-slate-200/90 p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:bg-white hover:border-[#d97736]/50 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(8,17,29,0.07)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d97736] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />

                  <div className="flex items-center justify-between mb-7">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#d97736]">
                      {item.number}
                    </span>

                    <div className="relative w-9 h-9 border border-slate-200 bg-white flex items-center justify-center group-hover:bg-[#08111d] group-hover:border-[#08111d] transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#d97736]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-light mb-3 group-hover:text-[#d97736] transition-colors">
                    {item.title}
                  </h3>

                  <div className="w-7 h-[1.5px] bg-slate-200 group-hover:w-12 group-hover:bg-[#d97736] transition-all duration-300 mb-4" />

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="mt-7 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="career-pulse w-1.5 h-1.5 rounded-full bg-[#d97736]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    </div>

                    <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400">
                      Core Principle
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — HOW WE WORK
      ============================================================ */}

      <section className="career-work-section relative bg-[#060e18] text-white py-20 lg:py-28 overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#d97736]/[0.06] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="career-work-header mb-12">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                How We Work
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight max-w-4xl">
              A simple philosophy for{" "}
              <span className="font-normal italic text-[#d97736]">
                meaningful work.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-light">
              Ideas are welcomed, initiative is recognised and teamwork is
              celebrated while safety and sustainability remain central to how
              we work.
            </p>
          </div>

          <div className="border-y border-white/10">
            {waysOfWorking.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="work-item group grid grid-cols-[48px_1fr] sm:grid-cols-[64px_180px_1fr_auto] items-center gap-4 sm:gap-7 py-6 border-b border-white/10 last:border-b-0 hover:bg-white/[0.025] transition-colors duration-300"
                >
                  <span className="text-xs font-mono text-[#d97736]">
                    {item.step}
                  </span>

                  <div className="hidden sm:flex items-center gap-3">
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-[#d97736]/50 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-[#d97736]" />
                    </div>

                    <span className="text-xs font-mono tracking-[0.2em] text-white">
                      {item.word}
                    </span>
                  </div>

                  <div className="sm:hidden">
                    <span className="text-sm font-medium text-white">
                      {item.word}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {item.text}
                  </p>

                  <ArrowRight className="hidden sm:block w-4 h-4 text-slate-600 group-hover:text-[#d97736] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d97736]" />

            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-mono text-slate-500">
              Think boldly. Own outcomes. Work together. Care for people.
              Deliver with excellence.
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — WHERE YOU CAN MAKE AN IMPACT
      ============================================================ */}

      <section className="career-impact-section relative bg-[#f8fafc] py-20 lg:py-28 overflow-hidden border-b border-slate-200/70">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#08111d 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="career-impact-header mb-12">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Where You Can Make an Impact
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight max-w-4xl">
              Work across the full{" "}
              <span className="font-normal italic text-[#d97736]">
                transmission platform.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-light">
              AnantGrid's work spans project development, business development,
              execution oversight and strategic partnerships.
            </p>
          </div>

          <div className="impact-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="impact-card group relative bg-white border border-slate-200/90 p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:border-[#d97736]/50 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(8,17,29,0.07)]"
                >
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-[#d97736] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />

                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs font-mono text-[#d97736] font-bold">
                      {item.number}
                    </span>

                    <div className="w-10 h-10 border border-slate-200 flex items-center justify-center group-hover:bg-[#08111d] group-hover:border-[#08111d] transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#d97736]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-[#08111d] mb-3 group-hover:text-[#d97736] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="w-8 h-[1.5px] bg-slate-200 group-hover:w-14 group-hover:bg-[#d97736] transition-all duration-300 mb-4" />

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light max-w-xl">
                    {item.description}
                  </p>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-mono">
                      AnantGrid Platform
                    </span>

                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#d97736] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — GROWTH & LEARNING
      ============================================================ */}

      <section className="career-growth-section relative bg-white py-20 lg:py-28 overflow-hidden border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="career-growth-content lg:col-span-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />

                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Growth & Learning
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight">
                Grow while contributing to something{" "}
                <span className="font-normal italic text-[#d97736]">
                  bigger.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-light">
                AnantGrid places emphasis on continuous learning, professional
                growth and employee well-being, recognising that its people are
                its greatest strength.
              </p>

              <div className="mt-8 p-5 sm:p-6 bg-[#08111d] text-white border-l-2 border-[#d97736]">
                <p className="text-sm sm:text-base font-light leading-relaxed">
                  A supportive environment where people can grow while
                  contributing meaningfully to India's energy transition.
                </p>
              </div>
            </div>

            <div className="career-growth-grid lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
              <div className="growth-item bg-[#fafbfd] p-7 min-h-[150px]">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d97736] font-bold">
                  01
                </span>

                <h3 className="mt-4 text-lg font-light">
                  Continuous Learning
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  An environment that encourages learning and development.
                </p>
              </div>

              <div className="growth-item bg-[#fafbfd] p-7 min-h-[150px]">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d97736] font-bold">
                  02
                </span>

                <h3 className="mt-4 text-lg font-light">
                  Professional Growth
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Opportunities to develop while contributing to meaningful
                  infrastructure.
                </p>
              </div>

              <div className="growth-item bg-[#fafbfd] p-7 min-h-[150px]">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d97736] font-bold">
                  03
                </span>

                <h3 className="mt-4 text-lg font-light">
                  Employee Well-being
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  A workplace where people feel valued, respected and
                  supported.
                </p>
              </div>

              <div className="growth-item bg-[#fafbfd] p-7 min-h-[150px]">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d97736] font-bold">
                  04
                </span>

                <h3 className="mt-4 text-lg font-light">
                  Work-Life Balance
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Building a sustainable workplace alongside sustainable
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — JOIN ANANTGRID
      ============================================================ */}

      <section className="career-closing-section relative bg-[#08111d] text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-96 h-96 bg-[#d97736]/[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <div className="career-closing-content">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Join AnantGrid
              </span>

              <div className="h-[1.5px] w-8 bg-[#d97736]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-light leading-[1.08] tracking-tight">
              Build something that{" "}
              <span className="font-normal italic text-[#d97736]">
                matters.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
              Be part of a team building reliable, efficient and sustainable
              transmission infrastructure for India's evolving energy
              landscape.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-3">
              <Link
  to="/contact"
  className="inline-flex items-center gap-2.5 bg-[#d97736] hover:bg-[#c26526] text-white px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-[0_5px_20px_rgba(217,119,54,0.25)]"
>
  Connect With Us
  <ArrowRight className="w-4 h-4" />
</Link>

              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                careers@anantgrid.com
              </span>
            </div>

            <div className="mt-10 pt-5 border-t border-white/10 max-w-xl mx-auto">
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-mono">
                Sustainability • Integrity • Innovation • Delivery • Excellence
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};