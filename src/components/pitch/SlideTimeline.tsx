import ScaledSlide from "./ScaledSlide";

export default function SlideTimeline({ active }: { active: boolean }) {
  const milestones = [
    { quarter: "Q1 2026", title: "Foundation", items: ["Secure land & permits", "Begin architectural design", "Form legal entity & partnerships"], color: "bg-primary", active: true },
    { quarter: "Q2 2026", title: "Build-Out Begins", items: ["Break ground on facility", "Order equipment & tech", "Launch hiring pipeline"], color: "bg-primary/80", active: false },
    { quarter: "Q3 2026", title: "Staff & Systems", items: ["Recruit coaches (20+ disciplines)", "Install recovery tech suite", "Beta launch performance app"], color: "bg-accent", active: false },
    { quarter: "Q4 2026", title: "Soft Launch", items: ["Invite-only memberships", "Partner onboarding", "Community outreach kickoff"], color: "bg-accent/80", active: false },
    { quarter: "Q1 2027", title: "Grand Opening", items: ["Full public launch", "Marketing campaign rollout", "First camps & seminars"], color: "bg-primary", active: false },
    { quarter: "Q2–Q4 2027", title: "Scale & Optimize", items: ["Insurance partnerships live", "Film wing rentals active", "Evaluate expansion sites"], color: "bg-primary/80", active: false },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Implementation Roadmap</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-12">
              From Concept to <span className="text-primary">Launch</span>
            </h2>
            <div className="animate-fade-up stagger-3 relative">
              {/* Timeline line */}
              <div className="absolute top-[28px] left-0 right-0 h-[4px] bg-border rounded-full" />
              <div className="absolute top-[28px] left-0 w-[17%] h-[4px] bg-primary rounded-full" />
              
              <div className="grid grid-cols-6 gap-4 relative">
                {milestones.map((m, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* Dot */}
                    <div className={`w-[14px] h-[14px] rounded-full ${m.color} border-4 border-background mb-6 relative z-10 ${m.active ? "ring-4 ring-primary/30" : ""}`} />
                    {/* Content */}
                    <div className="bg-secondary border border-border rounded-xl p-5 w-full">
                      <p className="text-primary text-[13px] font-bold uppercase tracking-wider mb-1">{m.quarter}</p>
                      <h3 className="text-foreground text-[17px] font-bold mb-3">{m.title}</h3>
                      <ul className="space-y-1.5">
                        {m.items.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-[13px] flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
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
