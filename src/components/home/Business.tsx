import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { segments } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Network,
  Zap,
  ShieldCheck,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  Network,
  Zap,
  ShieldCheck,
  Users,
};

export const Business = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let st: ScrollTrigger | undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");
      if (!cards.length || !pinRef.current) return;

      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { yPercent: 0, scale: 1, opacity: 1, zIndex: 10 });
        } else {
          gsap.set(card, {
            yPercent: 125,
            scale: 0.94,
            opacity: 0,
            zIndex: 10 + i,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76px",
          end: `+=${segments.length * 90}%`,
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 0.7,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(
              segments.length - 1,
              Math.floor(self.progress * segments.length)
            );
            setActiveIndex(step);
          },
        },
      });

      st = tl.scrollTrigger;

      cards.forEach((card, i) => {
        if (i > 0) {
          tl.to(
            card,
            {
              yPercent: 0,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
            },
            `step-${i}`
          );

          tl.to(
            cards[i - 1],
            {
              scale: 0.94 - i * 0.02,
              yPercent: -3,
              opacity: 0.25,
              ease: "power2.out",
              duration: 1,
            },
            `step-${i}`
          );
        }
      });
    }, sectionRef);

    return () => {
      if (st) st.kill(true);
      ctx.revert();
    };
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative bg-[#08111d] text-white w-full overflow-hidden"
>
      {/* Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="relative z-10 w-full h-[calc(100vh-76px)] flex flex-col justify-start overflow-hidden"
      >
        {/* Background Image Layer — full width, no padding */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/transmission-infrastructure.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#08111d]/20" />
        </div>

        {/* Content wrapper — this now holds the max-width + padding */}
        <div className="relative z-10 w-full h-full flex flex-col justify-start pt-3 pb-4 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto box-border">

        {/* ================= COMPACT HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-2.5 shrink-0 gap-2">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <div className="h-[1.5px] w-5 bg-[#d97736]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d97736]">
                Our Business
              </span>
            </div>
            <h2 className="text-base sm:text-xl lg:text-2xl font-light text-slate-100 max-w-2xl leading-snug">
              Developing transmission corridors, substations and{" "}
              <span className="italic font-normal text-[#d97736]">
                high-voltage infrastructure.
              </span>
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto mb-0.5">
            <span className="text-xs font-mono text-slate-400">
              {String(activeIndex + 1).padStart(2, "0")} / {String(segments.length).padStart(2, "0")}
            </span>
            <div className="flex gap-1.5">
              {segments.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-5 bg-[#d97736]" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= STACKED CARDS STAGE ================= */}
        <div className="relative flex-1 mt-3 mb-2 max-h-[360px] lg:max-h-[380px] flex items-center justify-center">
          {segments.map((segment, index) => {
            const IconComponent =
              icons[segment.icon as keyof typeof icons] || Network;

            return (
              <div
                key={segment.id || index}
                className="stacked-card absolute inset-0 bg-[#0d1c2e] border border-white/10 rounded-lg p-6 sm:p-7 lg:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden will-change-transform"
              >
                {/* Giant Numeric Watermark */}
                <span className="absolute -top-3 right-6 text-[90px] sm:text-[120px] lg:text-[140px] font-extrabold text-white/[0.035] select-none pointer-events-none leading-none tracking-tighter">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Card Top / Body */}
                <div className="relative z-10 max-w-2xl">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded bg-[#d97736]/15 border border-[#d97736]/30 flex items-center justify-center text-[#d97736]">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d97736]">
                      Capability 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl lg:text-2xl font-light text-white leading-tight mb-2">
                    {segment.title}
                  </h3>

                  <div className="w-8 h-[1.5px] bg-[#d97736] mb-2.5" />

                  <p className="text-slate-300 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-light">
                    {segment.description}
                  </p>
                </div>

                {/* Card Bottom / Action */}
                <div className="relative z-10 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Transmission & Grid Management
                  </span>

                  <Link
                    to={"/business" as any}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-[#d97736]/15 border border-white/10 hover:border-[#d97736]/40 text-xs font-medium text-slate-200 hover:text-[#d97736] transition-all duration-200 group"
                  >
                    <span>Explore our business</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d97736] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        </div>
      </div>
    </section>
  );
};