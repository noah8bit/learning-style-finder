import heroAthlete from "@/assets/pitch/hero-athlete.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideTraction({ active }: { active: boolean }) {
  const validations = [
    { metric: "150+", label: "Waitlist Signups", desc: "Pre-launch interest from athletes, families, and fitness enthusiasts across metro Atlanta (target — campaign in progress)", icon: "📋" },
    { metric: "3", label: "Letters of Intent", desc: "In-progress LOIs from local sports organizations for team training retainment agreements (target)", icon: "📝" },
    { metric: "5", label: "Partnership Discussions", desc: "Active conversations with insurance providers, local schools, and corporate wellness programs", icon: "🤝" },
    { metric: "2", label: "Industry Advisors", desc: "Committed advisors from the Atlanta sports medicine and film stunt coordination industries", icon: "🧠" },
  ];

  const socialProof = [
    "Endorsed by Atlanta-based professional athletes and trainers",
    "Concept validated through local fitness community outreach",
    "Pre-launch survey planned to gauge switching intent from existing gym members",
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAthlete} alt="Athletes training" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Early Validation</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
                Traction & <span className="text-primary">Momentum</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[17px] mb-10 max-w-[750px]">
                Even pre-revenue, Iron Form is generating real demand. Here's the proof that the market is ready.
              </p>

              <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-5 mb-10">
                {validations.map((v, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <span className="text-[32px] mb-3 block">{v.icon}</span>
                    <div className="text-primary text-[40px] font-bold mb-1">{v.metric}</div>
                    <div className="text-foreground text-[16px] font-semibold mb-2">{v.label}</div>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-5 bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-primary text-[16px] font-bold mb-3 uppercase tracking-wider">Social Proof</h3>
                <div className="flex gap-8">
                  {socialProof.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 flex-1">
                      <span className="text-primary text-[18px] mt-0.5">✓</span>
                      <p className="text-foreground text-[14px] leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
