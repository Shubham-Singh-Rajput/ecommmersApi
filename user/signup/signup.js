import { validationResult } from "express-validator"
const jwt= require("jsonwebtoken")
import user from "./../../schema/user"
let signup={
    postsignupUser:async(req,resp)=>{
        try{
        
            let error=validationResult(req)
            if(!error.isEmpty()){
                let errors={}
                error.array().map(i=>{
                    errors[i.param]=i.msg
                })
                return resp.send(errors)
            }
            let persentuser=await user.findOne({email:req.body.email})
            if(!persentuser){
                let newuser=new user({
                    ...req.body
                })
                await newuser.save()
                let token=jwt.sign({id:newuser._id,type:newuser.type},"qqq")
                resp.cookie('token',token)
                return resp.json(newuser)
            }
            return resp.send("please enter the id")
        }
        catch(e){
            console.log(e.mesaage)
            return resp.json({
                msg:"some error",
                
            })
        }
    }
}
export default signup