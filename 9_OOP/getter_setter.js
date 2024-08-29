class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `akil${this._password}`
    }
    
    set password(val){
        this._password = val
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email = val
    }
}

const userOne = new User('akil@email.com','abc')
console.log(userOne.password);
console.log(userOne.email);

