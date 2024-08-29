class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createID(){
        return `123`
    }
}

const userOne = new User('Akil')
console.log(userOne.createID())