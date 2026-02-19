import heroYouthSports from "@/assets/pitch/hero-youth-sports.jpg";
import ScaledSlide from "./ScaledSlide";

export default function SlideCommunityOutreach({ active }: { active: boolean }) {
  const tags = [
    "Scouting Undiscovered Talent",
    "Youth Mentorship Programs",
    "School & Org Partnerships",
    "Social Equity & Access",
    "Health & Wellness Promotion",
    "Sustainable Community Impact",
    "CSR-Aligned Mission",
    "Future Leaders in Sport",
    "Grant-Funded Accessibility",
    "Positive Brand Identity",
  ];

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={heroYouthSports} alt="Youth sports program" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-[160px] text-center">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-8">Community Impact</p>
            <h2 className="animate-fade-up stagger-2 text-[80px] font-bold leading-[0.95] text-foreground mb-6">
              Every Athlete<br />
              <span className="text-primary">Deserves a Chance</span>
            </h2>
            <p className="animate-fade-up stagger-3 text-muted-foreground text-[20px] max-w-[800px] leading-relaxed mb-14">
              Iron Form actively scouts and mentors gifted athletes in underserved communities — because financial barriers should never prevent talent from reaching its full potential.
            </p>
            <div className="animate-fade-up stagger-4 flex flex-wrap justify-center gap-3 max-w-[900px]">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-full text-[15px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="animate-fade-up stagger-5 mt-14 w-[80px] h-[3px] bg-primary/40 rounded-full" />
          </>
        )}
        </div>
      </div>
    </ScaledSlide>
  );
}
