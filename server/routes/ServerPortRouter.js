const express=require('express');
const app=express();
const router=express.Router();

const ServerPort=require('../models/ServerPort');

router.route('/add').post(function(req,res){
    const serverport=new ServerPort(req.body);
    serverport.save().then(serverport=>{
        res.json('Sever added successfully');
    }).catch(err=>{
        res.status(400).send('Unable to save to database');
    });
});

router.route('/').get(function(req,res){
    ServerPort.find(function(err,serverports){
        if(err){
            console.log(err);
        }else{
            res.json(serverports);
        }
    });
});

router.route('/edit/:id').get(function(req,res){
    const id=req.params.id;
    ServerPort.findById(id,function(err,serverport){
        res.json(serverport);
    });
});

router.route('/update/:id').post(function(req,res){
    ServerPort.findById(req.params.id,function(err,serverport){
        if(!serverport){
            return next(new Error('Could not load document'));
        }else{
            serverport.name=req.body.name;
            serverport.port=req.body.port;

            serverport.save().then(serverport=>{
                res.json('Update complete');
            }).catch(err=>{
                res.status(400).send('Unable to complete update');
            });
        }
    });
});

router.route('/delete/:id').get(function(req,res){
    ServerPort.findByIdAndRemove({_id:req.params.id},
        function(err,serverport){
            if(err)res.json(err);
            else res.json('Succefully removed');
        });
});

module.exports=router;