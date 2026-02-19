import ScaledSlide from "./ScaledSlide";

export default function SlideCostBenefit({ active }: { active: boolean }) {
  const rows = [
    { category: "Start-Up Investment", cost: "$4.45M – $9M", revenue: "—", net: "—", type: "header" },
    { category: "Year 1 Operations", cost: "$600K – $1M", revenue: "$930K – $1.57M", net: "$330K – $570K", type: "row" },
    { category: "Year 2 (Growth)", cost: "$700K – $1.1M", revenue: "$1.2M – $2.1M", net: "$500K – $1M", type: "row" },
    { category: "Year 3 (Mature)", cost: "$750K – $1.2M", revenue: "$1.6M – $2.8M", net: "$850K – $1.6M", type: "row" },
  ];

  const roi = [
    { label: "Break-Even Point", value: "18–24 months", icon: "⏱️" },
    { label: "Year 3 ROI", value: "25–40%", icon: "📈" },
    { label: "5-Year Cumulative", value: "$3.5M – $6M+", icon: "💰" },
    { label: "Payback Period", value: "3–5 years", icon: "🔄" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Financial Analysis</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
              Cost vs. <span className="text-primary">Revenue</span> Breakdown
            </h2>
            <div className="animate-fade-up stagger-3 overflow-hidden rounded-2xl border border-border mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left text-foreground text-[16px] font-bold p-5">Category</th>
                    <th className="text-right text-foreground text-[16px] font-bold p-5">Costs</th>
                    <th className="text-right text-foreground text-[16px] font-bold p-5">Revenue</th>
                    <th className="text-right text-primary text-[16px] font-bold p-5">Net Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className={`text-foreground text-[16px] p-5 border-t border-border ${r.type === "header" ? "font-bold" : ""}`}>{r.category}</td>
                      <td className="text-accent text-[16px] font-semibold p-5 border-t border-border text-right">{r.cost}</td>
                      <td className="text-primary text-[16px] font-semibold p-5 border-t border-border text-right">{r.revenue}</td>
                      <td className={`text-[16px] font-bold p-5 border-t border-border text-right ${r.net === "—" ? "text-muted-foreground" : "text-primary"}`}>{r.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-5">
              {roi.map((r, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <span className="text-[32px] mb-3 block">{r.icon}</span>
                  <div className="text-primary text-[28px] font-bold mb-1">{r.value}</div>
                  <div className="text-muted-foreground text-[14px]">{r.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
