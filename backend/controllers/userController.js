// register a user------------
var bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)

let UserCollection = require('../models/User')

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;

    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword)

if(!name){
    return res.json({msg:"name is required", success:false});
}
if(!email){
    return res.json({msg:"email is required", success:false});
}
if(!password){
    return res.json({msg:"password is required", success:false});
}

    try {
        let data = await UserCollection.create({
            name:name,
            email,  
            password:hashedPassword
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

//update user data from the database----------
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

// user login with email and password------------
const loginUsers = async(req, res)=>{
    const {email, password} = req.body;
    if(!email){
        return res.json({msg:"email is required", success:false});
    }
    if(!password){
        return res.json({msg:"password is required", success:false});
    }

    try{
        let existingUser = await UserCollection.findOne({email:email})
        console.log(existingUser)
    
        if(existingUser){
            let comparePassword = bcrypt.compareSync(password, existingUser.password);
    
          if(comparePassword){
            return res.json({msg:"login successfull", success:true, existingUser})
        }else{
              return res.json({msg:"wrong password", success:false})
    
          }
        }else{
            return res.json({msg:"user not found", success:false})
        }
    }catch(error){
        return res.json({msg:"error in login user", success:false, error:error.message})
    }
}


// exports the variables functions------
module.exports = {
    registerUser,
    getAllusers,
    deleteUsers,
    updateUsers,
    loginUsers
   
}