// Immediately Invoked Function Expression (IIFE)
(function chai () {
    console.log("DB connected");
})(); // It will execute immediately after its creation and print "DB connected" 
// If we do not use () at the end then it will not execute
// IIFE is used to create a new scope and avoid polluting the global scope