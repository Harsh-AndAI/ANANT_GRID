import { useEffect, useRef } from "react";
import gsap from "gsap";
import { company } from "@/data/content";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lineOneRef = useRef<HTMLSpanElement>(null);
  const lineTwoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    // Background entrance
    gsap.fromTo(
      bgRef.current,
      {
        scale: 1.08,
      },
      {
        scale: 1,
        duration: 2,
        ease: "power2.out",
      }
    );

    // Subtle continuous background movement
    gsap.to(bgRef.current, {
      scale: 1.025,
      x: -8,
      duration: 12,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Initial content state
    gsap.set(
      [
        eyebrowRef.current,
        lineOneRef.current,
        lineTwoRef.current,
        subtitleRef.current,
      ],
      {
        opacity: 0,
      }
    );

    gsap.set(
      [lineOneRef.current, lineTwoRef.current],
      {
        y: 25,
      }
    );

    gsap.set(eyebrowRef.current, {
      y: 15,
    });

    gsap.set(subtitleRef.current, {
      y: 15,
    });

    // Content reveal
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.to(eyebrowRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      delay: 0.2,
    })

      .to(
        lineOneRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.25"
      )

      .to(
        lineTwoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.5"
      )

      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        "-=0.35"
      );

  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: 'url("/images/home-hero.jpg")',
        }}
      >
        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/25 via-55% to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="container-grid relative z-10 w-full text-white">
        <div className="max-w-5xl pt-28 md:pt-36 pb-32 md:pb-40">
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[2px] w-12 bg-brand-copper" />

            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-copper">
              Institutional Infrastructure Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight"
          >
            <span
              ref={lineOneRef}
              className="block"
            >
              Building sustainable
            </span>

            <span
              ref={lineTwoRef}
              className="block font-semibold text-brand-copper italic"
            >
              transmission networks
            </span>
          </h1>

          {/* Tagline */}
          <p
            ref={subtitleRef}
            className="mt-10 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            {company.tagline}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-white" />

        <span className="text-[8px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-navy/35 to-transparent pointer-events-none" />
    </section>
  );
};