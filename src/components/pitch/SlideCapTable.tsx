import heroFinancial from "@/assets/pitch/hero-financial.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCapTable({ active }: { active: boolean }) {
  const capTable = [
    { owner: "Noah Garret (Founder)", pct: 74.96, color: "bg-primary", textColor: "text-primary" },
    { owner: "Angel SAFE Pool", pct: 13.04, color: "bg-accent", textColor: "text-accent" },
    { owner: "Josh Garret (4-yr vest)", pct: 4.0, color: "bg-blue-400", textColor: "text-blue-400" },
    { owner: "Rick Villanueva (4-yr vest)", pct: 4.0, color: "bg-blue-400", textColor: "text-blue-400" },
    { owner: "Reserved Option Pool", pct: 4.0, color: "bg-white/40", textColor: "text-white/70" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFinancial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Ownership Structure</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                Projected Ownership <span className="text-primary">After SAFE Conversion</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8">
                Assuming full $750,000 converts at $5M cap
              </p>

              <div className="animate-fade-up stagger-3 flex gap-10">
                {/* Left: Visual bar chart */}
                <div className="flex-1">
                  <div className="space-y-4">
                    {capTable.map((c, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className={`${c.textColor} text-[20px] font-bold`}>{c.owner}</span>
                          <span className={`${c.textColor} text-[24px] font-bold`}>{c.pct.toFixed(2)}%</span>
                        </div>
                        <div className="h-[36px] bg-black/60 border border-white/15 rounded-full overflow-hidden">
                          <div className={`h-full ${c.color} rounded-full transition-all`} style={{ width: `${c.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex justify-between items-center">
                    <span className="text-white text-[20px] font-bold uppercase tracking-wider">Total</span>
                    <span className="text-primary text-[28px] font-bold">100.00%</span>
                  </div>
                </div>

                {/* Right: Key details */}
                <div className="w-[440px] shrink-0 flex flex-col gap-4">
                  <div className="bg-black/80 backdrop-blur-xl border border-primary/30 rounded-xl p-6">
                    <h3 className="text-primary text-[20px] font-bold mb-3 uppercase tracking-wider">Founder Control</h3>
                    <ul className="space-y-2.5">
                      <li className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        Founder retains 74.96% post-conversion
                      </li>
                      <li className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        Majority voting control at all times
                      </li>
                      <li className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        No board seats issued to angels
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-accent/30 rounded-xl p-6">
                    <h3 className="text-accent text-[20px] font-bold mb-3 uppercase tracking-wider">Partner Vesting</h3>
                    <ul className="space-y-2.5">
                      <li className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        Josh Garret: 4% · 4-year vest · 1-year cliff
                      </li>
                      <li className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        Rick Villanueva: 4% · 4-year vest · 1-year cliff
                      </li>
                      <li className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        Equity is non-controlling, performance-based
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                    <h3 className="text-white text-[20px] font-bold mb-3 uppercase tracking-wider">Option Pool</h3>
                    <p className="text-muted-foreground text-[18px] leading-relaxed">
                      4% reserved for future key hires (GM, COO, etc.). Protects against dilution when scaling the team.
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
