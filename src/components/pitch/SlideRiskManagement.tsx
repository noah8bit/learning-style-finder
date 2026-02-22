import ScaledSlide from "./ScaledSlide";

export default function SlideRiskManagement({ active }: { active: boolean }) {
  const risks = [
    { risk: "Construction Delays", level: "High", levelColor: "text-red-400 bg-red-400/10", mitigation: "Pre-engineered steel shell reduces timeline risk. ~$750K contingency reserve built into development budget. GC selection before capital close.", icon: "🏗️" },
    { risk: "Capital Raise Risk", level: "High", levelColor: "text-red-400 bg-red-400/10", mitigation: "Construction begins only after full capital stack secured. SAFE anchors early equity. No phased fundraising during build.", icon: "💰" },
    { risk: "Market Competition", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "Limited regional competitors offer integrated multi-sport, medical, and film infrastructure. Our breadth is the moat.", icon: "⚔️" },
    { risk: "Economic Downturn", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "Diversified revenue streams. Insurance-backed medical revenue provides recession resistance.", icon: "📉" },
    { risk: "Low Initial Membership", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "150+ pre-sale target before opening. 12-month operating reserve. Conservative Year 1 model assumes only 200 avg members.", icon: "📊" },
    { risk: "Regulatory & Licensing", level: "Low", levelColor: "text-green-400 bg-green-400/10", mitigation: "Legal counsel engaged early. Experienced ops manager for permits, insurance, and compliance.", icon: "📋" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Risk Assessment</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-10">
              Risks & <span className="text-primary">Mitigation</span>
            </h2>
            <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-5">
              {risks.map((r, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-6 flex items-start gap-5">
                  <span className="text-[36px] shrink-0">{r.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-foreground text-[24px] font-bold">{r.risk}</h3>
                      <span className={`${r.levelColor} text-[18px] font-semibold uppercase tracking-wider px-4 py-1 rounded-full`}>
                        {r.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">{r.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}