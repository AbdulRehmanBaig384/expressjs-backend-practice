// const {MongoClient}=require('mongodb')
// const url='mongodb://localhost:27017'
// const client=new MongoClient(url)
// async function connecttomongo(){
//     try{
//         let result=await client.connect();
//         let db=result.db('studentinfo');
//         let collection=db.collection('Students')
//         console.log("Connected to mongodb suceessfully ")
//         let finddata=await collection.find({}).toArray()
//         console.log(finddata)
//     }
//     catch(error){
//         console.log("Error connecting to mongodb:",error)
//     }
// }

// connecttomongo()





// new way to connect to mongodb using async await
// const {MongoClient}=require('mongodb')
// const url='mongodb://localhost:27017'
// const client=new MongoClient(url)
// async function connecttomongo(){
//         let result= await client.connect();
//         let db=result.db('studentinfo');
//          return db.collection('Students')
    
// }
const dbconnect=require('./newmongodb')

let main=async ()=>{
    let data=await dbconnect()
    data=await data.find().toArray()
    console.log(data)
}

main()