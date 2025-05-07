const ErrorCode = require("../helper/httpStatusCode");
const StudentModel=require('../model/student')
const fs=require('fs')


class StudentApiController{

    //create student

    async createStudent(req,res){
        console.log(req.file);
        
        try{
            //console.log(req.body);
            const{name,email,phone,city}=req.body
            const sdata=new StudentModel({
                name,email,phone,city
            })
            if(req.file){
                sdata.image=req.file.path
            }
            const data=await sdata.save()

            return res.status(ErrorCode.Create).json({
                status:true,
                message:"student create successfully",
                data:data
            })
            
        }catch(error){
            return res.status(ErrorCode.InternalServerError).json({
                status:false,
                message:error.message
            })
        }
    }

    //get all student
    async Studentlist(req,res){
        try{
            //console.log(req.body);
           const student=await StudentModel.find()

            return res.status(ErrorCode.Success).json({
                status:true,
                message:"get all student successfully",
                total:student.length,
                data:student
            })
            
        }catch(error){
            return res.status(ErrorCode.InternalServerError).json({
                status:false,
                message:error.message
            })
        }
    }

    //for get single data
    async editStudent(req,res){
        try{
            const id=req.params.id

           const edit=await StudentModel.findById(id)

            return res.status(ErrorCode.Success).json({
                status:true,
                message:"get single data",
                data:edit
            })
            
        }catch(error){
            return res.status(ErrorCode.InternalServerError).json({
                status:false,
                message:error.message
            })
        }
    }

    // for update
    async UpdateStudent(req,res){
        try{
            const id=req.params.id
            

           await StudentModel.findByIdAndUpdate(id,req.body)

            return res.status(ErrorCode.Create).json({
                status:true,
                message:"Student Update successfully",
            
            })
            
        }catch(error){
            return res.status(ErrorCode.InternalServerError).json({
                status:false,
                message:error.message
            })
        }
    }

//for delete
    async deleteStudent(req,res){
        try{
            const id=req.params.id
            
           await StudentModel.findByIdAndDelete(id)

            return res.status(ErrorCode.Create).json({
                status:true,
                message:"Student delete successfully",
            
            })
            
        }catch(error){
            return res.status(ErrorCode.InternalServerError).json({
                status:false,
                message:error.message
            })
        }
    }
}


module.exports=new StudentApiController()



