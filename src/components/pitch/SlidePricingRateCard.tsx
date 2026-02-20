import ScaledSlide from "./ScaledSlide";

export default function SlidePricingRateCard({ active }: { active: boolean }) {
  const categories = [
    {
      title: "Martial Arts & Combat",
      color: "text-primary",
      border: "border-primary/30",
      items: [
        { freq: "2x/wk", price: "$175" },
        { freq: "3x/wk", price: "$205" },
        { freq: "Unlimited", price: "$310" },
      ],
    },
    {
      title: "Weapons / HEMA",
      color: "text-primary",
      border: "border-primary/30",
      items: [
        { freq: "2x/wk", price: "$205" },
        { freq: "3x/wk", price: "$235" },
        { freq: "Unlimited", price: "$310" },
      ],
    },
    {
      title: "Dance & Acrobatics",
      color: "text-primary",
      border: "border-primary/30",
      items: [
        { freq: "2x/wk", price: "$170" },
        { freq: "3x/wk", price: "$190" },
        { freq: "Unlimited", price: "$310" },
      ],
    },
    {
      title: "Aerial / Circus",
      color: "text-accent",
      border: "border-accent/30",
      items: [
        { freq: "2x/wk", price: "$205" },
        { freq: "3x/wk", price: "$230" },
        { freq: "Unlimited", price: "$300" },
      ],
    },
    {
      title: "Field & Court",
      color: "text-accent",
      border: "border-accent/30",
      items: [
        { freq: "2x/wk", price: "$185" },
        { freq: "3x/wk", price: "$210" },
        { freq: "Unlimited", price: "$265" },
      ],
    },
    {
      title: "Track & Field",
      color: "text-accent",
      border: "border-accent/30",
      items: [
        { freq: "2x/wk", price: "$220" },
        { freq: "3x/wk", price: "$245" },
        { freq: "Unlimited", price: "$310" },
      ],
    },
  ];

  const specialty = [
    { label: "Stunt Training", price: "$290–$400/mo" },
    { label: "Pilates (Reformer)", price: "$225–$320/mo" },
    { label: "Golf Sim + Coaching", price: "$225–$320/mo" },
    { label: "Olympic Swimming", price: "$160–$210/mo" },
    { label: "Hyrox / CrossFit", price: "$165–$235/mo" },
    { label: "Rock Climbing", price: "$120/mo access" },
    { label: "Yoga Studio", price: "$135–$195/mo" },
    { label: "Rowing Studio", price: "$155–$210/mo" },
  ];

  const ptAndPrivates = [
    { label: "1:1 Skill Private (Standard, 1 hr)", price: "$70–$120/hr" },
    { label: "1:1 Skill Private (Specialty, 1 hr)", price: "$100–$200/hr" },
    { label: "Small Group (2–4 ppl, 1 hr)", price: "$40–$80/person" },
    { label: "General PT (1:1, 1 hr)", price: "$80–$140/hr" },
    { label: "Performance Specialist (1:1, 1 hr)", price: "$100–$200/hr" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-3">Atlanta Market Benchmarks</p>
            <h2 className="animate-fade-up stagger-2 text-[48px] font-bold leading-[1] text-foreground mb-6">
              Service <span className="text-primary">Rate Card</span>
            </h2>

            <div className="animate-fade-up stagger-3 flex gap-6 mb-5">
              {/* Group Classes */}
              <div className="flex-1">
                <h3 className="text-primary text-[16px] font-bold mb-3 uppercase tracking-wider">Group Classes (per person/mo)</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {categories.map((cat, i) => (
                    <div key={i} className={`bg-secondary border ${cat.border} rounded-lg p-3`}>
                      <h4 className={`${cat.color} text-[13px] font-bold mb-1.5`}>{cat.title}</h4>
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex justify-between text-[12px]">
                          <span className="text-muted-foreground">{item.freq}</span>
                          <span className={`${cat.color} font-semibold`}>{item.price}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialty + PT */}
              <div className="w-[420px] shrink-0 space-y-4">
                <div>
                  <h3 className="text-accent text-[16px] font-bold mb-3 uppercase tracking-wider">Specialty Programs</h3>
                  <div className="space-y-1.5">
                    {specialty.map((s, i) => (
                      <div key={i} className="flex justify-between items-center bg-secondary border border-accent/20 rounded-lg px-3 py-1.5">
                        <span className="text-foreground text-[12px]">{s.label}</span>
                        <span className="text-accent text-[12px] font-bold shrink-0 ml-3">{s.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-primary text-[16px] font-bold mb-3 uppercase tracking-wider">Privates & Personal Training</h3>
                  <div className="space-y-1.5">
                    {ptAndPrivates.map((p, i) => (
                      <div key={i} className="flex justify-between items-center bg-secondary border border-primary/20 rounded-lg px-3 py-1.5">
                        <span className="text-foreground text-[12px]">{p.label}</span>
                        <span className="text-primary text-[12px] font-bold shrink-0 ml-3">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: Camps, Seminars, Events, Meal Prep */}
            <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-4">
              <div className="bg-secondary border border-primary/20 rounded-lg p-3">
                <h4 className="text-primary text-[13px] font-bold mb-2">Camps (per week)</h4>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between"><span className="text-muted-foreground">Half-Day Standard</span><span className="text-primary font-semibold">$200–$350</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Full-Day Standard</span><span className="text-primary font-semibold">$300–$450</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Full-Day Elite</span><span className="text-primary font-semibold">$500–$800</span></div>
                </div>
              </div>
              <div className="bg-secondary border border-accent/20 rounded-lg p-3">
                <h4 className="text-accent text-[13px] font-bold mb-2">Seminars (per person)</h4>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between"><span className="text-muted-foreground">Clinic (2–3 hr)</span><span className="text-accent font-semibold">$40–$150</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">One-Day (4–6 hr)</span><span className="text-accent font-semibold">$75–$300</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Weekend (2-day)</span><span className="text-accent font-semibold">$200–$600</span></div>
                </div>
              </div>
              <div className="bg-secondary border border-primary/20 rounded-lg p-3">
                <h4 className="text-primary text-[13px] font-bold mb-2">Events</h4>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between"><span className="text-muted-foreground">Athlete Entry</span><span className="text-primary font-semibold">$40–$150</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Team Entry</span><span className="text-primary font-semibold">$300–$1.5K</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Vendor Booth</span><span className="text-primary font-semibold">$250–$2K</span></div>
                </div>
              </div>
              <div className="bg-secondary border border-accent/20 rounded-lg p-3">
                <h4 className="text-accent text-[13px] font-bold mb-2">Meal Prep (per month)</h4>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between"><span className="text-muted-foreground">Entry (10 meals/wk)</span><span className="text-accent font-semibold">$440–$560</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Premium (14 meals/wk)</span><span className="text-accent font-semibold">$720–$880</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Iron Form Plans</span><span className="text-accent font-semibold">$300–$800</span></div>
                </div>
              </div>
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: Atlanta-area facility surveys 2024–2025; ClassPass market rate data; IHRSA membership pricing benchmarks; Iron Form internal research
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
