import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideInvestmentAsk({ active }: { active: boolean }) {
  const milestones = [
    { phase: "Tranche 1", amount: "$5M", trigger: "At close", use: "Land acquisition, construction start, permitting, core team hires", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { phase: "Tranche 2", amount: "$4.75M", trigger: "Construction 50%", use: "Equipment, pool infrastructure, tech platform, marketing launch, café build-out", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
    { phase: "Tranche 3", amount: "$2.25M", trigger: "Doors open", use: "Year 1 operating runway, final fit-out, contingency reserve", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  ];

  const noteTerms = [
    { label: "Instrument", value: "Convertible Note" },
    { label: "Valuation Cap", value: "$35M" },
    { label: "Discount Rate", value: "20%" },
    { label: "Interest Rate", value: "5% simple" },
    { label: "Maturity", value: "36 months" },
    { label: "Conversion Trigger", value: "Priced round ≥ $3M" },
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
                Raising <span className="text-primary">$12M</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[24px] mb-8 max-w-[900px] leading-relaxed">
                Convertible note with milestone-gated tranches — no valuation debate today, full upside protection for investors.
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

                {/* Right: Note Terms */}
                <div className="w-[480px] shrink-0 flex flex-col gap-5">
                  <div>
                    <h3 className="text-accent text-[24px] font-bold mb-5 uppercase tracking-wider">Note Terms</h3>
                    <div className="space-y-4">
                      {noteTerms.map((t, i) => (
                        <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-5 flex justify-between items-center">
                          <span className="text-muted-foreground text-[22px]">{t.label}</span>
                          <span className="text-primary text-[26px] font-bold">{t.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <h4 className="text-primary text-[22px] font-bold mb-2">Why This Works</h4>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">
                      Investors convert at the <span className="text-foreground font-bold">lower</span> of a $35M cap or a 20% discount to the next priced round — guaranteeing upside either way.
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
