import ScaledSlide from "./ScaledSlide";

export default function SlideCampSchedules({ active }: { active: boolean }) {
  const camps = [
    {
      title: "Elite Youth Athletic Camp",
      duration: "1 Week · Ages 10–17",
      schedule: [
        { time: "8:00 AM", activity: "Dynamic Warm-Up & Mobility" },
        { time: "9:00 AM", activity: "Sport-Specific Skill Training" },
        { time: "10:30 AM", activity: "Cross-Training Rotation (3 sports)" },
        { time: "12:00 PM", activity: "Nutrition & Recovery Workshop" },
        { time: "1:00 PM", activity: "Strength & Conditioning" },
        { time: "2:30 PM", activity: "Mental Performance Coaching" },
        { time: "3:30 PM", activity: "Scrimmages & Cool-Down" },
      ],
      color: "text-primary",
      borderColor: "border-primary/30",
    },
    {
      title: "Pro Athlete Recovery Seminar",
      duration: "2 Days · Pro & Semi-Pro Athletes",
      schedule: [
        { time: "9:00 AM", activity: "Neuromuscular Assessment" },
        { time: "10:00 AM", activity: "Injury Prevention Strategies" },
        { time: "11:30 AM", activity: "Cryotherapy & Recovery Demo" },
        { time: "1:00 PM", activity: "Peptide Wellness Workshop" },
        { time: "2:30 PM", activity: "Biometric Analytics Deep-Dive" },
        { time: "4:00 PM", activity: "1-on-1 Treatment Sessions" },
        { time: "5:00 PM", activity: "Q&A with Medical Staff" },
      ],
      color: "text-accent",
      borderColor: "border-accent/30",
    },
  ];

  const upcoming = [
    { name: "Summer Youth Combine", date: "June 2027", spots: "60 athletes" },
    { name: "Stunt Performer Bootcamp", date: "July 2027", spots: "25 performers" },
    { name: "Recovery Science Summit", date: "Sept 2027", spots: "100 attendees" },
    { name: "Community Outreach Camp", date: "Oct 2027", spots: "40 scholars" },
  ];

  return (
    <ScaledSlide>
      <div className="w-full h-full bg-background flex flex-col justify-center px-[100px]">
        {active && (
          <>
            <p className="animate-fade-up stagger-1 text-primary font-medium tracking-[0.3em] uppercase text-[14px] mb-4">Programming</p>
            <h2 className="animate-fade-up stagger-2 text-[52px] font-bold leading-[1] text-foreground mb-10">
              Sample Camp & <span className="text-primary">Seminar Schedules</span>
            </h2>
            <div className="animate-fade-up stagger-3 flex gap-8 mb-8">
              {camps.map((camp, i) => (
                <div key={i} className={`flex-1 bg-secondary border ${camp.borderColor} rounded-xl p-6`}>
                  <h3 className={`${camp.color} text-[20px] font-bold mb-1`}>{camp.title}</h3>
                  <p className="text-muted-foreground text-[13px] mb-5">{camp.duration}</p>
                  <div className="space-y-2.5">
                    {camp.schedule.map((s, j) => (
                      <div key={j} className="flex gap-4 items-start">
                        <span className={`${camp.color} text-[13px] font-semibold min-w-[80px] shrink-0`}>{s.time}</span>
                        <span className="text-foreground text-[14px]">{s.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-fade-up stagger-4 grid grid-cols-4 gap-4">
              {upcoming.map((u, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <p className="text-foreground text-[15px] font-bold mb-1">{u.name}</p>
                  <p className="text-primary text-[14px] font-semibold">{u.date}</p>
                  <p className="text-muted-foreground text-[12px]">{u.spots}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ScaledSlide>
  );
}
