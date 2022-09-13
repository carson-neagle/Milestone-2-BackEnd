const express = require("express");
const router = express.Router();
const recipeController = require("../seeders/seed-recipes");

router.get("/", recipeController.homepage);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.post("/search", recipeController.searchRecipe);
router.get("/categories", recipeController.exploreCategories);
router.get("/seed", recipeController.insertRecipeCategoryData);

module.exports = router;
