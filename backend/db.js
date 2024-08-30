const mongoose = require('mongoose')

const connectToDb= ()=>{
mongoose.connect('mongodb://localhost:27017/NotesApp')
.then(()=>console.log('mongodb connected successfully'))
.catch(()=>console.log('error in connecting to mongodb'))
}

module.exports = connectToDb;
