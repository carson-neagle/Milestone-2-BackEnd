//Dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Initialize the app object
const app = express();
const port = process.env.PORT || 5050;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/recipes", require('./server/controllers/recipeController'));

//db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5050;

app.listen(port, () => console.log(`listening on port ${port}`));
