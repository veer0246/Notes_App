const express = require('express');
const router = express.Router();
const UserCollection = require('../models/User')

router.post('/register', async(req,res)=>{
    const {name, email, password}= req.body;

    try{
        let data = await UserCollection.create({
            name:name,
            email,
            password
          })
         return res.json({msg:"user registered successfully", data, success:true})

        }catch (error) {
       return res.json({msg:"error in creating user", success:false, error:error.message})
        
    }
})
module.exports = router