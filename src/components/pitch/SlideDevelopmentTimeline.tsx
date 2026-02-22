import ScaledSlide from "./ScaledSlide";

export default function SlideDevelopmentTimeline({ active }: { active: boolean }) {
  const phases = [
    {
      range: "Months 0–6",
      title: "Capital & Pre-Development",
      color: "bg-primary",
      dotRing: true,
      items: ["Secure full equity commitments", "Secure bank term sheet", "Finalize architecture & engineering", "Close on land"],
    },
    {
      range: "Months 6–12",
      title: "Site & Vertical Build",
      color: "bg-primary/80",
      dotRing: false,
      items: ["Site development & grading", "Vertical construction begins", "Outdoor field & track build", "Pre-sale memberships launch"],
    },
    {
      range: "Months 12–18",
      title: "Construction & Fit-Out",
      color: "bg-accent",
      dotRing: false,
      items: ["Interior build-out & finishes", "Recovery tech installation", "Medical suite fit-out", "Staff hiring & training"],
    },
    {
      range: "Months 16–20",
      title: "Pre-Opening",
      color: "bg-accent/80",
      dotRing: false,
      items: ["Equipment install & testing", "Safety certifications", "150+ pre-sale members target", "Corporate contracts signed"],
    },
    {
      range: "Month 20+",
      title: "Full Operations",
      color: "bg-primary",
      dotRing: false,
      items: ["Grand opening", "Year 1 operating model begins", "Medical engine live", "Community programs launch"],
    },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Development Roadmap</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-3">
              From Capital Close to <span className="text-primary">Full Operations</span>
            </h2>
            <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-10">
              20-month development cycle. Year 1 financial projections begin at facility opening.
            </p>

            <div className="animate-fade-up stagger-3 relative">
              <div className="absolute top-[28px] left-0 right-0 h-[4px] bg-border rounded-full" />

              <div className="grid grid-cols-5 gap-5 relative">
                {phases.map((p, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-[16px] h-[16px] rounded-full ${p.color} border-4 border-background mb-6 relative z-10 ${p.dotRing ? "ring-4 ring-primary/30" : ""}`} />
                    <div className="bg-secondary border border-border rounded-xl p-5 w-full">
                      <p className="text-primary text-[16px] font-bold uppercase tracking-wider mb-1">{p.range}</p>
                      <h3 className="text-foreground text-[20px] font-bold mb-3">{p.title}</h3>
                      <ul className="space-y-2">
                        {p.items.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-[16px] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="animate-fade-up stagger-4 text-muted-foreground text-[16px] mt-6 leading-relaxed">
              <span className="text-primary font-bold">Key principle:</span> Construction begins only after full capital stack is secured. No phased fundraising during build.
            </p>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
