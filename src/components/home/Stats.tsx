import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-brand-navy)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container-grid relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col group">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-brand-navy group-hover:text-brand-copper transition-colors duration-500">
                  {stat.value}
                </span>
                <span className="text-sm md:text-lg font-bold text-brand-copper ml-2 uppercase tracking-widest">
                  {stat.unit}
                </span>
              </div>
              <div className="h-[1px] w-full bg-brand-border/30 mb-4 group-hover:bg-brand-copper/30 transition-colors" />
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy mb-2">
                {stat.label}
              </h4>
              <p className="text-sm text-brand-text-secondary leading-relaxed opacity-100 transition-opacity duration-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
