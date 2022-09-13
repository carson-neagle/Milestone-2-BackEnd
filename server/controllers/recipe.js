const router = require('express').Router()
const places = require("../models/recipes")

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.ingredients) {
        req.body.ingredients = 'Ingredients'
    }
    if (!req.body.instructions) {
        req.body.instructions = 'Instructions'
    }
    places.push(req.body)
    res.redirect('/recipes')
})


router.get('/', (req, res) => {
    res.render('recipes/index', { recipes })
})


router.get('/new', (req, res) => {
    res.render('recipes/new')
});

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!recipes[id]) {
        res.render('error404')
    } else {
        res.render('recipes/show', { recipe: recipes[id], id })
    }
})

router.delete('/recipes/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        recipes.splice(i, 1)
        res.redirect('/recipes')
    }
})

module.exports = router