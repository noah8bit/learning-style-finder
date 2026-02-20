import ScaledSlide from "./ScaledSlide";

export default function SlideRiskManagement({ active }: { active: boolean }) {
  const risks = [
    { risk: "Construction Delays", level: "High", levelColor: "text-red-400 bg-red-400/10", mitigation: "Phased build-out plan allows partial operations. 15% contingency reserve ($1.8M) built into budget.", icon: "🏗️" },
    { risk: "Market Competition", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "First-mover advantage — no Atlanta competitor offers 30+ sports, medical rehab, and film wing.", icon: "⚔️" },
    { risk: "Economic Downturn", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "Diversified revenue streams. Insurance partnerships and grants provide recession-resistant income.", icon: "📉" },
    { risk: "Staffing Challenges", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "Competitive pay + commission, professional development, and Atlanta's deep sports/film talent pool.", icon: "👥" },
    { risk: "Regulatory & Licensing", level: "Low", levelColor: "text-green-400 bg-green-400/10", mitigation: "Legal counsel engaged early. Experienced ops manager for permits, insurance, and compliance.", icon: "📋" },
    { risk: "Low Initial Membership", level: "Medium", levelColor: "text-yellow-400 bg-yellow-400/10", mitigation: "Pre-launch marketing, community partnerships, and invite-only soft launch for word-of-mouth.", icon: "📊" },
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