import exp from "express";
// Creation of HTTP Server
const app=exp(); 
// Use body parser middleware
app.use(exp.json())

const port = 1500
let users = [] // Test data ( In real life applications we use DataBase instead of this)
app.listen(port, ()=>console.log(`server listening to port ${port}...`)) 

// Creation of API

app.get('/users',(req,res)=>{ // /users - url path.
    // read all users and send to the client
    res.json({message : "all users",payload : users})
})

// Route to read user by id
app.get('/users/:id',(req,res)=>{ // /users - url path.
    // get user id from url param
    let idOfUrl = Number(req.params.id)
    // find user
    let user = users.find(userObj => userObj.id === idOfUrl)
    // if user not found 
    if(user === undefined){
        return res.json({message:"User not found"})
    }
    // send response
    res.json({message : "the user",payload : user})
})

app.post('/users',(req,res)=>{
    // get user from client 
    const newUser = req.body;
    // push user into users
    users.push(newUser)
    // Send the response
    res.json({message : "User Created"})

})

app.put('/users',(req,res)=>{
    // get modified user from the client
    let modifiedUser = req.body;
    // get index of existing user in users array
    let index = users.findIndex(userObj => userObj.id === modifiedUser.id)
    if(index === -1){
        return res.json({message : "User not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    // send response
    res.json({message:"Users updated"})
})
// Client have to send ID or name or any data to delete the user. In this case we send the ID through end point.
// We receive the id through the url path like in the below.
app.delete('/users/:id',(req,res)=>{ // The parameters that we send through the url will be string so, we need to convert it into number.
   // get id of user from url parameter
   let idOfUrl = Number(req.params.id) // {id : '5'}
   // find index of the user
   let index = users.findIndex(userObj => userObj.id === idOfUrl)
   // if user not found
   if(index === -1){
    return res.json({message : "User not found to delete"})
   }
   // delete user by index
   users.splice(index,1)
   // send the response
   res.json({message:"Users deleted"})
})