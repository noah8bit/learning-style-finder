import heroYouthSports from "@/assets/pitch/hero-youth-sports.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCommunityOutreach({ active }: { active: boolean }) {
  const strategies = [
    { icon: "🔍", title: "Talent Scouting", desc: "Dedicated scouts attend local tournaments, school events, and community leagues to identify exceptional young athletes for mentorship." },
    { icon: "🏫", title: "School Partnerships", desc: "After-school training programs, discounted memberships, and facility access for student-athletes across Atlanta public schools." },
    { icon: "🤝", title: "Non-Profit Collaborations", desc: "Work with Boys & Girls Clubs, YMCA, and local sports foundations to support talented youth who lack resources." },
    { icon: "💊", title: "Free Health Screenings", desc: "Quarterly community health days offering free sports physicals, injury assessments, and wellness consultations." },
    { icon: "🎓", title: "Scholarship Fund", desc: "Grant-funded program covering training, equipment, and competition fees for qualifying athletes from low-income families." },
    { icon: "📢", title: "Community Events", desc: "Free open-house days, fitness challenges, and family sports festivals to build brand awareness and deepen community ties." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroYouthSports} alt="Youth sports program" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Community Impact</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-4">
              Every Athlete <span className="text-primary">Deserves a Chance</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] max-w-[900px] mb-10 leading-relaxed">
              Iron Form actively scouts and mentors gifted athletes in underserved communities — because financial barriers should never prevent talent from reaching its full potential.
            </p>
            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-5">
              {strategies.map((s, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <span className="text-[28px] mb-3 block">{s.icon}</span>
                  <h3 className="text-foreground text-[18px] font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="animate-fade-up stagger-5 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
              Sources: Aspen Institute – Project Play; Boys & Girls Clubs of America Impact Reports; Atlanta Public Schools Athletics Department
            </p>
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}