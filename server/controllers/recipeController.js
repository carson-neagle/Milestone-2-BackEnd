const router = require("express").Router();
const places = require("../models/Recipes");

exports.createRecipe = async (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.ingredients) {
    req.body.ingredients = "Ingredients";
  }
  if (!req.body.instructions) {
    req.body.instructions = "Instructions";
  }
  places.push(req.body);
  res.redirect("/recipes");
};

exports.homepage = async (req, res) => {
  res.render("recipes/index", { recipes });
};

exports.newRecipe = async (req, res) => {
  res.render("recipes/new");
};

exports.getRecipeById = async (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!recipes[id]) {
    res.render("error404");
  } else {
    res.render("recipes/show", { recipe: recipes[id], id });
  }
};

exports.deleteRecipe = async (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    recipes.splice(i, 1);
    res.redirect("/recipes");
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipes = await recipes.findById(req.params.id);
    if (!recipes) {
      return next(new AppError("No recipes found with that ID", 404));
    }

    res.render("edit", {
      name: name,
      type: type,
      ingredients: ingredients,
      category: category,
      instructions,
      instructions,
    });
  } catch (err) {
    res.status(404).render("error");
  }
};

module.exports = router;
