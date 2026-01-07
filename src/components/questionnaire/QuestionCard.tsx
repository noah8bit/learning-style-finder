import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface QuestionCardProps {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export function QuestionCard({ label, description, selected, onClick }: QuestionCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        selected
          ? "border-primary bg-primary/5 ring-2 ring-primary"
          : "hover:border-primary/50"
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted-foreground/30"
            )}
          >
            {selected && <Check className="h-4 w-4" />}
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{label}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
