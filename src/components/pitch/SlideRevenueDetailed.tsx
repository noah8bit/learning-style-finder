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
    { label: "Monthly Memberships", value: "$360K – $540K" },
    { label: "Team Retainments", value: "$100K" },
    { label: "Insurance Partnerships", value: "$50K" },
    { label: "Facility Rentals", value: "$104K" },
  ];

  const enhancedStreams = [
    { label: "Camps & Seminars", value: "$96K" },
    { label: "Corporate Wellness", value: "$300K" },
    { label: "Premium & Retail", value: "$84K" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroTrack} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Revenue Breakdown</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-8">
                Projected Annual <span className="text-primary">Revenue</span>
              </h2>
              <div className="animate-fade-up stagger-3 flex gap-12">
                {/* Left: Membership ramp-up */}
                <div className="w-[460px] shrink-0">
                  <h3 className="text-primary text-[22px] font-bold mb-5 uppercase tracking-wider">Year 1 Ramp-Up</h3>
                  <div className="space-y-4">
                    {rampUp.map((r, i) => (
                      <div key={i} className="flex items-center gap-5">
                        <span className="text-foreground text-[22px] font-bold w-[50px]">{r.month}</span>
                        <div className="flex-1 h-[32px] bg-white/5 rounded-full overflow-hidden relative">
                          <div className="h-full bg-primary/70 rounded-full transition-all" style={{ width: `${Math.max((r.members / maxMembers) * 100, 18)}%` }} />
                          <span className="absolute inset-0 flex items-center justify-center text-[18px] text-foreground font-bold">
                            {r.members} members
                          </span>
                        </div>
                        <span className="text-accent text-[22px] font-bold w-[75px] text-right">{r.revenue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Revenue streams */}
                <div className="flex-1">
                  <h3 className="text-accent text-[22px] font-bold mb-5 uppercase tracking-wider">Core Streams</h3>
                  <div className="space-y-3 mb-3">
                    {coreStreams.map((s, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                        <span className="text-foreground text-[22px]">{s.label}</span>
                        <span className="text-primary text-[22px] font-bold shrink-0 ml-4">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mb-6 pt-1">
                    <span className="text-muted-foreground text-[20px] font-semibold">Subtotal</span>
                    <span className="text-primary text-[22px] font-bold">$614K – $794K</span>
                  </div>

                  <p className="text-accent text-[18px] uppercase tracking-wider font-bold mb-3">Enhanced Streams</p>
                  <div className="space-y-3 mb-3">
                    {enhancedStreams.map((s, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                        <span className="text-foreground text-[22px]">{s.label}</span>
                        <span className="text-accent text-[22px] font-bold shrink-0 ml-4">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-muted-foreground text-[20px] font-semibold">Subtotal</span>
                    <span className="text-accent text-[22px] font-bold">$480K</span>
                  </div>
                </div>
              </div>

              {/* Total bar */}
              <div className="animate-fade-up stagger-4 mt-6 bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between">
                <span className="text-foreground text-[24px] font-bold uppercase tracking-wider">Year 1 Total Revenue</span>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-[40px] font-bold">$1.09M</span>
                  <span className="text-muted-foreground text-[32px]">–</span>
                  <span className="text-accent text-[40px] font-bold">$1.27M</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
