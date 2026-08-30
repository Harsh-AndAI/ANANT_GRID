import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const InstitutionalFoundation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= INITIAL STATES ================= */
gsap.set(".foundation-label", { opacity: 0, y: 8 });
gsap.set(".foundation-title", { opacity: 0, y: 18 });
gsap.set(".foundation-rule", {
  scaleX: 0,
  transformOrigin: "left",
});
gsap.set(".foundation-partner", { opacity: 0, x: -18 });
gsap.set(".foundation-description", { opacity: 0, x: 18 });

      /* ================= MAIN REVEAL ================= */
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 88%",
    toggleActions: "play none none none",
  },
});

tl.to(".foundation-label", {
  opacity: 1,
  y: 0,
  duration: 0.3,
  ease: "power2.out",
})
  .to(
    ".foundation-title",
    {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    },
    "-=0.12"
  )
  .to(
    ".foundation-rule",
    {
      scaleX: 1,
      duration: 0.4,
      ease: "power3.inOut",
    },
    "-=0.15"
  )
  .to(
    ".foundation-partner",
    {
      opacity: 1,
      x: 0,
      duration: 0.45,
      ease: "power3.out",
    },
    "-=0.12"
  )
  .to(
    ".foundation-description",
    {
      opacity: 1,
      x: 0,
      duration: 0.45,
      ease: "power3.out",
    },
    "-=0.25"
  );

      /* ================= PARTNER CARD HOVER ================= */
      const partnerCard = document.querySelector(".foundation-partner-card");
      if (partnerCard) {
        const card = partnerCard as HTMLElement;

        const handleEnter = () => {
          gsap.to(card, {
            y: -5,
            duration: 0.2,
            ease: "power3.out",
          });
          gsap.to(".foundation-card-arrow", {
            x: 4,
            y: -4,
            duration: 0.2,
            ease: "power3.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          });
          gsap.to(".foundation-card-arrow", {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      }
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
  className="relative bg-[#f4f6f8] text-brand-navy w-full h-auto lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 sm:py-16 lg:py-0 border-b border-slate-200/70"
>
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0b1726 1px, transparent 1px), linear-gradient(to bottom, #0b1726 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient Copper Glow */}
      <div className="absolute -top-32 -right-32 w-[380px] h-[380px] rounded-full bg-brand-copper/[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-between py-2 lg:py-4">
        
        {/* ================= TOP IDENTITY AREA ================= */}
        <div>
          <div className="foundation-label flex items-center gap-2.5 mb-2.5">
            <div className="h-[1.5px] w-8 bg-brand-copper" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-brand-copper">
              Institutional Foundation
            </span>
          </div>

          <h2 className="foundation-title text-2xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-light leading-[1.08] tracking-tight text-brand-navy max-w-5xl">
            Built on an institutional{" "}
            <span className="font-semibold italic text-brand-copper">
              infrastructure platform.
            </span>
          </h2>
        </div>

        {/* Structural Divider */}
        <div className="foundation-rule my-4 lg:my-6 h-px w-full bg-brand-navy/15" />

        {/* ================= FOUNDATION CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch">
          
          {/* LEFT — PARTNER CARD */}
          <div className="lg:col-span-7">
            <div className="foundation-partner foundation-partner-card relative min-h-[300px] lg:h-full bg-brand-navy text-white p-6 sm:p-8 lg:p-10 overflow-hidden border border-brand-navy rounded-sm transition-colors duration-500 flex flex-col justify-between shadow-lg">
              
              {/* NIIF Watermark */}
              <span className="absolute -right-4 -bottom-10 text-[140px] md:text-[180px] leading-none font-bold text-white/[0.035] pointer-events-none select-none">
                NIIF
              </span>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-20 h-[3px] bg-brand-copper" />

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-copper block mb-4">
                  Institutional Partner
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-snug max-w-xl">
                  National Investment and Infrastructure Fund
                </h3>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono">
                  Institutional platform
                </span>

                <ArrowUpRight className="foundation-card-arrow w-4 h-4 text-brand-copper" />
              </div>
            </div>
          </div>

          {/* RIGHT — EXPLANATION */}
          <div className="foundation-description lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-copper block mb-3">
                The Foundation
              </span>

              <p className="text-sm sm:text-base lg:text-[17px] text-brand-text-secondary leading-relaxed font-light">
                AnantGrid was incubated by NIIF as a dedicated power
                transmission platform, creating an institutional foundation
                for its focus on India&apos;s transmission infrastructure needs.
              </p>
            </div>

            {/* Bottom Statement */}
            <div className="mt-6 pt-5 border-t border-brand-navy/10">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-copper shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] font-bold text-brand-navy">
                    Platform Mandate
                  </span>
                  <span className="block mt-1 text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                    A dedicated platform focused on India&apos;s transmission infrastructure requirements.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ACCENT ================= */}
        <div className="mt-10 lg:mt-6 pt-4 lg:pt-3 border-t border-brand-navy/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-brand-copper" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-brand-text-secondary font-medium">
              Institutional infrastructure
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.25em] text-brand-text-secondary hidden md:block">
            AnantGrid Private Limited
          </span>
        </div>

      </div>
    </section>
  );
};