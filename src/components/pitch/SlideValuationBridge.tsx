import ScaledSlide from "./ScaledSlide";

export default function SlideValuationBridge({ active }: { active: boolean }) {
  const milestones = [
    { icon: "📝", title: "Full Capital Stack Secured", desc: "Equity commitments + bank term sheet — eliminates fundraising risk", status: "Pre-Build" },
    { icon: "🏗️", title: "Land Closed & Construction Started", desc: "32K sq ft campus under construction — tangible asset creation", status: "Pre-Build" },
    { icon: "👥", title: "150+ Pre-Sale Members", desc: "Proves demand and validates membership pricing model before opening", status: "Pre-Opening" },
    { icon: "🧠", title: "Medical Agreements Secured", desc: "Insurance credentialing + physician referral partnerships in place", status: "Pre-Opening" },
    { icon: "🏢", title: "Corporate Wellness Contracts", desc: "Validates B2B sales channel and guarantees opening-day revenue", status: "Pre-Opening" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Valuation Logic</p>
            <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
              From <span className="text-primary">$5M Cap</span> to Priced Round
            </h2>
            <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8 max-w-[1000px] leading-relaxed">
              The $750K SAFE converts at the next priced round. Here's what must be true before that round happens — and why the step-up is justified.
            </p>

            <div className="animate-fade-up stagger-3 space-y-3 mb-6">
              {milestones.map((m, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-5 flex items-center gap-5">
                  <span className="text-[32px] shrink-0">{m.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-foreground text-[22px] font-bold">{m.title}</h3>
                    <p className="text-muted-foreground text-[18px] leading-relaxed mt-1">{m.desc}</p>
                  </div>
                  <span className="text-primary text-[14px] font-bold bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 shrink-0">{m.status}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 bg-secondary border-2 border-primary/40 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-foreground text-[20px] font-bold uppercase tracking-wider">Valuation Bridge</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                  <div className="text-primary text-[28px] font-bold">$5M</div>
                  <div className="text-muted-foreground text-[14px]">SAFE Cap (Today)</div>
                  <div className="text-muted-foreground text-[12px] mt-1">Pre-revenue · Pre-construction</div>
                </div>
                <div className="text-muted-foreground text-[24px]">→</div>
                <div className="flex-1 bg-secondary border border-border rounded-lg p-4 text-center">
                  <div className="text-foreground text-[16px] font-bold">De-Risk Milestones</div>
                  <div className="text-muted-foreground text-[13px] mt-1">Capital · Land · Pre-sales · Medical</div>
                </div>
                <div className="text-muted-foreground text-[24px]">→</div>
                <div className="flex-1 bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
                  <div className="text-accent text-[28px] font-bold">Priced Round</div>
                  <div className="text-muted-foreground text-[14px]">Full $9.8M Equity Close</div>
                  <div className="text-muted-foreground text-[12px] mt-1">Asset-backed · Demand-validated</div>
                </div>
              </div>
            </div>

            <p className="animate-fade-up stagger-5 text-muted-foreground text-[16px] mt-4 leading-relaxed">
              <span className="text-primary font-bold">Founder has 2+ years sweat equity and personal capital invested.</span> The $5M cap reflects pre-construction risk. SAFE investors are rewarded with a 10% discount and priority conversion when these milestones justify a higher valuation.
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
