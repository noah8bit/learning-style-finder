import ScaledSlide from "./ScaledSlide";

export default function SlideMarketingStrategy({ active }: { active: boolean }) {
  const channels = [
    { icon: "📱", title: "Social Media & Influencers", desc: "Instagram, TikTok, YouTube with athlete stories & influencer collabs", color: "border-primary/30 bg-primary/10" },
    { icon: "🌐", title: "Website & SEO", desc: "High-converting pages, local SEO for 'Atlanta training' searches", color: "border-primary/30 bg-primary/10" },
    { icon: "⭐", title: "Celebrity Partnerships", desc: "Pro athletes and actors as brand ambassadors with co-branded content", color: "border-accent/30 bg-accent/10" },
    { icon: "🤝", title: "Local Partnerships", desc: "Co-branded events with Atlanta sports teams, schools & fitness brands", color: "border-accent/30 bg-accent/10" },
    { icon: "🎪", title: "Community Events", desc: "Free open-house weekends, fitness challenges, and youth festivals", color: "border-primary/30 bg-primary/10" },
    { icon: "🏷️", title: "Referral & PR", desc: "Member-get-member discounts, local news, podcast appearances", color: "border-accent/30 bg-accent/10" },
  ];

  const campaigns = [
    { phase: "Pre-Launch (6 mo)", items: ["Social media teaser campaign with construction updates", "Email waitlist with early-bird pricing ($150/mo vs $200)", "Influencer facility walk-through videos (500K+ reach)"], color: "text-accent", dot: "bg-accent" },
    { phase: "Launch Month", items: ["Invite-only soft launch for 50 founding members", "Grand opening event with local celebrity athlete", "Free community fitness day — 500+ attendees target"], color: "text-primary", dot: "bg-primary" },
    { phase: "Growth (Year 1)", items: ["Referral program: free month for each sign-up", "Corporate wellness pilot with 3 Atlanta companies", "Monthly athlete spotlight on YouTube & Instagram"], color: "text-foreground", dot: "bg-foreground/50" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Go-To-Market</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-10">
              Marketing <span className="text-primary">Strategy</span>
            </h2>
            <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-5 mb-8">
              {channels.map((d, i) => (
                <div key={i} className={`${d.color} border rounded-xl p-6 flex gap-4 items-start`}>
                  <span className="text-[32px] shrink-0">{d.icon}</span>
                  <div>
                    <h4 className="text-foreground text-[22px] font-bold mb-1">{d.title}</h4>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-5">
              {campaigns.map((c, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-6">
                  <h4 className={`${c.color} text-[22px] font-bold mb-4 uppercase tracking-wider`}>
                    {c.phase}
                  </h4>
                  <ul className="space-y-3">
                    {c.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full shrink-0 mt-2.5 ${c.dot}`} />
                        <span className="text-muted-foreground text-[20px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}