import "babel-polyfill"
import route from "./aallroute/allroute"
const connect=require("./connect/connect")
const server=require("express")
const session=require("express-session")
import login from "./validation/loginauth"
const cookiePraser=require("cookie-parser")
connect()
const app=server()

app.use(server.json())
app.use(server.urlencoded({extended:true}))
app.use(cookiePraser())
app.use(session({
    secret:"keyboard cat",resave:true,saveUninitialized:true
}))

app.use(route.route)

app.get('/check',login,(req,resp)=>{
    return resp.json({
        data:req.data
    })
})
app.listen(2000,()=>{
    console.log("listen at prot no. 2000")
})