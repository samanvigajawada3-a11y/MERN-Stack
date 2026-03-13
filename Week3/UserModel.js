import {Schema,model,Types} from "mongoose"

// Create Cart Schema {product, count}
const cartSchema = new Schema({
    product : {
        type : Types.ObjectId,
        ref : "product" // name of the product model i.e, it goes to products collection because model name = plural of collection name
    },
    count : {
        type : Number,
        default : 1
    }
})

// Create User Schema(username, password, email, age)
const userSchema = new Schema({
    // Structure of User resource
    username : {
        type : String, // mongoose Schema type
        required : [true,"username requires"], // Mandatory to give the input
        minLength : [4,"Atleast 4 characters required"], // [minlength, error msg]
        maxLength : [10,"Username size exceeded 10 characters"],
        // Pattern : ["<regular expressions>"] --> while entering password, it says alteast One uppercase, digit and special character. This is possible using Patterns.
        unique : [true, "User name already exist"]
    },
    password : {
        type : String,
        required : [true, "password required"]
    },
    email : {
        type : String,
        required : [true, "email required"]
    },
    age : {
        type : Number
        // No required so, it is optional to give age as an input
    },
    cart : [cartSchema] // {product : "<id>",count : <3>}
},
{
        versionKey : false,
        timestamps : true
});

// Generate UserModel
export const userModel = model("user",userSchema)
