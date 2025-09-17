// const express=require('express');
// const res = require('express/lib/response');
// const app=express();
// app.get('',(request,response)=>{
//     response.send('<h1>hello this is a home pages</h1>')
//     console.log('request send by==>',request.query.name)
// })
// app.get('/about',(request,response)=>{
//     response.send(`
//         <input type='text' placeholder='Enter your name'/>
//         hello this is a about pages <a href='/'>Go to home page</a>`);
// })
// app.listen(2500);


// how to access html page in express.js

// const express=require('express')
// const app=express();
// const path=require('path');
// const publicfilepath=path.join(__dirname,'public');
// app.use(express.static(publicfilepath))
// // console.log(publicfilepath);

// const port=2200;
// app.get('/',(_,resp)=>{
//      resp.sendFile(`${publicfilepath}/index.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicfilepath}/about.html`)
// })

// app.get('/contact',(_,resp)=>{
//   resp.sendFile(`${publicfilepath}/contact.html`)
// })

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicfilepath}/nopage.html`)
// })
// app.listen(port,()=>{
// console.log(`Server is running at port http://localhost:${port}`)
// })




// const express=require('express')
// const app=express();
// const path=require('path');
// const publicfilepath=path.join(__dirname,'public');
// app.use(express.static(publicfilepath))
// // console.log(publicfilepath);

// app.set('view engine','ejs');


// const port=2200;

// app.get('/',(_,resp)=>{
//      resp.sendFile(`${publicfilepath}/index.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicfilepath}/about.html`)
// })

// app.get('/contact',(_,resp)=>{
//   resp.sendFile(`${publicfilepath}/contact.html`)
// })

// app.get('/profile',(_,resp)=>{
//   const user={
//     name:'abdul rehman',
//     email:'rehman212@gmail.com',
//     age:19
//   }
//   resp.render('profile',{user})
// })

// // app.get('*',(_,resp)=>{
// //     resp.sendFile(`${publicfilepath}/nopage.html`)
// // })
// app.listen(port,()=>{
// console.log(`Server is running at port http://localhost:${port}`)
// })



// middleware of te functions
// const express=require('express')
// const app=express();
// const path=require('path');
// const requirefilter=(req,res,next)=>{
//   console.log('this is a middleware functions');
//   if(!req.query.age){
//     res.send('<h1>Please provide your Age</h1>');}
//     else if(req.query.age<18){
//       res.send('<h1>Sorry you are not allowed to access this pages</h1>')
//     }
//     else{
//       console.log('Now You are allowed to access this pages');
//       next()
//     }
//   }
// app.use(requirefilter);

// app.get('/',(request,response)=>{
// response.send('<h1>Hello this is a home page</h1>')
// })
// app.get('/users',(request,response)=>{
//   response.send('<h1>Hello this is a users page</h1>')
// })
// app.listen(3200)



//if we want to use middleware for specific route then we can use it like this
// const express=require('express')
// const app=express();
// const path=require('path');
// const requirefilter=(req,res,next)=>{
//   console.log('this is a middleware functions');
//   if(!req.query.age){
//     res.send('<h1>Please provide your Age</h1>');}
//     else if(req.query.age<18){
//       res.send('<h1>Sorry you are not allowed to access this pages</h1>')
//     }
//     else{
//       console.log('Now You are allowed to access this pages');
//       next()
//     }
//   }

// app.get('/',(request,response)=>{
// response.send('<h1>Hello this is a home page</h1>')
// })
// app.get('/users',requirefilter,(request,response)=>{
//   response.send('<h1>Hello this is a users page</h1>')
// })
// app.listen(3200)


// if we don't want to use requirefilter middleware for all the routes then we can use it like this

const express=require('express')
const app=express();
const path=require('path');
const requirefilter=(req,res,next)=>{
  console.log('this is a middleware functions');
  if(!req.query.age){
    res.send('<h1>Please provide your Age</h1>');}
    else if(req.query.age<18){
      res.send('<h1>Sorry you are not allowed to access this pages</h1>')
    }
    else{
      console.log('Now You are allowed to access this pages');
      next()
    }
  }
  const route=express.Router()

app.get('/',(request,response)=>{
response.send('<h1>Hello this is a home page</h1>')
})
route.get('/users',(request,response)=>{
  response.send('<h1>Hello this is a users page</h1>')
})
app.get('/contact',(request,response)=>{
  response.send('<h1>Hello this is a Contact page</h1>')
})
route.get('/about',(request,response)=>{
  response.send('<h1>Hello this is a About page</h1>')
})
route.get('/Feedback',(request,response)=>{
  response.send('<h1>Hello this is a Feedback page</h1>')
})
app.use('/',route)
app.listen(3200)