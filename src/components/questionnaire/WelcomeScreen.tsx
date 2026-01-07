import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Clock, Target, Compass } from "lucide-react";
import keysLogo from "@/assets/keys-logo.png";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        {/* KEYS Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src={keysLogo} 
            alt="KEYS" 
            className="h-24 md:h-32 object-contain animate-fade-in"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Behavior Style Quiz
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover your unique personality type by answering 4 simple questions about how you interact with the world.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <Card className="text-left">
          <CardHeader className="pb-2">
            <Clock className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Quick & Easy</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Only 4 questions to discover your unique behavior style
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-left">
          <CardHeader className="pb-2">
            <Target className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">16 Unique Types</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Find out which of 16 personality styles matches you best
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-left">
          <CardHeader className="pb-2">
            <Brain className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Self Discovery</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Understand how you focus, process, decide, and organize
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" onClick={onStart} className="gap-2 text-lg px-8">
          Start Questionnaire
          <ArrowRight className="h-5 w-5" />
        </Button>
        <Link to="/explore">
          <Button size="lg" variant="outline" className="gap-2 text-lg px-8 w-full">
            <Compass className="h-5 w-5" />
            Explore Styles
          </Button>
        </Link>
      </div>
    </div>
  );
}
