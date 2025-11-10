let express = require('express')
let userRouter = express.Router()
let {createUser,getUsers,deleteUser,updateUser} = require('../controller/user')


userRouter.get('/',getUsers)
userRouter.post('/create',createUser)
userRouter.put('/update/user/:id',updateUser)
userRouter.delete('/delete/user/:id',deleteUser)

module.exports={userRouter}