import heroFinancial from "@/assets/pitch/hero-financial.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialProjections({ active }: { active: boolean }) {
  const proForma = [
    {
      year: "Year 1", revenue: "$1.66M", cogs: "$450K", grossProfit: "$1.21M",
      opex: "$1.23M", ebitda: "-$25K", debtService: "$620K", netCash: "-$645K",
      note: "Runway year — covered by working capital reserve",
      barWidth: 33, color: "text-accent"
    },
    {
      year: "Year 2", revenue: "$3.17M", cogs: "$1.05M", grossProfit: "$2.12M",
      opex: "$1.60M", ebitda: "$520K", debtService: "$620K", netCash: "-$100K",
      note: "Tight but survivable — push membership past 450",
      barWidth: 63, color: "text-yellow-400"
    },
    {
      year: "Year 3", revenue: "$5.01M", cogs: "$1.73M", grossProfit: "$3.28M",
      opex: "$2.09M", ebitda: "$1.20M", debtService: "$620K", netCash: "$575K",
      note: "Stable and bankable — net positive after debt",
      barWidth: 100, color: "text-primary"
    },
  ];

  const keyMetrics = [
    { label: "Break-Even", value: "Year 1 EBITDA", icon: "⏱️" },
    { label: "Yr 3 EBITDA", value: "$1.2M", icon: "📈" },
    { label: "Yr 3 Net Cash", value: "$575K", icon: "💰" },
    { label: "Debt Service", value: "$620K/yr", icon: "🏦" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFinancial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">3-Year Pro Forma</p>
            <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-6">
              Financial <span className="text-primary">Projections</span>
            </h2>

            <div className="animate-fade-up stagger-3 space-y-4 mb-5">
              {proForma.map((p, i) => (
                <div key={i} className="bg-black/60 border border-white/15 rounded-xl p-5">
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
              <div className="flex-1 bg-accent/10 border border-accent/30 rounded-xl p-4">
                <h4 className="text-accent text-[18px] font-bold mb-1">Stress Test (Year 2)</h4>
                <p className="text-muted-foreground text-[16px]">Revenue $3.8M → EBITDA $800K → Net after debt $180K. <span className="text-foreground font-semibold">Survivable.</span></p>
              </div>
              <div className="flex-1 bg-primary/10 border border-primary/30 rounded-xl p-4">
                <h4 className="text-primary text-[18px] font-bold mb-1">Sensitivity (Year 3)</h4>
                <p className="text-muted-foreground text-[16px]">If only 500 members: Revenue -$400K → EBITDA ~$900K → Net ~$280K. <span className="text-foreground font-semibold">Viable but no expansion.</span></p>
              </div>
            </div>

            <div className="animate-fade-up stagger-5 grid grid-cols-4 gap-3">
              {keyMetrics.map((r, i) => (
                <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                  <span className="text-[28px] mb-1 block">{r.icon}</span>
                  <div className="text-primary text-[22px] font-bold mb-0.5">{r.value}</div>
                  <div className="text-muted-foreground text-[16px]">{r.label}</div>
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
