// Create HTTP Server
import exp from "express"
import {connect} from "mongoose"
import {userApp} from "./APIs/userAPI.js"
import {productApp} from "./APIs/productAPI.js"
import cookieParser from "cookie-parser"
import {config} from 'dotenv'

config() // process -> process.env.PORT , process.env.DB_URL

const app = exp() 
// add body parser
app.use(exp.json())
app.use(cookieParser())
// Forward req to userApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)


const port = process.env.PORT || 4000 // Providing fall back port number. If free port is not available then it takes 4000.
// connect to DB server
async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("DB connection success")
        // start server
        app.listen(port,()=>{console.log(`Server is running on the port ${port}.....`)})
    }catch(err){
        console.log("Error occured in DB : ",err)
    }
}
connectDB()

// Error handling middleware
app.use((err,req,res,next)=>{
    if(err.name === "ValidationError" || err.name === "CastError"){
        return res.status(400).json({message : "error occured", error : err.name})
    }
    res.json({message : "error occured", error : err.message})
})