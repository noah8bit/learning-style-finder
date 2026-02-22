import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideInvestmentAsk({ active }: { active: boolean }) {
  const safeTerms = [
    { label: "Raise Amount", value: "$750,000", color: "text-primary" },
    { label: "Instrument", value: "SAFE", color: "text-primary" },
    { label: "Valuation Cap", value: "$5,000,000", color: "text-primary" },
    { label: "Discount", value: "10%", color: "text-accent" },
    { label: "Min Investment", value: "$25,000", color: "text-accent" },
    { label: "Board Seats", value: "None", color: "text-accent" },
  ];

  const conversionMath = [
    { label: "SAFE Amount", value: "$750,000" },
    { label: "Valuation Cap", value: "$5,000,000" },
    { label: "Post-Money Valuation", value: "$5,750,000" },
    { label: "Ownership at Conversion", value: "13.04%" },
  ];

  const protections = [
    { icon: "🛡️", title: "Investor Rights", items: ["Pro-rata participation rights in future rounds", "Standard information rights", "10% discount to next priced round", "No board seats — clean and simple"] },
    { icon: "⚡", title: "Founder Protections", items: ["Founder retains majority voting control", "No operational control granted to angels", "Future tech IP housed in separate entity", "Hard cap on SAFE pool — no creep"] },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investment Opportunity</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                Raising <span className="text-primary">$750,000</span> via SAFE
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-3 max-w-[900px] leading-relaxed">
                Post-money SAFE (YC standard). $5M valuation cap. 10% discount. No board seats. SAFE pool hard-capped at $750K — no rolling extensions without repricing. Founder retains majority voting control.
              </p>
              <p className="animate-fade-up stagger-3 text-accent text-[18px] mb-6 max-w-[900px] font-medium italic">
                $750K SAFE serves as foundational equity within the full $9–10M equity raise. Anchors early capital commitment and rewards conviction with priority conversion terms.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-8">
                {/* Left: SAFE Terms + Conversion Math */}
                <div className="flex-1">
                  <h3 className="text-primary text-[22px] font-bold mb-4 uppercase tracking-wider">SAFE Terms</h3>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {safeTerms.map((t, i) => (
                      <div key={i} className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg p-4 text-center">
                        <div className={`${t.color} text-[22px] font-bold`}>{t.value}</div>
                        <div className="text-muted-foreground text-[14px]">{t.label}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-accent text-[20px] font-bold mb-3 uppercase tracking-wider">Conversion Math</h3>
                  <div className="space-y-2.5">
                    {conversionMath.map((c, i) => (
                      <div key={i} className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg px-5 py-3 flex justify-between items-center">
                        <span className="text-muted-foreground text-[18px]">{c.label}</span>
                        <span className="text-primary text-[20px] font-bold">{c.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">
                    $750,000 ÷ $5,750,000 post-money = <span className="text-primary font-bold">13.04%</span> ownership at conversion
                  </p>
                </div>

                {/* Right: Protections */}
                <div className="w-[520px] shrink-0 flex flex-col gap-5">
                  {protections.map((p, i) => (
                    <div key={i} className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-6 flex-1">
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

                  <div className="bg-black/80 backdrop-blur-xl border border-accent/30 rounded-xl p-5">
                    <h3 className="text-accent text-[18px] font-bold mb-3 uppercase tracking-wider">Pre-Construction Milestones</h3>
                    <ul className="space-y-2">
                      {[
                        "Full equity commitments secured",
                        "Bank term sheet in hand",
                        "Land closed & architecture finalized",
                        "150+ pre-sale memberships committed",
                        "Corporate wellness contracts signed",
                      ].map((m, i) => (
                        <li key={i} className="text-muted-foreground text-[16px] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
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
