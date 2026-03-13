// Storing a function in a variable
let test1 = function(){
    console.log("Hello")
}
console.log(test1()) // returns undefined

// returning a function in a function
let createGame = function(playerName){
    return function(level){
        return `Hey ${playerName}, you are at level - ${level}`
    }
}
level = createGame("name")
console.log(level(1))
console.log(level(2))
console.log(level(3))

// function as an argument to another function
let makePayment = function(amount, paymentType){
    console.log(`Payment of ${amount} is started`)
    paymentType()
}

let UPIPayment = function(){
    console.log("UPI Payment done!")
}
let cardPayment = function(){
    console.log("Card Payment done!")
}
// UPIPayment and cardFunction are Callback functions
// Call back functions : Funtion that passed as arg to another function
makePayment(2000,UPIPayment) // DO not mention () here
makePayment(2000,cardPayment)
