
const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.get('/product',(req,res)=>{
    res.send('product page')
})

const port=3005

app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})