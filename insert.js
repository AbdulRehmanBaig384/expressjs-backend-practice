const dbconnect=require('./newmongodb');
const insert=async()=>{
    const db=await dbconnect();
     const result=await db.insertMany([
       { name:'Muhammad Umer',
age:22,course:'Javascript',Aim:'To  become Millionaire'},{name:'Ahmed Raza',age:20,course:'MERN stack',Aim:'To become Billionaire'}])
           console.log(result)
     }
insert()