const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const client=new MongoClient(url)

async function connecttomongo(){
        let result= await client.connect();
        let db=result.db('studentinfo').collection('Students');
         return db
}
module.exports=connecttomongo