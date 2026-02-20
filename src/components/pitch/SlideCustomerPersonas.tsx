import heroPersonalTraining from "@/assets/pitch/hero-personal-training.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCustomerPersonas({ active }: { active: boolean }) {
  const personas = [
    { icon: "🏆", name: "Competitive Athlete", age: "16–35", desc: "Elite coaching, recovery tech & performance analytics", needs: ["Multi-sport cross-training", "Injury rehab & prevention"] },
    { icon: "🎬", name: "Film, Stunt & Circus", age: "22–45", desc: "Stunt training, aerial arts, Cirque du Soleil residencies", needs: ["Stunt rigging & choreography", "Aerial silks & trapeze"] },
    { icon: "👨‍👩‍👧‍👦", name: "Active Family", age: "30–55", desc: "Youth sports + parent fitness & wellness", needs: ["Youth development", "Family memberships"] },
    { icon: "🏢", name: "Corporate Client", age: "25–55", desc: "$600+/employee/yr spend — $3–$6 ROI per dollar", needs: ["Packages $3K–$10K/mo", "Productivity reporting"] },
    { icon: "🩺", name: "Recovery Patient", age: "18–65", desc: "Neuromuscular therapy, peptide wellness, post-injury rehab", needs: ["Insurance-covered therapy", "Personalized rehab"] },
    { icon: "🌱", name: "Community Youth", age: "8–18", desc: "Talented athletes from underserved communities", needs: ["Scholarships & grants", "Elite training pathway"] },
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
                  <div key={i} className="bg-white/8 backdrop-blur-md border border-white/15 rounded-xl p-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[40px]">{p.icon}</span>
                      <div>
                        <h3 className="text-foreground text-[24px] font-bold leading-tight">{p.name}</h3>
                        <span className="text-muted-foreground text-[20px]">Age {p.age}</span>
                      </div>
                    </div>
                    <p className="text-secondary-foreground text-[20px] leading-relaxed mb-4">{p.desc}</p>
                    <div className="space-y-2">
                      {p.needs.map((n, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                          <span className="text-foreground text-[20px]">{n}</span>
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