import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalityType, getPrimaryBehaviorStyle, behaviorStyles } from "@/data/keysData";
import { RotateCcw, Share2, Download, Check, Briefcase, Heart, MessageSquare, Compass } from "lucide-react";
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

const birdImages: Record<string, string> = {
  Eagle: eagleImg,
  Parrot: parrotImg,
  Owl: owlImg,
  Dove: doveImg,
};

const styleColors: Record<string, string> = {
  K: "bg-green-100 text-green-800",
  E: "bg-red-100 text-red-800",
  Y: "bg-amber-100 text-amber-800",
  S: "bg-blue-100 text-blue-800",
};

export function ResultsCard({ result, onRetake }: ResultsCardProps) {
  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const primaryStyle = getPrimaryBehaviorStyle(result);

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

  const bird = primaryStyle?.bird || "Eagle";
  const birdImage = birdImages[bird];

  const handleShare = async () => {
    const shareText = `I'm "${result.name}" (${result.code})!\n\n${result.description}\n\nTake the KEYS Behavior Style quiz to find yours!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My KEYS Behavior Style",
          text: shareText,
        });
      } catch (err) {
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
              src={birdImage} 
              alt={`${bird} - ${result.category}`}
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
            Your spirit animal is the <span className="font-semibold text-primary">{bird}</span>!
          </p>
        </div>

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview" className="text-xs sm:text-sm gap-1">
              <Check className="h-3 w-3 hidden sm:inline" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="work" className="text-xs sm:text-sm gap-1">
              <Briefcase className="h-3 w-3 hidden sm:inline" />
              At Work
            </TabsTrigger>
            <TabsTrigger value="communication" className="text-xs sm:text-sm gap-1">
              <MessageSquare className="h-3 w-3 hidden sm:inline" />
              Communication
            </TabsTrigger>
            <TabsTrigger value="relationships" className="text-xs sm:text-sm gap-1">
              <Heart className="h-3 w-3 hidden sm:inline" />
              Relationships
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
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

            {primaryStyle && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    Strengths & Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-600 mb-2">Strengths</h4>
                    <ul className="grid gap-1">
                      {primaryStyle.strengths.slice(0, 4).map((strength, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-amber-600 mb-2">Watch Out For</h4>
                    <ul className="grid gap-1">
                      {primaryStyle.limitations.slice(0, 3).map((limitation, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-amber-600">!</span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="work" className="space-y-4">
            {primaryStyle && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Your Work Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs font-medium text-green-700 mb-1">Productive Team Role</p>
                        <p className="font-medium">{primaryStyle.atWork.teamRole}</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-xs font-medium text-red-700 mb-1">Watch Out For</p>
                        <p className="font-medium">{primaryStyle.atWork.negativeRole}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Leadership Style</p>
                      <p className="text-sm">{primaryStyle.atWork.leadershipStyle}</p>
                    </div>
                    
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-xs font-medium text-amber-700 mb-2">Under Stress</p>
                      <p className="text-sm">{primaryStyle.atWork.underStress}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">What Motivates You</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {primaryStyle.motivatedBy.map((motivation, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <span className="text-lg">⭐</span>
                          <span className="text-sm">{motivation}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          <TabsContent value="communication" className="space-y-4">
            {primaryStyle && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Your Communication Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Language</p>
                      <p className="text-sm">{primaryStyle.communicationStyle.language}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Vocal Tendencies</p>
                      <p className="text-sm">{primaryStyle.communicationStyle.vocal}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Opinions vs Facts</p>
                      <p className="text-sm">{primaryStyle.communicationStyle.opinions}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Talking Style</p>
                      <p className="text-sm">{primaryStyle.communicationStyle.talking}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Conflict Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {primaryStyle.conflictTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <span className="text-primary font-bold">{i + 1}</span>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          <TabsContent value="relationships" className="space-y-4">
            {primaryStyle && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Relating to Other Styles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {primaryStyle.relationships.map((rel, i) => {
                    const targetStyle = behaviorStyles.find(s => s.id === rel.targetStyle);
                    if (!targetStyle) return null;
                    
                    return (
                      <div key={i} className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center gap-2">
                          <img 
                            src={birdImages[targetStyle.bird]} 
                            alt={targetStyle.bird}
                            className="w-10 h-10 object-contain"
                          />
                          <Badge className={styleColors[targetStyle.id]}>
                            {targetStyle.bird}
                          </Badge>
                        </div>
                        
                        <div className="grid gap-2">
                          <div className="p-2 bg-green-50 rounded">
                            <p className="text-xs font-medium text-green-700 mb-1">Strengths</p>
                            <p className="text-sm">{rel.strengths}</p>
                          </div>
                          <div className="p-2 bg-amber-50 rounded">
                            <p className="text-xs font-medium text-amber-700 mb-1">Struggles</p>
                            <p className="text-sm">{rel.struggles}</p>
                          </div>
                          <div className="p-2 bg-blue-50 rounded">
                            <p className="text-xs font-medium text-blue-700 mb-1">Strategies</p>
                            <p className="text-sm">{rel.strategies}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
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
        <Button onClick={handleDownload} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download
        </Button>
        <Link to="/explore">
          <Button className="gap-2">
            <Compass className="h-4 w-4" />
            Explore All Styles
          </Button>
        </Link>
      </div>
    </div>
  );
}
