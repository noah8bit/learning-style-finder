import heroPersonalTraining from "@/assets/pitch/hero-personal-training.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCustomerPersonas({ active }: { active: boolean }) {
  const personas = [
    {
      icon: "🏆",
      name: "The Competitive Athlete",
      age: "16–35",
      desc: "Aspiring or professional athletes training across disciplines — needs world-class coaching, recovery tech, and performance analytics under one roof.",
      needs: ["Multi-sport cross-training", "Injury rehab & prevention", "Performance tracking"],
    },
    {
      icon: "🎬",
      name: "The Film, Stunt & Circus Pro",
      age: "22–45",
      desc: "Actors, stunt performers, circus artists, and coordinators — including potential Cirque du Soleil training residencies when their shows come to Atlanta.",
      needs: ["Stunt training & rigging", "Aerial silks & trapeze", "Cirque du Soleil rehearsal space"],
    },
    {
      icon: "👨‍👩‍👧‍👦",
      name: "The Active Family",
      age: "30–55 (parents)",
      desc: "Parents enrolling kids in youth sports, martial arts, or swim programs — while accessing their own fitness and wellness services at the same facility.",
      needs: ["Youth development programs", "Family memberships", "Convenient scheduling"],
    },
    {
      icon: "🏢",
      name: "The Corporate Client",
      age: "25–55",
      desc: "Atlanta Fortune 500s and mid-market companies investing $600+/employee/year in wellness — proven $3–$6 ROI per dollar spent through reduced absenteeism and healthcare costs.",
      needs: ["Tiered wellness packages ($3K–$10K/mo)", "On-site & facility-based programs", "Health metrics & productivity reporting"],
    },
    {
      icon: "🩺",
      name: "The Recovery Patient",
      age: "18–65",
      desc: "Individuals seeking neuromuscular therapy, peptide wellness, or post-injury rehabilitation — often covered by insurance partnerships.",
      needs: ["Insurance-covered therapy", "Personalized rehab plans", "Ongoing wellness support"],
    },
    {
      icon: "🌱",
      name: "The Community Youth",
      age: "8–18",
      desc: "Talented young athletes from underserved communities — accessed through outreach programs, grants, and scholarships to unlock potential.",
      needs: ["Scholarships & grants", "Mentorship programs", "Pathway to elite training"],
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
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Target Audience</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
                Who We <span className="text-primary">Serve</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-5">
                {personas.map((p, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[28px]">{p.icon}</span>
                      <div>
                        <h3 className="text-foreground text-[16px] font-bold leading-tight">{p.name}</h3>
                        <span className="text-muted-foreground text-[12px]">Age {p.age}</span>
                      </div>
                    </div>
                    <p className="text-secondary-foreground text-[13px] leading-relaxed mb-3">{p.desc}</p>
                    <div className="space-y-1">
                      {p.needs.map((n, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-foreground text-[12px]">{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-4 absolute bottom-6 left-[100px] right-[100px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: IHRSA Consumer Survey; Georgia Film Commission Industry Report; SGMA Youth Sports Participation Study; SHRM Corporate Wellness Trends
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
