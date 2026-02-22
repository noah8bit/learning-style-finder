import heroExitStrategy from "@/assets/pitch/hero-exit-strategy.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideExitStrategy({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroExitStrategy} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-accent font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Investor Returns</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-3">
                5–7 Year <span className="text-accent">Exit Outlook</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-7 max-w-[900px] leading-relaxed">
                Numbers. Not adjectives. Clear valuation targets based on stabilized EBITDA and industry multiples.
              </p>

              <div className="animate-fade-up stagger-4 flex gap-6 mb-6">
                {/* LEFT: Core valuation */}
                <div className="w-[500px] shrink-0 flex flex-col gap-4">
                  <div className="bg-black/80 backdrop-blur-xl border-2 border-accent/50 rounded-2xl p-7">
                    <span className="text-[40px] block mb-3">📈</span>
                    <h3 className="text-white text-[24px] font-bold mb-4">Stabilized EBITDA Target</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-black/50 border border-white/15 rounded-lg px-5 py-3">
                        <span className="text-muted-foreground text-[18px]">Year 3 EBITDA</span>
                        <span className="text-accent text-[24px] font-bold">$1,200,000</span>
                      </div>
                      <div className="flex justify-between items-center bg-black/50 border border-white/15 rounded-lg px-5 py-3">
                        <span className="text-muted-foreground text-[18px]">Conservative Multiple (5×)</span>
                        <span className="text-accent text-[24px] font-bold">$6,000,000</span>
                      </div>
                      <div className="flex justify-between items-center bg-black/50 border border-accent/40 rounded-lg px-5 py-3">
                        <span className="text-muted-foreground text-[18px]">Aggressive Multiple (7×)</span>
                        <span className="text-accent text-[28px] font-bold">$8,400,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-primary/40 rounded-xl p-6">
                    <h3 className="text-primary text-[22px] font-bold mb-3">Tech Entity Upside</h3>
                    <p className="text-muted-foreground text-[18px] leading-relaxed mb-3">
                      If Iron Form Digital, LLC scales separately:
                    </p>
                    <div className="bg-black/50 border border-primary/30 rounded-lg px-5 py-4 text-center">
                      <span className="text-primary text-[32px] font-bold">$12M–$18M</span>
                      <p className="text-muted-foreground text-[16px] mt-1">Combined enterprise valuation potential</p>
                    </div>
                    <p className="text-muted-foreground text-[15px] mt-3">
                      SAFE investors receive pro-rata participation rights in tech entity.
                    </p>
                  </div>
                </div>

                {/* RIGHT: Exit paths */}
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-muted-foreground text-[14px] uppercase tracking-[0.2em] font-medium">Exit Paths</p>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-5 flex gap-4 items-start flex-1">
                    <span className="text-[32px] shrink-0">🔁</span>
                    <div className="flex-1">
                     <h3 className="text-white text-[20px] font-bold mb-1.5">Multi-Location Potential</h3>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">
                        Long-term multi-location potential across key metros. Proven model replicates with pre-engineered build strategy.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-5 flex gap-4 items-start flex-1">
                    <span className="text-[32px] shrink-0">🏦</span>
                    <div className="flex-1">
                      <h3 className="text-white text-[20px] font-bold mb-1.5">Strategic Acquisition</h3>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">
                        Target for Life Time, Equinox, or PE firms. Multi-sport facilities command premium multiples.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-5 flex gap-4 items-start flex-1">
                    <span className="text-[32px] shrink-0">💰</span>
                    <div className="flex-1">
                      <h3 className="text-white text-[20px] font-bold mb-1.5">Cash-Flow Hold</h3>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">
                        No exit needed. Distributions grow as EBITDA scales. Asset-backed real estate appreciates independently.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-primary text-[22px] font-bold mb-0.5">13.04%</div>
                      <div className="text-foreground text-[13px] font-semibold">SAFE Ownership</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-primary text-[22px] font-bold mb-0.5">$5M Cap</div>
                      <div className="text-foreground text-[13px] font-semibold">Valuation Cap</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-primary text-[22px] font-bold mb-0.5">Year 3+</div>
                      <div className="text-foreground text-[13px] font-semibold">Exit Window</div>
                    </div>
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
