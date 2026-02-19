import ScaledSlide from "./ScaledSlide";

export default function SlideEmployeeStructure({ active }: { active: boolean }) {
  const strategies = [
    { icon: "💵", title: "Competitive Base Pay", desc: "Reasonable hourly wage alongside commission provides financial security and reduces sales pressure." },
    { icon: "📣", title: "Transparent Communication", desc: "Regular performance discussions and feedback build trust and growth understanding." },
    { icon: "🏆", title: "Recognition & Rewards", desc: "Awards, shout-outs, and bonuses for consistent performance milestones." },
    { icon: "📚", title: "Professional Development", desc: "Courses and workshops investment leads to greater job satisfaction and loyalty." },
    { icon: "🤝", title: "Positive Work Culture", desc: "Supportive team environment encouraging collaboration and client retention tips." },
    { icon: "📅", title: "Flexible Scheduling", desc: "Staff input on schedules enhances work-life balance and job satisfaction." },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Employee Structure</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
              Retaining <span className="text-primary">Top Talent</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] mb-10 max-w-[900px]">
              Commission-based structure alongside a solid support system — aligning employee goals with Iron Form's success while minimizing turnover.
            </p>
            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-5">
              {strategies.map((s, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-6">
                  <span className="text-[28px] mb-3 block">{s.icon}</span>
                  <h3 className="text-foreground text-[18px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="animate-fade-up stagger-5 mt-6 bg-accent/10 border border-accent/20 rounded-xl p-5">
              <p className="text-foreground text-[15px]">
                <span className="font-bold text-accent">Performance Reviews:</span> Regular evaluations set new goals and adjust compensation — showing investment in every team member's career.
              </p>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
