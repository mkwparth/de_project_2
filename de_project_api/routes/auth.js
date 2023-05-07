const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt'); 

// @desc register page
// @route POST /api/auth/register
// @access public

router.post('/register',async (req,res)=>{
    try{
       const salt = await bcrypt.genSalt(10);
       const hashedPassword=await bcrypt.hash(req.body.password,salt); 
    //    console.log("pass",hashedPassword);
       const newUser = await new User({
            name:req.body.name,
            mobileno:req.body.mobileno,
            password:hashedPassword,
            houseno:req.body.houseno,
            society:req.body.society,
            area:req.body.area,
            city:req.body.city,
            pincode:req.body.pincode,

       })
       const user = await newUser.save();
       res.status(200).json(user);

    }catch(err){
        res.status(500).json(err)
    }

    // res.status(200).json({message:'you are connected'});
})

// @desc login page
// @route POST /api/auth/login
// @access public

router.post('/login',async (req,res)=>{
    let status = true;
    try{
        const user = await User.findOne({mobileno:req.body.mobileno});
        if(!user){
            res.send("User Not found") 
            status = false;
        }
        // !user && res.status(404).json("User Not found") ;

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword){
            status=false;
            res.send({status,error:"Wrong Password"});
        }
        // !validPassword && res.status(400).json("Wrong Password");

        res.send({status,user}); 
    }catch(err){
        res.send({status,err})
        
    }
     
})

module.exports = router;

