import heroAtlanta from "@/assets/pitch/hero-atlanta.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideMarketStats({ active }: { active: boolean }) {
  const stats = [
    { value: "$100B+", label: "Global Fitness Market by 2025", sub: "Growing at ~7% CAGR" },
    { value: "$8B", label: "Sports Medicine Market by 2025", sub: "Recovery & therapy focus" },
    { value: "80%", label: "Americans in Fitness Activities", sub: "247M active in 2024 (SFIA)" },
    { value: "70%", label: "Prefer Multi-Training Facilities", sub: "Cross-training demand" },
    { value: "7M+", label: "Metro Atlanta Population", sub: "Athletes & fitness enthusiasts" },
    { value: "↑", label: "Mental Health Awareness", sub: "Driving comprehensive solutions" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAtlanta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Market Data</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-6">
                The Numbers Speak <span className="text-primary">For Themselves</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] max-w-[800px] mb-14 leading-relaxed">
                Explosive market growth, rising participation, and increasing demand for integrated training facilities confirm the opportunity.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                    <div className="text-primary text-[48px] font-bold leading-none mb-3">{s.value}</div>
                    <div className="text-foreground text-[16px] font-semibold mb-1">{s.label}</div>
                    <div className="text-muted-foreground text-[13px]">{s.sub}</div>
                  </div>
                ))}
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: IHRSA Global Report 2024; Grand View Research – Sports Medicine Market Analysis; PHIT America Participation Report; Statista U.S. Fitness Industry; U.S. Census Bureau – Atlanta Metro Area
            </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
