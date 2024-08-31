const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    video:{
        type:String
    },
    user:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model('post', postSchema)