const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobileno:{
        type:Number,
        length:10,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    houseno:{
        type:Number,
        required:true,
    },
    society:{
        type:String,
        required:true,
    },
    area:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        length:6,
        required:true
    }
},
{timestamps:true}
)

module.exports = mongoose.model('User',userSchema);

