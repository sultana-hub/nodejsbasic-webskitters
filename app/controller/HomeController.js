


class HomeController{

    async  homePage(req,res){
        try{
            res.render('home',{
                title:"home page",
            })

        }catch(error){
            console.log(error);
            

        }

    }
    aboutPage(req,res){
        res.render('about',{
            title:"about page",
        })

    }
}


module.exports=new HomeController()