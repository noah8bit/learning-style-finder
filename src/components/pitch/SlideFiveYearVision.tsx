import heroRockClimbing from "@/assets/pitch/hero-rockclimbing.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFiveYearVision({ active }: { active: boolean }) {
  const milestones = [
    { year: "Year 1–2", icon: "📍", title: "Establish & Prove", items: ["32,000 sq ft purpose-built campus operational", "200 → 450 members", "Hit EBITDA breakeven", "Validate medical + wellness revenue"] },
    { year: "Year 3–4", icon: "📈", title: "Scale & Optimize", items: ["600+ members, EBITDA >$1.2M", "Begin investor distributions", "10+ corporate clients", "Digital platform: 1,500+ subscribers"] },
    { year: "Year 5+", icon: "🚀", title: "Expand & Exit", items: ["Expansion only after $1.5M EBITDA sustained 12 months", "Iron Form Digital LLC — wholly owned subsidiary", "$8M+ revenue potential", "Combined enterprise valuation: $12M–$18M"] },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroRockClimbing} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Trajectory</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-4">
                5-Year <span className="text-primary">Vision</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[22px] mb-10 max-w-[900px]">
                Investors fund trajectories. Here's what Iron Form becomes.
              </p>

              <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-6 mb-8">
                {milestones.map((m, i) => (
                  <div key={i} className="bg-black/85 backdrop-blur-xl border border-primary/40 rounded-xl p-7 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[36px]">{m.icon}</span>
                      <div>
                        <div className="text-primary text-[14px] font-bold uppercase tracking-wider">{m.year}</div>
                        <h3 className="text-white text-[24px] font-bold">{m.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      {m.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span className="text-muted-foreground text-[19px] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-[22px] font-bold uppercase tracking-wider">What This Becomes</h3>
                  <p className="text-muted-foreground text-[16px] mt-1">1 flagship campus · 2nd location in a major metro · 1 digital platform · $8M+ revenue potential</p>
                </div>
                <div className="text-right">
                  <div className="text-primary text-[32px] font-bold">$12M–$18M</div>
                  <div className="text-muted-foreground text-[14px]">Combined Enterprise Valuation</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
