import ScaledSlide from "./ScaledSlide";

export default function SlideTimeline({ active }: { active: boolean }) {
  const milestones = [
    { quarter: "Q1 2026", title: "Foundation", items: ["Secure land & permits", "Architectural design", "Legal entity & partnerships"], color: "bg-primary", dotRing: true },
    { quarter: "Q2–Q3 2026", title: "Build-Out Begins", items: ["Break ground on facility", "Order equipment & tech", "Launch hiring pipeline"], color: "bg-primary/80", dotRing: false },
    { quarter: "Q4 2026", title: "Construction", items: ["Recruit 20+ coaches", "Install recovery tech", "Beta launch perf. app"], color: "bg-accent", dotRing: false },
    { quarter: "Q1 2027", title: "Fit-Out & Testing", items: ["Equipment install complete", "Safety certifications", "Pre-launch marketing"], color: "bg-accent/80", dotRing: false },
    { quarter: "Q2 2027", title: "Soft Launch", items: ["50 invite-only members", "Partner onboarding", "Community outreach"], color: "bg-primary", dotRing: false },
    { quarter: "Q3 2027", title: "Grand Opening", items: ["Full public launch", "First camps & seminars", "Film wing rentals"], color: "bg-primary/80", dotRing: false },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Implementation Roadmap</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-14">
              From Concept to <span className="text-primary">Launch</span>
            </h2>
            <div className="animate-fade-up stagger-3 relative">
              <div className="absolute top-[28px] left-0 right-0 h-[4px] bg-border rounded-full" />
              <div className="absolute top-[28px] left-0 w-[17%] h-[4px] bg-primary rounded-full" />
              
              <div className="grid grid-cols-6 gap-5 relative">
                {milestones.map((m, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-[16px] h-[16px] rounded-full ${m.color} border-4 border-background mb-6 relative z-10 ${m.dotRing ? "ring-4 ring-primary/30" : ""}`} />
                    <div className="bg-secondary border border-border rounded-xl p-5 w-full">
                      <p className="text-primary text-[18px] font-bold uppercase tracking-wider mb-1">{m.quarter}</p>
                      <h3 className="text-foreground text-[22px] font-bold mb-3">{m.title}</h3>
                      <ul className="space-y-2">
                        {m.items.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-[18px] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}