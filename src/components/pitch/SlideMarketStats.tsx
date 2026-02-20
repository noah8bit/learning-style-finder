import heroAtlanta from "@/assets/pitch/hero-atlanta.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideMarketStats({ active }: { active: boolean }) {
  const stats = [
    { value: "$100B+", label: "Global Fitness Market", sub: "Growing at ~7% CAGR" },
    { value: "$8B", label: "Sports Medicine Market", sub: "Recovery & therapy focus" },
    { value: "247M", label: "Sport & Fitness Participants", sub: "Participated in 2024 (SFIA)" },
    { value: "70%", label: "Prefer Multi-Training", sub: "Cross-training demand rising" },
    { value: "7M+", label: "Metro Atlanta Population", sub: "Athletes & fitness enthusiasts" },
    { value: "↑", label: "Mental Health Awareness", sub: "Driving comprehensive solutions" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAtlanta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/88" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Market Data</p>
              <h2 className="animate-fade-up stagger-2 text-[64px] font-bold leading-[1] text-foreground mb-6">
                The Numbers Speak <span className="text-primary">For Themselves</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[24px] max-w-[900px] mb-14 leading-relaxed">
                Explosive market growth, rising participation, and increasing demand for integrated training facilities.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                    <div className="text-primary text-[56px] font-bold leading-none mb-3">{s.value}</div>
                    <div className="text-foreground text-[22px] font-semibold mb-1">{s.label}</div>
                    <div className="text-muted-foreground text-[18px]">{s.sub}</div>
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
