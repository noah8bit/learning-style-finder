import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, Download, Loader2, FileDown } from "lucide-react";
import { exportPptx } from "@/utils/exportPptx";

import heroGym from "@/assets/pitch/hero-gym.jpg";
import heroAthlete from "@/assets/pitch/hero-athlete.jpg";
import heroAtlanta from "@/assets/pitch/hero-atlanta.jpg";
import heroRecovery from "@/assets/pitch/hero-recovery.jpg";
import heroFacility from "@/assets/pitch/hero-facility-v2.jpg";
import heroSwimmingPool from "@/assets/pitch/hero-swimming-pool.jpg";
import heroFilmStudio from "@/assets/pitch/hero-film-studio.jpg";
import heroFacilityInterior from "@/assets/pitch/hero-crosstraining.jpg";

import ScaledSlide from "@/components/pitch/ScaledSlide";
import SlideFinancialProjections from "@/components/pitch/SlideFinancialProjections";
import SlideRevenueDetailed from "@/components/pitch/SlideRevenueDetailed";
import SlidePartnerships from "@/components/pitch/SlidePartnerships";
import SlideEmployeeStructure from "@/components/pitch/SlideEmployeeStructure";
import SlideCommunityOutreach from "@/components/pitch/SlideCommunityOutreach";
import SlideLongTermVision from "@/components/pitch/SlideLongTermVision";
import SlideUseOfFundsDetailed from "@/components/pitch/SlideUseOfFundsDetailed";
import SlideMarketGrowth from "@/components/pitch/SlideMarketGrowth";
import SlideCompetitiveAnalysis from "@/components/pitch/SlideCompetitiveAnalysis";
import SlideTimeline from "@/components/pitch/SlideTimeline";
import SlideCampSchedules from "@/components/pitch/SlideCampSchedules";
import SlideFacilityLayout from "@/components/pitch/SlideFacilityLayout";
import SlideRiskManagement from "@/components/pitch/SlideRiskManagement";
import SlideMarketingStrategy from "@/components/pitch/SlideMarketingStrategy";
import SlideFAQs from "@/components/pitch/SlideFAQs";
import SlideCustomerPersonas from "@/components/pitch/SlideCustomerPersonas";
import SlideCostBenefit from "@/components/pitch/SlideCostBenefit";
import SlideInvestmentAsk from "@/components/pitch/SlideInvestmentAsk";
import SlideTraction from "@/components/pitch/SlideTraction";

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
                Atlanta's Premier High-Performance Training & Rehab Facility
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
    { icon: "⚡", title: "Fragmented Resources", desc: "Athletes are forced to travel between multiple facilities for training, rehab, therapy, and recovery — wasting valuable time and disrupting tight schedules. Consolidating everything under one roof gives athletes back the hours that matter most." },
    { icon: "🏅", title: "No Cross-Training Hub", desc: "There is no single destination in Atlanta where an athlete can train across multiple disciplines, access neuromuscular therapy, recovery science, and coaching all under one roof — with the flexibility to train as publicly or as privately as their needs require." },
    { icon: "💰", title: "Access & Affordability", desc: "Elite-level training tools, recovery tech, and sports medicine are typically reserved for those who can afford premium pricing. Iron Form levels the playing field through tiered memberships, insurance partnerships, and grant-funded programs." },
    { icon: "🌟", title: "Community Outreach", desc: "Financial barriers should never prevent a gifted athlete from reaching their full potential. Iron Form actively scouts and mentors undiscovered talent across Atlanta's communities, connecting them with coaching, resources, and opportunities they wouldn't otherwise have." },
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
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">The Problem</p>
              <h2 className="animate-fade-up stagger-2 text-[64px] font-bold leading-[1] text-foreground mb-12">
                Every Athlete Deserves<br />
                <span className="text-primary">Elite-Level Support</span>
              </h2>
              <div className="space-y-8">
                {problems.map((p, i) => (
                  <div key={i} className={`animate-fade-up stagger-${i + 3} flex gap-6`}>
                    <div className="w-[56px] h-[56px] rounded-lg bg-secondary flex items-center justify-center text-[28px] shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-[22px] font-semibold text-foreground mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-[16px] leading-relaxed">{p.desc}</p>
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
  const features = [
    { icon: "🏋", label: "30+ Sport Disciplines" },
    { icon: "🧠", label: "Neuromuscular Therapy" },
    { icon: "💊", label: "Peptide Wellness Clinic" },
    { icon: "❄️", label: "Sauna & Cold Plunge" },
    { icon: "🏊", label: "Olympic Swimming Lanes" },
    { icon: "🎤", label: "Athlete & Coach Seminars" },
    { icon: "🤝", label: "Grants & Sponsorships" },
    { icon: "🎬", label: "Film & Stunt Wing" },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroRecovery} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">The Solution</p>
              <h2 className="animate-fade-up stagger-2 text-[72px] font-bold leading-[1] text-foreground mb-4">
                Train Better. Recover Faster.<br /><span className="text-primary">Go Further.</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-secondary-foreground text-[22px] max-w-[900px] mb-14 leading-relaxed font-light">
                A comprehensive high-performance campus built for aspiring and elite athletes across every sport — integrated rehabilitation, recovery science, and medical services, all under one roof.
              </p>
              <div className="grid grid-cols-4 gap-4">
                {features.map((f, i) => (
                  <div key={i} className={`animate-fade-up stagger-${Math.min(i + 3, 6)} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 flex items-center gap-4`}>
                    <span className="text-[32px]">{f.icon}</span>
                    <span className="text-foreground text-[18px] font-medium">{f.label}</span>
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
    { icon: "🏥", title: "Integrated Medical & Recovery", benefit: "Neuromuscular therapy and peptide clinics on-site — bridging elite sports medicine with everyday training." },
    { icon: "🏋", title: "30+ Training Disciplines", benefit: "One-stop hub for diverse athletic needs — martial arts, track & field, swimming, dance, and more." },
    { icon: "🎬", title: "Film, Stunt & Circus Wing", benefit: "High-ceiling rigging, aerial training, and circus arts in Georgia's #1-ranked film production market." },
    { icon: "🌍", title: "Community Outreach", benefit: "Scouting and mentoring undiscovered talent — accessibility over profit-first models." },
    { icon: "🏆", title: "Competition Hosting", benefit: "Purpose-built for Hyrox, CrossFit, strongman, and multi-sport fitness competitions." },
    { icon: "⚡", title: "Recovery Tech Suite", benefit: "Cryotherapy, infrared, PEMF, Normatec, sauna & cold plunge — forefront of performance innovation." },
    { icon: "🏃", title: "Olympic Track & Field", benefit: "Full sprint lanes, jumping pits, throwing cages, and hurdle training for elite track athletes." },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroSwimmingPool} alt="Olympic swimming pool" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Services & Differentiators</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-12">
                What Makes Iron Form <span className="text-primary">Different</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-x-10 gap-y-5">
                {diffs.map((d, i) => (
                  <div key={i} className="flex gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                    <span className="text-[30px] shrink-0">{d.icon}</span>
                    <div>
                      <h3 className="text-foreground text-[18px] font-bold mb-1">{d.title}</h3>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">{d.benefit}</p>
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
  const categories = [
    { title: "Martial Arts & Combat", items: ["Tae Kwon Do", "Karate", "Jiu-Jitsu", "Muay Thai", "Kickboxing", "Wing Chun", "Boxing", "Silat", "Jeet Kune Do", "Wrestling"], color: "text-primary" },
    { title: "Weapons & Combat", items: ["Fencing", "Kendo", "HEMA Sword Fighting"], color: "text-accent" },
    { title: "Dance & Acrobatics", items: ["Ballet", "Hip Hop", "Contemporary", "Jazz", "Tap", "Gymnastics & Tumbling", "Aerial Silks & Trapeze", "Circus Performance"], color: "text-primary" },
    { title: "Field & Court", items: ["Basketball", "Soccer", "Volleyball", "Football Training", "Baseball & Softball", "Lacrosse"], color: "text-accent" },
    { title: "Track & Field (Olympic)", items: ["Sprints (100m–400m)", "Distance (800m–5K)", "Hurdles", "High Jump & Pole Vault", "Long Jump & Triple Jump", "Shot Put & Discus", "Javelin", "Decathlon/Heptathlon Training"], color: "text-primary" },
    { title: "Specialty", items: ["Rock Climbing", "Stunt Training", "Cycling", "Pilates", "Yoga", "Golf Sim", "Olympic Swimming", "Hyrox / CrossFit", "Rowing & Erging"], color: "text-accent" },
  ];
  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex">
        {/* Left: discipline list */}
        <div className="w-[55%] flex flex-col justify-center px-[80px] pl-[100px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Cross-Training Mediums</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-10">
                <span className="text-primary">30+</span> Disciplines<br />Under One Roof
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-x-12 gap-y-6">
                {categories.map((cat, i) => (
                  <div key={i}>
                    <h3 className={`${cat.color} text-[18px] font-bold uppercase tracking-wide mb-2`}>{cat.title}</h3>
                    <ul className="space-y-0.5">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-secondary-foreground text-[14px] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="animate-fade-up stagger-4 text-muted-foreground text-[12px] mt-6">Facility also features sauna & cold plunge variations, Olympic swimming lanes, and hosts elite athlete & coaching seminars.</p>
            </>
          )}
        </div>
        {/* Right: facility image */}
        <div className="w-[45%] h-full relative">
          <img src={heroFacility} alt="Multi-sport training facility" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>
    </ScaledSlide>
  );
}

function SlideMarket({ active }: { active: boolean }) {
  const stats = [
    { value: "$100B+", label: "Global Health & Fitness Industry", sub: "Growing at ~7% CAGR" },
    { value: "$10B+", label: "Sports Medicine Market", sub: "Projected to reach $15B by 2032" },
    { value: "247M", label: "Sport & Fitness Participants", sub: "Participated in 2024 (SFIA Report)" },
    { value: "6M+", label: "Atlanta Metro Population", sub: "#1 U.S. film production state" },
    { value: "↑", label: "Multi-Training Demand", sub: "Cross-training growth accelerating" },
    { value: "#1", label: "First-Mover Advantage", sub: "No SE competitor matches" },
  ];
  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroAtlanta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Market Opportunity</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-6">
                A Massive, Underserved<br /><span className="text-primary">Athletic Performance Market</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] max-w-[800px] mb-12 leading-relaxed">
                Explosive market growth, rising participation, and increasing demand for integrated training facilities confirm the opportunity.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                    <div className="text-primary text-[48px] font-bold leading-none mb-3">{s.value}</div>
                    <div className="text-foreground text-[16px] font-semibold mb-1">{s.label}</div>
                    <div className="text-muted-foreground text-[13px]">{s.sub}</div>
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
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Team & Credentials</p>
            <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-12">
              The Team Behind <span className="text-primary">Iron Form</span>
            </h2>
            <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-6">
              {team.map((t, i) => (
                <div key={i} className="bg-secondary border border-border rounded-xl p-8 flex gap-6 items-start">
                  <div className="w-[64px] h-[64px] rounded-full bg-primary/20 flex items-center justify-center text-primary text-[28px] font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="text-foreground text-[22px] font-bold">{t.name}</h3>
                    <p className="text-primary text-[14px] font-medium uppercase tracking-wider mb-3">{t.role}</p>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{t.highlights}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-fade-up stagger-4 mt-6 flex gap-5">
              <div className="flex-1 bg-primary/10 border border-primary/20 rounded-xl p-5">
                <p className="text-foreground text-[14px]">
                  <span className="font-bold text-primary">Partner Equity:</span> Josh Garret & Rick Villanueva hold 5% equity each (10% total) with 3–5 year performance-based vesting, plus 10–20% commission on specialty service revenue. Partner equity is separate from the investor round.
                </p>
              </div>
              <div className="flex-1 bg-secondary/50 border border-border rounded-xl p-5">
                <p className="text-foreground text-[14px]">
                  <span className="font-semibold">Coaches & Trainers:</span> Specialists across 20+ disciplines, martial arts, dance, conditioning, and film stunt coordination — to be recruited.
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
        <img src={heroAtlanta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Why Atlanta</p>
              <h2 className="animate-fade-up stagger-2 text-[64px] font-bold leading-[1] text-foreground mb-14">
                The Perfect City to<br />Launch <span className="text-primary">Iron Form</span>
              </h2>
              <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-8">
                {reasons.map((r, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-primary text-[48px] font-bold leading-none opacity-50">{r.num}</span>
                    <div>
                      <h3 className="text-foreground text-[22px] font-bold mb-2">{r.title}</h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{r.desc}</p>
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


function SlideFilmIndustry({ active }: { active: boolean }) {
  const capabilities = [
    { icon: "🤸", label: "Spring Floors", desc: "Professional spring floor systems for stunts, acrobatics, and fight choreography" },
    { icon: "🏗️", label: "Gantry Wire Systems", desc: "Overhead gantry rigging for wire work, aerial stunts, and harness training" },
    { icon: "🟩", label: "Green Screen Stage", desc: "Full-scale green screen setup for VFX compositing and virtual environments" },
    { icon: "📡", label: "Motion Capture", desc: "Mo-cap capability for digital performance capture and animation pre-production" },
    { icon: "🎥", label: "Filming & Previz", desc: "On-site filming options for rehearsals, previsualization, and action sequence development" },
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
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Film & Stunt Wing</p>
              <h2 className="animate-fade-up stagger-2 text-[56px] font-bold leading-[1] text-foreground mb-4">
                Where Action<br />Meets <span className="text-primary">Production</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[16px] mb-10 leading-relaxed max-w-[600px]">
                Actors, stunt performers, and circus artists train at Iron Form. Productions rent dedicated space for rehearsals, previsualization, and action design. We're also exploring partnerships with Cirque du Soleil for training residencies during their Atlanta shows.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-2 gap-4">
                {capabilities.map((c, i) => (
                  <div key={i} className="bg-secondary border border-border rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[24px]">{c.icon}</span>
                      <h3 className="text-foreground text-[16px] font-semibold">{c.label}</h3>
                    </div>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">{c.desc}</p>
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
                Forging Elite Performers.<br />Empowering Every Athlete.
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
  // ACT 1: Hook — Who & Why
  { component: SlideCover, title: "Cover" },
  { component: SlideProblem, title: "Problem" },
  { component: SlideSolution, title: "Solution" },
  { component: SlideTeam, title: "Team" },
  { component: SlideTraction, title: "Traction" },

  // ACT 2: Market Validation
  { component: SlideMarket, title: "Market Opportunity" },
  { component: SlideWhyAtlanta, title: "Why Atlanta" },
  { component: SlideCompetitiveAnalysis, title: "Competitive Analysis" },

  // ACT 3: The Product
  { component: SlideServices, title: "Services & Differentiators" },
  { component: SlideDisciplines, title: "Disciplines" },
  { component: SlideFacilityLayout, title: "Facility Layout" },
  { component: SlideFilmIndustry, title: "Film & Stunt" },

  // ACT 4: Business Model & Financials
  { component: SlideRevenueDetailed, title: "Revenue Breakdown" },
  { component: SlideFinancialProjections, title: "Financial Overview" },
  { component: SlideUseOfFundsDetailed, title: "Use of Funds" },
  { component: SlideMarketingStrategy, title: "Marketing" },

  // ACT 5: Impact & The Ask
  { component: SlideCommunityOutreach, title: "Community Impact" },
  { component: SlideInvestmentAsk, title: "The Ask" },

  // ACT 6: Execution & Close
  { component: SlideTimeline, title: "Timeline" },
  { component: SlideRiskManagement, title: "Risk Management" },
  { component: SlideLongTermVision, title: "Vision" },
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
