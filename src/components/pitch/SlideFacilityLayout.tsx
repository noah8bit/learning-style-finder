import ScaledSlide from "./ScaledSlide";

export default function SlideFacilityLayout({ active }: { active: boolean }) {
  const indoorZones = [
    { name: "Performance Floor", size: "14,000 sq ft", icon: "🏋", color: "border-primary/30 bg-primary/10" },
    { name: "Sprint Lab", size: "4,000 sq ft", icon: "🏃", color: "border-accent/30 bg-accent/10" },
    { name: "Combat / Studio", size: "3,500 sq ft", icon: "🥋", color: "border-primary/30 bg-primary/10" },
    { name: "Film & Stunt Wing", size: "5,000 sq ft", icon: "🎬", color: "border-accent/30 bg-accent/10" },
    { name: "Medical & Recovery", size: "3,000 sq ft", icon: "🏥", color: "border-primary/30 bg-primary/10" },
    { name: "Seminar / Flex", size: "2,500 sq ft", icon: "🎓", color: "border-accent/30 bg-accent/10" },
  ];

  const outdoorZones = [
    { name: "100×50 Turf Field", icon: "⚽" },
    { name: "120m Sprint Lane", icon: "🏃" },
    { name: "Long Jump Pit", icon: "📏" },
    { name: "Sled Lane", icon: "🛷" },
  ];

  const stats = [
    { label: "Indoor (Phase 1)", value: "32,000 sq ft" },
    { label: "Campus", value: "8 acres" },
    { label: "Indoor Zones", value: "6" },
    { label: "Outdoor Areas", value: "4" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Phase 1 Facility</p>
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

            {/* Indoor zones */}
            <div className="animate-fade-up stagger-4">
              <h3 className="text-primary text-[20px] font-bold mb-3 uppercase tracking-wider">Indoor Zones — 32,000 sq ft</h3>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {indoorZones.map((z, i) => (
                  <div key={i} className={`bg-secondary border ${z.color.split(' ')[0]} rounded-xl p-5 flex items-center gap-4`}>
                    <span className="text-[28px]">{z.icon}</span>
                    <div className="flex-1 flex justify-between items-baseline">
                      <h3 className="text-foreground text-[22px] font-bold">{z.name}</h3>
                      <span className="text-primary text-[20px] font-semibold shrink-0 ml-3">{z.size}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outdoor zones */}
            <div className="animate-fade-up stagger-5">
              <h3 className="text-accent text-[20px] font-bold mb-3 uppercase tracking-wider">Outdoor Training Areas</h3>
              <div className="grid grid-cols-4 gap-3">
                {outdoorZones.map((z, i) => (
                  <div key={i} className="bg-secondary border border-accent/30 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-[24px]">{z.icon}</span>
                    <span className="text-foreground text-[18px] font-semibold">{z.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up stagger-5 mt-4 bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-foreground text-[16px]">
                <span className="text-primary font-bold">Capacity Check:</span> 600 members at 32,000 sq ft = ~53 sq ft/member — safe capacity for a performance-based facility. Class scheduling required to prevent congestion.
              </p>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
