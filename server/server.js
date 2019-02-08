const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const PORT=4200;
const cors=require('cors');
const config=require('./database/DB');
const  router=require('./routes/ServerPortRouter');

mongoose.connect(config.DB).then(
    ()=>{
        console.log('Database is connected');
    },
    err=>{console.log('Can  not connect to databese')}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/serverport',router);

app.listen(PORT,()=>{
    console.log('App is running on port '+ PORT);
})