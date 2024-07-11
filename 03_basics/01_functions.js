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

console.log(loginUserMsg("AKIL"));
