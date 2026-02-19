import ScaledSlide from "./ScaledSlide";

export default function SlideMarketingStrategy({ active }: { active: boolean }) {
  const digital = [
    { icon: "📱", title: "Social Media", desc: "Instagram, TikTok, YouTube featuring athlete stories, facility tours, and training highlights" },
    { icon: "🌐", title: "Website & SEO", desc: "High-converting pages and local SEO for 'Atlanta training' and 'sports rehab' searches" },
    { icon: "🎯", title: "Paid Advertising", desc: "Targeted Meta & Google Ads to Atlanta athletes, fitness pros, and film industry talent" },
  ];

  const celebrity = [
    { icon: "⭐", title: "Celebrity Partnerships", desc: "Atlanta-based pro athletes and actors as brand ambassadors — facility tours, testimonials, and co-branded content" },
    { icon: "🎥", title: "Influencer Collabs", desc: "Fitness influencers and stunt performers create training content at Iron Form, reaching millions organically" },
    { icon: "🏆", title: "Athlete Endorsements", desc: "Sponsored training packages for rising athletes — their journey documented and shared across platforms" },
  ];

  const offline = [
    { icon: "🤝", title: "Local Partnerships", desc: "Co-branded events with Atlanta sports teams, schools, and fitness brands" },
    { icon: "🎪", title: "Community Events", desc: "Free open-house weekends, fitness challenges, and youth sports festivals" },
    { icon: "🏷️", title: "Referral & PR", desc: "Member-get-member discounts, local news features, podcast appearances, and ambassador programs" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Go-To-Market</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
              Marketing <span className="text-primary">Strategy</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-7">
              <div className="flex-1">
                <h3 className="text-primary text-[18px] font-bold mb-5 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-6 h-[3px] bg-primary rounded-full" />
                  Digital
                </h3>
                <div className="space-y-4">
                  {digital.map((d, i) => (
                    <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-4">
                      <span className="text-[22px] shrink-0">{d.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[15px] font-bold mb-1">{d.title}</h4>
                        <p className="text-muted-foreground text-[13px] leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-accent text-[18px] font-bold mb-5 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-6 h-[3px] bg-accent rounded-full" />
                  Celebrity & Influencer
                </h3>
                <div className="space-y-4">
                  {celebrity.map((c, i) => (
                    <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-5 flex gap-4">
                      <span className="text-[22px] shrink-0">{c.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[15px] font-bold mb-1">{c.title}</h4>
                        <p className="text-muted-foreground text-[13px] leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-foreground text-[18px] font-bold mb-5 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-6 h-[3px] bg-foreground/50 rounded-full" />
                  Offline & Community
                </h3>
                <div className="space-y-4">
                  {offline.map((o, i) => (
                    <div key={i} className="bg-secondary border border-border rounded-xl p-5 flex gap-4">
                      <span className="text-[22px] shrink-0">{o.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[15px] font-bold mb-1">{o.title}</h4>
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