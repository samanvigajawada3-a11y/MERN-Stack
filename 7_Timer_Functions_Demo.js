// Assignment 1 - Exam portal simulator :
function studentSubmit(){
    console.log("Exam submitted successfully")
    setTimeout(()=>{
        console.log("Evaluating answers...")
    },2000) // 2 seconds = 2000 milli seconds
    setTimeout(()=>{
        console.log("Result : Pass")
    },4000)
}
studentSubmit()

// Assignment 2 - OTP Countdown Simulator (Console App)
function OTPSending(){
    console.log("OTP sent Successfully")
    let seconds = 10
    let intervalId = setInterval(()=>{
        seconds--
        console.log(`${seconds}`)
        if(seconds === 0){
        console.log("Resend OPT")
        clearInterval(intervalId)
    }
    },1000)
}
OTPSending()