const express = require('express')
const app = express();
const port = 8080;
const connectToDb = require('./database.js')
connectToDb();


// all routes files
let userRoutes = require('./routes/userRoutes')
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('welcome page')
})
app.use('/user',userRoutes)






app.listen(port, ()=>{
    // console.log('server is running at port ' + port)
    console.log(`server is running at http://localhost:${port}`)
})