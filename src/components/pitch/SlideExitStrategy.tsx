import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideExitStrategy({ active }: { active: boolean }) {
  const exits = [
    {
      icon: "🔁",
      title: "Franchise Model",
      timeline: "Year 5–7",
      desc: "Replicate the Iron Form playbook across 10+ metros. Comparable: F45 scaled from 1 to 1,750+ locations in 8 years. Each location projected at $1.5M–$2.5M/yr revenue.",
      returnMultiple: "8–12x",
    },
    {
      icon: "🏦",
      title: "Strategic Acquisition",
      timeline: "Year 5–8",
      desc: "Acquisition target for Life Time, Equinox, or PE firms entering multi-sport. Comparable: TMPL Gym acquired for $30M (single NYC location). Multi-sport facilities command 6–10x EBITDA.",
      returnMultiple: "6–10x",
    },
    {
      icon: "💸",
      title: "Cash-Flow Distributions",
      timeline: "Year 3+",
      desc: "Year 3+ net margins of 40%+ enable quarterly profit distributions. Projected 3–5x return within 5–7 years through distributions alone — no exit required.",
      returnMultiple: "3–5x",
    },
  ];

  const metrics = [
    { label: "Investor Equity Cap", value: "20%", sub: "Founder retains 70%+ control" },
    { label: "Projected Payback", value: "3–4 yrs", sub: "Through profit distributions" },
    { label: "5-Year Cumulative", value: "$15M–$20M", sub: "Total revenue generated" },
    { label: "Year 3 Net Margin", value: "40%+", sub: "Increasing annually" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-accent font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investor Returns</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                How You Get <span className="text-accent">Paid Back</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-8 max-w-[900px] leading-relaxed">
                Three clear paths to investor returns — you don't have to wait for an exit event to see money back.
              </p>

              <div className="animate-fade-up stagger-4 space-y-5 mb-8">
                {exits.map((e, i) => (
                  <div key={i} className="bg-black/60 border border-white/15 rounded-xl p-6 flex gap-6 items-start">
                    <span className="text-[44px] shrink-0">{e.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white text-[26px] font-bold">{e.title}</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground text-[18px]">{e.timeline}</span>
                          <span className="text-accent text-[24px] font-bold bg-accent/10 border border-accent/30 rounded-full px-4 py-0.5">{e.returnMultiple}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-[20px] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-5 grid grid-cols-4 gap-4">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-5 text-center">
                    <div className="text-primary text-[32px] font-bold mb-1">{m.value}</div>
                    <div className="text-foreground text-[18px] font-semibold mb-1">{m.label}</div>
                    <div className="text-muted-foreground text-[14px]">{m.sub}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
