import React from "react";
import { PageHero } from "../PageHero";
import { company } from "@/data/content";
import { SectionLabel } from "../SectionLabel";
import { Target, Users, ShieldCheck, Award, ArrowRight } from "lucide-react";

export const CareersPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <PageHero 
        label="Join AnantGrid"
        title="Build the Future of Energy"
        subtitle="We are looking for bold thinkers and execution experts to build India's sustainable energy highway."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24">
        <div className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <SectionLabel>Our Culture</SectionLabel>
              <h2 className="text-4xl font-light text-brand-navy mb-8 leading-tight">
                An environment of <br />
                <span className="font-semibold italic">excellence and ownership.</span>
              </h2>
              <p className="text-brand-text-secondary text-lg leading-relaxed mb-10">
                At AnantGrid, we believe in empowering our people to own outcomes. Our culture is built on the pillars of integrity, innovation, and a relentless focus on delivery.
              </p>
              <div className="bg-brand-navy p-10 text-white relative overflow-hidden">
                <p className="text-2xl font-light italic relative z-10">
                  "{company.culture}"
                </p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-copper/20 rounded-full blur-3xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "Collaborative", text: "Working together to solve complex engineering challenges." },
                { icon: Target, label: "Goal-Oriented", text: "Clear focus on delivering 10,000 ckm by 2031." },
                { icon: ShieldCheck, label: "High Integrity", text: "Maintaining the highest ethical standards in all operations." },
                { icon: Award, label: "Rewarding", text: "Recognizing and celebrating excellence at every level." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border border-brand-border/30">
                  <item.icon className="w-8 h-8 text-brand-copper mb-4" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-2">{item.label}</h4>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <SectionLabel>Open Opportunities</SectionLabel>
            <div className="space-y-4">
              {[
                { title: "Senior Project Manager", dept: "Projects & Execution", location: "Gujarat / Site-based" },
                { title: "Lead Regulatory & Policy", dept: "Corporate Affairs", location: "New Delhi" },
                { title: "Techno-Commercial Lead", dept: "Business Development", location: "New Delhi" },
                { title: "Health & Safety Officer (EHS)", dept: "Operations", location: "Site-based" }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-brand-border/50 hover:border-brand-copper hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-1">{job.title}</h4>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-navy/40">
                      <span>{job.dept}</span>
                      <span className="w-1.5 h-1.5 bg-brand-copper rounded-full" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-brand-navy font-bold text-xs uppercase tracking-widest group-hover:text-brand-copper transition-colors">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-brand-text-secondary text-sm mb-6">Don't see a role that fits? Send your resume for future opportunities.</p>
              <a href="mailto:careers@anantgrid.com" className="text-brand-navy font-bold text-sm border-b-2 border-brand-copper pb-1 hover:text-brand-copper transition-colors">
                careers@anantgrid.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
