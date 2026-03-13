// Create mini-exp application (Seperate route)
import exp from "express"
export const productApp = exp.Router()

let products = []

productApp.get("/products",(request,response)=>{
  // get all the products but not just a single one.
  response.json({message : "All Products found",payload : products})
})

// GET Route - Real all products by brand
productApp.get("/products/:brand",(request,response)=>{
  let brandOfUrl = request.params.brand
  let product = products.find(productObj => productObj.brand === brandOfUrl)
  if(product === undefined){
    return response.json({message : "Product not found"})
  }
  // If the product is not undefined, get that particular product rather than all
  response.json({message : "The Product found",payload : product})
})

// POST Route - Create a product
productApp.post("/products",(request,response)=>{
  let newProduct = request.body // Creating client's product
  products.push(newProduct) 
  response.json({message : "Product is created"})
})

// PUT ROUTE - Update a product
productApp.put("/products",(request,response)=>{
  let newProduct = request.body
  let index = products.findIndex(productObj => productObj.productId === newProduct.productId)
  if(index === -1){
    return response.json({messagee : "Product not found to update"})
  }
  products.splice(index,1,newProduct)
  response.json({message : "Product updated"})
})

// DELETE Route - Delete a product by id
productApp.delete("/products/:id",(request,response)=>{
  let idOfUrl = Number(request.params.id)
  let index = products.findIndex(productObj => productObj.productId === idOfUrl)
  if(index === -1){
    return response.json({message : "Product not found to delete"})
  }
  products.splice(index,1)
  response.json({message : "Product deleted"})
})