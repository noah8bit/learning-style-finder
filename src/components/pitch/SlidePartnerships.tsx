import ScaledSlide from "./ScaledSlide";

export default function SlidePartnerships({ active }: { active: boolean }) {
  const structure = [
    {
      icon: "💰",
      title: "Revenue Sharing",
      items: [
        "10–20% commission on neuromuscular therapy & peptide revenue",
        "Incentivizes promotion and client attraction",
        "Ensures facility benefits from partner space usage",
      ],
    },
    {
      icon: "📊",
      title: "Equity Partnership",
      items: [
        "5–15% ownership stake per partner",
        "Aligns interests with Iron Form's overall success",
        "Defined roles in marketing, service delivery & operations",
      ],
    },
    {
      icon: "🎯",
      title: "Brand Integration",
      items: [
        "Jointly branded services within the facility",
        "Cohesive brand image reflecting high-quality offerings",
        "Collaborative marketing reaching wider audiences",
      ],
    },
    {
      icon: "📈",
      title: "Performance & Tracking",
      items: [
        "KPIs to evaluate service performance",
        "Client tracking system for accurate revenue splits",
        "Regular meetings for strategy alignment",
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
              Revenue Sharing & <span className="text-primary">Equity Model</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] mb-12 max-w-[900px]">
              Combined partnership structure with Josh Garret & Rick Villanueva — incentivizing performance, sharing risk and reward, and fostering collaborative growth.
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
                <span className="font-bold text-primary">Win-Win Outcome:</span> Incentivizes performance, shares risk/reward, and creates a collaborative environment supporting growth for all parties.
              </p>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
