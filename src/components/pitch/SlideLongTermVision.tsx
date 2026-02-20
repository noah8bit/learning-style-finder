import heroRockClimbing from "@/assets/pitch/hero-rockclimbing.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideLongTermVision({ active }: { active: boolean }) {
  const visions = [
    { icon: "🏢", title: "Multi-Location Expansion", desc: "Multiple locations throughout Atlanta and eventually other major cities." },
    { icon: "🏕️", title: "Camps & Youth Programs", desc: "Pro athlete-led camps, structured youth development with mentorship." },
    { icon: "🧬", title: "Holistic Wellness", desc: "Nutrition, mental health, biofeedback, and personalized recovery plans." },
    { icon: "🎓", title: "Grants & Scholarships", desc: "Financial support for underserved athletes to access top-tier training." },
  ];

  const exitPaths = [
    { icon: "🔁", title: "Franchise Model", desc: "Proven playbook replicated across 10+ metros by Year 7 — each generating $1.5M–$2.5M annually." },
    { icon: "🏦", title: "Strategic Acquisition", desc: "Acquisition target for national fitness brands, sports media companies, or healthcare networks." },
    { icon: "💸", title: "Investor Returns", desc: "Projected 3–5x return within 5–7 years through profit distributions and equity appreciation." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroRockClimbing} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Long-Term Vision</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-10">
                Building an Athletic <span className="text-primary">Ecosystem</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-4 gap-5 mb-10">
                {visions.map((v, i) => (
                  <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-7">
                    <span className="text-[40px] mb-3 block">{v.icon}</span>
                    <h3 className="text-foreground text-[24px] font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4">
                <h3 className="text-accent text-[22px] font-bold mb-5 uppercase tracking-wider">Exit Strategy & Returns</h3>
                <div className="grid grid-cols-3 gap-5">
                  {exitPaths.map((e, i) => (
                    <div key={i} className="bg-accent/10 border border-accent/30 rounded-xl p-7">
                      <span className="text-[40px] mb-3 block">{e.icon}</span>
                      <h3 className="text-accent text-[24px] font-bold mb-2">{e.title}</h3>
                      <p className="text-muted-foreground text-[20px] leading-relaxed">{e.desc}</p>
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