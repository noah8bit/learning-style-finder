import heroFinancial from "@/assets/pitch/hero-financial.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCapitalStack({ active }: { active: boolean }) {
  const stack = [
    { source: "Equity Raise", amount: "$9.8M", pct: "62%", color: "text-primary", borderColor: "border-primary/40", items: ["$750K SAFE (foundational equity — already raising)", "Remaining equity from institutional / syndicate investors", "Closes prior to construction start", "Land under LOI prior to equity close; purchase completed at capital close"] },
    { source: "Bank Debt", amount: "$6.0M", pct: "38%", color: "text-accent", borderColor: "border-accent/40", items: ["Construction financing + equipment", "Secured by real estate asset", "Debt service: $620K/year at stabilization"] },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFinancial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Capital Structure</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-white mb-3">
                Capital Stack — <span className="text-primary">$15.8M</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-8 max-w-[900px]">
                Construction begins only after full capital stack is secured. No phased fundraising risk.
              </p>

              <div className="animate-fade-up stagger-3 flex gap-6 mb-6">
                {stack.map((s, i) => (
                  <div key={i} className={`flex-1 bg-black/85 backdrop-blur-xl border ${s.borderColor} rounded-xl p-7`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`${s.color} text-[26px] font-bold`}>{s.source}</h3>
                      <span className={`${s.color} text-[14px] font-bold bg-black/50 border ${s.borderColor} rounded-full px-4 py-1`}>{s.pct}</span>
                    </div>
                    <div className={`${s.color} text-[48px] font-bold mb-4`}>{s.amount}</div>
                    <ul className="space-y-2.5">
                      {s.items.map((item, j) => (
                        <li key={j} className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${s.color === "text-primary" ? "bg-primary" : "bg-accent"} mt-2.5 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Stabilization */}
              <div className="animate-fade-up stagger-4 bg-black/85 backdrop-blur-xl border border-primary/40 rounded-xl p-5 mb-4">
                <h3 className="text-primary text-[18px] font-bold mb-2 uppercase tracking-wider">Stabilization — Year 3</h3>
                <div className="flex items-center gap-6 text-[18px]">
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">600</div>
                    <div className="text-muted-foreground text-[13px]">Members</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">$5.01M</div>
                    <div className="text-muted-foreground text-[13px]">Revenue</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">$1.2M</div>
                    <div className="text-muted-foreground text-[13px]">EBITDA</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">24%</div>
                    <div className="text-muted-foreground text-[13px]">Margin</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-primary text-[24px] font-bold">$620K</div>
                    <div className="text-muted-foreground text-[13px]">Debt Service</div>
                  </div>
                   <div className="text-center flex-1">
                     <div className="text-primary text-[24px] font-bold">$580K</div>
                     <div className="text-muted-foreground text-[13px]">Net After Debt (pre-tax)</div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-up stagger-5 grid grid-cols-3 gap-3">
                <div className="bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-primary text-[24px] font-bold">$750K</div>
                  <div className="text-muted-foreground text-[14px]">SAFE (Now Raising)</div>
                </div>
                <div className="bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-primary text-[24px] font-bold">$620K/yr</div>
                  <div className="text-muted-foreground text-[14px]">Debt Service</div>
                </div>
                <div className="bg-black/85 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-primary text-[24px] font-bold">Year 3+</div>
                  <div className="text-muted-foreground text-[14px]">Net Positive After Debt</div>
                </div>
              </div>

              <p className="animate-fade-up stagger-5 mt-3 text-muted-foreground/60 text-[12px]">
                Assumes 10-year amortization at 8% blended commercial construction rate. Annual debt service: $620K.
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
