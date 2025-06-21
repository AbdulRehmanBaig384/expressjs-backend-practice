// const index=require('./app.js')
// console.log(index)
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.filter((element)=>{
//     if(element>=4){
//         console.log(element)
//     }
// })
// let fs=require('fs')
// fs.writeFileSync('node.txt','Hello welcome to the ubit ')

// const https=require('http')
// https.createServer((request,response)=>{
//     response.write('Hello Abdul Rehman From Server')
//     response.end()
// }).listen(4500)

// const fs=require('fs')
//     fs.writeFile('output.txt','Writing File',(error)=>{
//         if(error){
//             console.log('code is died')
//         }
//     })

    const http=require('http')
    const fs=require('fs')
    function requestlisner(request,response){
        console.log(request.url,request.method,request.headers)
       if(request.url==='/'){
            response.setHeader('content-Type','text/html')
            response.write('<html>')
            response.write('<head><title>My first Page as a Node js </title></head>')
            response.write('<body><h1>Welcome to Node js</h1>')
            response.write('<form action="/submit-details" method="POST">')
            response.write('<input type="text" name="username" placeholder="Enter your name" >')
            response.write('<label for="male">Male</label>')
            response.write('<input type="radio" name="gender" id="male" value="male">')
            response.write('<label for="female">Female</label>')
            response.write('<input type="radio" name="gender" id="Female" value="Female">')
            response.write('<input type="submit" value="Submit">')
            response.write('</form>')
            response.write('</body>')  
            response.write('Hello Abdul Rehman From Server');
        return response.end();

        }
 else if(request.url==='/professional'){
        response.setHeader('content-Type','text/html')
        response.write('<html>')
        response.write('<head><title>My first Page as a Professional carrer </title></head>')
        response.write('<body> <h1>Please checkout the product </h1><h2>Welcome to Node js</h2></body>')  
        response.write('Hello Abdul Rehman From Server')

        response.end()
    }
else if(request.url==='/submit-details' && request.method==='POST'){
    fs.writeFileSync('form.txt','Form Submitted')
    response.statusCode=302
    response.setHeader('Location','/')
   
}}
    const port=4510
    http.createServer(requestlisner).listen(port,()=>{
        console.log(`Server is running on port http://LocalHost:${port}`)

    })
