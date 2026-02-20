import heroTechPlatform from "@/assets/pitch/hero-tech-platform.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideUseOfFundsDetailed({ active }: { active: boolean }) {
  const funds = [
    { pct: "50%", dollar: "$7.5M", title: "Land & Construction", desc: "8–12 acre campus, 60,000+ sq ft pre-engineered steel build, pool infrastructure, café & clinic build-out", color: "text-primary", borderColor: "border-primary/30", bgColor: "bg-primary/10" },
    { pct: "15%", dollar: "$2.25M", title: "Equipment & Installations", desc: "Climbing walls, cryotherapy, stunt rigging, spring floors, kitchen & gym equipment", color: "text-accent", borderColor: "border-accent/30", bgColor: "bg-accent/10" },
    { pct: "10%", dollar: "$1.5M", title: "Year 1 Operations", desc: "Coaches, medical staff, utilities, insurance, inventory", color: "text-primary", borderColor: "border-primary/30", bgColor: "bg-primary/10" },
    { pct: "5%", dollar: "$750K", title: "App & Technology", desc: "Performance tracking, biometrics, member mgmt, POS systems", color: "text-accent", borderColor: "border-accent/30", bgColor: "bg-accent/10" },
    { pct: "5%", dollar: "$750K", title: "Marketing & Launch", desc: "Grand opening, digital presence, corporate sales, sponsorship outreach", color: "text-primary", borderColor: "border-primary/30", bgColor: "bg-primary/10" },
    { pct: "15%", dollar: "$2.25M", title: "Contingency Reserve", desc: "Buffer for construction delays, overruns, regulatory costs, working capital", color: "text-accent", borderColor: "border-accent/30", bgColor: "bg-accent/10" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[58%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investment Allocation</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-8">
                Use of Funds <span className="text-primary">Detailed</span>
              </h2>
              <div className="animate-fade-up stagger-3 space-y-4">
                {funds.map((f, i) => (
                  <div key={i} className={`${f.bgColor} border ${f.borderColor} rounded-xl p-6 flex gap-6 items-center`}>
                    <span className={`${f.color} text-[48px] font-bold shrink-0 min-w-[90px]`}>{f.pct}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`${f.color} text-[26px] font-bold`}>{f.title}</h3>
                        <span className={`${f.color} text-[26px] font-bold`}>{f.dollar}</span>
                      </div>
                      <p className="text-muted-foreground text-[22px] leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
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