import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WelcomeScreen } from "@/components/questionnaire/WelcomeScreen";
import { ProgressBar } from "@/components/questionnaire/ProgressBar";
import { QuestionCard } from "@/components/questionnaire/QuestionCard";
import { ResultsCard } from "@/components/questionnaire/ResultsCard";
import { questions, getPersonalityType, PersonalityType } from "@/data/keysData";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Stage = "welcome" | "questions" | "results";

const Index = () => {
  const [stage, setStage] = useState<Stage>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PersonalityType | null>(null);

  const handleStart = () => {
    setStage("questions");
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      const answerValues = Object.values(answers);
      const personalityResult = getPersonalityType(answerValues);
      setResult(personalityResult);
      setStage("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRetake = () => {
    setStage("welcome");
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = currentQ ? answers[currentQ.id] : undefined;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-12">
        {stage === "welcome" && <WelcomeScreen onStart={handleStart} />}

        {stage === "questions" && currentQ && (
          <div className="space-y-8">
            <ProgressBar current={currentQuestion + 1} total={questions.length} />

            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">{currentQ.title}</h2>
                <p className="text-muted-foreground">{currentQ.description}</p>
              </div>

              <div className="space-y-4">
                {currentQ.options.map(option => (
                  <QuestionCard
                    key={option.value}
                    label={option.label}
                    description={option.description}
                    selected={currentAnswer === option.value}
                    onClick={() => handleAnswer(currentQ.id, option.value)}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentAnswer === undefined}
                className="gap-2"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {stage === "results" && result && (
          <ResultsCard result={result} onRetake={handleRetake} />
        )}
      </div>
    </div>
  );
};

export default Index;
