import React from "react";
import { PageHero } from "../PageHero";
import { segments } from "@/data/content";
import { SectionLabel } from "../SectionLabel";
import { Network, Zap, ShieldCheck, Users, ArrowRight } from "lucide-react";

const icons = {
  Network,
  Zap,
  ShieldCheck,
  Users
};

export const BusinessPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <PageHero 
        label="What we do"
        title="Comprehensive Grid Solutions"
        subtitle="AnantGrid identifies, develops, and manages large-scale power transmission infrastructure across India."
        image="https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24">
        <div className="container-grid">
          <div className="space-y-32">
            {segments.map((segment, idx) => {
              const IconComponent = icons[segment.icon as keyof typeof icons] || Network;
              return (
                <div key={segment.id} className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-brand-navy flex items-center justify-center rounded-sm">
                        <IconComponent className="w-8 h-8 text-brand-copper" />
                      </div>
                      <span className="text-5xl font-bold text-brand-navy/10 font-display">{segment.id}</span>
                    </div>
                    <SectionLabel>Core Business Segment</SectionLabel>
                    <h2 className="text-4xl font-bold text-brand-navy mb-8 leading-tight">
                      {segment.title}
                    </h2>
                    <p className="text-brand-text-secondary text-lg leading-relaxed mb-10">
                      {segment.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {["Strategic Planning", "Regulatory Compliance", "Asset Management"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-brand-navy font-semibold text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-copper" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-video overflow-hidden rounded-sm shadow-xl relative group">
                      <img 
                        src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? "1548676612-282a7a395088" : "1544724569-5f546fd6f2b5"}?auto=format&fit=crop&q=80&w=1200`}
                        alt={segment.title}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-navy/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="container-grid text-center max-w-4xl">
          <SectionLabel dark className="justify-center">Join Development</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to collaborate on India's energy highways?</h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed opacity-70 mb-12">
            AnantGrid actively seeks strategic partnerships for large-scale TBCB projects and joint development opportunities across the Indian subcontinent.
          </p>
          <button className="bg-brand-copper text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-copper-soft transition-all">
            Partner with us
          </button>
        </div>
      </section>
    </div>
  );
};
