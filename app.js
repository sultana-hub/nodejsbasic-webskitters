
const express=require('express')
const ejs=require('ejs')
const dbCon=require('./app/config/dbcon')
const cors=require('cors')
const path=require('path')
const bodyparser=require('body-parser')
const dotenv=require('dotenv').config()


const app=express()
dbCon()

app.set('view engine','ejs');
app.set('views','views')

app.use(cors())
//setup json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//parsing form body using bosy-parser
app.use(bodyparser.urlencoded(
    {
        limit:'100mb',
        parameterLimit:'2000'
    }
))
app.use(bodyparser.json(
    {
        limit:'100mb',
        parameterLimit:'2000'
    }
))

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const webroute=require('./app/routes/webRouter')
app.use(webroute)

const StudentApiRoute=require('./app/routes/studentApiRoute')
app.use('/api',StudentApiRoute)

const authRoute=require('./app/routes/authRouter')
app.use('/api',authRoute)

const joiRoute=require('./app/routes/joiRouter')
app.use(joiRoute)

const authEjsRoute=require('./app/routes/authEjsRouter')
app.use(authEjsRoute)

const port=3005

app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})