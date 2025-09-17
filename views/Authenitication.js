const monngoose=require('mongoose');
const userSchema=new monngoose.Schema({
    name:{
       type:String,
    required:true,},
    email:{
        type:String,
    required:true    
    ,unique:true,
    } 
    ,password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=monngoose.model('User',userSchema);
module.exports=User;