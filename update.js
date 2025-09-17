const dbconnect=require('./newmongodb')
const update=async()=>{
    const db=await dbconnect();
    let result=await db.updateOne({
        name:'Muhammad Umer'
    },{
        $set:{name:'Muhammad Umer Tariq'}
    })
    console.log('Data has been Updated')
}
update()