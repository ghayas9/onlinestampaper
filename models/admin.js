const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    email:{
        type:String,
    },
    name:{
        type:String,
    },
    password:{
        type:String
    },
    admin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
module.exports = mongoose.model("admin",Admin)
