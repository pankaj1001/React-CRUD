

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ServerPort=new Schema({
    name:{
        type:String
    },
    port:{
        type:Number
    }
});

module.exports=mongoose.model('ServerPort',ServerPort);