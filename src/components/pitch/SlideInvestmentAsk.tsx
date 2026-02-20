import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideInvestmentAsk({ active }: { active: boolean }) {
  const milestones = [
    { phase: "Tranche 1", amount: "$6M", trigger: "At close", use: "Land acquisition, construction start, permitting, core team hires", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { phase: "Tranche 2", amount: "$5.5M", trigger: "Construction 50%", use: "Equipment, pool, tech platform, marketing launch, café build-out", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
    { phase: "Tranche 3", amount: "$2.5M", trigger: "Doors open", use: "Year 1 operating runway, final fit-out, contingency", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  ];

  const equityTiers = [
    { range: "$1M – $3M", equity: "3 – 6%", perks: "Board observer, quarterly reports" },
    { range: "$3M – $6M", equity: "6 – 12%", perks: "Board seat, priority distributions" },
    { range: "$6M+", equity: "12 – 18%", perks: "Board seat, co-governance, bonuses" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">The Ask</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-white mb-3">
                Raising <span className="text-primary">$14M</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[24px] mb-8 max-w-[900px] leading-relaxed">
                Full capital for a 60,000+ sq ft facility on an 8–12 acre campus — milestone-gated tranches that de-risk your investment.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-10">
                {/* Left: Tranches */}
                <div className="flex-1">
                  <h3 className="text-primary text-[24px] font-bold mb-5 uppercase tracking-wider">Milestone Tranches</h3>
                  <div className="space-y-5">
                    {milestones.map((m, i) => (
                      <div key={i} className={`${m.bg} border ${m.border} rounded-xl p-7`}>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`${m.color} text-[28px] font-bold`}>{m.phase}</span>
                          <span className={`${m.color} text-[36px] font-bold`}>{m.amount}</span>
                        </div>
                        <p className="text-muted-foreground text-[22px]"><span className="text-foreground font-semibold">Trigger:</span> {m.trigger}</p>
                        <p className="text-muted-foreground text-[22px]">{m.use}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Equity */}
                <div className="w-[480px] shrink-0 flex flex-col gap-5">
                  <div>
                    <h3 className="text-accent text-[24px] font-bold mb-5 uppercase tracking-wider">Equity Structure</h3>
                    <div className="space-y-4">
                      {equityTiers.map((t, i) => (
                        <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-foreground text-[24px] font-bold">{t.range}</span>
                            <span className="text-primary text-[28px] font-bold">{t.equity}</span>
                          </div>
                          <p className="text-muted-foreground text-[22px]">{t.perks}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <h4 className="text-primary text-[24px] font-bold mb-2">Founder Protection</h4>
                    <p className="text-muted-foreground text-[22px] leading-relaxed">
                      Investor equity capped at <span className="text-foreground font-bold">20%</span>. Founder retains <span className="text-foreground font-bold">70%+</span> ownership and full operational control.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}