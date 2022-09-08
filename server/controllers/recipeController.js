const Category = require("../models/Category");

require("../models/database");
/**
 * GET /
 * HomePage
 */
exports.homepage = async (req, res) => {};

exports.exploreRecipe = async (req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    res.render("recipe", { title: "Cooking Blog - Recipe", recipe });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.render("search", { title: "Cooking Blog - Search", recipe });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("categories", {
      title: "Cooking Blog - Categoreis",
      categories,
    });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

async function insertRecipeCategoryData() {
  try {
    await Category.insertMany([
      {
        name: "Spicy Chicken Pad Thai",
        mealType: " Entree",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2018/02/Easy-Spicy-Chicken-Pad-Thai-1-720x720.jpg.webp",
      },
      {
        name: "Hot Chicken Chili",
        mealType: "Entree",
        image:
          "https://www.craftycookingmama.com/wp-content/uploads/2020/03/058-1024x879.jpg",
      },
      {
        name: "Spicy Chorizo Kale Tacos",
        mealType: "Entree",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2016/05/DSC_0264-861x1024.jpg.webp",
      },
      {
        name: "Strawberry Jalapeño Baby Back Ribs",
        mealType: "Entree",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2018/05/Curlys-Strawberry-Jalapeno-Ribs-4-of-8-1037x1624.jpg.webp",
      },
      {
        name: "Sweet Potato Salad with Bacon and Spiced Pecans",
        mealType: "Appetizer",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2017/06/Sweet-Potato-Salad-2-of-4-720x720.jpg",
      },
      {
        name: "Corn and Pepper Jack Hush Puppies",
        mealType: "Appetizer",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2020/07/Cornbread-Balls-5-of-5-scaled.jpg",
      },
      {
        name: "Honey-Butter Mint Glazed Meatball",
        mealType: "Appetizer",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2021/11/Kentucky-Proud-5-1084x1624.jpg.webp",
      },
      {
        name: "Vegetarian Winter Squash Nachos",
        mealType: "Appetizer",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2021/11/Vegetarian-Winter-Squash-Nachos-2.jpg",
      },
      {
        name: "Chocolate Gingerbread Mini Muffins",
        mealType: "Dessert",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2020/11/Chocolate-Gingerbread-Mini-Muffins-04.jpg",
      },
      {
        name: "Chocolate Chip Espresso Icebox Cake",
        mealType: "Dessert",
        image:
          "https://www.mymoderncookery.com/wp-content/uploads/2022/05/Chocolate-Chip-Cookie-Icebox-Cake-07-1089x1624.jpg",
      },
    ]);
  } catch (error) {
    console.log("err", +error);
  }
}
