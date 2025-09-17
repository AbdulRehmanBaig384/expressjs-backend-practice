const dbconnect=require('./newmongodb');
const deletedata =async ()=>{
    const db=await dbconnect();
    const result=await db.deleteMany({
        name:'Ahmed Raza'
    })
    console.log('Data has been deleted',result)
}
deletedata();