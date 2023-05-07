const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
var cors = require('cors')

const port = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/de_project");
const db = mongoose.connection;
db.once('open',() => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/services',require('./routes/service'));

app.listen(port,()=>{
    console.log(`server running on port no : ${port}`);
})