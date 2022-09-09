const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  type: {
    type: String,
    enum: ["Entree", "Appetizer", "Dessert"],
    required: "This field is required.",
  },
  ingredients: {
    type: Array,
    required: "This field is required.",
  },
  category: {
    type: String,
    enum: ["American", "Mexican", "Asian", "Greek"],
    required: "This field is required.",
  },
  instructions: {
    type: Array,
    required: "This field is required.",
  },
});
module.exports = mongoose.model("Recipe", recipeSchema);
