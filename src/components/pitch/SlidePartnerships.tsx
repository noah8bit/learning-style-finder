import ScaledSlide from "./ScaledSlide";

export default function SlidePartnerships({ active }: { active: boolean }) {
  const structure = [
    {
      icon: "📊",
      title: "Equity Structure",
      items: [
        "5–10% equity per partner (10–20% total allocated)",
        "Reflects vital expertise while preserving investor equity",
        "Clear roles & expectations defined at inception",
      ],
    },
    {
      icon: "📅",
      title: "Performance-Based Vesting",
      items: [
        "3–5 year vesting schedule tied to contribution",
        "Example: 10% vests at 2% per year over 5 years",
        "Promotes loyalty, alignment & long-term commitment",
      ],
    },
    {
      icon: "💰",
      title: "Revenue Sharing & Bonuses",
      items: [
        "10–20% commission on therapy & peptide revenue",
        "Performance bonuses & milestone rewards",
        "Well-rounded compensation beyond equity alone",
      ],
    },
    {
      icon: "🎯",
      title: "Brand Integration",
      items: [
        "Jointly branded services within the facility",
        "Collaborative marketing reaching wider audiences",
        "KPIs & tracking for accurate revenue splits",
      ],
    },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Strategic Partnerships</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
              Equity & <span className="text-primary">Vesting Model</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] mb-12 max-w-[900px]">
              Structured partnership with Josh Garret & Rick Villanueva — 5–10% equity each with performance-based vesting, complemented by revenue sharing and milestone incentives.
            </p>
            <div className="animate-fade-up stagger-4 grid grid-cols-2 gap-6">
              {structure.map((s, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[32px]">{s.icon}</span>
                    <h3 className="text-foreground text-[22px] font-bold">{s.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-[15px] flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="animate-fade-up stagger-5 mt-6 bg-primary/10 border border-primary/20 rounded-xl p-5">
              <p className="text-foreground text-[15px]">
                <span className="font-bold text-primary">Founder Retains Control:</span> 5–10% per partner preserves majority ownership for future investors while aligning partner interests with Iron Form's long-term success through vesting and performance incentives.
              </p>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
