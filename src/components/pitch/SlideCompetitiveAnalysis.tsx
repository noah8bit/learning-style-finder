import ScaledSlide from "./ScaledSlide";

export default function SlideCompetitiveAnalysis({ active }: { active: boolean }) {
  const features = [
    "30+ Sports",
    "Medical/Rehab",
    "Film & Stunt",
    "Recovery Tech",
    "Community",
    "Tiered Pricing",
    "Analytics",
    "Youth Dev",
  ];

  const competitors = [
    { name: "Iron Form", scores: [true, true, true, true, true, true, true, true] },
    { name: "IMG Academy", scores: [true, true, false, true, false, false, true, true] },
    { name: "EXOS", scores: [false, true, false, true, false, false, true, false] },
    { name: "D1 Training", scores: [false, true, false, false, true, true, false, true] },
    { name: "Plex", scores: [true, false, false, false, false, true, false, true] },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Competitive Landscape</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-10">
              How Iron Form <span className="text-primary">Stands Apart</span>
            </h2>
            <div className="animate-fade-up stagger-3 overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left text-foreground text-[24px] font-bold p-6 w-[220px]">Feature</th>
                    {competitors.map((c, i) => (
                      <th key={i} className={`text-center text-[24px] font-bold p-6 ${i === 0 ? "text-primary bg-primary/10" : "text-foreground"}`}>
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feat, fi) => (
                    <tr key={fi} className={fi % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="text-foreground text-[22px] font-medium p-5 border-t border-border">{feat}</td>
                      {competitors.map((c, ci) => (
                        <td key={ci} className={`text-center p-5 border-t border-border text-[30px] ${ci === 0 ? "bg-primary/5" : ""}`}>
                          {c.scores[fi] ? (
                            <span className="text-primary font-bold">✓</span>
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
            <div className="animate-fade-up stagger-4 mt-6 bg-primary/10 border border-primary/30 rounded-xl p-6">
              <p className="text-foreground text-[22px]">
                <span className="font-bold text-primary">Iron Form Advantage:</span> The only facility combining integrated multi-sport training, insurance-backed medical, recovery tech, and a film & stunt wing.
              </p>
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: IMG Academy public program listings; EXOS corporate training site; D1 Training franchise overview; Plex facility site; Iron Form internal competitive research
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}