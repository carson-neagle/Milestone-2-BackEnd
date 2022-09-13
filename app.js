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
app.use(express.static("public"));
app.set("view engine", "ejs");
const PORT = process.env.PORT || 5050;

// routes & controllers
app.use("/recipes", require('./server/controllers/recipeController'));

app.get('/', (req,res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.status(404).render('error404');
})

app.listen(port, () => console.log(`listening on port ${port}`));
