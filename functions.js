let name = "Hafiz Ghulam Abbas"

// function declaration
function printName() {
    console.log("My name is " + name)
}
printName()


// function expression
const myFunc = function () {
    console.log("My name is " + name)
}
myFunc()


// arrow function
const arrowFunc = () => console.log("My name is " + name)
arrowFunc()