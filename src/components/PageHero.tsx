import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export const PageHero = ({ label, title, subtitle, image }: PageHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Subtle background zoom drift
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2.2, ease: "power2.out" }
      );

      // 2. Content reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen max-h-screen flex flex-col justify-between overflow-hidden bg-[#08111d] text-white pt-20"
    >
      {/* Background Image Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Readability Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111d]/90 via-[#08111d]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08111d]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08111d] via-[#08111d]/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content (Vertically Centered) */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 my-auto py-6"
      >
        <div className="max-w-4xl">
          {/* Eyebrow / Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-[#d97736]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-[#d97736]">
              {label}
            </span>
          </div>

          {/* Heading (Increased size) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-light text-white leading-[1.06] tracking-tight drop-shadow-md mb-6">
            {title}
          </h1>

          {/* Subtitle (Increased size) */}
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed font-light max-w-2xl drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pb-6 flex flex-col items-center gap-2 shrink-0">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-[#d97736]" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-slate-400">
          Scroll Down
        </span>
      </div>
    </section>
  );
};