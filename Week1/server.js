import exp from "express";
// Creation of HTTP Server
const app=exp(); 
// Importing User and Product API routes.
import {userApp} from "./userAPIs.js"
import {productApp} from "./productAPIs.js"
// Use body parser middleware
app.use(exp.json()) // Without this line, request body is undefined.

// Middlewares
// forward req to userAPI if path starts with /user-api
app.use('/user-api',userApp)
// forward req to productAPI if path starts with /product-api
app.use('/product-api',productApp)

const port = 1500
app.listen(port, ()=>console.log(`server listening to port ${port}...`)) 
