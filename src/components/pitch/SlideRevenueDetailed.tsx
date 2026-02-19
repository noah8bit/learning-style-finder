import heroTrack from "@/assets/pitch/hero-track.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideRevenueDetailed({ active }: { active: boolean }) {
  const rampUp = [
    { month: "M1", members: 30, revenue: "$7.5K" },
    { month: "M3", members: 75, revenue: "$19K" },
    { month: "M6", members: 140, revenue: "$35K" },
    { month: "M9", members: 200, revenue: "$50K" },
    { month: "M12", members: 275, revenue: "$69K" },
  ];
  const maxMembers = 300;

  const coreStreams = [
    { label: "Monthly Memberships", value: "$360K – $540K", detail: "~150 avg members (ramped) × $200–$300/mo" },
    { label: "Team Retainments", value: "$100K", detail: "5 teams × $20K/season" },
    { label: "Insurance Partnerships", value: "$50K", detail: "Covered therapy & rehab" },
    { label: "Facility Rentals", value: "$104K", detail: "$2K/week × 52 weeks" },
  ];

  const enhancedStreams = [
    { label: "Camps & Seminars", value: "$96K", detail: "4 camps + 6 seminars annually" },
    { label: "Corporate Wellness", value: "$300K", detail: "5 clients × $5K/mo avg" },
    { label: "Premium & Retail", value: "$84K", detail: "PT sessions, merch, referrals" },
  ];

  const totalLow = "$1.09M";
  const totalHigh = "$1.27M";

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroTrack} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Revenue Breakdown</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
                Projected Annual <span className="text-primary">Revenue</span>
              </h2>
              <div className="animate-fade-up stagger-3 flex gap-8">
                {/* Left: Membership ramp-up */}
                <div className="w-[480px] shrink-0">
                  <h3 className="text-primary text-[16px] font-bold mb-4 uppercase tracking-wider">Year 1 Membership Ramp-Up</h3>
                  <div className="space-y-3 mb-6">
                    {rampUp.map((r, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-foreground text-[14px] font-bold w-[40px]">{r.month}</span>
                        <div className="flex-1 h-[20px] bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary/70 rounded-full flex items-center justify-end pr-3 transition-all" style={{ width: `${(r.members / maxMembers) * 100}%` }}>
                            <span className="text-[11px] text-foreground font-semibold">{r.members} members</span>
                          </div>
                        </div>
                        <span className="text-accent text-[14px] font-semibold w-[60px] text-right">{r.revenue}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-muted-foreground text-[12px] uppercase mb-1">Year 1 Total Revenue</div>
                    <div className="flex justify-center gap-6">
                      <span className="text-primary text-[28px] font-bold">{totalLow}</span>
                      <span className="text-muted-foreground text-[28px]">–</span>
                      <span className="text-accent text-[28px] font-bold">{totalHigh}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Revenue streams */}
                <div className="flex-1">
                  <h3 className="text-accent text-[16px] font-bold mb-4 uppercase tracking-wider">Revenue Streams</h3>
                  <div className="space-y-2 mb-4">
                    {coreStreams.map((s, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-foreground text-[14px]">{s.label}</span>
                        <span className="text-primary text-[14px] font-semibold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-accent text-[12px] uppercase tracking-wider font-semibold mb-2">Enhanced Streams</p>
                  <div className="space-y-2">
                    {enhancedStreams.map((s, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-foreground text-[14px]">{s.label}</span>
                        <span className="text-accent text-[14px] font-semibold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="animate-fade-up stagger-4 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: Iron Form internal financial model; IHRSA membership pricing benchmarks; Atlanta commercial rental market data
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
