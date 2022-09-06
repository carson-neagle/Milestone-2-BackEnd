const express = require("express");
const router = express();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.post('/search', recipeController.searchRecipe);

module.exports = router;
