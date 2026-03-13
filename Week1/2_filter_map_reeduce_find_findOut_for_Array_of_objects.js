// Assignment 1
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
]
let r1 = cart.filter(obj => obj.inStock === true)
console.log(r1)
let r2 = cart.map(obj =>{
    return{
        name : obj.name,
        totalPrice : obj.price
    }
})
console.log(r2)
let r3 = cart.reduce((acc,cur)=> acc+cur.price,0)
console.log(r3)
let r4 = cart.find(element => element.name === "Mouse")
console.log(r4)
let r5 = cart.findIndex(element => element.name === "Keyboard")
console.log(r5)

// Assignment 2
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
]
r1 = students.filter(obj => obj.marks >= 40)
console.log(r1)
r2 = students.map(obj =>{
  let grade;
  if(obj.marks >= 90){
    grade = 'A'
  }
  else if(obj.marks >= 75){
    grade = 'B'
  }
  else if(obj.marks >= 60){
    grade = 'C'
  }
  else{
    grade = 'D'
  }
  return{...obj, grade}
})
console.log(r2)
r3 = students.reduce((acc,cur)=> acc+cur.marks,0)
console.log(r3/students.length)
r4 = students.find(element => element.marks === 92)
console.log(r4)
r5 = students.findIndex(element => element.name === "Kiran")
console.log(r5)

// Assignment 3
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
]
r1 = employees.filter(obj => obj.department === 'IT')
console.log(r1)
r2 = employees.map(obj => obj.salary + 10*(obj.salary)/100)
console.log(r2)
r3 = employees.reduce((acc,cur)=> acc+cur.salary,0)
console.log(r3)
r4 = employees.find(element => element.salary === 30000)
console.log(r4)
r5 = employees.findIndex(element => element.name === 'Neha')
console.log(r5)

// Assignment 4
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
]
r1 = movies.filter(obj => obj.genre === 'Sci-Fi')
console.log(r1)
r2 = movies.map(obj => obj.title + " ("+obj.rating+")")
console.log(r2)
r3 = movies.reduce((acc,cur)=> acc+cur.rating,0)
console.log(r3)
r4 = movies.find(element => element.title === "Joker")
console.log(r4)
r5 = movies.findIndex(element => element.title === 'Avengers')
console.log(r5)

// Assignment 5
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
]
r1 = transactions.filter(obj => obj.type === 'credit')
console.log(r1)
r2 = transactions.map(obj => obj.amount)
console.log(r2)
r3 = transactions.reduce((acc,curr)=>acc+curr.amount,0)
console.log(r3)
r4 = transactions.find(element => element.type === 'debit')
console.log(r4)
r5 = transactions.findIndex(element => element.amount === 10000)
console.log(r5)