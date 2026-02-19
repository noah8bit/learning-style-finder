import heroConstruction from "@/assets/pitch/hero-construction.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideFinancialProjections({ active }: { active: boolean }) {
  const startupCosts = [
    { label: "Land Acquisition", range: "$500K – $2M" },
    { label: "Construction & Infrastructure", range: "$3M – $5M" },
    { label: "Equipment (All Training Areas)", range: "$500K – $1.5M" },
    { label: "Marketing & Branding", range: "$100K" },
    { label: "Legal & Permitting", range: "$50K – $100K" },
    { label: "Miscellaneous (Furniture, Tech)", range: "$200K" },
  ];

  const opCosts = [
    { label: "Staff Salaries", range: "$300K – $600K/yr" },
    { label: "Maintenance & Utilities", range: "$100K – $200K/yr" },
    { label: "Marketing", range: "$50K/yr" },
    { label: "Insurance", range: "$20K – $50K/yr" },
    { label: "Supplies & Misc", range: "$30K/yr" },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroConstruction} alt="Facility under construction" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Financial Projections</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-12">
              Start-Up & Operational <span className="text-primary">Costs</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-12">
              {/* Startup */}
              <div className="flex-1">
                <h3 className="text-primary text-[22px] font-bold mb-6 uppercase tracking-wider">Initial Start-Up</h3>
                <div className="space-y-4">
                  {startupCosts.map((c, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-border pb-3">
                      <span className="text-foreground text-[16px]">{c.label}</span>
                      <span className="text-primary font-semibold text-[16px]">{c.range}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-primary/10 border border-primary/30 rounded-xl p-5">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-[18px] font-bold">Total Start-Up</span>
                    <span className="text-primary text-[22px] font-bold">$4.45M – $9M</span>
                  </div>
                </div>
              </div>
              {/* Operational */}
              <div className="flex-1">
                <h3 className="text-accent text-[22px] font-bold mb-6 uppercase tracking-wider">Annual Operations</h3>
                <div className="space-y-4">
                  {opCosts.map((c, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-border pb-3">
                      <span className="text-foreground text-[16px]">{c.label}</span>
                      <span className="text-accent font-semibold text-[16px]">{c.range}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-accent/10 border border-accent/30 rounded-xl p-5">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-[18px] font-bold">Total Annual Ops</span>
                    <span className="text-accent text-[22px] font-bold">$600K – $1M</span>
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
