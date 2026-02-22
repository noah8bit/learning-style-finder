import heroTrack from "@/assets/pitch/hero-track.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideRevenueDetailed({ active }: { active: boolean }) {
  const rampUp = [
    { month: "M1", members: 30, revenue: "$8K" },
    { month: "M3", members: 75, revenue: "$20K" },
    { month: "M6", members: 140, revenue: "$37K" },
    { month: "M9", members: 200, revenue: "$52K" },
    { month: "M12", members: 275, revenue: "$72K" },
  ];
  const maxMembers = 300;

  const streams = [
    { label: "Membership (275 avg)", value: "$720K", type: "core" },
    { label: "Team Retainers (6 teams)", value: "$180K", type: "core" },
    { label: "Insurance Partnerships", value: "$125K", type: "core" },
    { label: "NMT Net to Facility", value: "$150K", type: "core" },
    { label: "Corporate Wellness (3 cos)", value: "$180K", type: "core" },
    { label: "Facility Rentals/Events", value: "$150K", type: "core" },
    { label: "Josh Wellness (ramp)", value: "$150K", type: "enhanced" },
  ];

  const yearComps = [
    { year: "Year 1", total: "$1.66M", members: "275", ebitda: "~Breakeven" },
    { year: "Year 2", total: "$3.17M", members: "450", ebitda: "$520K" },
    { year: "Year 3", total: "$5.01M", members: "600", ebitda: "$1.2M" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroTrack} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Revenue Breakdown</p>
              <h2 className="animate-fade-up stagger-2 text-[46px] font-bold leading-[1] text-white mb-4">
                Year 1 <span className="text-primary">Revenue Model</span>
              </h2>
              <div className="animate-fade-up stagger-3 flex gap-8">
                {/* Left: Membership ramp-up */}
                <div className="w-[460px] shrink-0">
                  <h3 className="text-primary text-[20px] font-bold mb-4 uppercase tracking-wider">Membership Ramp-Up</h3>
                  <div className="space-y-3">
                    {rampUp.map((r, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-foreground text-[20px] font-bold w-[48px]">{r.month}</span>
                        <div className="flex-1 h-[32px] bg-black/80 border border-white/15 rounded-full overflow-hidden relative">
                          <div className="h-full bg-primary/80 rounded-full transition-all" style={{ width: `${Math.max((r.members / maxMembers) * 100, 18)}%` }} />
                          <span className="absolute inset-0 flex items-center justify-center text-[17px] text-white font-bold drop-shadow-md">
                            {r.members} members
                          </span>
                        </div>
                        <span className="text-accent text-[20px] font-bold w-[75px] text-right">{r.revenue}</span>
                      </div>
                    ))}
                  </div>

                  {/* Year comparison */}
                  <h3 className="text-accent text-[18px] font-bold mt-5 mb-3 uppercase tracking-wider">3-Year Growth</h3>
                  <div className="space-y-2">
                    {yearComps.map((y, i) => (
                      <div key={i} className="flex justify-between items-center bg-black/70 border border-white/15 rounded-lg px-4 py-2.5">
                        <span className="text-foreground text-[18px] font-bold">{y.year}</span>
                        <span className="text-muted-foreground text-[16px]">{y.members} mbrs</span>
                        <span className="text-primary text-[18px] font-bold">{y.total}</span>
                        <span className="text-accent text-[16px] font-semibold">{y.ebitda}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Revenue streams */}
                <div className="flex-1">
                  <h3 className="text-accent text-[20px] font-bold mb-4 uppercase tracking-wider">Year 1 Revenue Streams</h3>
                  <div className="space-y-2">
                    {streams.map((s, i) => (
                      <div key={i} className={`flex justify-between items-center rounded-lg px-4 py-3 backdrop-blur-md ${s.type === "core" ? "bg-black/70 border border-primary/40" : "bg-black/70 border border-accent/40"}`}>
                        <span className="text-white text-[18px] font-medium">{s.label}</span>
                        <span className={`${s.type === "core" ? "text-primary" : "text-accent"} text-[20px] font-bold shrink-0 ml-4`}>{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* COGS callout */}
                  <div className="mt-3 bg-black/70 backdrop-blur-md border border-white/15 rounded-lg px-4 py-2.5">
                    <div className="flex justify-between text-[16px]">
                      <span className="text-muted-foreground">COGS (splits, staffing)</span>
                      <span className="text-red-400 font-bold">-$450K</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total bar */}
              <div className="animate-fade-up stagger-4 mt-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-foreground text-[22px] font-bold uppercase tracking-wider">Year 1 Total Revenue</span>
                  <span className="text-muted-foreground text-[16px] ml-4">Break-even threshold: <span className="text-primary font-bold">245 active members</span></span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-primary text-[34px] font-bold">$1.66M</span>
                  <span className="text-muted-foreground text-[18px]">EBITDA: ~breakeven</span>
                </div>
              </div>
              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: IHRSA Membership Pricing Benchmarks 2024; Iron Form internal financial models
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
