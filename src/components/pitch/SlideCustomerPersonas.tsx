import heroPersonalTraining from "@/assets/pitch/hero-personal-training.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCustomerPersonas({ active }: { active: boolean }) {
  const personas = [
    {
      icon: "🏆",
      name: "The Competitive Athlete",
      age: "16–35",
      desc: "Aspiring or professional athletes — needs world-class coaching, recovery tech, and performance analytics.",
      needs: ["Multi-sport cross-training", "Injury rehab & prevention", "Performance tracking"],
    },
    {
      icon: "🎬",
      name: "Film, Stunt & Circus Pro",
      age: "22–45",
      desc: "Stunt performers, circus artists, and actors — including Cirque du Soleil training residencies.",
      needs: ["Stunt training & rigging", "Aerial silks & trapeze", "Cirque rehearsal space"],
    },
    {
      icon: "👨‍👩‍👧‍👦",
      name: "The Active Family",
      age: "30–55",
      desc: "Parents enrolling kids in youth sports while accessing their own fitness and wellness services.",
      needs: ["Youth development", "Family memberships", "Convenient scheduling"],
    },
    {
      icon: "🏢",
      name: "The Corporate Client",
      age: "25–55",
      desc: "Atlanta Fortune 500s investing $600+/employee/year — proven $3–$6 ROI per dollar spent.",
      needs: ["Packages $3K–$10K/mo", "On-site programs", "Productivity reporting"],
    },
    {
      icon: "🩺",
      name: "The Recovery Patient",
      age: "18–65",
      desc: "Individuals seeking neuromuscular therapy, peptide wellness, or post-injury rehab.",
      needs: ["Insurance-covered therapy", "Personalized rehab", "Ongoing wellness"],
    },
    {
      icon: "🌱",
      name: "The Community Youth",
      age: "8–18",
      desc: "Talented young athletes from underserved communities — accessed through outreach and scholarships.",
      needs: ["Scholarships & grants", "Mentorship programs", "Elite training pathway"],
    },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroPersonalTraining} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Target Audience</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-10">
                Who We <span className="text-primary">Serve</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-5">
                {personas.map((p, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[32px]">{p.icon}</span>
                      <div>
                        <h3 className="text-foreground text-[20px] font-bold leading-tight">{p.name}</h3>
                        <span className="text-muted-foreground text-[16px]">Age {p.age}</span>
                      </div>
                    </div>
                    <p className="text-secondary-foreground text-[17px] leading-relaxed mb-3">{p.desc}</p>
                    <div className="space-y-1.5">
                      {p.needs.map((n, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span className="text-foreground text-[16px]">{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
