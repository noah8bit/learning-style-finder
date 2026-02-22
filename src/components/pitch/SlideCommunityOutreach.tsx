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
            <div className="animate-fade-up stagger-1 bg-black/85 backdrop-blur-xl rounded-xl px-8 py-5 mb-6 inline-block border border-white/10">
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-2">Community Impact</p>
              <h2 className="text-[56px] font-bold leading-[1] text-white mb-2">
                Every Athlete <span className="text-primary">Deserves a Chance</span>
              </h2>
              <p className="text-white/70 text-[22px] max-w-[1000px] leading-relaxed">
                Iron Form scouts talent, hosts competitive events, and mentors athletes in underserved communities.
              </p>
            </div>
            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-5">
              {strategies.map((s, i) => (
                <div key={i} className="bg-black/90 backdrop-blur-xl border border-primary/30 rounded-xl p-7 flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[36px] shrink-0">{s.icon}</span>
                    <h3 className="text-white text-[24px] font-bold leading-tight">{s.title}</h3>
                  </div>
                  <p className="text-white/70 text-[19px] leading-[1.5]">{s.desc}</p>
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