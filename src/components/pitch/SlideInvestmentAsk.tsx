import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideInvestmentAsk({ active }: { active: boolean }) {
  const milestones = [
    { phase: "Tranche 1", amount: "$3M", trigger: "At close", use: "Land acquisition, construction start, core team hiring", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { phase: "Tranche 2", amount: "$2.5M", trigger: "Construction 50%", use: "Equipment procurement, tech platform build, marketing launch", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
    { phase: "Tranche 3", amount: "$1.5M", trigger: "Doors open", use: "Year 1 operating runway, contingency buffer, growth initiatives", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  ];

  const equityTiers = [
    { range: "$1M – $3M", equity: "5 – 10%", perks: "Board observer seat, quarterly reports" },
    { range: "$3M – $5M", equity: "10 – 15%", perks: "Board seat, priority distributions" },
    { range: "$5M+", equity: "15 – 20%", perks: "Board seat, co-governance rights, performance bonuses" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="Facility under construction" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">The Ask</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-3">
                Raising <span className="text-primary">$7M</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[17px] mb-8 max-w-[800px]">
                Milestone-based funding that de-risks your investment — capital is deployed only as we hit build-out targets, preserving founder control while maximizing investor confidence.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-8">
                {/* Left: Milestone-based tranches */}
                <div className="flex-1">
                  <h3 className="text-primary text-[16px] font-bold mb-4 uppercase tracking-wider">Milestone-Based Tranches</h3>
                  <div className="space-y-4">
                    {milestones.map((m, i) => (
                      <div key={i} className={`${m.bg} border ${m.border} rounded-lg p-5`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${m.color} text-[18px] font-bold`}>{m.phase}</span>
                          <span className={`${m.color} text-[28px] font-bold`}>{m.amount}</span>
                        </div>
                        <p className="text-muted-foreground text-[13px] mb-1"><span className="text-foreground font-semibold">Trigger:</span> {m.trigger}</p>
                        <p className="text-muted-foreground text-[13px]">{m.use}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Equity + structure */}
                <div className="w-[420px] shrink-0 flex flex-col gap-5">
                  <div>
                    <h3 className="text-accent text-[16px] font-bold mb-4 uppercase tracking-wider">Tiered Equity Structure</h3>
                    <div className="space-y-3">
                      {equityTiers.map((t, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-5">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-foreground text-[16px] font-bold">{t.range}</span>
                            <span className="text-primary text-[18px] font-bold">{t.equity}</span>
                          </div>
                          <p className="text-muted-foreground text-[13px]">{t.perks}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
                    <h4 className="text-primary text-[15px] font-bold mb-2">Founder Protection</h4>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">
                      Equity caps at 25% for outside investors, preserving majority ownership and decision-making authority for future growth rounds and strategic pivots.
                    </p>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
                    <h4 className="text-accent text-[15px] font-bold mb-2">Early-Backer Incentives</h4>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">
                      Investors committing during the concept stage receive favorable equity terms, performance-based bonuses, and priority profit distributions.
                    </p>
                  </div>
                </div>
              </div>

              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px]">
                Total start-up costs estimated at $4.35M–$8.9M. Funding range accounts for operational runway and contingency. Equity terms negotiable based on investment size and timing.
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
