import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export const AboutCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Kinetic High-Voltage Beam Pulse
      if (beamRef.current) {
        gsap.fromTo(
          beamRef.current,
          { xPercent: -100 },
          {
            xPercent: 100,
            duration: 2.8,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 1,
          }
        );
      }

      // 2. Main Scroll Trigger Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Card clips open from center
      tl.fromTo(
        cardRef.current,
        {
          clipPath: "inset(15% 10% 15% 10% round 16px)",
          opacity: 0,
          y: 30,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 12px)",
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        }
      )
        // Word mask slide up
        .fromTo(
          ".word-reveal",
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6"
        )
        // Description fade in
        .fromTo(
          ".cta-desc",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        // Buttons flip in
        .fromTo(
          ".cta-action-btn",
          { opacity: 0, scale: 0.85, rotateX: -30 },
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.8)",
          },
          "-=0.3"
        );

      // 3. Interactive Cursor Spotlight inside card
      const card = cardRef.current;
      const spotlight = spotlightRef.current;

      if (card && spotlight) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(spotlight, {
            x: x - 150,
            y: y - 150,
            duration: 0.3,
            ease: "power1.out",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f6f8fb] text-[#08111d] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-200/80"
    >
      {/* Background blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#08111d 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ================= ELECTRIC GRID CTA CONTAINER ================= */}
        <div
          ref={cardRef}
          className="relative bg-[#060e18] text-white rounded-xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-[0_25px_60px_rgba(6,14,24,0.4)] border border-white/10 group will-change-transform"
        >
          {/* Subtle Background Circuit Mesh */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #d97736 1px, transparent 1px), linear-gradient(to bottom, #d97736 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Mouse Follow Spotlight */}
          <div
            ref={spotlightRef}
            className="absolute w-[300px] h-[300px] bg-radial from-[#d97736]/20 via-[#d97736]/5 to-transparent rounded-full pointer-events-none blur-2xl top-0 left-0"
          />

          {/* Top Running Energy Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden">
            <div
              ref={beamRef}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#d97736] to-transparent shadow-[0_0_12px_#d97736]"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            
            {/* Left Narrative */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-[#d97736]/20 border border-[#d97736]/40 flex items-center justify-center text-[#d97736]">
                  <Zap className="w-3.5 h-3.5 fill-[#d97736]" />
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  The Platform
                </span>
              </div>

              {/* Masked Headline Reveal */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-white leading-[1.12] tracking-tight">
                <span className="block overflow-hidden py-0.5">
                  <span className="word-reveal block">
                    Explore what AnantGrid is
                  </span>
                </span>
                <span className="block overflow-hidden py-0.5">
                  <span className="word-reveal block font-normal italic text-[#d97736]">
                    building across India.
                  </span>
                </span>
              </h2>

              <p className="cta-desc mt-4 text-xs sm:text-sm lg:text-[15px] text-slate-300 font-light max-w-xl leading-relaxed">
                Discover our nationwide power transmission corridors and strategic infrastructure projects advancing India&apos;s clean energy transition.
              </p>
            </div>

            {/* Right Interactive Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to={"/business" as any}
                className="cta-action-btn relative inline-flex items-center gap-2.5 bg-[#d97736] hover:bg-[#c26526] text-white px-7 py-3.5 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,54,0.35)] hover:shadow-[0_6px_25px_rgba(217,119,54,0.5)] hover:-translate-y-0.5 group overflow-hidden"
              >
                <span>Our Business</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to={"/projects" as any}
                className="cta-action-btn inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-7 py-3.5 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>Our Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};