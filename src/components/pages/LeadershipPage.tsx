import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "../PageHero";
import { leadership } from "@/data/content";
import { Linkedin, Award, ShieldCheck, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const LeadershipPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Executive cards entrance
gsap.fromTo(
  ".exec-card",
  { opacity: 0, y: 15 },
  {
    opacity: 1,
    y: 0,
    duration: 0.45,
    stagger: 0.06,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".exec-grid",
      start: "top 88%",
      toggleActions: "play none none none",
    },
  }
);

      // 2. Senior management cards stagger
gsap.fromTo(
  ".mgmt-card",
  { opacity: 0, y: 14 },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".mgmt-grid",
      start: "top 88%",
      toggleActions: "play none none none",
    },
  }
);

      // 3. Board of Directors entrance
gsap.fromTo(
  ".board-block",
  { opacity: 0, y: 15 },
  {
    opacity: 1,
    y: 0,
    duration: 0.45,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".board-block",
      start: "top 90%",
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
    <div ref={pageRef} className="bg-[#f8fafc] min-h-screen text-[#08111d]">
      
      {/* 01 — PAGE HERO */}
      <PageHero
        label="The Team"
        title="Leadership at AnantGrid"
        subtitle="Led by industry veterans with over 35 years of multi-disciplinary experience across Energy, Power Transmission, and Large-Scale Infrastructure."
        // image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Precision Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.028] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#08111d 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          {/* ================= 01. EXECUTIVE LEADERSHIP ================= */}
          <div className="mb-24">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#d97736]">
                Executive Leadership
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-[#08111d] mb-12">
              Steering India&apos;s grid infrastructure forward.
            </h2>

            <div className="exec-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              
              {/* ================= CEO CARD ================= */}
              <div className="exec-card group bg-white border border-slate-200/90 rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(8,17,29,0.03)] hover:shadow-[0_16px_40px_rgba(8,17,29,0.08)] hover:border-[#d97736]/40 transition-all duration-400">
                <div>
                  {/* Studio Portrait Chamber */}
                  <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#e2e8f0] to-[#edf2f7] flex items-end justify-center border-b border-slate-200/60">
                    
                    {/* Natural Ambient Studio Backlight */}
                    <div className="absolute w-56 h-56 bg-white/80 rounded-full blur-2xl top-10 pointer-events-none" />
                    
                    {/* Copper Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <img
                      src="/images/CEO.jpg"
                      alt={leadership.ceo.name}
                      className="relative z-10 max-h-[90%] w-auto object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Role Pill Badge */}
                    <div className="absolute bottom-3 left-4 z-20">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-[#08111d]/85 px-2.5 py-1 rounded-xs backdrop-blur-xs">
                        Executive Board
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pb-4">
                    <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#d97736] block mb-1">
                      Chief Executive Officer
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-light text-[#08111d] tracking-tight mb-3 group-hover:text-[#d97736] transition-colors">
                      {leadership.ceo.name}
                    </h3>

                    <div className="w-8 h-[1.5px] bg-[#d97736] mb-4 group-hover:w-12 transition-all duration-300" />

                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-light">
                      {leadership.ceo.bio}
                    </p>
                  </div>
                </div>

                <div className="mx-6 sm:mx-8 py-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">AnantGrid Executive</span>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-xs border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#08111d] hover:text-[#d97736] hover:border-[#08111d] transition-colors"
                    aria-label="CEO LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* ================= COO CARD ================= */}
              <div className="exec-card group bg-white border border-slate-200/90 rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(8,17,29,0.03)] hover:shadow-[0_16px_40px_rgba(8,17,29,0.08)] hover:border-[#d97736]/40 transition-all duration-400">
                <div>
                  {/* Studio Portrait Chamber */}
                  <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#e2e8f0] to-[#edf2f7] flex items-end justify-center border-b border-slate-200/60">
                    
                    {/* Natural Ambient Studio Backlight */}
                    <div className="absolute w-56 h-56 bg-white/80 rounded-full blur-2xl top-10 pointer-events-none" />
                    
                    {/* Copper Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <img
                      src="/images/COO.jpg"
                      alt={leadership.coo.name}
                      className="relative z-10 max-h-[90%] w-auto object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Role Pill Badge */}
                    <div className="absolute bottom-3 left-4 z-20">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-[#08111d]/85 px-2.5 py-1 rounded-xs backdrop-blur-xs">
                        Project Operations
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pb-4">
                    <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#d97736] block mb-1">
                      COO &amp; Head Projects
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-light text-[#08111d] tracking-tight mb-3 group-hover:text-[#d97736] transition-colors">
                      {leadership.coo.name}
                    </h3>

                    <div className="w-8 h-[1.5px] bg-[#d97736] mb-4 group-hover:w-12 transition-all duration-300" />

                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-light">
                      {leadership.coo.bio}
                    </p>
                  </div>
                </div>

                <div className="mx-6 sm:mx-8 py-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">AnantGrid Executive</span>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-xs border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#08111d] hover:text-[#d97736] hover:border-[#08111d] transition-colors"
                    aria-label="COO LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ================= 02. SENIOR MANAGEMENT ================= */}
          <div className="mb-24">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#d97736]">
                Operational Domain Leaders
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-[#08111d] mb-8">
              Senior Management
            </h3>

            <div className="mgmt-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {leadership.team.map((member, idx) => (
                <div
                  key={idx}
                  className="mgmt-card group relative bg-white border border-slate-200/90 rounded-sm p-6 sm:p-7 hover:border-[#d97736]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-[#08111d] group-hover:text-[#d97736] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d97736] mt-0.5">
                        {member.title}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-xs bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#08111d] shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-light">
                    <Award className="w-3.5 h-3.5 text-[#d97736]" />
                    <span>Over {member.experience} of sector experience.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= 03. BOARD OF DIRECTORS ================= */}
          <div className="board-block relative bg-[#08111d] text-white rounded-lg p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d97736]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#d97736]">
                  Institutional Governance
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-10 tracking-tight">
                Board of Directors
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {leadership.board.map((director, idx) => (
                  <div key={idx} className={`${idx !== 0 ? "pt-8 md:pt-0 md:pl-12" : ""}`}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                        {director.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400">Governance</span>
                    </div>

                    <p className="text-[#d97736] font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
                      {director.title}
                    </p>

                    <div className="w-8 h-[1px] bg-white/20 mb-4" />

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      {director.background}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#d97736]" />
                      <span>Fiduciary &amp; Strategic Oversight</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};