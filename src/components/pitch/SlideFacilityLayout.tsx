import ScaledSlide from "./ScaledSlide";

export default function SlideFacilityLayout({ active }: { active: boolean }) {
  const zones = [
    { name: "Main Training Floor", size: "12,000 sq ft", desc: "Multi-sport courts, martial arts mats, gymnastics area", icon: "🏋", x: "5%", y: "10%", w: "45%", h: "35%", color: "border-primary bg-primary/10" },
    { name: "Recovery Wing", size: "4,000 sq ft", desc: "Cryo, infrared, sauna, cold plunge, Normatec", icon: "❄️", x: "52%", y: "10%", w: "43%", h: "25%", color: "border-accent bg-accent/10" },
    { name: "Film & Stunt Wing", size: "6,000 sq ft", desc: "High-ceiling rigging, spring floors, green screen", icon: "🎬", x: "5%", y: "48%", w: "35%", h: "30%", color: "border-primary bg-primary/10" },
    { name: "Swimming Center", size: "5,000 sq ft", desc: "Olympic lanes, diving, aquatic therapy", icon: "🏊", x: "42%", y: "38%", w: "28%", h: "25%", color: "border-accent bg-accent/10" },
    { name: "Medical Suite", size: "2,500 sq ft", desc: "Neuromuscular therapy, peptide clinic, assessments", icon: "🏥", x: "52%", y: "66%", w: "43%", h: "20%", color: "border-primary bg-primary/10" },
    { name: "Seminar Hall", size: "2,000 sq ft", desc: "Workshops, camps, athlete seminars, community events", icon: "🎓", x: "5%", y: "82%", w: "30%", h: "14%", color: "border-accent bg-accent/10" },
  ];

  const stats = [
    { label: "Total Facility", value: "35,000+ sq ft" },
    { label: "Training Zones", value: "6 Distinct" },
    { label: "Recovery Stations", value: "8+ Modalities" },
    { label: "Max Capacity", value: "300+ Athletes" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[55%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Facility Design</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-8">
                Facility <span className="text-primary">Zone Map</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-4 mb-8">
                {stats.map((s, i) => (
                  <div key={i} className="bg-secondary border border-border rounded-xl p-4 text-center">
                    <div className="text-primary text-[28px] font-bold">{s.value}</div>
                    <div className="text-muted-foreground text-[13px]">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="animate-fade-up stagger-4 space-y-3">
                {zones.map((z, i) => (
                  <div key={i} className={`${z.color} border rounded-lg p-3 flex items-center gap-4`}>
                    <span className="text-[24px]">{z.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-foreground text-[15px] font-bold">{z.name}</h3>
                        <span className="text-primary text-[13px] font-semibold">{z.size}</span>
                      </div>
                      <p className="text-muted-foreground text-[12px]">{z.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-[45%] h-full flex items-center justify-center px-[40px]">
          {active && (
            <div className="animate-fade-up stagger-4 relative w-full h-[80%] bg-secondary/50 border border-border rounded-2xl overflow-hidden">
              {/* Visual zone map */}
              {zones.map((z, i) => (
                <div
                  key={i}
                  className={`absolute ${z.color} border-2 rounded-lg flex flex-col items-center justify-center text-center p-2`}
                  style={{ left: z.x, top: z.y, width: z.w, height: z.h }}
                >
                  <span className="text-[20px] mb-1">{z.icon}</span>
                  <span className="text-foreground text-[11px] font-bold leading-tight">{z.name}</span>
                  <span className="text-muted-foreground text-[9px]">{z.size}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
