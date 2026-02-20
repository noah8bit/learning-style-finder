import heroSwimmingPool from "@/assets/pitch/hero-swimming-pool.jpg";
import heroRockClimbing from "@/assets/pitch/hero-rockclimbing.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlidePhase2Expansion({ active }: { active: boolean }) {
  const phase2Items = [
    {
      icon: "🏊",
      title: "Olympic Swimming Complex",
      cost: "$2M – $3M",
      timeline: "Year 2–3",
      desc: "6-lane, 25-yard competition pool with lap lanes, warm-up pool, and aquatic therapy area. Enables swim team retainments, aquatic rehab programs, and community swim lessons.",
      revenue: "+$180K–$250K/yr in memberships, lap fees, swim team retainers, and aquatic therapy",
      image: heroSwimmingPool,
    },
    {
      icon: "🧗",
      title: "Climbing Wall Complex",
      cost: "$500K – $800K",
      timeline: "Year 2",
      desc: "40-foot lead wall, bouldering cave, and auto-belay stations. Supports competitive climbing teams, youth programs, and drop-in climbing sessions.",
      revenue: "+$80K–$120K/yr in day passes, memberships, and competition hosting",
      image: heroRockClimbing,
    },
  ];

  const totalCost = "$2.5M – $3.8M";
  const totalRevenue = "+$260K – $370K/yr";

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-accent font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Profit-Funded Growth</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-3">
              Phase 2 <span className="text-accent">Expansion</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[24px] mb-8 max-w-[1000px] leading-relaxed">
              Funded entirely by <span className="text-foreground font-semibold">Year 1–2 operating profits</span> — no additional investor capital required. Adds high-margin amenities that accelerate revenue growth.
            </p>

            <div className="animate-fade-up stagger-4 space-y-6">
              {phase2Items.map((item, i) => (
                <div key={i} className="flex gap-6 items-stretch">
                  {/* Image */}
                  <div className="w-[320px] shrink-0 rounded-xl overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-secondary border border-border rounded-xl p-7">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="text-[40px]">{item.icon}</span>
                        <h3 className="text-foreground text-[28px] font-bold">{item.title}</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-accent text-[28px] font-bold block">{item.cost}</span>
                        <span className="text-muted-foreground text-[16px]">{item.timeline}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-[20px] leading-relaxed mb-3">{item.desc}</p>
                    <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
                      <span className="text-primary text-[18px] font-bold">{item.revenue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="animate-fade-up stagger-5 mt-6 flex gap-6">
              <div className="flex-1 bg-accent/10 border border-accent/30 rounded-xl p-5 flex justify-between items-center">
                <span className="text-foreground text-[22px] font-bold">Phase 2 Investment</span>
                <span className="text-accent text-[28px] font-bold">{totalCost}</span>
              </div>
              <div className="flex-1 bg-primary/10 border border-primary/30 rounded-xl p-5 flex justify-between items-center">
                <span className="text-foreground text-[22px] font-bold">Additional Annual Revenue</span>
                <span className="text-primary text-[28px] font-bold">{totalRevenue}</span>
              </div>
            </div>

            <p className="animate-fade-up stagger-5 mt-4 text-muted-foreground text-[18px] leading-relaxed max-w-[1200px]">
              <span className="text-foreground font-semibold">Strategic advantage:</span> Phasing capital-intensive amenities lets us prove the model, generate cash flow, and build these additions without diluting equity or taking on debt.
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
