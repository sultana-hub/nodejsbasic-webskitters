
const express=require('express')
const ejs=require('ejs')

const app=express()


app.set('view engine','ejs');
app.set('views','views')

const webroute=require('./app/routes/webRouter')
app.use(webroute)



const port=3005

app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})