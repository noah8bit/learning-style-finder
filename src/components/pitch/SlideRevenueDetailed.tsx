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
    { label: "Monthly Memberships", value: "$690K – $790K", type: "core" },
    { label: "Team Retainments", value: "$180K", type: "core" },
    { label: "Insurance Partnerships", value: "$125K", type: "core" },
    { label: "Facility Rentals", value: "$156K", type: "core" },
    { label: "Personal Training", value: "$410K", type: "core" },
    { label: "Neuromuscular Therapy", value: "$150K", type: "core" },
    { label: "Corporate Wellness", value: "$180K", type: "enhanced" },
    { label: "Camps & Seminars", value: "$180K", type: "enhanced" },
    { label: "Digital Memberships", value: "$84K", type: "enhanced" },
    { label: "Naming Rights & Sponsorships", value: "$200K", type: "enhanced" },
    { label: "Event Hosting", value: "$174K", type: "enhanced" },
    { label: "Recovery Services", value: "$190K", type: "enhanced" },
    { label: "Peptide & IV Wellness Clinic", value: "$300K", type: "enhanced" },
    { label: "Nutrition Hub & Café", value: "$175K", type: "enhanced" },
    { label: "Pro Shop & Retail", value: "$50K", type: "enhanced" },
    { label: "Content & Media", value: "$36K", type: "enhanced" },
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
                  <div className="space-y-1">
                    {streams.map((s, i) => (
                      <div key={i} className={`flex justify-between items-center rounded-lg px-3 py-1.5 backdrop-blur-md ${s.type === "core" ? "bg-black/70 border border-primary/40" : "bg-black/70 border border-accent/40"}`}>
                        <span className="text-white text-[16px] font-medium">{s.label}</span>
                        <span className={`${s.type === "core" ? "text-primary" : "text-accent"} text-[16px] font-bold shrink-0 ml-4`}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-1.5 flex justify-between items-center bg-black/80 border border-primary/30 rounded-lg px-3 py-1.5">
                    <span className="text-white text-[16px] font-semibold">Core Subtotal</span>
                    <span className="text-primary text-[18px] font-bold">$1.71M – $1.81M</span>
                  </div>
                  <div className="mt-1 flex justify-between items-center bg-black/80 border border-accent/30 rounded-lg px-3 py-1.5">
                    <span className="text-white text-[16px] font-semibold">Enhanced Subtotal</span>
                    <span className="text-accent text-[18px] font-bold">$1.57M</span>
                  </div>
                </div>
              </div>

              {/* Total bar */}
              <div className="animate-fade-up stagger-4 mt-3 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                <span className="text-foreground text-[22px] font-bold uppercase tracking-wider">Year 1 Total Revenue</span>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-[34px] font-bold">$3.3M</span>
                  <span className="text-muted-foreground text-[26px]">–</span>
                  <span className="text-accent text-[34px] font-bold">$3.4M</span>
                </div>
              </div>
              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: IHRSA Membership Pricing Benchmarks 2024; Iron Form internal financial models; comparable facility revenue data (IMG Academy, Life Time, F45)
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}