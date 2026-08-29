import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutParagraphs } from "@/data/content";
import { SectionLabel } from "../SectionLabel";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
gsap.fromTo(
  ".about-content > *",
  {
    opacity: 0,
    y: 30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  }
);

      gsap.fromTo(
  imageRef.current,
  {
    clipPath: "inset(100% 0% 0% 0%)",
    scale: 1.04,
  },
  {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    duration: 1.4,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: imageRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="about-content order-2 lg:order-1 lg:col-span-6">
            <SectionLabel>About AnantGrid</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-brand-navy mb-10 leading-[1.05] tracking-tight">
  Powering India's growth through
  <br />
  <span className="font-semibold italic text-brand-copper">
    reliable grid infrastructure.
  </span>
</h2>
            <div className="mb-10 max-w-xl">
  <p className="text-brand-text text-lg md:text-xl leading-relaxed">
    {aboutParagraphs[0]}
  </p>
</div>
            <Link
  to={"/about" as any}
  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-navy hover:text-brand-copper transition-colors group"
>
  Discover our story
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Link>
          </div>

          <div className="about-image-container order-1 lg:order-2 relative lg:col-span-6">
            <div ref={imageRef} className="aspect-[4/5] relative overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="/images/about-hero.jpg"
                alt="Transmission Infrastructure" 
                className="w-full h-full object-cover grayscale-[5%] hover:scale-[1.03] transition-transform duration-[1200ms]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Accent Elements */}
            <div className="absolute -top-5 -right-5 w-24 h-24 border border-brand-copper/30 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-brand-copper/30 -z-10" />
            
            <div className="absolute bottom-6 left-6 bg-brand-navy/95 backdrop-blur-sm p-6 md:p-7 text-white max-w-[220px] shadow-xl border-l-2 border-brand-copper">
              <p className="text-brand-copper font-bold text-4xl leading-none mb-2">10k</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 leading-tight">
                ckm grid infrastructure target by 2031
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
