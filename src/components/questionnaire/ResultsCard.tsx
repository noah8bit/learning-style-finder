import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PersonalityType } from "@/data/keysData";
import { RotateCcw, Share2, Download, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";

interface ResultsCardProps {
  result: PersonalityType;
  onRetake: () => void;
}

export function ResultsCard({ result, onRetake }: ResultsCardProps) {
  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);

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
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            {result.category}
          </Badge>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Your Code</p>
            <p className="text-3xl font-mono font-bold text-primary">{result.code}</p>
          </div>
          <h2 className="text-4xl font-bold">{result.name}</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">About Your Style</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {result.description}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Key Characteristics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-3">
              {result.traits.map((trait, index) => (
                <li key={index} className="flex items-center gap-2">
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
