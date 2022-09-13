const express = require("express");
const router = express.router();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.homepage);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.post("/search", recipeController.searchRecipe);
router.get("/categories", recipeController.exploreCategories);

module.exports = router;
