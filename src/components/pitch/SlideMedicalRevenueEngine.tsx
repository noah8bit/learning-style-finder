import heroNmt from "@/assets/pitch/hero-nmt.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideMedicalRevenueEngine({ active }: { active: boolean }) {
  const streams = [
    {
      icon: "🏥",
      title: "Insurance Partnerships",
      total: "$125K",
      points: [
        "20 workers' comp referrals/week × $100/session × 50 weeks = $100K",
        "80 insurer-subsidized members × $35 avg/mo × 12 = $33K",
      ],
    },
    {
      icon: "🧠",
      title: "Neuromuscular Therapy (Net)",
      total: "$150K",
      points: [
        "6 sessions/day × $120 avg × 280 days = $201K gross",
        "28 NMT Pack subscribers ($299/mo) + 15 rehab packages ($800/mo)",
        "Total gross: $429K → Net to facility after Rick's split: $150K",
      ],
    },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroNmt} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Revenue Engine</p>
              <h2 className="animate-fade-up stagger-2 text-[50px] font-bold leading-[1] text-white mb-3">
                Medical <span className="text-primary">Revenue Engine</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8 max-w-[900px]">
                Insurance partnerships and neuromuscular therapy create a recession-resistant, medically-credentialed revenue layer that standard gyms cannot replicate.
              </p>

              <div className="animate-fade-up stagger-3 flex gap-6 mb-6">
                {streams.map((s, i) => (
                  <div key={i} className="flex-1 bg-black/85 backdrop-blur-xl border border-primary/40 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[32px]">{s.icon}</span>
                      <h3 className="text-white text-[22px] font-bold">{s.title}</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      {s.points.map((p, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground text-[17px] leading-relaxed">{p}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-black/70 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-muted-foreground text-[16px]">Year 1 Net</span>
                      <span className="text-primary text-[24px] font-bold">{s.total}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-white text-[22px] font-bold uppercase tracking-wider">Combined Medical Revenue</span>
                  <span className="text-muted-foreground text-[16px] ml-4">Recession-resistant · Insurance-backed · Clinically credentialed</span>
                </div>
                <span className="text-primary text-[34px] font-bold">$275K</span>
              </div>

              <div className="animate-fade-up stagger-5 mt-4 flex gap-4">
                <div className="flex-1 bg-black/85 backdrop-blur-xl border border-accent/40 rounded-lg p-4">
                  <p className="text-muted-foreground text-[15px]">
                    <span className="text-accent font-bold">NMT Utilization:</span> Based on 75% schedule capacity (6 of 8 available sessions/day). If Rick averages 4/day, gross drops ~33% — net to facility ~$100K.
                  </p>
                </div>
                <div className="flex-1 bg-black/85 backdrop-blur-xl border border-white/15 rounded-lg p-4">
                  <p className="text-muted-foreground text-[15px]">
                    <span className="text-white font-bold">Defensibility:</span> Rick Villanueva's 18+ year clinical specialization and existing client roster is the moat. Not a generic massage therapist — a neuromuscular specialist.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
