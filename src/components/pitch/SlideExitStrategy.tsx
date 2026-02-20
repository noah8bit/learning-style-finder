import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideExitStrategy({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-accent font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investor Returns</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                How You Get <span className="text-accent">Paid Back</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-8 max-w-[900px] leading-relaxed">
                You don't have to wait for an exit — cash-flow distributions start Year 3, and your note converts at a guaranteed discount.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-6 mb-7">
                {/* LEFT: Primary path — Cash-Flow Distributions */}
                <div className="w-[480px] shrink-0 bg-accent/10 border-2 border-accent/50 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-accent text-black text-[13px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">Near-Term Returns</div>
                  <span className="text-[44px] block mb-3">💸</span>
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-white text-[28px] font-bold">Cash-Flow Distributions</h3>
                    <span className="text-accent text-[18px] font-bold bg-accent/15 border border-accent/40 rounded-full px-5 py-0.5">Recurring Income</span>
                  </div>
                  <p className="text-muted-foreground text-[18px] leading-relaxed mb-6">
                    Year 3+ net margins of 25–35% enable quarterly profit distributions. No exit required — your money works from day one.
                  </p>

                  {/* Scenario math */}
                  <div className="bg-black/50 border border-accent/30 rounded-xl p-5">
                    <p className="text-accent text-[15px] font-bold uppercase tracking-wider mb-4">Your $1M Note Converts & Earns</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[17px]">Note converts at 20% discount</span>
                        <span className="text-white text-[20px] font-bold">$1.25M value</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[17px]">Year 3 distributions</span>
                        <span className="text-white text-[20px] font-bold">~$90K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[17px]">Year 5 cumulative</span>
                        <span className="text-white text-[20px] font-bold">~$400K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-[17px]">Year 7 cumulative</span>
                        <span className="text-accent text-[22px] font-bold">~$800K–$1.2M</span>
                      </div>
                      <div className="border-t border-accent/20 pt-3 mt-1">
                        <p className="text-foreground text-[16px] leading-relaxed">
                          <span className="text-accent font-bold">+ you still own converted equity</span> — distributions don't dilute your stake
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Long-term exit paths */}
                <div className="flex-1 flex flex-col gap-5">
                  <p className="text-muted-foreground text-[14px] uppercase tracking-[0.2em] font-medium">Long-Term Upside (Post-Conversion)</p>

                  <div className="bg-black/60 border border-white/15 rounded-xl p-6 flex gap-5 items-start flex-1">
                    <span className="text-[36px] shrink-0">🔁</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white text-[22px] font-bold">Franchise Model</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-[16px]">Year 5–7</span>
                          <span className="text-accent text-[20px] font-bold bg-accent/10 border border-accent/30 rounded-full px-4 py-0.5">8–12x valuation</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-[17px] leading-relaxed">
                        Replicate across 10+ metros. F45 scaled from 1 to 1,500+ locations in under a decade. Company valuation could reach $80M–$300M, growing your equity value proportionally.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 border border-white/15 rounded-xl p-6 flex gap-5 items-start flex-1">
                    <span className="text-[36px] shrink-0">🏦</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white text-[22px] font-bold">Strategic Acquisition</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-[16px]">Year 5–8</span>
                          <span className="text-accent text-[20px] font-bold bg-accent/10 border border-accent/30 rounded-full px-4 py-0.5">6–10x valuation</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-[17px] leading-relaxed">
                        Acquisition target for Life Time, Equinox, or PE firms. Multi-sport facilities command 6–10x EBITDA multiples, translating to significant equity appreciation.
                      </p>
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                      <div className="text-primary text-[26px] font-bold mb-0.5">$35M</div>
                      <div className="text-foreground text-[14px] font-semibold">Valuation Cap</div>
                      <div className="text-muted-foreground text-[12px]">Conversion ceiling</div>
                    </div>
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                      <div className="text-primary text-[26px] font-bold mb-0.5">5–6 yrs</div>
                      <div className="text-foreground text-[14px] font-semibold">Projected Payback</div>
                      <div className="text-muted-foreground text-[12px]">Via distributions</div>
                    </div>
                    <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                      <div className="text-primary text-[26px] font-bold mb-0.5">25–35%</div>
                      <div className="text-foreground text-[14px] font-semibold">Year 3 Margin</div>
                      <div className="text-muted-foreground text-[12px]">Increasing annually</div>
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
