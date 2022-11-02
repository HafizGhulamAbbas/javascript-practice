function printMyName() {
    if(true) {
        var name = "Hafiz Ghulam Abbas"
        console.log("My name is " + name)
    }    
    console.log("My name is " + name) // It displays the name if 'var' const is used to declare the variable but gives error if 'let' is used: ReferenceError: name is not defined
}

printMyName()

// function expression
const myFunc = function() {
    if(true) {
        var name = "Hafiz Ghulam Abbas"
        console.log("My name is " + name)
    }    
    console.log("My name is " + name) // It displays the name if 'var' const is used to declare the variable but gives error if 'let' is used: ReferenceError: name is not defined
}
myFunc()


// arrow function
const arrowFunc = () => {
    if(true) {
        var name = "Hafiz Ghulam Abbas"
        console.log("My name is " + name)
    }    
    console.log("My name is " + name) // It displays the name if 'var' const is used to declare the variable but gives error if 'let' is used: ReferenceError: name is not defined
}
arrowFunc()