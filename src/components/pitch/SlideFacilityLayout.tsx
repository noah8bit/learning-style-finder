import ScaledSlide from "./ScaledSlide";

export default function SlideFacilityLayout({ active }: { active: boolean }) {
  const zones = [
    { name: "Main Training", size: "15,000 sq ft", icon: "🏋", color: "border-primary/30 bg-primary/10" },
    { name: "Track & Field", size: "8,000 sq ft", icon: "🏃", color: "border-accent/30 bg-accent/10" },
    { name: "Cross-Training", size: "6,000 sq ft", icon: "⚡", color: "border-primary/30 bg-primary/10" },
    { name: "Indoor Courts", size: "8,000 sq ft", icon: "🏀", color: "border-accent/30 bg-accent/10" },
    { name: "Swimming", size: "5,000 sq ft", icon: "🏊", color: "border-primary/30 bg-primary/10" },
    { name: "Film & Stunt", size: "6,000 sq ft", icon: "🎬", color: "border-accent/30 bg-accent/10" },
    { name: "Recovery Wing", size: "4,000 sq ft", icon: "❄️", color: "border-primary/30 bg-primary/10" },
    { name: "Medical Suite", size: "2,500 sq ft", icon: "🏥", color: "border-accent/30 bg-accent/10" },
    { name: "Seminar & Events", size: "2,500 sq ft", icon: "🎓", color: "border-primary/30 bg-primary/10" },
    { name: "Golf & Specialty", size: "3,000 sq ft", icon: "⛳", color: "border-accent/30 bg-accent/10" },
    { name: "Outdoor Fields", size: "Adj. Acreage", icon: "🌳", color: "border-green-500/30 bg-green-500/10" },
  ];

  const stats = [
    { label: "Total Indoor", value: "60,000+ sq ft" },
    { label: "Campus", value: "8–12 acres" },
    { label: "Disciplines", value: "30+" },
    { label: "Recovery", value: "8+ modalities" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Facility Design</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-6">
              Facility <span className="text-primary">Zone Map</span>
            </h2>
            <div className="animate-fade-up stagger-3 grid grid-cols-4 gap-4 mb-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-4 text-center">
                  <div className="text-primary text-[32px] font-bold leading-tight">{s.value}</div>
                  <div className="text-muted-foreground text-[18px]">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-3">
              {zones.map((z, i) => (
                <div key={i} className={`${z.color} border rounded-xl p-4 flex items-center gap-4`}>
                  <span className="text-[28px]">{z.icon}</span>
                  <div className="flex-1 flex justify-between items-baseline">
                    <h3 className="text-foreground text-[22px] font-bold">{z.name}</h3>
                    <span className="text-primary text-[20px] font-semibold shrink-0 ml-3">{z.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}