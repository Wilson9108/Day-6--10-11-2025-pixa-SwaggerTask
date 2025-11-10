let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String}
})


let user = mongoose.model('users',userSchema)


module.exports={user}