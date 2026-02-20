import ScaledSlide from "./ScaledSlide";

export default function SlideFacilityLayout({ active }: { active: boolean }) {
  const zones = [
    { name: "Main Training Floor", size: "15,000 sq ft", desc: "Martial arts, gymnastics, wrestling, dance, combat sports, multi-court space", icon: "🏋", color: "border-primary bg-primary/10" },
    { name: "Track & Field Complex", size: "8,000 sq ft", desc: "Indoor sprint lanes, long jump pit, throwing cages, hurdle training", icon: "🏃", color: "border-accent bg-accent/10" },
    { name: "Cross-Training Arena", size: "6,000 sq ft", desc: "CrossFit, Hyrox, rowing ergs, climbing wall, conditioning circuits", icon: "⚡", color: "border-primary bg-primary/10" },
    { name: "Indoor Courts", size: "8,000 sq ft", desc: "Basketball, volleyball, indoor soccer, badminton, pickleball", icon: "🏀", color: "border-accent bg-accent/10" },
    { name: "Swimming Center", size: "5,000 sq ft", desc: "Olympic lanes, diving, aquatic therapy, swim coaching", icon: "🏊", color: "border-primary bg-primary/10" },
    { name: "Film & Stunt Wing", size: "6,000 sq ft", desc: "High-ceiling rigging, spring floors, green screen, mo-cap", icon: "🎬", color: "border-accent bg-accent/10" },
    { name: "Recovery Wing", size: "4,000 sq ft", desc: "Cryo, infrared, sauna, cold plunge, Normatec, PEMF", icon: "❄️", color: "border-primary bg-primary/10" },
    { name: "Medical Suite", size: "2,500 sq ft", desc: "Neuromuscular therapy, peptide clinic, sports medicine", icon: "🏥", color: "border-accent bg-accent/10" },
    { name: "Seminar & Events Hall", size: "2,500 sq ft", desc: "Workshops, camps, athlete seminars, community events", icon: "🎓", color: "border-primary bg-primary/10" },
    { name: "Golf & Specialty", size: "3,000 sq ft", desc: "Golf simulators, pilates, yoga studio, cycling lab", icon: "⛳", color: "border-accent bg-accent/10" },
    { name: "Outdoor Fields", size: "Adj. Acreage", desc: "Football, soccer, lacrosse, baseball & softball, outdoor track", icon: "🌳", color: "border-green-500 bg-green-500/10" },
  ];

  const stats = [
    { label: "Total Indoor", value: "60,000+ sq ft" },
    { label: "Campus Acreage", value: "8–12 acres" },
    { label: "Sport Disciplines", value: "30+" },
    { label: "Recovery Modalities", value: "8+" },
  ];

  // Visual zone map positions (right panel)
  const mapZones = [
    { name: "Main Training", icon: "🏋", x: "3%", y: "3%", w: "46%", h: "25%", color: "border-primary bg-primary/10" },
    { name: "Track & Field", icon: "🏃", x: "51%", y: "3%", w: "46%", h: "25%", color: "border-accent bg-accent/10" },
    { name: "Cross-Training", icon: "⚡", x: "3%", y: "30%", w: "30%", h: "20%", color: "border-primary bg-primary/10" },
    { name: "Indoor Courts", icon: "🏀", x: "35%", y: "30%", w: "32%", h: "20%", color: "border-accent bg-accent/10" },
    { name: "Swimming", icon: "🏊", x: "69%", y: "30%", w: "28%", h: "20%", color: "border-primary bg-primary/10" },
    { name: "Film & Stunt", icon: "🎬", x: "3%", y: "52%", w: "35%", h: "18%", color: "border-accent bg-accent/10" },
    { name: "Recovery", icon: "❄️", x: "40%", y: "52%", w: "28%", h: "18%", color: "border-primary bg-primary/10" },
    { name: "Medical", icon: "🏥", x: "70%", y: "52%", w: "27%", h: "18%", color: "border-accent bg-accent/10" },
    { name: "Seminar Hall", icon: "🎓", x: "3%", y: "72%", w: "22%", h: "14%", color: "border-primary bg-primary/10" },
    { name: "Golf & Specialty", icon: "⛳", x: "27%", y: "72%", w: "22%", h: "14%", color: "border-accent bg-accent/10" },
    { name: "Outdoor Fields", icon: "🌳", x: "51%", y: "72%", w: "46%", h: "25%", color: "border-green-500 bg-green-500/10" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[50%] flex flex-col justify-center px-[70px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Facility Design</p>
              <h2 className="animate-fade-up stagger-2 text-[48px] font-bold leading-[1] text-foreground mb-6">
                Facility <span className="text-primary">Zone Map</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-3 mb-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-secondary border border-border rounded-xl p-3 text-center">
                    <div className="text-primary text-[24px] font-bold">{s.value}</div>
                    <div className="text-muted-foreground text-[12px]">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="animate-fade-up stagger-4 space-y-2">
                {zones.map((z, i) => (
                  <div key={i} className={`${z.color} border rounded-lg p-2.5 flex items-center gap-3`}>
                    <span className="text-[20px]">{z.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-foreground text-[14px] font-bold">{z.name}</h3>
                        <span className="text-primary text-[12px] font-semibold shrink-0 ml-2">{z.size}</span>
                      </div>
                      <p className="text-muted-foreground text-[11px] truncate">{z.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-[50%] h-full flex items-center justify-center px-[30px]">
          {active && (
            <div className="animate-fade-up stagger-4 relative w-full h-[85%] bg-secondary/50 border border-border rounded-2xl overflow-hidden">
              {mapZones.map((z, i) => (
                <div
                  key={i}
                  className={`absolute ${z.color} border-2 rounded-lg flex flex-col items-center justify-center text-center p-1`}
                  style={{ left: z.x, top: z.y, width: z.w, height: z.h }}
                >
                  <span className="text-[18px] mb-0.5">{z.icon}</span>
                  <span className="text-foreground text-[10px] font-bold leading-tight">{z.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
