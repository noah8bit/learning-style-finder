import heroExitStrategy from "@/assets/pitch/hero-exit-strategy.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideExitStrategy({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroExitStrategy} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-accent font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investor Returns</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                How You Get <span className="text-accent">Paid Back</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-7 max-w-[900px] leading-relaxed">
                8% accrued preferred return plus three clear paths to upside — you don't have to wait for an exit.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-6 mb-6">
                {/* LEFT: Preferred Return + Cash Flow */}
                <div className="w-[500px] shrink-0 bg-accent/10 border-2 border-accent/50 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-accent text-black text-[13px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">Preferred Return</div>
                  <span className="text-[40px] block mb-3">💸</span>
                  <h3 className="text-white text-[26px] font-bold mb-3">8% Accrued Preferred Return</h3>
                  <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
                    Non-compounding, accrued — not mandatory annual cash payout. Paid at distributions, refinance, or exit. Protects downside without choking early cash flow.
                  </p>

                  <div className="bg-black/50 border border-accent/30 rounded-xl p-5">
                    <p className="text-accent text-[15px] font-bold uppercase tracking-wider mb-3">$1M Equity Scenario</p>
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[16px]">Your equity stake</span>
                        <span className="text-white text-[18px] font-bold">~3.5% of company</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[16px]">Accrued preferred (Year 3)</span>
                        <span className="text-white text-[18px] font-bold">$240K owed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[16px]">Year 3 distributions begin</span>
                        <span className="text-accent text-[18px] font-bold">~$575K net cash</span>
                      </div>
                      <div className="border-t border-accent/20 pt-2.5 mt-1">
                        <p className="text-foreground text-[15px] leading-relaxed">
                          <span className="text-accent font-bold">Preferred paid first</span> before pro-rata profit distributions to all equity holders
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Exit paths */}
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-muted-foreground text-[14px] uppercase tracking-[0.2em] font-medium">Long-Term Exit Paths</p>

                  <div className="bg-black/60 border border-white/15 rounded-xl p-5 flex gap-4 items-start flex-1">
                    <span className="text-[32px] shrink-0">🔁</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-white text-[20px] font-bold">Franchise Model</h3>
                        <span className="text-accent text-[18px] font-bold bg-accent/10 border border-accent/30 rounded-full px-4 py-0.5">8–12x valuation</span>
                      </div>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">
                        Replicate across metros. Valuation could reach $80M–$300M at 5–15 locations. Triggered when EBITDA &gt; $1.5M sustained.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 border border-white/15 rounded-xl p-5 flex gap-4 items-start flex-1">
                    <span className="text-[32px] shrink-0">🏦</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-white text-[20px] font-bold">Strategic Acquisition</h3>
                        <span className="text-accent text-[18px] font-bold bg-accent/10 border border-accent/30 rounded-full px-4 py-0.5">6–10x EBITDA</span>
                      </div>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">
                        Target for Life Time, Equinox, or PE firms. Multi-sport facilities command premium multiples.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 border border-white/15 rounded-xl p-5 flex gap-4 items-start flex-1">
                    <span className="text-[32px] shrink-0">💰</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-white text-[20px] font-bold">Cash-Flow Hold</h3>
                        <span className="text-accent text-[18px] font-bold bg-accent/10 border border-accent/30 rounded-full px-4 py-0.5">Recurring Income</span>
                      </div>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">
                        No exit needed. Year 3+ distributions grow as EBITDA scales. Asset-backed real estate appreciates independently.
                      </p>
                    </div>
                  </div>

                  {/* Phase 2 triggers */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-primary text-[22px] font-bold mb-0.5">30–35%</div>
                      <div className="text-foreground text-[13px] font-semibold">Equity Offered</div>
                    </div>
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-primary text-[22px] font-bold mb-0.5">8% Pref</div>
                      <div className="text-foreground text-[13px] font-semibold">Accrued Return</div>
                    </div>
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-primary text-[22px] font-bold mb-0.5">Year 3+</div>
                      <div className="text-foreground text-[13px] font-semibold">Distributions Start</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: F45 Training 2024 Press Release; Life Time Group Holdings SEC Filing (Feb 2025); IHRSA Industry Benchmark Reports; Iron Form internal financial models
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
