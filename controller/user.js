let {user} = require('../models/userModel')


//create User
async function createUser(req,res){
    try{
        let {name,email} =req.body
        let create =await  user.create({name,email})
        if(create){
            res.status(201).json({message:'User Created Successfully'})
        }else{
            res.status(400).json({message:"User Not Creation "})
        }
    }catch(e){
        console.error(e.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

//update User
async function updateUser(req,res){
    try{
        let {id} = req.params
        let {name,email} = req.body
        let updateUser = await user.findByIdAndUpdate(id,{$set:{name,email}})

        if(updateUser){
            res.status(200).json({message:"User is Updated"})
        }else{
            res.status(400).json({message:"User is not updated"})
        }
    }catch(e){
        res.status(500).json({message:"Internal Server Error"})
    }
}

//delete User
async function deleteUser(req,res){
    try{
        let {id} = req.params
        let deleteUser = await user.findByIdAndDelete(id)
        if(deleteUser){
            res.status(200).json({message:"User is Deleted"})
        }else{
            res.status(400).json({message:"user is not Deleted"})
        }
    }catch(e){
        res.status(500).json({message:"Internal Server Error"})
    }
}

//get tasks
async function getUsers(req,res){
    try{
        let tasks = await user.find({});
        res.status(200).json(tasks)
    }catch(e){
        res.status(500).json({message:'Internal Server Error'})
    }
}





module.exports={createUser,getUsers,deleteUser,updateUser}