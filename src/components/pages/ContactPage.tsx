import React from "react";
import { PageHero } from "../PageHero";
import { SectionLabel } from "../SectionLabel";
import { ContactForm } from "../contact/ContactForm";
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <PageHero 
        label="Get in touch"
        title="Connect with AnantGrid"
        subtitle="Our team is ready to discuss infrastructure development, partnerships, and career opportunities."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24">
        <div className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <SectionLabel>Contact Information</SectionLabel>
              <h2 className="text-3xl font-light text-brand-navy mb-10">Our corporate offices</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 shadow-sm border border-brand-border/30">
                    <MapPin className="w-6 h-6 text-brand-copper" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3">Registered Office</h4>
                    <p className="text-brand-text-secondary text-sm leading-relaxed opacity-80">
                      AnantGrid Private Limited<br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 shadow-sm border border-brand-border/30">
                    <Mail className="w-6 h-6 text-brand-copper" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3">Email Inquiries</h4>
                    <p className="text-brand-text-secondary text-sm mb-1 opacity-80">General: info@anantgrid.com</p>
                    <p className="text-brand-text-secondary text-sm opacity-80">Careers: careers@anantgrid.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 shadow-sm border border-brand-border/30">
                    <Phone className="w-6 h-6 text-brand-copper" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3">Phone</h4>
                    <p className="text-brand-text-secondary text-sm opacity-80">Support: +91 11 XXXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-brand-border/50">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-6">Social Media</h4>
                <div className="flex gap-4">
                  {[Linkedin, Twitter].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 bg-brand-navy text-white flex items-center justify-center hover:bg-brand-copper transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <SectionLabel>Send a message</SectionLabel>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-brand-navy-secondary relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 bg-brand-navy/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-8 shadow-2xl border border-brand-border text-center max-w-xs">
            <MapPin className="w-8 h-8 text-brand-copper mx-auto mb-4" />
            <h4 className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-2">Our Presence</h4>
            <p className="text-xs text-brand-text-secondary leading-relaxed">Visit our corporate headquarters for strategic discussions and project planning.</p>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Map" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
};
