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

// delete user data from the database-------
const deleteUsers = async (req, res)=>{
    let id = req.params._id
    console.log(id) 
    let data = await UserCollection.findByIdAndDelete(id)
    try{
        return res.json({msg:"user delete successfully", success:true})
    }catch(error){
        return res.json({msg:"error in deleteing user", success:false})
    }
}
const updateUsers= async(req, res)=>{
    let id = req.params._id
    let {name,email,password} = req.body

    await UserCollection.findByIdAndUpdate(id, {$set:{name,email,password}})
    try{
        return res.json({msg:'user data updated', success:true})
    }catch(error){
        return res.json({msg:"error in updating user", success:true})
    }

}



// exports the variables functions------
module.exports = {
    registerUser,
    getAllusers,
    deleteUsers,
    updateUsers
   
}