// const heroes = ["Ironman","Spiderman","Batman"]
// console.log(typeof heroes)


// let obj = {
//     name : "Akil",
//     age : 18
// }
// console.log(typeof obj);

// const myFun = function(){

// }
// console.log(typeof myFun);


//*************Stack Heap***************

let userOne = {
    email : "user@email.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "user2@yahoo.com"

console.log("User 1:");
console.table(userOne)
console.log("User 2:");
console.table(userTwo)
