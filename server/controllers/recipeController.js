const Category = require("../models/Category");

require("../models/database");
/**
 * GET /
 * HomePage
 */
exports.homepage = async (req, res) => {
  res.render("index");
};

async function insertRecipeCategoryData() {
  try {
    await Category.insertMany([
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
      {
        name: "",
        image: "",
      },
    ]);
  } catch (error) {
    console.log("err", +error);
  }
}
