const Recipe = require("../models/Recipe");
require("../models/database");
exports.insertIngredientData = async (req, res) => {
  try {
    await Recipe.insertMany([
      {
        name: "Spicy Chicken Pad Thai",
        type: "Entree",
        ingredients: [
          "4 oz flat rice noodles",
          "3 tbsp canola oil, divided",
          "1/2 lb. chicken breast, sliced into very thin strips",
          "1/2 red bell pepper, halved and thinly sliced",
          "3/4 cup carrots, shredded or julienned",
          "2 garlic cloves, minced",
          "1 egg, beaten",
          "1 green onion, chopped",
          "1/4 cup unsalted peanuts, roughly chopped",
          "2 tbsp cilantro leaves, chopped",
          "2 tbsp packed brown sugar",
          "1 tbsp low sodium soy sauce",
          "1 tbsp fish sauce",
          "1 tbsp lime juice",
          "1 tbsp rice vinegar",
          "1 tbsp smooth peanut butter",
          "1 tbsp Sriracha or another chili paste",
          "1/4 tsp ground ginger",
          "1/8 tsp pepper",
        ],
        category: "Asian",
        instructions: [
          "1.Prepare rice noodles according to package directions. Rinse noodles in cold water, drain, and toss in with 1 tbsp canola oil. Set aside.",
          "2. Add all of the sauce ingredients to a medium mixing bowl. Whisk together and set aside.",
          "3. While rice noodles are soaking, heat 1 tablespoon canola oil in a large nonstick skillet over medium-high heat. Once hot, add chicken and let cook for 3-4 minutes until cooked through. Transfer to a plate while you cook the vegetables.",
          "4. Heat one tablespoon canola oil over in the same skillet and heat over medium-high heat. Add bell peppers and sauté 1 minute. Add carrots and garlic and sauté 1 additional minute. Reduce heat to medium and pour beaten egg over vegetables and cook, stirring constantly, just until scrambled.",
          "5. Add sauce and noodles and increase heat to medium-high. Toss until evenly combined and continue to stir and cook for 1-2 minutes, taking care to not let noodles overcook. Stir in chicken, green onions and peanuts, and heat through.",
          "6. Taste and add one additional seasoning as necessary. You can add more Sriracha if you want it spicier, soy sauce for a salty bite, or a squeeze of lime for a tang. Top with cilantro and serve.",
        ],
      },
      {
        name: "Hot Chicken Chili",
        type: "Entree",
        ingredients: [
          "Vegetable oil",
          "cayenne pepper",
          "brown sugar",
          "paprika",
          "garlic powder",
          "kosher salt",
          "carrot",
          "yellow onion",
          "ground chicken",
          "white chili beans",
          "Pinto Beans",
          "diced tomatoes",
          "hot sauce",
          "chicken broth",
          "pickle brine",
          "sour cream",
          "shredded cheddar",
        ],
        category: "American",
        instructions: [
          "1. Add the oil to a Dutch oven, set over medium heat. When the oil is simmering, add the cayenne, brown sugar, paprika, garlic powder, and salt. Cook over low heat until the spices infuse the oil, 2 to 3 minutes.",
          "2. Add the carrots and onion, and cook until the vegetables soften and start to brown, 6 to 8 minutes. Add the chicken and cook, breaking up the chicken with a wooden spoon, until browned, 4 to 5 minutes. Add BUSH’S® Chili Beans, tomatoes, and hot sauce. Stir together and bring to a simmer. Pour in the broth. Return to a simmer and cook, partially covered, stirring occasionally, until the chili is thickened, 15 to 20 minutes.",
          "3. Ladle the chili into bowls. Top each bowl with a dollop of sour cream, a sprinkle of shredded cheddar, and more hot sauce, if desired.",
        ],
      },
    ]);
    res.send("complete");
  } catch (error) {
    console.log("err", error);
    res.send("error");
  }
};
