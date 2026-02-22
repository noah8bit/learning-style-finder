import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideGovernance({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Corporate Governance</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-white mb-6">
                Governance <span className="text-primary">Structure</span>
              </h2>

              <div className="animate-fade-up stagger-3 flex gap-8">
                {/* Left: Founder control */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="bg-black/80 backdrop-blur-xl border-2 border-primary/40 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[40px]">👑</span>
                      <h3 className="text-primary text-[28px] font-bold">Founder Voting Control</h3>
                    </div>
                    <p className="text-white text-[24px] font-bold mb-2">&gt;50% at all times pre-Series A</p>
                    <p className="text-muted-foreground text-[18px] leading-relaxed">
                      All major decisions require founder majority approval. No investor veto on daily operations.
                    </p>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[36px]">🔒</span>
                      <h3 className="text-white text-[24px] font-bold">Major Decisions Require</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Founder majority approval on all operational decisions",
                        "No investor can unilaterally block company direction",
                        "Future fundraising controlled by founder",
                        "Tech entity decisions remain with founder",
                      ].map((item, i) => (
                        <li key={i} className="text-muted-foreground text-[20px] flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Angel investors */}
                <div className="w-[520px] shrink-0 flex flex-col gap-5">
                  <div className="bg-black/80 backdrop-blur-xl border border-accent/30 rounded-xl p-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[36px]">👤</span>
                      <h3 className="text-accent text-[24px] font-bold">Angel Investors Receive</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "No board seats",
                        "Standard pro-rata rights only",
                        "No operational control rights",
                        "Standard information rights",
                      ].map((item, i) => (
                        <li key={i} className="text-muted-foreground text-[20px] flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[36px]">🛡️</span>
                      <h3 className="text-white text-[24px] font-bold">Why This Structure</h3>
                    </div>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">
                      This prevents operational angels from trying to steer direction. Clean governance attracts sophisticated investors who trust the operator.
                    </p>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-primary/30 rounded-xl p-5">
                    <p className="text-muted-foreground text-[18px] leading-relaxed">
                      <span className="text-primary font-bold">Tech Protection:</span> Future software/analytics housed in separate entity (Iron Form Digital, LLC). Current SAFE investors receive pro-rata participation rights but no automatic equity.
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
