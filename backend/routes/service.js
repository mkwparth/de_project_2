const express = require('express');
const router = express.Router();
const ServiceMan = require('../models/serviceman');
const path = require('path');
const User = require('../models/user');

router.post('/register', async (req, res) => {
    try{
        const newServiceman =await new ServiceMan({
            name:req.body.name,
            mobileno:req.body.mobileno,
            serviceCharge:req.body.serviceCharge,
            area:req.body.area,
            serviceProvide:req.body.serviceProvide,
            rating:req.body.rating,
            email:req.body.email 
        });

        const newservice = await newServiceman.save();
        res.status(200).json(newservice);

    }catch(err){
        res.status(500).json(err);
    }
    // res.status(200).json("Register page is called");
})

router.get('/:serviceType',async (req,res)=>{
    let status = false;
    try{
       const services = await ServiceMan.find({serviceProvide:{$regex:req.params.serviceType,$options: 'i'}});
       if(services.length < 1){
           res.status(404).json({status,error:"Service Not available"});
       }
       res.status(200).json({status,services});
    }catch(err){
        // status = false;
        res.status(500).json({status,err});
    }
})

// router.post('/name',async (req,res)=>{
//     let status = true;
//     try{
//         const servicemanName = await ServiceMan.find({
//             name:{
//                 $regex:req.body.name,$options:'i'
//             }
//         });
//         if(servicemanName.length < 1){
//             status = false;
//             res.status(404).json({status,err:"User Not Found"});
//         }
//       res.status(200).json(servicemanName)
//     }catch(err){
//         status = false;
//         res.status(500).json({status,err});
//     }
// })

// fetch user details
// http://localhost:5000/api/services/name/64913faa79f4e9fc9ce0faee


router.get('/name/:userToken',async (req,res)=>{
    try{
        // console.log("token" + req.params.userToken);
        const user = await User.findById(req.params.userToken);
        if(!user){
            throw { message: 'User Not found' };
        }
        res.send(user);
    }catch(e){
        res.status(404).json({message:"User Not found"})
    }
});

module.exports = router;
