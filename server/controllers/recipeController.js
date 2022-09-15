const Recipe = require("../models/recipes");


exports.getAllRecipes = async(req, res) => {
    try {
        const recipe = await Recipe.find()

        res.json(recipe)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
}

exports.getRecipeById = async (req, res) => {
    try {
        const { _id } = req.params
        const recipe = await Recipe.findOne({ _id })

        res.json(recipe)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
}

exports.deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findOneAndDelete({ _id: id })
        
        res.json(recipe)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
}

exports.createRecipe = async (req, res) => {
    try {
        const { name, type, ingredients, category, instructions} = req.body
        const createdRecipe = await new Recipe({
            name,
            type,
            ingredients,
            category,
            instructions,
        }).save()

        res.json({ 'message': 'recipe created' })
    } catch (error) {
        res.status(400).json({ "message": String(error) })
    }
}

exports.updateRecipe = async(req, res) => {
    try {
        const { recipeId } = req.body
        const { id } = req.params 

        const recipe = await Recipe.findById(id)
        recipe.newRecipe.push(recipeId)
        let updatedRecipe = await Recipe.findByIdAndUpdate(id, recipe)

        res.send(updatedRecipe)
    } catch (error) {
        res.status(500).json({ 'message': 'unable to add recipe' })
    }
}

