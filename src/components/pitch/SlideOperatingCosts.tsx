import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideOperatingCosts({ active }: { active: boolean }) {
  const costs = [
    { category: "Staffing & Payroll", items: ["30+ part-time coaches/trainers", "Front desk & admin (3–4 FT)", "Cleaning & maintenance (2 FT)", "Director salaries (Noah, Rick, Josh)"], range: "$500K – $700K", pct: 54, color: "text-primary" },
    { category: "Utilities & Facility", items: ["Pool heating, chemicals, maintenance", "HVAC for 60,000 sq ft", "Electric, water, waste", "Equipment maintenance & repair"], range: "$150K – $250K", pct: 19, color: "text-accent" },
    { category: "Insurance & Liability", items: ["General liability (stunt, climbing, pool)", "Workers' comp", "Professional liability (clinic)", "Property insurance"], range: "$80K – $120K", pct: 10, color: "text-primary" },
    { category: "Marketing & Sales", items: ["Digital ads & SEO", "Community events & sponsorships", "Corporate sales outreach", "Content production"], range: "$60K – $100K", pct: 8, color: "text-accent" },
    { category: "Operations & Misc", items: ["Software & tech platform", "Supplies & consumables", "Legal & accounting", "Café inventory & COGS"], range: "$110K – $130K", pct: 9, color: "text-primary" },
  ];

  const total = "$900K – $1.3M";

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Operating Expenses</p>
              <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-6">
                Year 1 <span className="text-primary">Operating Costs</span>
              </h2>

              <div className="animate-fade-up stagger-3 space-y-4">
                {costs.map((c, i) => (
                  <div key={i} className="flex gap-6 items-stretch">
                    {/* Bar + label */}
                    <div className="w-[520px] shrink-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-[20px] font-bold">{c.category}</span>
                        <span className={`${c.color} text-[20px] font-bold`}>{c.range}</span>
                      </div>
                      <div className="h-[28px] bg-black/60 border border-white/15 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${c.color === "text-primary" ? "bg-primary/70" : "bg-accent/70"} flex items-center justify-end pr-3`}
                          style={{ width: `${c.pct}%` }}
                        >
                          <span className="text-white text-[14px] font-bold">{c.pct}%</span>
                        </div>
                      </div>
                    </div>
                    {/* Details */}
                    <div className="flex-1 bg-black/60 border border-white/10 rounded-lg px-4 py-2 flex flex-wrap gap-x-4 gap-y-0.5 items-center">
                      {c.items.map((item, j) => (
                        <span key={j} className="text-muted-foreground text-[15px] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="animate-fade-up stagger-4 mt-5 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-5 flex items-center justify-between">
                <span className="text-foreground text-[24px] font-bold uppercase tracking-wider">Year 1 Total Operating Costs</span>
                <span className="text-primary text-[36px] font-bold">{total}</span>
              </div>

              <div className="animate-fade-up stagger-5 mt-3 flex gap-4">
                <div className="flex-1 bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <p className="text-white text-[16px]"><span className="text-primary font-bold">Staffing Model:</span> Part-time coaches on revenue share minimize fixed payroll. Only 8–10 full-time employees in Year 1.</p>
                </div>
                <div className="flex-1 bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-white text-[16px]"><span className="text-accent font-bold">Scaling:</span> Operating costs grow ~15%/yr while revenue grows ~50%/yr — margins improve from 15% to 25–35% by Year 3.</p>
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
