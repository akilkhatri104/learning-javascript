String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
    
}

const username = "   AKIL    "
username.trueLength()
"Akil".trueLength()
"Hey".trueLength()