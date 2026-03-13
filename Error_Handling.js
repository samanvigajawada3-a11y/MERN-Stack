// Create Custom Error
const error = new Error("Error Message")
console.log(error.name)
console.log(error.message)
console.log(error.stack)

console.log("First")
try{
    console.log(a)
}
catch(err){
    console.log(err)
}
console.log("Second")
console.log("Third")