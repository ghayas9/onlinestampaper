const express = require('express');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 9000;

mongoose.connect(`mongodb+srv://ghayas:ghayas@cluster0.knli1.mongodb.net/stamp?retryWrites=true&w=majority`)
               .then(()=> {
                    console.log('Connected to the database ')
                }).catch( (err) => {
                        console.error(`Error connecting to the database. n${err}`);
                })
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin:'*'
}));

app.use(express.static(__dirname + '/view/build'))

app.use("/api/admin",require('./routes/admin'));
app.use("/api/user",require('./routes/User'));


app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'view','build','index.html'))
})

app.listen(PORT,()=>{
    console.log('App is running on port '+PORT)
})