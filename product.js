const moongoose=require('mongoose');
const studentschema=new moongoose.Schema({
    name:String,
    age:Number,
    course:String,
    Aim:String,
})
module.exports = moongoose.model('Students',studentschema);