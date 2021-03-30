import { validationResult } from "express-validator"
const admin=require("./../../schema/admin")
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
        let adminFind=await admin.findOne({email:req.body.email})
        if(adminFind){
        if(adminFind.password==req.body.password){
            let token=jwt.sign({id:adminFind._id,type:adminFind.type},"qqq")
            resp.cookie('token',token)
            return resp.send(adminFind)
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