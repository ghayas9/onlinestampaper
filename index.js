const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://mustafa1:mustafa1@realexample.frcboi4.mongodb.net/?retryWrites=true&w=majority/test`)
               .then(()=> {
                    console.log('Connected to the database ')
                }).catch( (err) => {
                        console.error(`Error connecting to the database. n${err}`);
                })
const app = express();
const corsOption = {
                exposeHeaders:['token'],
                origin:'http://localhost:3000'
            }

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use("/api/admin",adminRoute);
app.use("/api/user",userRoute);
// app.use("/api/profession",professionRoute);
app.listen(PORT,()=>{
    console.log('App is running on port 5000.')
})