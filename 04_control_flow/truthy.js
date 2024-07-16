const userEmail = []

if (userEmail) {
    console.log("Got User Email!");
}else console.log("Don't Have User Email");

//falsy values:
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values:
//other that the falsy values all the other are truthy values
//some truthy values which may surprise:
//"0",'false'," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);