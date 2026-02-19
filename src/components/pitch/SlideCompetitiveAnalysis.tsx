import ScaledSlide from "./ScaledSlide";

export default function SlideCompetitiveAnalysis({ active }: { active: boolean }) {
  const features = [
    "30+ Sport Disciplines",
    "Integrated Medical/Rehab",
    "Film & Stunt Wing",
    "Recovery Tech Suite",
    "Community Outreach",
    "Tiered Pricing",
    "Performance Analytics",
    "Youth Development",
  ];

  const competitors = [
    { name: "Iron Form", scores: [true, true, true, true, true, true, true, true] },
    { name: "Lifetime Fitness", scores: [false, false, false, true, false, true, false, false] },
    { name: "LA Fitness", scores: [false, false, false, false, false, true, false, false] },
    { name: "CrossFit Gyms", scores: [false, false, false, false, false, false, false, false] },
    { name: "PT Clinics", scores: [false, true, false, true, false, false, false, false] },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Competitive Landscape</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
              How Iron Form <span className="text-primary">Stands Apart</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] mb-10 max-w-[900px]">
              No competitor in the Atlanta market offers a fully integrated training, recovery, and entertainment facility.
            </p>
            <div className="animate-fade-up stagger-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left text-foreground text-[16px] font-bold p-5 w-[200px]">Feature</th>
                    {competitors.map((c, i) => (
                      <th key={i} className={`text-center text-[15px] font-bold p-5 ${i === 0 ? "text-primary bg-primary/10" : "text-foreground"}`}>
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feat, fi) => (
                    <tr key={fi} className={fi % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="text-foreground text-[15px] font-medium p-4 border-t border-border">{feat}</td>
                      {competitors.map((c, ci) => (
                        <td key={ci} className={`text-center p-4 border-t border-border text-[20px] ${ci === 0 ? "bg-primary/5" : ""}`}>
                          {c.scores[fi] ? (
                            <span className="text-primary">✓</span>
                          ) : (
                            <span className="text-muted-foreground/40">✕</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="animate-fade-up stagger-5 mt-6 bg-primary/10 border border-primary/20 rounded-xl p-5">
              <p className="text-foreground text-[15px]">
                <span className="font-bold text-primary">Iron Form Advantage:</span> The only facility checking every box — creating a truly unmatched athletic ecosystem.
              </p>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
