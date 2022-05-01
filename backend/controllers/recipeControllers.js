const { GolfCourseSharp } = require('@mui/icons-material')
const asyncHandler = require('express-async-handler')

const Recipe = require('../model/recipeModel')

// @Desc        Get Saved Recipes
// @Route       GET api/recipes
// @Access      Private
const getRecipes = asyncHandler(async (req,res) => {
    const recipe = await Recipe.find()
    res.status(200).json({recipe})
})

// @Desc        Create Recipes
// @Route       POST api/recipes
// @Access      Public
const postRecipe = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Recipe.create({
        text: req.body.text
    })
    res.status(200).json({title:'Recipe Title'})
})


// @Desc        Update Recipes
// @Route       PUT api/recipes
// @Access      Private
const putRecipe = asyncHandler(async (req,res) => {
    res.status(200).json({title:`Update goal ${req.params.id}`})
})

// @Desc        DELETE Recipe
// @Route       DELETE api/recipes/:id
// @Access      Private
const deleteRecipe =asyncHandler( async (req,res) => {
    res.status(200).json({title:`Delete goal ${req.params.id}`})
})

module.exports = {
    getRecipes,
    postRecipe,
    putRecipe,
    deleteRecipe,
}