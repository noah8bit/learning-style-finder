import heroNmt from "@/assets/pitch/hero-nmt.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideMedicalRevenueEngine({ active }: { active: boolean }) {
  const streams = [
    {
      icon: "🏥",
      title: "Insurance Partnerships",
      total: "$58K",
      points: [
        "8 workers' comp referrals/week × $150/session × 48 weeks = $57,600",
        "Year 1 conservative — ramps to 20/week as relationships build",
      ],
    },
    {
      icon: "🧠",
      title: "Neuromuscular Therapy (Net)",
      total: "$110K",
      points: [
        "5 sessions/day avg × $120 × 280 days = $168K gross",
        "Additional pack subscriptions and rehab packages",
        "Total gross ~$310K → Net to facility after Rick's split: $110K",
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
                <span className="text-primary text-[34px] font-bold">$168K</span>
              </div>

              <div className="animate-fade-up stagger-5 mt-4 flex gap-4">
                <div className="flex-1 bg-black/85 backdrop-blur-xl border border-accent/40 rounded-lg p-4">
                  <p className="text-muted-foreground text-[15px]">
                    <span className="text-accent font-bold">Year 1 Conservative:</span> NMT at 5/day (63% capacity) and 8 insurance referrals/week. Insurance revenue assumes 0 from Months 1–3 (credentialing period). Year 2 scales to full utilization as provider relationships mature.
                  </p>
                </div>
                <div className="flex-1 bg-black/85 backdrop-blur-xl border border-white/15 rounded-lg p-4">
                  <p className="text-muted-foreground text-[15px]">
                    <span className="text-white font-bold">Compliance Status:</span> Payer credentialing planned pre-launch (90-day lead time). Billing outsourced to certified medical billing partner. Workers' comp referral pipeline via existing provider relationships. Reimbursement begins Month 4.
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
