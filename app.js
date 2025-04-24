
const express=require('express')
const ejs=require('ejs')

const app=express()


app.set('view engine','ejs');
app.set('views','views')

app.use(express.static(__dirname + '/public'));

const webroute=require('./app/routes/webRouter')
app.use(webroute)



const port=3005

app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})