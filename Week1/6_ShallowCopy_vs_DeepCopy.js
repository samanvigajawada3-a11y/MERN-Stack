 // Assignment 1 - Shallow Copy using Spread Operator
 const user = {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
  }
}
let copyUser = {... user}

copyUser.name = "Bhanu"
// Using shallow copy, if we change outer object element of copied object, it dosen't get change in the original object.
// If we change inner object elements of copied object, the original object's inner object elements also get changed.
copyUser.preferences.theme = "light"
copyUser.log = "copyUser"
user.log = "user"

console.log(user)
console.log(copyUser)

// Assignment 2 
const order = {
    orderId: "ORD1001",
    customer: {
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
      { product: "Laptop", price: 70000 }
    ]
}

copyOrder = structuredClone(order)
