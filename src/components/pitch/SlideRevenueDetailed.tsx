import heroTrack from "@/assets/pitch/hero-track.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideRevenueDetailed({ active }: { active: boolean }) {
  const streams = [
    { label: "Monthly Memberships", low: "$480K", high: "$1.08M", detail: "200–300 members × $200–$300/mo" },
    { label: "Team Retainment Agreements", low: "$100K", high: "$100K", detail: "5 teams × $20K/season" },
    { label: "Insurance Partnerships", low: "$50K", high: "$50K", detail: "Covered therapy & rehab services" },
    { label: "Facility Rentals", low: "$104K", high: "$104K", detail: "$2K/week × 52 weeks" },
    { label: "Wellness Services", low: "$50K", high: "$50K", detail: "Clinics & recovery sessions" },
    { label: "Grants & Sponsorships", low: "$50K", high: "$50K", detail: "Local businesses & organizations" },
    { label: "Camps (4–6/yr)", low: "$36K", high: "$54K", detail: "30 participants × $200–$500" },
    { label: "Seminars (6–8/yr)", low: "$60K", high: "$80K", detail: "100 attendees × $50–$150" },
  ];

  const totalLow = "$930K";
  const totalHigh = "$1.57M";

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroTrack} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Revenue Breakdown</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
                Projected Annual <span className="text-primary">Revenue</span>
              </h2>
              <div className="animate-fade-up stagger-3">
                <div className="grid grid-cols-[1fr_100px_100px_1fr] gap-y-3 items-center mb-8">
                  <div className="text-muted-foreground text-[13px] uppercase tracking-wider font-semibold">Revenue Stream</div>
                  <div className="text-muted-foreground text-[13px] uppercase tracking-wider font-semibold text-right">Low</div>
                  <div className="text-muted-foreground text-[13px] uppercase tracking-wider font-semibold text-right">High</div>
                  <div className="text-muted-foreground text-[13px] uppercase tracking-wider font-semibold pl-6">Details</div>
                  {streams.map((s, i) => (
                    <>
                      <div key={`l-${i}`} className="text-foreground text-[16px] font-medium border-b border-white/5 pb-2">{s.label}</div>
                      <div key={`lo-${i}`} className="text-primary text-[16px] font-semibold text-right border-b border-white/5 pb-2">{s.low}</div>
                      <div key={`hi-${i}`} className="text-accent text-[16px] font-semibold text-right border-b border-white/5 pb-2">{s.high}</div>
                      <div key={`d-${i}`} className="text-muted-foreground text-[14px] pl-6 border-b border-white/5 pb-2">{s.detail}</div>
                    </>
                  ))}
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex justify-between items-center">
                  <span className="text-foreground text-[22px] font-bold">Total Annual Revenue</span>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <div className="text-muted-foreground text-[12px] uppercase mb-1">Low Estimate</div>
                      <div className="text-primary text-[32px] font-bold">{totalLow}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-muted-foreground text-[12px] uppercase mb-1">High Estimate</div>
                      <div className="text-accent text-[32px] font-bold">{totalHigh}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
