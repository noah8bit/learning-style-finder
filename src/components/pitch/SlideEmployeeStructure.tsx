import heroStaff from "@/assets/pitch/hero-staff.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideEmployeeStructure({ active }: { active: boolean }) {
  const coreStaff = [
    { role: "General Manager", pay: "$90K–$120K", type: "Salary", icon: "👔" },
    { role: "Operations Manager", pay: "$75K–$90K", type: "Salary", icon: "📋" },
    { role: "Admin / Front Desk", pay: "$50K", type: "Salary", icon: "🖥️" },
    { role: "Rick Villanueva, LMT", pay: "Base draw + 60% splits", type: "Partner (4% vesting)", icon: "🧠" },
    { role: "Josh Garret", pay: "Base draw + splits", type: "Partner (4% vesting)", icon: "💉" },
  ];

  const strategies = [
    { icon: "💵", title: "Revenue-Share Model", desc: "Instructors and trainers are mostly revenue-share — no fixed payroll burden until revenue supports it." },
    { icon: "📊", title: "Under 50% of Revenue", desc: "Target total payroll (salaries + splits) at ≤50% of revenue. Year 1: ~$420K salaries + $280K COGS on $1.14M rev." },
    { icon: "🤝", title: "Partner Alignment", desc: "Rick & Josh: 4% equity each, 4-year vest with 1-year cliff. Reduces key-person risk and aligns with investor interests." },
    { icon: "📅", title: "Lean Year 1", desc: "Founder pay stays lean through Year 1–2. No bloated org chart — scale staffing with revenue, not ahead of it." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroStaff} alt="Training staff team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[16px] mb-3">Staffing Plan</p>
            <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-6">
              Phase 1 <span className="text-primary">Team Structure</span>
            </h2>

            <div className="animate-fade-up stagger-3 flex gap-8">
              {/* Core staff */}
              <div className="w-[520px] shrink-0">
                <h3 className="text-primary text-[20px] font-bold mb-4 uppercase tracking-wider">Core Salaries</h3>
                <div className="space-y-3">
                  {coreStaff.map((s, i) => (
                    <div key={i} className="bg-secondary border border-border rounded-xl p-5 flex items-center gap-4">
                      <span className="text-[28px]">{s.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="text-foreground text-[20px] font-bold">{s.role}</h3>
                          <span className="text-primary text-[18px] font-bold">{s.pay}</span>
                        </div>
                        <p className="text-muted-foreground text-[14px]">{s.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 bg-primary/10 border border-primary/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-[18px] font-bold">Year 1 Core Payroll</span>
                    <span className="text-primary text-[22px] font-bold">~$420K</span>
                  </div>
                </div>
              </div>

              {/* Strategies */}
              <div className="flex-1">
                <h3 className="text-accent text-[20px] font-bold mb-4 uppercase tracking-wider">Staffing Strategy</h3>
                <div className="space-y-3">
                  {strategies.map((s, i) => (
                    <div key={i} className="bg-secondary border border-border rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[24px]">{s.icon}</span>
                        <h3 className="text-foreground text-[18px] font-bold">{s.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-up stagger-4 mt-4 bg-accent/10 border border-accent/20 rounded-xl p-4">
              <p className="text-foreground text-[15px]">
                <span className="font-bold text-accent">Option Pool:</span> 5% reserved for future key hires (GM/COO) — protects founder from dilution. Instructors across 20+ disciplines recruited on revenue-share, not fixed salary.
              </p>
            </div>
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}
