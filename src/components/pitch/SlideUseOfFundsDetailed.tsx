import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    {
      pct: "35%",
      title: "Facility Build-Out",
      desc: "High-ceiling rigging for stunts, cross-training zones, and specialized recovery lounges — dynamic environments tailored for various athletic disciplines.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
    },
    {
      pct: "25%",
      title: "Equipment & Technology",
      desc: "Advanced neuromuscular therapy equipment, cryotherapy, infrared therapy, Olympic swimming lanes, and golf simulators for optimal care and performance.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
    },
    {
      pct: "15%",
      title: "App & Tech Platform",
      desc: "Athlete performance tracking app and analytics dashboards for personalized training, progress monitoring, and data-driven results.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
    },
    {
      pct: "15%",
      title: "Team Recruitment",
      desc: "Certified coaches across 20+ disciplines, medical staff, and operations manager — ensuring high-quality service and community credibility.",
      color: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
    },
    {
      pct: "10%",
      title: "Partnerships & Launch",
      desc: "Insurance negotiations, grant applications, sponsorships with local businesses — creating additional revenue streams and broader audience reach.",
      color: "text-primary",
      borderColor: "border-primary/30",
      bgColor: "bg-primary/10",
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
                    <div>
                      <h3 className={`${f.color} text-[18px] font-bold mb-1`}>{f.title}</h3>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">{f.desc}</p>
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
