const Joi = require('joi')
const mongoose = require('mongoose')
const Form = require('../Models/Form')

module.exports = {
    createForm:async(req,res)=>{
        const value = Joi.object({
            serial_no: Joi.string().required(),
            user_name: Joi.string().required(),
            title: Joi.string().required(),
            licence_no: Joi.string().required(),
            contact: Joi.string().required(),
            customer_name: Joi.string().required(),
            customer_cnic: Joi.string().required(),
        }).validate(req.body)
        if(value.error){
            return res.status(400).json({
                 success: false, 
                 message:value.error.message
            })
        }
        try{
            const newForm = new Form(req.body)
            newForm._id = new mongoose.Types.ObjectId()
            newForm.uid = new mongoose.Types.ObjectId(req.payload._id)
            const creatform = await newForm.save()

            return res.json({
                success:true,
                data:creatform
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later',
                err
            })
        }

    },
    getAllForm:async(req,res)=>{
        try{
            const allform = await Form.find({uid:req.payload._id})
            return res.json({
                success:true,
                data:allform
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later',
                err
            })
        }
    },
    getOneForm:async(req,res)=>{
        try{
            const allform = await Form.findOne({uid:req.payload._id,_id:req.params.id})
            return res.json({
                success:true,
                data:allform
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later',
                err
            })
        }
    }
}