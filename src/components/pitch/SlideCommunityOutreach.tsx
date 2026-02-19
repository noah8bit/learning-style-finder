import heroAthlete from "@/assets/pitch/hero-athlete.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCommunityOutreach({ active }: { active: boolean }) {
  const pillars = [
    { icon: "🎓", title: "Supporting Underserved Talents", desc: "Creating pathways for young athletes who lack opportunities — aligning with social equity and community development." },
    { icon: "❤️", title: "Health & Wellness Promotion", desc: "Inspiring healthier communities by emphasizing overall well-being — physical and mental health for all." },
    { icon: "🤝", title: "Building Relationships", desc: "Engaging with local schools and organizations enhances visibility, reputation, and stakeholder relationships." },
    { icon: "⭐", title: "Positive Brand Image", desc: "Positioning Iron Form as a leader that values inclusivity, mentorship, and community — attracting conscious clients and investors." },
    { icon: "🌱", title: "Sustainable Impact", desc: "Developing future leaders in sports — creating long-term community change that resonates with broader societal goals." },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[45%] h-full relative">
          <img src={heroAthlete} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
        </div>
        <div className="w-[55%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Community Impact</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-4">
                Iron Form's Commitment to<br /><span className="text-primary">Accessibility</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[16px] mb-10 max-w-[650px] leading-relaxed">
                Our outreach actively scouts and mentors gifted athletes who might otherwise not have access — aligning with Corporate Social Responsibility trends.
              </p>
              <div className="animate-fade-up stagger-4 space-y-5">
                {pillars.map((p, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="text-[26px] shrink-0">{p.icon}</span>
                    <div>
                      <h3 className="text-foreground text-[18px] font-bold mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">{p.desc}</p>
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
