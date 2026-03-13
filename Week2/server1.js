// Create HTTP Server

import exp from "express";
// naming convention 'app' for better understaning
const app=exp(); // This function creates an express application and returns i.e, creates our own server
// Till now server is ready

const port = 3000 // port number is like door number to the server.We can decide our own port number
// We can create our own server in js
// assign port number to HTTP server. 
// Below line starts the server on port 3000.
app.listen(port, ()=>console.log(`server listening to port ${port}...`)) // Web server is created.
// internally what happens? Creates server at - http://localhost:3000 
// localhost : specifying that server is running in our computer

// Creating Custom middlewares
function middleware1(req,res,next){
    // NOOTE : If we dosen't give any response or call the next middleware then this middleware holds the request for infinite time i.e, until you stop the server and it dosen't allow you to reach the end of the code.
    
    // response
    // res.json({message : "Response of middleware1"})
    // If response executes then it dosen't execute further rather it directly terminates the function.
    // next middleware i.e, middleware2
    next() // If response dosen't execute the it comes to this line and goes to the next middleware
}
function middleware2(req,res,next){
    // response
    res.json({message : "Response of middleware2"})
    // If above response executes then it dosen't goes to the middleware3
    // next()
}
function middleware3(req,res,next){
    // response
    res.json({message : "Response of middleware3"})
}

// middleware call
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)


// Create API (REST API) Representational State Transfer API

// ROUTE to handle GET request of client
app.get('/users',(req,res)=>{ // /users - url path.
    // send the response to the client
    res.json({message:"This response for get users request"}); // Java Script object created here.
    // To check the request sent or not just serach it in any browser with end point.
    // We use req parameter while creating front end application.
})
// ROUTE to handle POST request of client
app.post('/users',(req,res)=>{
    // send the response to the client
    res.json({message:"This response to create users request"})
})
// ROUTE to handle PUT request of client
app.put('/users',(req,res)=>{
    // send the response to the client
    res.json({message:"This response to update users request"})
})
// ROUTE to handle DELETE request of client
app.delete('/users',(req,res)=>{
    // send the response to the client
    res.json({message:"This response delete users request"})
})