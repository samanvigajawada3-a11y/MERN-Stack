// Statement : I'll send 10k tomorrow
// Promiser Creator
console.log("Made a promise to send 10k tomorrow.....")
let futureCondition = false
const promiseObj = new Promise((fullfilled, rejected)=>{
    setTimeout(() => {
        if(futureCondition === true){
            fullfilled("I've sent you 10k just now!")
        }
        else{
            fullfilled("Sorry for the delay... I'll will send you the money within few days")
        }
    }, 2000);
})

// Promise Consumer
promiseObj
.then((message)=>{console.log(message)})
.catch((errorMessage)=>{console.log(errorMessage)})