import heroSwimmingPool from "@/assets/pitch/hero-swimming-pool.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideDifferentiators({ active }: { active: boolean }) {
  const diffs = [
    { icon: "🏥", title: "Integrated Medical & Recovery", benefit: "Sports medicine combined with everyday training — performance and recovery under one roof." },
    { icon: "🏋", title: "30+ Training Disciplines", benefit: "One-stop hub for diverse athletic needs — unlike single-discipline competitors." },
    { icon: "🎪", title: "Film, Stunt & Circus Wing", benefit: "Aerial silks, trapeze, and acrobatic training for Cirque du Soleil performers during Atlanta residencies — plus stunt coordination for Georgia's #1 film market." },
    { icon: "🏆", title: "Competition Hosting", benefit: "Purpose-built for Hyrox, CrossFit, strongman, and multi-sport fitness competitions." },
    { icon: "⚡", title: "High-Tech Recovery", benefit: "Cryotherapy, infrared therapy, peptide wellness — forefront of performance innovation." },
    { icon: "🏃", title: "Olympic Track & Field", benefit: "Sprint lanes, jumping pits, throwing cages, and hurdle training — rare outside collegiate facilities." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroSwimmingPool} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/88" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Competitive Edge</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-10">
                What Makes Iron Form <span className="text-primary">Different</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-6">
                {diffs.map((d, i) => (
                  <div key={i} className="flex gap-5 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-7">
                    <span className="text-[44px] shrink-0">{d.icon}</span>
                    <div>
                      <h3 className="text-foreground text-[26px] font-bold mb-2">{d.title}</h3>
                      <p className="text-muted-foreground text-[22px] leading-relaxed">{d.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}