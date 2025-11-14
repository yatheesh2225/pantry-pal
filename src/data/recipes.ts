export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number; // in minutes
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  dietaryTags: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  rating?: number;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'fresh basil', 'olive oil', 'salt'],
    instructions: [
      'Preheat oven to 475°F (245°C)',
      'Roll out pizza dough on floured surface',
      'Spread tomato sauce evenly over dough',
      'Add mozzarella cheese',
      'Bake for 12-15 minutes until crust is golden',
      'Top with fresh basil and drizzle with olive oil'
    ],
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'easy',
    cuisine: 'Italian',
    dietaryTags: ['vegetarian'],
    nutrition: { calories: 285, protein: 12, carbs: 36, fat: 10 }
  },
  {
    id: '2',
    name: 'Chicken Stir Fry',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    ingredients: ['chicken breast', 'bell peppers', 'broccoli', 'soy sauce', 'garlic', 'ginger', 'sesame oil', 'rice'],
    instructions: [
      'Cut chicken into bite-sized pieces',
      'Heat sesame oil in wok over high heat',
      'Cook chicken until golden, remove and set aside',
      'Stir fry vegetables with garlic and ginger',
      'Add chicken back, pour soy sauce',
      'Serve over steamed rice'
    ],
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Asian',
    dietaryTags: ['gluten-free'],
    nutrition: { calories: 420, protein: 35, carbs: 42, fat: 12 }
  },
  {
    id: '3',
    name: 'Greek Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    ingredients: ['cucumber', 'tomatoes', 'red onion', 'feta cheese', 'kalamata olives', 'olive oil', 'lemon juice', 'oregano'],
    instructions: [
      'Chop cucumber, tomatoes, and red onion',
      'Combine vegetables in large bowl',
      'Add olives and crumbled feta',
      'Whisk olive oil, lemon juice, and oregano',
      'Pour dressing over salad and toss gently'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    cuisine: 'Mediterranean',
    dietaryTags: ['vegetarian', 'gluten-free', 'keto'],
    nutrition: { calories: 180, protein: 6, carbs: 8, fat: 14 }
  },
  {
    id: '4',
    name: 'Beef Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomatoes', 'cheese', 'sour cream', 'taco seasoning', 'onion'],
    instructions: [
      'Brown ground beef with diced onion',
      'Add taco seasoning and water, simmer',
      'Warm taco shells in oven',
      'Chop lettuce and tomatoes',
      'Fill shells with beef and toppings',
      'Serve with sour cream'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 6,
    difficulty: 'easy',
    cuisine: 'Mexican',
    dietaryTags: ['gluten-free'],
    nutrition: { calories: 340, protein: 22, carbs: 28, fat: 16 }
  },
  {
    id: '5',
    name: 'Vegetable Curry',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80',
    ingredients: ['cauliflower', 'chickpeas', 'coconut milk', 'curry powder', 'tomatoes', 'onion', 'garlic', 'ginger', 'spinach'],
    instructions: [
      'Sauté onion, garlic, and ginger',
      'Add curry powder and cook until fragrant',
      'Add cauliflower and chickpeas',
      'Pour in coconut milk and tomatoes',
      'Simmer for 20 minutes',
      'Stir in spinach until wilted'
    ],
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Indian',
    dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
    nutrition: { calories: 280, protein: 10, carbs: 32, fat: 14 }
  },
  {
    id: '6',
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80',
    ingredients: ['romaine lettuce', 'parmesan cheese', 'croutons', 'caesar dressing', 'lemon juice', 'garlic', 'anchovies'],
    instructions: [
      'Wash and chop romaine lettuce',
      'Make dressing with anchovies, garlic, lemon',
      'Toss lettuce with dressing',
      'Add parmesan shavings',
      'Top with croutons',
      'Serve immediately'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    cuisine: 'American',
    dietaryTags: ['vegetarian'],
    nutrition: { calories: 220, protein: 8, carbs: 12, fat: 16 }
  },
  {
    id: '7',
    name: 'Salmon Teriyaki',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&q=80',
    ingredients: ['salmon fillets', 'teriyaki sauce', 'sesame seeds', 'green onions', 'rice', 'broccoli'],
    instructions: [
      'Marinate salmon in teriyaki sauce for 30 minutes',
      'Preheat oven to 400°F',
      'Bake salmon for 15-18 minutes',
      'Steam broccoli and cook rice',
      'Garnish salmon with sesame seeds and green onions',
      'Serve with rice and broccoli'
    ],
    prepTime: 35,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Asian',
    dietaryTags: ['gluten-free', 'dairy-free'],
    nutrition: { calories: 450, protein: 38, carbs: 45, fat: 14 }
  },
  {
    id: '8',
    name: 'Caprese Salad',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80',
    ingredients: ['tomatoes', 'mozzarella', 'fresh basil', 'balsamic glaze', 'olive oil', 'salt', 'pepper'],
    instructions: [
      'Slice tomatoes and mozzarella',
      'Arrange alternating slices on plate',
      'Tuck basil leaves between slices',
      'Drizzle with olive oil and balsamic glaze',
      'Season with salt and pepper',
      'Serve immediately'
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    cuisine: 'Italian',
    dietaryTags: ['vegetarian', 'gluten-free', 'keto'],
    nutrition: { calories: 240, protein: 12, carbs: 6, fat: 18 }
  },
  {
    id: '9',
    name: 'Pad Thai',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80',
    ingredients: ['rice noodles', 'shrimp', 'eggs', 'bean sprouts', 'peanuts', 'lime', 'fish sauce', 'tamarind paste', 'garlic'],
    instructions: [
      'Soak rice noodles in warm water',
      'Scramble eggs in wok, set aside',
      'Cook shrimp and garlic',
      'Add drained noodles and sauce',
      'Toss with bean sprouts and eggs',
      'Serve with peanuts and lime wedges'
    ],
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'hard',
    cuisine: 'Thai',
    dietaryTags: ['gluten-free', 'dairy-free'],
    nutrition: { calories: 480, protein: 28, carbs: 58, fat: 16 }
  },
  {
    id: '10',
    name: 'Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-b79d2e373cce?w=800&q=80',
    ingredients: ['arborio rice', 'mushrooms', 'vegetable broth', 'white wine', 'parmesan', 'onion', 'butter', 'thyme'],
    instructions: [
      'Sauté mushrooms, set aside',
      'Cook onion until soft',
      'Add rice, toast for 2 minutes',
      'Add wine, stir until absorbed',
      'Add broth one ladle at a time, stirring constantly',
      'Stir in mushrooms, butter, and parmesan'
    ],
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'hard',
    cuisine: 'Italian',
    dietaryTags: ['vegetarian', 'gluten-free'],
    nutrition: { calories: 380, protein: 12, carbs: 52, fat: 14 }
  },
  {
    id: '11',
    name: 'BBQ Pulled Pork',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
    ingredients: ['pork shoulder', 'bbq sauce', 'apple cider vinegar', 'brown sugar', 'paprika', 'garlic powder', 'onion', 'buns'],
    instructions: [
      'Rub pork with spices',
      'Place in slow cooker with onion and vinegar',
      'Cook on low for 8 hours',
      'Shred pork with forks',
      'Mix with BBQ sauce',
      'Serve on toasted buns'
    ],
    prepTime: 15,
    cookTime: 480,
    servings: 8,
    difficulty: 'easy',
    cuisine: 'American',
    dietaryTags: ['dairy-free'],
    nutrition: { calories: 420, protein: 32, carbs: 38, fat: 16 }
  },
  {
    id: '12',
    name: 'Quinoa Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    ingredients: ['quinoa', 'chickpeas', 'sweet potato', 'kale', 'avocado', 'tahini', 'lemon', 'cumin'],
    instructions: [
      'Cook quinoa according to package',
      'Roast chickpeas and sweet potato cubes',
      'Massage kale with lemon juice',
      'Arrange ingredients in bowl',
      'Make tahini dressing with lemon and cumin',
      'Drizzle dressing and top with avocado'
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Mediterranean',
    dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
    nutrition: { calories: 380, protein: 14, carbs: 48, fat: 16 }
  },
  {
    id: '13',
    name: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
    ingredients: ['spaghetti', 'bacon', 'eggs', 'parmesan', 'black pepper', 'garlic', 'pasta water'],
    instructions: [
      'Cook spaghetti in salted water',
      'Fry bacon until crispy',
      'Beat eggs with parmesan and pepper',
      'Drain pasta, reserve 1 cup pasta water',
      'Toss hot pasta with bacon',
      'Remove from heat, add egg mixture, toss quickly'
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Italian',
    dietaryTags: [],
    nutrition: { calories: 520, protein: 24, carbs: 58, fat: 20 }
  },
  {
    id: '14',
    name: 'Fish and Chips',
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800&q=80',
    ingredients: ['cod fillets', 'potatoes', 'flour', 'beer', 'baking powder', 'salt', 'oil', 'malt vinegar'],
    instructions: [
      'Cut potatoes into thick chips, soak in water',
      'Make batter with flour, beer, and baking powder',
      'Heat oil to 350°F',
      'Fry chips until golden, drain',
      'Dip fish in batter, fry until crispy',
      'Serve with malt vinegar'
    ],
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: 'hard',
    cuisine: 'British',
    dietaryTags: ['dairy-free'],
    nutrition: { calories: 580, protein: 32, carbs: 64, fat: 22 }
  },
  {
    id: '15',
    name: 'Chicken Fajitas',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
    ingredients: ['chicken breast', 'bell peppers', 'onion', 'tortillas', 'lime', 'cumin', 'chili powder', 'sour cream', 'cilantro'],
    instructions: [
      'Slice chicken and vegetables into strips',
      'Season chicken with cumin and chili powder',
      'Cook chicken in hot skillet',
      'Add peppers and onions, cook until tender',
      'Warm tortillas',
      'Serve with lime, sour cream, and cilantro'
    ],
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'easy',
    cuisine: 'Mexican',
    dietaryTags: ['gluten-free'],
    nutrition: { calories: 380, protein: 32, carbs: 42, fat: 10 }
  },
  {
    id: '16',
    name: 'Tomato Basil Soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    ingredients: ['tomatoes', 'onion', 'garlic', 'vegetable broth', 'heavy cream', 'fresh basil', 'olive oil', 'sugar'],
    instructions: [
      'Sauté onion and garlic in olive oil',
      'Add tomatoes and broth, simmer 20 minutes',
      'Blend until smooth',
      'Stir in cream and sugar',
      'Season with salt and pepper',
      'Garnish with fresh basil'
    ],
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    difficulty: 'easy',
    cuisine: 'American',
    dietaryTags: ['vegetarian', 'gluten-free'],
    nutrition: { calories: 180, protein: 4, carbs: 16, fat: 12 }
  },
  {
    id: '17',
    name: 'Beef Stroganoff',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
    ingredients: ['beef sirloin', 'mushrooms', 'onion', 'sour cream', 'beef broth', 'egg noodles', 'flour', 'butter'],
    instructions: [
      'Cut beef into strips, season and brown',
      'Sauté mushrooms and onions',
      'Sprinkle with flour, add broth',
      'Simmer until thickened',
      'Stir in sour cream',
      'Serve over egg noodles'
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Russian',
    dietaryTags: [],
    nutrition: { calories: 520, protein: 36, carbs: 42, fat: 22 }
  },
  {
    id: '18',
    name: 'Veggie Spring Rolls',
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=800&q=80',
    ingredients: ['rice paper', 'carrots', 'cucumber', 'lettuce', 'rice noodles', 'mint', 'cilantro', 'peanut sauce'],
    instructions: [
      'Soak rice paper in warm water',
      'Julienne vegetables',
      'Cook rice noodles, cool',
      'Place vegetables and noodles on rice paper',
      'Add herbs, roll tightly',
      'Serve with peanut dipping sauce'
    ],
    prepTime: 30,
    cookTime: 5,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Vietnamese',
    dietaryTags: ['vegan', 'gluten-free', 'dairy-free'],
    nutrition: { calories: 180, protein: 4, carbs: 32, fat: 4 }
  },
  {
    id: '19',
    name: 'Chicken Parmesan',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80',
    ingredients: ['chicken breast', 'breadcrumbs', 'parmesan', 'mozzarella', 'marinara sauce', 'eggs', 'flour', 'basil'],
    instructions: [
      'Pound chicken to even thickness',
      'Dredge in flour, egg, then breadcrumbs',
      'Fry until golden brown',
      'Top with marinara and mozzarella',
      'Bake at 400°F until cheese melts',
      'Garnish with basil and parmesan'
    ],
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Italian',
    dietaryTags: [],
    nutrition: { calories: 480, protein: 42, carbs: 32, fat: 20 }
  },
  {
    id: '20',
    name: 'Mango Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80',
    ingredients: ['frozen mango', 'banana', 'greek yogurt', 'honey', 'granola', 'coconut flakes', 'chia seeds', 'berries'],
    instructions: [
      'Blend mango, banana, and yogurt until smooth',
      'Pour into bowl',
      'Top with granola, coconut, and chia seeds',
      'Arrange fresh berries on top',
      'Drizzle with honey',
      'Serve immediately'
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    cuisine: 'American',
    dietaryTags: ['vegetarian', 'gluten-free'],
    nutrition: { calories: 320, protein: 12, carbs: 58, fat: 6 }
  },
  {
    id: '21',
    name: 'Shakshuka',
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&q=80',
    ingredients: ['eggs', 'tomatoes', 'bell peppers', 'onion', 'garlic', 'cumin', 'paprika', 'feta cheese', 'parsley'],
    instructions: [
      'Sauté onions, peppers, and garlic',
      'Add tomatoes and spices, simmer',
      'Make wells in sauce, crack eggs into them',
      'Cover and cook until eggs are set',
      'Crumble feta on top',
      'Garnish with parsley, serve with bread'
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'easy',
    cuisine: 'Middle Eastern',
    dietaryTags: ['vegetarian', 'gluten-free'],
    nutrition: { calories: 240, protein: 14, carbs: 18, fat: 14 }
  },
  {
    id: '22',
    name: 'Lemon Garlic Shrimp Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
    ingredients: ['shrimp', 'linguine', 'garlic', 'lemon', 'white wine', 'butter', 'parsley', 'red pepper flakes'],
    instructions: [
      'Cook linguine al dente',
      'Sauté garlic in butter',
      'Add shrimp, cook until pink',
      'Deglaze with white wine and lemon juice',
      'Toss with pasta and pasta water',
      'Garnish with parsley and red pepper flakes'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Italian',
    dietaryTags: ['dairy-free'],
    nutrition: { calories: 420, protein: 28, carbs: 52, fat: 12 }
  }
];
