const user = {
    name: "Ayush",
    price: 999 ,

    welcoomeMessage: function(){
        console.log("Welcome " + this.name + " Your price is " + this.price);
    }
}
user.welcoomeMessage(); // it will give Welcome Ayush Your price is 999
user.username = "Sam" // it will replace the name property of user object
user.welcoomeMessage(); // it will give Welcome Sam Your price is 999

const addTwo = (num1, num2) => ({ username: "Ayush" }) // if we use curly braces then we have to use parenthesis to return object
console.log(addTwo(5, 10)); // it will give { username: 'Ayush' } // if we do not use parenthesis then it will give undefined 
// here arrow function is used to return object directly