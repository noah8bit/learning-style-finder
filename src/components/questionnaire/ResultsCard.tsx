import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PersonalityType } from "@/data/keysData";
import { RotateCcw, Share2, Download, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import confetti from "canvas-confetti";

// Import bird illustrations
import eagleImg from "@/assets/eagle.png";
import parrotImg from "@/assets/parrot.png";
import owlImg from "@/assets/owl.png";
import doveImg from "@/assets/dove.png";

interface ResultsCardProps {
  result: PersonalityType;
  onRetake: () => void;
}

// Map categories to bird illustrations
const getCategoryBird = (category: string): { image: string; name: string } => {
  if (category === "Firm K / Firm E") {
    return { image: eagleImg, name: "Eagle" };
  } else if (category === "Firm K / Fun E") {
    return { image: parrotImg, name: "Parrot" };
  } else if (category === "Fun K / Firm E") {
    return { image: owlImg, name: "Owl" };
  } else {
    return { image: doveImg, name: "Dove" };
  }
};

export function ResultsCard({ result, onRetake }: ResultsCardProps) {
  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);

  // Trigger confetti on mount
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const bird = getCategoryBird(result.category);

  const handleShare = async () => {
    const shareText = `I'm "${result.name}" (${result.code})!\n\n${result.description}\n\nTake the KEYS Behavior Style quiz to find yours!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My KEYS Behavior Style",
          text: shareText,
        });
      } catch (err) {
        // User cancelled or share failed
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to clipboard!",
          description: "Share your results with friends.",
        });
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard!",
        description: "Share your results with friends.",
      });
    }
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;
    
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
      });
      
      const link = document.createElement("a");
      link.download = `keys-result-${result.code}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      
      toast({
        title: "Downloaded!",
        description: "Your results have been saved as an image.",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div ref={resultRef} className="space-y-6 bg-background p-6 rounded-lg">
        {/* Bird Illustration with floating animation */}
        <div className="flex justify-center">
          <div className="relative animate-bounce-slow">
            <img 
              src={bird.image} 
              alt={`${bird.name} - ${result.category}`}
              className="w-40 h-40 object-contain drop-shadow-lg"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/10 rounded-full blur-md" />
          </div>
        </div>

        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1 animate-fade-in">
            {result.category}
          </Badge>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Your Code</p>
            <p className="text-3xl font-mono font-bold text-primary">{result.code}</p>
          </div>
          <h2 className="text-4xl font-bold animate-scale-in">{result.name}</h2>
          <p className="text-lg text-muted-foreground">
            Your spirit animal is the <span className="font-semibold text-primary">{bird.name}</span>!
          </p>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">About Your Style</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {result.description}
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">Key Characteristics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-3">
              {result.traits.map((trait, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{trait}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button onClick={onRetake} variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Retake Quiz
        </Button>
        <Button onClick={handleShare} variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share Results
        </Button>
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  );
}
