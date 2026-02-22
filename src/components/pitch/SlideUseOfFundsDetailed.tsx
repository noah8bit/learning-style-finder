import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    { dollar: "$280,000", title: "Facility Buildout Improvements", desc: "Interior buildout, flooring, wall systems, lighting, HVAC upgrades", color: "text-primary", borderColor: "border-primary/30" },
    { dollar: "$170,000", title: "Recovery & Medical Equipment", desc: "Cryo, Normatec, PEMF, infrared sauna, cold plunge, treatment tables", color: "text-accent", borderColor: "border-accent/30" },
    { dollar: "$95,000", title: "Lease Deposits & Legal", desc: "Security deposits, lease negotiation, entity formation, contracts", color: "text-primary", borderColor: "border-primary/30" },
    { dollar: "$65,000", title: "Initial Marketing & Launch", desc: "Brand identity, website, pre-launch campaigns, grand opening", color: "text-accent", borderColor: "border-accent/30" },
    { dollar: "$110,000", title: "Payroll (First 4 Months)", desc: "GM, ops manager, admin — runway cushion through initial ramp", color: "text-primary", borderColor: "border-primary/30" },
    { dollar: "$30,000", title: "Operating Reserve", desc: "Emergency fund for unexpected costs during launch period", color: "text-accent", borderColor: "border-accent/30" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[58%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Capital Allocation</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
                Use of Funds — <span className="text-primary">$750,000</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-6">
                Every dollar allocated. No rounding. Exact totals.
              </p>
              <div className="animate-fade-up stagger-3 space-y-3">
                {funds.map((f, i) => (
                  <div key={i} className={`bg-secondary border ${f.borderColor} rounded-xl p-5 flex gap-5 items-center`}>
                    <span className={`${f.color} text-[32px] font-bold shrink-0 min-w-[140px] text-right`}>{f.dollar}</span>
                    <div className="flex-1">
                      <h3 className={`${f.color} text-[22px] font-bold`}>{f.title}</h3>
                      <p className="text-muted-foreground text-[18px] leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="animate-fade-up stagger-4 mt-3 bg-secondary border-2 border-primary/40 rounded-xl p-4 flex items-center justify-between">
                <span className="text-foreground text-[20px] font-bold uppercase tracking-wider">Total Raise</span>
                <span className="text-primary text-[32px] font-bold">$750,000</span>
              </div>

              {/* Capital Stack Roadmap */}
              <div className="animate-fade-up stagger-5 mt-3">
                <h3 className="text-accent text-[16px] font-bold mb-2 uppercase tracking-wider">Capital Stack Roadmap</h3>
                <div className="flex gap-2">
                  {[
                    { phase: "Phase 0", label: "$750K SAFE", desc: "Pre-dev & launch runway", color: "border-primary/40 text-primary" },
                    { phase: "Phase 1", label: "Land Secured", desc: "Lease & site control", color: "border-accent/40 text-accent" },
                    { phase: "Phase 2", label: "$9–10M Equity", desc: "Syndicate close", color: "border-primary/40 text-primary" },
                    { phase: "Phase 3", label: "$5–6M Debt", desc: "Bank financing", color: "border-accent/40 text-accent" },
                  ].map((p, i) => (
                    <div key={i} className={`flex-1 bg-secondary border ${p.color.split(' ')[0]} rounded-lg p-3 text-center`}>
                      <div className={`${p.color.split(' ')[1]} text-[14px] font-bold`}>{p.phase}</div>
                      <div className="text-foreground text-[14px] font-bold mt-0.5">{p.label}</div>
                      <div className="text-muted-foreground text-[12px]">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-[42%] h-full relative">
          <img src={heroTechPlatform} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>
    </ScaledSlide>
  );
}
