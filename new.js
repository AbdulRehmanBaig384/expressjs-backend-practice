const express=require('express');
require('./config');
const Students=require('./product');

const app=express();
app.use(express.json())
app.post('/create',async(request,response)=>{
    let student = new Students(request.body);
    let result=await student.save()
    console.log(result)
    response.send(result)
})






app.get('/list',async(request,response)=>{
    let data=await Students.find();
    response.send(data)
})

app.listen(4000)