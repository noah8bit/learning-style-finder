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

  const streams = [
    { label: "Monthly Memberships", value: "$360K – $540K", type: "core" },
    { label: "Team Retainments", value: "$100K", type: "core" },
    { label: "Insurance Partnerships", value: "$50K", type: "core" },
    { label: "Facility Rentals", value: "$104K", type: "core" },
    { label: "Camps & Seminars", value: "$96K", type: "enhanced" },
    { label: "Corporate Wellness", value: "$300K", type: "enhanced" },
    { label: "Premium & Retail", value: "$84K", type: "enhanced" },
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
              <div className="animate-fade-up stagger-3 flex gap-10">
                {/* Left: Membership ramp-up */}
                <div className="w-[500px] shrink-0">
                  <h3 className="text-primary text-[24px] font-bold mb-5 uppercase tracking-wider">Year 1 Ramp-Up</h3>
                  <div className="space-y-5">
                    {rampUp.map((r, i) => (
                      <div key={i} className="flex items-center gap-5">
                        <span className="text-foreground text-[24px] font-bold w-[55px]">{r.month}</span>
                        <div className="flex-1 h-[40px] bg-white/5 rounded-full overflow-hidden relative">
                          <div className="h-full bg-primary/70 rounded-full transition-all" style={{ width: `${Math.max((r.members / maxMembers) * 100, 18)}%` }} />
                          <span className="absolute inset-0 flex items-center justify-center text-[20px] text-foreground font-bold">
                            {r.members} members
                          </span>
                        </div>
                        <span className="text-accent text-[24px] font-bold w-[85px] text-right">{r.revenue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Revenue streams */}
                <div className="flex-1">
                  <h3 className="text-accent text-[24px] font-bold mb-5 uppercase tracking-wider">Revenue Streams</h3>
                  <div className="space-y-3">
                    {streams.map((s, i) => (
                      <div key={i} className={`flex justify-between items-center rounded-lg p-4 ${s.type === "core" ? "bg-primary/8 border border-primary/20" : "bg-accent/8 border border-accent/20"}`}>
                        <span className="text-foreground text-[24px] font-medium">{s.label}</span>
                        <span className={`${s.type === "core" ? "text-primary" : "text-accent"} text-[24px] font-bold shrink-0 ml-4`}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="text-muted-foreground text-[22px] font-semibold">Core Subtotal</span>
                    <span className="text-primary text-[24px] font-bold">$614K – $794K</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="text-muted-foreground text-[22px] font-semibold">Enhanced Subtotal</span>
                    <span className="text-accent text-[24px] font-bold">$480K</span>
                  </div>
                </div>
              </div>

              {/* Total bar */}
              <div className="animate-fade-up stagger-4 mt-6 bg-white/8 border border-white/15 rounded-xl p-7 flex items-center justify-between">
                <span className="text-foreground text-[28px] font-bold uppercase tracking-wider">Year 1 Total Revenue</span>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-[44px] font-bold">$1.09M</span>
                  <span className="text-muted-foreground text-[36px]">–</span>
                  <span className="text-accent text-[44px] font-bold">$1.27M</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}