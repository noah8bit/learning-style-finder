import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  strengthDefinitions, 
  weaknessDefinitions, 
  TraitDefinition,
  getStrengthsByBirdType,
  getWeaknessesByBirdType
} from "@/data/keysTraitDefinitions";
import { Search, Zap, AlertTriangle, Filter } from "lucide-react";

// Import bird illustrations
import eagleImg from "@/assets/eagle.png";
import parrotImg from "@/assets/parrot.png";
import owlImg from "@/assets/owl.png";
import doveImg from "@/assets/dove.png";

const birdImages: Record<string, string> = {
  eagle: eagleImg,
  parrot: parrotImg,
  owl: owlImg,
  dove: doveImg,
};

const birdColors: Record<string, { bg: string; text: string; border: string }> = {
  eagle: { bg: "bg-green-50", text: "text-green-800", border: "border-green-200" },
  parrot: { bg: "bg-red-50", text: "text-red-800", border: "border-red-200" },
  owl: { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200" },
  dove: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-200" },
};

const birdNames: Record<string, string> = {
  eagle: "Eagle",
  parrot: "Parrot",
  owl: "Owl",
  dove: "Dove",
};

interface TraitCardProps {
  trait: TraitDefinition;
}

function TraitCard({ trait }: TraitCardProps) {
  const colors = birdColors[trait.birdType];
  
  return (
    <div className={`p-4 rounded-lg border ${colors.bg} ${colors.border} transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className={`font-semibold ${colors.text}`}>{trait.word}</h4>
        <div className="flex items-center gap-1">
          <img 
            src={birdImages[trait.birdType]} 
            alt={birdNames[trait.birdType]}
            className="w-5 h-5 object-contain"
          />
          {trait.type === "strength" ? (
            <Zap className="h-3 w-3 text-green-600" />
          ) : (
            <AlertTriangle className="h-3 w-3 text-amber-600" />
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{trait.definition}</p>
      <div className="mt-2 flex items-center gap-2">
        <Badge variant="outline" className={`text-xs ${colors.text} ${colors.border}`}>
          Row {trait.row}
        </Badge>
      </div>
    </div>
  );
}

interface BirdTraitSectionProps {
  birdType: "eagle" | "parrot" | "owl" | "dove";
  searchQuery: string;
  showStrengths: boolean;
  showWeaknesses: boolean;
}

function BirdTraitSection({ birdType, searchQuery, showStrengths, showWeaknesses }: BirdTraitSectionProps) {
  const strengths = getStrengthsByBirdType(birdType);
  const weaknesses = getWeaknessesByBirdType(birdType);
  
  const filteredStrengths = strengths.filter(trait => 
    searchQuery === "" || 
    trait.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trait.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredWeaknesses = weaknesses.filter(trait => 
    searchQuery === "" || 
    trait.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trait.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const colors = birdColors[birdType];
  const hasStrengthResults = showStrengths && filteredStrengths.length > 0;
  const hasWeaknessResults = showWeaknesses && filteredWeaknesses.length > 0;

  if (!hasStrengthResults && !hasWeaknessResults) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <img 
          src={birdImages[birdType]} 
          alt={birdNames[birdType]}
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 className={`text-xl font-bold ${colors.text}`}>{birdNames[birdType]}</h3>
          <p className="text-sm text-muted-foreground">
            {hasStrengthResults && `${filteredStrengths.length} strengths`}
            {hasStrengthResults && hasWeaknessResults && " • "}
            {hasWeaknessResults && `${filteredWeaknesses.length} weaknesses`}
          </p>
        </div>
      </div>

      {hasStrengthResults && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Strengths ({filteredStrengths.length})
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {filteredStrengths.map((trait) => (
              <TraitCard key={trait.word} trait={trait} />
            ))}
          </div>
        </div>
      )}

      {hasWeaknessResults && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-amber-700 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Weaknesses ({filteredWeaknesses.length})
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {filteredWeaknesses.map((trait) => (
              <TraitCard key={trait.word} trait={trait} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function TraitGlossary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "strengths" | "weaknesses">("all");
  const [selectedBird, setSelectedBird] = useState<"all" | "eagle" | "parrot" | "owl" | "dove">("all");

  const showStrengths = activeTab === "all" || activeTab === "strengths";
  const showWeaknesses = activeTab === "all" || activeTab === "weaknesses";

  const totalResults = useMemo(() => {
    const allTraits = [...strengthDefinitions, ...weaknessDefinitions];
    return allTraits.filter(trait => {
      const matchesSearch = searchQuery === "" || 
        trait.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trait.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBird = selectedBird === "all" || trait.birdType === selectedBird;
      const matchesType = (showStrengths && trait.type === "strength") || 
                          (showWeaknesses && trait.type === "weakness");
      return matchesSearch && matchesBird && matchesType;
    }).length;
  }, [searchQuery, selectedBird, showStrengths, showWeaknesses]);

  const birdTypes: ("eagle" | "parrot" | "owl" | "dove")[] = ["eagle", "parrot", "owl", "dove"];
  const birdsToShow = selectedBird === "all" ? birdTypes : [selectedBird];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          KEYS 40-Item Trait Glossary
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          All 80 behavioral trait words with definitions from the KEYS instrument
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search traits by word or definition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Type Filter */}
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="flex-1">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="strengths" className="text-green-700">Strengths</TabsTrigger>
                <TabsTrigger value="weaknesses" className="text-amber-700">Weaknesses</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Bird Filter */}
            <div className="flex gap-2 justify-center sm:justify-end">
              <button
                onClick={() => setSelectedBird("all")}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                  selectedBird === "all" 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                All Birds
              </button>
              {birdTypes.map((bird) => (
                <button
                  key={bird}
                  onClick={() => setSelectedBird(bird)}
                  className={`p-1.5 rounded-full border transition-all ${
                    selectedBird === bird 
                      ? `${birdColors[bird].bg} ${birdColors[bird].border}` 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  title={birdNames[bird]}
                >
                  <img 
                    src={birdImages[bird]} 
                    alt={birdNames[bird]}
                    className="w-6 h-6 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground text-center">
            Showing {totalResults} of 80 traits
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Trait Lists by Bird */}
        <div className="space-y-8">
          {birdsToShow.map((birdType) => (
            <BirdTraitSection
              key={birdType}
              birdType={birdType}
              searchQuery={searchQuery}
              showStrengths={showStrengths}
              showWeaknesses={showWeaknesses}
            />
          ))}
        </div>

        {totalResults === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No traits found matching your search.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveTab("all"); setSelectedBird("all"); }}
              className="text-primary underline mt-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
