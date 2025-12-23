// singleton

// object literals 

const JsUser = { // It is way to create object 
    name: "Ayush"
    age : 21 
    location : "Delhi"
    isLoggedIn : true
}

console.log(JsUser."name") // It is use to access objects in js

JsUser.greeting = function(){
    console.log("Hello Js user"); // It is a function use to greet  
}

console.log(JsUser.greeting()); 