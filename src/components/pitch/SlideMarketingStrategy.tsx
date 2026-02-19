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

  const campaigns = [
    { phase: "Pre-Launch (6 mo)", items: ["Social media teaser campaign with construction updates", "Email waitlist with early-bird membership pricing ($150/mo vs $200)", "Partner with 3 Atlanta sports teams for co-branded announcements", "Influencer facility walk-through videos (target: 500K+ reach)"] },
    { phase: "Launch Month", items: ["Invite-only soft launch for 50 founding members", "Grand opening event with local celebrity athlete appearance", "Free community fitness day — 500+ attendees target", "Local news & podcast media blitz (10+ outlets)"] },
    { phase: "Growth (Yr 1)", items: ["Referral program: members earn free month for each sign-up", "Corporate wellness pilot with 3 Atlanta companies", "Quarterly youth sports festival (builds pipeline)", "Monthly athlete spotlight series on YouTube & Instagram"] },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Go-To-Market</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-8">
              Marketing <span className="text-primary">Strategy</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-6 mb-7">
              <div className="flex-1">
                <h3 className="text-primary text-[16px] font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-5 h-[3px] bg-primary rounded-full" />
                  Digital
                </h3>
                <div className="space-y-3">
                  {digital.map((d, i) => (
                    <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
                      <span className="text-[20px] shrink-0">{d.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[14px] font-bold mb-0.5">{d.title}</h4>
                        <p className="text-muted-foreground text-[12px] leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-accent text-[16px] font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-5 h-[3px] bg-accent rounded-full" />
                  Celebrity & Influencer
                </h3>
                <div className="space-y-3">
                  {celebrity.map((c, i) => (
                    <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4 flex gap-3">
                      <span className="text-[20px] shrink-0">{c.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[14px] font-bold mb-0.5">{c.title}</h4>
                        <p className="text-muted-foreground text-[12px] leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-foreground text-[16px] font-bold mb-4 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-5 h-[3px] bg-foreground/50 rounded-full" />
                  Offline & Community
                </h3>
                <div className="space-y-3">
                  {offline.map((o, i) => (
                    <div key={i} className="bg-secondary border border-border rounded-xl p-4 flex gap-3">
                      <span className="text-[20px] shrink-0">{o.icon}</span>
                      <div>
                        <h4 className="text-foreground text-[14px] font-bold mb-0.5">{o.title}</h4>
                        <p className="text-muted-foreground text-[12px] leading-relaxed">{o.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Campaign Timeline */}
            <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-5">
              {campaigns.map((c, i) => (
                <div key={i} className="bg-secondary/50 border border-border rounded-xl p-5">
                  <h4 className={`text-[14px] font-bold mb-3 uppercase tracking-wider ${i === 0 ? "text-accent" : i === 1 ? "text-primary" : "text-foreground"}`}>
                    {c.phase}
                  </h4>
                  <ul className="space-y-2">
                    {c.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${i === 0 ? "bg-accent" : i === 1 ? "bg-primary" : "bg-foreground/50"}`} />
                        <span className="text-muted-foreground text-[12px] leading-relaxed">{item}</span>
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
