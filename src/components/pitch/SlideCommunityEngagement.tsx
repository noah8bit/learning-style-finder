import heroCommunity from "@/assets/pitch/hero-community.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCommunityEngagement({ active }: { active: boolean }) {
  const strategies = [
    {
      icon: "🏫",
      title: "School Partnerships",
      desc: "Partner with Atlanta public schools and recreation departments to provide after-school training programs, discounted memberships, and facility access for student-athletes.",
    },
    {
      icon: "🤝",
      title: "Non-Profit Collaborations",
      desc: "Work with organizations like Boys & Girls Clubs, YMCA, and local sports foundations to identify and support talented youth who lack resources.",
    },
    {
      icon: "🎯",
      title: "Talent Scouting Program",
      desc: "Dedicated scouts attend local tournaments, school events, and community leagues to identify exceptional young athletes for mentorship and scholarship opportunities.",
    },
    {
      icon: "💊",
      title: "Free Health Screenings",
      desc: "Quarterly community health days offering free sports physicals, injury assessments, and wellness consultations to underserved neighborhoods.",
    },
    {
      icon: "📢",
      title: "Community Events",
      desc: "Host free open-house days, fitness challenges, and family sports festivals to build brand awareness and deepen community ties.",
    },
    {
      icon: "🎓",
      title: "Scholarship Fund",
      desc: "Establish a grant-funded scholarship program covering training, equipment, and competition fees for qualifying athletes from low-income families.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroCommunity} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Outreach Strategy</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
                Community <span className="text-primary">Engagement Plan</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] mb-10 max-w-[900px]">
                A structured approach to building deep roots in Atlanta's communities — ensuring inclusivity, access, and long-term impact.
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
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
