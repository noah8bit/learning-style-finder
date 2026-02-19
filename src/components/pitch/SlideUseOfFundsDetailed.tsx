import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    {
      pct: "40%",
      dollar: "$2.8M",
      title: "Construction & Land",
      desc: "Land acquisition, facility build-out with high-ceiling rigging, cross-training zones, and specialized recovery lounges.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
      tranche: "Tranche 1",
    },
    {
      pct: "25%",
      dollar: "$1.75M",
      title: "Equipment & Technology",
      desc: "Neuromuscular therapy, cryotherapy, infrared therapy, Olympic swimming lanes, golf simulators, and climbing walls.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
      tranche: "Tranche 2",
    },
    {
      pct: "10%",
      dollar: "$700K",
      title: "App & Tech Platform",
      desc: "Athlete performance tracking, analytics dashboards, and member management systems.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
      tranche: "Tranche 2",
    },
    {
      pct: "15%",
      dollar: "$1.05M",
      title: "Team & Operations",
      desc: "Coaches across 20+ disciplines, medical staff, operations manager, and Year 1 operating runway.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
      tranche: "Tranche 1 & 3",
    },
    {
      pct: "10%",
      dollar: "$700K",
      title: "Marketing & Contingency",
      desc: "Grand opening campaigns, digital presence, community partnerships, and reserve for unforeseen costs.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
      tranche: "Tranche 2 & 3",
    },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[55%] flex flex-col justify-center px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Investment Allocation</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
                Use of Funds <span className="text-primary">Detailed</span>
              </h2>
              <div className="animate-fade-up stagger-3 space-y-5">
                {funds.map((f, i) => (
                  <div key={i} className={`${f.bgColor} border ${f.borderColor} rounded-xl p-5 flex gap-5 items-start`}>
                    <span className={`${f.color} text-[32px] font-bold shrink-0 min-w-[70px]`}>{f.pct}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`${f.color} text-[18px] font-bold mb-1`}>{f.title}</h3>
                        <span className={`${f.color} text-[16px] font-bold`}>{f.dollar}</span>
                      </div>
                      <p className="text-muted-foreground text-[13px] leading-relaxed">{f.desc}</p>
                      <span className="text-muted-foreground/60 text-[11px] mt-1 block">{f.tranche}</span>
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
