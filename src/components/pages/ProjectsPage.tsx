import React from "react";
import { PageHero } from "../PageHero";
import { currentProject } from "@/data/content";
import { SectionLabel } from "../SectionLabel";
import { MapPin, Zap, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export const ProjectsPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <PageHero 
        label="Our Assets"
        title="Infrastructure Portfolio"
        subtitle="Developing critical interstate and intrastate transmission corridors to ensure zero-curtailment power flow."
        image="https://images.unsplash.com/photo-1574689232449-1668537d0e1a?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24">
        <div className="container-grid">
          <div className="mb-20">
            <SectionLabel>Flagship Asset</SectionLabel>
            <div className="bg-white shadow-2xl border border-brand-border/30 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-20">
                  <div className="flex items-center gap-2 text-brand-copper font-bold text-xs uppercase tracking-widest mb-6">
                    <MapPin className="w-4 h-4" />
                    {currentProject.location}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-light text-brand-navy mb-8 leading-tight">
                    {currentProject.name}
                  </h2>
                  <p className="text-brand-text-secondary text-lg leading-relaxed mb-12">
                    {currentProject.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {currentProject.facts.map((fact, idx) => (
                      <div key={idx}>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-brand-navy/40 mb-1">{fact.label}</p>
                        <p className="text-xl font-bold text-brand-navy">{fact.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-brand-bg border-l-4 border-brand-copper">
                    <p className="text-sm italic text-brand-navy font-medium">
                      "{currentProject.title}"
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1548676612-282a7a395088?auto=format&fit=crop&q=80&w=1500" 
                    alt={currentProject.name}
                    className="w-full h-full object-cover grayscale-[20%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10" />
                  <div className="absolute bottom-12 left-12 bg-white px-8 py-4 shadow-xl">
                    <p className="text-brand-copper font-bold text-xs uppercase tracking-widest">Asset Type</p>
                    <p className="text-xl font-light text-brand-navy">Inter-state Grid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <SectionLabel>Project Pipeline</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Western Region Expansion", region: "Maharashtra", capacity: "400kV", status: "Bidding Phase" },
                { title: "RE Integration Hub", region: "Rajasthan", capacity: "765kV", status: "Strategic Planning" },
                { title: "Southern Corridor Upgrade", region: "Karnataka", capacity: "400kV", status: "Technical Survey" }
              ].map((p, idx) => (
                <div key={idx} className="bg-white p-10 border border-brand-border/50 group hover:border-brand-copper transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-brand-bg flex items-center justify-center group-hover:bg-brand-navy transition-all">
                      <Zap className="w-6 h-6 text-brand-copper" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40">{p.status}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">{p.title}</h4>
                  <p className="text-brand-copper text-xs font-bold uppercase tracking-widest mb-6">{p.region} • {p.capacity}</p>
                  <p className="text-brand-text-secondary text-sm mb-8 opacity-70">
                    Planned high-voltage transmission asset to strengthen the regional grid and evacuation capacity.
                  </p>
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    View Proposal <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-navy p-12 md:p-24 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <ShieldCheck className="w-16 h-16 text-brand-copper mx-auto mb-8" />
              <h3 className="text-3xl font-light mb-6">Operational Excellence</h3>
              <p className="text-brand-text-secondary opacity-70 mb-10">
                Our projects are built for reliability, utilizing advanced monitoring systems and best-in-class engineering to ensure stable energy transmission for decades.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-copper" />
                  <span className="text-xs font-bold uppercase tracking-widest">On-time Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-brand-copper" />
                  <span className="text-xs font-bold uppercase tracking-widest">Grid Stability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
