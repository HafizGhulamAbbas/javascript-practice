// Slice
// It doesn't change the original array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr.slice()) // return whole array --> [1,2,3,4,5,6,7,8,9]
console.log(arr.slice(1, 4)) // start index is inclusive and end index is exclusive --> [ 2, 3, 4 ]

// If only 1 argument is given, its purpose changes to slice off and return the remaining elements
console.log(arr.slice(3)) // it will slice off elements till given index (not inclusive) and return the remaining elements --> [ 4, 5, 6, 7, 8, 9 ]
console.log(arr.slice(-2)) // it will slice off elements till give index from end (1,2,3,4,5,6,7) and return the remaining elements --> [ 8, 9 ]



// Splice
// It changes the original array
// Arguments:
// first argument: zero-based index (inclusive) from which to start removing elements
// second argument: deleteCount (The number of elements to remove)
// third and onward argument(s): Element(s) to insert into the array in place of the deleted elements.

var originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(originalArray.splice(2, 3)) // It starts deleting 3 elements (second argument) starting from the 2nd index --> [ 3, 4, 5 ]
console.log(originalArray) // It also changes the original array --> [ 1, 2, 6, 7, 8, 9 ]

// Let's insert something in place of the deleted items. 
// NOTE: Don't forget to comment the above code to see the expected output.

console.log(originalArray.splice(2, 3, "3 items are deleted from here")) // --> [ 3, 4, 5 ]
console.log(originalArray) // --> [ 1, 2, '3 items are deleted from here', 6, 7, 8, 9 ]

// Similarly, you can insert more than one elements in place of the deleted items
// console.log(originalArray.splice(2, 3, "item 1", "item 2")) // --> [ 3, 4, 5 ]
// console.log(originalArray) // --> [ 1, 2, 'item 1', 'item 2', 6, 7, 8, 9 ]

// ==============================================================================================================

// Reduce function

// Let's have a sum array element program

let sum = 0
let arrayToSum = [1, 2, 3, 4, 5]
for(let i = 0; i < arrayToSum.length; i++) {
    sum += arrayToSum[i]
}
console.log(sum)


// Now, using reduce function

const total = arrayToSum.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(total)

// Explanation: accumulator holds the sum, and currentValue holds the current iterator value. See the dry run of above program

// a = 1, c = 2 --> a = 3
// a = 3, c = 3 --> a = 6
// a = 6, c = 4 --> a = 10
// a = 10, c = 5 --> a = 15