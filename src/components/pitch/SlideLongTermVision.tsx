import heroRockClimbing from "@/assets/pitch/hero-rockclimbing.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideLongTermVision({ active }: { active: boolean }) {
  const visions = [
    { icon: "🏢", title: "Multi-Location Expansion", desc: "Multiple locations throughout Atlanta and eventually other major cities — a network of high-performance training centers." },
    { icon: "🏕️", title: "Seasonal Camps & Youth Programs", desc: "Pro athlete-led camps, structured youth development programs with mentorship and resources." },
    { icon: "🧬", title: "Holistic Wellness Integration", desc: "Nutrition counseling, mental health resources, biofeedback, and personalized recovery plans." },
    { icon: "🎓", title: "Grants & Scholarships", desc: "Financial support programs for underserved athletes — ensuring access to top-tier training." },
  ];

  const exitPaths = [
    { icon: "🔁", title: "Franchise Model", desc: "Proven playbook replicated across 10+ metro areas by Year 7 — each location generating $1.5M–$2.5M annually." },
    { icon: "🏦", title: "Strategic Acquisition", desc: "Positioned as an acquisition target for national fitness brands, sports media companies, or healthcare networks." },
    { icon: "💸", title: "Investor Returns", desc: "Projected 3–5x return within 5–7 years through profit distributions, equity appreciation, and potential exit event." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroRockClimbing} alt="Indoor rock climbing facility" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Long-Term Vision</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-6">
                Building an Athletic <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] max-w-[800px] mb-12 leading-relaxed">
                Iron Form will establish itself not only as a premier training facility but as an integral part of the athletic community in Atlanta and beyond.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-5 mb-8">
                {visions.map((v, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <span className="text-[28px] mb-3 block">{v.icon}</span>
                    <h3 className="text-foreground text-[16px] font-semibold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-5">
                <h3 className="text-accent text-[16px] font-bold mb-4 uppercase tracking-wider">Exit Strategy & Investor Returns</h3>
                <div className="grid grid-cols-3 gap-5">
                  {exitPaths.map((e, i) => (
                    <div key={i} className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                      <span className="text-[28px] mb-3 block">{e.icon}</span>
                      <h3 className="text-accent text-[16px] font-semibold mb-2">{e.title}</h3>
                      <p className="text-muted-foreground text-[13px] leading-relaxed">{e.desc}</p>
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
