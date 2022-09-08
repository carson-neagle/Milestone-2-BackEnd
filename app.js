//Dependencies
const express = require("express");
require("dotenv").config();
const routes = require("./server/routes/recipeRoutes.js");

//Initialize the app object
const app = express();

// middleware
app.use(express.json());
const PORT = process.env.PORT || 3000;

// routes

app.use("/recipe", routes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
