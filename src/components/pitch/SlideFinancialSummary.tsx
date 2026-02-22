import heroFinancial from "@/assets/pitch/hero-financial.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialSummary({ active }: { active: boolean }) {
  const years = [
    { year: "Year 1", revenue: "$1.14M", ebitda: "-$90K", members: "200", note: "Conservative ramp — operating loss covered by working capital reserve", color: "text-yellow-400", barWidth: 23 },
    { year: "Year 2", revenue: "$3.17M", ebitda: "$520K", members: "450", note: "Growth year — push membership past 450, corporate scales", color: "text-accent", barWidth: 63 },
    { year: "Year 3", revenue: "$5.01M", ebitda: "$1.2M", members: "600", note: "Stable and bankable — net positive after debt", color: "text-primary", barWidth: 100 },
  ];

  const keyNumbers = [
    { label: "Break-Even", value: "245 members", icon: "⏱️" },
    { label: "Yr 1 EBITDA", value: "-$90K", icon: "📉" },
    { label: "Yr 3 EBITDA", value: "$1.2M", icon: "📈" },
    { label: "Yr 3 Net Cash", value: "$575K", icon: "💰" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFinancial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">Financial Summary</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-4">
                3-Year <span className="text-primary">At a Glance</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-10 max-w-[900px]">
                Year 1 is designed for stability, not peak performance. Growth accelerates as engines come online.
              </p>

              <div className="animate-fade-up stagger-3 space-y-5 mb-8">
                {years.map((y, i) => (
                  <div key={i} className="bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-6 flex items-center gap-8">
                    <div className="w-[100px] shrink-0">
                      <span className={`${y.color} text-[32px] font-bold`}>{y.year}</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-[12px] bg-black/80 rounded-full overflow-hidden mb-2">
                        <div className={`h-full rounded-full transition-all ${y.color === 'text-primary' ? 'bg-primary' : y.color === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-accent'}`} style={{ width: `${y.barWidth}%` }} />
                      </div>
                      <p className="text-muted-foreground text-[15px] italic">{y.note}</p>
                    </div>
                    <div className="flex gap-6 shrink-0">
                      <div className="text-center">
                        <div className={`${y.color} text-[28px] font-bold`}>{y.revenue}</div>
                        <div className="text-muted-foreground text-[13px]">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className={`${y.color} text-[28px] font-bold`}>{y.ebitda}</div>
                        <div className="text-muted-foreground text-[13px]">EBITDA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white text-[28px] font-bold">{y.members}</div>
                        <div className="text-muted-foreground text-[13px]">Members</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-4">
                {keyNumbers.map((k, i) => (
                  <div key={i} className="bg-black/85 backdrop-blur-xl border border-white/25 rounded-xl p-5 text-center">
                    <span className="text-[28px] mb-1 block">{k.icon}</span>
                    <div className="text-primary text-[24px] font-bold mb-0.5">{k.value}</div>
                    <div className="text-muted-foreground text-[15px]">{k.label}</div>
                  </div>
                ))}
              </div>

              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px]">
                Full 3-year pro forma with COGS, OPEX, and stress testing available in detailed financials appendix.
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
