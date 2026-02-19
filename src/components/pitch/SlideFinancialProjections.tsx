import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialProjections({ active }: { active: boolean }) {
  const startupCosts = [
    { label: "Land Acquisition (2–4 acres)", range: "$1.5M – $2M" },
    { label: "Construction (60K sq ft)", range: "$5.5M – $7M" },
    { label: "Equipment & Specialty Install", range: "$2M – $2.5M" },
    { label: "Technology & App Platform", range: "$750K – $1M" },
    { label: "Marketing, Legal & Permitting", range: "$500K – $750K" },
    { label: "Contingency Reserve", range: "$750K" },
  ];

  const projections = [
    { year: "Year 1", cost: 750, revenue: 960, costLabel: "$600K – $900K", revenueLabel: "$866K – $1.05M", netLabel: "-$34K – $450K" },
    { year: "Year 2", cost: 900, revenue: 1700, costLabel: "$700K – $1.1M", revenueLabel: "$1.4M – $2.0M", netLabel: "$300K – $900K" },
    { year: "Year 3", cost: 975, revenue: 2200, costLabel: "$750K – $1.2M", revenueLabel: "$1.8M – $2.6M", netLabel: "$600K – $1.4M" },
  ];

  const roi = [
    { label: "Break-Even Point", value: "24–36 months", icon: "⏱️" },
    { label: "Year 3 Net Profit", value: "$600K–$1.4M", icon: "📈" },
    { label: "5-Year Cumulative", value: "$3M – $5.5M", icon: "💰" },
    { label: "Payback Period", value: "5–8 years", icon: "🔄" },
  ];

  const maxBar = 2500;

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="Facility under construction" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Financial Overview</p>
            <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-foreground mb-8">
              Investment, Costs & <span className="text-primary">Projected Returns</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-8 mb-6">
              {/* Startup costs */}
              <div className="w-[380px] shrink-0">
                <h3 className="text-primary text-[18px] font-bold mb-4 uppercase tracking-wider">Start-Up Costs</h3>
                <div className="space-y-3">
                  {startupCosts.map((c, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-foreground text-[14px]">{c.label}</span>
                      <span className="text-primary font-semibold text-[14px]">{c.range}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-primary/10 border border-primary/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-[16px] font-bold">Total Start-Up</span>
                    <span className="text-primary text-[18px] font-bold">$11M – $14M</span>
                  </div>
                </div>
              </div>

              {/* Visual bar chart + table */}
              <div className="flex-1">
                <h3 className="text-accent text-[18px] font-bold mb-4 uppercase tracking-wider">Annual Projections</h3>
                <div className="space-y-5">
                  {projections.map((p, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground text-[16px] font-bold w-[70px]">{p.year}</span>
                        <span className="text-primary text-[14px] font-semibold">Net: {p.netLabel}</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-[12px] w-[60px] text-right">Costs</span>
                          <div className="flex-1 h-[14px] bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent/70 rounded-full flex items-center justify-end pr-2" style={{ width: `${(p.cost / maxBar) * 100}%` }}>
                              <span className="text-[10px] text-foreground font-semibold">{p.costLabel}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-[12px] w-[60px] text-right">Revenue</span>
                          <div className="flex-1 h-[14px] bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary/70 rounded-full flex items-center justify-end pr-2" style={{ width: `${(p.revenue / maxBar) * 100}%` }}>
                              <span className="text-[10px] text-foreground font-semibold">{p.revenueLabel}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent/70 rounded-sm" />
                    <span className="text-muted-foreground text-[12px]">Operating Costs (midpoint)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary/70 rounded-sm" />
                    <span className="text-muted-foreground text-[12px]">Revenue (midpoint)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-4">
              {roi.map((r, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <span className="text-[28px] mb-2 block">{r.icon}</span>
                  <div className="text-primary text-[22px] font-bold mb-1">{r.value}</div>
                  <div className="text-muted-foreground text-[13px]">{r.label}</div>
                </div>
              ))}
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: Iron Form internal financial model; RSMeans Construction Cost Data; IHRSA Industry Benchmark Reports; comparable facility case studies
            </p>
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}
