//ES6

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User('Akil','akil@email.com',123)
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

//behind the scene

function User(username,email,password){
    this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new User('John','john@google.com','123AB')
console.log(userTwo.changeUsername());
console.log(userTwo.encryptPassword());
