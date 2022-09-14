const express = require("express");
const router = express.Router();
const recipeController = require("../seeders/seed-recipes");

router.get("/", recipeController.homepage);
router.get("/id/:_id", recipeController.getRecipeById);
router.delete("/:id", recipeController.deleteRecipeById);
router.post('/create', recipeController.createRecipe);
router.put('/add/recipe/:id', recipeController.updateRecipe)

module.exports = router;