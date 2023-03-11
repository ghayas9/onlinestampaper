const mongoose = require('mongoose');

const userRegister = new mongoose.Schema({
    idNumber:{
        type:Number
    },
    firstName:{
        type:String,
        max:15,
    },
    lastName:{
        type:String,
        max:15,
    },
    licenceNo:{
        type:Number,
        max:13,
        required:true
    },
    contact:{
        type:String,
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



// const formsSlip = new mongoose.Schema({
//     accountNo:{
//         type:Number,
//         required:true
//     },
//     bankBranchName:{
//         type:String,
//         required:true
//     },
//     branchCode:{
//         type:Number,
//         required:true
//     },
//     challanNo:{
//         type:Number,
//         required:true
//     },
//     licenceNo:{
//         type:Number,
//         required:true
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     fatherName:{
//         type:String,
//         required:true
//     },
//     formPrice:{
//         type:Number,
//         required:true
//     },
//     totalForm:{
//         type:Number,
//         required:true
//     },
//     amountPaid:{
//         type:Number,
//         required:true
//     },
//     date:{
//         type:Date,
//         required:true
//     }
// })

module.exports = mongoose.model("UserRegister",userRegister)
                //   mongoose.model('UserSlip',formsSlip)}