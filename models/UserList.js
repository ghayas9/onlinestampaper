const mongoose = require('mongoose')

const userListSchema = new mangoose.Schema({
    userID:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    forms:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }

})


module.exports =mongoose.model("UserList",userListSchema)