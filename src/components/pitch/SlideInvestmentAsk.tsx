import heroPartnerships from "@/assets/pitch/hero-partnerships.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideInvestmentAsk({ active }: { active: boolean }) {
  const fundingUse = [
    { pct: "40%", title: "Construction & Infrastructure", desc: "Land acquisition, facility build-out, and specialized training environments", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { pct: "20%", title: "Equipment Purchases", desc: "Recovery tech, Olympic swimming lanes, golf sims, climbing walls, and training gear", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
    { pct: "15%", title: "Operating Expenses (Year 1)", desc: "Staff salaries, utilities, insurance, and day-to-day operations during launch phase", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { pct: "10%", title: "Marketing & Branding", desc: "Grand opening campaigns, digital presence, community partnerships, and sponsorships", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
    { pct: "10%", title: "Technology & App Platform", desc: "Athlete performance tracking, analytics dashboards, and member management systems", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { pct: "5%", title: "Contingency Buffer", desc: "Reserve for unforeseen costs, permitting delays, and market adjustments", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
  ];

  const equityTiers = [
    { range: "$1M – $3M", equity: "5 – 10%", perks: "Board observer seat, quarterly reports" },
    { range: "$3M – $5M", equity: "10 – 15%", perks: "Board seat, priority distributions" },
    { range: "$5M – $9M", equity: "15 – 25%", perks: "Board seat, co-governance rights, performance bonuses" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroPartnerships} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">The Ask</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-3">
                Seeking <span className="text-primary">$5M – $9M</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[17px] mb-8 max-w-[800px]">
                Comprehensive capital to cover start-up build-out, first-year operations, and a strategic buffer — structured to incentivize early investors while preserving founder control.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-8">
                {/* Left: Funding breakdown */}
                <div className="flex-1">
                  <h3 className="text-primary text-[16px] font-bold mb-4 uppercase tracking-wider">Investment Breakdown</h3>
                  <div className="space-y-3">
                    {fundingUse.map((f, i) => (
                      <div key={i} className={`${f.bg} border ${f.border} rounded-lg p-4 flex gap-4 items-start`}>
                        <span className={`${f.color} text-[24px] font-bold shrink-0 min-w-[55px]`}>{f.pct}</span>
                        <div>
                          <h4 className={`${f.color} text-[15px] font-bold`}>{f.title}</h4>
                          <p className="text-muted-foreground text-[12px] leading-relaxed">{f.desc}</p>
                        </div>
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
