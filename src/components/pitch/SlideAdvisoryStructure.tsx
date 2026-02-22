import ScaledSlide from "./ScaledSlide";

export default function SlideAdvisoryStructure({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Advisory Board</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-6">
              Strategic Advisory <span className="text-primary">Allocation</span>
            </h2>

            <div className="animate-fade-up stagger-3 flex gap-8">
              <div className="flex-1 flex flex-col gap-5">
                <div className="bg-secondary border-2 border-primary/30 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[40px]">🧠</span>
                    <h3 className="text-primary text-[28px] font-bold">Advisory Equity Pool</h3>
                  </div>
                  <p className="text-primary text-[48px] font-bold mb-2">Up to 2%</p>
                  <p className="text-muted-foreground text-[20px] leading-relaxed">
                    Total advisory equity pool reserved. Separate from SAFE investment and partner vesting.
                  </p>
                </div>

                <div className="bg-secondary border border-border rounded-xl p-7">
                  <h3 className="text-foreground text-[24px] font-bold mb-4">Per-Advisor Terms</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-black/40 border border-white/15 rounded-lg p-4 text-center">
                      <div className="text-primary text-[24px] font-bold">0.25%–0.75%</div>
                      <div className="text-muted-foreground text-[14px]">Equity per Advisor</div>
                    </div>
                    <div className="bg-black/40 border border-white/15 rounded-lg p-4 text-center">
                      <div className="text-primary text-[24px] font-bold">4-Year</div>
                      <div className="text-muted-foreground text-[14px]">Vesting Schedule</div>
                    </div>
                    <div className="bg-black/40 border border-white/15 rounded-lg p-4 text-center">
                      <div className="text-primary text-[24px] font-bold">Quarterly</div>
                      <div className="text-muted-foreground text-[14px]">Deliverable Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[480px] shrink-0 flex flex-col gap-5">
                <div className="bg-secondary border border-border rounded-xl p-7">
                  <h3 className="text-accent text-[22px] font-bold mb-4">Why This Matters</h3>
                  <ul className="space-y-3">
                    {[
                      "Prevents operational angels from demanding 3–5% advisory stakes",
                      "Structured deliverables ensure advisors earn their equity",
                      "Quarterly reviews allow removal of non-performing advisors",
                      "Advisory equity is separate from SAFE — no dilution confusion",
                    ].map((item, i) => (
                      <li key={i} className="text-muted-foreground text-[18px] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary border border-primary/30 rounded-xl p-6">
                  <h3 className="text-foreground text-[20px] font-bold mb-3">Ownership Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-muted-foreground text-[18px]">Founder</span><span className="text-primary text-[18px] font-bold">74.96%</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground text-[18px]">SAFE Pool</span><span className="text-accent text-[18px] font-bold">13.04%</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground text-[18px]">Partner Vesting (Josh + Rick)</span><span className="text-foreground text-[18px] font-bold">8.00%</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground text-[18px]">Option Pool</span><span className="text-foreground text-[18px] font-bold">4.00%</span></div>
                    <div className="flex justify-between border-t border-border pt-2 mt-1"><span className="text-muted-foreground text-[18px]">Advisory Pool (separate)</span><span className="text-primary text-[18px] font-bold">Up to 2%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
