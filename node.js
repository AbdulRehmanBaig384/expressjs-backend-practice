// let http=require('http');
// http.createServer((request,response)=>{
//     response.writeHead(200,{'content-type':'text/html'});
//     response.write(JSON.stringify({name:'Abdul Rehman',age:20,course:'Software Engineering'}))
// response.end();
// }).listen((3100),()=>{
//          console.log(`Server is running at http://localhost:3100`)
// })




//input from command lines
// console.log(process.argv)
// const fs=require('fs');
// const input=process.argv;
// // fs.writeFileSync(input[2],input[3])

// if(input[2]==='add'){
//     fs.writeFileSync(input[3],input[4]);
//     console.log('File Created Successfully');
// }
// else if(input[2]==='remove'){
//     fs.unlinkSync(input[3])   //remove the file system
//     console.log('File removed Suceesfully')
// }
// else{
//     console.log('invalid input')
// }


// CRUD OPERATIONS
// const fs=require('fs');
// //  agar hum kis exist folder mai file add karni ho tu hum particular step ko fllow karen gai
// const path=require('path')
// const dirpath=path.join(__dirname,'crud')
// const filepath=`${dirpath}/apple.txt`;
// const data='hello how are you bro';
// // fs.writeFileSync(filepath,data)

// fs.readFile(filepath,(err,coontent)=>{  //hum utf8 is liyai used kartai hai kai hum us mai number ko string mai convert karen
//     console.log(coontent); //out put buffer 66c 66c433c
// })
// //in this process we have to read files
// fs.readFile(filepath,'utf8',(err,coontent)=>{  //hum utf8 is liyai used kartai hai kai hum us mai number ko string mai convert karen
//     console.log(coontent);
// })

// fs.appendFile(filepath,'an flie name is apple.txt',(error)=>{
//     if(!error) console.log('file is updated ')
// })
// fs.unlinkSync(filepath)

// asynchronus functions
let a=20;
let waiting_data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve(30)
    },3000)
})
waiting_data.then((b)=>{
    console.log(a+b)
})