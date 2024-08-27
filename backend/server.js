const express = require('express')
const app = express();
const port = 8080;
const connectToDb = require('./database.js')
connectToDb();

const UserCollection = require('./models/User')

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('welcome page')
})

app.post('/register', async(req,res)=>{
    const {name, email, password}= req.body;

    try{
        let data = await UserCollection.create({
            name:name,
            email,
            password
          })
         return res.json({msg:"user registered successfully", data, success:true})

        }catch (error) {
       return res.json({msg:"error in creating user", data, success:false, error:error.errmsb})
        
    }
})

app.listen(port, ()=>{
    // console.log('server is running at port ' + port)
    console.log(`server is running at http://localhost:${port}`)
})