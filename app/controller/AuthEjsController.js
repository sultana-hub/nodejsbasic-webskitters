const httpStatusCode = require('../helper/httpStatusCode')
const UserModel = require('../model/user')
const { hashedPassword, comparePassword } = require('../middleware/auth')
const jwt = require('jsonwebtoken')


class AuthEjsController {

    async registerView(req, res) {
        try {
            res.render('register', { title: "user register" })
        } catch (error) {
            console.log(error.message)
        }

    }
    async registerCreate(req, res) {
        try {

            const { name, email, password, phone } = req.body
            const existEmail = await UserModel.findOne({ email })
            if (existEmail) {
                return res.status(httpStatusCode.Conflict).json({
                    status: false,
                    message: "Email already exist"
                })
            }

            const hash = hashedPassword(password)

            const userData = await new UserModel({
                name, email, password: hash, phone
            }).save()

            console.log('user', userData);
            //const data=await userdata.save() 

            if (userData) {
                return res.redirect('/login')
            } else {
                return res.redirect('/register')
            }

        } catch (error) {
            console.log(error.message)
        }
    }
    async loginView(req, res) {
        try {
            res.render('login', { title: "login page" })
        } catch (err) {
            console.log(err.message)
        }
    }

    async loginCreate(req, res) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                console.log("Email and password required")
                return res.redirect('/login')
            }

            const user = await UserModel.findOne({ email })
            if (!user) {
                console.log(" Email does not exist")
                return res.redirect('/login')
            }

            const ismatch = comparePassword(password, user.password)
            if (!ismatch) {
                console.log("Invalid password")
                return res.redirect("/login")
            }

            const token = jwt.sign({
                _id: user._id,
                name: user.name,
                email: user.email
            }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' })

            if (token) {
                res.cookie("userToken", token)
                return res.redirect("/user/dashboard")
            }
            else {
                console.log("invalid credentials")
                return res.redirect('/login')
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    async userDashboard(req, res) {
        try {
            res.render("dashboard", { title: "user dashboard" })
        } catch (error) {
            console.log(error.message)
        }

    }

    async logout(req,res){
        try{
          res.clearCookie("userToken")
          return res.redirect("/login")
        }catch(error){
            console.log(error.message)
        }
    }

}

module.exports = new AuthEjsController()