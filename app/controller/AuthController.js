const httpStatusCode = require("../helper/httpStatusCode");
const { hashedPassword } = require("../middleware/auth");
const userModel = require("../model/user");



class AuthController {

    async register(req, res) {
        try {
            //console.log(req.body);
            const { name, email, password, phone } = req.body

            const hashed=hashedPassword(password)
            
            const userData = new userModel({
                name, email, password:hashed, phone
            }

            )
           const data= await userData.save()
           return res.status(httpStatusCode.Create).json({
            status:true,
            message:"user created successfully",
            data:data
           })
        } catch (error) {
            return res.status(httpStatusCode.InternalServerError).json({
                status: false,
                message: error.message
            })
        }

    }
}


module.exports = new AuthController()