import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PageHero } from "../PageHero";
import { ContactForm } from "../contact/ContactForm";

import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  Network,
  Send,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const engagementAreas = [
  {
    number: "01",
    icon: Network,
    title: "Project Development",
    description:
      "Connect with us regarding transmission corridors, substations and high-voltage infrastructure opportunities.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Business & Bid Management",
    description:
      "Discuss transmission opportunities under the Tariff Based Competitive Bidding framework.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Project Execution",
    description:
      "Engage with our team around project delivery, execution planning and transmission infrastructure development.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Explore opportunities for co-bidding, co-development and collaboration on large-scale transmission infrastructure.",
  },
];

export const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ============================================================
         01 — HERO / PAGE INTRO
      ============================================================ */

      gsap.fromTo(
        ".contact-intro > *",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-intro",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         02 — ENGAGEMENT CARDS
      ============================================================ */

      gsap.fromTo(
        ".contact-engagement-card",
        {
          opacity: 0,
          y: 28,
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
            trigger: ".contact-engagement-grid",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         03 — CONTACT FORM
      ============================================================ */

      gsap.fromTo(
        ".contact-form-panel",
        {
          opacity: 0,
          x: 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-copy > *",
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
            trigger: ".contact-form-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         04 — PROCESS / CONNECTION LINE
      ============================================================ */

      gsap.fromTo(
        ".contact-process-item",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-process",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-process-line",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".contact-process",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         05 — CLOSING SECTION
      ============================================================ */

      gsap.fromTo(
        ".contact-closing-content > *",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-closing",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ============================================================
         CONTINUOUS END-TO-END SIGNAL PULSE
      ============================================================ */

      gsap.fromTo(
  ".contact-signal-dot",
  { x: 0 },
  {
    x: () => {
      const container = document.querySelector(".contact-signal-track");
      return container ? container.clientWidth : 448;
    },
    duration: 3.2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.2,
  }
);
    }, pageRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#f8fafc] text-[#08111d]"
    >
      {/* ============================================================
          01 — HERO
      ============================================================ */}

      <PageHero
        label="Get in touch"
        title="Building the grid starts with a conversation."
        subtitle="Connect with AnantGrid to explore transmission infrastructure opportunities, partnerships, project development and execution."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
      />

      {/* ============================================================
          02 — INTRO / ENGAGEMENT AREAS
      ============================================================ */}

      <section className="relative bg-white py-20 lg:py-24 overflow-hidden border-b border-slate-200/70">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #08111d 1px, transparent 1px),
              linear-gradient(to bottom, #08111d 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="contact-intro max-w-4xl mb-12">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Let's Connect
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-light leading-[1.1] tracking-tight mb-5">
              Connect with the team behind{" "}
              <span className="italic text-[#d97736]">
                India's transmission infrastructure.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
              Whether you are exploring a transmission opportunity, looking
              for a strategic partner, or discussing project development and
              execution, use the form below to start the conversation.
            </p>
          </div>

          <div className="contact-engagement-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {engagementAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="contact-engagement-card group relative bg-white border border-slate-200/90 rounded-sm p-7 lg:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:border-[#d97736]/50 hover:shadow-[0_12px_28px_rgba(8,17,29,0.06)] hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(217,119,54,0.5)]" />

                  <div>
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#d97736]">
                        {item.number}
                      </span>

                      <div className="w-9 h-9 border border-slate-200 bg-[#f8fafc] rounded-xs flex items-center justify-center group-hover:border-[#08111d] group-hover:bg-[#08111d] group-hover:rotate-[6deg] group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-4 h-4 text-[#d97736] transition-transform duration-300" />
                      </div>
                    </div>

                    <h3 className="text-base font-medium text-[#08111d] mb-2.5 group-hover:text-[#d97736] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — CONTACT FORM
      ============================================================ */}

      <section className="contact-form-section relative bg-[#060e18] text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#d97736]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#d97736]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="contact-form-copy lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-[1.5px] w-8 bg-[#d97736]" />

                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                  Start a Conversation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight mb-6">
                Let's build the next{" "}
                <span className="italic text-[#d97736]">
                  connection.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-md mb-10">
                Share a few details about your requirement and our team can
                understand the nature of your enquiry before getting in touch.
              </p>

              <div className="border border-white/10 bg-white/[0.025] p-6 max-w-md">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 border border-[#d97736]/50 flex items-center justify-center">
                    <Send className="w-4 h-4 text-[#d97736]" />
                  </div>

                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-500 font-mono">
                      Direct Engagement
                    </span>

                    <span className="text-sm text-white font-light">
                      Project & Business Enquiries
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/10 mb-5" />

                <p className="text-[11px] leading-relaxed text-slate-400 font-light">
                  AnantGrid develops transmission assets and works across
                  project development, bid management, execution oversight and
                  strategic partnerships.
                </p>
              </div>
            </div>

            <div className="contact-form-panel lg:col-span-7">
              <div className="relative bg-white text-[#08111d] p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/10 rounded-sm">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d97736]" />

                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
                      Inquiry Form
                    </span>
                  </div>

                  
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — HOW WE ENGAGE
      ============================================================ */}

      <section className="contact-process relative bg-white py-20 lg:py-24 overflow-hidden border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Engagement
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light tracking-tight leading-tight">
              From opportunity to{" "}
              <span className="italic text-[#d97736]">
                infrastructure.
              </span>
            </h2>
          </div>

          {/* Process Timeline Grid */}
          <div className="relative">
            {/* Seamless Center-to-Center Alignment Spine */}
            <div className="contact-process-line absolute left-[12.5%] right-[12.5%] top-5 h-[1.5px] bg-[#d97736]/40 hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {[
                {
                  number: "01",
                  title: "Connect",
                  text: "Share the opportunity or requirement with our team.",
                },
                {
                  number: "02",
                  title: "Explore",
                  text: "Understand the project, partnership or infrastructure requirement.",
                },
                {
                  number: "03",
                  title: "Engage",
                  text: "Bring the relevant business and project capabilities into the discussion.",
                },
                {
                  number: "04",
                  title: "Build",
                  text: "Work towards reliable and sustainable transmission infrastructure.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="contact-process-item relative flex flex-col items-start lg:items-center text-left lg:text-center"
                >
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-[#d97736] flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-[10px] font-mono font-bold text-[#d97736]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#08111d] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — CLOSING (Origin to Destination Signal Line)
      ============================================================ */}

      <section className="contact-closing relative bg-[#08111d] text-white py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
          <div className="contact-closing-content">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#d97736]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d97736] font-bold">
                AnantGrid
              </span>

              <div className="h-px w-10 bg-[#d97736]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-light leading-tight tracking-tight mb-6">
              Powering India's growth through{" "}
              <span className="italic text-[#d97736]">
                better connections.
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-12">
              AnantGrid is focused on building reliable, efficient and
              sustainable transmission infrastructure to support India's
              evolving energy landscape.
            </p>

            {/* Signal Bus Line */}
<div className="contact-signal-track relative max-w-md mx-auto h-6 flex items-center justify-between">
  {/* Underlying Track Line */}
  <div className="absolute left-0 right-0 h-[1.5px] bg-white/15" />

  {/* Moving Gliding Pulse Dot (Fixed Center-Aligned) */}
  <div className="contact-signal-dot absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#d97736] shadow-[0_0_14px_rgba(217,119,54,1)] pointer-events-none z-20" />

  {/* Node 1: Left Origin */}
  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#d97736] shadow-[0_0_8px_#d97736]" />

  {/* Node 2: Right Endpoint */}
  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#d97736] shadow-[0_0_8px_#d97736]" />
</div>
          </div>
        </div>
      </section>
    </div>
  );
};