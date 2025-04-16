
const express=require('express')

const app=express()




const webroute=require('./app/routes/webRouter')
app.use(webroute)



const port=3005

app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})