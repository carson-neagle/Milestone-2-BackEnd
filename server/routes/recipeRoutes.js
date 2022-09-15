const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const seed = require('../seeders/seed-recipes')

router.get("/", recipeController.getAllRecipes);
router.get("/id/:_id", recipeController.getRecipeById);
router.delete("/:id", recipeController.deleteRecipeById);
router.post('/create', recipeController.createRecipe);
router.put('/add/recipe/:id', recipeController.updateRecipe);
router.get('/seed', seed.insertIngredientData)

module.exports = router;