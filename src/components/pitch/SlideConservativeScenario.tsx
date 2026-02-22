import heroTrack from "@/assets/pitch/hero-track.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideConservativeScenario({ active }: { active: boolean }) {
  const scenarios = [
    {
      label: "Base Case",
      tag: "Current Model",
      tagColor: "text-primary bg-primary/10 border-primary/40",
      members: 275,
      teams: 6,
      corporate: 3,
      revenue: "$1.66M",
      ebitda: "~Breakeven",
      color: "text-primary",
      borderColor: "border-primary/40",
    },
    {
      label: "Conservative Case",
      tag: "Stress Test",
      tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/40",
      members: 220,
      teams: 4,
      corporate: 1,
      revenue: "~$1.25M",
      ebitda: "-$200K",
      color: "text-yellow-400",
      borderColor: "border-yellow-400/40",
    },
  ];

  const assumptions = [
    { label: "Members slip 20%", base: "275", conservative: "220" },
    { label: "Team retainers", base: "6 teams", conservative: "4 teams" },
    { label: "Corporate clients", base: "3 clients", conservative: "1 client" },
    { label: "NMT utilization", base: "6/day (75%)", conservative: "4/day (50%)" },
    { label: "Digital subscribers", base: "700", conservative: "400" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroTrack} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-yellow-400 font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Stress Testing</p>
              <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-6">
                Conservative <span className="text-yellow-400">Scenario Modeling</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8 max-w-[900px]">
                What happens if ramp-up takes longer? We model the downside so investors see maturity, not just optimism.
              </p>

              <div className="animate-fade-up stagger-3 flex gap-6 mb-6">
                {scenarios.map((s, i) => (
                  <div key={i} className={`flex-1 bg-black/85 backdrop-blur-xl border ${s.borderColor} rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className={`${s.color} text-[24px] font-bold`}>{s.label}</h3>
                      <span className={`${s.tagColor} border text-[13px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>{s.tag}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/70 rounded-lg p-3 text-center">
                        <div className={`${s.color} text-[28px] font-bold`}>{s.members}</div>
                        <div className="text-muted-foreground text-[14px]">Members</div>
                      </div>
                      <div className="bg-black/70 rounded-lg p-3 text-center">
                        <div className={`${s.color} text-[28px] font-bold`}>{s.teams}</div>
                        <div className="text-muted-foreground text-[14px]">Teams</div>
                      </div>
                      <div className="bg-black/70 rounded-lg p-3 text-center">
                        <div className={`${s.color} text-[28px] font-bold`}>{s.corporate}</div>
                        <div className="text-muted-foreground text-[14px]">Corporate</div>
                      </div>
                      <div className="bg-black/70 rounded-lg p-3 text-center">
                        <div className={`${s.color} text-[28px] font-bold`}>{s.revenue}</div>
                        <div className="text-muted-foreground text-[14px]">Revenue</div>
                      </div>
                    </div>
                    <div className={`mt-4 bg-black/70 rounded-lg p-3 flex justify-between items-center`}>
                      <span className="text-muted-foreground text-[16px]">Year 1 EBITDA</span>
                      <span className={`${s.color} text-[22px] font-bold`}>{s.ebitda}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-5">
                <h3 className="text-white text-[18px] font-bold mb-3 uppercase tracking-wider">Assumption Comparison</h3>
                <div className="grid grid-cols-5 gap-3">
                  {assumptions.map((a, i) => (
                    <div key={i} className="bg-black/70 rounded-lg p-3 text-center">
                      <div className="text-muted-foreground text-[13px] mb-2">{a.label}</div>
                      <div className="text-primary text-[16px] font-bold">{a.base}</div>
                      <div className="text-muted-foreground text-[12px] my-1">→</div>
                      <div className="text-yellow-400 text-[16px] font-bold">{a.conservative}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-up stagger-5 mt-4 bg-black/85 backdrop-blur-xl border border-yellow-400/30 rounded-xl p-4">
                <p className="text-muted-foreground text-[16px]">
                  <span className="text-yellow-400 font-bold">Key takeaway:</span> Even at 20% below targets, Iron Form's diversified revenue model limits downside to -$200K EBITDA — survivable with working capital reserve. Break-even requires only <span className="text-primary font-bold">245 active members</span>.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
