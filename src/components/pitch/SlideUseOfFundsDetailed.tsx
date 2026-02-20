import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    {
      pct: "38%",
      dollar: "$4.5M",
      title: "Construction & Land",
      desc: "Land acquisition (8–12 acres) and ground-up 60,000+ sq ft build with high-ceiling rigging, cross-training zones, outdoor fields, and recovery lounges.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
      tranche: "Tranche 1",
    },
    {
      pct: "22%",
      dollar: "$2.7M",
      title: "Equipment & Specialty Installations",
      desc: "Olympic swimming pool, climbing walls, golf simulators, cryotherapy, infrared therapy, neuromuscular equipment, and stunt rigging systems.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
      tranche: "Tranche 2",
    },
    {
      pct: "11%",
      dollar: "$1.35M",
      title: "Year 1 Operations & Team",
      desc: "Coaches across 20+ disciplines, medical staff, operations manager, utilities, insurance, and day-to-day operating costs.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
      tranche: "Tranche 3",
    },
    {
      pct: "7%",
      dollar: "$850K",
      title: "App Platform & Technology",
      desc: "Athlete performance tracking, biometric analytics dashboards, member management, and facility-wide smart systems.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
      tranche: "Tranche 2",
    },
    {
      pct: "6%",
      dollar: "$750K",
      title: "Marketing & Launch",
      desc: "Grand opening campaigns, digital presence, community partnerships, and sponsorship activations.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
      tranche: "Tranche 2 & 3",
    },
    {
      pct: "15%",
      dollar: "$1.8M",
      title: "Contingency Reserve",
      desc: "Robust buffer for permitting delays, material cost overruns, supply chain disruptions, and unforeseen construction or regulatory expenses.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
      tranche: "Held in reserve",
    },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[55%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[16px] mb-4">Investment Allocation</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-8">
                Use of Funds <span className="text-primary">Detailed</span>
              </h2>
              <div className="animate-fade-up stagger-3 space-y-4">
                {funds.map((f, i) => (
                  <div key={i} className={`${f.bgColor} border ${f.borderColor} rounded-xl p-5 flex gap-5 items-start`}>
                    <span className={`${f.color} text-[32px] font-bold shrink-0 min-w-[70px]`}>{f.pct}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`${f.color} text-[18px] font-bold mb-1`}>{f.title}</h3>
                        <span className={`${f.color} text-[18px] font-bold`}>{f.dollar}</span>
                      </div>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">{f.desc}</p>
                      <span className="text-muted-foreground/60 text-[12px] mt-1 block">{f.tranche}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-[45%] h-full relative">
          <img src={heroTechPlatform} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>
    </ScaledSlide>
  );
}
