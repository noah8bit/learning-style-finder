import ScaledSlide from "./ScaledSlide";

export default function SlideMarketingStrategy({ active }: { active: boolean }) {
  const digital = [
    { icon: "📱", title: "Social Media", desc: "Instagram, TikTok, YouTube content featuring athlete stories, facility tours, and training highlights" },
    { icon: "🌐", title: "Website & SEO", desc: "High-converting landing pages, blog content, and local SEO to capture 'Atlanta gym' and 'sports training' searches" },
    { icon: "📧", title: "Email Marketing", desc: "Nurture sequences for prospects, member newsletters, camp announcements, and referral campaigns" },
    { icon: "🎯", title: "Paid Advertising", desc: "Targeted Meta & Google Ads to Atlanta athletes, fitness enthusiasts, and film industry professionals" },
  ];

  const offline = [
    { icon: "🤝", title: "Local Partnerships", desc: "Co-branded events with Atlanta sports teams, schools, and fitness brands" },
    { icon: "🎪", title: "Community Events", desc: "Free open-house weekends, fitness challenges, and youth sports festivals" },
    { icon: "📰", title: "PR & Media", desc: "Local news features, podcast appearances, and partnerships with Atlanta sports journalists" },
    { icon: "🏷️", title: "Referral Program", desc: "Member-get-member discounts, team referral bonuses, and ambassador partnerships" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Go-To-Market</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
              Marketing <span className="text-primary">Strategy</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-10">
              <div className="flex-1">
                <h3 className="text-primary text-[20px] font-bold mb-5 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-8 h-[3px] bg-primary rounded-full" />
                  Digital Channels
                </h3>
                <div className="space-y-4">
                  {digital.map((d, i) => (
                    <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-4">
                      <span className="text-[24px] shrink-0">{d.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[16px] font-bold mb-1">{d.title}</h4>
                        <p className="text-muted-foreground text-[13px] leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-accent text-[20px] font-bold mb-5 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-8 h-[3px] bg-accent rounded-full" />
                  Offline Channels
                </h3>
                <div className="space-y-4">
                  {offline.map((o, i) => (
                    <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-5 flex gap-4">
                      <span className="text-[24px] shrink-0">{o.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[16px] font-bold mb-1">{o.title}</h4>
                        <p className="text-muted-foreground text-[13px] leading-relaxed">{o.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
