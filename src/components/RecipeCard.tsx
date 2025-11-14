import { Recipe } from "@/data/recipes";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChefHat, Users } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  const difficultyColor = {
    easy: 'bg-secondary text-secondary-foreground',
    medium: 'bg-primary text-primary-foreground',
    hard: 'bg-accent text-accent-foreground'
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-card-hover"
      onClick={() => onClick(recipe)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className={difficultyColor[recipe.difficulty]}>
            {recipe.difficulty}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground line-clamp-1">
          {recipe.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">
          {recipe.cuisine} Cuisine
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{totalTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {recipe.dietaryTags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="pt-3 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Calories</span>
            <span className="font-semibold text-foreground">{recipe.nutrition.calories} kcal</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
