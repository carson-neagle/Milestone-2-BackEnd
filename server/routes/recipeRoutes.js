const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const ingredientsController = require("../controllers/ingredientsController");

router.get("/", recipeController.homepage);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.post("/search", recipeController.searchRecipe);
router.get("/categories", recipeController.exploreCategories);
router.get("/seed", recipeController.insertRecipeCategoryData);
router.get("/ingredients", ingredientsController.insertIngredientData);
module.exports = router;
