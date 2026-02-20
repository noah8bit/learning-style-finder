import PptxGenJS from "pptxgenjs";

const BG = "0F0F0F";
const PRIMARY = "FF8C00";
const ACCENT = "33B2A0";
const FG = "F2F2F2";
const MUTED = "8C8C8C";
const DARK_CARD = "1A1A1A";
const CARD_BORDER = "2E2E2E";

function addTitle(slide: PptxGenJS.Slide, label: string, title: string, highlight: string, opts?: { titleSize?: number }) {
  slide.addText(label, { x: 1, y: 0.5, w: 8, h: 0.4, fontSize: 11, color: PRIMARY, fontFace: "Arial", bold: true, charSpacing: 5 });
  slide.addText([
    { text: title + " ", options: { color: FG } },
    { text: highlight, options: { color: PRIMARY } },
  ], { x: 1, y: 0.9, w: 8, h: 0.7, fontSize: 32, fontFace: "Arial", bold: true });
}

function addCards(slide: PptxGenJS.Slide, items: { title: string; desc: string }[], cols: number, startY: number) {
  const cardW = (8.5 - (cols - 1) * 0.2) / cols;
  items.forEach((item, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.75 + col * (cardW + 0.2);
    const y = startY + row * 1.6;
    slide.addShape("rect" as any, { x, y, w: cardW, h: 1.4, fill: { color: "1A1A1A" }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.1 });
    slide.addText(item.title, { x: x + 0.15, y: y + 0.1, w: cardW - 0.3, h: 0.35, fontSize: 12, color: FG, fontFace: "Arial", bold: true });
    slide.addText(item.desc, { x: x + 0.15, y: y + 0.45, w: cardW - 0.3, h: 0.85, fontSize: 9, color: MUTED, fontFace: "Arial", valign: "top" });
  });
}

export async function exportPptx() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "WIDE", width: 10, height: 5.625 });
  pptx.layout = "WIDE";
  pptx.author = "Iron Form";
  pptx.title = "Iron Form – Investor Pitch Deck";

  // ── 1. Cover ─────────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText("Est. 2026 · Atlanta, GA", { x: 1, y: 1.5, w: 8, h: 0.4, fontSize: 12, color: PRIMARY, fontFace: "Arial", bold: true, charSpacing: 5 });
    s.addText([
      { text: "IRON\n", options: { color: FG } },
      { text: "FORM", options: { color: PRIMARY } },
    ], { x: 1, y: 2, w: 8, h: 1.6, fontSize: 64, fontFace: "Arial", bold: true, lineSpacingMultiple: 0.85 });
    s.addText("Atlanta's Premier High-Performance Training & Rehab Facility", { x: 1, y: 3.7, w: 7, h: 0.5, fontSize: 16, color: MUTED, fontFace: "Arial" });
    s.addText("Investor Pitch Deck · Concept Stage · 2026", { x: 1, y: 4.3, w: 5, h: 0.3, fontSize: 11, color: MUTED, fontFace: "Arial" });
  }

  // ── 2. Problem ───────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "THE PROBLEM", "Every Athlete Deserves", "Elite-Level Support");
    const problems = [
      { title: "⚡ Fragmented Resources", desc: "Athletes travel between multiple facilities — wasting time and disrupting schedules." },
      { title: "🏅 No Cross-Training Hub", desc: "No single Atlanta destination for multi-sport training, rehab, recovery, and coaching." },
      { title: "💰 Access & Affordability", desc: "Elite-level tools reserved for premium pricing. Iron Form levels the playing field." },
      { title: "🌟 Community Outreach", desc: "Financial barriers shouldn't prevent gifted athletes from reaching full potential." },
    ];
    problems.forEach((p, i) => {
      s.addText(p.title, { x: 1, y: 1.8 + i * 0.85, w: 8, h: 0.3, fontSize: 13, color: FG, fontFace: "Arial", bold: true });
      s.addText(p.desc, { x: 1, y: 2.1 + i * 0.85, w: 8, h: 0.4, fontSize: 10, color: MUTED, fontFace: "Arial" });
    });
  }

  // ── 3. Solution ──────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "THE SOLUTION", "Train Better. Recover Faster.", "Go Further.");
    s.addText("A comprehensive high-performance campus built for aspiring and elite athletes — integrated rehabilitation, recovery science, and medical services, all under one roof.", { x: 1, y: 1.7, w: 8, h: 0.5, fontSize: 11, color: MUTED, fontFace: "Arial" });
    const features = ["30+ Sport Disciplines", "Neuromuscular Therapy", "Peptide Wellness Clinic", "Sauna & Cold Plunge", "Olympic Swimming Lanes", "Athlete & Coach Seminars", "Grants & Sponsorships", "Film & Stunt Wing"];
    addCards(s, features.map(f => ({ title: f, desc: "" })), 4, 2.5);
  }

  // ── 4. Team ──────────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "TEAM & CREDENTIALS", "The Team Behind", "Iron Form");
    const team = [
      { title: "Noah Garret — Founder & Director", desc: "3° Black Belt ITF TKD · 10+ yrs athletic training · 15+ yrs film industry · 2x SAG-nominated stunt performer" },
      { title: "Rick Villanueva, LMT — NMT Director", desc: "18+ yrs neuromuscular therapy · Pro athletes, stunt performers, CrossFit competitors" },
      { title: "Josh Garret — Peptide Clinic Director", desc: "Performance wellness & recovery protocols · Sports medicine background" },
      { title: "Operations Manager — Target Hire", desc: "Grant writing · Insurance negotiation · Athlete sponsorship management" },
    ];
    addCards(s, team, 2, 1.8);
  }

  // ── 5. Traction ──────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "EARLY VALIDATION", "Traction &", "Momentum");
    const items = [
      { title: "150+ Waitlist Signups", desc: "Pre-launch interest from athletes and families across metro Atlanta (target)" },
      { title: "3 Letters of Intent", desc: "In-progress LOIs from local sports organizations (target)" },
      { title: "5 Partnership Discussions", desc: "Active conversations with insurance, schools, corporate wellness" },
      { title: "2 Industry Advisors", desc: "Atlanta sports medicine and film stunt coordination advisors" },
    ];
    addCards(s, items, 4, 2.0);
  }

  // ── 6. Market Opportunity ────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "MARKET OPPORTUNITY", "A Massive, Underserved", "Athletic Performance Market");
    const stats = [
      { title: "$100B+", desc: "Global Health & Fitness Industry — ~7% CAGR" },
      { title: "$10B+", desc: "Sports Medicine Market — projected $15B by 2032" },
      { title: "80%", desc: "Americans physically active — 247M in 2024" },
      { title: "6M+", desc: "Atlanta metro population — #1 U.S. film state" },
      { title: "↑ Cross-Training", desc: "Multi-training demand accelerating" },
      { title: "#1 First-Mover", desc: "No SE competitor matches this model" },
    ];
    addCards(s, stats, 3, 2.0);
  }

  // ── 7. Why Atlanta ───────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "WHY ATLANTA", "The Perfect City to Launch", "Iron Form");
    const reasons = [
      { title: "01 — Thriving Sports Culture", desc: "Home to Falcons, Hawks, Braves, Atlanta United — plus massive youth athletics." },
      { title: "02 — Underserved Market", desc: "No true integrated training & rehab destination for serious athletes." },
      { title: "03 — #1 Film State", desc: "Georgia ranks #1 in U.S. film & TV production, driving demand for stunt training." },
      { title: "04 — Growing Population", desc: "6M+ metro includes athletes, fitness pros, military, law enforcement, film talent." },
    ];
    addCards(s, reasons, 2, 1.8);
  }

  // ── 8. Competitive Analysis ──────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "COMPETITIVE LANDSCAPE", "How Iron Form", "Stands Apart");
    const features = ["30+ Sport Disciplines", "Integrated Medical/Rehab", "Film & Stunt Wing", "Recovery Tech Suite", "Community Outreach", "Tiered Pricing", "Performance Analytics", "Youth Development"];
    const comps = [
      { name: "Iron Form", scores: [true, true, true, true, true, true, true, true] },
      { name: "IMG Academy", scores: [true, true, false, true, false, false, true, true] },
      { name: "EXOS", scores: [false, true, false, true, false, false, true, false] },
      { name: "D1 Training", scores: [false, true, false, false, true, true, false, true] },
      { name: "Plex", scores: [true, false, false, false, false, true, false, true] },
    ];
    const rows: PptxGenJS.TableRow[] = [
      [{ text: "Feature", options: { bold: true, color: FG, fill: { color: "242424" } } }, ...comps.map(c => ({ text: c.name, options: { bold: true, color: c.name === "Iron Form" ? PRIMARY : FG, fill: { color: "242424" }, align: "center" as const } }))],
      ...features.map((f, fi) => [
        { text: f, options: { color: FG, fill: { color: fi % 2 === 0 ? "1A1A1A" : BG } } },
        ...comps.map(c => ({ text: c.scores[fi] ? "✓" : "✕", options: { color: c.scores[fi] ? (c.name === "Iron Form" ? PRIMARY : "66CC66") : "555555", align: "center" as const, fill: { color: fi % 2 === 0 ? "1A1A1A" : BG } } })),
      ] as PptxGenJS.TableRow),
    ];
    s.addTable(rows, { x: 0.5, y: 1.8, w: 9, fontSize: 9, color: MUTED, border: { type: "solid", color: CARD_BORDER, pt: 0.5 } });
  }

  // ── 9. Services & Differentiators ────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "SERVICES & DIFFERENTIATORS", "What Makes Iron Form", "Different");
    const diffs = [
      { title: "🏥 Integrated Medical & Recovery", desc: "Neuromuscular therapy and peptide clinics on-site." },
      { title: "🏋 30+ Training Disciplines", desc: "One-stop hub: martial arts, track, swimming, dance, more." },
      { title: "🎬 Film & Stunt Wing", desc: "High-ceiling rigging, green screen, mo-cap in GA's #1 film market." },
      { title: "🌍 Community Outreach", desc: "Scouting and mentoring undiscovered talent." },
      { title: "💰 Diverse Revenue Streams", desc: "Memberships, team retainment, insurance, film, events." },
      { title: "⚡ Recovery Tech Suite", desc: "Cryo, infrared, PEMF, Normatec, sauna & cold plunge." },
    ];
    addCards(s, diffs, 2, 1.8);
  }

  // ── 10. Disciplines ──────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "CROSS-TRAINING MEDIUMS", "30+", "Disciplines Under One Roof");
    const cats = [
      "Martial Arts & Combat: TKD, Karate, Jiu-Jitsu, Muay Thai, Kickboxing, Wing Chun, Boxing, Silat, JKD, Wrestling",
      "Weapons & Combat: Fencing, Kendo, HEMA Sword Fighting",
      "Dance & Acrobatics: Ballet, Hip Hop, Contemporary, Jazz, Tap, Gymnastics & Tumbling",
      "Field & Court: Basketball, Soccer, Volleyball, Football, Baseball & Softball, Lacrosse",
      "Athletic Performance: Track & Field, CrossFit, Hyrox, Rowing & Erging",
      "Specialty: Rock Climbing, Stunt Training, Cycling, Pilates, Yoga, Golf Sim, Olympic Swimming",
    ];
    cats.forEach((c, i) => {
      const [title, ...rest] = c.split(": ");
      s.addText(title, { x: i < 3 ? 0.75 : 5.25, y: 1.8 + (i % 3) * 1.2, w: 4, h: 0.3, fontSize: 12, color: i % 2 === 0 ? PRIMARY : ACCENT, fontFace: "Arial", bold: true });
      s.addText(rest.join(": "), { x: i < 3 ? 0.75 : 5.25, y: 2.1 + (i % 3) * 1.2, w: 4, h: 0.7, fontSize: 9, color: MUTED, fontFace: "Arial" });
    });
  }

  // ── 11. Facility Layout ──────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "FACILITY DESIGN", "Facility", "Zone Map");
    const zones = [
      "Main Training Floor — 15,000 sq ft", "Track & Field Complex — 8,000 sq ft",
      "Cross-Training Arena — 6,000 sq ft", "Indoor Courts — 8,000 sq ft",
      "Swimming Center — 5,000 sq ft", "Film & Stunt Wing — 6,000 sq ft",
      "Recovery Wing — 4,000 sq ft", "Medical Suite — 2,500 sq ft",
      "Seminar & Events Hall — 2,500 sq ft", "Golf & Specialty — 3,000 sq ft",
      "Outdoor Fields — Adjacent Acreage",
    ];
    zones.forEach((z, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      s.addText(z, { x: 0.75 + col * 4.5, y: 1.8 + row * 0.6, w: 4.2, h: 0.5, fontSize: 10, color: FG, fontFace: "Arial" });
    });
    s.addText("Total Indoor: 60,000+ sq ft  |  11 Distinct Zones  |  30+ Disciplines  |  8+ Recovery Modalities", { x: 0.75, y: 5, w: 8.5, h: 0.3, fontSize: 9, color: PRIMARY, fontFace: "Arial", bold: true });
  }

  // ── 12. Film & Stunt ─────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "FILM & STUNT WING", "Where Action Meets", "Production");
    s.addText("Actors and stunt performers train at Iron Form. Productions rent dedicated space for rehearsals, previsualization, and action design — all within Atlanta's booming film ecosystem.", { x: 1, y: 1.7, w: 8, h: 0.5, fontSize: 11, color: MUTED, fontFace: "Arial" });
    const caps = [
      { title: "Spring Floors", desc: "Professional systems for stunts, acrobatics, fight choreography" },
      { title: "Gantry Wire Systems", desc: "Overhead rigging for wire work, aerial stunts, harness training" },
      { title: "Green Screen Stage", desc: "Full-scale for VFX compositing and virtual environments" },
      { title: "Motion Capture", desc: "Mo-cap for digital performance capture and animation" },
      { title: "Filming & Previz", desc: "On-site filming for rehearsals and action sequence development" },
      { title: "Production Rentals", desc: "Hourly and project-based space rental for studios" },
    ];
    addCards(s, caps, 3, 2.5);
  }

  // ── 13. Revenue Breakdown ────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "REVENUE BREAKDOWN", "Projected Annual", "Revenue");
    const core = [
      "Monthly Memberships: $360K – $540K (150 avg @ $200–$300/mo)",
      "Team Retainments: $100K (5 teams × $20K/season)",
      "Insurance Partnerships: $50K (covered therapy & rehab)",
      "Facility Rentals: $104K ($2K/week × 52 weeks)",
    ];
    const enhanced = [
      "Camps & Seminars: $96K (4 camps + 6 seminars)",
      "Corporate Wellness: $300K (5 clients × $5K/mo avg)",
      "Premium & Retail: $84K (PT sessions, merch, referrals)",
    ];
    s.addText("CORE STREAMS", { x: 1, y: 1.7, w: 4, h: 0.3, fontSize: 11, color: PRIMARY, fontFace: "Arial", bold: true, charSpacing: 3 });
    core.forEach((c, i) => s.addText(c, { x: 1, y: 2.1 + i * 0.4, w: 8, h: 0.35, fontSize: 10, color: FG, fontFace: "Arial" }));
    s.addText("ENHANCED STREAMS", { x: 1, y: 3.8, w: 4, h: 0.3, fontSize: 11, color: ACCENT, fontFace: "Arial", bold: true, charSpacing: 3 });
    enhanced.forEach((c, i) => s.addText(c, { x: 1, y: 4.2 + i * 0.4, w: 8, h: 0.35, fontSize: 10, color: FG, fontFace: "Arial" }));
    s.addShape("rect" as any, { x: 6.5, y: 1.7, w: 3, h: 0.8, fill: { color: "1A1A1A" }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.1 });
    s.addText([{ text: "Year 1 Total: ", options: { color: MUTED } }, { text: "$1.09M – $1.27M", options: { color: PRIMARY, bold: true } }], { x: 6.6, y: 1.8, w: 2.8, h: 0.6, fontSize: 13, fontFace: "Arial", align: "center" });
  }

  // ── 14. Financial Projections ────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "FINANCIAL OVERVIEW", "Investment, Costs &", "Projected Returns");
    const costs = ["Land: $1.5M–$2M", "Construction (60K sqft): $5.5M–$7M", "Equipment: $2M–$2.5M", "Tech & App: $750K–$1M", "Marketing/Legal: $500K–$750K", "Contingency: $750K"];
    s.addText("START-UP COSTS", { x: 0.75, y: 1.7, w: 3.5, h: 0.3, fontSize: 11, color: PRIMARY, fontFace: "Arial", bold: true, charSpacing: 3 });
    costs.forEach((c, i) => s.addText(c, { x: 0.75, y: 2.1 + i * 0.35, w: 3.5, h: 0.3, fontSize: 10, color: FG, fontFace: "Arial" }));
    s.addText("Total Start-Up: $11M – $14M", { x: 0.75, y: 4.3, w: 3.5, h: 0.3, fontSize: 12, color: PRIMARY, fontFace: "Arial", bold: true });

    s.addText("ANNUAL PROJECTIONS", { x: 5, y: 1.7, w: 4.5, h: 0.3, fontSize: 11, color: ACCENT, fontFace: "Arial", bold: true, charSpacing: 3 });
    const proj = [
      "Year 1 — Revenue: $1.09M–$1.27M | Net: $190K–$670K",
      "Year 2 — Revenue: $1.8M–$2.4M | Net: $700K–$1.3M",
      "Year 3 — Revenue: $2.4M–$3.2M | Net: $1.2M–$2.0M",
    ];
    proj.forEach((p, i) => s.addText(p, { x: 5, y: 2.1 + i * 0.4, w: 4.5, h: 0.35, fontSize: 10, color: FG, fontFace: "Arial" }));
    const roi = ["Break-Even: 24–36 months", "Year 3 Net: $1.2M–$2.0M", "5-Year Cumulative: $5M–$8M", "Payback: 5–8 years"];
    roi.forEach((r, i) => {
      s.addShape("rect" as any, { x: 5 + i * 1.15, y: 3.6, w: 1.05, h: 0.7, fill: { color: "1A1A1A" }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.05 });
      s.addText(r, { x: 5 + i * 1.15, y: 3.65, w: 1.05, h: 0.6, fontSize: 7, color: FG, fontFace: "Arial", align: "center", valign: "middle" });
    });
  }

  // ── 15. Use of Funds ─────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "INVESTMENT ALLOCATION", "Use of Funds", "Detailed");
    const funds = [
      { pct: "42%", dollar: "$5M", title: "Construction & Land" },
      { pct: "25%", dollar: "$3M", title: "Equipment & Specialty" },
      { pct: "13%", dollar: "$1.5M", title: "Year 1 Operations & Team" },
      { pct: "8%", dollar: "$1M", title: "App Platform & Technology" },
      { pct: "6%", dollar: "$750K", title: "Marketing & Launch" },
      { pct: "6%", dollar: "$750K", title: "Contingency Reserve" },
    ];
    funds.forEach((f, i) => {
      const y = 1.8 + i * 0.55;
      s.addShape("rect" as any, { x: 0.75, y, w: 8.5, h: 0.45, fill: { color: i % 2 === 0 ? "1F1200" : "0D1F1A" }, line: { color: i % 2 === 0 ? "4D3000" : "1A4D40", width: 1 }, rectRadius: 0.05 });
      s.addText(f.pct, { x: 0.85, y, w: 0.7, h: 0.45, fontSize: 14, color: i % 2 === 0 ? PRIMARY : ACCENT, fontFace: "Arial", bold: true, valign: "middle" });
      s.addText(f.title, { x: 1.7, y, w: 5, h: 0.45, fontSize: 11, color: FG, fontFace: "Arial", bold: true, valign: "middle" });
      s.addText(f.dollar, { x: 7.5, y, w: 1.5, h: 0.45, fontSize: 12, color: i % 2 === 0 ? PRIMARY : ACCENT, fontFace: "Arial", bold: true, align: "right", valign: "middle" });
    });
  }

  // ── 16. Marketing Strategy ───────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "GO-TO-MARKET", "Marketing", "Strategy");
    const channels = [
      { title: "Digital", items: "Social Media · Website & SEO · Paid Advertising" },
      { title: "Celebrity & Influencer", items: "Celebrity Partnerships · Influencer Collabs · Athlete Endorsements" },
      { title: "Offline & Community", items: "Local Partnerships · Community Events · Referral & PR" },
    ];
    channels.forEach((c, i) => {
      const x = 0.75 + i * 3;
      s.addText(c.title, { x, y: 1.8, w: 2.8, h: 0.35, fontSize: 12, color: i === 0 ? PRIMARY : i === 1 ? ACCENT : FG, fontFace: "Arial", bold: true });
      s.addText(c.items, { x, y: 2.2, w: 2.8, h: 0.8, fontSize: 9, color: MUTED, fontFace: "Arial" });
    });
    const campaigns = [
      { phase: "Pre-Launch (6 mo)", items: "Social media teasers · Email waitlist · Partner announcements · Influencer walk-throughs" },
      { phase: "Launch Month", items: "Invite-only soft launch (50 members) · Grand opening event · Free community day · Media blitz" },
      { phase: "Growth (Yr 1)", items: "Referral program · Corporate wellness pilots · Quarterly youth festivals · Monthly athlete spotlights" },
    ];
    campaigns.forEach((c, i) => {
      const x = 0.75 + i * 3;
      s.addShape("rect" as any, { x, y: 3.3, w: 2.8, h: 1.8, fill: { color: DARK_CARD }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.1 });
      s.addText(c.phase, { x: x + 0.1, y: 3.4, w: 2.6, h: 0.3, fontSize: 10, color: i === 0 ? ACCENT : i === 1 ? PRIMARY : FG, fontFace: "Arial", bold: true });
      s.addText(c.items, { x: x + 0.1, y: 3.75, w: 2.6, h: 1.2, fontSize: 8, color: MUTED, fontFace: "Arial", valign: "top" });
    });
  }

  // ── 17. Community Impact ─────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "COMMUNITY IMPACT", "Every Athlete", "Deserves a Chance");
    s.addText("Iron Form actively scouts and mentors gifted athletes in underserved communities — because financial barriers should never prevent talent from reaching its full potential.", { x: 1, y: 1.7, w: 8, h: 0.4, fontSize: 10, color: MUTED, fontFace: "Arial" });
    const strats = [
      { title: "Talent Scouting", desc: "Scouts attend local tournaments and school events." },
      { title: "School Partnerships", desc: "After-school programs and discounted memberships." },
      { title: "Non-Profit Collaborations", desc: "Boys & Girls Clubs, YMCA, local sports foundations." },
      { title: "Free Health Screenings", desc: "Quarterly community health days." },
      { title: "Scholarship Fund", desc: "Grant-funded training for low-income athletes." },
      { title: "Community Events", desc: "Free open-house days and family sports festivals." },
    ];
    addCards(s, strats, 3, 2.3);
  }

  // ── 18. The Ask ──────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "THE ASK", "Raising", "$12M");
    s.addText("Full capital for a ground-up 60,000+ sq ft world-class athletic facility — milestone-gated tranches that de-risk your investment.", { x: 1, y: 1.7, w: 8, h: 0.4, fontSize: 10, color: MUTED, fontFace: "Arial" });
    const tranches = [
      { phase: "Tranche 1 — $5M", trigger: "At close", use: "Land acquisition, construction start, permits, core team" },
      { phase: "Tranche 2 — $4.75M", trigger: "Construction 50%", use: "Equipment, pool, tech platform, marketing launch" },
      { phase: "Tranche 3 — $2.25M", trigger: "Doors open", use: "Year 1 operating runway, fit-out, contingency, growth" },
    ];
    tranches.forEach((t, i) => {
      const y = 2.3 + i * 0.75;
      s.addShape("rect" as any, { x: 0.75, y, w: 5, h: 0.65, fill: { color: i % 2 === 0 ? "1F1200" : "0D1F1A" }, line: { color: i % 2 === 0 ? "4D3000" : "1A4D40", width: 1 }, rectRadius: 0.05 });
      s.addText(t.phase, { x: 0.85, y, w: 2.5, h: 0.3, fontSize: 12, color: i % 2 === 0 ? PRIMARY : ACCENT, fontFace: "Arial", bold: true });
      s.addText(`Trigger: ${t.trigger} — ${t.use}`, { x: 0.85, y: y + 0.3, w: 4.8, h: 0.3, fontSize: 8, color: MUTED, fontFace: "Arial" });
    });
    // Equity tiers
    s.addText("TIERED EQUITY STRUCTURE", { x: 6, y: 2.3, w: 3.5, h: 0.3, fontSize: 11, color: ACCENT, fontFace: "Arial", bold: true, charSpacing: 3 });
    const tiers = [
      "$1M–$3M → 3–6% equity | Board observer",
      "$3M–$6M → 6–12% equity | Board seat",
      "$6M+ → 12–18% equity | Co-governance",
    ];
    tiers.forEach((t, i) => s.addText(t, { x: 6, y: 2.7 + i * 0.35, w: 3.5, h: 0.3, fontSize: 9, color: FG, fontFace: "Arial" }));
    s.addText("Investor equity capped at 20%. Founder retains 70%+ ownership and full operational control.", { x: 6, y: 3.9, w: 3.5, h: 0.5, fontSize: 8, color: MUTED, fontFace: "Arial" });
  }

  // ── 19. Timeline ─────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "IMPLEMENTATION ROADMAP", "From Concept to", "Launch");
    const milestones = [
      { q: "Q1 2026", title: "Foundation", items: "Secure land · Begin design · Form entity" },
      { q: "Q2–Q3 2026", title: "Build-Out", items: "Break ground · Order equipment · Hiring" },
      { q: "Q4 2026", title: "Construction", items: "Recruit coaches · Install recovery tech · Beta app" },
      { q: "Q1 2027", title: "Fit-Out", items: "Equipment install · Safety certs · Marketing blitz" },
      { q: "Q2 2027", title: "Soft Launch", items: "Invite-only (50) · Partner onboarding · Outreach" },
      { q: "Q3 2027", title: "Grand Opening", items: "Full public launch · First camps · Film wing active" },
    ];
    milestones.forEach((m, i) => {
      const x = 0.5 + i * 1.55;
      s.addShape("rect" as any, { x, y: 2.0, w: 1.45, h: 2.5, fill: { color: DARK_CARD }, line: { color: CARD_BORDER, width: 1 }, rectRadius: 0.1 });
      s.addText(m.q, { x, y: 2.05, w: 1.45, h: 0.3, fontSize: 8, color: PRIMARY, fontFace: "Arial", bold: true, align: "center" });
      s.addText(m.title, { x, y: 2.35, w: 1.45, h: 0.3, fontSize: 10, color: FG, fontFace: "Arial", bold: true, align: "center" });
      s.addText(m.items, { x: x + 0.05, y: 2.7, w: 1.35, h: 1.7, fontSize: 7, color: MUTED, fontFace: "Arial", valign: "top" });
    });
  }

  // ── 20. Risk Management ──────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "RISK ASSESSMENT", "Risks &", "Mitigation Plans");
    const risks = [
      { risk: "Market Competition (Med)", mit: "First-mover advantage. No competitor offers 30+ sports, medical, and film wing." },
      { risk: "Economic Downturn (Med)", mit: "Diversified revenue. Insurance and grants provide recession-resistant income." },
      { risk: "Construction Delays (High)", mit: "Phased build-out allows partial ops. 6% contingency reserve ($750K)." },
      { risk: "Staffing Challenges (Med)", mit: "Competitive pay + commission. Atlanta's deep sports and film talent pool." },
      { risk: "Regulatory & Licensing (Low)", mit: "Legal counsel engaged early. Experienced ops manager for compliance." },
      { risk: "Low Initial Membership (Med)", mit: "Pre-launch marketing, community partnerships, invite-only soft launch." },
    ];
    risks.forEach((r, i) => {
      const y = 1.8 + i * 0.6;
      s.addText(r.risk, { x: 0.75, y, w: 3, h: 0.25, fontSize: 10, color: FG, fontFace: "Arial", bold: true });
      s.addText(r.mit, { x: 0.75, y: y + 0.25, w: 8.5, h: 0.3, fontSize: 9, color: MUTED, fontFace: "Arial" });
    });
  }

  // ── 21. Vision ───────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    addTitle(s, "LONG-TERM VISION", "Building an Athletic", "Ecosystem");
    const visions = [
      { title: "Multi-Location Expansion", desc: "Network of training centers across major cities." },
      { title: "Seasonal Camps & Youth Programs", desc: "Pro athlete-led camps, structured youth development." },
      { title: "Holistic Wellness Integration", desc: "Nutrition, mental health, biofeedback, personalized recovery." },
      { title: "Grants & Scholarships", desc: "Financial support for underserved athletes." },
    ];
    addCards(s, visions, 4, 1.8);
    s.addText("EXIT STRATEGY & INVESTOR RETURNS", { x: 0.75, y: 3.5, w: 8.5, h: 0.3, fontSize: 11, color: ACCENT, fontFace: "Arial", bold: true, charSpacing: 3 });
    const exits = [
      { title: "Franchise Model", desc: "Proven playbook replicated across 10+ metros by Year 7." },
      { title: "Strategic Acquisition", desc: "Positioned for national fitness brands or healthcare networks." },
      { title: "Investor Returns", desc: "Projected 3–5x return within 5–7 years." },
    ];
    addCards(s, exits, 3, 3.9);
  }

  // ── 22. Closing ──────────────────────────────────────────
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    s.addText([
      { text: "IRON ", options: { color: FG } },
      { text: "FORM", options: { color: PRIMARY } },
    ], { x: 1, y: 1.2, w: 8, h: 1.2, fontSize: 56, fontFace: "Arial", bold: true, align: "center" });
    s.addShape("rect" as any, { x: 4.5, y: 2.5, w: 1, h: 0.04, fill: { color: PRIMARY } });
    s.addText("Forging Elite Performers.\nEmpowering Every Athlete.", { x: 1, y: 2.7, w: 8, h: 0.8, fontSize: 18, color: MUTED, fontFace: "Arial", align: "center" });
    s.addShape("rect" as any, { x: 2.5, y: 3.6, w: 5, h: 1.3, fill: { color: "1F1200" }, line: { color: "4D3000", width: 1 }, rectRadius: 0.1 });
    s.addText("Let's Build This Together", { x: 2.7, y: 3.7, w: 4.6, h: 0.35, fontSize: 14, color: FG, fontFace: "Arial", bold: true, align: "center" });
    s.addText("Schedule a meeting to discuss partnership opportunities, investment details, and the future of Iron Form.", { x: 2.7, y: 4.1, w: 4.6, h: 0.4, fontSize: 10, color: MUTED, fontFace: "Arial", align: "center" });
    s.addText("Ready to forge the future of athletic training?", { x: 2.7, y: 4.5, w: 4.6, h: 0.3, fontSize: 11, color: PRIMARY, fontFace: "Arial", bold: true, align: "center" });
    s.addText("Atlanta, Georgia · 2026 · Concept Stage", { x: 1, y: 5.1, w: 8, h: 0.3, fontSize: 10, color: PRIMARY, fontFace: "Arial", align: "center", charSpacing: 3 });
  }

  // ── Customer Personas (bonus — inserted after slide 8) ──
  // Note: Already covered in the 22 slides above. Partnerships slide also included in flow.

  await pptx.writeFile({ fileName: "Iron_Form_Pitch_Deck.pptx" });
}
