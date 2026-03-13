// Create mini-express app(Seperate route)
// Difference netween main express application and mini express application - main application contains instance of the HTTP server but mini application contains creates seperater route
import exp from 'express'
import {userModel} from "../models/UserModel.js"
import {hash,compare} from 'bcryptjs'
import jwt from "jsonwebtoken" // default export so, can import in any way.
import {verifyToken} from '../middlewares/verifyToken.js'

const {sign} = jwt // sign - synchronous method.
export const userApp = exp.Router()


// NOTE : Only first route of same type gets execute.(Eg : GET route - 1 is protected one and the second one is publlic. Whatever you write first in your code will gets executed. i.e, I commented out the protected route and tried to send the request then public route is executing. And the main thing is... We can write only one GET request in rest client for boht protected and public route.) 

// Real all users (Protected Route)
userApp.get("/users",verifyToken,async(req,res)=>{
    // read all users from db
    let usersList = await userModel.find()
    // send response
    res.status(201).json({message : "users",payload : usersList})
})

// Real a user by the email that we've sent for verifyToken
userApp.get("/user",verifyToken,async(req,res)=>{
    // Read a user email from req
    const emailOfUser = req.user?.email
    // const user = await UserModel.findOne({_id : uid}) -> Using findOne()
     // If you want to find the document using ID go with this otherwise use findOne()
    const user = await userModel.findOne({email : emailOfUser}).populate("cart.product") // cart.<productModel name> 
    if(user === null){
        return res.status(404).json({message : "User not found"})
    }
    // send response
    res.status(200).json({message : "User created",payload : user})
})

// ############### PUBLIC ROUTES ###################

// NOTE : If you wan to execute this public route then comment out the protected route because it is created fist so it executes first.
// Read all users
userApp.get("/users",async(req,res)=>{
    // read all users from db
    let usersList = await userModel.find()
    // send response
    res.status(201).json({message : "users",payload : usersList})
})

// Read a user by object id
userApp.get("/users/:id",async(req,res)=>{
    // Read object id from req params
    const uid = req.params.id
    // Find user by id
    // const user = await UserModel.findOne({_id : uid}) -> Using findOne()
    const user = await userModel.findById(uid) // If you want to find the document using ID go with this otherwise use findOne()
    if(user === null){
        return res.status(404).json({message : "User not found"})
    }
    // send response
    res.status(200).json({message : "User created",payload : user})
})

// DEFINE REOUTE
// Create new user
userApp.post("/users",async (req,res)=>{
    // get new user object from req
    const newUser = req.body
    const hashedPassword = await hash(newUser.password,10)
    newUser.password = hashedPassword
    // Create new user document - Mongoose helps us to create documents in API and itself saves them in the DB.
    const newUserDocument = new userModel(newUser)
    // Save
    await newUserDocument.save() // save() methods creates the document in the DB. await - blocking request
    // send response
    res.status(201).json({message : "User created"}) // If we send stats code then client can check the error through it.(Each stauts code has a seperate meaning i.e, 201 says User created.
})

// Update a User by id
userApp.put("/users/:id",async(req,res)=>{
    // get modified user from req
    const modifiedUser = req.body
    const hashedPassword = await hash(modifiedUser.password, 15)
    modifiedUser.password = hashedPassword
    const uid = req.params.id
    // find user by id and update using findByIdAndUpdate()
    const updatedUser = await userModel.findByIdAndUpdate(uid,{$set : {...modifiedUser}},{new : true,runValidators : true})
    if(updatedUser === null){
        return res.status(404).json({message : "User not found to update"})
    }
    // Send response
    res.status(201).json({message : "User modified",payload : updatedUser})
})

// Delete a user by id
userApp.delete("/users/:id",async(req,res)=>{
    // get id of the deleting document
    const uid = req.params.id
    // find user by id and update using findByIdAndDelete()
    let deletedUser = await userModel.findByIdAndDelete(uid)
    if(deletedUser === null){
        return res.status(404).json({message : "User not found to delete"})
    }
    // Send response
    res.status(200).json({message : "User deleted",payload : deletedUser})
})

// ###################### User authentication - loging ###########################

userApp.post("/auth",async(req,res)=>{
    // get user credentials obj from client
    const {email,password} = req.body // get credentials
    // We verify both email and password one after the other  so that user can know what is the mistake while loging.
    // verify email
    let user = await userModel.findOne({email : email})
    if(user === null){
        return res.status(404).json({message : "Invalid email"})
    }
    // verify password
    // To verify password : verify both plane password and also cost factor because we cannot rehash the existing hash code which is saved as password in DB
    // Compare the password using compare() method in bcryptjs module.
    // compare() method extracts cost factor from the hash code and compares the passwords.
    let result = await compare(password,user.password) // compares hashed password from data base and plain password use gave while logging.
    if(result === false){
        return res.status(404).json({message : "Invalid Password"})
    } 
    // If passwords are matched then 
    // Create a token (jsonwebtoken -jwt)
    const signedToken = sign({email : user.email}, process.env.SECRET_KEY, {expiresIn : 10000})
    // send token as httpOnly cookie
    // We're adding this data to the header.
    res.cookie("token",signedToken,{ // In first argument "SignedToken", donot give empty spaces.
        httpOnly : true,
        // sameSite : "strict" -> send the token only if both client application and server application runs in the same port.
        // sameSite : "none" -> possibility of CSRF attack. Here tokens can be accessed by everyone
        sameSite : "lax", // lax - relaxed restriction (Relaxations : send request to the same origin)
        secure : false // secure : true sends the tokens to only HTTPS protocols.
    }) 
    res.status(200).json({message : "Login Successful",payload : user})
})

// Upddate password
userApp.put("/auth",async(req,res)=>{
    // Get the credentials
    const {email,password,newPassword} = req.body
    // Get the document
    let user = await userModel.findOne({email : email})
    // First verify email
    if(user === null){
        return res.status(404).json({message : "Invalid email"})
    }
    // If email verified then verify the password.
    let result = await compare(password,user.password)
    if(result === false){
        return res.status(404).json({message : "Invalid password"})
    }
    // NOTE : We shouldn't generate new token here rather we directly update the password before token expires because token is already exist.
    // If password also verified then hash the new password and save it in the data base.
    let hashedPassword = await hash(newPassword,10)
    user.password = hashedPassword
    await user.save()
    res.status(200).json({message : "Password updated successfully",payload : user})
})

userApp.delete("/auth",async(req,res)=>{
    // Get credentials
    const {email, password} = req.body
    // Get the document
    let user = await userModel.findOne({email : email})
    // Verify the email
    if(user === null){
        return res.status(404).json({message : "Invalid email"})
    }
    // If email is valid then verify the password
    let result = await compare(password, user.password)
    if(result === false){
        return res.status(404).json({message : "Invalid password"})
    }
    // NOTE : We shouldn't generate new token here rather we directly delete the document before token expires because token is already exist.
    // If password is also valid then delete the document from DB
    let deletedUser = await userModel.deleteOne({email : user.email})
    if(deletedUser.deletedCount === 0){
        return res.status(404).json({message : "User not found to delete"})
    }
    res.status(200).json({message : "User deleted successfully",payload : user})

})

// Add product to user cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    // get product id from url parameter
    const productId = req.params.pid
    // get the email of the user
    const emailOfUser = req.user?.email
    // get the user from middleware
    const user = await userModel.findOne({email : emailOfUser})
    // Check if the product exist in the cart or not.
    const result = user.cart.find(item => item.product.equals(productId))
    if(result){
        result.count ++
        await user.save()
        return res.status(400).json({message : "Product already exist in your cart"})
    }
    // add product to cart
    user.cart.push({product : productId,count : 1})
    await user.save()
    res.status(200).json({message : "Product added to cart"})   
})