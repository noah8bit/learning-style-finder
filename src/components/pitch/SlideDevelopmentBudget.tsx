import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideDevelopmentBudget({ active }: { active: boolean }) {
  const budget = [
    { item: "Land Acquisition", value: "$2,300,000", color: "text-primary", borderColor: "border-primary/30" },
    { item: "Site Work & Infrastructure", value: "$1,000,000", color: "text-accent", borderColor: "border-accent/30" },
    { item: "Vertical Construction (32K sq ft)", value: "$8,000,000", color: "text-primary", borderColor: "border-primary/30" },
    { item: "Outdoor Track & Field", value: "$1,500,000", color: "text-accent", borderColor: "border-accent/30" },
    { item: "Equipment & Recovery Tech", value: "$1,000,000", color: "text-primary", borderColor: "border-primary/30" },
    { item: "Soft Costs (A&E, Legal, Permits)", value: "$800,000", color: "text-accent", borderColor: "border-accent/30" },
    { item: "Pre-Opening & Interest Carry", value: "$600,000", color: "text-primary", borderColor: "border-primary/30" },
    { item: "Contingency", value: "$600,000", color: "text-accent", borderColor: "border-accent/30" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Development Budget</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-white mb-3">
                Total Project Cost — <span className="text-primary">$15.8M</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-6 max-w-[900px]">
                Purpose-built 32,000 sq ft integrated performance campus on 8 acres. Every dollar allocated.
              </p>

              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-3 mb-4">
                {budget.map((b, i) => (
                  <div key={i} className={`bg-black/80 backdrop-blur-xl border ${b.borderColor} rounded-xl p-5 flex justify-between items-center`}>
                    <span className="text-white text-[20px] font-medium">{b.item}</span>
                    <span className={`${b.color} text-[24px] font-bold shrink-0 ml-4`}>{b.value}</span>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 bg-black/80 backdrop-blur-xl border-2 border-primary/40 rounded-xl p-5 flex items-center justify-between mb-4">
                <span className="text-white text-[22px] font-bold uppercase tracking-wider">Total Development Budget</span>
                <span className="text-primary text-[36px] font-bold">$15,800,000</span>
              </div>

              <div className="animate-fade-up stagger-5 bg-black/80 backdrop-blur-xl border border-accent/30 rounded-xl p-4">
                <p className="text-muted-foreground text-[16px] leading-relaxed">
                  <span className="text-accent font-bold">Note:</span> Founder compensation during development phase is limited and included within the pre-opening allocation. Construction begins only after full capital stack is secured. $250/sq ft validated against RSMeans 2025 steel recreation benchmarks.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
