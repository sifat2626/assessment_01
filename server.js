const {readdirSync}= require('fs')
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const {mongo} = require("mongoose");
require('dotenv').config();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

//routes middleware
readdirSync("./routes").map(r=>app.use('/api/v1',require(`./routes/${r}`)))

//server
const port = process.env.PORT||8000

//Connect to DB to start server
mongoose.connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server running on port ${port}`)
        })
    })
    .catch(err=>console.log(err))





