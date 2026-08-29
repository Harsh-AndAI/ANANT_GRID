import { cn } from "@/lib/utils";

export const Logo = ({ className, light = false }: { className?: string, light?: boolean }) => {
  return (
    <div className={cn("flex items-center gap-2 font-display", className)}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Abstract Grid Mark */}
        <div className={cn("absolute inset-0 border-2 opacity-20", light ? "border-white" : "border-brand-navy")} />
        <div className={cn("w-5 h-5 flex items-center justify-center", light ? "bg-white" : "bg-brand-navy")}>
          <div className="w-2 h-2 bg-brand-copper" />
        </div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-copper opacity-80" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("text-xl font-bold tracking-tight", light ? "text-white" : "text-brand-navy")}>
          ANANT<span className="text-brand-copper">GRID</span>
        </span>
        <span className={cn("text-[8px] uppercase tracking-[0.3em] font-medium", light ? "text-brand-bg opacity-70" : "text-brand-text-secondary")}>
          Power Transmission
        </span>
      </div>
    </div>
  );
};
