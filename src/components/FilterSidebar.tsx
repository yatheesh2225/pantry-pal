import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    difficulty: string[];
    dietary: string[];
    maxTime: number;
    cuisine: string[];
  };
  onFilterChange: (filters: any) => void;
}

export const FilterSidebar = ({ filters, onFilterChange }: FilterSidebarProps) => {
  const difficulties = ['easy', 'medium', 'hard'];
  const dietaryOptions = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto'];
  const cuisines = ['Italian', 'Asian', 'Mexican', 'American', 'Mediterranean', 'Indian', 'Thai', 'British', 'Russian', 'Vietnamese', 'Middle Eastern'];

  const handleDifficultyChange = (difficulty: string, checked: boolean) => {
    const newDifficulties = checked 
      ? [...filters.difficulty, difficulty]
      : filters.difficulty.filter(d => d !== difficulty);
    onFilterChange({ ...filters, difficulty: newDifficulties });
  };

  const handleDietaryChange = (dietary: string, checked: boolean) => {
    const newDietary = checked 
      ? [...filters.dietary, dietary]
      : filters.dietary.filter(d => d !== dietary);
    onFilterChange({ ...filters, dietary: newDietary });
  };

  const handleCuisineChange = (cuisine: string, checked: boolean) => {
    const newCuisines = checked 
      ? [...filters.cuisine, cuisine]
      : filters.cuisine.filter(c => c !== cuisine);
    onFilterChange({ ...filters, cuisine: newCuisines });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card sticky top-6">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-card-foreground">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3 text-card-foreground">Difficulty</h3>
          <div className="space-y-2">
            {difficulties.map((diff) => (
              <div key={diff} className="flex items-center space-x-2">
                <Checkbox 
                  id={`diff-${diff}`}
                  checked={filters.difficulty.includes(diff)}
                  onCheckedChange={(checked) => handleDifficultyChange(diff, checked as boolean)}
                />
                <Label htmlFor={`diff-${diff}`} className="capitalize cursor-pointer">
                  {diff}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3 text-card-foreground">Max Cooking Time</h3>
          <div className="space-y-2">
            <Slider 
              value={[filters.maxTime]}
              onValueChange={([value]) => onFilterChange({ ...filters, maxTime: value })}
              min={10}
              max={120}
              step={10}
              className="w-full"
            />
            <p className="text-sm text-muted-foreground text-center">
              {filters.maxTime} minutes
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3 text-card-foreground">Dietary Preferences</h3>
          <div className="space-y-2">
            {dietaryOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox 
                  id={`diet-${option}`}
                  checked={filters.dietary.includes(option)}
                  onCheckedChange={(checked) => handleDietaryChange(option, checked as boolean)}
                />
                <Label htmlFor={`diet-${option}`} className="capitalize cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3 text-card-foreground">Cuisine</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {cuisines.map((cuisine) => (
              <div key={cuisine} className="flex items-center space-x-2">
                <Checkbox 
                  id={`cuisine-${cuisine}`}
                  checked={filters.cuisine.includes(cuisine)}
                  onCheckedChange={(checked) => handleCuisineChange(cuisine, checked as boolean)}
                />
                <Label htmlFor={`cuisine-${cuisine}`} className="cursor-pointer">
                  {cuisine}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
