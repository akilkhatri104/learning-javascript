function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("I");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}


// addTwoNumbers(1,5)

function loginUserMsg(username = "User"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("AKIL"));

function calculateCartPrice(n1,n2,...num1){
    return num1
}

// console.log(calculateCartPrice(24,42,54,55));

const user = {
    username:"Akil",
    price: 450
}

function handleObject(anyObject){
    console.log(`${anyObject.username} has spent ${anyObject.price} rs`);
}


// handleObject(user)

const myArr = [12,4,5,6,76]

function returnThirdValue(arr){
    return arr[2]
}

console.log(returnThirdValue(myArr));