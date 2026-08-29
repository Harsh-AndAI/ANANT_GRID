import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-brand-navy p-12 text-white text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-brand-copper mb-6" />
        <h3 className="text-3xl font-light mb-4">Message Received</h3>
        <p className="text-brand-text-secondary max-w-sm">
          Thank you for reaching out to AnantGrid. Our corporate relations team will review your inquiry and respond shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-brand-copper font-bold text-sm uppercase tracking-widest border-b border-brand-copper pb-1 hover:text-brand-copper-soft transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl border border-brand-border/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-navy/60">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Rahul Sharma"
            className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-copper transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-navy/60">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="e.g. rahul@company.com"
            className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-copper transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-navy/60">Phone Number</label>
          <input 
            type="tel" 
            placeholder="+91"
            className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-copper transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-navy/60">Subject</label>
          <select className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-copper transition-colors">
            <option>General Inquiry</option>
            <option>Business Development</option>
            <option>Infrastructure Projects</option>
            <option>Careers</option>
          </select>
        </div>
      </div>
      <div className="space-y-2 mb-10">
        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-navy/60">Message</label>
        <textarea 
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-copper transition-colors resize-none"
        ></textarea>
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full bg-brand-navy text-white py-5 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-brand-navy-secondary",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Processing..." : "Submit Inquiry"}
        {!isSubmitting && <Send className="w-4 h-4" />}
      </button>
    </form>
  );
};
