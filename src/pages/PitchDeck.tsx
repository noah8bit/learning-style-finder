import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, Download, Loader2, FileDown } from "lucide-react";
import { exportPptx } from "@/utils/exportPptx";

import heroGym from "@/assets/pitch/hero-gym.jpg";
import heroAthlete from "@/assets/pitch/hero-athlete.jpg";
import heroAtlanta from "@/assets/pitch/hero-atlanta.jpg";
import heroAtlantaWhy from "@/assets/pitch/hero-atlanta-why.jpg";
import heroRecovery from "@/assets/pitch/hero-recovery.jpg";
import heroFacility from "@/assets/pitch/hero-facility-v2.jpg";
import heroSwimmingPool from "@/assets/pitch/hero-swimming-pool.jpg";
import heroFilmStudio from "@/assets/pitch/hero-film-studio.jpg";
import heroFacilityInterior from "@/assets/pitch/hero-crosstraining.jpg";

import ScaledSlide from "@/components/pitch/ScaledSlide";
import SlideFinancialProjections from "@/components/pitch/SlideFinancialProjections";
import SlideOperatingCosts from "@/components/pitch/SlideOperatingCosts";
import SlideRevenueDetailed from "@/components/pitch/SlideRevenueDetailed";
import SlideRevenueStream from "@/components/pitch/SlideRevenueStream";
import { revenueStreams } from "@/components/pitch/revenueStreamData";
import SlidePartnerships from "@/components/pitch/SlidePartnerships";
import SlideEmployeeStructure from "@/components/pitch/SlideEmployeeStructure";
import SlideCommunityOutreach from "@/components/pitch/SlideCommunityOutreach";
import SlideLongTermVision from "@/components/pitch/SlideLongTermVision";
import SlideUseOfFundsDetailed from "@/components/pitch/SlideUseOfFundsDetailed";
import SlideSmartBuild from "@/components/pitch/SlideSmartBuild";
import SlideExitStrategy from "@/components/pitch/SlideExitStrategy";
import SlideDevelopmentBudget from "@/components/pitch/SlideDevelopmentBudget";
import SlideCapitalStack from "@/components/pitch/SlideCapitalStack";
import SlideDevelopmentTimeline from "@/components/pitch/SlideDevelopmentTimeline";
import SlidePreOpeningRisk from "@/components/pitch/SlidePreOpeningRisk";
import SlideMarketGrowth from "@/components/pitch/SlideMarketGrowth";
import SlideCompetitiveAnalysis from "@/components/pitch/SlideCompetitiveAnalysis";
// SlideTimeline removed — replaced by SlideDevelopmentTimeline
import SlidePricingRateCard from "@/components/pitch/SlidePricingRateCard";
import SlidePricingAppendix from "@/components/pitch/SlidePricingAppendix";
import SlideFacilityLayout from "@/components/pitch/SlideFacilityLayout";
import SlideRiskManagement from "@/components/pitch/SlideRiskManagement";
import SlideMarketingStrategy from "@/components/pitch/SlideMarketingStrategy";
import SlideFAQs from "@/components/pitch/SlideFAQs";
import SlideCustomerPersonas from "@/components/pitch/SlideCustomerPersonas";
// SlideCostBenefit removed from main flow
import SlideInvestmentAsk from "@/components/pitch/SlideInvestmentAsk";
import SlideCapTable from "@/components/pitch/SlideCapTable";
import SlideGovernance from "@/components/pitch/SlideGovernance";
import SlideAdvisoryStructure from "@/components/pitch/SlideAdvisoryStructure";
import SlideTraction from "@/components/pitch/SlideTraction";
import SlideConservativeScenario from "@/components/pitch/SlideConservativeScenario";
import SlideMedicalRevenueEngine from "@/components/pitch/SlideMedicalRevenueEngine";
import SlideHighMarginAddOns from "@/components/pitch/SlideHighMarginAddOns";
import SlideFinancialSummary from "@/components/pitch/SlideFinancialSummary";
import SlideFiveYearVision from "@/components/pitch/SlideFiveYearVision";
import SlideValuationBridge from "@/components/pitch/SlideValuationBridge";
import SlideKPIs from "@/components/pitch/SlideKPIs";
import SlideFinancialSnapshot from "@/components/pitch/SlideFinancialSnapshot";

// ─── Slide Components ───────────────────────────────────────────────────────

function SlideCover({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroGym} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 flex flex-col justify-end h-full px-[120px] pb-[100px]">
          {active && (
            <>
              <div className="animate-fade-up stagger-1">
                <p className="text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-6">
                  Est. 2026 · Atlanta, GA
                </p>
              </div>
              <h1 className="animate-fade-up stagger-2 font-bold text-[130px] leading-[0.9] tracking-tight text-foreground">
                IRON<br />
                <span className="text-primary">FORM</span>
              </h1>
              <p className="animate-fade-up stagger-3 text-[28px] text-secondary-foreground mt-8 max-w-[800px] leading-relaxed font-light">
                Atlanta's Integrated High-Performance Training & Rehab Facility
              </p>
              <p className="animate-fade-up stagger-4 text-muted-foreground text-[18px] mt-6">
                Investor Pitch Deck · Concept Stage · 2026
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}

function SlideProblem({ active }: { active: boolean }) {
  const problems = [
    { icon: "⚡", title: "Fragmented Resources", desc: "Athletes juggle multiple facilities for training, rehab, and recovery — wasting time and money. Iron Form consolidates everything they need under one roof." },
    { icon: "🏅", title: "No Cross-Training Hub", desc: "No single destination in Atlanta for multi-discipline training, neuromuscular therapy, recovery science, and coaching." },
    { icon: "💰", title: "Access & Affordability", desc: "Advanced training tools and sports medicine are reserved for premium pricing. Iron Form levels the field through tiered memberships and grants." },
    { icon: "🌟", title: "Community Outreach", desc: "Iron Form scouts and mentors undiscovered talent across Atlanta, connecting them with coaching and opportunities." },
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
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-4">The Problem</p>
              <h2 className="animate-fade-up stagger-2 text-[64px] font-bold leading-[1] text-foreground mb-12">
                Every Athlete Deserves<br />
                <span className="text-primary">Integrated Support</span>
              </h2>
              <div className="space-y-5">
                {problems.map((p, i) => (
                  <div key={i} className={`animate-fade-up stagger-${i + 3} flex gap-6 bg-secondary border border-border rounded-xl p-6`}>
                    <div className="w-[64px] h-[64px] rounded-lg bg-primary/10 flex items-center justify-center text-[36px] shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-[26px] font-bold text-foreground mb-2">{p.title}</h3>
                      <p className="text-muted-foreground text-[22px] leading-relaxed">{p.desc}</p>
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

function SlideSolution({ active }: { active: boolean }) {
  const pillars = [
    { icon: "🏅", label: "Diversified Training", desc: "30+ disciplines under one roof generate broad membership appeal and reduce churn — athletes don't outgrow us." },
    { icon: "🏥", label: "Insurance-Backed Medical", desc: "Sports medicine, neuromuscular therapy, and peptide wellness billed through insurance — recurring clinical revenue independent of membership." },
    { icon: "🏢", label: "Corporate Wellness", desc: "B2B contracts with employers provide predictable, recurring revenue with higher retention than individual memberships." },
    { icon: "🤝", label: "Sponsorships & Grants", desc: "Community outreach and youth development funded through brand partnerships, grant programs, and local sponsorships." },
    { icon: "🎪", label: "Event & Facility Rentals", desc: "Competitions, film productions, private training sessions, and space rentals generate high-margin income with minimal overhead." },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroRecovery} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]">
          {active && (
            <>
              <div className="animate-fade-up stagger-1 bg-black/85 backdrop-blur-xl rounded-xl px-8 py-6 mb-6 border border-white/10 inline-block">
                <p className="text-primary font-medium tracking-[0.3em] uppercase text-[18px] mb-2">The Solution</p>
                <h2 className="text-[56px] font-bold leading-[1] text-white mb-3">
                  Train Better. Recover Faster. <span className="text-primary">Go Further.</span>
                </h2>
                <p className="text-white/70 text-[22px] max-w-[1100px] leading-relaxed">
                  A comprehensive high-performance campus for athletes across every sport — with integrated rehabilitation, recovery science, and medical services under one roof. <span className="text-primary font-semibold">Month-to-month memberships aren't the only way to build a successful facility.</span> Iron Form is built on five distinct revenue pillars.
                </p>
              </div>

              <div className="animate-fade-up stagger-3 grid grid-cols-5 gap-4">
                {pillars.map((p, i) => (
                  <div key={i} className="bg-black/85 backdrop-blur-xl border border-primary/30 rounded-xl p-6 flex flex-col">
                    <span className="text-[36px] mb-3">{p.icon}</span>
                    <h3 className="text-primary text-[20px] font-bold mb-2">{p.label}</h3>
                    <p className="text-white/70 text-[17px] leading-relaxed">{p.desc}</p>
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

function SlideServices({ active }: { active: boolean }) {
  const diffs = [
    { icon: "🏥", title: "Integrated Medical & Recovery", benefit: "Neuromuscular therapy and peptide clinics on-site — insurance-backed sports medicine with everyday training." },
    { icon: "🏋", title: "30+ Training Disciplines", benefit: "One-stop hub — martial arts, track & field, swimming, dance, and more." },
    { icon: "🎪", title: "Film, Stunt & Circus Wing", benefit: "Aerial training and circus arts — conditioning hub for Cirque du Soleil performers during Atlanta tours." },
    { icon: "🏆", title: "Competition Hosting", benefit: "Purpose-built for Hyrox, CrossFit, strongman, and multi-sport fitness events." },
    { icon: "⚡", title: "Recovery Tech Suite", benefit: "Cryotherapy, infrared, PEMF, Normatec, sauna & cold plunge." },
    { icon: "🏃", title: "Olympic Track & Field", benefit: "Sprint lanes, jumping pits, throwing cages, and hurdle training." },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroSwimmingPool} alt="Olympic swimming pool" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-4">Services & Differentiators</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-12">
                What Makes Iron Form <span className="text-primary">Different</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-6">
                {diffs.map((d, i) => (
                  <div key={i} className="flex gap-5 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-7">
                    <span className="text-[40px] shrink-0">{d.icon}</span>
                    <div>
                      <h3 className="text-foreground text-[26px] font-bold mb-2">{d.title}</h3>
                      <p className="text-muted-foreground text-[22px] leading-relaxed">{d.benefit}</p>
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

function SlideDisciplines({ active }: { active: boolean }) {
  const phase2Items = new Set(["Rock Climbing", "Olympic Swimming", "Basketball"]);
  const leftCol = [
    { title: "Martial Arts & Combat", items: ["Tae Kwon Do", "Karate", "Jiu-Jitsu", "Muay Thai", "Boxing", "Wrestling", "Kickboxing", "Wing Chun"], color: "text-primary" },
    { title: "Weapons", items: ["Fencing", "Kendo", "HEMA Sword Fighting"], color: "text-accent" },
  ];
  const midCol = [
    { title: "Dance & Acrobatics", items: ["Ballet", "Hip Hop", "Contemporary", "Gymnastics & Tumbling", "Aerial Silks & Trapeze", "Circus Performance"], color: "text-primary" },
    { title: "Field & Court", items: ["Basketball", "Soccer", "Volleyball", "Football Training", "Baseball & Softball", "Lacrosse"], color: "text-accent" },
  ];
  const rightCol = [
    { title: "Track & Field", items: ["Sprints (100m–400m)", "Distance (800m–5K)", "Hurdles", "High/Long/Triple Jump", "Pole Vault", "Shot Put & Discus", "Javelin"], color: "text-primary" },
    { title: "Specialty", items: ["Rock Climbing", "Stunt Training", "Olympic Swimming", "Hyrox / CrossFit", "Pilates & Yoga", "Golf Sim", "Rowing"], color: "text-accent" },
  ];
  const columns = [leftCol, midCol, rightCol];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[58%] flex flex-col justify-center px-[80px] pl-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-3">Cross-Training Mediums</p>
              <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-8">
                <span className="text-primary">30+</span> Disciplines Under One Roof
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-3 gap-x-10">
                {columns.map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-6">
                    {col.map((cat, i) => (
                      <div key={i}>
                        <h3 className={`${cat.color} text-[20px] font-bold uppercase tracking-wide mb-2`}>{cat.title}</h3>
                        <ul className="space-y-1">
                          {cat.items.map((item, j) => (
                            <li key={j} className="text-secondary-foreground text-[17px] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                              {item}
                              {phase2Items.has(item) && (
                                <span className="text-[11px] font-bold text-accent bg-accent/15 border border-accent/30 rounded px-1.5 py-0.5 leading-none ml-1 shrink-0">P2</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-4 text-muted-foreground text-[14px] mt-4">
                <span className="text-accent font-bold bg-accent/15 border border-accent/30 rounded px-1.5 py-0.5 text-[11px] mr-2">P2</span>
                = Phase 2 Expansion (triggered when EBITDA &gt; $1.5M sustained 12 mo.)
              </p>
            </>
          )}
        </div>
        <div className="w-[42%] h-full relative">
          <img src={heroFacility} alt="Multi-sport training facility" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>
    </ScaledSlide>
  );
}

function SlideMarket({ active }: { active: boolean }) {
  const stats = [
    { value: "$96B+", label: "Global Health & Fitness Club Market", sub: "Growing at ~7.5% CAGR (IHRSA 2024)" },
    { value: "$10B+", label: "Sports Medicine Market", sub: "Projected to reach $76B by 2033 (Straits Research)" },
    { value: "247M", label: "Sport & Fitness Participants", sub: "Active Americans in 2024 (SFIA 2025 Topline Report)" },
    { value: "6.2M+", label: "Atlanta Metro Population", sub: "#1 U.S. film production state (ARC 2024)" },
    { value: "80%", label: "U.S. Participation Rate", sub: "Highest ever recorded (SFIA 2025)" },
    { value: "#1", label: "Integrated Model", sub: "Limited regional competitors offer this combination" },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAtlanta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-4">Market Opportunity</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-6">
                A Massive, Underserved<br /><span className="text-primary">Athletic Performance Market</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] max-w-[900px] mb-12 leading-relaxed">
                Explosive market growth, rising participation, and increasing demand for integrated training facilities confirm the opportunity.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                    <div className="text-primary text-[56px] font-bold leading-none mb-3">{s.value}</div>
                    <div className="text-foreground text-[22px] font-semibold mb-1">{s.label}</div>
                    <div className="text-muted-foreground text-[18px]">{s.sub}</div>
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-5 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: IHRSA Global Report 2024; Straits Research – Sports Medicine Market 2025; SFIA 2025 Topline Participation Report; Atlanta Regional Commission Population Estimates 2024; Georgia Dept. of Economic Development
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}


function SlideTeam({ active }: { active: boolean }) {
  const team = [
    { name: "Noah Garret", role: "Founder & Director", highlights: "3° Black Belt ITF TKD · 2° American Karate · 10+ yrs operating martial arts schools · Nearly 2 decades working with athletes across disciplines · Special needs athletic training program instructor · 15+ yrs in the film industry · 2x SAG-nominated stunt performer · Action Designer & Stunt Coordinator on Marvel, DC, Netflix & major studio productions" },
    { name: "Rick Villanueva, LMT", role: "Neuromuscular Therapy Director", highlights: "18+ years as a Neuromuscular Therapist · Specializes in Neuromuscular, Medical Massage, Cranio-structural, & Deep Tissue techniques · Root-cause methodology accelerating the body's natural healing · Proven with pro athletes, Hollywood stunt performers, actors & CrossFit competitors · Holistic approach to rehabilitation & pain management" },
    { name: "Josh Garret", role: "Peptide Clinic Director", highlights: "Performance wellness & recovery protocols · Sports medicine & recovery science background" },
    { name: "Operations Manager", role: "Target Hire", highlights: "Grant writing & acquisition · Insurance partnership negotiation · Athlete sponsorship management" },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFacilityInterior} alt="Training facility interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-4">Team & Credentials</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-12">
              The Team Behind <span className="text-primary">Iron Form</span>
            </h2>
            <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-6">
              {team.map((t, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-8 flex gap-6 items-start">
                  <div className="w-[72px] h-[72px] rounded-full bg-primary/20 flex items-center justify-center text-primary text-[32px] font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="text-foreground text-[24px] font-bold">{t.name}</h3>
                    <p className="text-primary text-[18px] font-medium uppercase tracking-wider mb-3">{t.role}</p>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">{t.highlights}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-fade-up stagger-4 mt-6 flex gap-5">
              <div className="flex-1 bg-black/70 backdrop-blur-md border border-primary/30 rounded-xl p-6">
                <p className="text-foreground text-[20px] font-bold text-primary mb-2">Partner Equity Structure</p>
                <p className="text-muted-foreground text-[18px] leading-relaxed">Josh Garret – 4% equity, 4-year vesting, 1-year cliff</p>
                <p className="text-muted-foreground text-[18px] leading-relaxed">Rick Villanueva – 4% equity, 4-year vesting, 1-year cliff</p>
                <p className="text-muted-foreground text-[16px] mt-2 italic">Equity is non-controlling and subject to performance-based continuation.</p>
              </div>
              <div className="flex-1 bg-black/70 backdrop-blur-md border border-border rounded-xl p-6">
                <p className="text-foreground text-[20px]">
                  <span className="font-semibold">Athletes as Instructors:</span> Contract-based specialists across 20+ disciplines — recruited on revenue-share model.
                </p>
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}

function SlideWhyAtlanta({ active }: { active: boolean }) {
  const reasons = [
    { num: "01", title: "Thriving Sports Culture", desc: "Home to Falcons (NFL), Hawks (NBA), Braves (MLB), Atlanta United (MLS) — plus a massive youth athletics community." },
    { num: "02", title: "Underserved Market", desc: "Despite being a major metro, Atlanta lacks a true integrated training and rehabilitation destination for serious athletes." },
    { num: "03", title: "#1 Film State", desc: "Georgia ranks #1 in U.S. film & TV production. Major studios, Netflix, Marvel film here — driving demand for stunt training." },
    { num: "04", title: "Growing Population", desc: "6M+ metro includes competitive athletes, fitness pros, military, law enforcement, and film talent — all core demographics." },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAtlantaWhy} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-4">Why Atlanta</p>
              <h2 className="animate-fade-up stagger-2 text-[64px] font-bold leading-[1] text-foreground mb-14">
                The Perfect City to<br />Launch <span className="text-primary">Iron Form</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-6">
                {reasons.map((r, i) => (
                  <div key={i} className="flex gap-6 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-7">
                    <span className="text-primary text-[52px] font-bold leading-none opacity-60">{r.num}</span>
                    <div>
                      <h3 className="text-foreground text-[28px] font-bold mb-2">{r.title}</h3>
                      <p className="text-muted-foreground text-[22px] leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-4 absolute bottom-6 left-[120px] right-[120px] text-muted-foreground/50 text-[11px] leading-tight">
                Sources: Atlanta Regional Commission Population Estimates 2024; Georgia Dept. of Economic Development – Film Industry Report; MPAA Theatrical & Home Entertainment Market Report
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}


function SlideFilmIndustry({ active }: { active: boolean }) {
  const capabilities = [
    { icon: "🤸", label: "Spring Floors", desc: "Professional spring floor systems for stunts, acrobatics, and fight choreography" },
    { icon: "🏗️", label: "Gantry Wire Systems", desc: "Overhead gantry rigging for wire work, aerial stunts, and harness training" },
    { icon: "🎪", label: "Aerial & Circus Arts", desc: "Silks, trapeze, and acrobatic training — supporting Cirque du Soleil performers during Atlanta residencies" },
    { icon: "📡", label: "Motion Capture", desc: "Mo-cap capability for digital performance capture and animation pre-production" },
    { icon: "🎥", label: "Filming & Previz", desc: "On-site filming for rehearsals, previsualization, and action sequence development" },
    { icon: "🏢", label: "Production Rentals", desc: "Hourly and project-based space rental for studios, productions, and independent filmmakers" },
  ];
  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        <div className="w-[50%] h-full relative">
          <img src={heroFilmStudio} alt="Film & stunt studio" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
        </div>
        <div className="w-[50%] flex flex-col justify-center px-[80px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[20px] mb-4">Film, Stunt & Circus Wing</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
                Where Action<br />Meets <span className="text-primary">Production</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[22px] mb-10 leading-relaxed max-w-[650px]">
                Georgia is the <span className="text-foreground font-semibold">#1 U.S. film production state</span>. Cirque du Soleil regularly performs in Atlanta, and our facility offers dedicated aerial training, rehearsal space, and conditioning for touring performers — limited regional competitors offer integrated multi-sport, medical, and film infrastructure.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-2 gap-5">
                {capabilities.map((c, i) => (
                  <div key={i} className="bg-secondary border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[36px]">{c.icon}</span>
                      <h3 className="text-foreground text-[24px] font-bold">{c.label}</h3>
                    </div>
                    <p className="text-muted-foreground text-[20px] leading-relaxed">{c.desc}</p>
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

function SlideClosing({ active }: { active: boolean }) {
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroGym} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[120px]">
          {active && (
            <>
              <h2 className="animate-fade-up stagger-1 text-[100px] font-bold leading-[0.9] text-foreground">
                IRON <span className="text-primary">FORM</span>
              </h2>
              <div className="animate-fade-up stagger-2 w-[100px] h-[3px] bg-primary mx-auto my-10" />
              <p className="animate-fade-up stagger-3 text-[32px] text-secondary-foreground font-light max-w-[800px] leading-relaxed">
                Integrated Performance. Revenue-Validated Model.<br />Built for Athletes. Backed by Science.
              </p>
              <div className="animate-fade-up stagger-4 mt-10 bg-primary/20 border border-primary/40 rounded-2xl px-12 py-8 max-w-[700px]">
                <p className="text-foreground text-[24px] font-bold mb-3">Let's Build This Together</p>
                <p className="text-secondary-foreground text-[18px] leading-relaxed mb-4">
                  We invite you to schedule a meeting to discuss partnership opportunities, investment details, and the future of Iron Form.
                </p>
                <p className="text-primary text-[20px] font-semibold tracking-wide">
                  Ready to forge the future of athletic training?
                </p>
              </div>
              <p className="animate-fade-up stagger-5 text-primary text-[16px] mt-8 tracking-[0.2em] uppercase">
                Atlanta, Georgia · 2026 · Concept Stage
              </p>
            </>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
}

// ─── Slide registry ─────────────────────────────────────────────────────────
const SLIDES = [
  // ACT 1: The Hook
  { component: SlideCover, title: "Cover" },
  { component: SlideProblem, title: "Problem" },
  { component: SlideSolution, title: "Solution" },

  // ACT 2: The Product — What We're Building
  { component: SlideServices, title: "Services & Differentiators" },
  { component: SlideDisciplines, title: "Disciplines" },
  { component: SlideFilmIndustry, title: "Film & Stunt" },
  { component: SlideFacilityLayout, title: "Facility Layout" },
  { component: SlidePricingRateCard, title: "Service Rate Card" },

  // ACT 3: The Market — Why It Works
  { component: SlideMarket, title: "Market Opportunity" },
  { component: SlideWhyAtlanta, title: "Why Atlanta" },
  { component: SlideCompetitiveAnalysis, title: "Competitive Analysis" },
  { component: SlideCommunityOutreach, title: "Community Impact" },

  // ACT 4: Who's Behind It
  { component: SlideTeam, title: "Team" },
  { component: SlideTraction, title: "Traction" },

  // ACT 4: The Business Model — How We Make Money
  { component: SlideRevenueDetailed, title: "Revenue Breakdown" },
  { component: SlideMedicalRevenueEngine, title: "Medical Revenue Engine" },
  { component: SlideHighMarginAddOns, title: "High-Margin Add-Ons" },
  { component: SlideFinancialSummary, title: "Financial Summary" },
  { component: SlideConservativeScenario, title: "Conservative Scenario" },
  { component: SlideOperatingCosts, title: "Operating Costs" },
  { component: SlideKPIs, title: "Core KPIs" },
  { component: SlideFinancialSnapshot, title: "Financial Snapshot" },

  // ACT 5: The Build — Development & Capital
  { component: SlideDevelopmentBudget, title: "Development Budget" },
  { component: SlideCapitalStack, title: "Capital Stack" },
  { component: SlideSmartBuild, title: "Smart Build" },
  { component: SlideDevelopmentTimeline, title: "Development Timeline" },
  { component: SlidePreOpeningRisk, title: "Pre-Opening Risk Mitigation" },

  // ACT 6: The Ask — Investment & Returns
  { component: SlideInvestmentAsk, title: "Investment Opportunity" },
  { component: SlideUseOfFundsDetailed, title: "SAFE Use of Funds" },
  { component: SlideValuationBridge, title: "Valuation Bridge" },
  { component: SlideCapTable, title: "Cap Table" },
  { component: SlideGovernance, title: "Governance" },
  { component: SlideExitStrategy, title: "Exit Outlook" },
  { component: SlideFiveYearVision, title: "5-Year Vision" },

  // ACT 7: Execution — How We Get There
  { component: SlideMarketingStrategy, title: "Marketing" },
  { component: SlideRiskManagement, title: "Risk Management" },
  { component: SlideAdvisoryStructure, title: "Advisory Structure" },
  { component: SlideLongTermVision, title: "Vision" },

  // APPENDIX: Deep Dives
  ...revenueStreams.map((stream) => ({
    component: ({ active }: { active: boolean }) => <SlideRevenueStream active={active} data={stream} />,
    title: `[Appendix] ${stream.title}`,
  })),
  { component: SlideFinancialProjections, title: "[Appendix] Pro Forma Detail" },
  { component: SlidePricingAppendix, title: "[Appendix] Pricing Benchmarks" },
  { component: SlideClosing, title: "Closing" },
];

// ─── Main Presentation ─────────────────────────────────────────────────────
export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [exportingPptx, setExportingPptx] = useState(false);
  const uiTimeout = useRef<number>();

  const exportPDF = useCallback(() => {
    setExporting(true);
    setTimeout(() => {
      window.print();
      setExporting(false);
    }, 100);
  }, []);

  const go = useCallback((dir: number) => {
    setCurrent((prev) => Math.max(0, Math.min(SLIDES.length - 1, prev + dir)));
    setShowUI(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "Escape") {
        if (showGrid) setShowGrid(false);
        else if (document.fullscreenElement) document.exitFullscreen();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen();
      }
      if (e.key === "g") setShowGrid((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, showGrid]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Auto-hide UI
  useEffect(() => {
    const onMove = () => {
      setShowUI(true);
      clearTimeout(uiTimeout.current);
      uiTimeout.current = window.setTimeout(() => setShowUI(false), 3000);
    };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); clearTimeout(uiTimeout.current); };
  }, []);

  if (showGrid) {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-foreground text-2xl font-bold" style={{ fontFamily: 'Oswald' }}>All Slides</h2>
          <button onClick={() => setShowGrid(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← Back to presentation
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {SLIDES.map((slide, i) => {
            const Comp = slide.component;
            return (
              <button
                key={i}
                onClick={() => { setCurrent(i); setShowGrid(false); }}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                  i === current ? "border-primary shadow-lg shadow-primary/20" : "border-border hover:border-muted-foreground"
                }`}
              >
                <div className="w-full h-full pointer-events-none">
                  <Comp active={true} />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="text-foreground text-sm font-medium">{i + 1}. {slide.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const Slide = SLIDES[current].component;

  return (
    <div className="fixed inset-0 bg-background print:static print:bg-transparent">
      {/* Print layout: all slides rendered for printing */}
      <div className="hidden print:block">
        {SLIDES.map((slide, i) => {
          const Comp = slide.component;
          return (
            <div key={i} className="print-slide">
              <Comp active={true} />
            </div>
          );
        })}
      </div>

      {/* Screen layout: single slide */}
      <div className="w-full h-full print:hidden" key={current}>
        <Slide active={true} />
      </div>

      {/* Navigation UI */}
      <div
        className={`print:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 transition-opacity duration-500 z-50 ${
          showUI ? "opacity-100" : "opacity-0"
        }`}
      >
        <button onClick={() => go(-1)} disabled={current === 0} className="text-foreground disabled:text-muted-foreground p-1 hover:text-primary transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide dots */}
        <div className="flex gap-1.5 mx-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button onClick={() => go(1)} disabled={current === SLIDES.length - 1} className="text-foreground disabled:text-muted-foreground p-1 hover:text-primary transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-px h-5 bg-white/20 mx-1" />

        <span className="text-muted-foreground text-xs min-w-[40px] text-center">
          {current + 1}/{SLIDES.length}
        </span>

        <button onClick={() => setShowGrid(true)} className="text-muted-foreground hover:text-foreground p-1 transition-colors">
          <Grid3X3 className="w-4 h-4" />
        </button>

        <button
          onClick={exportPDF}
          disabled={exporting}
          className="text-muted-foreground hover:text-foreground p-1 transition-colors disabled:opacity-50"
          title="Download PDF"
        >
          {exporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
        </button>

        <button
          onClick={async () => {
            setExportingPptx(true);
            try { await exportPptx(); } finally { setExportingPptx(false); }
          }}
          disabled={exportingPptx}
          className="text-muted-foreground hover:text-foreground p-1 transition-colors disabled:opacity-50"
          title="Download PPTX"
        >
          {exportingPptx ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileDown className="w-4 h-4" />}
        </button>

        <button
          onClick={() => {
            if (document.fullscreenElement) document.exitFullscreen();
            else document.documentElement.requestFullscreen();
          }}
          className="text-muted-foreground hover:text-foreground p-1 transition-colors"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
