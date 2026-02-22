import heroCorporateWellness from "@/assets/pitch/hero-corporate-wellness.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideHighMarginAddOns({ active }: { active: boolean }) {
  const streams = [
    {
      icon: "🏢",
      title: "Corporate Wellness",
      total: "$45K",
      points: [
        "1 corporate client × $5,000/mo × 9 months (Q2 start)",
        "Atlanta has 18 Fortune 500 HQs — deep employer base",
        "Corporate sales cycles are 4–6 months — Year 1 is realistic at 1 client",
      ],
      note: "Year 2 scales to 3 clients ($180K) as sales pipeline matures.",
    },
    {
      icon: "💊",
      title: "Peptide & IV Clinic",
      total: "$90K",
      points: [
        "15 active clients × $400 avg/month × 12 = $72K",
        "IV therapy add-ons: 3 sessions/day × $50 avg = $18K",
        "Stacks: Iron Form Cut ($699), Build ($649), Recovery ($599)",
      ],
      note: "All protocols prescribed under licensed MD. No on-site compounding. Sourced through compliant 503A pharmacy partners. Year 2 ramps to 30+ clients ($300K net).",
    },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroCorporateWellness} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-accent font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Enhanced Revenue</p>
              <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-3">
                High-Margin <span className="text-accent">Add-Ons</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8 max-w-[900px]">
                Corporate wellness and peptide services are high-margin, scalable revenue streams that layer on top of the core membership + medical engine.
              </p>

              <div className="animate-fade-up stagger-3 flex gap-6 mb-6">
                {streams.map((s, i) => (
                  <div key={i} className="flex-1 bg-black/85 backdrop-blur-xl border border-accent/40 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[32px]">{s.icon}</span>
                      <h3 className="text-white text-[22px] font-bold">{s.title}</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      {s.points.map((p, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground text-[17px] leading-relaxed">{p}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-black/70 rounded-lg p-3 flex justify-between items-center mb-3">
                      <span className="text-muted-foreground text-[16px]">Year 1 Revenue</span>
                      <span className="text-accent text-[24px] font-bold">{s.total}</span>
                    </div>
                    <div className="bg-black/70 border border-yellow-400/30 rounded-lg p-3">
                      <p className="text-yellow-400/80 text-[14px] italic">{s.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-white text-[22px] font-bold uppercase tracking-wider">Combined High-Margin Revenue</span>
                  <span className="text-muted-foreground text-[16px] ml-4">Scalable · Pre-paid · Medically credentialed</span>
                </div>
                <span className="text-accent text-[34px] font-bold">$135K</span>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
