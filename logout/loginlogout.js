const express=require("express")
const route=express.Router()
route.get('/',(req,resp)=>{
    resp.clearCookie('token')
    return resp.send("logout")
})
export default route