import heroFinancial from "@/assets/pitch/hero-financial.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialProjections({ active }: { active: boolean }) {
  const proForma = [
    {
      year: "Year 1", revenue: "$1.14M", cogs: "$280K", grossProfit: "$860K",
      opex: "$1.075M", ebitda: "-$215K", debtService: "$620K", netCash: "-$835K",
      note: "Conservative ramp — loss covered by development reserve",
      barWidth: 23, color: "text-yellow-400"
    },
    {
      year: "Year 2", revenue: "$3.17M", cogs: "$1.05M", grossProfit: "$2.12M",
      opex: "$1.60M", ebitda: "$520K", debtService: "$620K", netCash: "-$100K",
      note: "Growth year — membership 450+, corporate scales to 3 clients",
      barWidth: 63, color: "text-accent"
    },
    {
      year: "Year 3", revenue: "$5.01M", cogs: "$1.73M", grossProfit: "$3.28M",
      opex: "$2.09M", ebitda: "$1.20M", debtService: "$620K", netCash: "$580K",
      note: "Stable and bankable — net positive after debt",
      barWidth: 100, color: "text-primary"
    },
  ];

  const keyMetrics = [
    { label: "Break-Even (blended)", value: "245 Members", icon: "⏱️" },
    { label: "Yr 3 EBITDA", value: "$1.2M", icon: "📈" },
    { label: "Yr 3 Net After Debt", value: "$580K", icon: "💰" },
    { label: "Debt Service", value: "$620K/yr", icon: "🏦" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFinancial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">3-Year Pro Forma</p>
            <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-6">
              Financial <span className="text-primary">Projections</span>
            </h2>

            <div className="animate-fade-up stagger-3 space-y-4 mb-5">
              {proForma.map((p, i) => (
                <div key={i} className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <span className={`${p.color} text-[28px] font-bold`}>{p.year}</span>
                      <span className="text-muted-foreground text-[16px] italic">{p.note}</span>
                    </div>
                    <span className={`${p.color} text-[28px] font-bold`}>{p.revenue} rev</span>
                  </div>
                  <div className="grid grid-cols-6 gap-3 text-center">
                    <div>
                      <div className="text-muted-foreground text-[14px]">COGS</div>
                      <div className="text-foreground text-[18px] font-bold">{p.cogs}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[14px]">Gross Profit</div>
                      <div className="text-foreground text-[18px] font-bold">{p.grossProfit}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[14px]">OPEX</div>
                      <div className="text-foreground text-[18px] font-bold">{p.opex}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[14px]">EBITDA</div>
                      <div className={`${p.color} text-[18px] font-bold`}>{p.ebitda}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[14px]">Debt Svc</div>
                      <div className="text-foreground text-[18px] font-bold">{p.debtService}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-[14px]">Net Cash</div>
                      <div className={`${parseFloat(p.netCash.replace(/[^0-9.-]/g, '')) >= 0 ? 'text-primary' : 'text-red-400'} text-[18px] font-bold`}>{p.netCash}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sensitivity */}
              <div className="animate-fade-up stagger-4 flex gap-4 mb-4">
              <div className="flex-1 bg-black/85 backdrop-blur-xl border border-yellow-400/40 rounded-xl p-4">
                <h4 className="text-yellow-400 text-[18px] font-bold mb-1">Year 1 Reality</h4>
                <p className="text-muted-foreground text-[16px]">First 12 months post-opening. Conservative ramp: 200 avg members, 4 teams, 1 corporate client. <span className="text-foreground font-semibold">–$215K EBITDA covered by reserves.</span></p>
              </div>
              <div className="flex-1 bg-black/85 backdrop-blur-xl border border-primary/40 rounded-xl p-4">
                <h4 className="text-primary text-[18px] font-bold mb-1">Year 3 Stabilization</h4>
                <p className="text-muted-foreground text-[16px]">Year 3 assumes 600 stabilized members at blended ARPU of $295–$310/month and scaled ancillary programs. <span className="text-foreground font-semibold">$580K net after $620K debt service.</span></p>
              </div>
            </div>

            <div className="animate-fade-up stagger-5 grid grid-cols-4 gap-3">
              {keyMetrics.map((r, i) => (
                <div key={i} className="bg-black/85 backdrop-blur-xl border border-white/25 rounded-xl p-4 text-center">
                  <span className="text-[28px] mb-1 block">{r.icon}</span>
                  <div className="text-primary text-[22px] font-bold mb-0.5">{r.value}</div>
                  <div className="text-muted-foreground text-[16px]">{r.label}</div>
                </div>
              ))}
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
              Year 1 = first 12 months of operations following facility completion. Development period funded by capital raise. Sources: RSMeans Construction Cost Data 2024; IHRSA Industry Benchmark Reports; Iron Form internal financial models
            </p>
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}
