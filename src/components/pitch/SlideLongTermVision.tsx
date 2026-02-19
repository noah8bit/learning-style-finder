import heroFacility from "@/assets/pitch/hero-facility-v2.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideLongTermVision({ active }: { active: boolean }) {
  const visions = [
    { icon: "🏢", title: "Multi-Location Expansion", desc: "Multiple locations throughout Atlanta and eventually other major cities — a network of high-performance training centers." },
    { icon: "🏕️", title: "Seasonal Camps & Youth Programs", desc: "Pro athlete-led camps, structured youth development programs with mentorship and resources." },
    { icon: "🧬", title: "Holistic Wellness Integration", desc: "Nutrition counseling, mental health resources, biofeedback, and personalized recovery plans." },
    { icon: "🎓", title: "Grants & Scholarships", desc: "Financial support programs for underserved athletes — ensuring access to top-tier training." },
    { icon: "🏆", title: "Annual Tournaments & Festivals", desc: "Inter-facility competitions, health festivals with workshops, demonstrations, and vendor opportunities." },
    { icon: "🏛️", title: "Corporate Wellness Programs", desc: "Tailored wellness programs for businesses — team-building, health assessments, and discounted memberships." },
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroFacility} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[120px]">
          {active && (
            <>
              <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Long-Term Vision</p>
              <h2 className="animate-fade-up stagger-2 text-[60px] font-bold leading-[1] text-foreground mb-6">
                Building an Athletic <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="animate-fade-up stagger-3 text-muted-foreground text-[18px] max-w-[800px] mb-12 leading-relaxed">
                Iron Form will establish itself not only as a premier training facility but as an integral part of the athletic community in Atlanta and beyond.
              </p>
              <div className="animate-fade-up stagger-4 grid grid-cols-3 gap-5">
                {visions.map((v, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <span className="text-[28px] mb-3 block">{v.icon}</span>
                    <h3 className="text-foreground text-[18px] font-semibold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-[14px] leading-relaxed">{v.desc}</p>
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
