const express = require('express')
const router = express.Router()
const {getRecipes,postRecipe,putRecipe,deleteRecipe} = require('../controllers/recipeControllers')

module.exports = router



router.route('/').get(getRecipes).post(postRecipe) 
router.route('/:id').put(putRecipe).delete(deleteRecipe)
module.exports = router
