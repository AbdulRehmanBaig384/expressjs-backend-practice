const { name } = require('ejs');
const mongoose=require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/studentinfo';


 const stuSchema=new mongoose.Schema({
  name:String,
  age:Number,
  course:String,
  Aim:String,
})

// // const main= async() =>{
// //   const db=await mongoose.connect(url)
// //  const StudentModel=mongoose.model('Students',stuSchema);
// // let data= new StudentModel({name:'m8',age:20})
// // let result=await data.save();
// // console.log(result)
// // }
// // main();

// const updateinongo=async()=>{
//   await mongoose.connect(url)
//   const Product=mongoose.model('Students',stuSchema);
//   const datas=await Product.find();
//   console.log(datas);
//   // let data=await Product.updateOne({name:"mustafa"},{$set:{age:50,course:"MERN",Aim:"Become a Full Stack Developer"}})
//   let data = await Product.updateOne(
// //   { name: "mustafa" },
// //   { $set: { age: 50, course: "MERN", aim: "Become a Full Stack Developer" } }
// // );

// //   console.log(data)
//   )}
// updateinongo();


const mongoose = require('mongoose');

// correct DB name
const url = 'mongodb://127.0.0.1:27017/newmongo';

const stuSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  aim: String
});

// Note: give exact collection name as 3rd parameter
const Product = mongoose.model('Students', stuSchema, 'studentinfo.Students');

const testConnection = async () => {
  await mongoose.connect(url);
  const datas = await Product.find();
  console.log("All data:", datas);
}

testConnection().catch(err => console.error("Error:", err));

