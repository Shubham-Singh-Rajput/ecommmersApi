const jwt=require("jsonwebtoken")
const auth=async (req,resp,next)=>{
    try{
    if(req.cookies.token){
        let data=await jwt.verify(req.cookies.token,"qqq")
        req.data=data
        return next()
    }
    return resp.json({
        msg:"please login"
    })
}
catch(e){
    console.log(e.message)
    return resp.send("some error")
}
}
export default auth
