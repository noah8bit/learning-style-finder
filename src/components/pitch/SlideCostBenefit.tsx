import ScaledSlide from "./ScaledSlide";

export default function SlideCostBenefit({ active }: { active: boolean }) {
  const costs = [
    { label: "Land Acquisition", amount: "~$2.3M", pct: 15 },
    { label: "Site Work & Utilities", amount: "~$1.6M", pct: 10 },
    { label: "Vertical Build (32K sq ft)", amount: "~$8M", pct: 52 },
    { label: "Outdoor Build", amount: "~$2M", pct: 13 },
    { label: "Equipment & Install", amount: "~$1.4M", pct: 9 },
    { label: "Soft Costs + Contingency", amount: "~$2.7M", pct: 17 },
  ];

  const projections = [
    { label: "Year 1 Revenue", amount: "$1.66M", icon: "📊" },
    { label: "Year 2 Revenue", amount: "$3.17M", icon: "📈" },
    { label: "Year 3 Revenue", amount: "$5.01M", icon: "💰" },
    { label: "Year 3 EBITDA", amount: "$1.2M", icon: "🏦" },
  ];

  const intangibles = [
    { icon: "🌍", title: "Community Impact", desc: "Youth development, talent scouting, and accessible training for underserved athletes" },
    { icon: "🏥", title: "Health Outcomes", desc: "Integrated rehab reduces injury costs; insurance partnerships expand access" },
    { icon: "🎬", title: "Industry Anchor", desc: "Fills gap in Georgia's #1 film market — stunt training and production space" },
    { icon: "📊", title: "Phase 2 Upside", desc: "Expansion triggered at EBITDA >$1.5M or 700+ members — franchise potential" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Investment Analysis</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
              Cost vs. <span className="text-primary">Benefit</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-10 mb-8">
              {/* Costs column */}
              <div className="flex-1">
                <h3 className="text-accent text-[18px] font-bold mb-5 uppercase tracking-wider">Capital Investment</h3>
                <div className="space-y-3">
                  {costs.map((c, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground text-[14px]">{c.label}</span>
                        <span className="text-accent font-semibold text-[14px]">{c.amount}</span>
                      </div>
                      <div className="w-full h-[6px] bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-accent/10 border border-accent/30 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-foreground text-[16px] font-bold">Total Phase 1</span>
                  <span className="text-accent text-[18px] font-bold">~$15M–$16M</span>
                </div>
                <div className="mt-2 bg-secondary border border-border rounded-lg p-3">
                  <p className="text-muted-foreground text-[13px]">
                    <span className="text-foreground font-semibold">Capital Stack:</span> $9–10M equity (30–35%) + $5–6M bank debt · Debt service ~$620K/yr
                  </p>
                </div>
              </div>

              {/* Returns column */}
              <div className="flex-1">
                <h3 className="text-primary text-[18px] font-bold mb-5 uppercase tracking-wider">Projected Returns</h3>
                <div className="grid grid-cols-2 gap-4">
                  {projections.map((b, i) => (
                    <div key={i} className="bg-secondary border border-primary/20 rounded-xl p-5 text-center">
                      <span className="text-[28px] block mb-2">{b.icon}</span>
                      <div className="text-primary text-[20px] font-bold mb-1">{b.amount}</div>
                      <div className="text-muted-foreground text-[13px]">{b.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-primary/10 border border-primary/30 rounded-xl p-4">
                  <p className="text-foreground text-[14px]">
                    <span className="text-primary font-bold">Year 3 net after debt:</span> ~$575K · Phase 2 triggers at EBITDA &gt;$1.5M sustained 12 months
                  </p>
                </div>
              </div>
            </div>

            {/* Intangible benefits */}
            <div className="animate-fade-up stagger-4">
              <h3 className="text-foreground text-[14px] font-bold mb-3 uppercase tracking-wider">Beyond Financial Returns</h3>
              <div className="grid grid-cols-4 gap-4">
                {intangibles.map((t, i) => (
                  <div key={i} className="bg-secondary border border-border rounded-xl p-4">
                    <span className="text-[22px] block mb-2">{t.icon}</span>
                    <h4 className="text-foreground text-[14px] font-bold mb-1">{t.title}</h4>
                    <p className="text-muted-foreground text-[12px] leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: RSMeans Construction Cost Data 2024; IHRSA Industry Benchmark Reports; Iron Form internal projections
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
