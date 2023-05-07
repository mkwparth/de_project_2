const mongoose = require("mongoose");
const servicemanSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        length:10,
        required:true   
    },
    serviceCharge:{
        type:Number,
        required:true   
    },
    area:{
        type:String,
        required:true   
    },
    serviceProvide:{
        type:String,
        required:true   
    },
    rating:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    }
},
{timestamps:true}
)

module.exports = mongoose.model('ServiceMan',servicemanSchema);