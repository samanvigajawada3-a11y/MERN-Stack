import {Schema,model} from "mongoose"
// Create Product Schema(productId, productName, price, brand)
const productSchema = new Schema({
    productId :{
        type : String,
        required : [true,"product Id required"]
    },
    productName : {
        type : String,
        required : [true,"product name required"],
        unique : [true,"Product name already exist"]
    },
    price : {
        type : Number,
        required : [true, "product price required"],
        max : [50000,"Product price exceeds"],
        min : [10000, "Product price should be more than 10,000"]
    },
    brand : {
        type : String,
        required : [true, "product brand required"]
    }
})

// Generate productModel
export const productModel = model("product",productSchema)