import heroTrack from "@/assets/pitch/hero-track.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideRevenueDetailed({ active }: { active: boolean }) {
  const rampUp = [
    { month: "M1–3", members: 120, revenue: "$31K/mo" },
    { month: "M4–6", members: 180, revenue: "$47K/mo" },
    { month: "M7–9", members: 220, revenue: "$57K/mo" },
    { month: "M10–12", members: 240, revenue: "$63K/mo" },
  ];
  const maxMembers = 280;

  const streams = [
    { label: "Membership (200 avg)", value: "$626K", type: "core" },
    { label: "Team Retainers (4 teams)", value: "$120K", type: "core" },
    { label: "Insurance Partnerships", value: "$58K", type: "core" },
    { label: "NMT Net to Facility", value: "$110K", type: "core" },
    { label: "Corporate Wellness (1 client)", value: "$45K", type: "core" },
    { label: "Facility Rentals/Events", value: "$90K", type: "core" },
    { label: "Peptide & IV Clinic (15 clients)", value: "$90K", type: "enhanced", detail: "15 × $400/mo × 12 = $72K + $18K IV" },
  ];

  const yearComps = [
    { year: "Year 1", total: "$1.14M", members: "200", ebitda: "-$90K" },
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
              <h2 className="animate-fade-up stagger-2 text-[46px] font-bold leading-[1] text-white mb-2">
                Year 1 <span className="text-primary">Conservative Ramp</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[16px] mb-4 italic">
                Year 1 is designed for stability, not peak performance.
              </p>
              <div className="animate-fade-up stagger-3 flex gap-8">
                {/* Left: Membership ramp-up */}
                <div className="w-[460px] shrink-0">
                  <h3 className="text-primary text-[20px] font-bold mb-4 uppercase tracking-wider">Membership Ramp-Up</h3>
                  <div className="space-y-3">
                    {rampUp.map((r, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-foreground text-[20px] font-bold w-[64px]">{r.month}</span>
                        <div className="flex-1 h-[32px] bg-black/80 border border-white/15 rounded-full overflow-hidden relative">
                          <div className="h-full bg-primary/80 rounded-full transition-all" style={{ width: `${Math.max((r.members / maxMembers) * 100, 18)}%` }} />
                          <span className="absolute inset-0 flex items-center justify-center text-[17px] text-white font-bold drop-shadow-md">
                            {r.members} members
                          </span>
                        </div>
                        <span className="text-accent text-[18px] font-bold w-[90px] text-right">{r.revenue}</span>
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
                        <span className={`${y.ebitda.startsWith('-') ? 'text-yellow-400' : 'text-accent'} text-[16px] font-semibold`}>{y.ebitda}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Revenue streams */}
                <div className="flex-1">
                  <h3 className="text-accent text-[20px] font-bold mb-4 uppercase tracking-wider">Year 1 Revenue Streams</h3>
                  <div className="space-y-2">
                    {streams.map((s, i) => (
                      <div key={i} className={`rounded-lg px-4 py-3 backdrop-blur-md ${s.type === "core" ? "bg-black/70 border border-primary/40" : "bg-black/70 border border-accent/40"}`}>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-[18px] font-medium">{s.label}</span>
                          <span className={`${s.type === "core" ? "text-primary" : "text-accent"} text-[20px] font-bold shrink-0 ml-4`}>{s.value}</span>
                        </div>
                        {s.detail && (
                          <p className="text-muted-foreground text-[13px] mt-1 italic">{s.detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total bar */}
              <div className="animate-fade-up stagger-4 mt-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-foreground text-[22px] font-bold uppercase tracking-wider">Year 1 Total Revenue</span>
                  <span className="text-muted-foreground text-[16px] ml-4">Break-even: <span className="text-primary font-bold">245 members</span> · Operating loss covered by reserves</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-primary text-[34px] font-bold">$1.14M</span>
                  <span className="text-yellow-400 text-[18px] font-semibold">EBITDA: -$90K</span>
                </div>
              </div>
              <p className="animate-fade-up stagger-5 text-muted-foreground text-[14px] mt-2 leading-relaxed">
                <span className="text-primary font-bold">Core thesis:</span> Membership + medical = core engine. Everything else layers on. Operational break-even expected <span className="text-primary font-bold">Month 10–14</span>.
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
