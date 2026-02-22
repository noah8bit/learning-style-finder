import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    { pct: "15%", dollar: "~$2.3M", title: "Land Acquisition", desc: "8 acres in metro Atlanta — site selection underway", color: "text-primary", borderColor: "border-primary/30", bgColor: "bg-primary/10" },
    { pct: "10%", dollar: "~$1.6M", title: "Site Work & Utilities", desc: "Grading, parking, utility connections, outdoor field prep", color: "text-accent", borderColor: "border-accent/30", bgColor: "bg-accent/10" },
    { pct: "52%", dollar: "~$8M", title: "Vertical Build (32K sq ft)", desc: "Pre-engineered steel shell at ~$250/sq ft avg — performance floor, sprint lab, combat studio, film wing, medical suite, seminar space", color: "text-primary", borderColor: "border-primary/30", bgColor: "bg-primary/10" },
    { pct: "13%", dollar: "~$2M", title: "Outdoor Build", desc: "100×50 turf field, 120m sprint lane, long jump pit, sled lane", color: "text-accent", borderColor: "border-accent/30", bgColor: "bg-accent/10" },
    { pct: "9%", dollar: "~$1.4M", title: "Equipment & Install", desc: "Training equipment, recovery tech, spring floors, gantry rigs, stunt gear", color: "text-primary", borderColor: "border-primary/30", bgColor: "bg-primary/10" },
    { pct: "17%", dollar: "~$2.7M", title: "Soft Costs & Contingency", desc: "Permits, legal, architecture, marketing, insurance, ~12% contingency reserve", color: "text-accent", borderColor: "border-accent/30", bgColor: "bg-accent/10" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[58%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investment Allocation</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-3">
                Use of Funds <span className="text-primary">Detailed</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-6">
                Total: <span className="text-primary font-bold">$15M–$16M</span> · Equity: $9–10M · Debt: $5–6M · Working capital reserve: $1.5M
              </p>
              <div className="animate-fade-up stagger-3 space-y-3">
                {funds.map((f, i) => (
                  <div key={i} className={`${f.bgColor} border ${f.borderColor} rounded-xl p-5 flex gap-5 items-center`}>
                    <span className={`${f.color} text-[42px] font-bold shrink-0 min-w-[80px]`}>{f.pct}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`${f.color} text-[24px] font-bold`}>{f.title}</h3>
                        <span className={`${f.color} text-[24px] font-bold`}>{f.dollar}</span>
                      </div>
                      <p className="text-muted-foreground text-[18px] leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-4 mt-4 text-muted-foreground/50 text-[11px] leading-tight">
                Sources: RSMeans Construction Cost Data 2024; BuildingsGuide – Metal Building Prices 2026; Iron Form internal financial models
              </p>
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
