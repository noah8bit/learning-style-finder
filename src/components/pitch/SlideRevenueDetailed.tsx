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
    { label: "Corporate Wellness", value: "$300K", type: "enhanced" },
    { label: "Camps & Seminars", value: "$96K", type: "enhanced" },
    { label: "Digital Memberships", value: "$150K", type: "enhanced" },
    { label: "Naming Rights & Sponsorships", value: "$200K", type: "enhanced" },
    { label: "Event Hosting", value: "$100K", type: "enhanced" },
    { label: "Recovery Drop-Ins", value: "$75K", type: "enhanced" },
    { label: "Content & Media", value: "$60K", type: "enhanced" },
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
              <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-6">
                Projected Annual <span className="text-primary">Revenue</span>
              </h2>
              <div className="animate-fade-up stagger-3 flex gap-8">
                {/* Left: Membership ramp-up */}
                <div className="w-[460px] shrink-0">
                  <h3 className="text-primary text-[20px] font-bold mb-4 uppercase tracking-wider">Year 1 Ramp-Up</h3>
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
                </div>

                {/* Right: Revenue streams */}
                <div className="flex-1">
                  <h3 className="text-accent text-[20px] font-bold mb-4 uppercase tracking-wider">Revenue Streams</h3>
                  <div className="space-y-1.5">
                    {streams.map((s, i) => (
                      <div key={i} className={`flex justify-between items-center rounded-lg px-4 py-2 backdrop-blur-md ${s.type === "core" ? "bg-black/70 border border-primary/40" : "bg-black/70 border border-accent/40"}`}>
                        <span className="text-white text-[18px] font-medium">{s.label}</span>
                        <span className={`${s.type === "core" ? "text-primary" : "text-accent"} text-[18px] font-bold shrink-0 ml-4`}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between items-center bg-black/80 border border-primary/30 rounded-lg px-4 py-2">
                    <span className="text-white text-[18px] font-semibold">Core Subtotal</span>
                    <span className="text-primary text-[20px] font-bold">$614K – $794K</span>
                  </div>
                  <div className="mt-1.5 flex justify-between items-center bg-black/80 border border-accent/30 rounded-lg px-4 py-2">
                    <span className="text-white text-[18px] font-semibold">Enhanced Subtotal</span>
                    <span className="text-accent text-[20px] font-bold">$981K</span>
                  </div>
                </div>
              </div>

              {/* Total bar */}
              <div className="animate-fade-up stagger-4 mt-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-5 flex items-center justify-between">
                <span className="text-foreground text-[24px] font-bold uppercase tracking-wider">Year 1 Total Revenue</span>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-[38px] font-bold">$1.60M</span>
                  <span className="text-muted-foreground text-[30px]">–</span>
                  <span className="text-accent text-[38px] font-bold">$1.78M</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}