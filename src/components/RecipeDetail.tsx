import { Recipe } from "@/data/recipes";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, ChefHat, Flame } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RecipeDetailProps {
  recipe: Recipe | null;
  open: boolean;
  onClose: () => void;
}

export const RecipeDetail = ({ recipe, open, onClose }: RecipeDetailProps) => {
  if (!recipe) return null;

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <div className="relative h-64 overflow-hidden rounded-t-lg">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <ScrollArea className="h-[calc(90vh-16rem)] px-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold text-card-foreground">
              {recipe.name}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">{recipe.cuisine} Cuisine</Badge>
            <Badge variant="outline" className="capitalize">{recipe.difficulty}</Badge>
            {recipe.dietaryTags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Clock className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium">{totalTime} min</span>
              <span className="text-xs text-muted-foreground">Total</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Users className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium">{recipe.servings}</span>
              <span className="text-xs text-muted-foreground">Servings</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <ChefHat className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium capitalize">{recipe.difficulty}</span>
              <span className="text-xs text-muted-foreground">Level</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Flame className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-medium">{recipe.nutrition.calories}</span>
              <span className="text-xs text-muted-foreground">Calories</span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-card-foreground">Nutrition Facts</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Protein</p>
                <p className="text-lg font-semibold text-foreground">{recipe.nutrition.protein}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Carbs</p>
                <p className="text-lg font-semibold text-foreground">{recipe.nutrition.carbs}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Fat</p>
                <p className="text-lg font-semibold text-foreground">{recipe.nutrition.fat}g</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="text-lg font-semibold text-foreground">{recipe.nutrition.calories}</p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-card-foreground">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground capitalize">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-card-foreground">Instructions</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-foreground pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
