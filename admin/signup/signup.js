import admin from "./../../schema/admin"

const jwt =require("jsonwebtoken")
import user from "./../../schema/user"
let signup={
    postsignup:async(req,resp)=>{
        try{
            let persentadmin=await admin.findOne({email:req.body.email})
            if(!persentadmin){
                let newadmin=new admin({
                    ...req.body
                })
                await newadmin.save()
               
                let token=await jwt.sign({id:newadmin._id,type:newadmin.type},"qqq")
                resp.cookie('token',token)
                return resp.json(newadmin)
            }
            return resp.send("please enter the valid emailid which is not present")
        }
        catch(e){
            let error={}
            for (const key in e.errors) {
                error[key]=e.errors[key].message
            }
            return resp.json(error)

        }
    }
    
}
module.exports=signup