// how javascript works?
// Javascript is a single threaded synchronous language
// Single threaded means it can do one thing at a time
// it has 3 phases


// 1. Memory allocation phase
// In this phase, javascript engine allocates memory for variables and functions
// It scans the code and allocates memory for all the variables and functions

// Example:
let x = 10;
function add(y) {
    return x + y;
}
// In the memory allocation phase, memory is allocated for variable x and function add
// 2. Code execution phase
// In this phase, javascript engine executes the code line by line
// It executes the code in the order it is written

// Example:
let result = add(5);
console.log(result); // it will give 15
// In the code execution phase, the function add is called with argument 5
// The function add returns the sum of x and y which is 10 + 5 = 15
// The result is then logged to the console

// 3. Garbage collection phase
// In this phase, javascript engine frees up memory that is no longer needed
// It removes variables and functions that are no longer accessible

// Example:
function foo() {
    let a = 20;
    return function bar() {
        console.log(a);
    };
}
let baz = foo();
baz(); // it will give 20
// In this example, the variable a is accessible inside the function bar
// After the function foo is executed, the variable a is no longer accessible
// The garbage collector will free up the memory allocated for variable a when it is no longer needed
// This is how javascript works in 3 phases: memory allocation, code execution, and garbage collection

 // call stack and heap memory are used in javascript to manage memory allocation and deallocation
// Call stack is used to manage function calls and execution context
// Heap memory is used to store objects and variables
//example of call stack and heap memory
function outer() {
    let outerVar = "I am from outer function";

    function inner() {
        let innerVar = "I am from inner function";
        console.log(outerVar); // Accessing outer function variable
    }

    inner(); // Calling inner function

    console.log(innerVar); // This will cause an error as innerVar is not accessible here
}

outer(); // Calling outer function
// In this example, when the outer function is called, a new execution context is created and pushed onto the call stack
// The variable outerVar is stored in the heap memory
// When the inner function is called, another execution context is created and pushed onto the call stack
// The variable innerVar is also stored in the heap memory
// When the inner function tries to access outerVar, it can do so because of lexical scoping
// However, when the outer function tries to access innerVar, it results in an error because innerVar is not in its scope
// Once the functions complete execution, their execution contexts are popped off the call stack and memory is freed up by the garbage collector
