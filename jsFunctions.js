// Slice
// It doesn't change the original array

var arr = [1,2,3,4,5,6,7,8,9]

console.log(arr.slice()) // return whole array --> [1,2,3,4,5,6,7,8,9]
console.log(arr.slice(1,4)) // start index is inclusive and end index is exclusive --> [ 2, 3, 4 ]

// If only 1 argument is given, its purpose changes to slice off and return the remaining elements
console.log(arr.slice(3)) // it will slice off elements till given index (not inclusive) and return the remaining elements --> [ 4, 5, 6, 7, 8, 9 ]
console.log(arr.slice(-2)) // it will slice off elements till give index from end (1,2,3,4,5,6,7) and return the remaining elements --> [ 8, 9 ]