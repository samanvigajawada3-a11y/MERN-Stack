// Write a function that receives any no of args and return their sum
function test(...a){ // Rest Parameter packs the arguments into an array 
    sum = 0
    for(v of a){
        sum = sum + v
    }
    return sum
}
console.log(test(10,20,30,40))