let d = 400 // Global scope

if (true){ // It is known as scope which execute the condition in this block
    let a = 10 
    const b = 20 // block scope 
    let c = 30 
}

console.log(a) //It will give error as a and b can not accessed outside scope in case of let and const
console.log(b)
console.log(c) // It will not give error as var can be used outside scope


function one (){
    const username = "Ayush "

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // it will give error as it is accesed outside the scope

    two() // if we comment above console then this two will execute and give username as Ayush

}
one() // if above two removed then nothing will execute in this 

