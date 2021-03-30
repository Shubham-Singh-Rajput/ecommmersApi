import { validationResult } from "express-validator"
const user=require("./../../schema/user")
const jwt=require("jsonwebtoken")
let login={
    login:async(req,resp)=>{
        try{
        let error=validationResult(req)
        if(!error.isEmpty()){
            let errors={}
            error.array().map(i=>{
                errors[i.param]=i.msg
            })
            return resp.json({errors})
        }
        let userFind=await user.findOne({email:req.body.email})
        if(userFind){
        if(userFind.password==req.body.password){
            let token=jwt.sign({id:userFind._id,type:userFind.type},"qqq")
            resp.cookie('token',token)
            return resp.send(userFind)
        }
        return resp.json({
            ...req.body,
            msg:"enter the valid password"
        })
    }
    return resp.json({
        ...req.body,
        msg:"enter the valid userEmail"
    })
}
    
    catch(e){
        console.log(e.message)
        return resp.send("Some error")
    }
}
}

export default login