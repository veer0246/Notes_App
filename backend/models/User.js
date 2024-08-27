const mongoose = require('mongoose')
const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true,
        trim:true   // it's remove the whitespace from name
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true}) 

module.exports = mongoose.model('Users', userSchema)