import ScaledSlide from "./ScaledSlide";

export default function SlideRiskManagement({ active }: { active: boolean }) {
  const risks = [
    {
      risk: "Market Competition",
      level: "Medium",
      levelColor: "text-yellow-400",
      mitigation: "First-mover advantage with integrated model. No Atlanta competitor offers 30+ sports, medical rehab, and film wing under one roof.",
      icon: "⚔️",
    },
    {
      risk: "Economic Downturn",
      level: "Medium",
      levelColor: "text-yellow-400",
      mitigation: "Diversified revenue streams reduce single-source dependency. Insurance partnerships and grants provide recession-resistant income.",
      icon: "📉",
    },
    {
      risk: "Construction Delays",
      level: "High",
      levelColor: "text-red-400",
      mitigation: "Phased build-out plan allows partial operations during construction. Contingency budget of 10–15% built into projections.",
      icon: "🏗️",
    },
    {
      risk: "Staffing Challenges",
      level: "Medium",
      levelColor: "text-yellow-400",
      mitigation: "Competitive pay + commission model, professional development programs, and Atlanta's deep talent pool in sports and film industries.",
      icon: "👥",
    },
    {
      risk: "Regulatory & Licensing",
      level: "Low",
      levelColor: "text-green-400",
      mitigation: "Legal counsel engaged early. Experienced operations manager to handle permits, insurance compliance, and health department requirements.",
      icon: "📋",
    },
    {
      risk: "Low Initial Membership",
      level: "Medium",
      levelColor: "text-yellow-400",
      mitigation: "Pre-launch marketing campaign, community partnerships, and invite-only soft launch to build word-of-mouth before grand opening.",
      icon: "📊",
    },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Risk Assessment</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
              Risks & <span className="text-primary">Mitigation Plans</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] mb-10 max-w-[900px]">
              A proactive approach to identifying challenges and implementing countermeasures before they impact operations.
            </p>
            <div className="animate-fade-up stagger-4 space-y-4">
              {risks.map((r, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-5 flex items-start gap-5">
                  <span className="text-[28px] shrink-0 mt-1">{r.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <h3 className="text-foreground text-[18px] font-bold">{r.risk}</h3>
                      <span className={`${r.levelColor} text-[13px] font-semibold uppercase tracking-wider bg-white/5 px-3 py-0.5 rounded-full`}>
                        {r.level} Risk
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[14px] leading-relaxed">{r.mitigation}</p>
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
