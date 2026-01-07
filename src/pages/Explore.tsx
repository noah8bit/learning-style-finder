import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { behaviorStyles, BehaviorStyle } from "@/data/keysData";
import { ArrowLeft, Users, Briefcase, MessageSquare, Target, AlertTriangle, Zap, Heart } from "lucide-react";
import keysLogo from "@/assets/keys-logo.png";

// Import bird illustrations
import eagleImg from "@/assets/eagle.png";
import parrotImg from "@/assets/parrot.png";
import owlImg from "@/assets/owl.png";
import doveImg from "@/assets/dove.png";

const birdImages: Record<string, string> = {
  Eagle: eagleImg,
  Parrot: parrotImg,
  Owl: owlImg,
  Dove: doveImg,
};

const styleColors: Record<string, string> = {
  K: "bg-green-100 text-green-800 border-green-300",
  E: "bg-red-100 text-red-800 border-red-300",
  Y: "bg-amber-100 text-amber-800 border-amber-300",
  S: "bg-blue-100 text-blue-800 border-blue-300",
};

function StyleCard({ style, isSelected, onClick }: { style: BehaviorStyle; isSelected: boolean; onClick: () => void }) {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:scale-105 ${isSelected ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}`}
      onClick={onClick}
    >
      <CardContent className="p-4 text-center">
        <img 
          src={birdImages[style.bird]} 
          alt={style.bird}
          className="w-16 h-16 mx-auto mb-2 object-contain"
        />
        <Badge className={`${styleColors[style.id]} mb-1`}>
          "{style.letter}" - {style.name}
        </Badge>
        <p className="text-sm font-medium">{style.bird}</p>
        <p className="text-xs text-muted-foreground">{style.tagline}</p>
      </CardContent>
    </Card>
  );
}

function StyleDetail({ style }: { style: BehaviorStyle }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img 
          src={birdImages[style.bird]} 
          alt={style.bird}
          className="w-24 h-24 object-contain"
        />
        <div>
          <Badge className={`${styleColors[style.id]} mb-2`}>
            "{style.letter}" - {style.name}
          </Badge>
          <h2 className="text-3xl font-bold">{style.bird}</h2>
          <p className="text-lg text-muted-foreground">{style.tagline}</p>
          <p className="text-sm text-muted-foreground mt-1">{style.orientation}</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 lg:grid-cols-7 mb-4">
          <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
          <TabsTrigger value="strengths" className="text-xs sm:text-sm">Strengths</TabsTrigger>
          <TabsTrigger value="communication" className="text-xs sm:text-sm">Communication</TabsTrigger>
          <TabsTrigger value="work" className="text-xs sm:text-sm">At Work</TabsTrigger>
          <TabsTrigger value="relationships" className="hidden lg:block text-xs sm:text-sm">Relationships</TabsTrigger>
          <TabsTrigger value="motivation" className="hidden lg:block text-xs sm:text-sm">Motivation</TabsTrigger>
          <TabsTrigger value="conflict" className="hidden lg:block text-xs sm:text-sm">Conflict</TabsTrigger>
        </TabsList>

        {/* Mobile-only additional tabs */}
        <TabsList className="grid grid-cols-3 mb-4 lg:hidden">
          <TabsTrigger value="relationships" className="text-xs sm:text-sm">Relationships</TabsTrigger>
          <TabsTrigger value="motivation" className="text-xs sm:text-sm">Motivation</TabsTrigger>
          <TabsTrigger value="conflict" className="text-xs sm:text-sm">Conflict</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{style.overview}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Key Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2">
                {style.characteristics.map((char, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">{char}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Zap className="h-5 w-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2">
                {style.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
                Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2">
                {style.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">!</span>
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Communication Style
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Language</p>
                  <p className="text-sm">{style.communicationStyle.language}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Vocal Tendencies</p>
                  <p className="text-sm">{style.communicationStyle.vocal}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Opinions vs Facts</p>
                  <p className="text-sm">{style.communicationStyle.opinions}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Talking Style</p>
                  <p className="text-sm">{style.communicationStyle.talking}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Small Talk</p>
                  <p className="text-sm">{style.communicationStyle.smallTalk}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When Communicating With a {style.bird}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {style.communicatingWith.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="work" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                At Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs font-medium text-green-700 mb-1">Productive Team Role</p>
                  <p className="text-sm font-medium">{style.atWork.teamRole}</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-medium text-red-700 mb-1">Negative Team Role</p>
                  <p className="text-sm font-medium">{style.atWork.negativeRole}</p>
                </div>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-xs font-medium text-muted-foreground mb-2">Leadership Style</p>
                <p className="text-sm">{style.atWork.leadershipStyle}</p>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs font-medium text-amber-700 mb-2">Under Stress</p>
                <p className="text-sm">{style.atWork.underStress}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relationships" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Relating to Other Styles
              </CardTitle>
              <CardDescription>
                How a {style.bird} relates to each behavior style
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {style.relationships.map((rel, i) => {
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
                      <div>
                        <Badge className={styleColors[targetStyle.id]}>
                          {targetStyle.bird}
                        </Badge>
                      </div>
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
        </TabsContent>

        <TabsContent value="motivation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                What Motivates a {style.bird}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {style.motivatedBy.map((motivation, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <span className="text-xl">⭐</span>
                    <span>{motivation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conflict" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Conflict Tips for {style.bird}s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {style.conflictTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <span className="text-primary font-bold">{i + 1}</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function Explore() {
  const [selectedStyle, setSelectedStyle] = useState<BehaviorStyle>(behaviorStyles[0]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <img src={keysLogo} alt="KEYS" className="h-12 object-contain" />
          <Link to="/">
            <Button>Take the Quiz</Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore the 4 KEYS Behavior Styles</h1>
          <p className="text-muted-foreground">
            Learn about each personality style and how they interact with others
          </p>
        </div>

        {/* Style Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {behaviorStyles.map((style) => (
            <StyleCard
              key={style.id}
              style={style}
              isSelected={selectedStyle.id === style.id}
              onClick={() => setSelectedStyle(style)}
            />
          ))}
        </div>

        {/* Selected Style Details */}
        <StyleDetail style={selectedStyle} />
      </div>
    </div>
  );
}
