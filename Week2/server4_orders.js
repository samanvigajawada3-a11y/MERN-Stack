import exp from "express"
// Creating HTTP server
const app = exp()
app.use(exp.json()) // body parser middleware
let orders = []
const port = 3000
app.listen(port, ()=>{console.log(`Server is running on the port ${port}`)})

// Creating API routes
// GET route
app.get('/orders',(req,res)=>{
    res.json({message : "all Orders",payload : orders})
})
// GET route using order id
app.get('/orders/:id',(req,res)=>{
    let idOfUrl = Number(req.params.id)
    let order = orders.find(orderObj => orderObj.id === idOfUrl)
    if(order === undefined){
        return res.json({message : "Order not found"})
    }
    res.json({message : "the order",payload : order})
})
// POST route 
app.post('/orders',(req,res)=>{
    const order = req.body
    orders.push(order)
    res.json({message : "Order created"})
})
// PUT route
app.put('/orders',(req,res)=>{
    const modifiedOrder = req.body
    let index = orders.findIndex(orderObj => orderObj.id === modifiedOrder.id)
    if(index === -1){
        return res.json({message : "Order not found to update"})
    }
    orders.splice(index,1,modifiedOrder)
    res.json({message : "Order updated"})
})
// DELETE route using order id
app.delete('/orders/:id',(req,res)=>{
    let idOfUrl = Number(req.params.id)
    let index = orders.findIndex(orderObj => orderObj.id === idOfUrl)
    if(index === -1){
        return res.json({message : "Order not found to delete"})
    }
    orders.splice(index,1)
    res.json({message : "Order deleted"})
})