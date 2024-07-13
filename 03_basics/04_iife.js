// Immediatly Invoked Function Expression (IIFE)

// function connectDataBase(){
//     console.log("DB Connected");
// }
// connectDataBase()

(function connectDataBase(){
    //named IIFE
    console.log("DB Connected");
})();

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
} )("Akil");
console.log("BOTH FUNCTION EXECUTED");
//iife systex: (function_defination)(function_execution/arguements) 