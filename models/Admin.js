const mongoose = require('mongoose')

const registerAdmin = new mongoose.Schema({
    idNumber:{
        type:Number,
        required:true
    },
    firstName:{
        type:String,
        max:15,
        required:true,
    },
    lastName:{
        type:String,
        max:15,
        required:true
    },
    image:{
        type:String,
        default:"you can add png iamge"
    },
    dateOfBirth:{
        type:String
    },
    contact:{
        type:Number,
        required:true
    },
    presAddress:{
            type:String,
            max:20,
            required:true
    },
    permAddress:{
            type:String,
            max:30,
            required:true
    },
    city:{
        type:String,
        max:30,
        required:true
    },
    date: {
        type: Date,
        default: Date.now(),
      }
})




module.exports = mongoose.model('AdminRegistration',registerAdmin)