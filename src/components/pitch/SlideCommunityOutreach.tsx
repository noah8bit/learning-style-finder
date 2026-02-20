import heroYouthSports from "@/assets/pitch/hero-youth-sports.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCommunityOutreach({ active }: { active: boolean }) {
  const strategies = [
    { icon: "🔍", title: "Talent Scouting", desc: "Scouts attend local tournaments and school events to identify exceptional young athletes." },
    { icon: "🏫", title: "School Partnerships", desc: "After-school programs and discounted memberships for student-athletes." },
    { icon: "🤝", title: "Non-Profit Collabs", desc: "Work with Boys & Girls Clubs, YMCA, and local sports foundations." },
    { icon: "🏆", title: "Fitness Competitions", desc: "Host Hyrox, CrossFit, strongman, and multi-sport challenge events." },
    { icon: "🎓", title: "Scholarship Fund", desc: "Grant-funded training, equipment, and competition fees for low-income athletes." },
    { icon: "📢", title: "Community Events", desc: "Open-house days, family sports festivals, youth clinics, and fitness expos." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroYouthSports} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Community Impact</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-4">
              Every Athlete <span className="text-primary">Deserves a Chance</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[24px] max-w-[1000px] mb-10 leading-relaxed">
              Iron Form scouts talent, hosts competitive events, and mentors athletes in underserved communities.
            </p>
            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-6">
              {strategies.map((s, i) => (
                <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-8">
                  <span className="text-[44px] mb-4 block">{s.icon}</span>
                  <h3 className="text-foreground text-[26px] font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-[22px] leading-relaxed">{s.desc}</p>
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