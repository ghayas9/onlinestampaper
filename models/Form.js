const mongoose = require('mongoose');

const Form = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    uid:mongoose.Types.ObjectId,
    serial_no:String,
    user_name:{
        type:String,
    },
    licence_no:{
        type:Number,
    },
    title:{
        type:String
    },
    contact:{
        type:String,
    },
    customer_name:{
            type:String,
        },
    customer_cnic:{
            type:String,
    },
    accepted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


module.exports = mongoose.model("Form",Form)
