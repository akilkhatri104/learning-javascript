function multiplyBy5(n){
    return n*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score of ${this.username} is ${this.score}`);
    
}

const chai = new createUser("chai",25)
const tea = new createUser('Tea',250)

chai.printMe()