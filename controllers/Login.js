const jwt = require('jsonwebtoken')
const Joi = require('joi')
const jwtKey = process.env.jwtKey || 'LogIn'
const forgetKey = process.env.jwtKey || 'forgetKey'
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);
const mongoose = require('mongoose')

const User = require('../Models/User')

module.exports = {
    SignUp:async(req,res)=>{
        const value = Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            uid: Joi.string().required(),
            licence_no: Joi.string().required(),
            contact: Joi.string().required(),
            city: Joi.string().required(),
            dob: Joi.string().required(),
            p_address: Joi.string().required(),
            c_address: Joi.string().required(),
            password: Joi.string().required()
        }).validate(req.body)
        if(value.error){
            return res.status(400).json({
                 success: false, 
                 message:value.error.message
            })
        }

        try{
            const fnd = await User.findOne({uid:req.body.uid})
            if(fnd){
                //already exist
                return res.status(400).json({
                    success:false,
                    message:'UID already exist'
                })
            }else{

                //created successfully
                req.body.password = bcrypt.hashSync(req.body.password, salt)
                const newuser = new User(req.body)
                newuser._id = new mongoose.Types.ObjectId()
                const creatuser = await newuser.save()
                //account setting config..

                //******************************//
                //account setting config..
                return res.json({
                    success:true,
                    message:'created successfully',
                    user:creatuser
                })
            }
        }catch(err){
            //error message
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later',
                err
            })
        }
    },


    SignIn:async(req,res)=>{
        const value = Joi.object({
            uid: Joi.string().required(),
            password: Joi.string().required()
        }).validate(req.body)
        if(value.error){
            return res.status(400).json({
                 success: false, 
                 message:value.error.message
            })
        }
        try{
            const user = await User.findOne({uid:req.body.uid})
            if(user){
                const isPsswordcorrect = bcrypt.compareSync(req.body.password, user.password)
                if(isPsswordcorrect){

                    if(user.verify){
                        const UserData = user.toObject()
                        delete UserData.password
                        const token = jwt.sign(UserData,jwtKey)
                        return res.json({
                            success:true,
                            message:'Successfully LogIn',
                            token
                        })
                    }

                    return res.status(401).json({
                        success:false,
                        message:'User Is Unverifed'
                    })
                    
                }else{
                    return res.status(400).json({
                        success:false,
                        message:'wrong password'
                    })
                }
            }else{
                //user not found
                return res.status(404).json({
                    success:false,
                    message:'user not found'
                })
            }
        }catch(err){
            //error message
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later'
            })
        }
    },
}