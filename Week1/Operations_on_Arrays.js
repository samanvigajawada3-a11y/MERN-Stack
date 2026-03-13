let testArray = [20,30,53,64,24,6,8]
// Dynamic Insertion

// To insert at the end
testArray.push(87)
console.log(testArray)
// To insert at the begining
testArray.unshift(6)
console.log(testArray)
// Index based insertion
testArray.splice(2,2,123) // (index, deleteCount, element)
console.log(testArray)

// Dynamic Deletion

// To delete at the begining
let removedElement = testArray.shift()
console.log(testArray)
// To delete at the end
testArray.pop()
console.log(testArray)
// Index based deletion
testArray.splice(2,2)
console.log(testArray)

// Dynamic update - both insertion and deletion

// Can perform both insertion and deletion at the same time using splice() method.
let testArray2 = [1,2,3,4,5,6,7]
testArray2.splice(2,3,4)
console.log(testArray2)