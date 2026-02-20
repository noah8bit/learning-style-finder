import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialProjections({ active }: { active: boolean }) {
  const startupCosts = [
    { label: "Land (8–12 acres)", range: "$2M – $3M" },
    { label: "Construction (60K sq ft)", range: "$5.5M – $7M" },
    { label: "Equipment & Install", range: "$2M – $2.5M" },
    { label: "Year 1 Operations", range: "$1.5M" },
    { label: "Tech, Marketing & Legal", range: "$1.5M" },
    { label: "Contingency (~12%)", range: "$1.5M – $2M" },
  ];

  const projections = [
    { year: "Year 1", cost: 2200, revenue: 3400, costLabel: "$2.0M–$2.4M", revenueLabel: "$3.3M–$3.4M", netLabel: "$900K–$1.4M" },
    { year: "Year 2", cost: 2900, revenue: 5100, costLabel: "$2.9M–$3.4M", revenueLabel: "$4.9M–$5.3M", netLabel: "$1.5M–$2.4M" },
    { year: "Year 3", cost: 3700, revenue: 6800, costLabel: "$3.5M–$3.9M", revenueLabel: "$6.5M–$7.2M", netLabel: "$2.6M–$3.3M" },
  ];

  const roi = [
    { label: "Break-Even", value: "12–16 mo", icon: "⏱️" },
    { label: "Yr 3 Net Profit", value: "$2.6M–$3.3M", icon: "📈" },
    { label: "5-Yr Cumulative", value: "$8M–$13M", icon: "💰" },
    { label: "Payback Period", value: "3.5–4.5 years", icon: "🔄" },
  ];

  const maxBar = 6000;

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Financial Overview</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-8">
              Investment & <span className="text-primary">Projected Returns</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-10 mb-6">
              {/* Startup costs */}
              <div className="w-[450px] shrink-0">
                <h3 className="text-primary text-[24px] font-bold mb-4 uppercase tracking-wider">Start-Up Costs</h3>
                <div className="space-y-3">
                  {startupCosts.map((c, i) => (
                    <div key={i} className="flex justify-between items-center bg-black/60 border border-white/15 rounded-lg p-4">
                      <span className="text-foreground text-[22px]">{c.label}</span>
                      <span className="text-primary font-bold text-[22px]">{c.range}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-primary/10 border border-primary/30 rounded-xl p-5">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-[24px] font-bold">Total</span>
                    <span className="text-primary text-[28px] font-bold">$13M – $16M</span>
                  </div>
                </div>
              </div>

              {/* Projections */}
              <div className="flex-1">
                <h3 className="text-accent text-[24px] font-bold mb-4 uppercase tracking-wider">Annual Projections</h3>
                <div className="space-y-5">
                  {projections.map((p, i) => (
                    <div key={i} className="bg-black/60 border border-white/15 rounded-lg p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-foreground text-[24px] font-bold">{p.year}</span>
                        <span className="text-primary text-[22px] font-bold">Net: {p.netLabel}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-[20px] w-[90px] text-right">Costs</span>
                          <div className="flex-1 h-[28px] bg-black/40 rounded-full overflow-hidden">
                            <div className="h-full bg-accent/70 rounded-full flex items-center justify-end pr-3" style={{ width: `${(p.cost / maxBar) * 100}%` }}>
                              <span className="text-[16px] text-foreground font-bold">{p.costLabel}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-[20px] w-[90px] text-right">Revenue</span>
                          <div className="flex-1 h-[28px] bg-black/40 rounded-full overflow-hidden">
                            <div className="h-full bg-primary/70 rounded-full flex items-center justify-end pr-3" style={{ width: `${(p.revenue / maxBar) * 100}%` }}>
                              <span className="text-[16px] text-foreground font-bold">{p.revenueLabel}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-4">
              {roi.map((r, i) => (
                <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                  <span className="text-[36px] mb-2 block">{r.icon}</span>
                  <div className="text-primary text-[28px] font-bold mb-1">{r.value}</div>
                  <div className="text-muted-foreground text-[20px]">{r.label}</div>
                </div>
              ))}
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: RSMeans Construction Cost Data 2024; IHRSA Industry Benchmark Reports; Iron Form internal financial models
            </p>
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}