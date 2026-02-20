import ScaledSlide from "./ScaledSlide";

export interface RevenueAssumption {
  label: string;
  value: string;
}

export interface RevenueStreamData {
  icon: string;
  title: string;
  subtitle: string;
  total: string;
  type: "core" | "enhanced";
  description: string;
  assumptions: RevenueAssumption[];
  formula: string;
  defensibility: string;
  heroImage: string;
}

export default function SlideRevenueStream({ active, data }: { active: boolean; data: RevenueStreamData }) {
  const borderColor = data.type === "core" ? "border-primary/40" : "border-accent/40";
  const textColor = data.type === "core" ? "text-primary" : "text-accent";
  const bgHighlight = data.type === "core" ? "bg-primary/10" : "bg-accent/10";
  const badge = data.type === "core" ? "Core" : "Enhanced";

  return (
    <ScaledSlide>
      <div className="relative w-full h-full">
        <img src={data.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col justify-center h-full px-[100px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)' }}>
          {active && (
            <>
              <div className="animate-fade-up stagger-1 flex items-center gap-4 mb-2">
                <p className={`${textColor} font-medium tracking-[0.3em] uppercase text-[18px]`}>Revenue Deep Dive</p>
                <span className={`${bgHighlight} ${borderColor} border rounded-full px-4 py-1 text-[14px] ${textColor} font-bold uppercase tracking-wider`}>{badge}</span>
              </div>

              <h2 className="animate-fade-up stagger-2 text-[54px] font-bold leading-[1] text-white mb-2 flex items-center gap-5">
                <span className="text-[60px]">{data.icon}</span>
                <span>{data.title}</span>
              </h2>
              <p className="animate-fade-up stagger-2 text-muted-foreground text-[20px] mb-6">{data.subtitle}</p>

              <div className="animate-fade-up stagger-3 flex gap-8">
                {/* Left: Assumptions */}
                <div className="w-[520px] shrink-0">
                  <h3 className={`${textColor} text-[20px] font-bold mb-4 uppercase tracking-wider`}>Key Assumptions</h3>
                  <div className="space-y-2.5">
                    {data.assumptions.map((a, i) => (
                      <div key={i} className={`flex justify-between items-center bg-black/70 border ${borderColor} rounded-lg px-5 py-3`}>
                        <span className="text-white text-[18px]">{a.label}</span>
                        <span className={`${textColor} text-[18px] font-bold shrink-0 ml-4`}>{a.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Formula */}
                  <div className={`mt-4 ${bgHighlight} border ${borderColor} rounded-xl p-5`}>
                    <p className="text-muted-foreground text-[14px] uppercase tracking-wider font-bold mb-2">The Math</p>
                    <p className="text-white text-[18px] leading-relaxed">{data.formula}</p>
                  </div>
                </div>

                {/* Right: Description + Defensibility + Total */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-white text-[20px] font-bold mb-4 uppercase tracking-wider">How It Works</h3>
                  <div className="bg-black/70 border border-white/15 rounded-lg p-5 mb-4">
                    <p className="text-muted-foreground text-[18px] leading-relaxed">{data.description}</p>
                  </div>

                  <h3 className="text-white text-[20px] font-bold mb-3 uppercase tracking-wider">Why It's Defensible</h3>
                  <div className="bg-black/70 border border-white/15 rounded-lg p-5 mb-4 flex-1">
                    <p className="text-muted-foreground text-[18px] leading-relaxed">{data.defensibility}</p>
                  </div>

                  {/* Total */}
                  <div className={`${bgHighlight} border ${borderColor} rounded-xl p-5 flex items-center justify-between`}>
                    <span className="text-white text-[22px] font-bold uppercase tracking-wider">Projected Annual</span>
                    <span className={`${textColor} text-[36px] font-bold`}>{data.total}</span>
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
