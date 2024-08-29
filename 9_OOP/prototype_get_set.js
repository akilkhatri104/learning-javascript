function User(email,password){
    this._email = email
    this._passord = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(val){
            this._email = val
        }
    })

    Object.defineProperty(this,'password',{
        get:function(){
            return this._password
        },
        set:function(val){
            this._password = val
        }
    })
}

const userOne = new User('akil@google.com','asd')
console.log(userOne.email);
console.log(userOne.password);

