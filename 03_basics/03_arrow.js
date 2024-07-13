const user = {
    username: "Akil",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()
// console.log(this);

// function fun(){
//     let username = "Akil"
//     console.log(this.username);
// }

// fun()

// const fun = () => {
//     let username = "Akil"
//     console.log(this);    
// }

// fun()

// const addTwo = (n1,n2) => {
//     return n1+n2
// }

// const addTwo = (n1,n2) => n1+n2
// const addTwo = (n1,n2) => (n1+n2)

const addTwo = (n1,n2) => ({username:"Akil"})


// console.log(addTwo(3,4));

const myArr = [1,2,3,4,5]

