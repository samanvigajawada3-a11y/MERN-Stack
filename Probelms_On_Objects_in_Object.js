const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
// Problem 1
employees.splice(2,0,{
    eno: 106,
    name: "name",
    marks: [5, 6, 8],
  })
console.log(employees)

// Problem 2
let index;
for(v in employees){
    if(employees[v].name == "Kiran"){
        index = v
    }
}
employees.splice(index,1)
console.log(employees)

// // Problem 3
employees[2].marks.splice(2,1,75)
console.log(employees)