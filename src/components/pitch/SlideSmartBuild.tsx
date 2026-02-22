import heroFacilityInterior from "@/assets/pitch/hero-facility-interior.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideSmartBuild({ active }: { active: boolean }) {
  const strategies = [
    {
      icon: "🏗️",
      title: "Pre-Engineered Steel Shell",
      saving: "Save 40–60%",
      desc: "Steel shell + metal panel at $15–$60/sq ft for the structure, vs $170–$390/sq ft fully finished traditional (Reich Construction 2025). We finish selectively — athletic training space doesn't need Class A office finishes.",
    },
    {
      icon: "⚡",
      title: "Exposed Industrial Aesthetic",
      saving: "Save $500K+",
      desc: "Exposed ductwork, steel beams, and polished concrete floors are cheaper to build AND deliver the raw, powerful athletic brand Iron Form embodies.",
    },
    {
      icon: "✨",
      title: "Strategic Premium Zones",
      saving: "80/20 Rule",
      desc: "Premium finishes where members experience them — lobby, recovery suite, café, locker rooms. Utilitarian where they don't — offices, storage, mechanical rooms.",
    },
    {
      icon: "🔧",
      title: "Modular Interior Build-Out",
      saving: "Flex Capital",
      desc: "Training zones use movable walls, modular flooring, and reconfigurable layouts — lower build cost, easy expansion, and adaptable to demand.",
    },
  ];

  const comparisons = [
    { facility: "IMG Academy", sqft: "Pre-Eng Steel", look: "World-Class", note: "Bradenton, FL" },
    { facility: "Lifetime Fitness", sqft: "Steel Frame", look: "Luxury", note: "100+ locations" },
    { facility: "Movement Climbing", sqft: "Steel Shell", look: "Premium", note: "Denver, Austin" },
    { facility: "F45 Flagships", sqft: "Metal Panel", look: "Modern", note: "Global" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[55%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Construction Strategy</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
                Smart Build, <span className="text-primary">Premium Feel</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-7 leading-relaxed">
                How we deliver a 32K sq ft purpose-built campus within our <span className="text-foreground font-semibold">~$8M vertical build budget</span> at ~$250/sq ft — the same playbook institutional facilities worldwide use.
              </p>

              <div className="animate-fade-up stagger-4 space-y-4">
                {strategies.map((s, i) => (
                  <div key={i} className="bg-secondary border border-border rounded-xl p-5 flex gap-5 items-start">
                    <span className="text-[36px] shrink-0">{s.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-foreground text-[22px] font-bold">{s.title}</h3>
                        <span className="text-primary text-[18px] font-bold bg-primary/10 border border-primary/30 rounded-full px-4 py-0.5">{s.saving}</span>
                      </div>
                      <p className="text-muted-foreground text-[18px] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-[45%] h-full flex flex-col">
          {/* Top: facility image */}
          <div className="h-[55%] relative">
            <img src={heroFacilityInterior} alt="Modern athletic facility interior" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
          {/* Bottom: comparisons */}
          <div className="flex-1 px-8 flex flex-col justify-center">
            {active && (
              <div className="animate-fade-up stagger-5">
                <h3 className="text-accent text-[18px] font-bold mb-4 uppercase tracking-wider">Who Else Builds This Way</h3>
                <div className="space-y-2.5">
                  {comparisons.map((c, i) => (
                    <div key={i} className="flex items-center justify-between bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                      <div>
                        <span className="text-foreground text-[18px] font-bold">{c.facility}</span>
                        <span className="text-muted-foreground text-[14px] ml-3">{c.note}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-accent text-[16px] font-medium">{c.sqft}</span>
                        <span className="text-primary text-[16px] font-bold">{c.look}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Phase 2 upgrade callout */}
                <div className="mt-4 bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <p className="text-foreground text-[16px] leading-relaxed">
                    <span className="text-primary font-bold">Execution Timeline:</span> Estimated 18–20 month development cycle. Pre-development (4–6 mo) → Foundation & Steel (3–4 mo) → Interior fit-out (4–6 mo) → Pre-opening (2–3 mo). GC selection in progress. Future expansions layered as revenue grows — no structural changes needed.
                  </p>
                </div>
                <p className="mt-3 text-muted-foreground/50 text-[11px] leading-tight">
                  Sources: Reich Construction LLC – Pre-Engineered Steel Recreation Buildings (2025); BuildingsGuide – Metal Building Prices (2026); RSMeans Construction Cost Data
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}
