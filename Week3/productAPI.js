import exp from 'express'
import {productModel} from "../models/ProductModel.js"
export const productApp = exp.Router()

// Create a new prouct
productApp.post("/products",async(req,res)=>{
    // get new user from req
    const newUser = req.body
    // Create new product document
    const newProductDocument = new productModel(newUser)
    // save
    await newProductDocument.save()
    res.status(201).json({message : "Product created"})
})

// Read all the products
productApp.get("/products",async(req,res)=>{
    let products = await productModel.find()
    res.status(201).json({message : "Products",payload : products})
})

// Read a products by id
productApp.get("/products/:id",async(req,res)=>{
    const idOfUrl = req.params.id
    let product = await productModel.findById({_id : idOfUrl})
    if(product === null){
        return res.status(404).json({message : "Product not found"})
    }
    res.status(200).json({message : "product found",payload : product})
})

// Update a product by id
productApp.put("/products/:id",async(req,res)=>{
    const modifiedUser = req.body
    const idOfUrl = req.params.id
    // findByIdAndUpdate() returns original product until we add an argument : {$set : {...modifiedUser}}
    const updatedProduct = await productModel.findByIdAndUpdate(idOfUrl,{$set : {...modifiedUser}},{new : true, runValidators : true})
    if(!updatedProduct){
        return res.status(404).json({message : "Product not found to update"})
    }
    res.status(200).json({message : "Product found to update",payload : updatedProduct})
})

// Delete a product by id
productApp.delete("/products/:id",async(req,res)=>{
    // Store the index
    let idOfUrl = req.params.id
    const deletedProduct = await productModel.findByIdAndDelete(idOfUrl)
    if(!deletedProduct){
        return res.status(404).json({message : "Product not found to delete"})
    }
    res.status(200).json({message : "Product deleted",payload : deletedProduct})
})