//singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Akil",
    age: 18,
    [mySym]:"myKey1",
    location: "Gujarat",
    email: "akil@email.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)
// jsUser.email = "ak"
// console.log(jsUser["email"]);

jsUser.greetings = function(){
    console.log(`Hello ${this.name}!`);
}

jsUser.greetings()
console.log(jsUser.greetings());
