let person = {
    name : "ravi",
    address : {
        city : "hyd",
        pincode : 77777
    }
}
// Shallow Copy - using Spread Operator
// let copyPerson = {...person}
// person.name = "bhanu" // If we change outer object elements, it dosen't  get changed in the copyed object
// person.address.city = "Chennai" // If we change inner object elements, it get changes in the 
// console.log(person)
// console.log(copyPerson)

// Deep Copy - using structuredClone()
let copyPerson = structuredClone(person)
person.name = "bhanu" // changes only outer object elements but not the inner object elements
person.address.city = "Chennai"
console.log(person)
console.log(copyPerson)