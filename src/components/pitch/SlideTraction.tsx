import heroAthlete from "@/assets/pitch/hero-athlete.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideTraction({ active }: { active: boolean }) {
  const validations = [
    { metric: "150+", label: "Waitlist Signups", desc: "Pre-launch interest from athletes, families & fitness enthusiasts (target — campaign in progress)", icon: "📋" },
    { metric: "3", label: "Letters of Intent", desc: "In-progress LOIs from local sports orgs for team training retainment (target)", icon: "📝" },
    { metric: "5", label: "Partnership Talks", desc: "Active conversations with insurance providers, schools & corporate wellness programs", icon: "🤝" },
    { metric: "2", label: "Industry Advisors", desc: "Committed advisors from Atlanta sports medicine & film stunt coordination", icon: "🧠" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAthlete} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/88" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Early Validation</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-4">
                Traction & <span className="text-primary">Momentum</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[24px] mb-12 max-w-[900px] leading-relaxed">
                Even pre-revenue, Iron Form is generating real demand. Here's the proof that the market is ready.
              </p>

              <div className="animate-fade-up stagger-4 grid grid-cols-2 gap-6 mb-8">
                {validations.map((v, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-8 flex gap-6 items-start">
                    <span className="text-[44px] shrink-0">{v.icon}</span>
                    <div>
                      <div className="text-primary text-[48px] font-bold leading-none mb-1">{v.metric}</div>
                      <div className="text-foreground text-[24px] font-bold mb-2">{v.label}</div>
                      <p className="text-muted-foreground text-[20px] leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-5 bg-primary/10 border border-primary/30 rounded-xl p-7">
                <h3 className="text-primary text-[22px] font-bold mb-3 uppercase tracking-wider">Social Proof</h3>
                <div className="flex gap-10">
                  {[
                    "Endorsed by Atlanta-based professional athletes and trainers",
                    "Concept validated through local fitness community outreach",
                    "Pre-launch survey planned to gauge switching intent",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 flex-1">
                      <span className="text-primary text-[24px] mt-0.5">✓</span>
                      <p className="text-foreground text-[20px] leading-relaxed">{s}</p>
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