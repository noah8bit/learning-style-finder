import heroFinancial from "@/assets/pitch/hero-financial.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialSnapshot({ active }: { active: boolean }) {
  const metrics = [
    { label: "Development Cost", value: "$15.8M", icon: "🏗️" },
    { label: "Equity Raise", value: "$9.8M", icon: "💰" },
    { label: "Debt", value: "$6.0M", icon: "🏦" },
    { label: "Year 1 Revenue", value: "$1.14M", icon: "📊" },
    { label: "Year 1 EBITDA", value: "-$215K", icon: "📉" },
    { label: "Break-Even (blended)", value: "245 members", icon: "⏱️" },
    { label: "Year 3 Revenue", value: "$5.01M", icon: "📈" },
    { label: "Year 3 EBITDA", value: "$1.2M", icon: "🔥" },
    { label: "Year 3 Net After Debt", value: "$580K", icon: "✅" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFinancial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/93" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Executive Summary</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-4">
                Iron Form <span className="text-primary">Financial Snapshot</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-10 max-w-[900px]">
                One view. Every number that matters. Institutional-grade transparency.
              </p>

              <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-5 mb-8">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-black/80 backdrop-blur-xl border border-primary/30 rounded-xl p-6 flex items-center gap-5">
                    <span className="text-[36px] shrink-0">{m.icon}</span>
                    <div>
                      <div className="text-primary text-[28px] font-bold">{m.value}</div>
                      <div className="text-muted-foreground text-[16px]">{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up stagger-4 bg-black/80 backdrop-blur-xl border-2 border-primary/40 rounded-xl p-5">
                <div className="flex items-center gap-6 text-[18px]">
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">$750K SAFE</div>
                    <div className="text-muted-foreground text-[13px]">Now Raising</div>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">$5M Cap</div>
                    <div className="text-muted-foreground text-[13px]">Valuation Cap</div>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">13.04%</div>
                    <div className="text-muted-foreground text-[13px]">Ownership at Conversion</div>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">24%</div>
                    <div className="text-muted-foreground text-[13px]">Yr 3 EBITDA Margin</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
