import heroSwimmingPool from "@/assets/pitch/hero-swimming-pool.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideDifferentiators({ active }: { active: boolean }) {
  const diffs = [
    { icon: "🏥", title: "Integrated Medical & Recovery", benefit: "Combines sports medicine with everyday training, enhancing performance and recovery." },
    { icon: "🏋", title: "30+ Training Disciplines", benefit: "One-stop hub for diverse athletic needs — unlike competitors focused on singular disciplines." },
    { icon: "🎬", title: "Film & Stunt Wing", benefit: "Unique offering in Atlanta's booming film market for stunt performers and actors." },
    { icon: "🌍", title: "Community Outreach", benefit: "Scouting and mentoring undiscovered talent — accessibility over profit-first models." },
    { icon: "💰", title: "Diverse Revenue Streams", benefit: "Memberships, team retainment, insurance, events — stable, adaptable financial model." },
    { icon: "⚡", title: "High-Tech Recovery", benefit: "Cryotherapy, infrared therapy, peptide wellness — forefront of performance innovation." },
    { icon: "👨‍🏫", title: "Expert Staff", benefit: "Specialists across disciplines ensuring personalized, high-quality training." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroSwimmingPool} alt="Olympic swimming pool" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Competitive Edge</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-12">
                What Makes Iron Form <span className="text-primary">Different</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-x-10 gap-y-6">
                {diffs.map((d, i) => (
                  <div key={i} className="flex gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                    <span className="text-[30px] shrink-0">{d.icon}</span>
                    <div>
                      <h3 className="text-foreground text-[18px] font-bold mb-1">{d.title}</h3>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">{d.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-4 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: IHRSA Competitive Landscape Report; Georgia Film Industry Economic Impact Study; Grand View Research – Cryotherapy & Recovery Market
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
