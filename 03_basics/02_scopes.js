let a = 400
if (true) {
    let a = 10
    var c = 30
    const b = 20
    // console.log(a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Akil"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Akil"
    if(true){
        const website = " YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



//+++++++++++++++ Interesting ++++++++++++++

console.log(addOne(3))
function addOne(num){
    return num+1
}


addTwo(5)
const addTwo = function(num){
    return num+2
}

