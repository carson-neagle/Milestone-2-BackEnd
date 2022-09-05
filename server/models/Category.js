const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "this field is required.",
  },
  image: {
    type: String,
    required: "this field is required.",
  },
});

module.exports = mongoose.model("Category", categorySchema);
