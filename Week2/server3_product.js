// Create product API wiht below operations 
  // Create a new product ({productId, name, brand, price})
  // Read all products
  // Read all products by brand
  // Update a product
  // Delete a product by id

import exp from "express"
  // Creation of HTTP server
const app = exp()
app.use(exp.json()) // Use body body parser middleware
let products = []

const port = 5000
app.listen(port,()=>console.log(`Server is listening to port ${port}`))

// Creation of API (Creating Routes)
// GET Route - Read all products
app.get("/products",(request,response)=>{
  // get all the products but not just a single one.
  response.json({message : "All Products found",payload : products})
})

// GET Route - Real all products by brand
app.get("/products/:brand",(request,response)=>{
  let brandOfUrl = request.params.brand
  let product = products.find(productObj => productObj.brand === brandOfUrl)
  if(product === undefined){
    return response.json({message : "Product not found"})
  }
  // If the product is not undefined, get that particular product rather than all
  response.json({message : "The Product found",payload : product})
})

// POST Route - Create a product
app.post("/products",(request,response)=>{
  let newProduct = request.body // Creating client's product
  products.push(newProduct) 
  response.json({message : "Product is created"})
})

// PUT ROUTE - Update a product
app.put("/products",(request,response)=>{
  let newProduct = request.body
  let index = products.findIndex(productObj => productObj.productId === newProduct.productId)
  if(index === -1){
    return response.json({messagee : "Product not found to update"})
  }
  products.splice(index,1,newProduct)
  response.json({message : "Product updated"})
})

// DELETE Route - Delete a product by id
app.delete("/products/:id",(request,response)=>{
  let idOfUrl = Number(request.params.id)
  let index = products.findIndex(productObj => productObj.productId === idOfUrl)
  if(index === -1){
    return response.json({message : "Product not found to delete"})
  }
  products.splice(index,1)
  response.json({message : "Product deleted"})
})