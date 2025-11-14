import { useState, useMemo } from "react";
import { recipes, Recipe } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { RecipeDetail } from "@/components/RecipeDetail";
import { IngredientInput } from "@/components/IngredientInput";
import { Input } from "@/components/ui/input";
import { Search, ChefHat } from "lucide-react";
import heroImage from "@/assets/hero-cooking.jpg";

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userIngredients, setUserIngredients] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    dietary: [] as string[],
    maxTime: 120,
    cuisine: [] as string[]
  });

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Search filter
      if (searchQuery && !recipe.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Ingredient matching
      if (userIngredients.length > 0) {
        const matchingIngredients = recipe.ingredients.filter(ingredient => 
          userIngredients.some(userIng => ingredient.toLowerCase().includes(userIng))
        );
        if (matchingIngredients.length === 0) return false;
      }

      // Difficulty filter
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(recipe.difficulty)) {
        return false;
      }

      // Dietary filter
      if (filters.dietary.length > 0) {
        const hasAllDietary = filters.dietary.every(diet => 
          recipe.dietaryTags.includes(diet)
        );
        if (!hasAllDietary) return false;
      }

      // Time filter
      const totalTime = recipe.prepTime + recipe.cookTime;
      if (totalTime > filters.maxTime) {
        return false;
      }

      // Cuisine filter
      if (filters.cuisine.length > 0 && !filters.cuisine.includes(recipe.cuisine)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, userIngredients, filters]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cooking ingredients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/80" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="h-12 w-12 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-background">
              Smart Recipe Generator
            </h1>
          </div>
          <p className="text-xl text-background/90 mb-8 max-w-2xl">
            Discover delicious recipes based on ingredients you have. Get nutritional info, cooking tips, and more!
          </p>
          
          <div className="w-full max-w-2xl space-y-4">
            <IngredientInput 
              ingredients={userIngredients}
              onIngredientsChange={setUserIngredients}
            />
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search recipes by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </aside>

          {/* Recipe Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {filteredRecipes.length} Recipes Found
              </h2>
              {userIngredients.length > 0 && (
                <p className="text-muted-foreground mt-1">
                  Matching your ingredients: {userIngredients.join(", ")}
                </p>
              )}
            </div>

            {filteredRecipes.length === 0 ? (
              <div className="text-center py-16">
                <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No recipes found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or adding different ingredients
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe}
                    onClick={setSelectedRecipe}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Recipe Detail Modal */}
      <RecipeDetail 
        recipe={selectedRecipe}
        open={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default Index;
