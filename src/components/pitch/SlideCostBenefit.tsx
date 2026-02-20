import ScaledSlide from "./ScaledSlide";

export default function SlideCostBenefit({ active }: { active: boolean }) {
  const costs = [
    { label: "Land & Construction", amount: "$7.5M – $10.5M", pct: 68 },
    { label: "Equipment & Install", amount: "$2M – $2.5M", pct: 16 },
    { label: "Tech & App Platform", amount: "$750K – $1M", pct: 6 },
    { label: "Marketing & Legal", amount: "$500K – $750K", pct: 4 },
    { label: "Contingency (15%)", amount: "$1.8M", pct: 6 },
  ];

  const benefits = [
    { label: "Year 1 Revenue", amount: "$2.68M – $2.87M", icon: "💰" },
    { label: "Year 3 Net Profit", amount: "$3.4M – $4.2M", icon: "📈" },
    { label: "5-Year Cumulative", amount: "$15M – $20M", icon: "🏦" },
    { label: "Break-Even", amount: "9–13 Months", icon: "⏱️" },
  ];

  const intangibles = [
    { icon: "🌍", title: "Community Impact", desc: "Youth development, talent scouting, and accessible training for underserved athletes" },
    { icon: "🏥", title: "Health Outcomes", desc: "Integrated rehab reduces long-term injury costs; insurance partnerships expand access" },
    { icon: "🎬", title: "Industry Anchor", desc: "Fills a gap in Georgia's #1 film market — stunt training and production space demand" },
    { icon: "📊", title: "Data & IP Value", desc: "Proprietary performance analytics platform creates recurring digital revenue potential" },
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
                <h3 className="text-accent text-[18px] font-bold mb-5 uppercase tracking-wider">Total Investment</h3>
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
                  <span className="text-foreground text-[16px] font-bold">Total Start-Up</span>
                  <span className="text-accent text-[18px] font-bold">$12M – $15M</span>
                </div>
              </div>

              {/* Benefits column */}
              <div className="flex-1">
                <h3 className="text-primary text-[18px] font-bold mb-5 uppercase tracking-wider">Projected Returns</h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
                      <span className="text-[28px] block mb-2">{b.icon}</span>
                      <div className="text-primary text-[20px] font-bold mb-1">{b.amount}</div>
                      <div className="text-muted-foreground text-[13px]">{b.label}</div>
                    </div>
                  ))}
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
              Sources: RSMeans Construction Cost Data; IHRSA Industry Benchmark Reports; Georgia Film Commission Economic Impact Study; Iron Form internal projections
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
