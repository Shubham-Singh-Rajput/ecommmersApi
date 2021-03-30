import adminRoute from "./../admin/allroutes"
import logout from "./../logout/loginlogout"
import userRoute from "./../user/allroutte"
const express=require("express")
const route=express()
route.use('/admin',adminRoute)
route.use('/user',userRoute)
route.use('/logout',logout)
export default {route}