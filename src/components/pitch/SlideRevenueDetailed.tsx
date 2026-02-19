import React from "react";
import heroTrack from "@/assets/pitch/hero-track.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideRevenueDetailed({ active }: { active: boolean }) {
  const coreStreams = [
    { label: "Monthly Memberships", low: "$480K", high: "$1.08M", detail: "200–300 members × $200–$300/mo" },
    { label: "Team Retainment Agreements", low: "$100K", high: "$100K", detail: "5 teams × $20K/season" },
    { label: "Insurance Partnerships", low: "$50K", high: "$50K", detail: "Covered therapy & rehab services" },
    { label: "Facility Rentals", low: "$104K", high: "$104K", detail: "$2K/week × 52 weeks" },
    { label: "Wellness Services", low: "$50K", high: "$50K", detail: "Clinics & recovery sessions" },
    { label: "Grants & Sponsorships", low: "$50K", high: "$50K", detail: "Local businesses & organizations" },
  ];

  const enhancedStreams = [
    { label: "Camps (4/yr)", low: "$36K", high: "$36K", detail: "4 camps × 30 participants × $300 avg" },
    { label: "Seminars (6/yr)", low: "$60K", high: "$60K", detail: "6 seminars × 100 attendees × $100 avg" },
    { label: "Corporate Wellness", low: "$72K", high: "$72K", detail: "3 clients × $2K/mo" },
    { label: "Retail Space", low: "$24K", high: "$24K", detail: "~$2K/mo merchandise sales" },
    { label: "Premium Services", low: "$36K", high: "$36K", detail: "15 PT sessions/week × $75" },
    { label: "Referral Program", low: "$24K", high: "$24K", detail: "10 new members/mo × $200" },
  ];

  const streams = [...coreStreams, ...enhancedStreams];

  const totalLow = "$1.09M";
  const totalHigh = "$1.69M";

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
                <div className="grid grid-cols-[1fr_100px_100px_1fr] gap-y-2 items-center mb-8">
                  <div className="text-muted-foreground text-[12px] uppercase tracking-wider font-semibold">Revenue Stream</div>
                  <div className="text-muted-foreground text-[12px] uppercase tracking-wider font-semibold text-right">Low</div>
                  <div className="text-muted-foreground text-[12px] uppercase tracking-wider font-semibold text-right">High</div>
                  <div className="text-muted-foreground text-[12px] uppercase tracking-wider font-semibold pl-6">Details</div>
                  {coreStreams.map((s, i) => (
                    <React.Fragment key={`core-${i}`}>
                      <div className="text-foreground text-[14px] font-medium border-b border-white/5 pb-1.5">{s.label}</div>
                      <div className="text-primary text-[14px] font-semibold text-right border-b border-white/5 pb-1.5">{s.low}</div>
                      <div className="text-accent text-[14px] font-semibold text-right border-b border-white/5 pb-1.5">{s.high}</div>
                      <div className="text-muted-foreground text-[12px] pl-6 border-b border-white/5 pb-1.5">{s.detail}</div>
                    </React.Fragment>
                  ))}
                  <div className="col-span-4 text-accent text-[12px] uppercase tracking-wider font-semibold pt-3 pb-1 border-b border-accent/20">Enhanced Revenue Streams</div>
                  {enhancedStreams.map((s, i) => (
                    <React.Fragment key={`enh-${i}`}>
                      <div className="text-foreground text-[14px] font-medium border-b border-white/5 pb-1.5">{s.label}</div>
                      <div className="text-primary text-[14px] font-semibold text-right border-b border-white/5 pb-1.5">{s.low}</div>
                      <div className="text-accent text-[14px] font-semibold text-right border-b border-white/5 pb-1.5">{s.high}</div>
                      <div className="text-muted-foreground text-[12px] pl-6 border-b border-white/5 pb-1.5">{s.detail}</div>
                    </React.Fragment>
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
              <p className="animate-fade-up stagger-4 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: Iron Form internal financial model; IHRSA membership pricing benchmarks; Atlanta commercial rental market data
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}
