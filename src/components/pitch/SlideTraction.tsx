import heroTraction from "@/assets/pitch/hero-traction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideTraction({ active }: { active: boolean }) {
  const validations = [
    { metric: "2+", label: "Years in Development", desc: "Full-time research, facility planning, branding, and IP development by founding team", icon: "⏳" },
    { metric: "3", label: "Co-Founders Invested", desc: "Each founder contributing personal capital, equipment, and relocating practices into Iron Form", icon: "💪" },
    { metric: "5", label: "Partnership Talks", desc: "Active conversations with insurance providers, schools & corporate wellness programs", icon: "🤝" },
    { metric: "2", label: "Industry Advisors", desc: "Committed advisors from Atlanta sports medicine & film stunt coordination", icon: "🧠" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroTraction} alt="" className="absolute inset-0 w-full h-full object-cover" />
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

              <div className="animate-fade-up stagger-5 flex gap-5">
                <div className="flex-1 bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <h3 className="text-primary text-[20px] font-bold mb-3 uppercase tracking-wider">Founder Skin in the Game</h3>
                  <div className="space-y-2">
                    {[
                      "Noah Garret: 2+ years of full-time development, personal capital invested in IP, branding, and facility planning",
                      "Rick Villanueva: Relocating his established NMT practice into Iron Form — bringing existing client revenue",
                      "Josh Garret: Contributing peptide clinic equipment and licensing costs from personal investment",
                    ].map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary text-[20px] mt-0.5 shrink-0">✓</span>
                        <p className="text-foreground text-[18px] leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 bg-accent/10 border border-accent/30 rounded-xl p-6">
                  <h3 className="text-accent text-[20px] font-bold mb-3 uppercase tracking-wider">Comparable Facility Revenue</h3>
                  <div className="space-y-2">
                    {[
                      "IMG Academy (Bradenton, FL): ~$303M/yr revenue across multi-sport campus (Growjo 2024)",
                      "Life Time Fitness: $6.6B revenue FY2024, ~175 locations (LTH SEC Filing, Feb 2025)",
                      "F45 Training: 1,500+ studios globally, 12.4% AUV growth in 2024 (F45 Press Release)",
                      "Avg Atlanta CrossFit box: $300K–$500K/yr with single-discipline focus (IHRSA benchmarks)",
                    ].map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-accent text-[20px] mt-0.5 shrink-0">•</span>
                        <p className="text-foreground text-[18px] leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: Growjo – IMG Academy Revenue Estimate 2024; Life Time Group Holdings SEC Filing (Feb 2025); F45 Training Press Release 2024; IHRSA Industry Benchmark Reports
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}