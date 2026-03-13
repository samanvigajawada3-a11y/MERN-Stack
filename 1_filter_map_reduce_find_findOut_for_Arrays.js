// Assignment 1
const temperatures = [32, 35, 28, 40, 38, 30, 42]
// filter() method
let r1 = temperatures.filter(x => x > 35)
console.log(r1)
//  map() method
let r2 = temperatures.map(x => (x*1.8)+32)
console.log(r2)
// reduce() method
let r3 = temperatures.reduce((acc,cur)=>acc+cur)
console.log(r3)
// find() method
let r4 = temperatures.find(element => element > 40)
console.log(r4)
// findIndex() method
let r5 = temperatures.findIndex(element => element === 28)
console.log(r5)

// Assignment 2
const courses = ["javascript", "react", "node", "mongodb", "express"]
r1 = courses.filter(x => x.length > 5)
console.log(r1)
r2 = courses.map(x => x.toUpperCase())
console.log(r2)
r3 = courses.reduce((acc,cur)=> acc+" | "+cur)
console.log(r3)
r4 = courses.find(element => element === "react")
console.log(r4)
r5 = courses.findIndex(element => element === 'node')
console.log(r5)

// Assignment 3
const marks = [78, 92, 35, 88, 40, 67]
r1 = marks.filter(x => x >= 40)
console.log(r1)
r2 = marks.map(x => x+5)
console.log(r2)
r3 = marks.reduce((acc,cur)=> acc>cur?acc:cur)
console.log(r3)
r4 = marks.find(element => element < 40)
console.log(r4)
r5 = marks.findIndex(element => element === 92)
console.log(r5)