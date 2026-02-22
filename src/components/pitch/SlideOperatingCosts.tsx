import heroOperations from "@/assets/pitch/hero-operations.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideOperatingCosts({ active }: { active: boolean }) {
  const costs = [
    { category: "Salaries & Payroll", range: "$420K", pct: 44, color: "text-primary" },
    { category: "Lease & Property Costs", range: "$150K", pct: 16, color: "text-accent" },
    { category: "Utilities", range: "$120K", pct: 13, color: "text-primary" },
    { category: "Marketing & Sales", range: "$80K", pct: 8, color: "text-accent" },
    { category: "Insurance & Liability", range: "$80K", pct: 8, color: "text-primary" },
    { category: "Maintenance", range: "$60K", pct: 6, color: "text-accent" },
    { category: "Software & Admin", range: "$40K", pct: 4, color: "text-primary" },
  ];

  const total = "$1.075M";

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
                        style={{ width: `${Math.max(c.pct * 2, 15)}%` }}
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
                  <p className="text-white text-[14px] font-bold text-primary mb-1">COGS Breakdown ($280K):</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {[
                      { item: "Instructor revenue share", val: "$165K" },
                      { item: "Merchant processing", val: "$35K" },
                      { item: "Medical supplies & disposables", val: "$40K" },
                      { item: "Event direct costs", val: "$25K" },
                      { item: "Misc variable program costs", val: "$15K" },
                    ].map((c, i) => (
                      <div key={i} className="flex justify-between text-white text-[13px]">
                        <span className="text-muted-foreground">{c.item}</span>
                        <span className="font-bold">{c.val}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white text-[13px] mt-1"><span className="text-primary font-bold">P&L:</span> $1.14M Revenue → $280K COGS → $860K Gross → $1.075M OPEX → <span className="text-primary font-bold">–$215K EBITDA</span></p>
                </div>
                <div className="flex-1 bg-accent/10 border border-accent/30 rounded-lg p-3">
                  <p className="text-white text-[15px]"><span className="text-accent font-bold">Year 1 is lean by design.</span> Purpose-built campus, disciplined operations. Payroll under 50% of revenue. Year 3 OPEX ~$2.09M with revenue at $5M+ — margins improve to ~24% EBITDA.</p>
                </div>
              </div>
              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Year 1 projections represent first 12 months of operations following facility completion. Sources: IHRSA Operating Benchmarks 2024; Bureau of Labor Statistics — Atlanta Metro Wage Data
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
