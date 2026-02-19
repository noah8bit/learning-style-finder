import heroAtlanta from "@/assets/pitch/hero-atlanta.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideMarketGrowth({ active }: { active: boolean }) {
  const segments = [
    { label: "Health Clubs & Gyms", value: 35, amount: "$35B" },
    { label: "Functional Training", value: 20, amount: "$20B" },
    { label: "Sports Medicine", value: 10, amount: "$10B" },
    { label: "Recovery & Wellness", value: 15, amount: "$15B" },
    { label: "Digital Fitness", value: 12, amount: "$12B" },
    { label: "Youth Sports", value: 8, amount: "$8B" },
  ];

  const growth = [
    { year: "2020", fitness: 60, medicine: 6 },
    { year: "2021", fitness: 68, medicine: 7 },
    { year: "2022", fitness: 76, medicine: 7.5 },
    { year: "2023", fitness: 84, medicine: 8 },
    { year: "2024", fitness: 96, medicine: 9 },
    { year: "2025", fitness: 100, medicine: 10 },
  ];

  const maxVal = 100;

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAtlanta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Market Growth</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-12">
                Projected Market <span className="text-primary">Trajectory</span>
              </h2>
              <div className="animate-fade-up stagger-3 flex gap-12">
                {/* Bar chart */}
                <div className="flex-1">
                  <h3 className="text-foreground text-[18px] font-bold mb-6 uppercase tracking-wider">Growth by Year (Billions)</h3>
                  <div className="flex items-end gap-5 h-[320px]">
                    {growth.map((g, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <div className="flex gap-1 w-full justify-center items-end flex-1">
                          <div
                            className="w-[30px] bg-primary rounded-t-md transition-all"
                            style={{ height: `${(g.fitness / maxVal) * 280}px` }}
                            title={`Fitness: $${g.fitness}B`}
                          />
                          <div
                            className="w-[30px] bg-accent rounded-t-md transition-all"
                            style={{ height: `${(g.medicine / maxVal) * 280}px` }}
                            title={`Sports Med: $${g.medicine}B`}
                          />
                        </div>
                        <span className="text-muted-foreground text-[14px]">{g.year}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-4 justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-sm" />
                      <span className="text-muted-foreground text-[13px]">Global Fitness Market</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-accent rounded-sm" />
                      <span className="text-muted-foreground text-[13px]">Sports Medicine</span>
                    </div>
                  </div>
                </div>
                {/* Segment breakdown */}
                <div className="w-[420px]">
                  <h3 className="text-foreground text-[18px] font-bold mb-6 uppercase tracking-wider">$100B+ Market Segments</h3>
                  <div className="space-y-4">
                    {segments.map((s, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-foreground text-[15px]">{s.label}</span>
                          <span className="text-primary font-semibold text-[15px]">{s.amount}</span>
                        </div>
                        <div className="w-full h-[8px] bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-accent"}`}
                            style={{ width: `${s.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
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