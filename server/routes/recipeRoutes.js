const express = require("express");
const router = express();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.homepage);

module.exports = router;