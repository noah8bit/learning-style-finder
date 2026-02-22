import heroInsurance from "@/assets/pitch/hero-insurance.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlidePreOpeningRisk({ active }: { active: boolean }) {
  const mitigations = [
    { icon: "💰", title: "$350K Operating Reserve", desc: "$350K operating reserve built into capital raise to cover 10+ months of downside burn. Provides 10.5 months runway at $33,333/month in worst case.", color: "text-primary", borderColor: "border-primary/30" },
    { icon: "👥", title: "Pre-Sale Membership Target: 150+", desc: "Structured pre-sale campaign launches during construction. Members commit before doors open — de-risks Day 1 revenue.", color: "text-accent", borderColor: "border-accent/30" },
    { icon: "🏢", title: "Corporate Contracts Pre-Opening", desc: "Corporate wellness agreements signed during development phase. Guaranteed recurring revenue from opening day.", color: "text-primary", borderColor: "border-primary/30" },
    { icon: "🏥", title: "Medical Referral Agreements", desc: "Insurance credentialing and physician referral partnerships secured 90+ days pre-opening. NMT revenue begins Month 1.", color: "text-accent", borderColor: "border-accent/30" },
    { icon: "📊", title: "Conservative Year 1 Revenue Ramp", desc: "Financial model assumes 200 average members Year 1 (not 400+). –$215K EBITDA is planned and reserved for. No heroic assumptions.", color: "text-primary", borderColor: "border-primary/30" },
    { icon: "🔧", title: "Experienced Development Team", desc: "Pre-engineered steel construction reduces timeline risk. GC selection and architectural plans finalized before capital close.", color: "text-accent", borderColor: "border-accent/30" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroInsurance} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Risk Mitigation</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-white mb-3">
                De-Risking <span className="text-primary">Ground-Up Development</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-6 max-w-[900px]">
                No pilot phase. Purpose-built from Day 1. Here's how we mitigate the increased execution risk.
              </p>

              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-4">
                {mitigations.map((m, i) => (
                  <div key={i} className={`bg-black/80 backdrop-blur-xl border ${m.borderColor} rounded-xl p-5 flex gap-4 items-start`}>
                    <span className="text-[32px] shrink-0">{m.icon}</span>
                    <div>
                      <h3 className={`${m.color} text-[20px] font-bold mb-1`}>{m.title}</h3>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 mt-4 bg-black/80 backdrop-blur-xl border border-primary/40 rounded-xl p-4">
                <p className="text-muted-foreground text-[16px] leading-relaxed">
                  <span className="text-primary font-bold">Bottom line:</span> Every major risk — demand, revenue timing, construction, and cash — has a specific mitigation built into the capital structure and operating plan.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
