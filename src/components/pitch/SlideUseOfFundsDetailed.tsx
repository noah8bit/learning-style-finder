import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    { dollar: "$230,000", title: "Pre-Development & Design", desc: "Architecture, engineering, permitting, site planning, legal formation", color: "text-primary", borderColor: "border-primary/30" },
    { dollar: "$170,000", title: "Equity Raise Costs & Advisory", desc: "Legal, accounting, investor materials, placement agent fees", color: "text-accent", borderColor: "border-accent/30" },
    { dollar: "$95,000", title: "Land Deposits & Due Diligence", desc: "Earnest money, environmental assessments, title, surveys", color: "text-primary", borderColor: "border-primary/30" },
    { dollar: "$50,000", title: "Pre-Launch Marketing", desc: "Brand identity, website, pre-sale membership campaigns", color: "text-accent", borderColor: "border-accent/30" },
    { dollar: "$110,000", title: "Founder & Team Runway", desc: "Founder compensation and key hire costs during pre-development phase", color: "text-primary", borderColor: "border-primary/30" },
    { dollar: "$95,000", title: "Operating Reserve", desc: "Working capital cushion for unexpected costs and downside protection", color: "text-accent", borderColor: "border-accent/30" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[58%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Capital Allocation</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
                SAFE Use of Funds — <span className="text-primary">$750,000</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-6">
                Foundational equity within the $9–10M raise. Funds pre-development and positions the full capital close.
              </p>
              <div className="animate-fade-up stagger-3 space-y-3">
                {funds.map((f, i) => (
                  <div key={i} className={`bg-secondary border ${f.borderColor} rounded-xl p-5 flex gap-5 items-center`}>
                    <span className={`${f.color} text-[32px] font-bold shrink-0 min-w-[140px] text-right`}>{f.dollar}</span>
                    <div className="flex-1">
                      <h3 className={`${f.color} text-[22px] font-bold`}>{f.title}</h3>
                      <p className="text-muted-foreground text-[18px] leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="animate-fade-up stagger-4 mt-3 bg-secondary border-2 border-primary/40 rounded-xl p-4 flex items-center justify-between">
                <span className="text-foreground text-[20px] font-bold uppercase tracking-wider">Total Raise</span>
                <span className="text-primary text-[32px] font-bold">$750,000</span>
              </div>

              <div className="animate-fade-up stagger-5 mt-3 bg-accent/10 border border-accent/30 rounded-lg p-3">
                <p className="text-muted-foreground text-[15px]">
                  <span className="text-accent font-bold">SAFE role:</span> Foundational equity anchoring the full $9–10M raise. Funds pre-development, secures land, and positions the project for institutional close. Construction begins only after full capital stack is secured.
                </p>
              </div>
            </>
          )}
        </div>
        <div className="w-[42%] h-full relative">
          <img src={heroTechPlatform} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>
    </ScaledSlide>
  );
}
