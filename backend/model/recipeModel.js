const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title']
    }
},
{
    ingredients: {
        type: Array,
        required: [true, 'Please add Ingredients']
    }
},
{
procedures: {
    type: Array,
    required: [true, 'Please add Steps to Your Recipe']
}
}
)

module.exports = mongoose.model('Recipe',recipeSchema)