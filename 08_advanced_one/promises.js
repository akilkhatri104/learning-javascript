const promiseOne = new Promise( (resolve,reject) => {
    //Do an Async task
    // DB calls,cryptography,network calls
    setTimeout( () => {
        console.log("Async task is complete");
        resolve()
    } ,1000)
} )

promiseOne.then( () => {
    console.log("Promise consumed");
}  )

new Promise( (resolve,reject) => {
    setTimeout( () => {
        console.log("Async Task 2");
        resolve()
    } ,1000)
} ).then( () => {
    console.log("Async 2 resolved");
} )


const promiseThree = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve({username:"AKIL",email:"AKIL@email.com"})
    } ,1000)
} )

promiseThree.then( (user) => {
    console.log(user);
} )


const promiseFour = new Promise( (resolve,reject) => {
    setTimeout( () => {
        let error = true
        if(!error){
            resolve({username:"AKILK",password:"123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    } ,1000)
} )

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
} )
.then( (username) => {
    console.log(username);
} )
.catch( (e) => {
    console.log(e);
} )
.finally( () => {
    console.log("The promise is either resolved or rejected");
} )


const promiseFive = new Promise( (resolve,reject) => {
    setTimeout( () => {
        let error = true
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    } ,1000)
} )

async function consumePromiseFive(){
    try {
        const response  = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/akilkhatri104')
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/akilkhatri104')
.then( response => {
    return response.json()
} )
.then( data => {
    console.log(data);
} )
.catch( e => {
    console.log(e);
})  