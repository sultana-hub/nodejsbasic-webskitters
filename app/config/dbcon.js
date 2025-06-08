
const mongoose=require('mongoose')

const dbCon=async()=>{
    try{

       const db=await mongoose.connect(process.env.MONGODB_URL)
       if(db){
        console.log('database connection successfully');
        
       }

    }catch(error){
        console.log('connection failed');
        
    }
}


module.exports=dbCon