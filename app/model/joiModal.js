
const mongoose=require('mongoose')
const schema=mongoose.Schema
const Joi=require('joi')



const validateSchema=Joi.object({
name:Joi.string().min(3).required(),
email:Joi.string().required()
.email({ minDomainSegments: 2, tlds: { allow: ["com", "net","in"] } } ),
city:Joi.string().required(),
phone:Joi.string().min(10).required()
})

const joiSchema=new schema({
 name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
},{timestamps:true})

const JoiModal=mongoose.model('joiModal',joiSchema)
module.exports={JoiModal,validateSchema}