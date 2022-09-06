//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

//Initialize the app object
const app = express();
const port = process.env.PORT || 5050;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
const PORT = process.env.PORT || 5050;

// routes
const routes = require("./server/routes/recipeRoutes.js");
const router = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => console.log(`listening on port ${port}`));
