const mongoose = require('mongoose');

const mongooseSerial = require("mongoose-serial")

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
        default:true
    }
},{timestamps:true})

Form.plugin(mongooseSerial, { field:"serial_no"})
module.exports = mongoose.model("Form",Form)
