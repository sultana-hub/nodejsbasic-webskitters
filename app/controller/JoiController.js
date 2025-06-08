const{JoiModal,validateSchema}=require("../model/joiModal")
const httpStatusCode=require("../helper/httpStatusCode")


class JoiController{
async createData(req,res){
   try {
const userData={
    name:req.body.name,
    email:req.body.email,
    city:req.body.city,
    phone:req.body.phone
}

const {error,value}=validateSchema.validate(userData)


  if(error){
    return res.status(httpStatusCode.Unauthorized).json({
        status:false,
        message:error.details[0].message
    })
  }else{
    const student=await JoiModal.create(value)
    return res.status(httpStatusCode.Create).json({
        status:true,
        message:"Data created successfully",
        data:student
    })
  }

    }catch(error){
      console.log(error)
    }
}


}

module.exports=new JoiController()