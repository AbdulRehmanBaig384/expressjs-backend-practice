let http=require('http');
let fs=require('fs');
let path=require('path');
let server=3200;
http.createServer((request,response)=>{
    let url=request.url.toLowerCase();
    if(url==='/'){
        const filepath=path.join(__dirname,'index.html');
        fs.readFile(filepath,(error,data)=>{
            if(error){
                response.writeHead(200,{'Content-type':'text/html'})}
         else{
            response.writeHead(200,{})
         }
         response.end(data);
        })}
        else if( ['/home','/men','/women','/kide','/cart'].includes(url)){
            const section=url.slice(1)
            response.writeHead(200,{'content-type':'text/html'})
            response.end(`<h1>Welcome to the ${section.charAt(0).toUpperCase() + section.slice(1)} Section</h1><a href='/'>Back </a>`)
        }
    else{
        response.writeHead(404,{'content-type':'text/html'})
        response.end(`<h1>404 error found</h1>`)
    }
    }

    
).listen(server,(

)=>{console.log(`Server is running on port http://LocalHost:${server}`)})