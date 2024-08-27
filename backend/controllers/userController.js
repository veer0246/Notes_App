// register a user------------
let UserCollection = require('../models/User')

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;

    try {
        let data = await UserCollection.create({
            name:name,
            email,
            password
        })

        return res.json({msg:"data saved successfully", success:true,data})

    } catch (error) {
        return res.json({msg:"error in creating user", success:false,error:error.message})
    }
}
// get all users data-----------
const getAllusers = async(req, res)=>{
    let data = await UserCollection.find();

    try {
        return res.json({msg:"user fetched successfully", success:true,data})
    } catch (error) {
        return res.json({msg:"error in getting user", success:false,error:error.message})
    }
}

// exports the variables functions------
module.exports = {
    registerUser,
    getAllusers
   
}