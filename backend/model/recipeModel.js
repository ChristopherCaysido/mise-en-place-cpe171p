const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add title']
    },
    ingredients: {
        type: Array,
        required: [true, 'Please add ingredients']
    },
    procedures: {
        type: Array,
        required: [true, 'Please Add Procedures of the Recipe']
    }
}

)

module.exports = mongoose.model('Recipe',recipeSchema)