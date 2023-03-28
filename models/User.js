const mongoose = require('mongoose');

const userRegister = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    uid:String,
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    licence_no:{
        type:Number,
    },
    password:{
        type:String
    },
    contact:{
        type:String,
    },
    p_address:{
            type:String,
        },
    c_address:{
            type:String,
    },
    city:{
        type:String,
    },
    verify:{
        type:Boolean,
        default:false
    }
},{timestamps:true})



module.exports = mongoose.model("UserRegister",userRegister)
