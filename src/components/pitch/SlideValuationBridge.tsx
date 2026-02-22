import ScaledSlide from "./ScaledSlide";

export default function SlideValuationBridge({ active }: { active: boolean }) {
  const milestones = [
    { icon: "📝", title: "Lease Signed & Site Secured", desc: "Physical location locked — eliminates site risk", status: "SAFE Funded" },
    { icon: "🏗️", title: "Phase 1 Buildout Completed", desc: "32K sq ft facility operational and revenue-generating", status: "SAFE Funded" },
    { icon: "👥", title: "150+ Active Members", desc: "Proves demand and validates membership pricing model", status: "SAFE Funded" },
    { icon: "🧠", title: "Medical Engine Live", desc: "NMT + peptide clinic generating recurring revenue", status: "SAFE Funded" },
    { icon: "🏢", title: "Corporate Wellness Pilot Signed", desc: "Validates B2B sales channel and enterprise pricing", status: "SAFE Funded" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Valuation Logic</p>
            <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
              From <span className="text-primary">$5M Cap</span> to Next Round
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
                  <div className="text-muted-foreground text-[12px] mt-1">Pre-revenue · Concept stage</div>
                </div>
                <div className="text-muted-foreground text-[24px]">→</div>
                <div className="flex-1 bg-secondary border border-border rounded-lg p-4 text-center">
                  <div className="text-foreground text-[16px] font-bold">De-Risk Milestones</div>
                  <div className="text-muted-foreground text-[13px] mt-1">Lease · Members · Revenue · Medical</div>
                </div>
                <div className="text-muted-foreground text-[24px]">→</div>
                <div className="flex-1 bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
                  <div className="text-accent text-[28px] font-bold">Priced Round</div>
                  <div className="text-muted-foreground text-[14px]">$9–10M Equity Raise</div>
                  <div className="text-muted-foreground text-[12px] mt-1">Revenue-validated · Site secured</div>
                </div>
              </div>
            </div>

            <p className="animate-fade-up stagger-5 text-muted-foreground text-[16px] mt-4 leading-relaxed">
              <span className="text-primary font-bold">Founder has 2+ years sweat equity and personal capital invested.</span> The $5M cap reflects concept-stage risk. SAFE investors are rewarded with a 10% discount and priority conversion when these milestones justify a higher valuation.
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
