import heroOperations from "@/assets/pitch/hero-operations.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideOperatingCosts({ active }: { active: boolean }) {
  const costs = [
    { category: "Salaries & Payroll", items: ["GM ($90K–$120K)", "Ops Manager ($75K–$90K)", "Admin ($50K)", "Rick & Josh base draws"], range: "$420K", pct: 34, color: "text-primary" },
    { category: "Utilities", items: ["HVAC for 32,000 sq ft", "Electric, water, waste", "Outdoor field maintenance"], range: "$180K", pct: 15, color: "text-accent" },
    { category: "Lease & Property Costs", items: ["Triple-net lease structure", "CAM charges & property taxes", "Year 1 assumes lease — no land ownership"], range: "$150K", pct: 12, color: "text-primary" },
    { category: "Insurance & Liability", items: ["General liability (stunt, film)", "Workers' comp", "Professional liability (clinic)", "Property insurance"], range: "$120K", pct: 10, color: "text-accent" },
    { category: "Marketing & Sales", items: ["Digital ads & SEO", "Community events", "Corporate outreach", "Content production"], range: "$100K", pct: 8, color: "text-primary" },
    { category: "Maintenance", items: ["Equipment repair", "Facility upkeep", "Outdoor areas", "Cleaning"], range: "$100K", pct: 8, color: "text-accent" },
    { category: "Software & Admin", items: ["Tech platform", "Booking system", "POS & accounting", "Legal & compliance"], range: "$60K", pct: 5, color: "text-primary" },
    { category: "Miscellaneous", items: ["Supplies", "Contingency", "Travel", "Professional development"], range: "$100K", pct: 8, color: "text-accent" },
  ];

  const total = "$1.23M";

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroOperations} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Operating Expenses</p>
              <h2 className="animate-fade-up stagger-2 text-[48px] font-bold leading-[1] text-white mb-5">
                Year 1 <span className="text-primary">Operating Costs</span>
              </h2>

              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-3">
                {costs.map((c, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/15 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-[18px] font-bold">{c.category}</span>
                      <span className={`${c.color} text-[18px] font-bold`}>{c.range}</span>
                    </div>
                    <div className="h-[20px] bg-black/60 border border-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${c.color === "text-primary" ? "bg-primary/70" : "bg-accent/70"} flex items-center justify-end pr-2`}
                        style={{ width: `${Math.max(c.pct * 2.5, 15)}%` }}
                      >
                        <span className="text-white text-[11px] font-bold">{c.pct}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="animate-fade-up stagger-4 mt-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                <span className="text-foreground text-[22px] font-bold uppercase tracking-wider">Year 1 Total OPEX</span>
                <span className="text-primary text-[32px] font-bold">{total}</span>
              </div>

              <div className="animate-fade-up stagger-5 mt-3 flex gap-4">
                <div className="flex-1 bg-primary/10 border border-primary/30 rounded-lg p-3">
                  <p className="text-white text-[15px]"><span className="text-primary font-bold">P&L Note:</span> Year 1 pro forma shows $950K OPEX + $280K COGS = $1.23M total cost structure. Revenue $1.14M → EBITDA -$90K. Break-even expected Month 10–14.</p>
                </div>
                <div className="flex-1 bg-accent/10 border border-accent/30 rounded-lg p-3">
                  <p className="text-white text-[15px]"><span className="text-accent font-bold">Target:</span> Payroll under 50% of revenue. Year 3 OPEX ~$2.09M with revenue at $5M+ — margins improve to ~24% EBITDA.</p>
                </div>
              </div>
              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: IHRSA Operating Benchmarks 2024; Bureau of Labor Statistics – Atlanta Metro Wage Data; Iron Form internal staffing models
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
