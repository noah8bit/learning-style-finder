import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideInvestmentAsk({ active }: { active: boolean }) {
  const capitalStack = [
    { label: "Equity Raise", amount: "$9M–$10M", desc: "30–35% ownership offered to investors", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    { label: "Bank Debt", amount: "$5M–$6M", desc: "Asset-backed financing · ~8% blended rate", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
    { label: "Total Capital", amount: "$15M–$16M", desc: "Phase 1 build: 32,000 sq ft on 8 acres", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  ];

  const dealTerms = [
    { label: "Instrument", value: "Straight Equity" },
    { label: "Equity Offered", value: "30–35%" },
    { label: "Preferred Return", value: "8% accrued" },
    { label: "Anti-Dilution", value: "Weighted avg" },
    { label: "Board", value: "3 seats" },
    { label: "Debt Service", value: "~$620K/yr" },
  ];

  const protections = [
    { icon: "🛡️", title: "Investor Protections", items: ["8% accrued preferred return (paid at distribution/exit)", "Weighted-average anti-dilution", "Board seat + independent director", "Major decision approval rights"] },
    { icon: "⚡", title: "Operator Alignment", items: ["Rick: 4% equity (4-yr vest, 1-yr cliff)", "Josh: 4% equity (4-yr vest, 1-yr cliff)", "5% option pool reserved for key hires", "Tech IP housed in separate entity — investors get first right to invest"] },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">The Ask</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                Raising <span className="text-primary">$9M–$10M</span> Equity
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-6 max-w-[900px] leading-relaxed">
                Straight equity. No convertible notes, no SAFEs — a clean, asset-backed deal structure that real estate investors understand.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-8">
                {/* Left: Capital Stack + Deal Terms */}
                <div className="flex-1">
                  <h3 className="text-primary text-[22px] font-bold mb-4 uppercase tracking-wider">Capital Stack</h3>
                  <div className="space-y-4 mb-5">
                    {capitalStack.map((c, i) => (
                      <div key={i} className={`${c.bg} border ${c.border} rounded-xl p-5`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`${c.color} text-[26px] font-bold`}>{c.label}</span>
                          <span className={`${c.color} text-[32px] font-bold`}>{c.amount}</span>
                        </div>
                        <p className="text-muted-foreground text-[18px]">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {dealTerms.map((t, i) => (
                      <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                        <div className="text-primary text-[20px] font-bold">{t.value}</div>
                        <div className="text-muted-foreground text-[14px]">{t.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Protections */}
                <div className="w-[520px] shrink-0 flex flex-col gap-5">
                  {protections.map((p, i) => (
                    <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-6 flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[28px]">{p.icon}</span>
                        <h3 className="text-white text-[22px] font-bold">{p.title}</h3>
                      </div>
                      <ul className="space-y-2.5">
                        {p.items.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
                    <p className="text-muted-foreground text-[16px] leading-relaxed">
                      <span className="text-primary font-bold">Founder retains 60%+</span> after partner vesting and option pool. Hard ceiling of 35% investor equity without valuation adjustment.
                    </p>
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
