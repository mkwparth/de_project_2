const express = require('express');
const router = express.Router();
const ServiceMan = require('../models/serviceman');
const path = require('path');

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

router.post('/name',async (req,res)=>{
    let status = true;
    try{
        const servicemanName = await ServiceMan.find({
            name:{
                $regex:req.body.name,$options:'i'
            }
        });
        if(servicemanName.length < 1){
            status = false;
            res.status(404).json({status,err:"User Not Found"});
        }

      res.status(200).json(servicemanName)
    }catch(err){
        status = false;
        res.status(500).json({status,err});
    }
})


module.exports = router;
