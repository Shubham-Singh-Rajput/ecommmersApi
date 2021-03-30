const express=require("express")
const route=express.Router()
import { check } from "express-validator"
import signup from "./signup/signup"
import login  from "./login/login"
// console.log("yha")
route.post('/signup',[
    check("name","Enter the name").not().isEmpty(),
    check("email","enter the email").isEmail(),
    check("password","enter the password").isLength({min:5})
],
signup.postsignupUser)
route.post('/login',[
    check("email","enter the email").isEmail(),
    check("password","enter the password").isLength({min:5})  
],login.login)
export default route
