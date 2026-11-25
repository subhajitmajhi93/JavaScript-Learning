//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack(primitive) Heap(non primitive)

let myoutubename="Subhajit";
let myanothername=myoutubename;

 myanothername="abc";

//This is the example of stack as  premivite object creates in stack memory as both giving 
//diffent  result as it is a copy of myoutubename in myanothername
console.log(myoutubename);
console.log(myanothername);

let UserObjectOne={ name :"Subhajit Majhi",
                    Email: "subhajitmajhi93@gmail.com"
                   }
let UserObjecttwo=UserObjectOne;
UserObjecttwo.Email="S.majhi@2025.com"

//This is the Exdample of Heap as  non premivite object creates in heap memory as both giving 
//same result
console.log(UserObjectOne.Email);
console.log(UserObjecttwo.Email);


