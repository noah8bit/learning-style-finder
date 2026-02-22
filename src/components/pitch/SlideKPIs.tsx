import ScaledSlide from "./ScaledSlide";

export default function SlideKPIs({ active }: { active: boolean }) {
  const kpis = [
    { icon: "💰", metric: "Member Acquisition Cost", target: "<$250", desc: "Blended across digital, referral, and community channels", color: "text-primary" },
    { icon: "📉", metric: "Monthly Churn Rate", target: "<6%", desc: "Industry avg 8–10%. Retention driven by integrated services", color: "text-accent" },
    { icon: "🏋", metric: "Instructor Revenue Share", target: "45–55%", desc: "Capped share of program revenue — aligns incentives", color: "text-primary" },
    { icon: "👥", metric: "Payroll-to-Revenue Ratio", target: "<50%", desc: "Year 1 target. Improves to ~40% by Year 3 at scale", color: "text-accent" },
    { icon: "🏥", metric: "Medical Utilization", target: "70%", desc: "NMT + insurance at 70% capacity by Month 18", color: "text-primary" },
    { icon: "📊", metric: "Blended ARPU", target: "$261/mo", desc: "Mix of group, specialty, hybrid, and medical members", color: "text-accent" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Operational Discipline</p>
            <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
              Core <span className="text-primary">KPIs</span>
            </h2>
            <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8 max-w-[900px]">
              The metrics we track to ensure operational excellence and investor confidence.
            </p>

            <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-5 mb-6">
              {kpis.map((k, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[28px]">{k.icon}</span>
                    <span className={`${k.color} text-[32px] font-bold`}>{k.target}</span>
                  </div>
                  <h3 className="text-foreground text-[20px] font-bold mb-1">{k.metric}</h3>
                  <p className="text-muted-foreground text-[16px] leading-relaxed">{k.desc}</p>
                </div>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 bg-secondary border-2 border-primary/30 rounded-xl p-5">
              <p className="text-muted-foreground text-[18px]">
                <span className="text-primary font-bold">Reporting cadence:</span> Monthly KPI dashboard shared with investors. Quarterly board update with variance analysis. Annual audited financials.
              </p>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}