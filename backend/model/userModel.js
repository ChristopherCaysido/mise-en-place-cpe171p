const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please add your Name']
    },
    email:{
        type:String,
        required: [true, 'Please add your E-mail']
    },
    password:{
        type:String,
        required: [true, 'Please add your password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)