import React from "react";
import { cn } from "@/lib/utils";

export const SectionLabel = ({ children, className, dark = false }: { children: React.ReactNode, className?: string, dark?: boolean }) => {
  return (
    <div className={cn("flex items-center gap-4 mb-6", className)}>
      <div className={cn("h-[1px] w-8", dark ? "bg-white/20" : "bg-brand-navy/20")} />
      <span className={cn(
        "text-[10px] uppercase tracking-[0.3em] font-bold",
        dark ? "text-brand-copper-soft" : "text-brand-copper"
      )}>
        {children}
      </span>
    </div>
  );
};
