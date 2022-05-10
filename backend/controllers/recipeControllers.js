const asyncHandler = require('express-async-handler')


const Recipe = require('../model/recipeModel')
const User = require('../model/userModel')

// @Desc        Get Saved Recipes
// @Route       GET api/recipes
// @Access      Private
const getRecipes = asyncHandler(async (req,res) => {
    const recipe = await Recipe.find({user: req.user.id})
    res.status(200).json({recipe})
})

// @Desc        Create Recipes
// @Route       POST api/recipes
// @Access      Public
const postRecipe = asyncHandler(async (req,res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const recipe = await Recipe.create({
        title: req.body.title,
        ingredients: req.body.ingredients,
        procedures: req.body.procedures,
        user: req.user.id,

    })
    res.status(200).json({recipe})
})


// @Desc        Update Recipes
// @Route       PUT api/recipes
// @Access      Private
const updateRecipe = asyncHandler(async (req,res) => {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
        res.status(400)
        throw new Error('Recipe not found')
    }
    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the goal
    if(recipe.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json({updatedRecipe})
})

// @Desc        DELETE Recipe
// @Route       DELETE api/recipes/:id
// @Access      Private
const deleteRecipe = asyncHandler( async (req,res) => {
    const recipe = await Recipe.findById(req.params.id)

    if(!recipe) {
        res.status(400)
        throw new Error('Recipe Not Found')
    }
    // Check for user
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the goal
    if(recipe.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }
    
    await recipe.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRecipes,
    postRecipe,
    updateRecipe,
    deleteRecipe,
}