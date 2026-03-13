// Problem Statement : Library Management System
class Book{
    // properties
    title
    author
    pages
    isAvailable = true
    constructor(title,author,pages,isavailable){
        this.title = title
        this.author = author
        this.pages = pages
        this.isAvailable = this.isAvailable
    }
    borrow(){
        if (this.isAvailable == false){
            console.log(`${this.title} is not available`)
        }
    }
    returnBook(){
        if(this.isAvailable == true){
            console.log(`${this.title} is available`)
        }
    }
    getInfo(){
        return `The ${this.title} by ${this.author} (${this.pages})`
    }
    isLongBook(){
        if(this.pages > 300){
            return true
        }
        return false
    }
}
// Creating Objects
let b1 = new Book("The Housemaid 1","Frieddan",310,true)
b1.returnBook()
console.log(b1.getInfo())
console.log(b1.isLongBook())