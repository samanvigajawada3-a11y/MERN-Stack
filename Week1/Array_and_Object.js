// Array
let marks = [98,97,96,95]
// for - of loop
for(let v of marks){
    console.log()
}

// Objects
let student = {
    sno : 100,
    name : "Samanvi"
}
console.log(student.sno)
console.log(student.name)

// Array of Objects
let emps = [
    {eno : 1,name : "bhanu"},
    {eno : 2,name : "vikas"},
    {eno : 3,name : "varun"}
]
for(v of emps){
    console.log(`eno is ${v.eno} and name is ${v.name}`)
}

// Object of objects, functions 
let Student = {
    firstName : "ravi",
    lastName : "kiran",
    marks : [93,39,94],
    aaddress:{
        city: "hyd",
        pincode : "3453"
    },
    getFullName : function(){
        // Without this keyword, js throws an error while accessing the getFullName() function
        return this.firstName + this.lastName
    },
    averageMarks :function(){
        let avg = 0
        for(let i = 0; i < marks.length; i++){
            avg += marks[i]
        }
        return avg/marks.length
    }
}
console.log(Student.getFullName())
console.log(Student.averageMarks())
console.log(Student.aaddress.city)
console.log(Student.aaddress.pincode)