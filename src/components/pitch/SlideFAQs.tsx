import ScaledSlide from "./ScaledSlide";

export default function SlideFAQs({ active }: { active: boolean }) {
  const faqs = [
    {
      q: "What is the expected return on investment?",
      a: "Based on conservative projections, the facility reaches profitability by Year 1 with net margins growing through Year 3 ($850K–$1.6M). Full payback period is estimated at 4–6 years depending on membership growth.",
    },
    {
      q: "How does Iron Form generate revenue before full capacity?",
      a: "Phased launch includes pre-sale memberships, early team retainment agreements, facility rentals, and insurance-covered therapy services — generating revenue even during build-out.",
    },
    {
      q: "What makes this different from a traditional gym?",
      a: "Iron Form combines 30+ sport disciplines, integrated medical/recovery services, a film & stunt wing, and community outreach — no traditional gym or even elite performance center offers this level of integration.",
    },
    {
      q: "How will you attract and retain members?",
      a: "Tiered pricing for accessibility, best-in-class facilities, community events, referral programs, and a proprietary performance tracking app that keeps athletes engaged.",
    },
    {
      q: "What is the exit strategy for investors?",
      a: "Options include equity buyback at agreed-upon milestones, revenue-sharing dividends, or participation in multi-location expansion with increasing valuation over time.",
    },
    {
      q: "How does the community outreach affect profitability?",
      a: "Grant-funded programs cover costs while building brand equity and loyalty. Community engagement drives word-of-mouth referrals — our lowest-cost acquisition channel.",
    },
    {
      q: "What insurance partnerships are planned?",
      a: "Negotiations with major providers to cover neuromuscular therapy, physical rehab, and recovery services — turning medical offerings into a steady, predictable revenue stream.",
    },
    {
      q: "How scalable is the Iron Form model?",
      a: "The integrated model is designed for replication. Once proven in Atlanta, the blueprint can expand to other major metros with similar demographics and market demand.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Investor Q&A</p>
            <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-x-10 gap-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="border-l-[3px] border-primary/30 pl-5">
                  <h3 className="text-foreground text-[16px] font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}