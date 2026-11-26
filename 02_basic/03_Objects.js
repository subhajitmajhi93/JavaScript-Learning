//singleton

//Object literals
//Object.create
const mysim=  Symbol("key1");
const jsUser={

    name: "Subhajit",
    "full name": "Subhajit Majhi",
    age: 35,
    [mysim]: "mykey1",
    location: "oslo",
    email: "subha@gmail.com",
    isLoggedIn: false,
    LastLogin: ["Monday","TuesDay"]

}

console.log(jsUser.email);
//console.log(jsUser.full name); // this will not work in this way because it is divied into parts like full and name 
console.log(jsUser["email"]);
console.log(jsUser["full name"]); 
console.log(typeof jsUser["email"]);
console.log(jsUser[mysim]);
console.log(typeof jsUser[mysim]);

jsUser.email='s@gmail.com';
//Object.freeze(jsUser);
jsUser.email='m@gmail.com';
console.log(jsUser["email"]);
console.log(jsUser);

/* jsUser.greeting= function(){
    console.log("Hello subhajit");
}

jsUser.greetingTwo= function(){
    console.log(`Hello  ${this.name}`);
}
jsUser.greeting();
jsUser.greetingTwo();
 */