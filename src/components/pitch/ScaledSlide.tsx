import { useRef, useState, useEffect } from "react";

export default function ScaledSlide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setScale(Math.min(w / 1920, h / 1080));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={containerRef} className="slide-container w-full h-full">
      <div className="slide-wrapper" style={{ transform: `scale(${scale})` }}>
        <div className={`w-full h-full overflow-hidden ${className}`}>{children}</div>
      </div>
    </div>
  );
}
