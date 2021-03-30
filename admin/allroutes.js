const signup =require("./signup/signup.js")
import { check } from "express-validator"
import login from "./login/login"
const express=require("express")
const route=express.Router()


route.post('/signup',signup.postsignup)
route.post('/login',[
    check("email","enter the email").isEmail(),
    check("password","enter the password").isLength({min:5})  
],login.login)



export default route