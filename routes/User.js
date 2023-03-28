const express = require('express')
const   { auth }  = require('../controllers/auth')
const { SignUp, SignIn } = require('../controllers/Login')
const { createForm, getAllForm, getOneForm } = require('../controllers/User')

const route = express.Router()

route.post('/signup',SignUp)
route.post('/signin',SignIn)

route.post('/create/form',auth,createForm)
route.get('/get/form',auth,getAllForm)
route.get('/get/form/:id',auth,getOneForm)

module.exports = route