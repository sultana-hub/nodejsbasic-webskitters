


class HomeController{

     homePage(req,res){
        res.render('home',{
            title:"home page",
            user:{
                name:"subir",
                email:"subir@gmail.com",
                phone:"7788965656"

            }
        })

    }
}


module.exports=new HomeController()