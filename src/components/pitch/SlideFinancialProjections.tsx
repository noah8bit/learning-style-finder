import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialProjections({ active }: { active: boolean }) {
  const startupCosts = [
    { label: "Land Acquisition", range: "$500K – $2M" },
    { label: "Construction & Infrastructure", range: "$3M – $5M" },
    { label: "Equipment (All Training Areas)", range: "$500K – $1.5M" },
    { label: "Marketing & Branding", range: "$100K" },
    { label: "Legal & Permitting", range: "$50K – $100K" },
    { label: "Miscellaneous (Furniture, Tech)", range: "$200K" },
  ];

  const projections = [
    { year: "Year 1", cost: "$600K – $1M", revenue: "$1.01M – $1.61M", net: "$10K – $610K" },
    { year: "Year 2", cost: "$700K – $1.1M", revenue: "$1.3M – $2.1M", net: "$200K – $1M" },
    { year: "Year 3", cost: "$750K – $1.2M", revenue: "$1.7M – $2.7M", net: "$500K – $1.5M" },
  ];

  const roi = [
    { label: "Break-Even Point", value: "3–5 years", icon: "⏱️" },
    { label: "Year 3 Net Profit", value: "$500K–$1.5M", icon: "📈" },
    { label: "5-Year Cumulative", value: "$3M – $5.5M+", icon: "💰" },
    { label: "Payback Period", value: "4–6 years", icon: "🔄" },
  ];

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
              <div className="flex-1">
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
                    <span className="text-primary text-[18px] font-bold">$4.45M – $9M</span>
                  </div>
                </div>
              </div>
              {/* Revenue projections */}
              <div className="flex-1">
                <h3 className="text-accent text-[18px] font-bold mb-4 uppercase tracking-wider">Annual Projections</h3>
                <div className="overflow-hidden rounded-xl border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="text-left text-foreground text-[13px] font-bold p-3">Year</th>
                        <th className="text-right text-foreground text-[13px] font-bold p-3">Costs</th>
                        <th className="text-right text-foreground text-[13px] font-bold p-3">Revenue</th>
                        <th className="text-right text-primary text-[13px] font-bold p-3">Net</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projections.map((p, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                          <td className="text-foreground text-[14px] font-medium p-3 border-t border-white/5">{p.year}</td>
                          <td className="text-accent text-[14px] font-semibold p-3 border-t border-white/5 text-right">{p.cost}</td>
                          <td className="text-primary text-[14px] font-semibold p-3 border-t border-white/5 text-right">{p.revenue}</td>
                          <td className="text-primary text-[14px] font-bold p-3 border-t border-white/5 text-right">{p.net}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}