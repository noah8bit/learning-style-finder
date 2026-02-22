import ScaledSlide from "./ScaledSlide";

export default function SlidePricingAppendix({ active }: { active: boolean }) {
  const rows = [
    { label: "Martial Arts / Combat", col1: "$175", col2: "$205", col3: "$245", col4: "$310" },
    { label: "Weapons / HEMA", col1: "$205", col2: "$235", col3: "$280", col4: "$310" },
    { label: "Dance & Acrobatics", col1: "$170", col2: "$190", col3: "$215", col4: "$310" },
    { label: "Aerial / Circus", col1: "$205", col2: "$230", col3: "$270", col4: "$300" },
    { label: "Field & Court", col1: "$185", col2: "$210", col3: "$250", col4: "$265" },
    { label: "Track & Field (Standard)", col1: "$220", col2: "$245", col3: "$290", col4: "$310" },
    { label: "Track & Field (Specialty)", col1: "$255", col2: "$290", col3: "$340", col4: "$360" },
    { label: "Hyrox / CrossFit", col1: "$165", col2: "$185", col3: "—", col4: "$220–$235" },
    { label: "Pilates (Reformer)", col1: "$225", col2: "$275", col3: "—", col4: "$320" },
  ];

  const privatePricing = [
    { label: "1:1 Skill Private (Standard)", value: "$70–$120/hr" },
    { label: "1:1 Skill Private (Specialty)", value: "$100–$200/hr" },
    { label: "Small Group (2–4 athletes)", value: "$40–$80/person" },
    { label: "General PT (1:1)", value: "$80–$140/hr" },
    { label: "Performance Specialist PT", value: "$100–$200/hr" },
  ];

  const campsPricing = [
    { label: "Day Camp Half-Day", value: "$200–$350/wk" },
    { label: "Day Camp Full-Day", value: "$300–$450/wk" },
    { label: "Elite Camp Full-Day", value: "$500–$800/wk" },
    { label: "Seminar (Standard)", value: "$75–$150/person" },
    { label: "Seminar (Specialty)", value: "$150–$300/person" },
    { label: "Weekend Seminar (2-day)", value: "$200–$600/person" },
  ];

  const mealPrepPricing = [
    { label: "Economy 10 meals/wk", value: "$440–$560/mo" },
    { label: "Premium 14 meals/wk", value: "$720–$880/mo" },
    { label: "Iron Form Entry Plan", value: "$300–$400/mo" },
    { label: "Iron Form Athlete Plan", value: "$450–$800/mo" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Appendix</p>
            <h2 className="animate-fade-up stagger-2 text-[48px] font-bold leading-[1] text-foreground mb-8">
              Preliminary <span className="text-primary">Pricing Benchmarks</span>
            </h2>

            <div className="animate-fade-up stagger-3 flex gap-8">
              {/* Left: Group class table + Privates */}
              <div className="flex-1">
                <h3 className="text-primary text-[20px] font-bold mb-3 uppercase tracking-wider">Group Classes (per person/mo)</h3>
                <div className="bg-secondary border border-border rounded-xl overflow-hidden mb-6">
                  <div className="grid grid-cols-5 gap-0 text-[16px] font-bold text-muted-foreground bg-secondary border-b border-border px-4 py-3">
                    <span className="col-span-1">Discipline</span>
                    <span className="text-center">2x/wk</span>
                    <span className="text-center">3x/wk</span>
                    <span className="text-center">5x/wk</span>
                    <span className="text-center">Unlimited</span>
                  </div>
                  {rows.map((r, i) => (
                    <div key={i} className={`grid grid-cols-5 gap-0 text-[16px] px-4 py-2.5 ${i % 2 === 0 ? "bg-secondary" : "bg-background"}`}>
                      <span className="text-foreground font-medium col-span-1">{r.label}</span>
                      <span className="text-primary text-center font-semibold">{r.col1}</span>
                      <span className="text-primary text-center font-semibold">{r.col2}</span>
                      <span className="text-primary text-center font-semibold">{r.col3}</span>
                      <span className="text-primary text-center font-semibold">{r.col4}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-accent text-[20px] font-bold mb-3 uppercase tracking-wider">Privates & Personal Training</h3>
                <div className="space-y-2">
                  {privatePricing.map((p, i) => (
                    <div key={i} className="flex justify-between items-center bg-secondary border border-accent/20 rounded-lg px-4 py-2.5">
                      <span className="text-foreground text-[16px]">{p.label}</span>
                      <span className="text-accent text-[16px] font-bold shrink-0 ml-4">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Camps, Meal Prep, Events */}
              <div className="w-[480px] shrink-0 space-y-6">
                <div>
                  <h3 className="text-primary text-[20px] font-bold mb-3 uppercase tracking-wider">Camps & Seminars</h3>
                  <div className="space-y-2">
                    {campsPricing.map((c, i) => (
                      <div key={i} className="flex justify-between items-center bg-secondary border border-primary/20 rounded-lg px-4 py-2.5">
                        <span className="text-foreground text-[16px]">{c.label}</span>
                        <span className="text-primary text-[16px] font-bold shrink-0 ml-4">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-accent text-[20px] font-bold mb-3 uppercase tracking-wider">Custom Meal Prep</h3>
                  <div className="space-y-2">
                    {mealPrepPricing.map((m, i) => (
                      <div key={i} className="flex justify-between items-center bg-secondary border border-accent/20 rounded-lg px-4 py-2.5">
                        <span className="text-foreground text-[16px]">{m.label}</span>
                        <span className="text-accent text-[16px] font-bold shrink-0 ml-4">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary border border-primary/20 rounded-xl p-5">
                  <h4 className="text-primary text-[18px] font-bold mb-3">Event Fees</h4>
                  <div className="space-y-2 text-[16px]">
                    <div className="flex justify-between"><span className="text-muted-foreground">Athlete Entry</span><span className="text-primary font-semibold">$40–$150</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Team/Club Entry</span><span className="text-primary font-semibold">$300–$1,500</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Spectator Tickets</span><span className="text-primary font-semibold">$10–$40</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Vendor/Booth</span><span className="text-primary font-semibold">$250–$2,000</span></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[12px] leading-tight">
              Sources: Atlanta-area facility surveys 2024–2025; ClassPass & Mindbody market rate data; IHRSA membership pricing benchmarks
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
