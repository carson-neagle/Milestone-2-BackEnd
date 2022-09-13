const express = require("express");
const router = express.Router();
const recipeController = require("../seeders/seed-recipes");

router.post("/", recipeController.homepage)
router.get("/", recipeController.homepage);
router.get("/new", recipeController.newRecipe);
router.get("/:id", recipeController.getRecipeById);
router.delete("/recips/:id", recipeController.deleteRecipe);
router.put(":/arrayIndex", recipeController.updateRecipe)
module.exports = router;
